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
