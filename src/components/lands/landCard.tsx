import { Land } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";


interface Props {
  land: Land;
}

export default function LandCard({ land }: Props) {
  return (
    <Link
      href={`/lands/${land.slug}`}
      className="group block rounded-xl overflow-hidden border border-[#e6dcd2] bg-[#f8f4ef] shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative w-full h-[260px] overflow-hidden">
        <Image
          src={land.image}
          alt={land.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-[#3b2f2f]">
            {land.title}
          </h3>
          <span className="text-sm bg-[#eadfd6] text-[#a0602c] px-3 py-1 rounded-md">
            {land.area}
          </span>
        </div>
        <p className="text-[#7a6f66] text-sm leading-relaxed">
          {land.description}
        </p>
      </div>
    </Link>
  );
}
