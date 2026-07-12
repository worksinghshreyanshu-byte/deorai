import Image from "next/image";
import SectionHeader from "@/components/general/sectionHeader";
import { Landmark, BookOpen, Flag } from "lucide-react";

export default function KashinathSinghSection() {
  return (
    <section className=" py-10">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Historical Legacy"
          title="Kashinath Singh"
          subtitle="Freedom Fighter • Gandhian • Scholar • Custodian of Conscience"
        />

        <div className="grid  gap-16 lg:grid-cols-[420px_1fr]">
  
          <div>
            <div className="rounded-[32px]  bg-[#F8F1E8]  shadow-lg">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
                <Image
                  src="https://res.cloudinary.com/oenn8x6i/image/upload/v1783870633/IMG-20260712-WA0017_ig8uyv.jpg"
                  alt="Kashinath Singh"
                  fill
                  className="object-fill"
                />
              </div>
            </div>
          </div>

          <div>


            <div className="mb-10 flex flex-wrap gap-3">
              <Badge
                icon={<Flag size={16} />}
                label="Freedom Fighter"
              />

              <Badge
                icon={<Landmark size={16} />}
                label="Gandhian"
              />

              <Badge
                icon={<BookOpen size={16} />}
                label="Scholar"
              />
            </div>

            <div className="space-y-7 text-lg leading-9 text-[#5E4634]">
              <p>
                Among the many lives that shaped the history of Deorai,
                few command the same reverence as Kashinath Singh—a
                scholar, devoted Gandhian, and courageous freedom
                fighter whose unwavering principles became a lasting
                legacy for both his family and his village.
              </p>

              <p>
                Born into a respected zamindar family, he chose
                conviction over privilege. While many influential
                landholders maintained close ties with the British
                administration, Kashinath Singh stood firmly beside
                India&apos;s struggle for independence. Despite opposition
                from within his own family, he dedicated himself to the
                national movement, embracing truth, justice, and
                selfless service.
              </p>

              <p>
                His commitment led to repeated imprisonment, yet neither
                hardship nor persecution weakened his resolve. If his
                ancestors were remembered for their valor on the
                battlefield, Kashinath Singh embodied another kind of
                courage—the moral strength to challenge injustice and
                sacrifice personal comfort for the freedom of an entire
                nation.
              </p>

              <p>
                Married to Shyama Devi of the distinguished Kailawar
                family, he was blessed with three sons and three
                daughters. Beyond being the patriarch of his family, he
                became a source of inspiration whose life reflected
                integrity, resilience, and public service.
              </p>
            </div>

            <div className="mt-12 rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-8">
              <p className="font-serif text-2xl italic leading-10 text-brand">
                “His legacy belongs not only to his descendants,
                but to the enduring history of Deorai.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#D7C3AC] bg-[#F3E7D8] px-5 py-2 text-[#5E4634]">
      <span className="text-brand">{icon}</span>
      <span>{label}</span>
    </div>
  );
}