import Image from "next/image";
import { worksSection } from "@/utils/constants";
import { GiOpenBook } from "react-icons/gi";
import Link from "next/link";
import SectionHeader from "../general/sectionHeader";

export default function PublishedWorksSection() {
  return (
    <section className="py-16 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <SectionHeader title={worksSection.title} subtitle={worksSection.subtitle}/>
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {worksSection.works.map((work, index) => (
            <Link
            href="/about/poem"
              key={index}
              className="bg-[#E8D6C0] rounded-xl cursor-pointer overflow-hidden shadow-sm"
            >
              <div className="relative h-56 bg-[#D6BFA3]">
                {work.img ? (
                  <Image
                    src={work.img}
                    alt={work.title}
                    fill
                    className="object-fill"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-5xl text-[#C49A6C]">
                    <GiOpenBook />
                  </div>
                )}
              </div>

              <div className="p-6 text-left">
                <span className="text-xs bg-[#E0C9A6] px-2 py-1 rounded text-[#7A5B3A]">
                  {work.category} • {work.year}
                </span>

                <h3 className="mt-4 text-xl font-serif text-[#2E1F16]">
                  {work.title}
                </h3>

                <p className="mt-3 text-sm text-[#6B5B4D] leading-relaxed">
                  {work.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}