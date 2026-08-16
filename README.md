# Visit Førde

A small static web app for English-speaking visitors staying in Førde, Sunnfjord — sights, drives and restaurants, sorted by how far you have to drive from the town centre.

**Live:** https://ziggiz.github.io/visit-forde/

- **Three languages** — English, Italiano, Norsk. Switch in the top right; the choice is remembered, and `?lang=it` / `?lang=no` links straight to one
- Search across everything, in whichever language is showing (waterfall, cascata, foss…)
- Filter by distance: on foot · under 20 min · 40–60 min · full-day trip · food · practical
- Every entry has an "Open in Maps" link that works on a phone
- Light and dark theme follow the phone's setting
- No build step, no dependencies, no tracking

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page shell: masthead, search box, filter bar |
| `data.js` | **All the content, in English.** One object per place |
| `data.it.js` | Italian overrides, keyed by the same `id` |
| `data.no.js` | Norwegian overrides, keyed by the same `id` |
| `i18n.js` | Interface strings and the list of available languages |
| `app.js` | Renders the cards, handles language, search and filtering |
| `styles.css` | Design tokens and layout, light + dark |

Anything missing from a translation file falls back to the English text, so a
half-finished translation still renders a complete page.

## Slik legger du til eller endrar ein stad

Alt innhald ligg i `data.js`. Kopier ei blokk og fyll ut:

```js
{
  id: "kort-unik-id",
  name: "Namn på staden",
  kicker: "Kort merkelapp — Waterfall, Art museum, …",
  group: "near",              // walk | near | day | far | food | tips
  minutes: 12,                // køyretid i minutt, styrer rekkjefølgja i gruppa
  distance: "~10 km · 12 min",// teksten som vert vist i chipen
  maps: "Adresse eller stadnamn", // vert til ei Google Maps-lenke
  blurb: "Ein til tre setningar om kvifor ein skal dra.",
  facts: [
    ["Open", "Tue–Fri 10–17"],
    ["Price", "Adults 140 NOK"]
  ],
  links: [["misf.no", "https://example.com"]]
}
```

Gruppene er definerte øvst i `app.js` (`GROUP_ORDER`) — endrar du rekkjefølgja der, endrar du rekkjefølgja på sida. Namna på gruppene ligg i `i18n.js`, eitt sett per språk.

### Omsetjing

Legg inn same `id` i `data.it.js` eller `data.no.js` og berre dei felta du vil byte ut:

```js
huldefossen: {
  name: "Huldefossen på Mo",   // valfritt — sløyf det når namnet er eit eigennamn
  kicker: "Foss",
  distance: "~10 km · 12 min",
  blurb: "…",
  facts: [["Dit", "…"]]
}
```

Vil du ha eit fjerde språk: legg det til i `LANGS` og `UI` i `i18n.js`, lag ei
`data.xx.js` med same mønster, registrer ho i `OVERRIDES` øvst i `app.js` og
legg til `<script src="data.xx.js"></script>` i `index.html`.

## Running it locally

No build step. Open `index.html` in a browser, or:

```bash
python3 -m http.server 8000
```

Then go to http://localhost:8000.

## Deploying

Pushing to `main` publishes to GitHub Pages automatically.

## Note on accuracy

Opening hours, prices and distances were checked against the venues' own sites for the 2026 summer season. They change — treat them as a starting point and ring ahead for anything more than half an hour's drive away.
