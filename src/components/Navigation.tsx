import React from "react";
import { IoHomeOutline, IoCodeSlash } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineCall } from "react-icons/md";
import { pageSliceActions } from "@/pages/store/slice";
import { useAppDispatch, useAppSelector } from "@/pages/store/store";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.page);

  return (
    <nav className="fixed z-10 bottom-[-2px] bg-navbar w-full flex justify-center h-[70px] items-center md:right-[-35px] md:w-[70px] md:h-[500px] md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2 rounded-t-[20px] md:rounded-t-none md:rounded-l-[20px]">
      <ul className="flex w-[87.5%] justify-evenly relative md:flex-col md:items-center md:gap-[1rem]">
        <li
          className={
            page === "landing"
              ? "relative list-none w-[70px] h-[70px] z-[1] active"
              : "relative list-none w-[70px] h-[70px] z-[1]"
          }
        >
          <a
            href="#"
            className="relative flex justify-center items-center flex-col text-center font-[500] w-full h-full md:flex-row"
            onClick={() => {
              dispatch(pageSliceActions.setPage("landing"));
            }}
          >
            <div className="relative leading-[75px] text-[1.5em] text-center transition duration-[0.5s] text-[#8b8b8b] z-[3] w-[70px] h-[70px] flex items-center justify-center ">
              <IoHomeOutline color="#dedede" size={20} />
            </div>
            <span className="absolute text-[0.9em] font-[400] tracking-[0.05em] duration-[0.5s] opacity-[0] text-[#dedede] md:hidden">
              Home
            </span>
          </a>
        </li>
        <li
          className={
            page === "projects"
              ? "relative list-none w-[70px] h-[70px] z-[1] active"
              : "relative list-none w-[70px] h-[70px] z-[1]"
          }
        >
          <a
            href="#"
            className="relative flex justify-center items-center flex-col w-[100%] text-center font-[500]"
            onClick={() => {
              dispatch(pageSliceActions.setPage("projects"));
            }}
          >
            <div className="relative leading-[75px] text-[1.5em] text-center transition duration-[0.5s] text-[#8b8b8b] z-[3] w-[70px] h-[70px] flex items-center justify-center">
              <IoCodeSlash color="#dedede" size={20} />
            </div>
            <span className="absolute text-[0.9em] font-[400] tracking-[0.05em] duration-[0.5s] opacity-[0] text-[#dedede] md:hidden">
              Projects
            </span>
          </a>
        </li>
        <li
          className={
            page === "about"
              ? "relative list-none w-[70px] h-[70px] z-[1] active"
              : "relative list-none w-[70px] h-[70px] z-[1]"
          }
        >
          <a
            href="#"
            className="relative flex justify-center items-center flex-col w-[100%] text-center font-[500]"
            onClick={() => {
              dispatch(pageSliceActions.setPage("about"));
            }}
          >
            <div className="relative leading-[75px] text-[1.5em] text-center transition duration-[0.5s] text-[#8b8b8b] z-[3] w-[70px] h-[70px] flex items-center justify-center ">
              <SiAboutdotme color="#dedede" size={20} />
            </div>
            <span className="absolute text-[0.9em] font-[400] tracking-[0.05em] duration-[0.5s] opacity-[0] text-[#dedede] md:hidden">
              About
            </span>
          </a>
        </li>
        <li
          className={
            page === "contact"
              ? "relative list-none w-[70px] h-[70px] z-[1] active"
              : "relative list-none w-[70px] h-[70px] z-[1]"
          }
        >
          <a
            href="#"
            className="relative flex justify-center items-center flex-col w-[100%] text-center font-[500]"
            onClick={() => {
              dispatch(pageSliceActions.setPage("contact"));
            }}
          >
            <div className="relative leading-[75px] text-[1.5em] text-center transition duration-[0.5s] text-[#8b8b8b] z-[3] w-[70px] h-[70px] flex items-center justify-center ">
              <MdOutlineCall
                color="#dedede"
                size={20}
                style={{ transform: "rotate(270deg)" }}
              />
            </div>
            <span className="absolute text-[0.9em] font-[400] tracking-[0.05em] duration-[0.5s] opacity-[0] text-[#dedede] md:hidden">
              Contact
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
