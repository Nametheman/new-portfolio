"use client";

import Image from "next/image";
import human from "../../assets/images/human.svg";
import { ParticlesComponent } from "@/components/Particles";
import square from "../../assets/images/squareshape.svg";
import dots from "../../assets/images/dots.svg";
import rectangle from "../../assets/images/rectangle.png";
import Quotes from "@/components/Quotes";
import { projects } from "@/utils/projects";
import Project from "../Project";
import { useAppDispatch } from "@/store/store";
import { pageSliceActions } from "@/store/slice";
import SkillsShapes from "../SkillsShapes";
import Skill from "../Skill";
import { skills } from "@/utils/skills";
import boy from "@/assets/images/boy.svg";

const LandingHome = () => {
  const dispatch = useAppDispatch();

  const firstThreeProjects = projects.slice(0, 3);
  return (
    <div className="py-[.3rem] h-full px-6 relative min-w-screen max-w-screen overflow-hidden xl:pt-[4rem]">
      <div className="md:flex md:items-center md:gap-[3rem]">
        <article className="md:flex-[0.8]">
          <p className="text-[4vh] font-sans font-semibold text-white leading-snug md:text-[2.9rem]">
            Emmanuel is a <span className="text-primary">front-end web</span>{" "}
            and <span className="text-primary">mobile developer</span>
          </p>
          <p className="mt-[.5rem] text-[#ABB2BF] font-sans text-[2vh] md:mt-[2rem] md:text-[1rem]">
            From creating web interfaces to developing mobile apps: Powering
            Digital Dreams with Frontend and Mobile Wizardry
          </p>
          <button
            className="mt-[1rem] border-primary border text-white px-[1rem] py-[0.5rem] font-sans text-[0.8rem] md:mt-[2rem] md:text-[1rem]"
            onClick={() => dispatch(pageSliceActions.setPage("contact"))}
          >
            Contact Me!!
          </button>
        </article>

        <div className="relative mt-5 w-[full] flex justify-center flex-col items-center ">
          <Image src={human} alt="human" className="w-[150px] md:w-[500px]" />
          <div className="border w-[250px] mx-auto p-2 md:p-4 flex gap-2 items-center md:w-[375px]">
            <div className="bg-primary h-[10px] w-[10px] min-h-[10px] min-w-[10px] max-h-[10px] max-w-[10px] md:h-[20px] md:w-[20px] md:min-h-[20px] md:min-w-[20px] md:max-h-[20px] md:max-w-[20px]"></div>
            <p className="text-white font-sans font-bold text-[10px] text-center">
              <span className="text-grey">Cooking the next big thing</span>{" "}
              @TM30
            </p>
          </div>
          <span className="absolute left-[20%] z-[-1] top-[20%]">
            <Image src={square} alt="square" className="w-[80px]" />
          </span>
          <span className="absolute right-[30%] z-[1] top-[40%]">
            <Image src={dots} alt="dots" className="w-[40px]" />
          </span>
        </div>
      </div>

      <ParticlesComponent />
      <span className="fixed right-[-40px] bottom-[3rem] lg:bottom-[3rem] lg:right-[-20px] z-[-1]">
        <Image src={rectangle} alt="rectangle" className="w-[50px]" />
      </span>
      <Quotes />
      <section className="md:pr-[70px] mt-[6rem] md:mt-[8rem]">
        <div className="flex justify-between items-center">
          <h2 className="mb-4 text-[#dedede] font-sans font-bold text-[1.5rem]">
            <span className="text-primary">{"</>"}</span>Projects
          </h2>
          <p
            className="font-sans font-bold mb-6 text-white text-sm cursor-pointer"
            onClick={() => {
              dispatch(pageSliceActions.setPage("projects"));
            }}
          >
            {"View all --->"}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[3rem] mt-[2rem]">
          {firstThreeProjects.map((project, idx) => {
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
        <span className="flex justify-center">
          <button
            className="mt-[1rem] border-primary border text-white px-[1rem] py-[0.5rem] font-sans text-[0.8rem] md:mt-[2rem] md:text-[1rem] mx-auto"
            onClick={() => dispatch(pageSliceActions.setPage("contact"))}
          >
            {"See More -->"}
          </button>
        </span>
      </section>
      <section className="lg:pr-[70px] mt-[6rem] lg:mt-[8rem] relative">
        <div className="">
          <h2 className="mb-4 text-[#dedede] font-sans font-bold text-[1.5rem]">
            <span className="text-primary">{"</>"}</span>Skills
          </h2>
          <p className="font-sans font-regular mb-6 text-[#dedede] text-sm">
            Take a look at some of my works
          </p>
        </div>
        <div className="md:flex block">
          <div className="md:flex-1">
            <SkillsShapes />
          </div>
          <div className="flex-1 mt-[2rem] grid grid-cols-[1fr_1fr]">
            {skills.map((skill, idx) => {
              return (
                <Skill
                  key={idx}
                  name={skill.name}
                  skills={skill.skills}
                  idx={idx}
                />
              );
            })}
          </div>
        </div>
      </section>
      <div className="relative w-full py-3 md:pr-[110px] pb-[120px] md:pb-[0px] mt-[4rem]">
        <h2 className="mb-4 text-[#dedede] font-sans font-bold text-[1.5rem] md:mt-[3rem]">
          <span className="text-primary">{"</>"}</span>About Me
        </h2>
        <span className="absolute left-[-100px] z-[-1] top-[10%]">
          <Image src={rectangle} alt="square" className="w-[90px]" />
        </span>
        <span className="absolute right-[40px] z-[-1] bottom-[50%] hidden md:block">
          <Image src={dots} alt="square" className="w-[90px]" />
        </span>
        <div className="md:flex md:items-center md:justify-between md:gap-[3rem] md:flex-row-reverse">
          <div className="relative flex justify-center md:flex-1">
            <span className="absolute right-[10%] z-[1] top-[45%] md:right-[35%]">
              <Image src={dots} alt="square" className="w-[90px] md:w-[60px]" />
            </span>
            <Image src={boy} alt="boy" className="w-[250px]" />
          </div>
          <div className="flex-1">
            <p className="text-grey mb-3 font-sans mt-4 font-semibold text-[0.8rem] md:text-[1.2rem]">
              Hello, i’m Emmanuel!
            </p>
            <p className="text-grey mb-3 font-sans mt-4 font-semibold text-[0.8rem] md:text-[1.2rem]">
              An experienced and self-taught Software Engineer with 2+ years of
              industrial experience. My passion for technology and how the
              internet works motivates me to become a better Developer day by
              day, and I prioritize my knowledge and skills over any other
              thing.
            </p>
            <button
              className="mt-[1rem] border-primary border text-white px-[1rem] py-[0.5rem] font-sans text-[0.8rem] md:mt-[2rem] md:text-[1rem]"
              onClick={() => dispatch(pageSliceActions.setPage("about"))}
            >
              {"Read More ->"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;
