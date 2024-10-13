
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Vortex } from "./ui/vortex";
import gfg from "../assets/logos/gfg logo.svg";
import { Link } from "react-router-dom";
const word = [
  {
    text: "A Community of",
    color: "white",
  },
  {
    text: " Students",
  },
  {
    text: "who",
  }
  ,
  {
    text: " Code",
  },
  {
    text: " and",
  },
  {
    text: " Learn",
  },
  {
    text: " Together",
  },

];

export function VortexDemo() {
  return (
    <div className="bg-black  overflow-hidden">

      <Vortex
        backgroundColor="black"
        className="flex flex-col h-[100vh] justify-center px-2 md:px-10 py-1"
      >
        <div className="flex justify-center items-center h-[10vh]">
          <img src={gfg} alt="GFG" className="h-[20vh] w-48" />
        </div>
        <TextGenerateEffect words="Geeks for Geeks" className="text-green-500 text-2xl items-center md:text-6xl font-bold text-center" />
        <p className="text-white items-center  w-[100%] text-sm md:text-2xl  mt-6 text-center">
            GHRCEMN STUDENT CHAPTER
        </p>
        <TypewriterEffectSmooth words={word} className="text-white justify-center items-center text-center font-mono text-sm md:text-xl  mt-6" />
        <div className="flex flex-col sm:flex-row items-center  justify-center gap-4 mt-6">
          <Link className="border-green-500 border-1 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-green-600 shadow-lg" to="/events">
            Our Events
          </Link>
          <Link to="/team" className="px-6 py-3 m-2 text-green-500 font-extrabold hover:border-2 hover:border-green-500 rounded-lg shadow-sm shadow-white ">
            Our Team
          </Link>
        </div>
      </Vortex>
    </div>
  );
}



const HeroSection = () => {
    return (
        <div className="overflow-hidden h-[100vh]">
        <VortexDemo />
        </div>
    );
    }

export default HeroSection;