import HeroSection from "@/components/general/heroSection";
import LandCard from "@/components/lands/landCard";
import { lands } from "@/utils/constants";
import React from "react";

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
