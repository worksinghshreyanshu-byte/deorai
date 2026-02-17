"use client";

import { menuLinks } from "@/utils/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3b2316] text-[#e8d8c3] py-14 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-[#d97706] mb-3">
            ग्राम विरासत
          </h2>

          <p className="italic text-sm text-[#cbb79f] leading-relaxed">
            &quot;Where the soil remembers every footstep of our
            ancestors.&quot;
          </p>
        </div>

        <div>
          <h3 className="text-[#d97706] font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            {menuLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-white transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[#d97706] font-semibold mb-4">Get in Touch</h3>

          <Link href="/contact" className="text-sm hover:text-white transition">
            Contact Us →
          </Link>
        </div>
      </div>

      <div className="my-10 border-t border-[#6b3f24]"></div>

      <div className="text-center text-sm text-[#cbb79f]">
        © 2026 Gram Virasat. All rights reserved.
      </div>
    </footer>
  );
}
