import Hero from "@/components/Home/HeroSection";
import About from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero /> {/* Hero section */}
        <About /> {/* About section */}
        <ServicesSection /> {/* About section */}
      </main>
    </>
  );
}
