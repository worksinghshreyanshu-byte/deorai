

import FamilyTreeUI from "@/components/vanshawali/familyTree";
import { FRONTEND_URL } from "@/utils/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "Vanshawali | Deorai Family Tree & Ancestry",

  description:
    "Explore the Vanshawali of Deorai and discover the family tree, ancestors, generations, and lineage that preserve the heritage and history of the Deorai family.",

  keywords: [
    "Deorai Vanshawali",
    "Deorai family tree",
    "Deorai ancestry",
    "Deorai ancestors",
    "Deorai genealogy",
    "Deorai family history",
    "Deorai lineage",
    "Deorai family lineage",
    "Deorai family tree history",
    "Vanshawali",
    "वंशावली",
    "देवराई वंशावली",
    "Deorai heritage",
    "Deorai history",
    "family genealogy India",
    "Indian family tree",
    "ancestral lineage",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/vanshawali`,
  },

  openGraph: {
    title: "Vanshawali | Deorai Family Tree & Ancestry",

    description:
      "Explore the Vanshawali of Deorai — a family tree documenting ancestors, generations, lineage, and the heritage of the Deorai family.",

    url: `${FRONTEND_URL}/vanshawali`,

    siteName: "Deorai",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863482/south6_jngjiw.jpg",
        width: 1200,
        height: 630,
        alt: "Deorai Family Tree and Vanshawali",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Vanshawali | Deorai Family Tree & Ancestry",

    description:
      "Explore the Deorai family tree, ancestors, generations, and lineage through the Vanshawali.",

    images: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863482/south6_jngjiw.jpgg",
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
      <FamilyTreeUI />
    </div>
  );
}

export default page;
