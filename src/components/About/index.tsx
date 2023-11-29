import React from "react";
import Image from "next/image";
import rectangle from "../../assets/images/rectangle.png";
import boy from "@/assets/images/boy.svg";
import dots from "../../assets/images/dots.svg";

const About = () => {
  return (
    <div className="relative w-full px-[2rem] py-3 md:pr-[110px] pb-[120px] md:pb-[0px] h-full">
      <h2 className="mb-4 text-[#dedede] font-sans font-bold text-[1.5rem] md:mt-[3rem]">
        <span className="text-primary">{"</>"}</span>About Me
      </h2>
      <span className="absolute left-[-70px] z-[-1] top-[10%]">
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
            internet works motivates me to become a better Developer day by day,
            and I prioritize my knowledge and skills over any other thing.
          </p>
          <p className="text-grey mb-3 font-sans mt-4 font-semibold text-[0.8rem] md:text-[1.2rem]">
            My interests lie in-between learning new technologies, giving back
            to the community by teaching, and meeting new people. If you do not
            catch me coding, then I'm either reading or playing video games. I
            look forward to exploring more in the technology industry while
            solving real world
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
