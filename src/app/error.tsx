"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home} from "lucide-react";

export default function Error({
  error,

}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#FCF8F3] px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand">
          Something Went Wrong
        </p>

        <h1 className="mt-5 font-serif text-5xl text-brand md:text-7xl">
          An Unexpected Error
        </h1>

        <div className="mx-auto my-8 h-px w-24 bg-[#D7C3AC]" />

        <p className="font-serif text-2xl text-[#5E4634]">
          कुछ क्षणों के लिए यात्रा बाधित हो गई।
        </p>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#6B5B4D]">
          We encountered an unexpected problem while loading this page.
          Please try again or return to the homepage to continue exploring
          the heritage and history of Deorai.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
         

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#D7C3AC] bg-[#F8F1E8] px-7 py-3 text-[#5E4634] transition hover:border-brand hover:text-brand"
          >
            <Home size={18} />
            Return Home
          </Link>
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