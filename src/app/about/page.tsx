import AuthorSection from "@/components/about/authorDetails";
import MissionSection from "@/components/about/missionSection";
import WordsSection from "@/components/about/wordSection";
import PublishedWorksSection from "@/components/about/workSection";
import HeroSection from "@/components/general/heroSection";
import { FRONTEND_URL } from "@/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "राहुल सिंह | लेखक, कवि और पटकथा लेखक",

  description:
    "राहुल सिंह का परिचय — लेखक, कवि, पटकथा लेखक और तकनीकी विशेषज्ञ। उनके साहित्यिक सफर, चयनित कविताओं, प्रकाशित काव्य संग्रह और लेखन कार्यों के बारे में जानें।",

  keywords: [
    "राहुल सिंह",
    "Rahul Singh",
    "राहुल सिंह लेखक",
    "राहुल सिंह कवि",
    "राहुल सिंह पटकथा लेखक",
    "Rahul Singh writer",
    "Rahul Singh poet",
    "Hindi poet",
    "Hindi writer",
    "हिंदी कवि",
    "हिंदी लेखक",
    "थोड़े शब्द लगभग में",
    "सेमशूक",
    "Superstar 2008",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/about`,
  },

  openGraph: {
    title: "राहुल सिंह | लेखक, कवि और पटकथा लेखक",

    description:
      "राहुल सिंह  का परिचय — लेखक, कवि, पटकथा लेखक और तकनीकी विशेषज्ञ। उनके साहित्यिक सफर, कविताओं और प्रकाशित काव्य संग्रह के बारे में जानें।",

    url: `${FRONTEND_URL}/about`,

    siteName: "Deorai",

    type: "website",

    locale: "hi_IN",

    images: [
      {
        url: "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863574/author_er0g3m.jpg",
        width: 1200,
        height: 630,
        alt: "राहुल सिंह (घायल) — लेखक, कवि और पटकथा लेखक",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "राहुल सिंह | लेखक, कवि और पटकथा लेखक",

    description:
      "राहुल सिंह — लेखक, कवि, पटकथा लेखक और तकनीकी विशेषज्ञ। उनके लेखन, कविताओं और प्रकाशित काव्य संग्रह के बारे में जानें।",

    images: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863574/author_er0g3m.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

function page() {
  return (
    <div>
      <HeroSection
        label="MEET THE"
        title="Author & Custodian"
        subtitle="A poet, historian, and keeper of ancestral flame"
      />
      <AuthorSection />
      <WordsSection />
      <PublishedWorksSection />
      <MissionSection />
    </div>
  );
}

export default page;
