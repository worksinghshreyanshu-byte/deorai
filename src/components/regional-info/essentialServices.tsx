
import {
  UtensilsCrossed,
  Bed,
  Hospital,
  Fuel,
  MapPin,
} from "lucide-react";

import {
  nearbyRestaurants,
  nearbyHotelsAndLodges,
  nearbyHospitals,
  nearbyPetrolPumps,
} from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";

export default function EssentialServices() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Community Services"
        title="Nearby Facilities"
        subtitle="Everyday services available around Deorai for residents and visitors."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <ServiceCard
          title="Restaurants"
          icon={<UtensilsCrossed size={24} />}
          items={nearbyRestaurants}
        />

        <ServiceCard
          title="Hotels & Lodges"
          icon={<Bed size={24} />}
          items={nearbyHotelsAndLodges}
        />

        <ServiceCard
          title="Hospitals"
          icon={<Hospital size={24} />}
          items={nearbyHospitals}
        />

        <ServiceCard
          title="Petrol Pumps"
          icon={<Fuel size={24} />}
          items={nearbyPetrolPumps}
        />
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: {
    name: string;
    address: string;
    distanceKm: number;
  }[];
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

      <div className="space-y-5">
        {items.map((item) => (
          <div
            key={`${item.name}-${item.distanceKm}`}
            className="border-b border-[#E4D6C7] pb-5 last:border-0"
          >
            <div className="flex justify-between gap-4">
              <h4 className="font-medium text-[#5E4634]">
                {item.name}
              </h4>

              <span className="rounded-full bg-[#F3E7D8] px-3 py-1 text-sm font-medium text-brand">
                {item.distanceKm} km
              </span>
            </div>

            <div className="mt-2 flex gap-2">
              <MapPin
                size={15}
                className="mt-1 shrink-0 text-brand"
              />

              <p className="text-sm leading-6 text-[#8B6F59]">
                {item.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}