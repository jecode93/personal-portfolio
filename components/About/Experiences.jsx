import React from "react";
import SectionsComponent from "../SectionsComponent";
import SectionTitle from "../SectionTitle";
import { experiences } from "@/js/data/about/experience";
import ExperiencesCard from "../ExperiencesCard";

const Experiences = () => {
  return (
    <SectionsComponent id="experienced">
      <SectionTitle title="Experience" text="Professional Background" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {experiences.map((experience, index) => (
          <ExperiencesCard key={index} content={experience} />
        ))}
      </div>
    </SectionsComponent>
  );
};

export default Experiences;
