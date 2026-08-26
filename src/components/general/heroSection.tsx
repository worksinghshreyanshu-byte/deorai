interface HeroSectionProps {
    label: string;
    title: string;
    subtitle: string;
  }
  
  function HeroSection({ label, title, subtitle }: HeroSectionProps) {
    return (
      <section className="bg-[#3E2417] text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="tracking-widest text-sm text-[#C49A6C] font-semibold">
            {label}
          </p>
  
          <h1 className="text-4xl md:text-6xl font-serif mt-4 font-semibold">
            {title}
          </h1>
  
          <p className="mt-4 text-[#E8D8C3] italic">
            {subtitle}
          </p>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  