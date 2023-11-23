import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="absolute right-0 items-center gap-4 hidden md1:flex">
      <a
        href="https://www.linkedin.com/in/emmanuel-owolabi-6b5b73172/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin color="#dedede" />
      </a>
      <a href="https://wa.me/+2348138469203" target="_blank" rel="noreferrer">
        <BsWhatsapp color="#dedede" />
      </a>
      <a href="https://twitter.com/infiniti0x" target="_blank" rel="noreferrer">
        <FaTwitter color="#dedede" />
      </a>
      <a href="https://github.com/Nametheman" target="_blank" rel="noreferrer">
        <BsGithub color="#dedede" />
      </a>
      <div className="h-[2px] w-[120px] bg-[#dedede] rounded-2xl"></div>
      {/* style={isDarkTheme ? {} : { color: "#001b20" }}  */}
    </div>
  );
};

export default Socials;
