import EventsSection from "@/components/events/eventCards";
import HeroSection from "@/components/general/heroSection";
import { FRONTEND_URL } from "@/utils/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Events & Celebrations | Deorai Village",

  description:
    "Discover upcoming events, festivals, celebrations, gatherings, and community traditions that bring the village of Deorai together and preserve its cultural heritage.",

  keywords: [
    "Deorai events",
    "Deorai village events",
    "Deorai festivals",
    "Deorai celebrations",
    "Deorai village celebrations",
    "Deorai cultural events",
    "Deorai village festival",
    "Deorai community events",
    "Deorai traditions",
    "Deorai heritage",
    "Deorai culture",
    "village festivals",
    "village celebrations",
    "Indian village culture",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/events`,
  },

  openGraph: {
    title: "Events & Celebrations | Deorai Village",

    description:
      "Explore upcoming events, festivals, celebrations, and community gatherings that reflect the culture, traditions, and shared life of Deorai village.",

    url: `${FRONTEND_URL}/events`,

    siteName: "Deorai",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://res.cloudinary.com/oenn8x6i/image/upload/v1783866216/IMG-20260712-WA0018_fzsbug.jpg",
        width: 1200,
        height: 630,
        alt: "Events & Celebrations of Deorai Village",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Events & Celebrations | Deorai Village",

    description:
      "Discover festivals, celebrations, gatherings, and cultural events that bring the Deorai village community together.",

    images: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783866216/IMG-20260712-WA0018_fzsbug.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};
function page() {
  return (
    <div className="">
      <HeroSection
        label="UPCOMING"
        title="Events & Celebrations"
        subtitle="The rhythm of our village life, marked by festivals, gatherings, and shared joy"
      />
      <EventsSection/>
    
    </div>
  );
}

export default page;
