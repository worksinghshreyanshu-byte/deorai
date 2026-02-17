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
  title: "The Author",
  subtitle: "Poet · Historian · Land Custodian",
  portraitLabel: "Author's Portrait",
  paragraphs: [
    "Born in the shadow of the ghats of Varanasi, the author grew up listening to tales of ancestors who once walked the corridors of Mughal courts. Educated at Banaras Hindu University, they pursued a lifelong passion for literature, history, and the preservation of cultural heritage.",
    "Their works span poetry, historical fiction, and non-fiction — all rooted in the rich soil of the Gangetic plain. Every page is an ode to the village, the ancestors, and the timeless spirit of Kashi. Through their writing, they bridge generations, turning oral traditions into enduring literature.",
    "When not writing, the author tends to the family lands, participates in village governance, and hosts literary evenings that draw poets and scholars from across the region.",
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
      year: "2018",
      title: "Echoes of the Ganges",
      description:
        "A meditative anthology exploring the spiritual and cultural essence of Varanasi through verse.",
    },
    {
      category: "Memoir",
      year: "2020",
      title: "The Landlord's Diary",
      description:
        "A deeply personal account of growing up on ancestral lands and the responsibility of heritage.",
    },
    {
      category: "Poetry",
      year: "2023",
      title: "Ink & Soil",
      description:
        "Where the poet meets the farmer — verses that celebrate the earth, the seasons, and rural wisdom.",
    },
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
  image?: string;
}

export const historyTimeline: TimelineItem[] = [
  {
    id: 1,
    period: "Mughal Period • c. 1650",
    title: "The Aurangzeb Connection",
    description:
      "During the reign of Emperor Aurangzeb, the village lands were granted as a jagir to the ancestors of the Singh family for their valor and service. The Mughal farmans established hereditary rights over these lands.",
    image: "/assets/history/history1.jpg",
  },
  {
    id: 2,
    period: "Late Mughal Era • c. 1720",
    title: "Building the Foundation",
    description:
      "As Mughal power waned, the Singh family consolidated their holdings and began constructing permanent structures including the first haveli and village temple.",
  },
  {
    id: 3,
    period: "The First War of Independence • c. 1857",
    title: "Winds of Revolution",
    description:
      "During the uprising of 1857, members of the Singh family supported freedom fighters and provided shelter to those fleeing British reprisals.",
    image: "/assets/history/history2.jpg",
  },
  {
    id: 4,
    period: "Pre-Independence • c. 1920",
    title: "Modernization & Reform",
    description:
      "The family embraced education and modern farming while maintaining traditional values. Irrigation canals were built and the first school was established.",
  },
  {
    id: 5,
    period: "Independence • 1947",
    title: "A Free India",
    description:
      "With India's independence, the family navigated land reforms while preserving the ancestral core of their estate.",
  },
  {
    id: 6,
    period: "Modern Era • Present",
    title: "Heritage & Literature",
    description:
      "Rahul Singh continues the family legacy not just as custodian of the lands but as a literary voice preserving stories for future generations.",
    image: "/assets/history/history3.jpg",
  },
];

//Family tree
export interface FamilyMember {
  id: string;
  name: string;
  highlight?: boolean;
  children?: FamilyMember[];
}

export const familyTree: FamilyMember = {
  id: "root",
  name: "Raghuvanshi Vanshavali - Deorai",
  children: [
    {
      id: "bramhadev",
      name: "Bramhadev",
      children: [
        {
          id: "deorai",
          name: "Deorai",
          children: [
            {
              id: "bhujrai",
              name: "Bhujrai",
              children: [
                {
                  id: "dhundhiraj",
                  name: "Dhundhiraj",
                  children: [
                    {
                      id: "narayan",
                      name: "Narayan Singh",
                    },
                    {
                      id: "gurubakhsha",
                      name: "Gurubakhsha Singh",
                    },
                    {
                      id: "shivbakhsha",
                      name: "Shivbakhsha Singh",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: "dhawal",
      name: "Dhawal Singh",
      children: [
        {
          id: "jagatu",
          name: "Jagatu Singh",
          children: [
            {
              id: "vishweshwar",
              name: "Vishweshwar Singh",
            },
            {
              id: "lalbahadur",
              name: "Lal Bahadur Singh",
            },
            {
              id: "manglu",
              name: "Manglu Singh",
            },
          ],
        },
      ],
    },

    {
      id: "kashinath",
      name: "Kashinath Singh",
      children: [
        {
          id: "rudra",
          name: "Rudra Pratap Singh",
          highlight: true,
          children: [
            { id: "anshuman", name: "Anshuman Singh" },
            { id: "ashutosh", name: "Ashutosh Singh" },
            { id: "rahul", name: "Rahul Singh" },
          ],
        },
        {
          id: "raghavendra",
          name: "Raghavendra Pratap Singh",
          children: [
            { id: "prashant", name: "Prashant Singh" },
            { id: "rohit", name: "Rohit Singh" },
          ],
        },
        {
          id: "jagdish",
          name: "Jagdish Pratap Singh",
          children: [
            { id: "manish", name: "Manish Singh" },
            { id: "gaurav", name: "Gaurav Singh" },
          ],
        },
      ],
    },
  ],
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
export interface RegionalCard {
  id: number;
  title: string;
  description: string;
  icon: string; // icon name reference
}

export const regionalOverviewData: RegionalCard[] = [
  {
    id: 1,
    title: "District & Location",
    description:
      "Situated in the Varanasi district of Uttar Pradesh, the village lies approximately 25 km from the city center, connected by state highways and rural roads winding through lush green countryside.",
    icon: "map",
  },
  {
    id: 2,
    title: "Administrative Division",
    description:
      "Falls under the Pindra tehsil, within the jurisdiction of the Varanasi Division. The village panchayat oversees local governance with deep community involvement.",
    icon: "building",
  },
  {
    id: 3,
    title: "River & Water Bodies",
    description:
      "The sacred Ganges flows nearby, with several village ponds (pokhras) that serve as communal gathering spots, irrigation sources, and habitats for native wildlife.",
    icon: "waves",
  },
  {
    id: 4,
    title: "Geography & Climate",
    description:
      "The Gangetic plain offers flat, fertile terrain with hot summers, monsoon rains, and mild winters. The alluvial soil supports rich agricultural output year-round.",
    icon: "mountain",
  },
  {
    id: 5,
    title: "Educational Institutions",
    description:
      "The region hosts several primary and secondary schools, with Banaras Hindu University — one of Asia's largest residential universities — within accessible distance.",
    icon: "book",
  },
  {
    id: 6,
    title: "Local Cuisine & Culture",
    description:
      "Famous for Banarasi paan, kachori-sabzi, lassi, and the iconic Banarasi silk weaving tradition that has been a UNESCO-recognized craft for centuries.",
    icon: "food",
  },
];

export const nearbyLandmarks = [
  "Kashi Vishwanath Temple",
  "Dashashwamedh Ghat",
  "Sarnath (Buddhist pilgrimage)",
  "Ramnagar Fort",
  "Banaras Hindu University",
  "Chunar Fort",
];


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
