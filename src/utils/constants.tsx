import { AuthorDetails } from "./interface";
export const FRONTEND_URL= "https://deorai.netlify.app"
export const menuLinks = [
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
      text: `आसमान से ऊँची थी रंजिशें,
घरों में तो कुछ कदम के फासले थे !!
कहीं पाँव में थी बंदिशें,
तो कहीं रास्तों के सीनों पे भी छाले थे !!`,
      author: `राहुल सिंह`,
    },
    {
      text: `बुझते दियों के उजालो सा,
गर्दिश में गुजरे सालों सा,
बारिश में ढहे मकानों सा,
दूर के अजानो सा,
वो मैं या मेरा अक्स था या कोई और शख्स था!`,
      author: `राहुल सिंह`,
    },
    {
      text: `जब खेत छोड़ने लगे हो खाल,
हो मीन से हीन भी पोखर ताल,
घर से विलुप्त हो सीता-गीता,
हो  धुत्त  नशे में पुत्र-पिता,
मिलें दूध दही बस किस्सों' में,
घर बिखर गए हो हिस्सो में,
हो खारा जल धरातल में,
तो समझो गांव रसातल में!!`,
      author: `राहुल सिंह`,
    },
    {
      text: `मुनासिब न होगा अब इस हवा में सांस लेना,
सरफिरे बारूदों ने मरघट सारा शहर कर दिया!!
देख रोते किसी को कभी हंसना न 'घायल',
आंसुओं ने नजाने कितने शहर समंदर कर दिया!!`,
      author: `राहुल सिंह`,
    },
  ],
};

export const worksSection = {
  title: "Published Works",
  subtitle: "Stories and verses born from the sacred soil",
  works: [
    {
      category: "Poetry Collection",
      img: "https://res.cloudinary.com/oenn8x6i/image/upload/v1783872182/authorBook_yy9qhc.png",
      year: "2018",
      title: "थोड़े शब्द लगभग में",
      slug: "thode-shabd-lagbhag-me",
      description:
        "मनन से उपजे और समय के स्पर्श से परिपक्व हुए इन काव्यांशों में राहुल सिंह की संवेदना, जीवन-दृष्टि और आत्मचिंतन का स्वर निहित है। श्रेयांशु सिंह द्वारा संकलित एवं प्रकाशित यह संग्रह उन शब्दों को समर्पित है, जो पीढ़ियाँ बदल जाने पर भी अपना अर्थ नहीं खोते।",
    },
  ],
};

export const memorialSection = {
  title: "Remembering",

  dedication: "पूज्य चाचाजी",

  person: "श्री जगदीश प्रताप सिंह",

  lifespan: "१९५०–२०२४",

  verses: [
    `साथियों से संग खेलते ही बचपन बीता,
लगा घर घरौना और खिलौना बस सत्य है।`,

    `हुआ जो जवान तो जहान तरुणी में दिखा,
तरुणी के देह का बिछौना लगा सत्य है।`,

    `हुआ जब बाप चार पुत्र और पुत्रों का,
धन धान्य धरा का कामना दिखा सत्य है।`,

    `सोचा जब बात परलोक को सवारने की,
लगा सब असत्य बस राम नाम सत्य है!!`,
  ],
};

//History Page
export interface TimelineItem {
  id: number;
  period: string;
  title: string;
  summary: string;
  details: {
    introduction?: string;
    genealogy?: string[];
    settlements?: string[];
    achievements?: string[];
    legacy?: string[];
    quote?: string;
    notes?: string[];
  };
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    period: "1590",
    title: "Migration from Ayodhya",
    summary:
      "Brahmadev and Nayandev left Dambhua in Ayodhya and journeyed eastward toward Kashi to attend Princess Indumati's swayamvara.",
    details: {
      introduction:
        "In 1590, the two brothers Brahmadev and Nayandev departed from their ancestral village of Dambhua in Ayodhya, then part of the Awadh province. They travelled east toward the sacred city of Kashi to attend the swayamvara of the King of Kashi's daughter.",
      achievements: [
        "Their journey became the starting point of the family's recorded history.",
        "The event attracted noble houses from across the region."
      ],
      notes: [
        "Dhalman Gwala accompanied them throughout this historic journey."
      ]
    }
  },

  {
    id: 2,
    period: "1590",
    title: "Marriage with Princess Indumati",
    summary:
      "Nayandev married Princess Indumati, establishing an alliance that changed the family's destiny.",
    details: {
      introduction:
        "Nayandev won the hand of Princess Indumati, daughter of the King of Kashi.",
      achievements: [
        "The King granted Nayandev and Brahmadev a substantial portion of his kingdom.",
        "The granted territory later became known as the Dobhi region."
      ],
      legacy: [
        "The marriage established the family's political influence in eastern Uttar Pradesh."
      ]
    }
  },

  {
    id: 3,
    period: "Late 16th Century",
    title: "The Legacy of Baraichhabir",
    summary:
      "Dhalman Gwala became revered as Baraichhabir and remains remembered through a temple at Baraichha.",
    details: {
      introduction:
        "Dhalman Gwala accompanied Brahmadev and Nayandev on their historic migration.",
      achievements: [
        "He later became revered as Baraichhabir.",
        "A temple was established in his honor at Chandwak in Baraichha."
      ],
      legacy: [
        "His memory continues through local tradition and religious reverence."
      ]
    }
  },

  {
    id: 4,
    period: "16th Century",
    title: "Two Noble Lineages Unite",
    summary:
      "Brahmadev and Nayandev represented two respected lineages—Chaubey Brahmins and Raghuvanshis.",
    details: {
      genealogy: [
        "Nayandev belonged to the noble Raghuvanshi lineage.",
        "Brahmadev belonged to the respected Chaubey Brahmin lineage."
      ],
      legacy: [
        "Together they symbolized valor and wisdom.",
        "Their partnership became the foundation of generations that followed."
      ]
    }
  },

  {
    id: 5,
    period: "17th Century",
    title: "Birth of Devrai and Nagairai",
    summary:
      "Nayandev's two sons continued the lineage and laid the foundation for future generations.",
    details: {
      genealogy: [
        "Nayandev had two sons: Devrai and Nagairai (also known as Devanrai)."
      ],
      legacy: [
        "Both sons continued the Raghuvanshi lineage."
      ]
    }
  },

  {
    id: 6,
    period: "17th Century",
    title: "Foundation of Deorai",
    summary:
      "Devrai gave his name to the village of Deorai, preserving the family's legacy in the region.",
    details: {
      introduction:
        "Devrai and Nagairai both settled in the region after their father's arrival.",
      settlements: [
        "The village of Deorai derived its name from Devrai.",
        "Both brothers permanently settled there."
      ],
      legacy: [
        "Their settlement established the ancestral seat of the family."
      ]
    }
  },

  {
    id: 7,
    period: "17th Century",
    title: "The Sons of Nagairai",
    summary:
      "Nagairai's sons established influential branches that expanded the family's reach.",
    details: {
      genealogy: [
        "Nagairai had two sons: Vamdev and Goanvdev."
      ],
      settlements: [
        "Vamdev established himself in Vamvaavan (Vaasvari)."
      ]
    }
  },

  {
    id: 8,
    period: "17th Century",
    title: "Goanvdev Becomes Goanpati",
    summary:
      "Goanvdev became village head, and Chhoti Deorai emerged from his settlement.",
    details: {
      introduction:
        "Goanvdev rose to prominence within the community.",
      achievements: [
        "He became the village head (Goanpati)."
      ],
      settlements: [
        "His settlement later became known as Chhoti Deorai."
      ],
      legacy: [
        "His leadership gave lasting identity to the village."
      ]
    }
  },

  {
    id: 9,
    period: "17th Century",
    title: "Expansion into Mohanidih and Jamsar",
    summary:
      "The descendants expanded beyond Deorai, establishing new settlements.",
    details: {
      settlements: [
        "Branches settled in Mohanidih.",
        "Branches settled in Jamsar."
      ],
      legacy: [
        "The Raghuvanshi traditions spread into neighboring regions."
      ]
    }
  },

  {
    id: 10,
    period: "17th Century",
    title: "Migration to Chunar and Mirzapur",
    summary:
      "Later generations from Mohanidih migrated farther east into Chunar and Mirzapur.",
    details: {
      settlements: [
        "Descendants established themselves in Chunar.",
        "Later they expanded into Mirzapur."
      ],
      legacy: [
        "Their influence continued to shape local history."
      ]
    }
  },

  {
    id: 11,
    period: "17th Century",
    title: "The Jamsar Branch",
    summary:
      "Although the direct Raghuvanshi line became extinct in Jamsar, their descendants remain.",
    details: {
      introduction:
        "The Jamsar branch experienced a different fate from the other family branches.",
      achievements: [
        "The direct Raghuvanshi lineage eventually became extinct there."
      ],
      legacy: [
        "Their grandsons, locally called Nawase, continue to reside in the region.",
        "They preserve the memory of their ancestral roots."
      ]
    }
  },

  {
    id: 12,
    period: "17th Century",
    title: "The House of Devrai",
    summary:
      "Devrai's sons strengthened Deorai as the family's ancestral seat.",
    details: {
      genealogy: [
        "Devrai had two sons: Bhuj Rai and Virahaj Rai."
      ],
      settlements: [
        "Both remained in Deorai."
      ],
      legacy: [
        "They ensured the prosperity of the ancestral village."
      ]
    }
  },

  {
    id: 13,
    period: "17th Century",
    title: "The Line of Virahaj Rai",
    summary:
      "Virahaj Rai's descendants formed one of the family's major branches.",
    details: {
      genealogy: [
        "Virahaj Rai had four sons.",
        "Pukaar Rai",
        "Gelhu",
        "Melhu",
        "Kewatu Rai"
      ]
    }
  },

  {
    id: 14,
    period: "17th Century",
    title: "Pukari Baba",
    summary:
      "Pukaar Rai became widely remembered as Pukari Baba in local tradition.",
    details: {
      achievements: [
        "Pukaar Rai became known as Pukari Baba."
      ],
      legacy: [
        "His name continues to be remembered with reverence."
      ],
      notes: [
        "Gelhu and Melhu left no descendants, causing their branches to end."
      ]
    }
  },

  {
    id: 15,
    period: "17th–18th Century",
    title: "Kewatu Rai's Expansion",
    summary:
      "Kewatu Rai's descendants spread far beyond their homeland into present-day West Bengal.",
    details: {
      settlements: [
        "His descendants settled across twenty-four villages.",
        "The settlements lie in the Rangapur region of Ghodaghat, District Nadia, West Bengal."
      ],
      legacy: [
        "This branch demonstrates the remarkable geographical expansion of the family."
      ]
    }
  },

  {
    id: 16,
    period: "17th Century",
    title: "The Line of Bhuj Rai",
    summary:
      "Bhuj Rai's six sons established several influential branches across the region.",
    details: {
      genealogy: [
        "Bhuj Rai had six sons.",
        "Keel Rai remained in Deorai.",
        "Varmal Rai established Varmalpur.",
        "Kuber Rai settled in Varmalpur.",
        "Keval Rai (Kole Rai) became the ancestor of several important branches."
      ],
      settlements: [
        "Varmalpur derived its name from Varmal Rai."
      ]
    }
  },

  {
    id: 17,
    period: "17th Century",
    title: "The Three Houses of Keval Rai",
    summary:
      "Keval Rai's three marriages gave rise to several important branches of the family.",
    details: {
      genealogy: [
        "Keval Rai had three wives."
      ],
      settlements: [
        "Kam Singh's descendants settled in Jamuwan and Madhi.",
        "Kharag Rai's descendants settled in Dobhi Khas.",
        "Harav Rai's descendants settled in Dhanrakha.",
        "Narsingh Das continued the principal lineage through the third wife."
      ],
      legacy: [
        "These branches became some of the most influential descendants of Bhuj Rai."
      ]
    }
  },

  {
    id: 18,
    period: "18th Century",
    title: "The Rise of Narsingh Das",
    summary:
      "Narsingh Das became the ancestor of two significant family branches through Harihar Singh and Malchand Rai.",
    details: {
      genealogy: [
        "Narsingh Das had two sons:",
        "Harihar Singh",
        "Malchand Rai"
      ],
      legacy: [
        "Their descendants expanded the Raghuvanshi lineage into numerous villages across the region."
      ]
    }
  },
  {
    id: 19,
    period: "18th Century",
    title: "Harihar Singh – Strength and Spiritual Legacy",
    summary:
      "Harihar Singh became renowned for extraordinary physical strength, deep spirituality, and his lasting religious legacy.",
    details: {
      introduction:
        "Harihar Singh, the elder son of Narsingh Das, was remembered equally for his immense physical strength and his devotion to spiritual life.",
      achievements: [
        "The village of Hariharpur is believed to be named after him.",
        "According to oral tradition, he single-handedly lifted a massive stone slab (oat) that even today would require around ten strong men to move.",
        "He carried the stone to the riverbank where he performed his daily bathing rituals."
      ],
      legacy: [
        "Later in life he renounced worldly affairs and embraced asceticism.",
        "He is believed to have donated his village to Baba Keenaram, the revered saint of the Aghor tradition.",
        "The monastic establishment known as Ramshala still stands as a reminder of this spiritual heritage.",
        "His descendants are settled in Thunhi village."
      ]
    }
  },

  {
    id: 20,
    period: "18th Century",
    title: "The House of Malchand Rai",
    summary:
      "Malchand Rai continued the lineage through his sons Sheeldas and Ganesh Rai.",
    details: {
      genealogy: [
        "Malchand Rai had two sons:",
        "Sheeldas",
        "Ganesh Rai"
      ],
      settlements: [
        "Sheeldas settled in Kashidaspur."
      ],
      legacy: [
        "Ganesh Rai became the ancestor of two important branches through Ishwardas and Ramdev."
      ]
    }
  },

  {
    id: 21,
    period: "18th Century",
    title: "Ganesh Rai's Sons",
    summary:
      "Ganesh Rai's sons, Ishwardas and Ramdev, became founders of two major family branches.",
    details: {
      genealogy: [
        "Ganesh Rai had two sons:",
        "Ishwardas",
        "Ramdev"
      ],
      legacy: [
        "Their descendants eventually spread across dozens of villages."
      ]
    }
  },

  {
    id: 22,
    period: "18th Century",
    title: "The Line of Ishwardas",
    summary:
      "Ishwardas's four sons established influential settlements across numerous villages.",
    details: {
      genealogy: [
        "Ishwardas had four sons:",
        "Rai Singh",
        "Roop Singh",
        "Todarmal",
        "Madhoraam"
      ],
      settlements: [
        "Rai Singh's descendants settled in Amuaar, Kusumhi and Amarauna.",
        "Roop Singh's descendants spread to Narayanpur, Chakara, Kusarna, Gosauli, Murkha, Jamunibari, Kakarmaar, Dumva, Habusahi, Bhulandeah and neighboring villages.",
        "Todarmal's descendants settled in Leverua, Mannupur and nearby settlements.",
        "Madhoraam's descendants settled in Koilaari, Mannupur, Senapur, Loka Patti and surrounding villages."
      ],
      legacy: [
        "The descendants of Ishwardas became one of the most geographically widespread branches of the family."
      ]
    }
  },

  {
    id: 23,
    period: "18th Century",
    title: "The Line of Ramdev",
    summary:
      "Ramdev's eight sons established branches across numerous villages throughout the region.",
    details: {
      genealogy: [
        "Ramdev had eight sons:",
        "Naahar Shah",
        "Harman Shah",
        "Valbhadra",
        "Govind Rai",
        "Shyam Dhan",
        "Prithvimal",
        "Dhaniram",
        "Gosaidas"
      ],
      settlements: [
        "Naahar Shah's descendants settled in Heerapur and Machhati.",
        "Harman Shah's descendants settled in Jarasi and Haridaspur.",
        "Valbhadra settled in Khujji.",
        "Govind Rai settled in Bhadaai village.",
        "Shyam Dhan's descendants settled in Vodsar, Kachhavan, Vardeaha, Marikpur, Vatkahi and Bantari.",
        "Prithvimal settled in Chitko village.",
        "Dhaniram settled in Ghordaur and Anekpur.",
        "Gosaidas's descendants settled in Hisampur, Khujji and Satmesara."
      ]
    }
  },

  {
    id: 24,
    period: "18th Century",
    title: "The Main House of Deorai",
    summary:
      "The principal ancestral line continued through Keel Rai, who remained in Deorai.",
    details: {
      introduction:
        "Returning to the principal lineage of Deorai, Bhuj Rai's eldest son Keel Rai remained rooted in the ancestral village.",
      genealogy: [
        "Keel Rai had two sons:",
        "Dhundhi Rai",
        "Daman Singh"
      ],
      legacy: [
        "These two sons established the principal surviving branches of the family."
      ],
      quote:
        "\"Keel Rai ke sut bhaye dou, Dhundhi Rai Daman Singh dou.\""
    }
  },

  {
    id: 25,
    period: "18th Century",
    title: "The Branch of Daman Singh",
    summary:
      "Daman Singh's descendants became known for strength, leadership and regional influence.",
    details: {
      settlements: [
        "Daman Singh's descendants settled in Parapati."
      ],
      genealogy: [
        "Among his notable descendants were:",
        "Sannu Singh",
        "Shivshankar Singh"
      ],
      achievements: [
        "Sannu Singh became celebrated for his extraordinary physical strength and bravery.",
        "Shivshankar Singh exercised influence across the entire region."
      ],
      legacy: [
        "Their branch flourished with both prestige and leadership."
      ]
    }
  },

  {
    id: 26,
    period: "18th Century",
    title: "The Legacy of Shivshankar Singh",
    summary:
      "Shivshankar Singh's leadership earned him lasting respect in the family genealogy.",
    details: {
      achievements: [
        "His leadership extended across the surrounding region.",
        "His influence became so significant that the genealogy preserves verses in praise of his house."
      ],
      quote:
        "\"The genealogy honors Shivshankar Singh as the one who illuminated and glorified the lineage of Keel Rai.\""
    }
  },

  {
    id: 27,
    period: "18th Century",
    title: "The House of Dhundhi Rai",
    summary:
      "Dhundhi Rai's three sons established branches in Deorai, Parapati and Adhiyaari.",
    details: {
      genealogy: [
        "Dhundhi Rai had three sons:",
        "Narayan Singh",
        "Gurubaksh Singh",
        "Shivbaksh Singh"
      ],
      settlements: [
        "Narayan Singh remained in Deorai.",
        "Gurubaksh Singh settled in Parapati.",
        "Shivbaksh Singh settled in Adhiyaari, Goan."
      ]
    }
  },

  {
    id: 28,
    period: "18th Century",
    title: "Dhautal Singh – Wisdom and Prudence",
    summary:
      "Narayan Singh's only son became renowned for exceptional wisdom and foresight.",
    details: {
      genealogy: [
        "Narayan Singh had only one son: Dhautal Singh."
      ],
      achievements: [
        "He became famous for his intellect.",
        "He was respected for wise judgment.",
        "His prudence and foresight became defining characteristics of his branch."
      ],
      quote:
        "\"Narayan ke sut bhaye ek, the Dhautal jo param vivek.\""
    }
  },

  {
    id: 29,
    period: "19th Century",
    title: "The Valor of Jagatu Singh",
    summary:
      "Jagatu Singh became one of the family's greatest warriors and a symbol of courage.",
    details: {
      genealogy: [
        "Dhautal Singh had two sons:",
        "Jagatu Singh",
        "Bhagatu Singh"
      ],
      achievements: [
        "Bhagatu Singh left no descendants.",
        "Jagatu Singh became renowned as a formidable warrior.",
        "Together with his cousin Sannu Singh, he became the subject of many stories of bravery remembered by the elders of Deorai."
      ],
      legacy: [
        "Their partnership represented unity and courage within the family."
      ],
      quote:
        "\"The genealogy celebrates the victories of Sannu Singh and Jagatu Singh in battle.\""
    }
  },

  {
    id: 30,
    period: "19th Century",
    title: "The House of Vishveshwar Singh",
    summary:
      "Among Jagatu Singh's sons, only Vishveshwar Singh continued the direct lineage.",
    details: {
      genealogy: [
        "Jagatu Singh married in Allopur.",
        "He had three sons:",
        "Vishveshwar Singh",
        "Lal Bahadur Singh",
        "Mangalu Singh"
      ],
      achievements: [
        "Vishveshwar Singh married in Amraut.",
        "Lal Bahadur Singh married Mukta Devi of Birampur.",
        "Mangalu Singh's wife was Lakhpati Devi."
      ],
      legacy: [
        "Lal Bahadur Singh and Mangalu Singh left no descendants.",
        "The direct family line continued only through Vishveshwar Singh."
      ]
    }
  },

  {
    id: 31,
    period: "Late 19th Century",
    title: "Tulsi Singh's Generation",
    summary:
      "Tulsi Singh became the sole successor of Vishveshwar Singh and carried the lineage forward.",
    details: {
      genealogy: [
        "Vishveshwar Singh had one son: Tulsi Singh.",
        "Tulsi Singh had three sons:",
        "Ram Niranjan",
        "Bhagwati Charan Singh (Gurucharan)",
        "Bhagwatideen Singh"
      ],
      legacy: [
        "Bhagwatideen and Gurucharan left no descendants.",
        "The principal lineage continued through Ram Niranjan."
      ],
      quote:
        "\"Vishveshwar ke sut Tulsi, Tulsi ke sut teen...\""
    }
  },

  {
    id: 32,
    period: "Indian Freedom Movement",
    title: "Kashinath Singh – Scholar & Freedom Fighter",
    summary:
      "Kashinath Singh transformed the family's legacy from battlefield courage to the courage of India's freedom struggle.",
    details: {
      genealogy: [
        "Ram Niranjan had one son: Kashinath Singh."
      ],
      achievements: [
        "He was a respected scholar.",
        "He was a devoted Gandhian.",
        "He actively participated in India's freedom movement.",
        "Despite opposition from his father and uncles, he chose the path of national service.",
        "He was imprisoned several times because of his participation in the independence movement.",
        "He remained unwavering in his ideals despite repeated hardships."
      ],
      legacy: [
        "His life represented a new form of courage—moral and political bravery."
      ]
    }
  },

  {
    id: 33,
    period: "20th Century",
    title: "Family Life of Kashinath Singh",
    summary:
      "Kashinath Singh's family carried the lineage into the modern era.",
    details: {
      achievements: [
        "He married into the prestigious family of Kailawar.",
        "His wife's name was Shyama Devi."
      ],
      genealogy: [
        "They were blessed with three sons and three daughters."
      ]
    }
  },

  {
    id: 34,
    period: "Modern Era",
    title: "The Next Generation",
    summary:
      "Kashinath Singh's three sons represent the continuation of the principal lineage.",
    details: {
      genealogy: [
        "Dr. Rudra Pratap Singh",
        "Raghvendra Pratap Singh",
        "Jagdish Pratap Singh"
      ],
      legacy: [
        "They continue the principal Raghuvanshi lineage established over four centuries earlier."
      ]
    }
  },

  {
    id: 35,
    period: "Legacy",
    title: "Four Centuries of Heritage",
    summary:
      "From Ayodhya to the present day, the family's journey reflects courage, leadership, scholarship and service.",
    details: {
      introduction:
        "Beginning with the migration of Brahmadev and Nayandev in 1590, the family's history spans more than four centuries.",
      legacy: [
        "The lineage established villages, expanded into numerous regions, and preserved its ancestral identity across generations.",
        "Its members became village leaders, warriors, scholars, saints, freedom fighters and respected community figures.",
        "The story continues today through the descendants of Kashinath Singh and the many branches spread across India."
      ]
    }
  }

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
                                                        {
                                                          name: "Anshuman Singh",
                                                        },
                                                        {
                                                          name: "Ashutosh Singh",
                                                        },
                                                        { name: "Rahul Singh" },
                                                      ],
                                                    },
                                                    {
                                                      name: "Raghavendra Pratap Singh",
                                                      children: [
                                                        {
                                                          name: "Prashant Singh",
                                                        },
                                                        { name: "Rohit Singh" },
                                                      ],
                                                    },
                                                    {
                                                      name: "Jagdish Pratap Singh",
                                                      children: [
                                                        {
                                                          name: "Manish Singh",
                                                        },
                                                        {
                                                          name: "Gaurav Singh",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            { name: "Bhagawati Charan Singh" },
                                          ],
                                        },
                                      ],
                                    },
                                    { name: "Manglu Singh" },
                                  ],
                                },
                                { name: "Bhagatu Singh" },
                              ],
                            },
                          ],
                        },
                        { name: "Gurubakhsha Singh" },
                        { name: "Shivbakhsha Singh" },
                      ],
                    },
                  ],
                },
                { name: "Randheerrai" },
                { name: "Vermalrai" },
                { name: "Kuberrai" },
                { name: "Kevalrai" },
                { name: "Thakurai" },
              ],
            },
          ],
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
                { name: "Kevaturai" },
              ],
            },
          ],
        },
      ],
    },
    { name: "Dhalman Gwala" },
    { name: "Daman Singh" },
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
    title: "Deorai Mahayagya",
    slug: "deorai-mahayagya",
    date: "2023",
    time: "Multi-day Spiritual Ceremony",
    location: "Deorai Village, Jaunpur, Uttar Pradesh",
    description:
      "A historic Vedic Mahayagya that united thousands of devotees in prayer, devotion, and the pursuit of peace and prosperity.",

    about:
      "The Deorai Mahayagya stands as one of the most remarkable spiritual events in the history of Deorai. Organized with the noble purpose of invoking peace, harmony, and prosperity, the sacred gathering brought together thousands of devotees, saints, scholars, and spiritual seekers from different regions. Spread across more than 100 acres of land, the event featured over 1,000 Yagya Kunds where continuous Vedic rituals, sacred fire offerings, and the chanting of ancient mantras were performed in accordance with centuries-old traditions. The entire village transformed into a center of devotion, spirituality, and cultural unity, creating an atmosphere of profound peace and collective faith.",

    image:
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783866216/IMG-20260712-WA0018_fzsbug.jpg",

    significance:
      "Remembered with immense pride and reverence, the Deorai Mahayagya remains one of the defining chapters of the village's cultural and spiritual heritage. Beyond being a religious gathering, it symbolized unity, selfless service, and the preservation of Vedic traditions. Its legacy continues to inspire future generations, reflecting Deorai's enduring commitment to faith, harmony, and the timeless values of Indian culture.",
  },
];

//Regional Info

export const villageData = {
  name: "Deorai",
  localName: "देवराई",
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
    rivers: ["Sai River", "Barwa Nadi"],
  },

  transport: {
    nationalHighways: ["NH135A"],
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
        conditions: ["Light Rain", "Overcast Clouds", "Broken Clouds"],
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
        conditions: ["Overcast Clouds", "Broken Clouds", "Light Rain"],
      },
    ],
  },
};

export const villageOverview = {
  description:
    "Deorai/Devrai is a village in Kerakat Block of Jaunpur district, Uttar Pradesh, India. It belongs to the Varanasi Division and is located 41 km east of the district headquarters, Jaunpur, 13 km from Kerakat, and approximately 290 km from the state capital, Lucknow.",

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

  nearestCities: ["Saidpur", "Ghazipur", "Varanasi", "Jaunpur", "Mau"],

  districtBorders: {
    onBorderOf: ["Jaunpur District", "Varanasi District"],
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
    description:
      "Dobhi Railway Station is the nearest railway station to Deorai.",
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
  majorPoliticalParties: ["BJP", "SP", "BSP"],
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
    address: "Garakhara - Thanagaddi Road, Uttar Pradesh 222181, India",
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
    address: "Sindhora Market, Varanasi, Uttar Pradesh 221208, India",
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
    address: "Sindhora Market, Varanasi, Uttar Pradesh 221208, India",
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
    title: "East – The Orchard Belt (Bagh)",
    description:
      "A lush landscape of orchards, fertile fields, and traditional ponds that reflects Deorai's agricultural richness.",
    area: "34 Bigha",
    image:
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863407/purab2_rdgft0.jpg",
    slug: "east-land",
    details:
      "The eastern expanse is embraced by the village’s historic Bagh, a verdant landscape where flourishing orchards merge seamlessly with fertile agricultural fields. Scattered across this picturesque terrain are numerous small and medium-sized talabs (traditional ponds), which have sustained the village’s ecology and agriculture for generations. The harmonious blend of lush greenery, tranquil water bodies, and cultivated farmlands creates an enduring symbol of rural abundance and natural serenity.",
    gallery: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863407/purab2_rdgft0.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863409/purab3_x8rt22.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863408/purab4_nktkmt.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863408/purab1_vnbbmq.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863407/purab6_c4jbam.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863407/purab7_t2lakz.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863407/purab8_abxlvx.jpg",
    ],
  },
  {
    id: "2",
    title: "West – The Residential Estate",
    description:
      "The historic residential heart of the village, preserving ancestral homes, community life, and rural traditions.",
    area: "40 Bigha",
    image:
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863482/south6_jngjiw.jpg",
    slug: "west-land",
    details:
      "The western precinct serves as the heart of the estate, reflecting the rhythm of everyday village life. It encompasses the ancestral haveli, residences for workers, the caretaker’s house, and a spacious angan that forms the social center of the household. Adjacent to these lie traditional shelters for cattle, buffaloes, goats, and poultry, illustrating the village’s enduring bond with agriculture and livestock. This area stands as a testament to self-sustained rural living, heritage, and community.",
    gallery: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863530/west2_jtzumf.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863530/west1_lxzjgw.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863482/south6_jngjiw.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783865699/west3_fcg9sm.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863480/south5_gbteox.jpg",
    ],
  },
  {
    id: "3",
    title: "South – The Great Lake",
    description:
      "A serene lake surrounded by fertile farmland, sustaining both the village's natural beauty and agricultural heritage.",
    area: "35 Bigha",
    image:
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863478/south1_qaa83m.jpg",
    slug: "south-land",
    details:
      "The southern landscape is defined by the village’s largest and most cherished lake, a timeless centerpiece of both natural beauty and local tradition. Beyond serving as a place for boating, fishing, and quiet recreation, the lake nourishes the exceptionally fertile lands that surround it, enriching the region’s agricultural prosperity. Together, the shimmering waters and productive fields embody the harmony between nature and the village’s enduring way of life.",
    gallery: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863482/south6_jngjiw.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863480/south5_gbteox.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863480/south4_zojj3d.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863479/south3_op8web.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863478/south2_wdpfdy.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863478/south1_qaa83m.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863478/south7_fjstxt.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863477/south8_oonluo.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863477/south10_vn4mwi.jpg",
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863477/south9_b7kgxt.jpg",
    ],
  },
];

//Poems
export const poems = [
  {
    id: 1,
    title: "बुझते दियों के उजालो सा,",
    content: `बुझते दियों के उजालो सा,
गर्दिश में गुजरे सालों सा,
बारिश में ढहे मकानों सा,
दूर के अजानो सा,
वो मैं या मेरा अक्स था या कोई और शख्स था!

पतवार बिना माझी सा,
हारी हुयी बाजी सा,
लौट आये शगुन सा,
एक अनजानी उधेड़-बुन सा,
वो मैं या मेरा अक्स या कोई और शख्स था!`,
  },
  {
    id: 2,
    title: "मात तेरी गोंद में आ गिरा एक जवान है",
    content: `मात तेरी गोंद में आ गिरा एक जवान है,
तेरा मान रखने को ही दिया बलिदान है!!
घाव मेरे देख मुझे कायर ना समझ मात,
ये तो कर रहा अरि की क्रूरता बयान है,
ज़ख्म सारे सीने पे ही खाए थे हे मात मैंने,
पीठ पे तो मरणोपरांत के निशान है!!
छिन्न - भिन्न होके अंग अंग सारे गिर रहे थे,
दुश्मनो को रौंदने को बाजू बचे शेष थे,
ह्रदय गति रक्तधार क्षीण पड़ गए मगर,
विजय दृश्य देखने को नेत्र खुले शेष थे!!
विजय द्धार पे खड़े चढ़ा रहें हैं रक्त पुष्प,
युद्ध वेदी राख कई पार्थिव शरीर हैं,
तेरा मान रखने में ये जो कम पड़े तो मात,
अर्चना में शीश लिए खड़े कोटि वीर हैं!!`,
  },
  {
    id: 3,
    title: "इतराये तो वो बहोत कि करके आफताब कैद मुट्ठी में",
    content: `इतराये तो वो बहोत कि करके आफताब कैद मुट्ठी में,
हो खबर उन्हें कि मेरे चंद जुगनू ही रात आबाद कर देंगे!
बंधे हैं हाँथ इस रात मेरे चरागों को बचाने में ,
आंधियो ठहरना सुबह होते ही तुम्हारा हिसाब कर देंगे!!
दूर रहते हैं मुझसे जिन्हें फक्र अपनी शोहरत पे,
है इल्म कि हम मुफ़लिस-ए-ज़िन्दगी उन्हें भी खराब कर देंगे!!
ज़रूरी है पैनी नज़र शह और मात के खेल में,
मुंतज़िर हैं एक गलत चाल, इसे प्यादे ही बर्बाद कर देंगे!
खटक रही थी मेरी आँखों में दोस्ती उनकी,
मैंने नेवले में कहर सांप में जहर भर दिया !!
मुनासिब न होगा अब इस हवा में सांस लेना,
सरफिरे बारूदों ने मरघट सारा शहर कर दिया!
देख रोते किसी को कभी हंसना न 'घायल',
आंसुओं ने नजाने कितने शहर समंदर कर दिया!!`,
  },
  {
    id: 4,
    title: "आसमान से ऊँची थी रंजिशें",
    content: `आसमान से ऊँची थी रंजिशें,
घरों में तो कुछ कदम के फासले थे !!
कहीं पाँव में थी बंदिशें,
तो कहीं रास्तों के सीनों पे भी छाले थे !!
सुबह की गीली सीढ़ियों से फिसला,
लहुलुहान तड़पता रहा सूरज,
और चाँद एक कतरा रौशनी को !
रात रचती रही ये सारी साजिशें ,
और कुछ सितारों के भी दिल काले थे !!
लहेरें पानियों से निकलती दौड़ती,
पानियों में ही बिखरती गयी,
और किश्तियाँ मजधारों में !
सहारा बनने की तिनकों थी कोशिशें,
पर हवाओं ने ही अपने रूख बदल डाले थे`,
  },
  {
    id: 5,
    title: "उम्र गुज़री साहिलों पे सीपियाँ बटोरते",
    content: `उम्र गुज़री साहिलों पे सीपियाँ बटोरते,
कभी सैलाबों से टकरा मोतियाँ भी निकाला करो !
डर जहर का जेहन में समाया हो तो,
दो चार साँपों को दोनों आस्तीनों में पाला करो !!
सेंकते रहे बस हाँथ दूर-दूर से ही,
लगायी है आग तो कभी उंगलिया भी जलाया करो !
बस थोड़ा लहजा-ए-गुफ्तगू बदल कर,
खुद की नज़र में गिरने से खुद को बचाया करो!`,
  },
  {
    id: 6,
    title: "माँ से लिपटी एक फटी शॉल में",
    content: `माँ से लिपटी एक फटी शॉल में,
ठिठुरती नन्ही ज़िंदगियाँ,
घर देख क़हर ना ढाती हैं,
दिल की ये निष्ठुर सर्दियाँ!!
सड़को के सुलगे अलावं में,
कहीं पुलों की कंपित छाँव,
भरे भरे सब रैन बसेरे,
लाचारी ढूंढे आशियाँ!!
मज़ा लूटते शीत लहर का,
है कैद में जिनके विवस्वान (सूर्य),
घर देख कहर ना ढाती हैं,
दिल की ये निष्ठुर सर्दियाँ!!`,
  },
  {
    id: 7,
    title: `लहूलुहान मातृभूमि है, देश पिशाचो का जंगल`,
    content: `लहूलुहान मातृभूमि है, देश पिशाचो का जंगल,
धर वज्र करो वध हे नरेन्द्र, या बनजाओ तुम दावानल !
है शत्रु सीमा के दोनों तरफ, बस काफ़ी नही भुजा का बल,
साम-दाम-दंड-भेद का भी अब दिखलाना होगा कौशल !
लेकर संकल्प इतिहास रचो, दो देश का अब भूगोल बदल,
वापस जोड़ों खंडित हैं जो अपने नभ, अपने जल-थल !
धर्मक्षेत्र कुरुक्षेत्र ना हो कट्टरता देश से जाये निकल,
बहे सभी धर्मों से ऊपर धारा राष्ट्र-धर्म अविरल !
बन सूर्य पीयो जो है फैली काली रातों की उथल-पुथल,
ले जगे फगुनहट रंग उषा और निशा प्रकाश से हो धवल !`,
  },
  {
    id: 8,
    title: "केतना उधायल रहला गइला बुताय,",
    content: `केतना उधायल रहला गइला बुताय,
खउलत रहला ठंडी में गइला ठण्डाय !
हवा भइल टाइट कुल उड़ गयल भौकाल,
आ गइला औकात में न, कहो केजरीवाल !!
गोडे का काँटा दमानिया और इल्मी,
प्रशांत और योगेन्द्र आँखि क बिलनी !
कोहायं जइहैं जब कुमार और सिसोदिया,
पार्टी में न बची केहु जरावे के दीया !!
केकरे भरोसे तू फनबा बवाल,
आ गइला औकात में न, कहो केजरीवाल !!
बहुत भायल धरना तनी चलावा अब जांगर,
नाही हो जइबा अबकी पलिहरे क बानर !
एक पे एक झूठ के फेकत गइला पासा,
अबकी चली न कांग्रेस वाला झांसा !
लेई दिल्ली क जनता तोहार खींच खाल ,
आ गइला औकात में न , कहो केजरीवाल !
केतनो बढ़ाय ल तू कचरन क ढेर ,
सरसठ पे भारी रहियें तीन शेर !
कहें राहुल सिंह और सुना एक बात,
पहिले सुधारा आपन कफ-पित्त-वात !
तब चालिहा कौनो लोमड़ी वाली चाल,
आ गइला औकात में न , कहो केजरीवाल !`,
  },
  {
    id: 9,
    title: "बच्चा भूख से बेहाल",
    content: `बच्चा भूख से बेहाल,
तड़पता, चिल्लाता सो गया थककर !
बस थोड़ी देर और - कहती,
माँ सारी रात उबालती रही पत्थर !!
नफरतों की धधकती आग ने,
बीती रात उसे छला था,
कहीं जल गयी बस्तिया,
तो कहीं घर जला था,
पल्लू से मुंह ढकी माँ ने,
बड़ी मुश्किल से रोका था रोना !
बच्चा नींद में बडबडाया,
कुछ तो खाने को दो ना !!`,
  },
  {
    id: 10,
    title: "जब खेत छोड़ने लगे हो खाल",
    content: `जब खेत छोड़ने लगे हो खाल,
हो मीन से हीन भी पोखर ताल,
घर से विलुप्त हो सीता-गीता,
हो  धुत्त  नशे में पुत्र-पिता,
मिलें दूध दही बस किस्सों' में,
घर बिखर गए हो हिस्सो में,
हो खारा जल धरातल में,
तो समझो गांव रसातल में!!
चमचइ पट्टा पहन के ऐठे,
जब उल्लू हर विभाग में बैठे,
झंडा गैर के काम पे गाडे,
गलती का बिल किसी पे फाडे,
काम पड़े तो ले अवकाश,
वेतन बढ़ छू ले आकाश,
हो मगन सभी मनमानी में,
तो गयी कंपनी पानी में!!
कुर्सी का रोज़ हो चीरहरण,
तमाशबीन द्रोण भीष्म करण,
शकुनियों का बोलबाला हो,
सच का हो रहा मुंह कला हो,
राज हो जैसे जंगल में,
तब्दील हो संसद चम्बल में,
और हो विदेशी जब सत्ता में,
तो कुटे देश खल-बटृटा में !!`,
  },
  {
    id: 11,
    title: "सालों बाद",
    content: `सालों बाद,
कल पुरानी एल्बम से रूबरू हुआ।
कुछ तस्वीरें धुंधली,
कुछ अपरिचित,
तो कुछ मैली हो चली थीं।
कुछ होठों पर मुस्कान ले आईं,
तो कुछ आँखों को नम कर चली थीं।
एक तस्वीर ले गई पुरानी छत पे,
याद आया —
खामोशी से तकना चाँद को।
गुनगुनी धूप,
गरम चाय,
चोट के निशान,
ट्रेन का सफ़र,
दोस्तों की ठिठोली—
हर एक तस्वीर कोई दास्तान कह चली थी!
एक फोटो ढूँढते-ढूँढते उँगली थक गई,
कौन जाने वो किस पन्ने में खो गई थी,
या तारीख़ उसे मिटा गई थी।
हर तस्वीर की एक कहानी,
और हर कहानी थोड़ा-सा मैं,
थोड़ा-सा मेरा होना।`,
  },
  {
    id: 12,
    title: `आँधी-तूफ़ान`,
    content: `आँधी-तूफ़ान,
ट्रैफ़िक जाम
और काम ज़रूरी,
ऐसे अग्निपथ का नाम है "मुंबई"!!!
भागम-भाग,
सपनों की आग
और नींदें अधूरी,
ऐसे अग्निपथ का नाम है "मुंबई"!!!
पत्थरीली डगर,
हवा में ज़हर
और हिम्मत ज़रूरी,
ऐसे अग्निपथ का नाम है "मुंबई"!!!`,
  },
  {
    id: 13,
    title: "रोम-रोम में गौरी शंकर",
    content: `रोम-रोम में गौरी शंकर,
गंगा दौड़े नस-नस में,
मस्ती, भक्ति, शक्ति, मुक्ति,
सब रस रजा बनारस में!
घंट, शंख, घड़ियाल, नगाड़ा
आरती के तरकश में,
नारा "हर-हर महादेव" का
गूंजे रजा बनारस में।
गुरु, ज्ञान, विधि-विज्ञान
पी लें तिमिर अमावस में,
सिद्ध, साधु, योगी, आघोरी
विचरें रजा बनारस में।
पान कचौड़ी, चाट जलेबी,
सब सुख लहे बनारस में
काल, बैताल, विकराल-महाकाल,
पहरै रजा बनारस में!!`,
  },
  {
    id:14,
    title:`अहसास हुआ, जब उठाया जिम्मेदारियों का बोझ `,
    content:`अहसास हुआ, जब उठाया जिम्मेदारियों का बोझ 
कितना हल्का था वो बैग स्कूल का, 
ले हाथों में नश्तर गले मिलते यहाँ लोग, 
थे कमीने पर दोस्तों में कितना उसूल था।

लगा था बाज़ार  बिक रहे थे ईमान पर,
इख़लाक़ के हांथो ही बिकना मुझे कबूल था !
दिखे रंग दुनिया के, फितरत इन्सानो की,
भरी-खाली जेबें इस दर्शन का मूल था।

स्वप्न हो दफ़न चले हक़ीक़तों की कब्र में,
सूख गए फूल बाग़ में बचा बबूल था।
जिया काम के लिए या काम किया जीने को,
थका तो लगा सब कमाना फ़िज़ूल था।`
  },

  {
    id:15,
    title:`मानव हित हैं मौन अभी तो भूल न जाना रखना याद`,
    content:`मानव हित हैं मौन अभी तो भूल न जाना रखना याद,
ऑपरेशन सिन्दूर, कारगिल और उरी की हार का स्वाद,
है सृजन-शांति सीने में पर, हम हैं विनाश की टोली भी,
रक्त तिलक माथे पर लेकिन खेलें खून की होली भी,
दहल उठे पर्वत विशाल जब हम भीषण हुंकार भरे,
काँप उठे कलेजा दुश्मन का रण में ऐसे संहार करें,
टकराते तूफानों से, बन प्रलय टूटते हैं रण में,
लिखते हैं मिटाते हैं, रचते इतिहास हैं क्षण क्षण में,
हैं गोरिल्ला हम क्षत्रपति के राणा के वंशज हैं वीर,
पी जाते आग हैं सूर्य की, रहते सिंधु से है गंभीर,
धधक रहा कश्मीर कहीं तो कोई मांगे खालिस्तान,
प्रहरी चट्टानों से हैं हम रखे अखंडित हिस्दुस्तान।`
  },
  {
    id:16,
    title:`आजमाइशें बढ़ती रही`,
    content:`आजमाइशें बढ़ती रही,
मैं बटता रहा दामन दामन,
मुश्किलें समंदर से गहरी
ठोकरें शहर की - हर कदम !

सादगी से, एक ताज़गी की,
रौशनी सी जल गयी,
आँखो से बख्शती ज़िंदगी,
आयी रीतू, ऋत बदल गयी !!

भोलेपन में बच्चो सी वो,
पर सुलझाती हर उलझन,
माली मेरी बगिया की वो,
हैं दो फूल, परी - अरहन !!

परे राग-द्वेष-ईर्ष्या से,
संजोती रिश्तो के बंधन,
ना एहसाह हो दूरी का अब,
जुड़े हैं ऐसे अपने मन !!`,
  },
  {
    id:17,
    title:`नया ज़िन्दगी में जोश था`,
    content:`नया ज़िन्दगी में जोश था,
संभाला जब से होश था !
थी सोच सही फैसलों की,
न कोई हद थी हौसलों की !
उमंग थी तरंग थी,
जिया इस यकीन पर,
दूंगा कुचल भी आसमान,
रख के आईना ज़मीन पर!
पर वक़्त ने बुना था जाल,
भाग्य चला अपनी चाल,
फंसा निहत्था चक्रव्यूह में,
न थी तलवार न कोई ढाल !
हुए ख्वाब सब घुआँ - घुआँ,
हिम्मत टूटी थी पस्त हौसले
सर झुका हालात के आगे,
मंजूर हुए सब फैसले !`
  },
  {
    id:18,
    title:`आजमाइशें बढ़ती रही`,
    content:`आजमाइशें बढ़ती रही,
मैं बटता रहा दामन दामन,
मुश्किलें समंदर से गहरी
ठोकरें शहर की - हर कदम !

सादगी से, एक ताज़गी की,
रौशनी सी जल गयी,
आँखो से बख्शती ज़िंदगी,
आयी रीतू, ऋत बदल गयी !!

भोलेपन में बच्चो सी वो,
पर सुलझाती हर उलझन,
माली मेरी बगिया की वो,
हैं दो फूल, परी - अरहन !!

परे राग-द्वेष-ईर्ष्या से,
संजोती रिश्तो के बंधन,
ना एहसाह हो दूरी का अब,
जुड़े हैं ऐसे अपने मन !!`
  }
];
