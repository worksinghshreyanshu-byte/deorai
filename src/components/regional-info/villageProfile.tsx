import { villageData, villageOverview } from "@/utils/constants";
import {
  MapPin,
  Landmark,
  Trees,
  Mountain,
  Languages,
  Route,
  Mail,
  Users,
  Crown,
} from "lucide-react";
import SectionHeader from "../general/sectionHeader";

export default function VillageProfile() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Regional Heritage"
        title={villageData.name}
        subtitle={`${villageData.localName} • ${villageData.alternateName}`}
      />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_380px]">
        <div>
          <div className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-10">
            <h3 className="font-serif text-3xl text-brand">
              About the Village
            </h3>

            <div className="my-6 h-px bg-[#E4D6C7]" />

            <p className="leading-9 text-[#5E4634]">
              {villageOverview.description}
            </p>
          </div>
          <div className="mt-10 rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-10">
            <h3 className="font-serif text-3xl text-brand">Geography</h3>

            <div className="my-6 h-px bg-[#E4D6C7]" />

            <div className="grid gap-8 md:grid-cols-2">
              <InfoRow
                icon={<Mountain size={20} />}
                title="Elevation"
                value={`${villageData.geography.elevation.value} ${villageData.geography.elevation.unit}`}
              />

              <InfoRow
                icon={<Trees size={20} />}
                title="Rivers"
                value={villageData.geography.rivers.join(", ")}
              />

              <InfoRow
                icon={<Route size={20} />}
                title="National Highway"
                value={villageData.transport.nationalHighways.join(", ")}
              />

              <InfoRow
                icon={<Languages size={20} />}
                title="Languages"
                value={villageData.language.join(", ")}
              />
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-10">
            <h3 className="font-serif text-3xl text-brand">Nearby Villages</h3>

            <div className="my-6 h-px bg-[#E4D6C7]" />

            <div className="space-y-5">
              {villageOverview.nearbyVillages.map((village) => (
                <div
                  key={village.name}
                  className="flex items-center justify-between border-b border-[#E4D6C7] pb-4 last:border-0"
                >
                  <span className="text-lg text-[#5E4634]">{village.name}</span>

                  <span className="rounded-full bg-[#F3E7D8] px-4 py-1.5 text-sm font-medium text-brand">
                    {village.distanceKm} km
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-10">
          <h3 className="font-serif text-3xl text-brand">At a Glance</h3>

          <div className="my-6 h-px bg-[#E4D6C7]" />

          <div className="space-y-8">
            <InfoRow
              icon={<MapPin size={20} />}
              title="District"
              value={villageData.location.district}
            />

            <InfoRow
              icon={<Landmark size={20} />}
              title="Block"
              value={villageData.location.block}
            />

            <InfoRow
              icon={<Mail size={20} />}
              title="PIN Code"
              value={villageData.postal.pinCode}
            />

            <InfoRow
              icon={<Users size={20} />}
              title="Lok Sabha"
              value={villageData.administration.lokSabhaConstituency}
            />

            <InfoRow
              icon={<Crown size={20} />}
              title="Member of Parliament"
              value={villageData.administration.mp}
            />

            <InfoRow
              icon={<Landmark size={20} />}
              title="MLA"
              value={villageData.administration.mla}
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

interface Props {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}

function InfoRow({ icon, title, value }: Props) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E7D8] text-brand">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[#8B6F59]">
          {title}
        </p>

        <p className="mt-1 text-lg text-[#5E4634]">{value}</p>
      </div>
    </div>
  );
}
