"use client";
import React, { useEffect, useState } from "react";
import quotes from "../assets/icons/quotes.svg";
import Image from "next/image";
import { quotes as quotesArr } from "@/utils/quotes";

const Quotes = () => {
  const [quoteIndex, setQuoteIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotesArr.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  console.log(quoteIndex);

  return (
    <div className="w-[350px] md:w-[650px] mx-auto mt-[4rem] flex-col flex items-end ">
      <div className="border border-grey w-full  h-[70px] md:h-[80px] relative flex justify-center items-center">
        {quotesArr.map((quote, idx) => {
          return (
            <>
              {quoteIndex === idx && (
                <p
                  key={`quote${idx}`}
                  className="text-center font-sans text-white text-[0.7rem] md:text-[1rem] font-semibold"
                >
                  {quote.quote}
                </p>
              )}
            </>
          );
        })}
        <Image
          src={quotes}
          alt="quotes"
          className="absolute w-[20px] h-[20px] md:w-[25px] md:h-[25px] left-[1rem] top-[-10px] md:top-[-15px]"
        />
        <Image
          src={quotes}
          alt="quotes"
          className="absolute w-[20px] h-[20px] md:w-[25px] md:h-[25px] right-[1rem] bottom-[-10px] md:bottom-[-15px]"
        />
      </div>
      <div className="border-b border-l border-r border-grey w-[150px] h-[40px] md:h-[60px] flex justify-center items-center">
        {quotesArr.map((quote, idx) => {
          return (
            <>
              {quoteIndex === idx && (
                <p
                  key={`quote${idx}`}
                  className="text-center font-sans text-white text-[.6rem] md:text-[.8rem] font-semibold"
                >
                  -{quote.author}
                </p>
              )}
            </>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Quotes;
