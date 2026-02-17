import HeroSection from "@/components/general/heroSection";
import NearbyLandmarks from "@/components/regional-info/landmarks";
import RegionalOverview from "@/components/regional-info/regional-overview";

function page() {
  return (
    <div>
      <HeroSection
        label="DISCOVER"
        title="The Region"
        subtitle="The land of Kashi — where civilization began and spirituality never sleeps"
      />
      <RegionalOverview />
      <NearbyLandmarks />
    </div>
  );
}

export default page;
