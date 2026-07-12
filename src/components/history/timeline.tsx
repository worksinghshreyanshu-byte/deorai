"use client";


import { timelineData } from "@/utils/constants";

export default function HistoryTimeline() {
  return (
    <section className="bg-[#F5EFE6] py-20">
      <div className="max-w-6xl mx-auto px-6">


        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#3E2F25]">
            A Journey Through Centuries
          </h2>
          <p className="text-[#8C6F5C] mt-3 italic">
            The chronicle of land, lineage, and legacy
          </p>
        </div>


        <div className="relative">


          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-[#D9C7B8] h-full" />

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative mb-20 flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#C07A2C] rounded-full border-4 border-[#F5EFE6]" />

 
                <div className="w-full md:w-[45%] bg-white  rounded-xl p-6 relative">
                  
            
                  <span className="inline-block bg-[#F3E3D3] text-[#C07A2C] text-xs px-3 py-1 rounded-full mb-4">
                    {item.period}
                  </span>

                  <h3 className="text-xl font-semibold text-[#3E2F25] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[#6B5B4D] text-sm leading-relaxed">
                    {item.description}
                  </p>

              
                </div>
              </div>
            );
          })}
        </div>
      </div>
     
      <div className="flex items-center my-6 mx-auto justify-center max-w-6xl ">
            <div className="flex-1 h-px bg-[#E0C9A6] ml-6" />
            <div className="mx-4 text-[#C49A6C]">✦</div>
            <div className="flex-1 h-px bg-[#E0C9A6] mr-6" />
          </div>
    </section>
  );
}
