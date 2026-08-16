/* Visit Førde — renders window.PLACES from data.js, with search and distance filters. */

const GROUPS = [
  { id: "walk", label: "On foot",     title: "On foot from the centre" },
  { id: "near", label: "Under 20 min", title: "Under 20 minutes by car" },
  { id: "day",  label: "40–60 min",   title: "A day out — 40 minutes to an hour" },
  { id: "far",  label: "Day trip",    title: "Beyond Jølster — full day" },
  { id: "food", label: "Eat",         title: "Eating in Førde" },
  { id: "tips", label: "Good to know", title: "Local flavour & practical notes" }
];

const results = document.getElementById("results");
const filterBar = document.getElementById("filters");
const search = document.getElementById("q");
const clearBtn = document.getElementById("clear");

let activeGroup = "all";
let query = "";

/* ---------- filter buttons ---------- */

function buildFilters() {
  const buttons = [{ id: "all", label: "Everything" }, ...GROUPS];
  filterBar.replaceChildren(
    ...buttons.map(({ id, label }) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      b.dataset.group = id;
      b.setAttribute("aria-pressed", String(id === activeGroup));
      b.addEventListener("click", () => {
        activeGroup = id;
        buildFilters();
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      return b;
    })
  );
}

/* ---------- matching ---------- */

function haystack(place) {
  const facts = (place.facts || []).map(([k, v]) => k + " " + v).join(" ");
  return [place.name, place.kicker, place.blurb, place.distance, facts]
    .join(" ")
    .toLowerCase();
}

function matches(place) {
  if (activeGroup !== "all" && place.group !== activeGroup) return false;
  if (!query) return true;
  return query.split(/\s+/).every((term) => haystack(place).includes(term));
}

/* ---------- rendering ---------- */

function mapsLink(place) {
  const target = place.maps || place.name + ", Førde, Norway";
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(target);
}

function card(place) {
  const el = document.createElement("article");
  el.className = "card";
  el.dataset.group = place.group;

  const head = document.createElement("div");
  head.className = "card-head";
  head.innerHTML =
    `<h3><span class="kicker">${place.kicker}</span>${place.name}</h3>` +
    `<span class="chip">${place.distance}</span>`;
  el.append(head);

  const blurb = document.createElement("p");
  blurb.textContent = place.blurb;
  el.append(blurb);

  if (place.facts && place.facts.length) {
    const more = document.createElement("details");
    more.className = "more";
    more.innerHTML =
      "<summary>Practical details</summary>" +
      "<dl class=\"facts\">" +
      place.facts.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("") +
      "</dl>";
    el.append(more);
  }

  const actions = document.createElement("div");
  actions.className = "actions";
  const links = [];
  if (place.maps) links.push(`<a class="primary" href="${mapsLink(place)}" target="_blank" rel="noopener">Open in Maps ↗</a>`);
  (place.links || []).forEach(([label, url]) => {
    links.push(`<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`);
  });
  if (links.length) {
    actions.innerHTML = links.join("");
    el.append(actions);
  }

  return el;
}

function render() {
  const visible = window.PLACES.filter(matches);
  results.replaceChildren();

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "Nothing matches that. Try “waterfall”, “glacier” or “dinner”.";
    results.append(empty);
    return;
  }

  GROUPS.forEach((group) => {
    const items = visible
      .filter((p) => p.group === group.id)
      .sort((a, b) => (a.minutes || 0) - (b.minutes || 0));
    if (!items.length) return;

    const section = document.createElement("section");
    section.className = "group";

    const head = document.createElement("div");
    head.className = "group-head";
    head.innerHTML =
      `<h2>${group.title}</h2><span class="count">${items.length}</span>`;
    section.append(head, ...items.map(card));
    results.append(section);
  });
}

/* ---------- search ---------- */

search.addEventListener("input", () => {
  query = search.value.trim().toLowerCase();
  clearBtn.hidden = !query;
  // Searching looks across everything — a stale distance filter would hide matches.
  if (query && activeGroup !== "all") {
    activeGroup = "all";
    buildFilters();
  }
  render();
});

clearBtn.addEventListener("click", () => {
  search.value = "";
  query = "";
  clearBtn.hidden = true;
  render();
  search.focus();
});

buildFilters();
render();
