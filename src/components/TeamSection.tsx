import React from "react";
import Slider from "react-slick";  // Use the correct library for sliders
import "slick-carousel/slick/slick.css";  // Include the slick CSS
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin: string;
}

const TeamCard: React.FC<TeamMember> = ({ name, position, image, linkedin }) => {   

    return (
      <div className="sm:w-[18em] w-[17em] m-6 mx-auto h-[20em] pb-2 text-wrap break-words bg-transparent border-2 border-green-500 flex flex-col items-center rounded-lg">
      <img
        src={image}
        alt="team member"
        className="w-[90%] min-h-[40%] max-h-[12.5rem]  mt-2 rounded-lg border-2 border-green-500"
      />
      <div className="flex flex-col items-center h-[60%] w-full justify-center">
        <h2 className="text-xl overflow-hidden  w-full ml-8 items-center flex text-green-500">
          {name}
        </h2>
        <h2 className="text-sm  ml-8 w-full text-gray-500 overflow-hidden">
          {position}
        </h2>
        <div className="flex text-xl justify-end w-[80%] h-[10%] space-x-2 items-center">
          <a href={linkedin} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>

    );
    }
const TeamSection: React.FC = () => {
  const isMobileWidth = window.innerWidth < 650


  const settings = {
    dots: true,
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
  const teamMembers: TeamMember[] = [
    {
      "name": "Tanaya Pillewan",
      "position": "Chapter Lead",
      "image": "Tanaya Pilewan.jpg",
      "linkedin": "https://www.linkedin.com/in/tanaya-pillewan-38370a256"
    },
    {
      "name": "Saloni Zade",
      "position": "Chair-person",
      "image": "Saloni Zade.jpg",
      "linkedin": "https://www.linkedin.com/in/saloni-zade-7aa816257"
    },
    {
      "name": "Vaishnavi Agrawal",
      "position": "Vice-Chair Person",
      "image": "Vaishnavi_Agrawal.jpg",
      "linkedin": "https://www.linkedin.com/in/vaishnavi-agrawal-2a419a25a"
    },
    {
      "name": "Vaibhav Talkhande",
      "position": "Technical Head",
      "image": `vai.jpeg`,
      "linkedin": "https://www.linkedin.com/in/vaibhavtalkhande/"
    },
    {
      "name": "Siddhanth Sakhare",
      "position": "PRO Coordinator",
      "image": "Siddhnath.jpg",
      "linkedin": "https://www.linkedin.com/in/siddhanth-kishor-sakhare-159653257/"
    },
    {
      "name": "Gagan Thakre",
      "position": "Social Media Head",
      "image": "Gagan thakre.jpg",
      "linkedin": "https://www.linkedin.com/in/gagan-thakre-93a209258"
    },
    {
      "name": "Karan Yede",
      "position": "Designing coordinator",
      "image": "KaranYede.jpg",
      "linkedin": "https://www.linkedin.com/in/karanyede"
    },
    {
      "name": "Sanskruti Uge",
      "position": "Marketing Coordinator",
      "image": "Sanskruti_uge.jpg",
      "linkedin": "https://www.linkedin.com/in/sanskruti-uge-3883ba290/"
    },

    {
      "name": "Kartikey Bisen",
      "position": "Marketing Head",
      "image": "KartikeyBisen.jpg",
      "linkedin": "https://www.linkedin.com/in/kartikey-bisen-97b306305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      "name": "Jilani Sheikh",
      "position": "Event Coordinator",
      "image": "jilani sheikh.jpg",
      "linkedin": "https://www.linkedin.com/in/jilani-sheikh-79b094305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      "name": "Karan Baghele",
      "position": "Designing Head",
      "image": "karanbhagele.jpeg",
      "linkedin": "https://www.linkedin.com/in/thekaranbaghele"
    },
    {
      "name": "Riddhi Sharma",
      "position": "Event Head",
      "image": "Riddhi.jpg",
      "linkedin": "https://www.linkedin.com/in/riddhi-sharma-25b7b9279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      "name": "Karan Soni",
      "position": "Social Media Head",
      "image": "karansoni.jpg",
      "linkedin": "https://www.linkedin.com/in/karan-soni-197423318"
    },
    {
      "name": "Avinash Madnani",
      "position": "Technical Coordinator",
      "image": "AvinashMadnani.jpg",
      "linkedin": "https://www.linkedin.com/in/avinash-madnani-37a01b20a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      "name": "Vibhuti Sarode",
      "position": "PRO",
      "image": "vibhuti sarode.jpg",
      "linkedin": "https://www.linkedin.com/in/vibhuti-sarode-5b0a0b1b7"
    },
    {
      "name": "Kanishq Birole",
      "position": "Mentor",
      "image": "kanishq.jpg",
      "linkedin": "https://www.linkedin.com/in/kanishqbirole?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ]

  return (
    <div className="bg-inherit text-white block h-screen  p-2 ">
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-400">Meet Our Team</h1>
          <p className="text-gray-300 mt-4">Our diverse and passionate team is here to build the future.</p>
        </div>

        {/* Carousel Section */}
        <div className="slider-container w-[90%]  flex flex-col items-center mx-auto">
        <Slider {...settings} className={`w-[100%] flex items-center ${isMobileWidth && "mt-12"}`}>
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
      </div>
    </div>
  );
};

export default TeamSection;
