import React from 'react';
import { Link } from 'react-router-dom';


const AboutSection: React.FC = () => {
  return (
    <div id="about" className="bg-inherit text-white flex flex-col h-screen justify-center items-center px-6 ">
       <div className='sm:text-5xl text-3xl text-green-500 font-bold flex items-center justify-center'>
          About Us
        </div>
        <div className='flex flex-col  px-7 md:px-10 lg:pl-20 space-y-6'>
          <div className='text-xl lg:text-2xl font-normal text-white font-game2'>
            What's GFG?
          </div>
          <div className='text-xl lg:text-[1.5rem] font-normal text-white font-game1 leading-none'>
            GFG collaborates with university students who are passionate
            about growing developer communities. GFG is an Organisation for
            university students.
          </div>
        </div>
        <div className='flex flex-col w-full items-start px-7 md:px-10 lg:pl-20 space-y-6'>
          <div className='text-xl lg:text-2xl font-normal p-2 text-white font-Silkscreen'>
            What GFG GHRCEMN does?
          </div>
          <ul className='leading-none text-xl lg:text-[1.5rem] font-normal text-white font-game1 list-disc list-inside pl-4'>
            <li>Projects</li>
            <li>Seminars</li>
            <li>Hackathons</li>
            <li>Study Jams</li>
          </ul>
        </div>

        <div className="mt-10 flex justify-center">
          <Link to={"https://chat.whatsapp.com/KfqB1aBkEqnJRFsOtcMAjT"} className="border-green-500 border-1 text-white font-bold py-3 px-6 rounded-lg shadow-green-600 shadow-lg">
            Join the Club
          </Link>
        </div>

    </div>
  );
};

export default AboutSection;
