"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { FaBars } from "react-icons/fa";
import { menuLinks } from "@/utils/constants";

const MobileSidebar = dynamic(() => import("./mobileSidebar"), {
  ssr: false,
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const linkClass = (path: string) =>
    `
    relative cursor-pointer transition px-3 py-2 rounded-md
    ${
      isActive(path)
        ? "bg-[#e8dccf] text-[#b45309] font-medium"
        : "text-gray-600 hover:text-[#b45309]"
    }
  `;

  return (
    <nav className="sticky top-0 z-50 bg-[#f3ede6] border-b border-[#e5d7c8]">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        
        <Link href="/">
          <div className="cursor-pointer">
            <h1 className="text-2xl font-semibold text-[#c2410c] tracking-wide">
              ग्राम विरासत
            </h1>
            <p className="text-xs text-gray-500 tracking-widest">
              A LEGACY OF LAND & LETTERS
            </p>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {menuLinks.map(({ label, href }) => (
            <Link key={href} href={href}>
              <button className={linkClass(href)}>{label}</button>
            </Link>
          ))}

          <Link href="/contact">
            <button className="bg-[#c2410c] transition-all duration-200 active:scale-95 cursor-pointer text-white px-5 py-2 rounded-md hover:bg-[#9a3412] ">
              Contact Us
            </button>
          </Link>
        </div>

        <button
          className="xl:hidden text-xl text-[#c2410c] cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      <MobileSidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </nav>
  );
}
