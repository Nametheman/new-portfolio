import React from "react";
import adashi from "../assets/images/adashi.png";
import Image from "next/image";
import Button from "./bits/Button";

interface ProjectProps {
  name: string;
  date: string;
  organization: string;
  description: string;
  livesite: string;
  code: string;
  img: any;
}
const Project = ({
  name,
  date,
  organization,
  description,
  livesite,
  code,
  img,
}: ProjectProps) => {
  return (
    <div className="border border-grey h-[550px] relative">
      <Image src={img} alt="adashi" className="" />
      <div className="border-b border-t flex justify-between items-center gap-2 flex-grow-0  text-grey text-[.7rem] font-sans font-extralight p-3">
        <div>
          <p>Date:</p>
          <p>{date}</p>
        </div>
        <div>
          <p>Organization:</p>
          <p>{organization}</p>
        </div>
      </div>
      <div className="p-3 font-sans">
        <h2 className="font-medium text-white text-[1.4rem]">{name} </h2>
        <p className="text-[.82rem] text-grey mt-3">{description}</p>
      </div>
      <div className="flex items-center gap-4 absolute bottom-4 left-3">
        <a href={livesite} target="_blank">
          <button className="mt-[1rem] border-primary border text-white px-[1rem] py-[0.5rem] font-sans text-[0.8rem] md:mt-[2rem] md:text-[1rem]">
            {"Live <~>"}{" "}
          </button>
        </a>
        <a href={code} target={code === "#" ? "_self" : "_blank"}>
          <button className="mt-[1rem] border-grey border text-grey px-[1rem] py-[0.5rem] font-sans text-[0.8rem] md:mt-[2rem] md:text-[1rem]">
            {"Code </>"}{" "}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
