import Image from "next/image";
import { Inter, Fira_Code } from "next/font/google";
import { useAppSelector, useAppDispatch } from "../store/store";
import { pageSliceActions } from "../store/slice";
import LandingHome from "./Landing/Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import menuOpen from "../assets/icons/menuOpen.svg";
import Socials from "@/components/Socials";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export default function Home() {
  const { page } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();
  const handleRoute = () => {
    dispatch(pageSliceActions.setPage("landing"));
  };
  return (
    <div className={`${inter.className} ${firaCode.variable} relative`}>
      <div className="px-7 h-[70px] flex items-center justify-between relative">
        <Logo />
        <Socials />
        {/* <Image src={menuOpen} alt="menu" onClick={handleRoute} /> */}
      </div>
      <div className="h-[calc(100vh-70px)] pb-[70px] md:h-[100vh]">
        {page === "landing" && <LandingHome />}
        {page === "projects" && <Projects />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </div>

      <Navigation />
    </div>
  );
}
