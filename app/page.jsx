import Hero from "@/components/Home/HeroSection";
import About from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import PortfolioSection from "@/components/Home/PortfolioSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero /> {/* Hero section */}
        <About /> {/* About section */}
        <ServicesSection /> {/* Services section */}
        <PortfolioSection /> {/* Portfolio section */}
      </main>
    </>
  );
}
