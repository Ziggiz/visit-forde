# Visit Førde

A small static web app for English-speaking visitors staying in Førde, Sunnfjord — sights, drives and restaurants, sorted by how far you have to drive from the town centre.

**Live:** https://ziggiz.github.io/visit-forde/

- Search across everything (waterfall, glacier, dinner…)
- Filter by distance: on foot · under 20 min · 40–60 min · full-day trip · food · practical
- Every entry has an "Open in Maps" link that works on a phone
- Light and dark theme follow the phone's setting
- No build step, no dependencies, no tracking — three files and a stylesheet

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page shell: masthead, search box, filter bar |
| `data.js` | **All the content.** One object per place — this is the only file you normally edit |
| `app.js` | Renders the cards, handles search and filtering |
| `styles.css` | Design tokens and layout, light + dark |

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

Gruppene er definerte øvst i `app.js` (`GROUPS`) — endrar du rekkjefølgja der, endrar du rekkjefølgja på sida.

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
