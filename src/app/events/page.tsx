import EventsSection from "@/components/events/eventCards";
import HeroSection from "@/components/general/heroSection";

function page() {
  return (
    <div className="bg-[#F5EFE6]">
      <HeroSection
        label="UPCOMING"
        title="Events & Celebrations"
        subtitle="The rhythm of our village life, marked by festivals, gatherings, and shared joy"
      />
      <EventsSection/>
    
    </div>
  );
}

export default page;
