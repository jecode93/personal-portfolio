import React from "react";
import SectionsComponent from "../utils/SectionsComponent";
import SectionTitle from "../utils/SectionTitle";
import { skills } from "@/js/data/about/skills";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <SectionsComponent id="skills" otherClasses="">
      <SectionTitle title="Technology" text="My Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill) => (
          <SkillsCard key={skill.id} content={skill} />
        ))}
      </div>
    </SectionsComponent>
  );
};

export default Skills;
