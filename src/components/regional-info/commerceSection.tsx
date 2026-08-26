
import {
  Laptop,
  Store,
  Trees,
} from "lucide-react";

import {
  electronicShops,
  supermarkets,
  localParks,
} from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";
import ServiceCard from "./serviceCard";

export default function CommerceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:py-24 py-16">
      <SectionHeader
        eyebrow="Commerce"
        title="Markets & Recreation"
        subtitle="Shopping, electronics and public recreational spaces around Deorai."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <ServiceCard
          title="Electronic Shops"
          icon={<Laptop size={24} />}
          items={electronicShops}
        />

        <ServiceCard
          title="Markets"
          icon={<Store size={24} />}
          items={supermarkets}
        />

        <ServiceCard
          title="Parks"
          icon={<Trees size={24} />}
          items={localParks}
        />
      </div>
    </section>
  );
}