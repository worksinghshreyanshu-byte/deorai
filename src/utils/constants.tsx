import { AuthorDetails } from "./interface";

export const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Regional Info", href: "/regional-info" },
  { label: "Events", href: "/events" },
  { label: "Lands", href: "/lands" },
  { label: "Vanshawali", href: "/vanshawali" },
  { label: "History & Ancestors", href: "/history" },
  { label: "About the Author", href: "/about" },
  
];

//About Page
export const authorDetails: AuthorDetails = {
  title: "लेखक परिचय",
  subtitle: "लेखक · पटकथा लेखक · तकनीकी विशेषज्ञ",
  portraitLabel: "राहुल सिंह (घायल)",
  paragraphs: [
    "राहुल सिंह (घायल) का जन्म एवं पालन-पोषण भारत की शैक्षिक, सांस्कृतिक और ऐतिहासिक राजधानी काशी (वाराणसी) में हुआ। बचपन से ही उनकी संगीत, लेखन और नाट्य कला में गहरी रुचि रही। स्कूल और कॉलेज के वर्षों में उन्होंने कला के विभिन्न क्षेत्रों में सक्रिय रूप से सहभागिता की और अपनी सृजनात्मक प्रतिभा का निरंतर विकास किया।",

    "मुंबई से कंप्यूटर में स्नातकोत्तर डिप्लोमा प्राप्त करने के बाद उन्होंने एक कंपनी में जूनियर प्रोग्रामर के रूप में अपने करियर की शुरुआत की। हालांकि, लेखन के प्रति उनका लगाव उन्हें मायानगरी से दूर नहीं रख सका। वर्ष 2007 से 2011 के बीच उन्होंने कई टेलीविज़न धारावाहिकों और फ़िल्मों के लिए लेखन कार्य किया, जिनमें ‘सुपरस्टार’ (2008) और ‘सेमशूक’ (2010) विशेष रूप से उल्लेखनीय हैं। फ़िल्म ‘सेमशूक’ के लिए उन्हें एवं उनके सह-लेखक सुदीप शर्मा को न्यूयॉर्क फ़िल्म फ़ेस्टिवल में ‘Best Writer’ श्रेणी में नामांकित किया गया। इस फ़िल्म का चयन MAMI फ़िल्म फ़ेस्टिवल, मुंबई में भी हुआ और इसका प्रदर्शन किया गया।",

    "लेखन के साथ-साथ उन्होंने कंप्यूटर और प्रौद्योगिकी के क्षेत्र में भी विभिन्न कंपनियों जैसे Pay10, 1Pay, PayNearby और Atom Technologies के साथ महत्वपूर्ण पदों पर कार्य किया। वर्तमान में वे Pay10 में Global CTO के रूप में कार्यरत हैं, जहाँ वे तकनीकी नवाचार और नेतृत्व की महत्वपूर्ण जिम्मेदारियाँ निभा रहे हैं।",
  ],
};

export const wordsSection = {
  title: "Words That Endure",
  subtitle: "Selected verses by Rahul Singh",
  quotes: [
    {
      text: "In every grain of this soil sleeps a verse, waiting for the poet who knows how to listen.",
      author: "Rahul Singh",
    },
    {
      text: "Heritage is not what we inherit — it is what we choose to remember and retell.",
      author: "Rahul Singh",
    },
    {
      text: "The Ganges does not flow — it narrates, in a language older than memory.",
      author: "Rahul Singh",
    },
    {
      text: "My pen is a plough, and every poem a furrow sown with the seeds of the past.",
      author: "Rahul Singh",
    },
  ],
};

export const worksSection = {
  title: "Published Works",
  subtitle: "Stories and verses born from the sacred soil",
  works: [
    {
      category: "Poetry Collection",
      img:"/assets/author/authorBook.png",
      year: "2018",
      title: "Echoes of the Ganges",
      description:
        "A meditative anthology exploring the spiritual and cultural essence of Varanasi through verse.",
    },
    // {
    //   category: "Memoir",
    //   year: "2020",
    //   title: "The Landlord's Diary",
    //   description:
    //     "A deeply personal account of growing up on ancestral lands and the responsibility of heritage.",
    // },
    // {
    //   category: "Poetry",
    //   year: "2023",
    //   title: "Ink & Soil",
    //   description:
    //     "Where the poet meets the farmer — verses that celebrate the earth, the seasons, and rural wisdom.",
    // },
  ],
};

export const missionSection = {
  title: "The Poet's Mission",
  quote:
    "I believe that every village has a voice, every field has a verse, and every generation has a duty to record the melody of its time. My writing is not just art — it is an act of preservation, a bridge between the ancestors who shaped this land and the children who will inherit it.",
  citation: "Rahul Singh, in an interview with Sahitya Akademi, 2024",
};

//History Page
export interface TimelineItem {
  id: number;
  period: string;
  title: string;
  description: string;
}
export const timelineData: TimelineItem[] = [
  {
    id: 1,
    period: "1590",
    title: "Migration from Ayodhya",
    description:
      "Brahmadev and Nayandev left their ancestral village Dambhua in Ayodhya and journeyed toward Kashi. They were accompanied by Dhalman Gwala.",
  },

  {
    id: 2,
    period: "1590",
    title: "Marriage Alliance with Kashi",
    description:
      "Nayandev won the hand of Princess Indumati, daughter of the King of Kashi. The king granted territory that later became known as the Dobhi region.",
  },

  {
    id: 3,
    period: "Late 16th Century",
    title: "Rise of Baraichhabir",
    description:
      "Dhalman Gwala became revered as Baraichhabir. A temple was later established in his honor at Baraichha near Chandwak.",
  },

  {
    id: 4,
    period: "17th Century",
    title: "Settlement of Deorai",
    description:
      "Nayandev's sons Devrai and Nagairai settled in the region. The village of Deorai derived its name from Devrai.",
  },

  {
    id: 5,
    period: "17th Century",
    title: "Expansion of Nagairai's Line",
    description:
      "Nagairai's sons Vamdev and Goanvdev established branches in Vamvaavan (Vaasvari) and Chhoti Deorai, expanding the family's influence.",
  },

  {
    id: 6,
    period: "17th–18th Century",
    title: "Migration to New Regions",
    description:
      "Descendants settled in Mohanidih and Jamsar. Later generations migrated to Chunar and Mirzapur, extending the Raghuvanshi presence.",
  },

  {
    id: 7,
    period: "17th Century",
    title: "Line of Devrai",
    description:
      "Devrai's sons Bhuj Rai and Virahaj Rai remained in Deorai and strengthened the family's ancestral seat.",
  },

  {
    id: 8,
    period: "17th–18th Century",
    title: "Branch of Virahaj Rai",
    description:
      "Virahaj Rai's sons included Pukaar Rai, Gelhu, Melhu and Kewatu Rai. Kewatu Rai's descendants eventually spread across twenty-four villages in present-day West Bengal.",
  },

  {
    id: 9,
    period: "17th–18th Century",
    title: "Branch of Bhuj Rai",
    description:
      "Bhuj Rai's six sons established several important branches. Keel Rai remained in Deorai while Varmal Rai and Kuber Rai founded Varmalpur.",
  },

  {
    id: 10,
    period: "18th Century",
    title: "Legacy of Narsingh Das",
    description:
      "Through Keval Rai's descendants emerged Narsingh Das, whose lineage expanded into numerous villages across the region.",
  },

  {
    id: 11,
    period: "18th Century",
    title: "Harihar Singh's Legacy",
    description:
      "Harihar Singh became famous for extraordinary physical strength and spiritual devotion. Hariharpur is believed to be named after him.",
  },

  {
    id: 12,
    period: "18th–19th Century",
    title: "Expansion Through Ishwardas and Ramdev",
    description:
      "The descendants of Ishwardas and Ramdev established family branches across dozens of villages including Narayanpur, Kusumhi, Heerapur, Khujji and others.",
  },

  {
    id: 13,
    period: "19th Century",
    title: "The House of Keel Rai",
    description:
      "Keel Rai's sons Dhundhi Rai and Daman Singh led two influential branches. Their descendants became known for leadership, strength and social influence.",
  },

  {
    id: 14,
    period: "19th Century",
    title: "Dhautal Singh's Wisdom",
    description:
      "Narayan Singh's son Dhautal Singh earned recognition for wisdom, foresight and sound judgment, becoming one of the most respected figures in the lineage.",
  },

  {
    id: 15,
    period: "19th Century",
    title: "Valor of Jagatu Singh",
    description:
      "Jagatu Singh and his cousin Sannu Singh became celebrated in family tradition for bravery and military success.",
  },

  {
    id: 16,
    period: "Late 19th Century",
    title: "Continuation Through Vishveshwar Singh",
    description:
      "Among Jagatu Singh's sons, only Vishveshwar Singh carried the direct lineage forward through his son Tulsi Singh.",
  },

  {
    id: 17,
    period: "Early 20th Century",
    title: "Tulsi Singh's Generation",
    description:
      "Tulsi Singh had three sons—Ram Niranjan, Gurucharan (Bhagwati Charan Singh), and Bhagwatideen Singh. The main lineage continued through Ram Niranjan.",
  },

  {
    id: 18,
    period: "Indian Freedom Movement",
    title: "Kashinath Singh",
    description:
      "Kashinath Singh, son of Ram Niranjan, became a scholar, Gandhian and freedom fighter. He actively participated in India's independence movement despite family opposition.",
  },

  {
    id: 19,
    period: "Modern Era",
    title: "The Next Generation",
    description:
      "Kashinath Singh and Shyama Devi were blessed with three sons: Dr. Rudra Pratap Singh, Raghvendra Pratap Singh and Jagdish Pratap Singh.",
  },
];
//Family tree

export const familyData = {
  title: "Raghuvanshi Vanshavali - Deorai",
  rootGeneration: [
    { name: "Bramhadev" },
    {
      name: "Nayandev",
      children: [
        {
          name: "Devrai",
          children: [
            {
              name: "Bhujrai",
              children: [
                {
                  name: "Keelrai",
                  children: [
                    {
                      name: "Dhundhirai",
                      children: [
                        {
                          name: "Narayan Singh",
                          children: [
                            {
                              name: "Dhautal Singh",
                              children: [
                                {
                                  name: "Jagatu Singh",
                                  children: [
                                    { name: "Vishweshvar Singh" },
                                    {
                                      name: "Lal Bahadur Singh",
                                      children: [
                                        {
                                          name: "Tulsi Singh",
                                          children: [
                                            { name: "Ram Niranjan" },
                                            {
                                              name: "Gurucharan Singh",
                                              children: [
                                                {
                                                  name: "Kashinath Singh",
                                                  children: [
                                                    {
                                                      name: "Rudra Pratap Singh",
                                                      children: [
                                                        { name: "Anshuman Singh" },
                                                        { name: "Ashutosh Singh" },
                                                        { name: "Rahul Singh" }
                                                      ]
                                                    },
                                                    {
                                                      name: "Raghavendra Pratap Singh",
                                                      children: [
                                                        { name: "Prashant Singh" },
                                                        { name: "Rohit Singh" }
                                                      ]
                                                    },
                                                    {
                                                      name: "Jagdish Pratap Singh",
                                                      children: [
                                                        { name: "Manish Singh" },
                                                        { name: "Gaurav Singh" }
                                                      ]
                                                    }
                                                  ]
                                                }
                                              ]
                                            },
                                            { name: "Bhagawati Charan Singh" }
                                          ]
                                        }
                                      ]
                                    },
                                    { name: "Manglu Singh" }
                                  ]
                                },
                                { name: "Bhagatu Singh" }
                              ]
                            }
                          ]
                        },
                        { name: "Gurubakhsha Singh" },
                        { name: "Shivbakhsha Singh" }
                      ]
                    }
                  ]
                },
                { name: "Randheerrai" },
                { name: "Vermalrai" },
                { name: "Kuberrai" },
                { name: "Kevalrai" },
                { name: "Thakurai" }
              ]
            }
          ]
        },
        {
          name: "Nagairai",
          children: [
            {
              name: "Virhajrai",
              children: [
                { name: "Pukarrai" },
                { name: "Gelhu" },
                { name: "Melhu" },
                { name: "Kevaturai" }
              ]
            }
          ]
        }
      ]
    },
    { name: "Dhalman Gwala" },
    { name: "Daman Singh" }
  ]
};
//Events Page
export interface EventItem {
  id: number;
  title: string;
  slug: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  about?: string;
  significance?: string;
}

export const events: EventItem[] = [
  {
    id: 1,
    title: "Annual Harvest Festival",
    slug: "annual-harvest-festival",
    date: "March 15, 2026",
    time: "6:00 AM onwards",
    location: "Ancestral Farmland",
    description:
      "Celebrating the bountiful harvest with traditional rituals, folk music, and community feasting.",
    about:
      "The Annual Harvest Festival is a grand celebration of the bounty of the earth. Families gather at the ancestral farmland to offer prayers of gratitude, participate in traditional rituals, and enjoy a community feast prepared from the freshly harvested grain. Folk musicians perform throughout the day, and the evening culminates in a bonfire celebration with storytelling by the village elders.",
    image: "/assets/events/event1.jpg",
    significance:
      "This festival has been celebrated by the Singh family for over five generations. It symbolizes the deep connection between the family, the land, and the seasons. The ritual of offering the first sheaf of wheat to the family deity is a tradition that dates back centuries.",
  },
  {
    id: 2,
    title: "Ganga Aarti Celebration",
    slug: "ganga-aarti-celebration",
    date: "April 10, 2026",
    time: "6:30 PM",
    location: "Village Ghats",
    description:
      "A grand evening aarti on the banks of the Ganges, with devotional songs and oil offerings.",
    about:
      "A spectacular evening ceremony on the ghats, where hundreds of oil lamps are lit and offered to the sacred Ganges. The aarti is accompanied by devotional chanting, conch shells, and the rhythmic ringing of bells. The entire village participates, creating a breathtaking spectacle of light and devotion.",
    image: "/assets/events/event2.jpg",
    significance:
      "The Ganga Aarti at our village ghats is modeled after the famous ceremony at Dashashwamedh Ghat in Varanasi but retains its own unique village character. It was revived by Rahul Singh to strengthen community bonds and preserve this ancient tradition.",
  },
  {
    id: 3,
    title: "Poetry Recital Evening",
    slug: "poetry-recital-evening",
    date: "May 5, 2026",
    time: "5:00 PM",
    location: "Village Homestead Courtyard",
    about:
      "An intimate gathering of literature lovers in the ancestral courtyard, where Rahul Singh and invited poets share their works. The evening features classical sitar and tabla accompaniment, chai served in traditional kulhads, and conversations about the literary traditions of Varanasi. Attendees are encouraged to share their own compositions.",
    description:
      "An intimate evening of poetry and guest performances, accompanied by classical music.",
    image: "/assets/events/event3.jpg",
    significance:
      "This event celebrates the literary heritage of the region and Rahul Singh's personal mission to keep the tradition of Urdu and Hindi poetry alive. Past events have attracted renowned poets from across Uttar Pradesh.",
  },
];

//Regional Info

export const villageData = {
  name: "Deorai",
  localName: "देोरई",
  alternateName: "Devrai",

  location: {
    block: "Kerakat",
    district: "Jaunpur",
    state: "Uttar Pradesh",
    division: "Varanasi",
    country: "India",
  },

  language: ["Hindi", "Urdu"],

  geography: {
    elevation: {
      value: 83,
      unit: "meters",
      description: "Above Sea Level",
    },
    rivers: [
      "Sai River",
      "Barwa Nadi",
    ],
  },

  transport: {
    nationalHighways: [
      "NH135A",
    ],
  },

  postal: {
    pinCode: "222129",
    stdCode: "05450",
    postOffice: "Chandwak",
  },

  administration: {
    assemblyConstituency: "Kerakat",
    mla: "Tufani Saroj",
    lokSabhaConstituency: "Machhlishahr",
    mp: "Priya Saroj",
    serpanch: null,
  },

  market: {
    commodities: "Varanasi (F&V) Market / Mandi",
  },

  weather: {
    current: {
      temperature: "35.9°C",
      condition: "Scattered Clouds",
      humidity: "42%",
      wind: "5.59 m/s (West)",
      station: "RahuaNAlu0081thpur",
      observed: "2 hours ago",
    },

    forecast: [
      {
        date: "2026-07-13",
        temperature: {
          min: 31.8,
          max: 38.4,
        },
        conditions: [
          "Few Clouds",
          "Scattered Clouds",
          "Broken Clouds",
          "Overcast Clouds",
        ],
      },
      {
        date: "2026-07-14",
        temperature: {
          min: 31.3,
          max: 42.3,
        },
        conditions: [
          "Light Rain",
          "Overcast Clouds",
          "Broken Clouds",
        ],
      },
      {
        date: "2026-07-15",
        temperature: {
          min: 28.3,
          max: 37.2,
        },
        conditions: ["Overcast Clouds", "Light Rain"],
      },
      {
        date: "2026-07-16",
        temperature: {
          min: 28.4,
          max: 30.6,
        },
        conditions: ["Overcast Clouds", "Broken Clouds"],
      },
      {
        date: "2026-07-17",
        temperature: {
          min: 30.0,
          max: 42.1,
        },
        conditions: [
          "Overcast Clouds",
          "Broken Clouds",
          "Light Rain",
        ],
      },
    ],
  },
};

export const villageOverview = {
  description:
    "Deorai is a village in Kerakat Block of Jaunpur district, Uttar Pradesh, India. It belongs to the Varanasi Division and is located 41 km east of the district headquarters, Jaunpur, 13 km from Kerakat, and approximately 290 km from the state capital, Lucknow.",

  postal: {
    pinCode: "222129",
    headPostOffice: "Chandwak",
  },

  nearbyVillages: [
    {
      name: "Bhainsa",
      distanceKm: 3,
    },
    {
      name: "Bantari",
      distanceKm: 3,
    },
    {
      name: "Umarwar",
      distanceKm: 4,
    },
    {
      name: "Ratnupur",
      distanceKm: 4,
    },
    {
      name: "Shivram Pur Khurd",
      distanceKm: 4,
    },
  ],

  surroundingBlocks: {
    north: "Dobhi Block",
    west: "Pindra Block",
    south: "Haraua Block",
  },

  nearestCities: [
    "Saidpur",
    "Ghazipur",
    "Varanasi",
    "Jaunpur",
    "Mau",
  ],

  districtBorders: {
    onBorderOf: [
      "Jaunpur District",
      "Varanasi District",
    ],
    neighboringDistrict: "Azamgarh",
  },
};

export const pollingStations = [
  "PS Bagerwa",
  "PS Devrai North Side",
  "PS Bansbari West Side",
  "PS Parihar Chavani",
  "PS Baraich",
];

export const transportation = {
  rail: {
    nearestStation: "Dobhi Railway Station",
    description: "Dobhi Railway Station is the nearest railway station to Deorai.",
  },
};

export const nearbyColleges = [
  {
    name: "Shri Krishna Sanskrit Secondary School Jaigopalganj",
    address: "",
  },
  {
    name: "Shri Ganesh Raj PG College, Dobhi",
    address: "",
  },
  {
    name: "Public Inter College",
    address: "",
  },
  {
    name: "Vbspu Ratnupur",
    address: "",
  },
  {
    name: "Kaushilya College, Balua Chandwak, Jaunpur",
    address: "Balua Baraich, Chandwak",
  },
];

export const schools = [
  {
    name: "UPS Devrai",
    address:
      "Devrai, Kerakat, Jaunpur, Uttar Pradesh - 222129, Post - Chandwak",
  },
];

export const nearbyHealthCenters = [
  {
    name: "BARICHHA",
    village: "Barichha",
  },
  {
    name: "Sindhora",
    village: "Sindhora",
  },
  {
    name: "Basantpur",
    village: "Basantpur",
  },
];

export const census2011 = {
  year: 2011,

  population: {
    total: 1763,
    houses: 277,
    femalePercentage: 49.5,
    femalePopulation: 873,
  },

  literacy: {
    totalRate: 63.4,
    literates: 1118,
    femaleRate: 27.6,
    femaleLiterates: 487,
  },

  demographics: {
    scheduledTribes: {
      percentage: 0.0,
      population: 0,
    },
    scheduledCastes: {
      percentage: 46.0,
      population: 811,
    },
    workingPopulationPercentage: 28.1,
    childrenAge0To6: {
      total: 246,
      girlsPercentage: 45.9,
      girlsPopulation: 113,
    },
  },
};

export const villagePolitics = {
  majorPoliticalParties: [
    "BJP",
    "SP",
    "BSP",
  ],
};
export const subVillages = [
  "Devrai (Hb1)",
  "Devrai (Mb)",
  "Devrai (Hb2)",
  "Devrai (Hb4)",
  "Devrai (M)",
  "Devrai (Yb2)",
  "Devrai (Yb1)",
  "Devrai (Hb3)",
];

export const nearbyBusStops = [
  {
    name: "Sindhora Bus Stop",
    address:
      "Garakhara - Sindhora Road, Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.4,
  },
  {
    name: "Garakhara Bus Stop",
    address:
      "Garakhara - Sindhora Road, Garakhara, Uttar Pradesh 221110, India",
    distanceKm: 5.7,
  },
  {
    name: "Garakhara Bus Stop",
    address:
      "Garakhara - Thanagaddi Road, Uttar Pradesh 222181, India",
    distanceKm: 6.8,
  },
  {
    name: "Thanagaddi Bus Stop",
    address:
      "Garakhara - Thanagaddi Road, Police Station, Uttar Pradesh 222181, India",
    distanceKm: 10.0,
  },
];

export const nearbyAtms = [
  {
    name: "ICICI ATM",
    address: "Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.2,
  },
  {
    name: "India No. 1 ATM",
    address: "Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.4,
  },
  {
    name: "Union Bank ATM",
    address: "Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.5,
  },
  {
    name: "HDFC ATM",
    address: "Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.5,
  },
];

export const nearbyCinemaTheatres = [
  {
    name: "SAHANI MIXING LAB",
    address: "Bhawanipur, Uttar Pradesh 221101, India",
    distanceKm: 8.2,
  },
  {
    name: "Bhadwan Danjung Varanasi",
    address: "Bhadwan, Uttar Pradesh 221101, India",
    distanceKm: 8.4,
  },
  {
    name: "Kerakat Cinema Hall",
    address: "Dalal Tola, Abdulapur, Uttar Pradesh 222142, India",
    distanceKm: 13.7,
  },
  {
    name: "DSV Entertainment (P) Ltd",
    address: "Lodhan, Uttar Pradesh 221003, India",
    distanceKm: 21.3,
  },
];

export const nearbyTemples = [
  {
    name: "Temple",
    address: "Deorai, Uttar Pradesh 222129, India",
    distanceKm: 0.3,
  },
  {
    name: "Bhagat Sukhram Yadav",
    address: "Deorai, Uttar Pradesh 222129, India",
    distanceKm: 0.3,
  },
  {
    name: "Durga Mata Temple Barahimpur (Late Baba Vishwanath Yadav)",
    address: "Barahimpur, Uttar Pradesh 222129, India",
    distanceKm: 0.5,
  },
  {
    name: "Om Shri Shiv Ji Temple Rupchandrapur",
    address: "Roop Chandpur, Uttar Pradesh 221208, India",
    distanceKm: 1.8,
  },
];

export const nearbyMosques = [
  {
    name: "Rupchandrapur Mosque",
    address: "Mohanidih, Uttar Pradesh 221208, India",
    distanceKm: 1.8,
  },
  {
    name: "Aatala Masjib",
    address: "Jaunpur, Uttar Pradesh 222129, India",
    distanceKm: 8.5,
  },
  {
    name: "Unnamed Mosque",
    address: "Devnath Pur, Uttar Pradesh 222181, India",
    distanceKm: 10.1,
  },
];

export const nearbyHotelsAndLodges = [
  {
    name: "Guru Prasad Egg",
    address: "Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.1,
  },
  {
    name: "Kishna Gao Sindoraaa",
    address:
      "Garakhara - Sindhora Road, Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.5,
  },
  {
    name: "Babu Devidutt Singh Villa",
    address: "Bhainsa, Taluka Kerakat, Uttar Pradesh 222129, India",
    distanceKm: 4.0,
  },
  {
    name: "Pandey Niwas Bansipura",
    address: "Bhainsa, Uttar Pradesh 222129, India",
    distanceKm: 4.8,
  },
  {
    name: "yadav.sweet shop",
    address: "Ratanpur, Mahuli, Uttar Pradesh, India",
    distanceKm: 5.0,
  },
];

export const nearbyRestaurants = [
  {
    name: "GULRA",
    address: "Varanasi, Uttar Pradesh, India",
    distanceKm: 1.0,
  },
  {
    name: "Lav Kush Fast Food Chat Corner",
    address:
      "Sindhora - Garthama Road, Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 2.8,
  },
  {
    name: "Vishal Chinese Fast Food",
    address:
      "Sindhora Market, Varanasi, Uttar Pradesh 221208, India",
    distanceKm: 3.4,
  },
  {
    name: "Harinath Tomato Chat Bhandar",
    address: "Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.4,
  },
  {
    name: "Banarasi Pakode Wale",
    address:
      "Garakhara - Sindhora Road, Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.5,
  },
];

export const nearbyHospitals = [
  {
    name: "Government Hospital",
    address: "Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 2.7,
  },
  {
    name: "Pratigya Hospital",
    address: "Varanasi, Uttar Pradesh 221208, India",
    distanceKm: 2.7,
  },
  {
    name: "Shiv Shadhana Hospital",
    address:
      "Sindhora, T Road, Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.1,
  },
  {
    name: "Jivan Jyoti Pali Clinic",
    address: "Caste, Uttar Pradesh 221208, India",
    distanceKm: 3.3,
  },
];

export const nearbyPetrolPumps = [
  {
    name: "Indian Oil Petrol Pump",
    address: "Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.3,
  },
  {
    name: "HP Petrol Pump - Aditya Filling Station",
    address:
      "Sarai Sheikh Lord PO BZR DT Varanasi UP, Sindhora, Varanasi, Uttar Pradesh 221208, India",
    distanceKm: 5.2,
  },
  {
    name: "Indian Oil Petrol Pump",
    address: "Dehri, Uttar Pradesh 221101, India",
    distanceKm: 5.4,
  },
  {
    name: "Petrol Pump",
    address: "Sarai Shekhla, Uttar Pradesh 221208, India",
    distanceKm: 5.6,
  },
];

export const colleges = [
  {
    name: "Gaurav College",
    address: "Devrai, Danganj, Varanasi, Uttar Pradesh 222129, India",
    distanceKm: 2.6,
  },
  {
    name: "Shiv Shakti Polytechnic",
    address:
      "Shree Ram Katara, Sindhora Market, Varanasi, Uttar Pradesh 221208, India",
    distanceKm: 3.3,
  },
  {
    name: "Shiv Shakti Mahila Polytechnic",
    address:
      "Shree Ram Katara, Sindhora Market, Varanasi, Uttar Pradesh 221208, India",
    distanceKm: 3.3,
  },
  {
    name: "Om Sai Computer Institute",
    address:
      "Near Swati Pali Clinic, Basantpur, Sindhora, District Varanasi, Uttar Pradesh 221208, India",
    distanceKm: 3.6,
  },
];

export const schoolsNearby = [
  {
    name: "Barahimpur School",
    address: "Jaunpur, Uttar Pradesh 222129, India",
    distanceKm: 0.7,
  },
  {
    name: "Parapati School",
    address: "Parapati, Uttar Pradesh 222129, India",
    distanceKm: 0.8,
  },
  {
    name: "Pt. RamSurat Inter College, Punchandrapur, Varanasi",
    address: "Mohanidih, Uttar Pradesh 222129, India",
    distanceKm: 1.2,
  },
  {
    name: "PS Mohani Deeh",
    address: "Mohanidih, Uttar Pradesh 222129, India",
    distanceKm: 1.5,
  },
  {
    name: "Mohanidih School",
    address: "Mohanidih, Uttar Pradesh 221101, India",
    distanceKm: 1.5,
  },
];

export const electronicShops = [
  {
    name: "MOHAN MOBILE COMMUNICATION",
    address: "Mohanidih, Uttar Pradesh 222129, India",
    distanceKm: 1.5,
  },
  {
    name: "Bharat Electronics",
    address:
      "Sindhora Road, Orderly Market, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.1,
  },
  {
    name: "Pramod Electronics",
    address:
      "Sindhora Market, Varanasi, Uttar Pradesh 221208, India",
    distanceKm: 3.2,
  },
];

export const supermarkets = [
  {
    name: "Khojjan Bangle Shop",
    address: "Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.3,
  },
  {
    name: "Sai Jane's Parlor",
    address:
      "Garakhara - Sindhora Road, Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.4,
  },
  {
    name: "Mahadev Welding Works And Furniture Shop",
    address: "Sindhora, Basantpura, Uttar Pradesh 221208, India",
    distanceKm: 3.5,
  },
];

export const localParks = [
  {
    name: "Singh Sahib's Garden",
    address: "Laharpur, Danganj, Uttar Pradesh 221101, India",
    distanceKm: 5.5,
  },
  {
    name: "Ashok Vatika Bagerwan Village",
    address: "Bagerwan, Uttar Pradesh 222129, India",
    distanceKm: 8.5,
  },
  {
    name: "Dr. BR Ambedkar Park",
    address: "Nadoy, Uttar Pradesh 221206, India",
    distanceKm: 11.6,
  },
];

export const nearbyPoliceStations = [
  {
    name: "Cholapur Police Station",
    address:
      "NH-233, Azamgarh–Varanasi Road, Cholapur, Uttar Pradesh 221101, India",
    distanceKm: 9.9,
  },
  {
    name: "Thanagaddi Police Station",
    address: "Police Station, Uttar Pradesh 222181, India",
    distanceKm: 10.7,
  },
  {
    name: "Kerakat Police Station",
    address: "Market, Kerakat, Uttar Pradesh 222142, India",
    distanceKm: 14.0,
  },
];

export const nearbyGovernmentOffices = [
  {
    name: "Police Station",
    address: "Varanasi, Uttar Pradesh 221208, India",
    distanceKm: 3.3,
  },
  {
    name: "Panchayat Bhawan Basantpur",
    address: "Basantpur, Uttar Pradesh 221110, India",
    distanceKm: 4.5,
  },
  {
    name: "Election Building",
    address:
      "Cholapur, NH-233, Varanasi–Azamgarh Road, Varanasi, Uttar Pradesh 221101, India",
    distanceKm: 4.9,
  },
];


//Land

export interface Land {
  id: string;
  title: string;
  description: string;
  area: string;
  image: string;
  slug: string;
  gallery: string[];
  details: string;
}

export const lands: Land[] = [
  {
    id: "1",
    title: "Ancestral Farmland",
    description:
      "Golden wheat fields passed down through seven generations.",
    area: "12 Bigha",
    image: "/assets/lands/land1.jpg",
    slug: "ancestral-farmland",
    details:
      "This farmland has sustained the family for generations. Wheat in winter and rice in monsoon are cultivated using traditional methods.",
    gallery: [
      "/assets/lands/land1.jpg",
      "/assets/lands/land2.jpg",
      "/assets/lands/land3.jpg",
    ],
  },
  {
    id: "2",
    title: "The Mango Grove",
    description:
      "A lush orchard of ancient mango trees, some over 150 years old.",
    area: "8 Bigha",
    image: "/assets/lands/land2.jpg",
    slug: "mango-grove",
    details:
      "An orchard of rare mango varieties with trees over a century old.",
      gallery: [
        "/assets/lands/land1.jpg",
        "/assets/lands/land2.jpg",
        "/assets/lands/land3.jpg",
      ],
  },
  {
    id: "3",
    title: "Village Homestead",
    description:
      "The ancestral seat with the iconic heritage pond and haveli",
    area: "8 Bigha",
    image: "/assets/lands/land3.jpg",
    slug: "village-homestead",
    details:
      "An orchard of rare mango varieties with trees over a century old.",
      gallery: [
        "/assets/lands/land1.jpg",
        "/assets/lands/land2.jpg",
        "/assets/lands/land3.jpg",
      ],
  },
];
