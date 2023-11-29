import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Socials = ({ showline }: any) => {
  return (
    <div
      className={
        showline === false
          ? "items-center gap-4 hidden md1:flex"
          : "absolute right-0 items-center gap-4 hidden md1:flex"
      }
    >
      <a
        href="https://www.linkedin.com/in/emmanuel-owolabi-6b5b73172/"
        target="_blank"
        rel="noreferrer"
        className="transition duration-300 hover:-translate-y-1 hover:scale-110"
      >
        <BsLinkedin color="#dedede" />
      </a>
      <a
        href="https://wa.me/+2348138469203"
        target="_blank"
        rel="noreferrer"
        className="transition duration-300 hover:-translate-y-1 hover:scale-110"
      >
        <BsWhatsapp color="#dedede" />
      </a>
      <a
        href="https://twitter.com/infiniti0x"
        target="_blank"
        rel="noreferrer"
        className="transition duration-300 hover:-translate-y-1 hover:scale-110"
      >
        <FaTwitter color="#dedede" />
      </a>
      <a
        href="https://github.com/Nametheman"
        target="_blank"
        rel="noreferrer"
        className="transition duration-300 hover:-translate-y-1 hover:scale-110"
      >
        <BsGithub color="#dedede" />
      </a>
      {showline && (
        <div className="h-[2px] w-[120px] bg-[#dedede] rounded-2xl"></div>
      )}
      {/* style={isDarkTheme ? {} : { color: "#001b20" }}  */}
    </div>
  );
};

export default Socials;
