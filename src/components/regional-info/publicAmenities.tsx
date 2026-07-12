
import {
  Bus,
  Landmark,
  Clapperboard,
  MapPin,
} from "lucide-react";

import {
  nearbyBusStops,
  nearbyAtms,
  nearbyCinemaTheatres,
} from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";

export default function PublicAmenities() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Public Amenities"
        title="Essential Facilities"
        subtitle="Transport, banking, and entertainment facilities located around Deorai."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <FacilityCard
          icon={<Bus size={24} />}
          title="Nearby Bus Stops"
        >
          {nearbyBusStops.map((stop) => (
            <FacilityItem
              key={`${stop.name}-${stop.distanceKm}`}
              title={stop.name}
              subtitle={stop.address}
              distance={stop.distanceKm}
            />
          ))}
        </FacilityCard>

        <FacilityCard
          icon={<Landmark size={24} />}
          title="Nearby ATMs"
        >
          {nearbyAtms.map((atm) => (
            <FacilityItem
              key={`${atm.name}-${atm.distanceKm}`}
              title={atm.name}
              subtitle={atm.address}
              distance={atm.distanceKm}
            />
          ))}
        </FacilityCard>

        <FacilityCard
          icon={<Clapperboard size={24} />}
          title="Cinema & Entertainment"
        >
          {nearbyCinemaTheatres.map((theatre) => (
            <FacilityItem
              key={`${theatre.name}-${theatre.distanceKm}`}
              title={theatre.name}
              subtitle={theatre.address}
              distance={theatre.distanceKm}
            />
          ))}
        </FacilityCard>
      </div>
    </section>
  );
}

interface FacilityCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FacilityCard({
  icon,
  title,
  children,
}: FacilityCardProps) {
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

interface FacilityItemProps {
  title: string;
  subtitle: string;
  distance: number;
}

function FacilityItem({
  title,
  subtitle,
  distance,
}: FacilityItemProps) {
  return (
    <div className="border-b border-[#E4D6C7] pb-5 last:border-0 last:pb-0">
      <div className="flex items-start justify-between gap-4">
        <h4 className="font-medium text-[#5E4634]">
          {title}
        </h4>

        <span className="shrink-0 rounded-full bg-[#F3E7D8] px-3 py-1 text-sm font-medium text-brand">
          {distance} km
        </span>
      </div>

      <div className="mt-2 flex gap-2">
        <MapPin
          size={15}
          className="mt-1 shrink-0 text-brand"
        />

        <p className="text-sm leading-6 text-[#8B6F59]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}