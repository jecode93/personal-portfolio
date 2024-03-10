import Cta from "@/components/Cta";
import Hero from "@/components/Services/Hero";
import ServicesSection from "@/components/Services/Services";
import React from "react";

export const metadata = {
  title: "Services",
  description:
    "Boost your online presence with my full-stack services: web development, custom APIs, & secure database solutions.",
};

const Services = () => {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <Cta />
    </main>
  );
};

export default Services;
