import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="hidden md:block mt-[4rem] border-t border-grey pt-[2rem] pb-[1rem]">
      <div className="flex justify-between items-center px-[1.5rem]">
        <div className="flex flex-col items-start gap-4">
          <span className="flex items-center gap-7">
            <Logo />
            <p className="text-center text-grey font-sans font-light text-[0.8rem]">
              emmycookcodes@gmail.com
            </p>
          </span>
          <p className="text-center text-white font-sans font-light text-[0.8rem]">
            Front-end web and mobile developer
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-center text-white font-sans font-bold text-[1rem]">
            Socials
          </p>
          <Socials showline={false} />
        </div>
      </div>
      <p className="text-center text-grey font-sans font-light text-[0.8rem] pt-[2rem]">
        © Copyright 2022. Made by Emmanuel
      </p>
    </div>
  );
};

export default Footer;
