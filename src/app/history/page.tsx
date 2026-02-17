import HeroSection from "@/components/general/heroSection";
import HistoryTimeline from "@/components/history/timeline";

function page() {
  return (
    <div>
      <HeroSection
        label="CHRONICLES OF"
        title="History & Ancestors"
        subtitle=" From Mughal courts to modern India — a saga written in soil and spirit"
      />
      <HistoryTimeline />
    </div>
  );
}

export default page;
