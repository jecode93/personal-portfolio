import React from "react";
import SectionsComponent from "../utils/SectionsComponent";
import SectionTitle from "../utils/SectionTitle";
import { hero } from "@/js/data/services/hero";

const Hero = () => {
  return (
    <SectionsComponent id="services" otherClasses="pt-32 md:pt-48 -mb-20">
      <SectionTitle title="Services" text="What I Build" />
      <div className="-mt-7">
        {hero.map((data) => (
          <div key={data}>
            <p className="tracking-wide text-slate text-justify description">
              {data.services}
            </p>
          </div>
        ))}
      </div>
    </SectionsComponent>
  );
};

export default Hero;
