import Breadcrumb from "@/components/general/breadCrumb";
import SectionHeader from "@/components/general/sectionHeader";
import { poems } from "@/utils/constants";

export default function PoemsPage() {
  return (
    <section className="min-h-screen bg-[#FCF8F3] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About",
              href: "/about",
            },
            {
              label: "Poems",
            },
          ]}
        />

        <SectionHeader
          eyebrow="Poetry Collection"
          title="काव्य संग्रह"
          subtitle="A collection of poems by Rahul Singh."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {poems.map((poem) => (
            <div
              key={poem.id}
              className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex rounded-full bg-[#EFE2D3] px-3 py-1 text-xs uppercase tracking-wider text-brand">
                कविता {poem.id}
              </div>

              <h3 className="font-serif text-2xl leading-snug text-brand">
                {poem.title}
              </h3>

              <div className="mt-6 whitespace-pre-line text-[#5E4634] leading-8 ">
                {poem.content}
              </div>

              {/* <button
                className="mt-8 rounded-full bg-brand px-5 py-2 text-sm text-white transition hover:opacity-90"
                onClick={() => alert(poem.content)}
              >
                Read Full Poem
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}