import Link from "next/link";


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#4A2F23] text-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-52 text-center">
        <p className="text-xs uppercase tracking-[0.45em] font-bold text-brand">
          Preserving Ancestral Legacy
        </p>
        <h1 className="mx-auto mt-8 max-w-5xl font-serif font-semibold text-5xl leading-tight text-[#F7F2EA] md:text-7xl">
          Where the soil remembers
          <br />
          <span className="italic  font-semibold">
            every footstep.
          </span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-md lg:text-xl leading-9 text-[#D5C4B6]">
          A digital archive of Deorai village — its heritage,
          fertile lands, and the lineage of those who called
          this sacred dust home.
        </p>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/regional-info"
            className="border border-[#7A6558] px-10 py-4 text-sm uppercase tracking-[0.18em] transition-all duration-200 active:scale-95 hover:border-brand hover:bg-brand hover:text-white"
          >
            Explore the Region
          </Link>
          <Link
            href="/about"
            className="bg-brand px-10 py-4 text-sm uppercase tracking-[0.18em] text-white transition-all active:scale-95 duration-200 hover:opacity-90"
          >
            Read the Memoir
          </Link>
        </div>
      </div>

      <div className="relative mx-auto -mt-28 grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-3">
        <InfoCard
          label="The Village"
          title="Deorai"
          subtitle="देवरई • Devrai"
          description="Along the sacred Ganges basin"
        />

        <InfoCard
          label="Heritage Land"
          title="110 Bigha"
          subtitle="Ancestral Estate"
          description="Orchards, fields & village commons"
        />

        <InfoCard
          label="Village at a Glance"
          title="~1,763"
          subtitle="Population"
          description="68% literacy • Pin 222129"
        />
      </div>
    </section>
  );
}

interface CardProps {
  label: string;
  title: string;
  subtitle: string;
  description: string;
}

function InfoCard({
  label,
  title,
  subtitle,
  description,
}: CardProps) {
  return (
    <div className="rounded-sm border border-[#E4D8CA] bg-[#F7F2EA] p-8 shadow-xl">
      <p className="text-xs uppercase font-bold tracking-[0.28em] text-brand">
        {label}
      </p>
      <h3 className="mt-6 font-serif font-semibold text-3xl lg:text-5xl text-[#493126]">
        {title}
      </h3>
      <p className="mt-2 italic text-[#8B6F59]">
        {subtitle}
      </p>
      <div className="my-8 h-px bg-[#E6DACB]" />
      <p className="leading-7 text-[#5E4634]">
        {description}
      </p>
    </div>
  );
}