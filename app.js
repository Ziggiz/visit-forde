/* Visit Førde — renders window.PLACES from data.js, with language, search,
   distance filters and saved favourites.
   Translations: window.UI (interface) and window.PLACES_IT / window.PLACES_NO (content). */

const GROUP_ORDER = ["walk", "near", "day", "far", "food", "tips"];
const OVERRIDES = { it: () => window.PLACES_IT, no: () => window.PLACES_NO };
const FAV_KEY = "visit-forde-favourites";

const results = document.getElementById("results");
const filterBar = document.getElementById("filters");
const langBar = document.getElementById("langs");
const search = document.getElementById("q");
const clearBtn = document.getElementById("clear");

let lang = pickLang();
let favourites = loadFavourites();
let activeGroup = "all";
let query = "";

/* ---------- storage ---------- */

function readStore(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null; // private browsing — the page still works, nothing persists
  }
}

function writeStore(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    /* the choice just won't survive the next visit */
  }
}

function loadFavourites() {
  const raw = readStore(FAV_KEY);
  if (!raw) return new Set();
  try {
    const list = JSON.parse(raw);
    return new Set(Array.isArray(list) ? list : []);
  } catch (e) {
    return new Set();
  }
}

function toggleFavourite(id) {
  if (favourites.has(id)) favourites.delete(id);
  else favourites.add(id);
  writeStore(FAV_KEY, JSON.stringify([...favourites]));
}

/* ---------- language ---------- */

function pickLang() {
  const known = window.LANGS.map((l) => l.code);
  const asked = new URLSearchParams(location.search).get("lang");
  if (known.includes(asked)) return asked;

  const stored = readStore("lang");
  if (known.includes(stored)) return stored;

  const preferred = (navigator.languages || [navigator.language || "en"])
    .map((l) => l.slice(0, 2).toLowerCase())
    .map((l) => (l === "nb" || l === "nn" ? "no" : l))
    .find((l) => known.includes(l));
  return preferred || "en";
}

function t() {
  return window.UI[lang] || window.UI.en;
}

/* Merge the English entry with the active language's overrides. */
function localized(place) {
  const table = OVERRIDES[lang] && OVERRIDES[lang]();
  const override = (table && table[place.id]) || null;
  return override ? Object.assign({}, place, override) : place;
}

function setLang(code) {
  lang = code;
  writeStore("lang", code);
  paintChrome();
  buildLangs();
  buildFilters();
  render();
}

/* ---------- static text ---------- */

function paintChrome() {
  const s = t();
  document.documentElement.lang = s.htmlLang;
  document.title = s.documentTitle;
  document.getElementById("eyebrow").textContent = s.eyebrow;
  document.getElementById("title").textContent = s.title;
  document.getElementById("lede").textContent = s.lede;
  search.placeholder = s.searchPlaceholder;
  search.setAttribute("aria-label", s.searchLabel);
  clearBtn.setAttribute("aria-label", s.clearLabel);
  filterBar.setAttribute("aria-label", s.filtersLabel);
  langBar.setAttribute("aria-label", s.langLabel);
  document.getElementById("footer-note").textContent = s.footer;
  document.getElementById("footer-links").innerHTML = s.footerLinks
    .replace("{tourist}", '<a href="https://www.fjordnorway.com/en/attractions/forde">' + s.touristLabel + "</a>")
    .replace("{weather}", '<a href="https://www.yr.no/en">' + s.weatherLabel + "</a>");
}

/* ---------- buttons ---------- */

function buildLangs() {
  langBar.replaceChildren(
    ...window.LANGS.map(({ code, label, name }) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = label;
      b.title = name;
      b.setAttribute("aria-pressed", String(code === lang));
      b.addEventListener("click", () => setLang(code));
      return b;
    })
  );
}

function buildFilters() {
  const s = t();
  const ids = ["all", ...GROUP_ORDER, "saved"];
  filterBar.replaceChildren(
    ...ids.map((id) => {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.group = id;
      b.setAttribute("aria-pressed", String(id === activeGroup));

      if (id === "saved") {
        b.textContent = "★ " + s.filters.saved;
        if (favourites.size) {
          const n = document.createElement("span");
          n.className = "n";
          n.textContent = favourites.size;
          b.append(n);
        }
      } else {
        b.textContent = s.filters[id];
      }

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
  return [place.name, place.kicker, place.blurb, place.distance, facts].join(" ").toLowerCase();
}

function matches(place) {
  if (activeGroup === "saved") {
    if (!favourites.has(place.id)) return false;
  } else if (activeGroup !== "all" && place.group !== activeGroup) {
    return false;
  }
  if (!query) return true;
  return query.split(/\s+/).every((term) => haystack(place).includes(term));
}

/* ---------- rendering ---------- */

function mapsLink(place) {
  const target = place.maps || place.name + ", Førde, Norway";
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(target);
}

const STAR =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.6 5.5 5.9.8-4.3 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.5 9.8l5.9-.8z"/></svg>';

function favButton(place) {
  const s = t();
  const b = document.createElement("button");
  b.type = "button";
  b.className = "fav";
  b.innerHTML = STAR;

  const paint = () => {
    const on = favourites.has(place.id);
    b.setAttribute("aria-pressed", String(on));
    b.setAttribute("aria-label", on ? s.unsave : s.save);
    b.title = on ? s.unsave : s.save;
  };
  paint();

  b.addEventListener("click", () => {
    toggleFavourite(place.id);
    paint();
    buildFilters();
    if (activeGroup === "saved") render();
  });
  return b;
}

function card(place) {
  const el = document.createElement("article");
  el.className = "card";
  el.dataset.group = place.group;

  const head = document.createElement("div");
  head.className = "card-head";

  const titles = document.createElement("div");
  titles.className = "titles";
  titles.innerHTML =
    '<span class="kicker">' + place.kicker + "</span>" +
    "<h3>" + place.name + "</h3>" +
    '<span class="chip">' + place.distance + "</span>";

  head.append(titles, favButton(place));
  el.append(head);

  const blurb = document.createElement("p");
  blurb.textContent = place.blurb;
  el.append(blurb);

  if (place.facts && place.facts.length) {
    const more = document.createElement("details");
    more.className = "more";
    more.innerHTML =
      "<summary>" + t().details + "</summary>" +
      '<dl class="facts">' +
      place.facts.map(([k, v]) => "<dt>" + k + "</dt><dd>" + v + "</dd>").join("") +
      "</dl>";
    el.append(more);
  }

  const links = [];
  if (place.maps) {
    links.push('<a class="primary" href="' + mapsLink(place) + '" target="_blank" rel="noopener">' + t().maps + "</a>");
  }
  (place.links || []).forEach(([label, url]) => {
    links.push('<a href="' + url + '" target="_blank" rel="noopener">' + label + " ↗</a>");
  });
  if (links.length) {
    const actions = document.createElement("div");
    actions.className = "actions";
    actions.innerHTML = links.join("");
    el.append(actions);
  }

  return el;
}

function render() {
  const s = t();
  const visible = window.PLACES.map(localized).filter(matches);
  results.replaceChildren();

  if (!visible.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = activeGroup === "saved" && !query ? s.emptySaved : s.empty;
    results.append(empty);
    return;
  }

  GROUP_ORDER.forEach((id) => {
    const items = visible
      .filter((p) => p.group === id)
      .sort((a, b) => (a.minutes || 0) - (b.minutes || 0));
    if (!items.length) return;

    const section = document.createElement("section");
    section.className = "group";

    const head = document.createElement("div");
    head.className = "group-head";
    head.innerHTML = "<h2>" + s.groups[id] + '</h2><span class="count">' + items.length + "</span>";
    section.append(head, ...items.map(card));
    results.append(section);
  });
}

/* ---------- search ---------- */

search.addEventListener("input", () => {
  query = search.value.trim().toLowerCase();
  clearBtn.hidden = !query;
  // Searching looks across everything — a stale distance filter would hide matches.
  // Saved stays put: searching inside your own shortlist is the point.
  if (query && activeGroup !== "all" && activeGroup !== "saved") {
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

paintChrome();
buildLangs();
buildFilters();
render();
