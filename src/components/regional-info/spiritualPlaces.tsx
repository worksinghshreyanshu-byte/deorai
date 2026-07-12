
import { Church, Landmark, MapPin } from "lucide-react";

import {
  nearbyMosques,
  nearbyTemples,
} from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";

export default function SpiritualPlaces() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Cultural Heritage"
        title="Places of Worship"
        subtitle="Sacred places that reflect the cultural and spiritual heritage surrounding Deorai."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <FacilityCard
          title="Temples"
          icon={<Landmark size={24} />}
        >
          {nearbyTemples.map((place) => (
            <FacilityItem
              key={place.name}
              {...place}
            />
          ))}
        </FacilityCard>

        <FacilityCard
          title="Mosques"
          icon={<Church size={24} />}
        >
          {nearbyMosques.map((place) => (
            <FacilityItem
              key={place.name}
              {...place}
            />
          ))}
        </FacilityCard>
      </div>
    </section>
  );
}

function FacilityCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-8">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E7D8] text-brand">
          {icon}
        </div>

        <h3 className="font-serif text-2xl text-brand">
          {title}
        </h3>
      </div>

      <div className="my-6 h-px bg-[#E4D6C7]" />

      <div className="space-y-5">{children}</div>
    </div>
  );
}

function FacilityItem({
  name,
  address,
  distanceKm,
}: {
  name: string;
  address: string;
  distanceKm: number;
}) {
  return (
    <div className="border-b border-[#E4D6C7] pb-5 last:border-0">
      <div className="flex justify-between gap-4">
        <h4 className="font-medium text-[#5E4634]">
          {name}
        </h4>

        <span className="rounded-full bg-[#F3E7D8] px-3 py-1 text-sm font-medium text-brand">
          {distanceKm} km
        </span>
      </div>

      <div className="mt-2 flex gap-2">
        <MapPin
          size={15}
          className="mt-1 shrink-0 text-brand"
        />

        <p className="text-sm leading-6 text-[#8B6F59]">
          {address}
        </p>
      </div>
    </div>
  );
}