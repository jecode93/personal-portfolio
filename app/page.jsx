import Hero from "@/components/Home/HeroSection";
import About from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import PortfolioSection from "@/components/Home/PortfolioSection";
import Cta from "@/components/utils/Cta";

export default function Home() {
  return (
    <>
      <main>
        <Hero /> {/* Hero section */}
        <About /> {/* About section */}
        <ServicesSection /> {/* Services section */}
        <PortfolioSection /> {/* Portfolio section */}
        <Cta /> {/* Portfolio section */}
      </main>
    </>
  );
}
