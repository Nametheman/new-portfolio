import React from "react";

interface SkillProps {
  name: string;
  skills: string[];
  idx: number;
}
const Skill = ({ name, skills, idx }: SkillProps) => {
  return (
    <div
      className={
        idx === 0
          ? "col-span-1 border text-grey font-sans"
          : idx === 1
          ? "row-span-[1] col-span-2 border text-grey font-sans"
          : idx === 2
          ? "row-span-1 col-span-3 border text-grey font-sans"
          : "row-span-1 col-span-1 border text-grey font-sans"
      }
    >
      <div className="border-b">
        <h3 className="p-[1rem] text-[#dedede] font-semibold text-[1.3rem]">
          {name}
        </h3>
      </div>
      <div className="flex flex-wrap flex-grow-0 flex-shrink gap-6 p-4">
        {skills.map((skill) => {
          return <p key={skill}>{skill}</p>;
        })}
      </div>
    </div>
  );
};

export default Skill;
