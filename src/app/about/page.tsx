import AuthorSection from "@/components/about/authorDetails";
import MissionSection from "@/components/about/missionSection";
import WordsSection from "@/components/about/wordSection";
import PublishedWorksSection from "@/components/about/workSection";
import HeroSection from "@/components/general/heroSection";

function page() {
  return (
    <div>
      <HeroSection
        label="MEET THE"
        title="Author & Custodian"
        subtitle="A poet, historian, and keeper of ancestral flame"
      />
      <AuthorSection />
      <WordsSection />
      <PublishedWorksSection />
      <MissionSection />
    </div>
  );
}

export default page;
