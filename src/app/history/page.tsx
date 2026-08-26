import HeroSection from "@/components/general/heroSection";
import HistoryTimeline from "@/components/history/timeline";
import { FRONTEND_URL } from "@/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "History & Ancestors | Deorai Village Heritage",

  description:
    "Explore the history and ancestors of Deorai, tracing generations of heritage, culture, traditions, and stories from the village's past to modern India.",

  keywords: [
    "Deorai history",
    "Deorai village history",
    "History of Deorai",
    "Deorai ancestors",
    "Deorai heritage",
    "Deorai genealogy",
    "Deorai family history",
    "Deorai village ancestors",
    "Deorai history and heritage",
    "Deorai culture",
    "Deorai traditions",
    "Deorai Uttar Pradesh",
    "Indian village history",
    "Indian village heritage",
    "village ancestors",
    "family genealogy India",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/history`,
  },

  openGraph: {
    title: "History & Ancestors | Deorai Village Heritage",

    description:
      "Discover the history, ancestors, heritage, and generations of stories that shaped Deorai from its past to modern India.",

    url: `${FRONTEND_URL}/history`,

    siteName: "Deorai",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://res.cloudinary.com/oenn8x6i/image/upload/v1783866216/IMG-20260712-WA0018_fzsbug.jpg",
        width: 1200,
        height: 630,
        alt: "History and Ancestors of Deorai Village",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "History & Ancestors | Deorai Village Heritage",

    description:
      "Explore the history, ancestors, heritage, culture, and generations of stories that shaped Deorai village.",

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
    <div>
      <HeroSection
        label="CHRONICLES OF"
        title="History & Ancestors"
        subtitle=" From Mughal courts to modern India — a saga written in soil and spirit"
      />
      <HistoryTimeline />
    </div>
  );
}

export default page;
