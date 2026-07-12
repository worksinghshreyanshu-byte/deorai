import { authorDetails } from "@/utils/constants";
import Image from "next/image";

export default function AuthorSection() {
  return (
    <section className="pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div className="border border-[#E0C9A6] rounded-xl bg-[#F8F1E8] overflow-hidden">
          <div className="relative w-full h-[560px]">
            <Image
              src="https://res.cloudinary.com/oenn8x6i/image/upload/v1783863574/author_er0g3m.jpg"
              alt={authorDetails.portraitLabel}
              fill
              className="object-fill"
              priority
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-serif text-[#2B1E17]">
            {authorDetails.title}
          </h2>

          <p className="text-[#C49A6C] mt-2">{authorDetails.subtitle}</p>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-[#E0C9A6]" />
            <div className="mx-4 text-[#C49A6C]">✦</div>
            <div className="flex-1 h-px bg-[#E0C9A6]" />
          </div>

          <div className="space-y-6 text-[#4A3A2C] leading-relaxed">
            {authorDetails.paragraphs.map(
              (paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
