import React from "react";
import Image from "next/image";
import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Image src={logo} alt="logo" width={30} height={30} />
      <p className="font-sans text-white font-semibold">Emmy.dev</p>
    </div>
  );
};

export default Logo;
