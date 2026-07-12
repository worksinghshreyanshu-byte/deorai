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
      } mb-10 ${className}`}
    >
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.35em] text-brand/70">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 font-serif text-5xl text-brand md:text-6xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-xl italic text-[#8B6F59]">
          {subtitle}
        </p>
      )}

      <div
        className={`mt-8 h-px w-24 bg-[#D7C3AC] ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}