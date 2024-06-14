import PortfolioPage from "@/components/Portfolio/PortfolioPage";
import Cta from "@/components/utils/Cta";
import React from "react";

export const metadata = {
  title: "Portfolio",
  description:
    "Looking for a Full-stack Software Engineer with expertise in JavaScript, TypeScript, React, Next.js, Ruby, Ruby on Rails? Explore my portfolio to see my work and contact me for your next project.",
};

const Portfolio = () => {
  return (
    <main>
      <PortfolioPage />
      <Cta />
    </main>
  );
};

export default Portfolio;
