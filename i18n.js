/* Interface strings. English is the base language; add a language here and in
   the LANGS list to offer it in the switcher. Place content lives in data.js
   (English) and data.it.js (Italian overrides). */

window.LANGS = [
  { code: "en", label: "EN", name: "English" },
  { code: "it", label: "IT", name: "Italiano" },
  { code: "no", label: "NO", name: "Norsk" }
];

window.UI = {
  en: {
    htmlLang: "en",
    documentTitle: "Visit Førde — what to see and where to eat in Sunnfjord",
    eyebrow: "Sunnfjord · Western Norway",
    title: "Visit Førde",
    lede:
      "Everything worth the drive from Førde, sorted by how far you have to go — from what you can reach on foot to the glacier and the cable car that need a whole day.",
    searchPlaceholder: "Search — waterfall, glacier, dinner…",
    searchLabel: "Search places",
    clearLabel: "Clear search",
    filtersLabel: "Filter by distance",
    langLabel: "Language",
    details: "Practical details",
    maps: "Open in Maps ↗",
    empty: "Nothing matches that. Try “waterfall”, “glacier” or “dinner”.",
    emptySaved: "Nothing saved yet. Tap the star on anything you want to keep for later — it stays on this phone.",
    save: "Save to your list",
    unsave: "Remove from your list",
    filters: {
      all: "Everything",
      walk: "On foot",
      near: "Under 20 min",
      day: "40–60 min",
      far: "Day trip",
      food: "Eat",
      tips: "Good to know",
      saved: "Saved"
    },
    groups: {
      walk: "On foot from the centre",
      near: "Under 20 minutes by car",
      day: "A day out — 40 minutes to an hour",
      far: "Beyond Jølster — full day",
      food: "Eating in Førde",
      tips: "Local flavour & practical notes"
    },
    footer:
      "Compiled for visitors staying in Førde. Distances are approximate, by road from the town centre. Hours and prices were checked for the 2026 summer season — ring ahead for anything you are driving more than half an hour to reach.",
    footerLinks: "Tourist information: {tourist} · Forecast: {weather}",
    touristLabel: "fjordnorway.com",
    weatherLabel: "yr.no"
  },

  it: {
    htmlLang: "it",
    documentTitle: "Visit Førde — cosa vedere e dove mangiare nel Sunnfjord",
    eyebrow: "Sunnfjord · Norvegia occidentale",
    title: "Visit Førde",
    lede:
      "Tutto ciò che vale il viaggio da Førde, ordinato per distanza — da quello che si raggiunge a piedi fino al ghiacciaio e alla funivia che richiedono un'intera giornata.",
    searchPlaceholder: "Cerca — cascata, ghiacciaio, cena…",
    searchLabel: "Cerca luoghi",
    clearLabel: "Cancella la ricerca",
    filtersLabel: "Filtra per distanza",
    langLabel: "Lingua",
    details: "Dettagli pratici",
    maps: "Apri in Maps ↗",
    empty: "Nessun risultato. Provate con «cascata», «ghiacciaio» o «cena».",
    emptySaved: "Non avete ancora salvato niente. Toccate la stella su ciò che volete tenere da parte — resta su questo telefono.",
    save: "Salva nella tua lista",
    unsave: "Togli dalla tua lista",
    filters: {
      all: "Tutto",
      walk: "A piedi",
      near: "Meno di 20 min",
      day: "40–60 min",
      far: "Gita di un giorno",
      food: "Mangiare",
      tips: "Buono a sapersi",
      saved: "Salvati"
    },
    groups: {
      walk: "A piedi dal centro",
      near: "Meno di 20 minuti in auto",
      day: "Una gita — da 40 minuti a un'ora",
      far: "Oltre Jølster — giornata intera",
      food: "Mangiare a Førde",
      tips: "Sapori locali e note pratiche"
    },
    footer:
      "Guida raccolta per chi soggiorna a Førde. Le distanze sono approssimative, su strada dal centro città. Orari e prezzi sono stati verificati per la stagione estiva 2026: telefonate prima di mettervi in viaggio per qualsiasi meta a più di mezz'ora di auto.",
    footerLinks: "Informazioni turistiche: {tourist} · Meteo: {weather}",
    touristLabel: "fjordnorway.com",
    weatherLabel: "yr.no"
  },

  no: {
    htmlLang: "nb",
    documentTitle: "Visit Førde — hva du bør se og hvor du bør spise i Sunnfjord",
    eyebrow: "Sunnfjord · Vestlandet",
    title: "Visit Førde",
    lede:
      "Alt som er verdt turen fra Førde, sortert etter hvor langt du må kjøre — fra det du når til fots, til breen og gondolen som tar en hel dag.",
    searchPlaceholder: "Søk — foss, bre, middag…",
    searchLabel: "Søk etter steder",
    clearLabel: "Tøm søket",
    filtersLabel: "Filtrer på avstand",
    langLabel: "Språk",
    details: "Praktisk informasjon",
    maps: "Åpne i Maps ↗",
    empty: "Ingen treff. Prøv «foss», «bre» eller «middag».",
    emptySaved: "Ingenting lagret ennå. Trykk på stjerna på det du vil ta vare på — det blir liggende på denne telefonen.",
    save: "Lagre i lista",
    unsave: "Fjern fra lista",
    filters: {
      all: "Alt",
      walk: "Til fots",
      near: "Under 20 min",
      day: "40–60 min",
      far: "Dagstur",
      food: "Spise",
      tips: "Godt å vite",
      saved: "Lagret"
    },
    groups: {
      walk: "Til fots fra sentrum",
      near: "Under 20 minutter med bil",
      day: "En dagstur — 40 minutter til en time",
      far: "Lenger enn Jølster — hele dagen",
      food: "Spise i Førde",
      tips: "Lokal mat og praktiske råd"
    },
    footer:
      "Laget for besøkende som bor i Førde. Avstandene er omtrentlige, målt på vei fra sentrum. Åpningstider og priser er sjekket for sommersesongen 2026 — ring gjerne samme dag hvis du skal kjøre mer enn en halvtime.",
    footerLinks: "Turistinformasjon: {tourist} · Værmelding: {weather}",
    touristLabel: "fjordnorway.com",
    weatherLabel: "yr.no"
  }
};
