
import {
  Users,
  BookOpen,
  PieChart,
  Landmark,
  MapPinned,
} from "lucide-react";

import {
  census2011,
  villagePolitics,
  subVillages,
} from "@/utils/constants";
import SectionHeader from "../general/sectionHeader";

export default function VillageStatistics() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Village Records"
        title="Census & Demographics"
        subtitle={`Official Census ${census2011.year} and administrative information of Deorai.`}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Population */}

        <StatCard
          title="Population"
          icon={<Users size={24} />}
        >
          <StatRow
            label="Total Population"
            value={census2011.population.total}
          />

          <StatRow
            label="Total Houses"
            value={census2011.population.houses}
          />

          <StatRow
            label="Female Population"
            value={`${census2011.population.femalePopulation} (${census2011.population.femalePercentage}%)`}
          />
        </StatCard>

        {/* Literacy */}

        <StatCard
          title="Literacy"
          icon={<BookOpen size={24} />}
        >
          <StatRow
            label="Literacy Rate"
            value={`${census2011.literacy.totalRate}%`}
          />

          <StatRow
            label="Total Literates"
            value={census2011.literacy.literates}
          />

          <StatRow
            label="Female Literacy"
            value={`${census2011.literacy.femaleLiterates} (${census2011.literacy.femaleRate}%)`}
          />
        </StatCard>

        {/* Demographics */}

        <StatCard
          title="Demographics"
          icon={<PieChart size={24} />}
        >
          <StatRow
            label="Scheduled Castes"
            value={`${census2011.demographics.scheduledCastes.population} (${census2011.demographics.scheduledCastes.percentage}%)`}
          />

          <StatRow
            label="Scheduled Tribes"
            value={`${census2011.demographics.scheduledTribes.population} (${census2011.demographics.scheduledTribes.percentage}%)`}
          />

          <StatRow
            label="Working Population"
            value={`${census2011.demographics.workingPopulationPercentage}%`}
          />

          <StatRow
            label="Children (0–6 Years)"
            value={`${census2011.demographics.childrenAge0To6.total}`}
          />

          <StatRow
            label="Girls (0–6 Years)"
            value={`${census2011.demographics.childrenAge0To6.girlsPopulation} (${census2011.demographics.childrenAge0To6.girlsPercentage}%)`}
          />
        </StatCard>

        {/* Politics */}

        <StatCard
          title="Political Landscape"
          icon={<Landmark size={24} />}
        >
          <div className="flex flex-wrap gap-3">
            {villagePolitics.majorPoliticalParties.map((party) => (
              <span
                key={party}
                className="rounded-full border border-[#D7C3AC] bg-[#F3E7D8] px-5 py-2 text-sm font-medium text-brand"
              >
                {party}
              </span>
            ))}
          </div>
        </StatCard>
      </div>

      {/* Sub Villages */}

      <div className="mt-10 rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-10">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E7D8] text-brand">
            <MapPinned size={24} />
          </div>

          <h3 className="font-serif text-3xl text-brand">
            Hamlets & Sub Villages
          </h3>
        </div>

        <div className="my-6 h-px bg-[#E4D6C7]" />

        <div className="flex flex-wrap gap-4">
          {subVillages.map((village) => (
            <span
              key={village}
              className="rounded-full border border-[#D7C3AC] bg-[#FCF8F3] px-5 py-2 text-[#5E4634]"
            >
              {village}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function StatCard({
  title,
  icon,
  children,
}: StatCardProps) {
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

interface StatRowProps {
  label: string;
  value: React.ReactNode;
}

function StatRow({
  label,
  value,
}: StatRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-[#E4D6C7] pb-3 last:border-0">
      <span className="text-[#8B6F59]">
        {label}
      </span>

      <span className="font-semibold text-[#5E4634]">
        {value}
      </span>
    </div>
  );
}