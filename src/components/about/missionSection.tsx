import { memorialSection } from "@/utils/constants";
import { HeartHandshake } from "lucide-react";

export default function MemorialSection() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-8 md:p-14 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F3E7D8] text-brand">
          <HeartHandshake size={30} />
        </div>

        <p className="mt-6 text-sm uppercase tracking-[0.35em] text-brand/70">
          {memorialSection.title}
        </p>

        <h2 className="mt-4 font-serif text-3xl text-brand md:text-5xl">
          {memorialSection.dedication}
        </h2>

        <h3 className="mt-3 font-serif text-2xl text-[#5E4634] md:text-3xl">
          {memorialSection.person}
        </h3>

        <p className="mt-2 text-lg text-[#8B6F59]">
          ({memorialSection.lifespan})
        </p>

        <div className="mx-auto my-8 h-px w-24 bg-[#D7C3AC]" />

        <div className="space-y-8">
          {memorialSection.verses.map((verse, index) => (
            <p
              key={index}
              className="whitespace-pre-line font-serif text-lg lg:text-xl leading-7 lg:leading-10 text-[#5E4634]"
            >
              {verse}
            </p>
          ))}
        </div>

        <div className="mt-12 flex items-center">
          <div className="h-px flex-1 bg-[#D7C3AC]" />

          <div className="mx-5 text-xl text-brand">✦</div>

          <div className="h-px flex-1 bg-[#D7C3AC]" />
        </div>
      </div>
    </section>
  );
}