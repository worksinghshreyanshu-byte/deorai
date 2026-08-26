
import {
  Shield,
  Building2,
} from "lucide-react";

import {
  nearbyPoliceStations,
  nearbyGovernmentOffices,
} from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";
import ServiceCard from "./serviceCard";

export default function PublicAdministration() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:py-24 py-16">
      <SectionHeader
        eyebrow="Administration"
        title="Public Offices"
        subtitle="Law enforcement and government offices located near Deorai."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <ServiceCard
          title="Police Stations"
          icon={<Shield size={24} />}
          items={nearbyPoliceStations}
        />

        <ServiceCard
          title="Government Offices"
          icon={<Building2 size={24} />}
          items={nearbyGovernmentOffices}
        />
      </div>
    </section>
  );
}