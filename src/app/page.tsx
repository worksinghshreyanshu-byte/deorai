import AuthorSection from "@/components/about/authorDetails";
import MemorialSection from "@/components/about/missionSection";
import EventsSection from "@/components/events/eventCards";
import SectionHeader from "@/components/general/sectionHeader";
import ContactCTA from "@/components/landingPage/ctaSection";
import HeroSection from "@/components/landingPage/heroSection";
import IntroductionSection from "@/components/landingPage/introductionSection";
import KashinathSinghSection from "@/components/landingPage/kashinathSection";
import LandCard from "@/components/lands/landCard";
import { FRONTEND_URL, lands } from "@/utils/constants";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Deorai | Heritage, History, Family & Village Legacy",

  description:
    "Discover Deorai — a living heritage of history, ancestors, family lineage, ancestral lands, village traditions, cultural events, poetry, and generations of stories preserved for the future.",

  keywords: [
    "Deorai",
    "Deorai village",
    "Deorai heritage",
    "Deorai history",
    "Deorai culture",
    "Deorai ancestors",
    "Deorai family tree",
    "Deorai Vanshawali",
    "Deorai genealogy",
    "Deorai ancestral lands",
    "Deorai heritage lands",
    "Deorai village history",
    "Deorai traditions",
    "Deorai events",
    "Deorai festivals",
    "Deorai family history",
    "Deorai lineage",
    "Deorai Uttar Pradesh",
    "Indian village heritage",
    "Indian family history",
    "ancestral heritage India",
    "Rahul Singh Ghayal",
    "राहुल सिंह घायल",
    "थोड़े शब्द लगभग में",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/`,
  },

  openGraph: {
    title: "Deorai | Heritage, History, Family & Village Legacy",

    description:
      "Explore Deorai's history, ancestors, family lineage, ancestral lands, traditions, cultural events, and the stories that preserve its living heritage.",

    url: `${FRONTEND_URL}/`,

    siteName: "Deorai",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863482/south6_jngjiw.jpg",
        width: 1200,
        height: 630,
        alt: "Deorai — Heritage, History, Family and Village Legacy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Deorai | Heritage, History, Family & Village Legacy",

    description:
      "Discover Deorai's history, ancestors, family lineage, ancestral lands, traditions, events, and generations of stories.",

    images: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863482/south6_jngjiw.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <IntroductionSection />
      <KashinathSinghSection />
      <div className="py-10 mx-10">
        <SectionHeader
          eyebrow="Legacy Collection"
          title="The Heritage Lands"
          subtitle="Explore each parcel of our ancestral estate"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 lg:my-20 mx-auto">
          {lands.map((land) => (
            <LandCard key={land.id} land={land} />
          ))}
        </div>
      </div>

      <div>
      <SectionHeader
        eyebrow="UPCOMING"
        title="Events & Celebrations"
        subtitle="The rhythm of our village life, marked by festivals, gatherings, and shared joy"
      />
      <EventsSection/>
      </div>

      <SectionHeader
        eyebrow="MEET THE"
        title="Author & Custodian"
        subtitle="A poet, historian, and keeper of ancestral flame"
      />
      <AuthorSection/>
      <ContactCTA/>
      <MemorialSection/>
    </div>
  );
}
