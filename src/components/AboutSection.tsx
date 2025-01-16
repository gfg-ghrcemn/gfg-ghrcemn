import React from 'react';
import { Link } from 'react-router-dom';
import { keyframes } from "@emotion/react";
import Reveal, { Fade } from "react-awesome-reveal";

const AboutSection = () => {
  const customAnimation = keyframes`
    from {
      opacity: 0;
      transform: translate3d(-200px, -100px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `;

  return (
    <section 
      id="about" 
      className="bg-inherit text-white min-h-screen flex justify-center items-center py-16 px-4 sm:px-6"
    >
      <Reveal keyframes={customAnimation} triggerOnce>
        <div className="max-w-6xl mx-auto w-full">
          <Fade direction="up" cascade triggerOnce>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-green-500 font-bold text-center mb-12 sm:mb-16">
              About Us
            </h1>
          </Fade>

          <div className="space-y-12 sm:space-y-16 max-w-4xl mx-auto">
            {/* What's GFG Section */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal">
                What's GFG?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed">
                GFG collaborates with university students who are passionate 
                about growing developer communities. GFG is an Organisation for 
                university students.
              </p>
            </div>

            {/* What GFG GHRCEMN does Section */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal">
                What GFG GHRCEMN does?
              </h2>
              <ul className="text-lg sm:text-xl lg:text-2xl list-disc pl-8 space-y-2">
                <li>Projects</li>
                <li>Seminars</li>
                <li>Hackathons</li>
                <li>Study Jams</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-12 sm:mt-16">
            <Link
              to="https://chat.whatsapp.com/KfqB1aBkEqnJRFsOtcMAjT"
              className="relative inline-flex items-center justify-center px-6 py-3 
                text-lg sm:text-xl font-bold text-white border-2 border-green-500 
                rounded-lg transition-all duration-300 
                hover:bg-green-600 hover:scale-105 
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                shadow-lg shadow-green-600/50"
            >
              Join the Club
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default AboutSection;