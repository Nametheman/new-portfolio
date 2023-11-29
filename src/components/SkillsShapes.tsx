import React from "react";
import square from "../assets/images/squareshape.svg";
import dots from "../assets/images/dots.svg";
import rectangle from "../assets/images/rectangle.png";
import Image from "next/image";

const SkillsShapes = () => {
  return (
    <div className="absolute w-screen md:w-full h-[400px] md:relative z-[-1] opacity-20 md:opacity-[1]">
      <span className="absolute left-[5%] z-[-1] bottom-[10%]">
        <Image src={square} alt="square" className="w-[130px]" />
      </span>
      <span className="absolute left-[5%] z-[1] top-[20%]">
        <Image src={dots} alt="dots" className="w-[60px]" />
      </span>
      <span className="absolute right-[40%] z-[1] top-[45%]">
        <Image src={dots} alt="dots" className="w-[50px]" />
      </span>
      <span className="absolute right-[1rem] top-[20px]">
        <Image src={rectangle} alt="rectangle" className="w-[80px]" />
      </span>
      <span className="absolute bottom-[3rem] right-[20px]">
        <Image src={rectangle} alt="rectangle" className="w-[50px]" />
      </span>
    </div>
  );
};

export default SkillsShapes;
