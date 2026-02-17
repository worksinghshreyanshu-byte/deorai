

import { regionalOverviewData } from "@/utils/constants";
import { IconType } from "react-icons";
import { FaBookOpen, FaMapMarkerAlt, FaWater } from "react-icons/fa";
import { FaBowlFood, FaBuildingColumns } from "react-icons/fa6";
import { LuMountainSnow } from "react-icons/lu";
  
  const iconMap: Record<string, IconType> = {
    map: FaMapMarkerAlt,
    building: FaBuildingColumns,
    waves: FaWater,
    mountain: LuMountainSnow ,
    book: FaBookOpen,
    food: FaBowlFood,
  };
  
  export default function RegionalOverview() {
    return (
      <section className="bg-[#F3EFEA] py-24">
        <div className="max-w-6xl mx-auto px-6">
        
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#3E2417]">
              Regional Overview
            </h2>
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="w-24 h-px bg-[#D8C2A8]" />
              <span className="text-[#C49A6C]">✦</span>
              <div className="w-24 h-px bg-[#D8C2A8]" />
            </div>
          </div>
  
  
          <div className="grid md:grid-cols-3 gap-8">
            {regionalOverviewData.map((item) => {
              const Icon = iconMap[item.icon];
  
              return (
                <div
                  key={item.id}
                  className="bg-[#E9E2D8] p-8 rounded-xl border border-[#E2C9A6] hover:shadow-md transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F1E5D6] mb-6">
                    <Icon className="text-[#C49A6C]" size={20} />
                  </div>
  
                  <h3 className="text-xl font-serif text-[#3E2417] mb-3">
                    {item.title}
                  </h3>
  
                  <p className="text-[#6B5B4D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  