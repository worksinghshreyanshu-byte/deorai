
import {
  GraduationCap,
  School,
  HeartPulse,
  MapPin,
} from "lucide-react";

import {
  nearbyColleges,
  schools,
  nearbyHealthCenters,
} from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";

export default function EducationHealthcare() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Public Services"
        title="Education & Healthcare"
        subtitle="Educational institutions and healthcare facilities serving Deorai and its neighboring villages."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Colleges */}

        <InfoCard
          icon={<GraduationCap size={24} />}
          title="Nearby Colleges"
        >
          {nearbyColleges.map((college) => (
            <ListItem
              key={college.name}
              title={college.name}
              subtitle={college.address || "Address unavailable"}
            />
          ))}
        </InfoCard>

        {/* Schools */}

        <InfoCard
          icon={<School size={24} />}
          title="Schools"
        >
          {schools.map((school) => (
            <ListItem
              key={school.name}
              title={school.name}
              subtitle={school.address}
            />
          ))}
        </InfoCard>

        {/* Health */}

        <InfoCard
          icon={<HeartPulse size={24} />}
          title="Health Centres"
        >
          {nearbyHealthCenters.map((centre) => (
            <ListItem
              key={centre.name}
              title={centre.name}
              subtitle={centre.village}
            />
          ))}
        </InfoCard>
      </div>
    </section>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function InfoCard({ icon, title, children }: CardProps) {
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

interface ListItemProps {
  title: string;
  subtitle: string;
}

function ListItem({ title, subtitle }: ListItemProps) {
  return (
    <div className="border-b border-[#E4D6C7] pb-5 last:border-b-0 last:pb-0">
      <h4 className="font-medium text-[#5E4634]">
        {title}
      </h4>

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