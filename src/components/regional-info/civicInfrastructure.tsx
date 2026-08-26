import { pollingStations, transportation } from "@/utils/constants";
import { Landmark, Train } from "lucide-react";
import SectionHeader from "../general/sectionHeader";

export default function CivicInfrastructure() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <SectionHeader
        eyebrow="Civic Infrastructure"
        title="Public Connectivity"
        subtitle="Essential civic facilities that connect Deorai with the surrounding region."
        className="lg:mb-16 mb-10"
      />
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-6 lg:p-10 transition-all duration-300 hover:border-[#C8AF93]">
          <div className="flex items-center gap-5">
            <div className="rounded-full bg-[#F3E7D8] p-4 text-brand">
              <Train size={24} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#8B6F59]">
                Rail Connectivity
              </p>

              <h3 className="mt-1 font-serif text-lg lg:text-2xl font-semibold text-brand">
                {transportation.rail.nearestStation}
              </h3>
            </div>
          </div>

          <div className="lg:my-8 my-6 h-px bg-[#E4D6C7]" />

          <p className="lg:leading-8 leading-7 text-sm lg:text-lg text-[#5E4634]">
            {transportation.rail.description}
          </p>
        </div>

        <div className="rounded-3xl border border-[#D7C3AC] bg-[#F8F1E8] p-6 lg:p-10 transition-all duration-300 hover:border-[#C8AF93]">
          <div className="flex items-center gap-5">
            <div className="rounded-full bg-[#F3E7D8] p-4 text-brand">
              <Landmark size={24} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#8B6F59]">
                Civic Administration
              </p>
              <h3 className="mt-1 font-serif text-lg font-semibold lg:text-2xl text-brand">
                Polling Stations
              </h3>
            </div>
          </div>

          <div className="lg:my-8 my-6 h-px bg-[#E4D6C7]" />

          <div className="space-y-5">
            {pollingStations.map((station, index) => (
              <div
                key={station}
                className="flex items-center justify-between border-b border-[#E4D6C7] pb-4 last:border-b-0 last:pb-0"
              >
                <span className="lg:text-lg text-sm text-[#5E4634]">{station}</span>
                <span className="font-serif text-sm tracking-wider text-[#9B7C61]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
