import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#FCF8F3] px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand">
          Error 404
        </p>

        <h1 className="mt-5 font-serif text-6xl text-brand md:text-8xl">
          Page Not Found
        </h1>

        <div className="mx-auto my-8 h-px w-24 bg-[#D7C3AC]" />

        <p className="font-serif text-2xl text-[#5E4634]">
          यह पृष्ठ उपलब्ध नहीं है।
        </p>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#6B5B4D]">
          The page you are looking for may have been moved, renamed, or never
          existed. Continue exploring the heritage, history, and stories of
          Deorai from the homepage.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-white transition hover:opacity-90"
          >
            <Home size={18} />
            Return Home
          </Link>

          {/* <button
            onClick={() => history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-[#D7C3AC] bg-[#F8F1E8] px-7 py-3 text-[#5E4634] transition hover:border-brand hover:text-brand"
          >
            <ArrowLeft size={18} />
            Go Back
          </button> */}
        </div>

        <div className="mt-16 flex items-center justify-center">
          <div className="h-px w-28 bg-[#D7C3AC]" />
          <div className="mx-4 text-xl text-brand">✦</div>
          <div className="h-px w-28 bg-[#D7C3AC]" />
        </div>
      </div>
    </section>
  );
}