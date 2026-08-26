"use client";

import Link from "next/link";
import { Drawer } from "antd";
import { IoCloseOutline } from "react-icons/io5";
import { menuLinks } from "@/utils/constants";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}



export default function MobileSidebar({
  open,
  onClose,
  pathname,
}: MobileSidebarProps) {
  const isActive = (path: string) => pathname === path;

  const linkClassForMobile = (path: string) =>
    `w-full text-left px-4 py-3 rounded-md text-sm transition cursor-pointer
     ${
       isActive(path)
         ? "bg-[#e8dccf] text-[#b45309] font-medium"
         : "text-gray-600 hover:bg-[#f5ebe1] hover:text-[#b45309]"
     }`;

  return (
    <Drawer
      placement="left"
      open={open}
      closable={false}
      onClose={onClose}
      styles={{ body: { backgroundColor: "#f3ede6" } }}
      title={
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-[#c2410c]">
            ग्राम विरासत
          </h2>

          <IoCloseOutline
            className="cursor-pointer text-2xl text-gray-500"
            onClick={onClose}
          />
        </div>
      }
    >
      <div className="flex flex-col gap-2 mt-4">
        {menuLinks.map(({ label, href }) => (
          <Link key={href} href={href}>
            <button
              onClick={onClose}
              className={linkClassForMobile(href)}
            >
              {label}
            </button>
          </Link>
        ))}
      </div>
      <Link href="/contact">
            <button  onClick={onClose} className="bg-[#c2410c] mt-4 transition-all duration-200 active:scale-95 cursor-pointer text-white px-5 py-2 rounded-md hover:bg-[#9a3412] ">
              Contact Us
            </button>
          </Link>
    </Drawer>
  );
}
