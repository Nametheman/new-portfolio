import Project from "@/components/Project";
import React from "react";
import { projects } from "@/utils/projects";
import dots from "../../assets/images/dots.svg";
import Image from "next/image";
import { ParticlesComponent } from "@/components/Particles";
import rectangle from "../../assets/images/rectangle.png";

const Projects = () => {
  return (
    <div className="w-full px-[2rem] py-3 md:pr-[110px] relative">
      <h2 className="mb-4 text-[#dedede] font-sans font-bold text-[1.5rem]">
        <span className="text-primary">{"</>"}</span>Projects
      </h2>
      <p className="font-sans font-regular mb-6 text-[#dedede] text-sm">
        Take a look at some of my works
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => {
          return (
            <div className="mb-[3rem]" key={`projectNumber${idx}`}>
              <Project
                name={project.title}
                date={project.date}
                description={project.text}
                livesite={project.website}
                code={project.githubLink}
                organization={project.organization}
                img={project.img}
              />
            </div>
          );
        })}
      </div>
      <span className="absolute left-[0] z-[-1] top-[5%]">
        <Image src={dots} alt="dots" className="w-[80px]" />
      </span>
      {/* <span className="absolute right-[-50px] z-[-1] top-[-1.4rem]">
        <Image src={rectangle} alt="square" className="w-[90px]" />
      </span> */}
      <ParticlesComponent />
    </div>
  );
};

export default Projects;
