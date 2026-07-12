// components/ui/ServiceCard.tsx

import { MapPin } from "lucide-react";

interface Item {
  name: string;
  address: string;
  distanceKm: number;
}

interface Props {
  title: string;
  icon: React.ReactNode;
  items: Item[];
}

export default function ServiceCard({
  title,
  icon,
  items,
}: Props) {
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
            <div className="flex items-start justify-between gap-4">
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