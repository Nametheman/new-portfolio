"use client";
import React from "react";
import { useState } from "react";

const Time = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);
  return (
    <div className="flex items-center justify-center border border-white px-4 py-1 rounded-lg">
      <p className="text-3xl font-sans font-extrabold text-white">{ctime}</p>
    </div>
  );
};

export default Time;
