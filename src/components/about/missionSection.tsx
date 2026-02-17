import { missionSection } from "@/utils/constants";
import { GiFountainPen } from "react-icons/gi";

export default function MissionSection() {
  return (
    <section className="bg-[#EFE6D8] py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <div className="text-4xl text-[#C49A6C] mb-6 flex items-center justify-center"><GiFountainPen/></div>

        <h2 className="text-3xl font-serif text-[#2E1F16]">
          {missionSection.title}
        </h2>

        <p className="mt-8 italic text-lg text-[#6B5B4D] leading-relaxed">
          “{missionSection.quote}”
        </p>

        <p className="mt-6 text-sm text-[#8B6F4E]">
          — {missionSection.citation}
        </p>
        <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-[#E0C9A6]" />
            <div className="mx-4 text-[#C49A6C]">✦</div>
            <div className="flex-1 h-px bg-[#E0C9A6]" />
          </div>
      </div>
    </section>
  );
}
