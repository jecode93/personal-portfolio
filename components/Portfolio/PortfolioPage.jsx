import React from "react";
import { portfolios } from "@/js/data/home/portfolio";
import PortfolioCard from "./PortfolioCard";
import SectionsComponent from "../utils/SectionsComponent";
import SectionTitle from "../utils/SectionTitle";

const PortfolioPage = () => {
  return (
    <SectionsComponent id="Portfolio" otherClasses="pt-32 md:pt-48">
      <SectionTitle title="My portfolio" text="Explore My Popular Projects" />
      {portfolios.map((portfolio, index) => (
        <div key={portfolio.id} className="duration-500">
          <PortfolioCard content={portfolio} index={index} />
        </div>
      ))}
    </SectionsComponent>
  );
};

export default PortfolioPage;
