import HeroSection from "@/components/general/heroSection";
import LandCard from "@/components/lands/landCard";
import { FRONTEND_URL, lands } from "@/utils/constants";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Heritage Lands | Ancestral Estate of Deorai",

  description:
    "Explore the heritage lands and ancestral estate of Deorai. Discover the history, identity, and stories connected to each parcel of the family's ancestral land.",

  keywords: [
    "Deorai heritage lands",
    "Deorai ancestral land",
    "Deorai ancestral estate",
    "Deorai land history",
    "Deorai village land",
    "Deorai heritage",
    "Deorai family estate",
    "Deorai ancestors",
    "ancestral land Deorai",
    "heritage property Deorai",
    "Deorai history",
    "Deorai village history",
    "ancestral property India",
    "family heritage India",
    "Indian ancestral land",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/lands`,
  },

  openGraph: {
    title: "Heritage Lands | Ancestral Estate of Deorai",

    description:
      "Explore the heritage lands of Deorai and discover the history, identity, and stories connected to each parcel of the ancestral estate.",

    url: `${FRONTEND_URL}/lands`,

    siteName: "Deorai",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863407/purab2_rdgft0.jpg",
        width: 1200,
        height: 630,
        alt: "The Heritage Lands of Deorai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Heritage Lands | Ancestral Estate of Deorai",

    description:
      "Explore the heritage lands and ancestral estate of Deorai, along with the stories and history connected to each parcel.",

    images: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863407/purab2_rdgft0.jpg",
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
        label="Legacy Collection"
        title="The Heritage Lands"
        subtitle="Explore each parcel of our ancestral estate"
      />
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 mx-6">
        {lands.map((land) => (
          <LandCard key={land.id} land={land} />
        ))}
      </div>
    </div>
  );
}

export default page;
