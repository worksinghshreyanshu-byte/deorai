import { wordsSection } from "@/utils/constants";

export default function WordsSection() {
  return (
    <section className="bg-[#3E2A1F] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif">{wordsSection.title}</h2>
        <p className="mt-2 text-[#E0C9A6] italic">{wordsSection.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {wordsSection.quotes.map((quote, index) => (
            <div
              key={index}
              className="border border-[#6B4F3A] rounded-xl p-8 bg-[#4A3426]"
            >
              <p className="italic text-lg leading-relaxed">
                “{quote.text}”
              </p>
              <p className="mt-4 text-sm text-[#E0C9A6]">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
