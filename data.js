/* Places around Førde, Sunnfjord.
   Distances are approximate, measured by road from Førde town centre.
   Add or edit entries here — the app renders whatever is in this list. */

window.PLACES = [
  /* ---------- Walkable from the town centre ---------- */
  {
    id: "vidsyn",
    name: "Vidsyn & Hafstadkleiva",
    kicker: "Viewpoint & hike",
    group: "walk",
    minutes: 0,
    distance: "On foot from the centre",
    maps: "Hafstadkleiva, Førde",
    blurb:
      "The path everyone in Førde uses. Stairs then a wide zig-zag gravel track straight up the mountainside, starting by the town hall where Fjellvegen meets Langebruvegen. Partway up sits Vidsyn, a circular concrete platform looking down over the town, the river and the fjord. Keep going for the summit of Hafstadfjellet at 706 m.",
    facts: [
      ["Time", "Vidsyn ~30 min up · full summit ~1 hr 45 min return. Steep, but no scrambling — trainers are fine in dry weather."],
      ["War history", "This hillside was the German strongpoint <b>“Bertha”</b>: around 13 barracks, machine-gun and mortar positions, trenches, bunkers and a tunnel complex from 1943. The access road up from Kronborg — still called <b>Burmavegen</b> — was built by Soviet prisoners of war."]
    ],
    links: [
      ["Fjord Norway", "https://www.fjordnorway.com/en/see-and-do/hiking-hafstadkleiva-in-forde"],
      ["Trail map", "https://ut.no/turforslag/117861/hafstadfjellet-opp-hafstadkleiva"]
    ]
  },
  {
    id: "kunstmuseet",
    name: "Sogn og Fjordane Art Museum",
    kicker: "Art museum",
    group: "walk",
    minutes: 0,
    distance: "5 min walk · town centre",
    maps: "Storehagen 1A, 6800 Førde",
    blurb:
      "The regional art museum on the Jølstra river in the middle of town — 150 years of art from this corner of Norway, changing exhibitions and a roof terrace. The rainy-afternoon answer, and the natural warm-up before driving out to Astruptunet.",
    facts: [
      ["Address", "Storehagen 1A, 6800 Førde"],
      ["Open", "Tue–Fri 11–18 (Thu 12–19), Sat–Sun 11–16, <b>closed Monday</b>"],
      ["Price", "Adults 120 NOK · students/seniors 100 · under 18 free"]
    ],
    links: [["misf.no", "https://misf.no/en/art-museum/plan-your-visit"]]
  },
  {
    id: "jolstra",
    name: "Walk the Jølstra",
    kicker: "River path",
    group: "walk",
    minutes: 0,
    distance: "In town",
    maps: "Jølstra, Førde",
    blurb:
      "The river runs straight through the middle of town with paths along both banks, salmon in the pools, and the art museum and two of the restaurants on its edge. The easiest hour in Førde.",
    facts: [["Time", "30–60 min · flat, paved, pram-friendly"]],
    links: []
  },

  {
    id: "vest-sauna",
    name: "Vest Sauna",
    kicker: "Sauna on the river",
    group: "walk",
    minutes: 0,
    distance: "Walk from the centre",
    maps: "Vest Sauna, Førde",
    blurb:
      "A proper sauna right on the bank of the Jølstra in the middle of town: heat-treated aspen, a 16 kW stove, mirror windows onto the river, minibar and two changing rooms — and fifteen metres to the water when you need to cool off. Open all year, and the easiest way to end a day of walking in the rain.",
    facts: [
      ["Getting there", "Follow the river path along the Jølstra from Bohus, or come in from Øyrane. Central Førde, no car needed."],
      ["Booking", "Online at vestsauna.no · +47 414 29 404 · post@vestsauna.no"],
      ["Bring", "Swimwear, towel and sandals. Cold-dipping in the river is at your own risk."]
    ],
    links: [
      ["vestsauna.no", "https://vestsauna.no/"],
      ["badstukart.no", "https://badstukart.no/forde/vest-sauna/"]
    ]
  },

  /* ---------- Under 20 minutes by car ---------- */
  {
    id: "sunnfjord-museum",
    name: "Sunnfjord Museum, Movika",
    kicker: "Open-air museum",
    group: "near",
    minutes: 7,
    distance: "~5 km · 7 min",
    maps: "Jølstravegen 107, 6819 Førde",
    blurb:
      "Thirty-three old timber buildings gathered on a hillside by the E39: farmhouses, a schoolhouse, a shoemaker's workshop and the old Movika country store. It shows how people lived here before the road came. Trails run from the grounds, including one up to Huldefossen (about an hour there and back).",
    facts: [
      ["Address", "Jølstravegen 107, 6819 Førde — signposted off the E39 toward Jølster"],
      ["Open", "Season to 30 August · Tue–Fri 10–17, Sat–Sun 12–17, closed Monday"],
      ["Price", "Adults 140 NOK · under 18 free · free parking"]
    ],
    links: [["misf.no", "https://misf.no/en/sunnfjord-museum/plan-your-visit"]]
  },
  {
    id: "huldefossen",
    name: "Huldefossen at Mo",
    kicker: "Waterfall",
    group: "near",
    minutes: 12,
    distance: "~10 km · 12 min",
    maps: "Huldefossen, Førde",
    blurb:
      "A 90-metre curtain of water and one of the most photographed falls in Fjord Norway — for a five-minute walk. Park at Mo by the agricultural college, cross the wooden bridge and follow the river up. You can walk right into the spray, which is the point; it is also why the last stretch is muddy and the rocks are slick.",
    facts: [
      ["Getting there", "E39/Rv5 toward Skei, ~10 km, follow the signs at Moskog. Free parking, then ~500 m on foot."],
      ["Bring", "Waterproof shoes. Free, always open. Stay on the path and out of the water below the fall."]
    ],
    links: [["Fjord Norway", "https://www.fjordnorway.com/en/see-and-do/huldefossen-waterfall"]]
  },
  {
    id: "kletten",
    name: "Kletten, Naustdal",
    kicker: "Short hike & war history",
    group: "near",
    minutes: 15,
    distance: "~13 km · 15 min",
    maps: "Kletten, Naustdal",
    blurb:
      "The steep little hill standing over the village of Naustdal, rising straight out of the mouth of the Nausta river. A short, sharp climb gets you to the western vantage point at 269 m with the fjord, the village and the salmon river below — a big view for a small effort.",
    facts: [
      ["Time", "Roughly 45–60 min up. Summit 281 m."],
      ["War history", "Naustdal and the fjord mouth carry occupation-era remains and there is local information about the war at the site — the details of the signage are worth checking with the tourist information in Førde before you drive out."]
    ],
    links: []
  },

  {
    id: "naustdal-sauna",
    name: "Naustdal Sauna",
    kicker: "Sauna on the fjord",
    group: "near",
    minutes: 15,
    distance: "~13 km · 15 min",
    maps: "Fjæra 17, 6817 Naustdal",
    blurb:
      "Down on the shore at Naustdal, looking straight out at the fjord. Always pre-heated to around 90°C for your slot, lined with 640 kg of Himalayan salt, and with steps into the sea for the cold plunge. Pair it with the climb up Kletten and you have a full half-day out of a fifteen-minute drive.",
    facts: [
      ["Address", "Fjæra 17, Naustdal — on the beach by the fjord"],
      ["Open", "Every day 06:00–23:00, all year. Sessions are 1.5 hours."],
      ["Price", "Shared session 249 NOK per person · the whole sauna 1,199 NOK · 1–8 people"],
      ["Booking", "Online — pay by card or Vipps and you get a door code. No staff on site."]
    ],
    links: [["vestfjordsauna.no", "https://vestfjordsauna.no/en/naustdal"]]
  },

  /* ---------- Day out: 40–60 minutes ---------- */
  {
    id: "astruptunet",
    name: "Astruptunet, Jølster",
    kicker: "Artist's home",
    group: "day",
    minutes: 45,
    distance: "~35 km · 45 min",
    maps: "Nikolai Astrups veg 1135, 6847 Vassenden",
    blurb:
      "The hillside smallholding where Nikolai Astrup — Norway's great painter of midsummer bonfires, rhubarb gardens and this exact lake — lived and worked. Turf-roofed cabins, his studio and the garden he planted, still on the steep slope above Jølstravatnet, with a gallery of his prints and paintings. If your visitors see one art thing in the region, this is the one: the landscape and the painting in the same frame.",
    facts: [
      ["Address", "Nikolai Astrups veg 1135, 6847 Vassenden. E39 to Vassenden, turn right by the lake, follow the south shore ~10 km."],
      ["Open", "To 20 September · Tue–Sun 11–16 (Wed to 19) through August; <b>weekends only from 1 September</b>"],
      ["Price", "Adults 140 NOK · guided tour 170 · under 18 free · free parking by the lake"],
      ["On site", "Café with home-baked cake, waffles and ice cream. The walk up from the car park is short but uneven."],
      ["Make a loop", "Drive out along the south shore of Jølstravatnet and back on the E39, or carry on to Skei and the Kjøsnesfjorden arm."]
    ],
    links: [
      ["misf.no", "https://misf.no/en/astruptunet"],
      ["His paintings", "https://nikolai-astrup.no/en/institution/18"]
    ]
  },
  {
    id: "likholefossen",
    name: "Likholefossen & Fossestien",
    kicker: "Scenic route · waterfall",
    group: "day",
    minutes: 45,
    distance: "~45 min",
    maps: "Likholefossen, Viksdalen",
    blurb:
      "A bridge built directly across the falls, so you stand in the middle of the churning water. It is also the gateway to Fossestien, the 21 km waterfall path along the Gaula river past fourteen waterfalls and seven lakes — walk any short section and turn back.",
    facts: [
      ["Route", "Road 13 south from Moskog, the National Scenic Route Gaularfjellet."],
      ["Price", "Free · parking at the site"]
    ],
    links: [["Scenic route", "https://www.nasjonaleturistveger.no/en/routes/gaularfjellet/likholefossen/"]]
  },
  {
    id: "utsikten",
    name: "Utsikten, Gaularfjellet",
    kicker: "Scenic route · viewpoint",
    group: "day",
    minutes: 75,
    distance: "~1 hr 15",
    maps: "Utsikten Gaularfjellet",
    blurb:
      "The famous one. A triangular concrete platform cantilevered over the edge at roughly 700 m, looking down the hairpins toward Vetlefjord with 1,500 m peaks all around. Architecture and view in one, and free. The best pure drive near Førde.",
    facts: [
      ["Route", "Rv13 Moskog–Balestrand, 114 km end to end. Open in summer; the mountain section normally closes late November to late March."],
      ["Note", "Narrow, winding and slower than the map suggests. Cloud can swallow the view entirely — go on a clear day."]
    ],
    links: [["Scenic route", "https://www.nasjonaleturistveger.no/en/routes/gaularfjellet/utsikten/"]]
  },
  {
    id: "jolstravatnet",
    name: "Swim in Jølstravatnet",
    kicker: "Lake",
    group: "day",
    minutes: 25,
    distance: "~25 min",
    maps: "Jølstravatnet, Vassenden",
    blurb:
      "The lake has small beaches and lay-bys along both shores. Cold, clear and completely normal to swim in on a warm August day — and the same water Astrup painted.",
    facts: [["Tip", "Combine with Astruptunet on the south shore."]],
    links: []
  },
  {
    id: "jolstraholmen-sauna",
    name: "The river sauna at Jølstraholmen",
    kicker: "Sauna by the rapids",
    group: "day",
    minutes: 20,
    distance: "~25 km · 20 min",
    maps: "Jølstraholmen, Vassenden",
    blurb:
      "A small sauna on the riverbank at Jølstraholmen in Vassenden, with a natural pool in the river just outside the door to drop into between rounds. Anyone can book it — you do not have to be staying at the campsite — which makes it a good stop on the way back from Astruptunet.",
    facts: [
      ["Price", "150 NOK per person, or 500 NOK for the whole sauna — one hour"],
      ["Capacity", "Max 6 people · 18 and over"],
      ["Open", "Every day 08:00–22:00, all year"],
      ["Booking", "Online at least 2 hours ahead, or ring them an hour ahead"],
      ["Note", "Turn up changed and ready in swimwear — slots run back to back. Shower and toilet access costs 50 NOK extra."]
    ],
    links: [["jolstraholmen.no", "https://jolstraholmen.no/en/activites_post/badstua/"]]
  },

  {
    id: "floro",
    name: "Florø",
    kicker: "Coastal town",
    group: "day",
    minutes: 60,
    distance: "~59 km · 1 hr",
    maps: "Florø",
    blurb:
      "Norway's westernmost town, founded on herring in 1860 and still facing the open sea. The counterweight to everything else on this list: instead of mountains closing in, the horizon opens out. Wander the wooden centre and the guest harbour, then pick one or two things.",
    facts: [
      ["Coastal Museum", "Boats, fishing and everyday life along this coast — the story of why anyone settled out here."],
      ["Vesle Kinn", "The test brewery of Kinn Bryggeri in the centre — tastings and guided tours in summer."],
      ["Kinn island", "Boat out to a medieval stone church under the Kinnaklova cliff. Check the timetable before you commit to the day."],
      ["Also", "Havhesten swimming complex · seaside saunas · the Brandsøyåsen hike (293 m) for the panorama over the skerries."]
    ],
    links: [["Top ten in Florø", "https://www.fjordnorway.com/en/inspiration/top-ten-things-to-do-in-floro"]]
  },

  /* ---------- Beyond Jølster: full day ---------- */
  {
    id: "fjaerland",
    name: "Fjærland",
    kicker: "Glacier, museum, books",
    group: "far",
    minutes: 70,
    distance: "~75 km · 1 hr 10",
    maps: "Fjærland",
    blurb:
      "A village at the end of a narrow arm of the Sognefjord with a glacier hanging above it and more second-hand bookshops than it has any right to. The Norwegian Glacier Museum is a serious, hands-on museum about ice and climate; Bøyabreen is a tongue of that glacier visible from the road a few minutes out of the village; and the Norwegian Book Town fills old barns and boathouses with around two and a half miles of shelves.",
    facts: [
      ["Getting there", "E39 to Skei, then Rv5 through the Fjærland tunnel. Under 30 minutes from Skei."],
      ["Museum", "Daily 09–19 in August · adults 180 NOK, children 90, family 390"],
      ["Safety", "Do not walk onto or under the glacier ice or into the lagoon below it — ice falls without warning. Guided glacier walks are booked separately."]
    ],
    links: [
      ["Glacier Museum", "https://en.bremuseum.no/"],
      ["Book town", "https://www.fjaerland.org/fjaerland"]
    ]
  },
  {
    id: "loen",
    name: "Loen Skylift, Mt Hoven",
    kicker: "Cable car & viewing platform",
    group: "far",
    minutes: 120,
    distance: "~120 km · 2 hrs",
    maps: "Fjordvegen 1011, 6789 Loen",
    blurb:
      "The “skywalk”. One of the steepest cable cars in the world lifts you 1,011 m from the fjord to the top of Mt Hoven in about five minutes, onto a platform with a 210° sweep over Nordfjord and the edge of the Jostedalsbreen ice cap. Restaurant and bar at the top, marked ridge hikes, a zipline five minutes' walk away, and a guided via ferrata in the gorge below.",
    facts: [
      ["Address", "Fjordvegen 1011, 6789 Loen — E39 to Skei and Byrkjelo, then road 60 along Nordfjord"],
      ["Open", "Daily in August 08:00–22:00 (last car down 22:30), departures at least every half hour"],
      ["Price", "Adult return 650 NOK · child 6–15 345 NOK. Book online on a clear day — it sells out in good weather."],
      ["Nearby", "Lake Lovatnet's meltwater turquoise, and the Briksdalsbreen glacier arm at Olden."]
    ],
    links: [["loenskylift.no", "https://en.loenskylift.no/"]]
  },
  {
    id: "kalvag",
    name: "Kalvåg, Bremanger",
    kicker: "Fishing village & seafood",
    group: "far",
    minutes: 90,
    distance: "~1 hr 30",
    maps: "Kalvåg, Bremanger",
    blurb:
      "A restored fishing village of white timber quayside buildings on the outer coast. Knutholmen there is one of the best-known seafood kitchens in the region — worth booking, and worth making the drive an outing in itself.",
    facts: [["Tip", "Book the table before you set off; it is a long way to drive on spec."]],
    links: []
  },
  {
    id: "svanoy",
    name: "Svanøy island",
    kicker: "Island & deer centre",
    group: "far",
    minutes: 75,
    distance: "~1 hr + boat",
    maps: "Svanøy, Kinn",
    blurb:
      "“The pearl of Sunnfjord” — a 17th-century manor, farmland and the Norwegian Deer Centre, best explored by bike. Reached by boat from Florø.",
    facts: [["Getting there", "Drive to Florø, then the local boat. Check the timetable both ways."]],
    links: []
  },

  /* ---------- Eating in Førde ---------- */
  {
    id: "elvesus",
    name: "Elvesus Restaurant & Bar",
    kicker: "Seafood & European · by the river",
    group: "food",
    minutes: 0,
    distance: "Elvevegen 13",
    maps: "Elvevegen 13, 6800 Førde",
    blurb:
      "The big, sociable option — restaurant downstairs, bar that keeps going late at the weekend. Local seafood cooked in a modern register. Pick it if the group wants dinner and then somewhere to stay put afterwards.",
    facts: [
      ["Hours", "Tue–Thu 11–23 · Fri 11–02 · Sat 12–02 · Sun 14–21 · <b>closed Monday</b>"],
      ["Book", "+47 57 82 23 33"]
    ],
    links: [["elvesus.no", "https://www.elvesus.no/"], ["Menu", "https://www.elvesus.no/meny"]]
  },
  {
    id: "royst",
    name: "Røyst mat og vin",
    kicker: "Seasonal Norwegian · wine bar",
    group: "food",
    minutes: 0,
    distance: "Storehagen 10",
    maps: "Storehagen 10, 6800 Førde",
    blurb:
      "The best-reviewed place in town and the one to book for a proper meal. Short seasonal menu with a few fixtures — the fish soup has a following — in Nynorskhuset by the river, next door to the art museum. Ask the staff to pair the wine; that is the house's whole idea.",
    facts: [
      ["Style", "Mid to upper price range for the region"],
      ["Book", "Reserve ahead, especially at the weekend"]
    ],
    links: [["roystmatogvin.no", "https://roystmatogvin.no/"]]
  },
  {
    id: "firdi",
    name: "Firdi",
    kicker: "Modern · seasonal",
    group: "food",
    minutes: 0,
    distance: "Hafstadvegen 17",
    maps: "Hafstadvegen 17, 6800 Førde",
    blurb:
      "The newcomer, opened by a local chef who came home to start it, in a spot by the river. Fresh seasonal cooking with Asian and Italian influences rather than a straight Norwegian menu — the change of pace if you have already eaten fish twice.",
    facts: [["Book", "+47 90 09 54 45 · menu and current hours are posted on Facebook"]],
    links: [["Facebook", "https://www.facebook.com/restaurant.firdi/"]]
  },
  {
    id: "laxen",
    name: "Scandic Sunnfjord — Restaurant Laxen",
    kicker: "Hotel dining · buffet",
    group: "food",
    minutes: 0,
    distance: "Town centre",
    maps: "Scandic Sunnfjord Hotel & Spa, Førde",
    blurb:
      "The buffet that locals turn up for, not just hotel guests — the easy, feed-everyone choice, including fussy eaters and late arrivals. Barthold Bar has live music at weekends and Bartine is the quiet lobby bar. Its breakfast won the regional prize in 2023.",
    facts: [["Good for", "Groups, families, late arrivals"]],
    links: [["scandichotels.com", "https://www.scandichotels.com/en/hotels/scandic-sunnfjord-hotel-spa"]]
  },

  /* ---------- Local flavour & practical ---------- */
  {
    id: "raspeballer",
    name: "Ask for raspeballer",
    kicker: "Local food",
    group: "tips",
    minutes: 0,
    distance: "Thursdays",
    blurb:
      "Potato dumplings with salted meat — the regional Thursday dish in western Norway. Cafés and canteens serve them; ask locally who is doing them this week. Also called komle or kumle.",
    facts: [],
    links: []
  },
  {
    id: "nausta",
    name: "Salmon from the Nausta",
    kicker: "Local food",
    group: "tips",
    minutes: 0,
    distance: "On menus",
    blurb:
      "The river at Naustdal is one of Norway's classic wild salmon rivers. Anything on a menu described as local salmon or trout is worth ordering.",
    facts: [],
    links: []
  },
  {
    id: "sveler",
    name: "Sveler, waffles and brown cheese",
    kicker: "Local food",
    group: "tips",
    minutes: 0,
    distance: "Anywhere",
    blurb:
      "Thick griddle pancakes with butter and brown cheese, traditionally eaten on the fjord ferries. Norwegian waffles come heart-shaped with sour cream and jam — the café at Astruptunet does a good version. Brunost is caramelised whey: sweet, strange, and worth trying once.",
    facts: [],
    links: []
  },
  {
    id: "kinn-beer",
    name: "Kinn beer and August berries",
    kicker: "Local food",
    group: "tips",
    minutes: 0,
    distance: "Shops & stalls",
    blurb:
      "Florø's Kinn Bryggeri is one of the best-known breweries in Norway — look for it on the taps in Førde. August also means raspberries, plums and late strawberries at roadside stalls; buy at a farm stand rather than a supermarket.",
    facts: [],
    links: []
  },
  {
    id: "driving",
    name: "Driving here",
    kicker: "Practical",
    group: "tips",
    minutes: 0,
    distance: "Read first",
    blurb:
      "Distances are approximate and measured from Førde centre. Single-lane sections, tunnels and August caravans all add time — add a third to anything over an hour.",
    facts: [
      ["Tolls & ferries", "Automatic. Hire cars carry an AutoPASS tag and everything is billed to the rental afterwards — you never stop to pay."],
      ["Narrow roads", "Side roads are often one lane with marked passing places (møteplass). Whoever is nearest one reverses to it. Fold the mirrors, go slowly, wave."],
      ["Weather", "Viewpoints are worthless in cloud. Save Gaularfjellet, Loen and Vidsyn for clear days; do the museums, Florø and Astruptunet on grey ones."]
    ],
    links: [["yr.no forecast", "https://www.yr.no/en"]]
  },
  {
    id: "everyday",
    name: "Money, alcohol, water",
    kicker: "Practical",
    group: "tips",
    minutes: 0,
    distance: "Good to know",
    blurb:
      "Cards work everywhere, including trailhead car parks and roadside stalls — cash is genuinely unnecessary. Tap water is excellent. Tipping is not expected; round up if the meal was good.",
    facts: [
      ["Alcohol", "Beer in supermarkets until 20:00 weekdays and 18:00 Saturdays, never Sundays. Wine and spirits only at Vinmonopolet, closed Sundays. Drink-driving limit is effectively zero."],
      ["Right to roam", "Allemannsretten lets you walk, swim, camp and pick berries on uncultivated land — keep 150 m from houses, leave no trace, no open fires 15 April to 15 September."],
      ["Emergency", "113 medical · 112 police · 110 fire"]
    ],
    links: []
  }
];
