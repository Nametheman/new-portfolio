import React, { useState, useEffect } from "react";
import Image from "next/image";
import human from "../../assets/images/human.svg";
import { quotes } from "@/utils/quotes";
const LandingHome = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => {
        // Generate a random index different from the previous one
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
    <div className="p-6">
      <p className="text-[1.8em] font-sans font-semibold text-white leading-snug">
        Emmanuel is a <span className="text-primary">front-end web</span> and{" "}
        <span className="text-primary">mobile developer</span>
      </p>
      <p className="mt-[1rem] text-[#ABB2BF] font-sans text-[.8rem]">
        From creating web interfaces to developing mobile apps: Powering Digital
        Dreams with Frontend and Mobile Wizardry
      </p>
      <button className="mt-[1rem] border-primary border text-white px-[2rem] py-[0.5rem] font-sans text-[0.8rem]">
        Contact Me!!
      </button>
      <div className="relative mt-5 w-[full] flex justify-center flex-col items-center">
        <Image src={human} alt="human" width={200} height={200} />
        <div className="border w-[300px] mx-auto p-4 flex gap-2 items-center">
          <div className="bg-primary h-[25px] w-[25px] min-h-[25px] min-w-[25px] max-h-[25px] max-w-[25px]"></div>
          <p className="text-white font-sans text-[.8rem] transition duration-[0.5s]">
            {`${quotes[quoteIndex]}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;
