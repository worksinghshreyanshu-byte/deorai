import { worksSection } from "@/utils/constants";
import { GiOpenBook } from "react-icons/gi";

export default function PublishedWorksSection() {
  return (
    <section className="bg-[#F5EFE6] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-[#2E1F16]">
          {worksSection.title}
        </h2>
        <p className="mt-2 text-[#8B6F4E] italic">
          {worksSection.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {worksSection.works.map((work, index) => (
            <div
              key={index}
              className="bg-[#E8D6C0] rounded-xl overflow-hidden shadow-sm"
            >
              <div className="h-40 bg-[#D6BFA3] flex items-center justify-center text-5xl text-[#C49A6C]">
              <GiOpenBook />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
