import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-[#4A2F23] py-10">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand">
          Join Our Journey
        </p>

        <h2 className="mt-5 font-serif text-4xl leading-tight text-[#F8F1E8] md:text-6xl">
          Help Preserve the
          <br />
          <span className="italic font-light">
            Legacy of Deorai
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#D5C4B6]">
          Whether you wish to contribute historical records, collaborate on
          cultural initiatives, explore investment opportunities, or partner
          with Gram Virasat, we would be delighted to hear from you. Every
          contribution helps preserve and celebrate the enduring heritage of
          Deorai for future generations.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdO9PiZJ7XhmCwLc1wC1EQys5NhnWmcukSH9lsv6DkQI9XsDA/viewform?usp=publish-editor"
            target="_blank"
            className="inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Submit an Enquiry
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-[#8D7260] px-8 py-4 text-base font-medium text-[#F8F1E8] transition-all duration-300 hover:border-brand hover:bg-[#5A392A]"
          >
            Contact Information
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-center">
          <div className="h-px flex-1 max-w-40 bg-[#7B6354]" />

          <div className="mx-5 text-xl text-brand">✦</div>

          <div className="h-px flex-1 max-w-40 bg-[#7B6354]" />
        </div>
      </div>
    </section>
  );
}