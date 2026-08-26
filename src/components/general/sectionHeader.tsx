import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${
        isCenter ? "text-center" : "text-left"
      } mb-6 md:mb-10 ${className}`}
    >
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand/70 sm:text-xs md:text-sm">
          {eyebrow}
        </p>
      )}
 
      <h2 className="mt-3 font-serif font-semibold text-3xl leading-tight text-brand sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-3 max-w-3xl text-base italic leading-7 text-[#8B6F59] sm:text-lg md:text-xl">
          {subtitle}
        </p>
      )}

      <div
        className={`mt-6 h-px w-16 bg-[#D7C3AC] sm:mt-8 sm:w-24 ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}