import AuthorSection from "@/components/about/authorDetails";
import MemorialSection from "@/components/about/missionSection";
import EventsSection from "@/components/events/eventCards";
import SectionHeader from "@/components/general/sectionHeader";
import ContactCTA from "@/components/landingPage/ctaSection";
import HeroSection from "@/components/landingPage/heroSection";
import IntroductionSection from "@/components/landingPage/introductionSection";
import KashinathSinghSection from "@/components/landingPage/kashinathSection";
import LandCard from "@/components/lands/landCard";
import { lands } from "@/utils/constants";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <IntroductionSection />
      <KashinathSinghSection />
      <div className="py-10 mx-10">
        <SectionHeader
          eyebrow="Legacy Collection"
          title="The Heritage Lands"
          subtitle="Explore each parcel of our ancestral estate"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 mx-6">
          {lands.map((land) => (
            <LandCard key={land.id} land={land} />
          ))}
        </div>
      </div>

      <div>
      <SectionHeader
        eyebrow="UPCOMING"
        title="Events & Celebrations"
        subtitle="The rhythm of our village life, marked by festivals, gatherings, and shared joy"
      />
      <EventsSection/>
      </div>

      <SectionHeader
        eyebrow="MEET THE"
        title="Author & Custodian"
        subtitle="A poet, historian, and keeper of ancestral flame"
      />
      <AuthorSection/>
      <ContactCTA/>
      <MemorialSection/>
    </div>
  );
}
