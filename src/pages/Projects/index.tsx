import Project from "@/components/Project";
import React from "react";
import { projects } from "@/utils/projects";

const Projects = () => {
  return (
    <div className="w-full p-[2rem] md:pr-[110px]">
      <p className="font-sans font-medium mb-6 text-[#dedede]">
        Take a look at some of my works
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </div>
  );
};

export default Projects;
