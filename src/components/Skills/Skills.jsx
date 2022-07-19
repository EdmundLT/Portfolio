import React from "react";
import { backEnd, frontEnd, dataAnalysis } from "../../data/config";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="container mx-auto bg-slate-200 p-8 text-center font-Poppins" id="skills">
      <p className="text-3xl p-6">Skills</p>
      <div className="grid grid-cols-1 gap-4 p-8 text-slate-100 lg:grid-flow-col md:grid-cols-2">
        <SkillCard list={backEnd} title="Back-end" />
        <SkillCard list={frontEnd} title="Front-end"/>
        <SkillCard list={dataAnalysis} title="Data Analysis"/>
      </div>
    </div>
  );
};

export default Skills;
