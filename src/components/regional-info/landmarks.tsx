import { nearbyLandmarks } from "@/utils/constants";

export default function NearbyLandmarks() {
  return (
    <section className="bg-[#EFEAE4] py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-serif text-[#3E2417]">
          Nearby Landmarks
        </h2>

        <div className="mt-4 flex items-center justify-center gap-4 mb-16">
          <div className="w-24 h-px bg-[#D8C2A8]" />
          <span className="text-[#C49A6C]">✦</span>
          <div className="w-24 h-px bg-[#D8C2A8]" />
        </div>

     
        <div className="grid md:grid-cols-3 gap-6">
          {nearbyLandmarks.map((landmark, index) => (
            <div
              key={index}
              className="border border-[#E2C9A6] bg-[#E9E2D8] rounded-lg py-4 px-6 hover:bg-[#E5D8C9] transition"
            >
              <p className="text-[#3E2417] font-medium">
                {landmark}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
