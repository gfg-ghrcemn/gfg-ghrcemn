import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Vortex } from "./ui/vortex";
import gfg from "../assets/logos/gfg logo.svg";
import { Link } from "react-router-dom";

const word = [
  { text: "A Community of", color: "white" },
  { text: " Students" },
  { text: "who" },
  { text: " Code" },
];

export function VortexDemo() {
  return (
    <div className="overflow-hidden">
      <Vortex
        backgroundColor="#000000"
        className="flex flex-col h-[100vh] justify-center px-4 md:px-10 py-1"
      >
        <div className="flex justify-center items-center h-[10vh]">
          <img src={gfg} alt="GFG" className="h-[20vh] w-48" />
        </div>
        <TextGenerateEffect
          words="Geeks for Geeks"
          className="text-green-500 text-2xl md:text-4xl lg:text-6xl font-bold text-center"
        />
        <p className="text-white text-center w-full text-sm md:text-lg lg:text-2xl mt-6">
          GHRCEMN STUDENT CHAPTER
        </p>
        <TypewriterEffectSmooth
          words={word}
          className="text-white text-center items-center justify-center font-mono text-3xl md:text-lg lg:text-xl mt-6"
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Link
            to="/events"
            className="mt-10 border-1 border-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-green-600 shadow-lg"
          >
            Our Events
          </Link>
          <Link
            to="/team"
            className="mt-10 border-1 border-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-green-600 shadow-lg"
          >
            Our Team
          </Link>
        </div>

      </Vortex>
    </div>
  );
}

const HeroSection = () => {
  return (
    <div className="relative h-[100vh] overflow-hidden">
      <VortexDemo />
    </div>
  );
};

export default HeroSection;
