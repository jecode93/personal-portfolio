import React from "react";
import SectionsComponent from "../utils/SectionsComponent";
import SectionTitle from "../utils/SectionTitle";
import { approaches } from "@/js/data/about/approaches";
import ApproachCard from "./ApproachCard";

const Approach = () => {
  return (
    <SectionsComponent id="approaches">
      <SectionTitle title="Approach" text="How I Work" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {approaches.map((approach) => (
          <ApproachCard key={approach.id} content={approach} />
        ))}
      </div>
    </SectionsComponent>
  );
};

export default Approach;
