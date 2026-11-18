import HomeHero from "@/components/sections/HomeHero";
import FeatureStrip from "@/components/sections/FeatureStrip";
import ServiceCardGrid from "@/components/sections/ServiceCardGrid";
import PriceCatalog from "@/components/sections/PriceCatalog";
import ContactBlock from "@/components/sections/ContactBlock";
import CtaBand from "@/components/layout/CtaBand";

export default function HomePage() {
  return (
    <main className="relative w-full bg-white">
      <HomeHero />
      <div
        id="keunggulan"
        className="relative z-20 bg-white pt-1 md:pt-6 md:shadow-[0_-16px_36px_-14px_rgba(15,23,42,0.08)]"
      >
        <FeatureStrip />
        <ServiceCardGrid />
        <PriceCatalog />
        <ContactBlock />
        <CtaBand />
      </div>
    </main>
  );
}
