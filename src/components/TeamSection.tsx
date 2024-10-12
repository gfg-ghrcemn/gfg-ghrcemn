import React from "react";
import Slider from "react-slick";  // Use the correct library for sliders
import "slick-carousel/slick/slick.css";  // Include the slick CSS
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";
import { TeamMember } from './TeamCard';

import team from "../lib/team.json"

const TeamSection: React.FC = () => {
  const isMobileWidth = window.innerWidth < 650


  const settings = {
    dots: false,
    infinite:false,
    slidesToShow:4,
    slidesToScroll: 4,
    rows: 1,
    slidesPerRow: 1,
    speed: 500,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          rows: 1,
          slidesPerRow: 1,
        },
      },
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                rows: 1,
                slidesPerRow: 1,
            },
        },

        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                rows: 1,
                slidesPerRow: 1,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                rows: 1,
                slidesPerRow: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 2,
                slidesPerRow: 1,
                dots: false,
            },
        },

        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                slidesPerRow: 1,
                rows: 1,
                dots: false,
            },
        },
    ],
};

  // Team members data
  const teamMembers: TeamMember[] = team

  return (
    <div id="team" className="bg-black h-screen text-white relative px-2 ">

        <div className="text-center pt-10">
          <h1 className="sm:text-4xl text-2xl font-bold text-green-400">Meet Our Team</h1>
          <p className="text-gray-300">Our diverse and passionate team is here.</p>
        </div>

        {/* Carousel Section */}
        <div className="slider-container w-[100%]  flex flex-col items-center mx-auto">
        <Slider {...settings} className={`w-[80%] flex items-center ${isMobileWidth && "mt-12"}`}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              <TeamCard
                name={member.name}
                position={member.position}
                image={member.image}
                linkedin={member.linkedin}
              />
            </div>
          ))}
        </Slider>
        </div>
        <Link to="/team" className="flex justify-center mt-10">
          <button className="border-1 border-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-green-600 shadow-lg">
            View All
          </button>
        </Link>
    </div>
  );
};

export default TeamSection;
