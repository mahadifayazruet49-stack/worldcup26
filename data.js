/* ===================== WORLD CUP 2026 — DATA ===================== *
 * Compiled from public schedule/standings info as of June 23, 2026.
 * Tournament: June 11 – July 19, 2026 · Canada, Mexico, USA · 48 teams · 104 matches
 * ================================================================== */

const FLAGS = {
  MEX:"🇲🇽", RSA:"🇿🇦", KOR:"🇰🇷", CZE:"🇨🇿", CAN:"🇨🇦", BIH:"🇧🇦",
  USA:"🇺🇸", PAR:"🇵🇾", QAT:"🇶🇦", SUI:"🇨🇭", BRA:"🇧🇷", MAR:"🇲🇦",
  SCO:"🏴", HTI:"🇭🇹", AUS:"🇦🇺", TUR:"🇹🇷", GER:"🇩🇪", CUW:"🇨🇼",
  CIV:"🇨🇮", ECU:"🇪🇨", NED:"🇳🇱", JPN:"🇯🇵", SWE:"🇸🇪", TUN:"🇹🇳",
  ESP:"🇪🇸", CPV:"🇨🇻", KSA:"🇸🇦", BEL:"🇧🇪", EGY:"🇪🇬", IRN:"🇮🇷",
  NZL:"🇳🇿", FRA:"🇫🇷", SEN:"🇸🇳", NOR:"🇳🇴", IRQ:"🇮🇶", ARG:"🇦🇷",
  ALG:"🇩🇿", AUT:"🇦🇹", JOR:"🇯🇴", COL:"🇨🇴", UZB:"🇺🇿", POR:"🇵🇹",
  COD:"🇨🇩", ENG:"🏴󠁧󠁢󠁥󠁮󠁧󠁿", GHA:"🇬🇭", PAN:"🇵🇦", CRO:"🇭🇷", URU:"🇺🇾"
};

const TEAM_NAMES = {
  MEX:"Mexico", RSA:"South Africa", KOR:"Korea Republic", CZE:"Czechia",
  CAN:"Canada", BIH:"Bosnia & Herzegovina", USA:"USA", PAR:"Paraguay",
  QAT:"Qatar", SUI:"Switzerland", BRA:"Brazil", MAR:"Morocco",
  SCO:"Scotland", HTI:"Haiti", AUS:"Australia", TUR:"Türkiye",
  GER:"Germany", CUW:"Curaçao", CIV:"Ivory Coast", ECU:"Ecuador",
  NED:"Netherlands", JPN:"Japan", SWE:"Sweden", TUN:"Tunisia",
  ESP:"Spain", CPV:"Cape Verde", KSA:"Saudi Arabia", BEL:"Belgium",
  EGY:"Egypt", IRN:"IR Iran", NZL:"New Zealand", FRA:"France",
  SEN:"Senegal", NOR:"Norway", IRQ:"Iraq", ARG:"Argentina",
  ALG:"Algeria", AUT:"Austria", JOR:"Jordan", COL:"Colombia",
  UZB:"Uzbekistan", POR:"Portugal", COD:"Congo DR", ENG:"England",
  GHA:"Ghana", PAN:"Panama", CRO:"Croatia", URU:"Uruguay"
};

// ----- STADIUMS -----
const STADIUMS = [
  { name:"Mexico City Stadium", city:"Mexico City, Mexico", capacity:"83,000", note:"Hosted the tournament opener: Mexico 2–0 South Africa." },
  { name:"Guadalajara Stadium", city:"Guadalajara, Mexico", capacity:"48,000", note:"Group A host venue." },
  { name:"Monterrey Stadium", city:"Monterrey, Mexico", capacity:"53,500", note:"Group F host venue." },
  { name:"Toronto Stadium (BMO Field)", city:"Toronto, Canada", capacity:"30,000", note:"Smallest capacity venue; hosts Canada group games." },
  { name:"Vancouver Stadium (BC Place)", city:"Vancouver, Canada", capacity:"54,500", note:"Western Region hub for Canada's later group games." },
  { name:"Los Angeles Stadium (SoFi)", city:"Inglewood, California", capacity:"70,000", note:"Hosted USA's opener: USA 4–1 Paraguay." },
  { name:"San Francisco Bay Area Stadium (Levi's)", city:"Santa Clara, California", capacity:"68,500", note:"Western Region group venue." },
  { name:"Seattle Stadium (Lumen Field)", city:"Seattle, Washington", capacity:"68,700", note:"Western Region group venue." },
  { name:"Dallas Stadium (AT&T Stadium)", city:"Arlington, Texas", capacity:"92,000", note:"Largest capacity venue in the tournament." },
  { name:"Houston Stadium (NRG Stadium)", city:"Houston, Texas", capacity:"72,200", note:"Hosted Germany 7–1 Curaçao." },
  { name:"Kansas City Stadium (Arrowhead)", city:"Kansas City, Missouri", capacity:"76,400", note:"Central Region group venue." },
  { name:"Atlanta Stadium (Mercedes-Benz)", city:"Atlanta, Georgia", capacity:"71,000", note:"Hosted Spain 0–0 Cape Verde." },
  { name:"Miami Stadium (Hard Rock)", city:"Miami Gardens, Florida", capacity:"64,800", note:"Hosts the third-place match on July 18." },
  { name:"Boston Stadium (Gillette)", city:"Foxborough, Massachusetts", capacity:"65,900", note:"Eastern Region group venue." },
  { name:"Philadelphia Stadium (Lincoln Financial Field)", city:"Philadelphia, Pennsylvania", capacity:"69,300", note:"Eastern Region group venue." },
  { name:"New York New Jersey Stadium (MetLife)", city:"East Rutherford, New Jersey", capacity:"82,500", note:"Hosts the FINAL on July 19, 2026." }
];

// ----- GROUPS -----
const GROUPS = {
  A: ["MEX","KOR","CZE","RSA"],
  B: ["CAN","SUI","BIH","QAT"],
  C: ["BRA","MAR","SCO","HTI"],
  D: ["USA","AUS","PAR","TUR"],
  E: ["GER","CIV","ECU","CUW"],
  F: ["NED","JPN","SWE","TUN"],
  G: ["EGY","IRN","BEL","NZL"],
  H: ["ESP","URU","CPV","KSA"],
  I: ["FRA","NOR","SEN","IRQ"],
  J: ["ARG","AUT","ALG","JOR"],
  K: ["COL","COD","POR","UZB"],
  L: ["ENG","GHA","PAN","CRO"]
};

// ----- STANDINGS (live as of June 23, 2026) -----
const STANDINGS = [
  {group:"A",team:"MEX",w:2,d:0,l:0,pts:6},
  {group:"A",team:"KOR",w:1,d:0,l:1,pts:3},
  {group:"A",team:"CZE",w:0,d:1,l:1,pts:1},
  {group:"A",team:"RSA",w:0,d:1,l:1,pts:1},

  {group:"B",team:"CAN",w:1,d:1,l:0,pts:4},
  {group:"B",team:"SUI",w:1,d:1,l:0,pts:4},
  {group:"B",team:"BIH",w:0,d:1,l:1,pts:1},
  {group:"B",team:"QAT",w:0,d:1,l:1,pts:1},

  {group:"C",team:"BRA",w:1,d:1,l:0,pts:4},
  {group:"C",team:"MAR",w:1,d:1,l:0,pts:4},
  {group:"C",team:"SCO",w:1,d:0,l:1,pts:3},
  {group:"C",team:"HTI",w:0,d:0,l:2,pts:0},

  {group:"D",team:"USA",w:2,d:0,l:0,pts:6},
  {group:"D",team:"AUS",w:1,d:0,l:1,pts:3},
  {group:"D",team:"PAR",w:1,d:0,l:1,pts:3},
  {group:"D",team:"TUR",w:0,d:0,l:2,pts:0},

  {group:"E",team:"GER",w:2,d:0,l:0,pts:6},
  {group:"E",team:"CIV",w:1,d:0,l:1,pts:3},
  {group:"E",team:"ECU",w:0,d:1,l:1,pts:1},
  {group:"E",team:"CUW",w:0,d:1,l:1,pts:1},

  {group:"F",team:"NED",w:1,d:1,l:0,pts:4},
  {group:"F",team:"JPN",w:1,d:1,l:0,pts:4},
  {group:"F",team:"SWE",w:1,d:0,l:1,pts:3},
  {group:"F",team:"TUN",w:0,d:0,l:2,pts:0},

  {group:"G",team:"EGY",w:1,d:1,l:0,pts:4},
  {group:"G",team:"IRN",w:0,d:2,l:0,pts:2},
  {group:"G",team:"BEL",w:0,d:2,l:0,pts:2},
  {group:"G",team:"NZL",w:0,d:1,l:1,pts:1},

  {group:"H",team:"ESP",w:1,d:1,l:0,pts:4},
  {group:"H",team:"URU",w:0,d:2,l:0,pts:2},
  {group:"H",team:"CPV",w:0,d:2,l:0,pts:2},
  {group:"H",team:"KSA",w:0,d:1,l:1,pts:1},

  {group:"I",team:"FRA",w:2,d:0,l:0,pts:6},
  {group:"I",team:"NOR",w:2,d:0,l:0,pts:6},
  {group:"I",team:"SEN",w:0,d:0,l:2,pts:0},
  {group:"I",team:"IRQ",w:0,d:0,l:2,pts:0},

  {group:"J",team:"ARG",w:2,d:0,l:0,pts:6},
  {group:"J",team:"AUT",w:1,d:0,l:1,pts:3},
  {group:"J",team:"ALG",w:1,d:0,l:1,pts:3},
  {group:"J",team:"JOR",w:0,d:0,l:2,pts:0},

  {group:"K",team:"COL",w:1,d:0,l:0,pts:3},
  {group:"K",team:"COD",w:0,d:1,l:0,pts:1},
  {group:"K",team:"POR",w:0,d:1,l:0,pts:1},
  {group:"K",team:"UZB",w:0,d:0,l:1,pts:0},

  {group:"L",team:"ENG",w:1,d:0,l:0,pts:3},
  {group:"L",team:"GHA",w:1,d:0,l:0,pts:3},
  {group:"L",team:"PAN",w:0,d:0,l:1,pts:0},
  {group:"L",team:"CRO",w:0,d:0,l:1,pts:0}
];

// ----- MATCHES (selection of group-stage fixtures, finished + upcoming) -----
// status: "FT" = full time (with score), "UPCOMING" = not yet played
const MATCHES = [
  { id:1, group:"A", home:"MEX", away:"RSA", date:"2026-06-11", time:"7:00 PM CT", stadium:"Mexico City Stadium", status:"FT", scoreHome:2, scoreAway:0, note:"Tournament opener. First goal of WC26 scored by Julián Quiñones." },
  { id:2, group:"A", home:"KOR", away:"CZE", date:"2026-06-12", time:"4:00 PM CT", stadium:"Guadalajara Stadium", status:"FT", scoreHome:2, scoreAway:1 },
  { id:3, group:"B", home:"CAN", away:"BIH", date:"2026-06-12", time:"7:00 PM ET", stadium:"Toronto Stadium", status:"FT", scoreHome:1, scoreAway:1 },
  { id:4, group:"D", home:"USA", away:"PAR", date:"2026-06-13", time:"3:00 PM PT", stadium:"Los Angeles Stadium", status:"FT", scoreHome:4, scoreAway:1 },
  { id:5, group:"B", home:"QAT", away:"SUI", date:"2026-06-13", time:"12:00 PM PT", stadium:"San Francisco Bay Area Stadium", status:"FT", scoreHome:1, scoreAway:1 },
  { id:6, group:"C", home:"BRA", away:"MAR", date:"2026-06-13", time:"6:00 PM ET", stadium:"New York New Jersey Stadium", status:"FT", scoreHome:1, scoreAway:1 },
  { id:7, group:"C", home:"SCO", away:"HTI", date:"2026-06-14", time:"4:00 PM ET", stadium:"Boston Stadium", status:"FT", scoreHome:1, scoreAway:1 },
  { id:8, group:"D", home:"AUS", away:"TUR", date:"2026-06-14", time:"3:00 PM PT", stadium:"Vancouver Stadium", status:"FT", scoreHome:2, scoreAway:0 },
  { id:9, group:"E", home:"GER", away:"CUW", date:"2026-06-14", time:"12:00 PM CT", stadium:"Houston Stadium", status:"FT", scoreHome:7, scoreAway:1, note:"Biggest margin so far in the tournament." },
  { id:10, group:"F", home:"NED", away:"JPN", date:"2026-06-14", time:"6:00 PM CT", stadium:"Dallas Stadium", status:"FT", scoreHome:2, scoreAway:2 },
  { id:11, group:"E", home:"CIV", away:"ECU", date:"2026-06-15", time:"5:00 PM ET", stadium:"Philadelphia Stadium", status:"FT", scoreHome:1, scoreAway:0 },
  { id:12, group:"F", home:"SWE", away:"TUN", date:"2026-06-15", time:"7:00 PM CT", stadium:"Monterrey Stadium", status:"FT", scoreHome:5, scoreAway:1 },
  { id:13, group:"H", home:"ESP", away:"CPV", date:"2026-06-15", time:"12:00 PM ET", stadium:"Atlanta Stadium", status:"FT", scoreHome:0, scoreAway:0 },
  { id:14, group:"G", home:"BEL", away:"EGY", date:"2026-06-15", time:"6:00 PM PT", stadium:"Seattle Stadium", status:"FT", scoreHome:1, scoreAway:1 },
  { id:15, group:"H", home:"KSA", away:"URU", date:"2026-06-15", time:"6:00 PM ET", stadium:"Miami Stadium", status:"FT", scoreHome:1, scoreAway:1 },
  { id:16, group:"G", home:"IRN", away:"NZL", date:"2026-06-15", time:"3:00 PM PT", stadium:"Los Angeles Stadium", status:"FT", scoreHome:2, scoreAway:2 },
  { id:17, group:"I", home:"FRA", away:"SEN", date:"2026-06-16", time:"4:00 PM ET", stadium:"New York New Jersey Stadium", status:"FT", scoreHome:3, scoreAway:1 },
  { id:18, group:"I", home:"NOR", away:"IRQ", date:"2026-06-16", time:"4:00 PM ET", stadium:"Boston Stadium", status:"FT", scoreHome:4, scoreAway:1 },
  { id:19, group:"J", home:"ARG", away:"ALG", date:"2026-06-16", time:"9:00 PM CT", stadium:"Kansas City Stadium", status:"FT", scoreHome:3, scoreAway:0 },
  { id:20, group:"J", home:"AUT", away:"JOR", date:"2026-06-16", time:"9:00 PM PT", stadium:"San Francisco Bay Area Stadium", status:"FT", scoreHome:3, scoreAway:1 },
  { id:21, group:"K", home:"POR", away:"COD", date:"2026-06-16", time:"1:00 PM CT", stadium:"Houston Stadium", status:"FT", scoreHome:1, scoreAway:1 },
  { id:22, group:"L", home:"ENG", away:"CRO", date:"2026-06-17", time:"3:00 PM CT", stadium:"Dallas Stadium", status:"FT", scoreHome:4, scoreAway:2 },
  { id:23, group:"L", home:"GHA", away:"PAN", date:"2026-06-17", time:"7:00 PM ET", stadium:"Toronto Stadium", status:"FT", scoreHome:1, scoreAway:0 },
  { id:24, group:"K", home:"COL", away:"UZB", date:"2026-06-17", time:"8:00 PM CT", stadium:"Mexico City Stadium", status:"FT", scoreHome:3, scoreAway:1 },
  { id:25, group:"A", home:"CZE", away:"RSA", date:"2026-06-18", time:"12:00 PM ET", stadium:"Atlanta Stadium", status:"FT", scoreHome:1, scoreAway:1 },
  { id:26, group:"B", home:"SUI", away:"BIH", date:"2026-06-18", time:"12:00 PM PT", stadium:"Los Angeles Stadium", status:"FT", scoreHome:4, scoreAway:1 },
  { id:27, group:"B", home:"CAN", away:"QAT", date:"2026-06-18", time:"3:00 PM PT", stadium:"Vancouver Stadium", status:"FT", scoreHome:6, scoreAway:0 },
  { id:28, group:"D", home:"PAR", away:"TUR", date:"2026-06-19", time:"12:00 PM PT", stadium:"San Francisco Bay Area Stadium", status:"FT", scoreHome:1, scoreAway:0 },
  { id:29, group:"F", home:"NED", away:"SWE", date:"2026-06-19", time:"12:00 PM CT", stadium:"Houston Stadium", status:"FT", scoreHome:5, scoreAway:1 },
  { id:30, group:"E", home:"GER", away:"CIV", date:"2026-06-19", time:"12:00 PM ET", stadium:"Toronto Stadium", status:"FT", scoreHome:2, scoreAway:1 },
  { id:31, group:"E", home:"ECU", away:"CUW", date:"2026-06-19", time:"9:00 PM CT", stadium:"Kansas City Stadium", status:"FT", scoreHome:0, scoreAway:0 },
  { id:32, group:"G", home:"ESP", away:"KSA", date:"2026-06-21", time:"12:00 PM CT", stadium:"Atlanta Stadium", status:"FT", scoreHome:1, scoreAway:1 },
  { id:33, group:"C", home:"MOR", away:"HTI", date:"2026-06-24", time:"6:00 PM ET", stadium:"Atlanta Stadium", status:"UPCOMING" },
  { id:34, group:"D", home:"PAR", away:"AUS", date:"2026-06-25", time:"10:00 PM ET", stadium:"San Francisco Bay Area Stadium", status:"UPCOMING" },
  { id:35, group:"K", home:"COD", away:"UZB", date:"2026-06-27", time:"7:30 PM ET", stadium:"Atlanta Stadium", status:"UPCOMING" },
  { id:36, group:"J", home:"JOR", away:"ARG", date:"2026-06-26", time:"9:00 PM CT", stadium:"Dallas Stadium", status:"UPCOMING" },
  { id:37, group:"L", home:"PAN", away:"CRO", date:"2026-06-27", time:"4:00 PM ET", stadium:"Boston Stadium", status:"UPCOMING" },
  { id:38, group:"L", home:"ENG", away:"GHA", date:"2026-06-27", time:"4:00 PM ET", stadium:"Boston Stadium", status:"UPCOMING" },
  { id:39, group:"R32", home:"TBD", away:"TBD", date:"2026-06-28", time:"TBD", stadium:"Various venues", status:"UPCOMING", note:"Round of 32 begins — winners and best third-place teams advance." },
  { id:40, group:"F", home:"FRA", away:"FRA", date:"2026-07-19", time:"3:00 PM ET", stadium:"New York New Jersey Stadium", status:"UPCOMING", note:"FINAL — featuring the tournament's first Super Bowl-style halftime show, curated by Chris Martin with Madonna, Shakira and BTS." }
];

// ----- TOP SCORERS (storylines as of June 23, 2026) -----
const SCORERS = [
  { name:"Lionel Messi", team:"ARG", goals:14, note:"Became the World Cup's all-time leading scorer this tournament." },
  { name:"Kylian Mbappé", team:"FRA", goals:5, note:"Brought up his 100th cap for France this tournament." },
  { name:"Erling Haaland", team:"NOR", goals:4, note:"Helped fire Norway into the knockout rounds." },
  { name:"Mohamed Salah", team:"EGY", goals:3, note:"Among Egypt's key attacking threats this campaign." },
  { name:"Cody Gakpo", team:"NED", goals:3, note:"Part of the Dutch attacking surge in the group stage." },
  { name:"Julián Quiñones", team:"MEX", goals:2, note:"Scored the first goal of the 2026 World Cup." },
  { name:"Serhou Guirassy", team:"CIV", goals:2 },
  { name:"Deniz Undav", team:"GER", goals:2, note:"Germany's 'super sub' of the group stage." }
];
