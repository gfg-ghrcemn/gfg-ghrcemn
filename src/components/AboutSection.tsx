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
    <div id="about" className="bg-inherit text-white h-screen">
      <Reveal keyframes={customAnimation} triggerOnce>
        <div className="flex flex-col h-full justify-center items-center px-6">
          <Fade direction="up" >
            <div className='sm:text-5xl text-3xl text-green-500 font-bold mb-12'>
              About Us
            </div>
          </Fade>

          <div className='space-y-12 w-full max-w-4xl'>
            <div className='space-y-4'>
              <div className='text-xl lg:text-2xl font-normal'>
                What's GFG?
              </div>
              <div className='text-xl lg:text-[1.5rem] font-normal'>
                GFG collaborates with university students who are passionate
                about growing developer communities. GFG is an Organisation for
                university students.
              </div>
            </div>

            <div className='space-y-4'>
              <div className='text-xl lg:text-2xl font-normal'>
                What GFG GHRCEMN does?
              </div>
              <ul className='text-xl lg:text-[1.5rem] list-disc pl-6'>
                <li>Projects</li>
                <li>Seminars</li>
                <li>Hackathons</li>
                <li>Study Jams</li>
              </ul>
            </div>
          </div>

          <Link 
            to="https://chat.whatsapp.com/KfqB1aBkEqnJRFsOtcMAjT" 
            className="mt-12 border border-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-green-600 shadow-lg"
          >
            Join the Club
          </Link>
        </div>
      </Reveal>
    </div>
  );
};

export default AboutSection;