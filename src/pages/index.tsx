"use client";
import dynamic from "next/dynamic";
import { Inter, Fira_Code } from "next/font/google";
import { useAppSelector, useAppDispatch } from "../store/store";
import { pageSliceActions } from "../store/slice";
import LandingHome from "../components/Landing/Home";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import Head from "next/head";

const Time = dynamic(() => import("@/components/Time"), { ssr: false });

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export default function Home() {
  const { page } = useAppSelector((state) => state.page);
  return (
    <>
      <Head>
        <title>emmy.dev</title>
        <meta
          name="description"
          content="Welcome to my portfolio! Explore my projects and get in touch to discuss collaboration opportunities."
        />
      </Head>
      <div className={`${inter.className} ${firaCode.variable} relative`}>
        <div className="px-7 h-[70px] flex items-center justify-between relative">
          <Logo />
          <Socials showline={true} />
        </div>
        <div className="pb-[100px] md:pb-[0px]">
          {page === "landing" && <LandingHome />}
          {page === "projects" && <Projects />}
          {page === "about" && <About />}
          {page === "contact" && <Contact />}
        </div>
        <Navigation />
        {page === "landing" && (
          <div className="absolute lg:left-[1.5rem] lg:top-[90px] top-[18px] right-[1rem]">
            <Time />
          </div>
        )}
        <Footer />
        <Toaster
          expand={false}
          visibleToasts={3}
          position="top-right"
          duration={5000}
          toastOptions={{
            style: { background: "#C778DD", color: "#ffffff" },
          }}
        />
      </div>
    </>
  );
}
