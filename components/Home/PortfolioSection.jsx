"use client";
import React from "react";
import SectionTitle from "../utils/SectionTitle";
import SectionsComponent from "../utils/SectionsComponent";
import { portfolios } from "@/js/data/home/portfolio";
import PortfolioCard from "../utils/PortfolioCard";
import ButtonComponent from "../utils/ButtonComponent";

const PortfolioSection = () => {
  const limitedPortfolios = portfolios.slice(0, 3);
  return (
    <SectionsComponent id="portfolio">
      <SectionTitle title="Portfolio" text="Featured Projects" />
      {limitedPortfolios.map((portfolio, index) => (
        <div key={portfolio.id} className="duration-500">
          <PortfolioCard content={portfolio} index={index} />
        </div>
      ))}
      <div className="flex justify-center">
        <ButtonComponent path="portfolio" text="View my portfolios" />
      </div>
    </SectionsComponent>
  );
};

export default PortfolioSection;
