"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import human from "../../assets/images/human.svg";
import { quotes } from "@/utils/quotes";
import { ParticlesComponent } from "@/components/Particles";
const Time = dynamic(() => import("@/components/Time"), { ssr: false });
import square from "../../assets/images/squareshape.svg";
import dots from "../../assets/images/dots.svg";
import rectangle from "../../assets/images/rectangle.png";

// ;

const LandingHome = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * quotes.length);
        } while (newIndex === prevIndex);

        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const totalQuotes = quotes.length;
  const randomQuote = Math.floor(Math.random() * totalQuotes);
  return (
    <div className="py-[.3rem] h-full px-6 relative min-w-screen max-w-screen overflow-hidden">
      <div className="md:flex md:items-center md:gap-[3rem]">
        <article className="md:flex-[0.8]">
          <p className="text-[1.5em] font-sans font-semibold text-white leading-snug md:text-[2.2rem]">
            Emmanuel is a <span className="text-primary">front-end web</span>{" "}
            and <span className="text-primary">mobile developer</span>
          </p>
          <p className="mt-[1rem] text-[#ABB2BF] font-sans text-[.7rem] md:mt-[2rem] md:text-[1rem]">
            From creating web interfaces to developing mobile apps: Powering
            Digital Dreams with Frontend and Mobile Wizardry
          </p>
          <button className="mt-[1rem] border-primary border text-white px-[2rem] py-[0.5rem] font-sans text-[0.8rem] md:mt-[2rem] md:text-[1rem]">
            Contact Me!!
          </button>
        </article>

        <div className="relative mt-5 w-[full] flex justify-center flex-col items-center ">
          <Image src={human} alt="human" className="w-[150px] md:w-[350px]" />
          <div className="border w-[300px] mx-auto p-4 flex gap-2 items-center md:w-[375px]">
            <div className="bg-primary h-[25px] w-[25px] min-h-[25px] min-w-[25px] max-h-[25px] max-w-[25px]"></div>
            <p className="text-white font-sans text-[.7rem] transition duration-[0.5s]">
              {`${quotes[quoteIndex]}`}
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
      <div className="absolute bottom-[3rem] left-[-10px]">
        <Time />
      </div>
      <ParticlesComponent />
      <span className="absolute bottom-[3rem] right-[-20px]">
        <Image src={rectangle} alt="rectangle" className="w-[50px]" />
      </span>
    </div>
  );
};

export default LandingHome;
