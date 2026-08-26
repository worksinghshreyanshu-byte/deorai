import HeroSection from "@/components/general/heroSection";
import CivicInfrastructure from "@/components/regional-info/civicInfrastructure";
import CommerceSection from "@/components/regional-info/commerceSection";
import EducationHealthcare from "@/components/regional-info/educationHealthcare";
import EducationSection from "@/components/regional-info/educationSection";
import EssentialServices from "@/components/regional-info/essentialServices";
import PublicAdministration from "@/components/regional-info/publicAdministration";
import PublicAmenities from "@/components/regional-info/publicAmenities";
import SpiritualPlaces from "@/components/regional-info/spiritualPlaces";
import VillageProfile from "@/components/regional-info/villageProfile";
import VillageStatistics from "@/components/regional-info/villageStatistics";
import { FRONTEND_URL } from "@/utils/constants";
import { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL(FRONTEND_URL),

  title: "The Region | Deorai Village Profile, History & Infrastructure",

  description:
    "Explore the region of Deorai through its village profile, demographics, infrastructure, education, healthcare, public amenities, spiritual places, commerce, essential services, and local administration.",

  keywords: [
    "Deorai",
    "Deorai village",
    "Deorai region",
    "Deorai village profile",
    "Deorai Uttar Pradesh",
    "Deorai history",
    "Deorai infrastructure",
    "Deorai education",
    "Deorai healthcare",
    "Deorai schools",
    "Deorai hospitals",
    "Deorai public amenities",
    "Deorai temples",
    "Deorai spiritual places",
    "Deorai commerce",
    "Deorai essential services",
    "Deorai administration",
    "Deorai demographics",
    "Deorai statistics",
    "Deorai culture",
    "Deorai heritage",
    "village profile India",
  ],

  alternates: {
    canonical: `${FRONTEND_URL}/regional-info`,
  },

  openGraph: {
    title: "The Region | Deorai Village Profile, History & Infrastructure",

    description:
      "Discover Deorai and its surrounding region, including its people, infrastructure, education, healthcare, spiritual places, public amenities, commerce, and local services.",

    url: `${FRONTEND_URL}/regional-info`,

    siteName: "Deorai",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863482/south6_jngjiw.jpg",
        width: 1200,
        height: 630,
        alt: "The Region of Deorai Village",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "The Region | Deorai Village Profile, History & Infrastructure",

    description:
      "Explore Deorai's village profile, infrastructure, education, healthcare, public amenities, spiritual places, commerce, and essential services.",

    images: [
      "https://res.cloudinary.com/oenn8x6i/image/upload/v1783863482/south6_jngjiw.jpg",
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
        label="DISCOVER"
        title="The Region"
        subtitle="The land of Deorai — where civilization began and spirituality never sleeps"
      />
      <VillageProfile />
      <CivicInfrastructure/>
      <EducationHealthcare/>
      <VillageStatistics/>
      <PublicAmenities/>
      <SpiritualPlaces/>
      <EssentialServices/>
      <EducationSection/>
      <CommerceSection/>
      <PublicAdministration/>
    </div>
  );
}

export default page;
