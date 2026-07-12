import { GraduationCap, School } from "lucide-react";

import { colleges, schoolsNearby } from "@/utils/constants";
import ServiceCard from "./serviceCard";
import SectionHeader from "../general/sectionHeader";

export default function EducationSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Education"
        title="Learning Institutions"
        subtitle="Schools and colleges serving Deorai and nearby villages."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <ServiceCard
          title="Colleges"
          icon={<GraduationCap size={24} />}
          items={colleges}
        />
        <ServiceCard
          title="Schools"
          icon={<School size={24} />}
          items={schoolsNearby}
        />
      </div>
    </section>
  );
}
