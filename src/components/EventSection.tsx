import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "./EventsCard";
import event from "../lib/event.json";
interface Event {
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}

const EventSection: React.FC = () => {
  const navto = useNavigate();

 const events: Event[] = event;
  
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Shows 3 events at a time
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  };

  const handleKnowMoreClick = () => {
    navto("/events");
  };

  return (
    <div id="event" className="relative flex flex-col mt-10 items-center">
      <h1 className="sm:text-4xl text-2xl font-extrabold text-green-400 ">
        Events
      </h1>

      <div className="text-center sm:text-xl text-sm text-white mb-6">
        Check out our upcoming events and join us
      </div>

      {/* Carousel Section */}
      <div className="slider-container w-[90%] flex justify-center">
        <Slider {...settings} className="w-[90%] flex">
          {events.map((event, index) => (
            <div key={index}>
              <EventCard
                title={event.title}
                date={event.date}
                description={event.description}
                image={event.image}
                link={event.link}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Know More Button */}
      <div className="mt-6">
        <button
          onClick={handleKnowMoreClick}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded"
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default EventSection;
