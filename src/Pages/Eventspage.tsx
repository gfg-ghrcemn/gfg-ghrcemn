import React, { useState } from "react";
import EventCard from "../components/EventsCard";
import { Link } from "react-router-dom";
import event from "../lib/event.json";
import Reveal, { Fade } from "react-awesome-reveal";
interface Event {
  title: string;
  date: string;
  description: string;
  image: string; 
  link?: string;
}

const EventsPage: React.FC = () => {
  // Simulate the events data, in real app this might come from an API
  scroll(0, 0)
  // State for "Show More" functionality
  const [showMore, setShowMore] = useState(false);

  // Toggle show more or less
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="overflow-hidden p-2 flex flex-col items-center transition-all ease-linear">
      <Fade triggerOnce>
      <h1 className="text-3xl sm:text-7xl font-extrabold text-green-400 mt-12 mb-6">Events</h1>

      <div className="text-center text-xl text-white mb-6">
        Check out our upcoming events and join us
      </div>
      </Fade>
      {/* Carousel Section */}
      {/* Timeline Section */}
      <Reveal triggerOnce>
      <div className="p-4">
        <h2 className="text-3xl text-white font-bold mb-12">TimeLine</h2>

        {/* Visible events (limited if showMore is false) */}
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">

              <div className="flex md:contents flex-row-reverse">
              <div className="relative p-4 my-6 text-green-500 sm:w-[60%] w-[90%] border-green-500 border-2 rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <img src={event[1].image} alt="event" className="border-green-500 rounded-lg border-2 object-fit w-full h-40" />
                <h3 className="text-lg font-semibold lg:text-xl">{event[1].title}</h3>
                <p className="mt-2 leading-6">{event[1].description}</p>
                <span className="absolute text-sm text-green-500 -top-5 left-2 whitespace-nowrap">{event[1].date}</span>
                <Link to="/events/2" className="h-[30%] py-5 text-sm w-full justify-start text-green-500 bottom-5 left-2 whitespace-nowrap underline">View More</Link>
              </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-green-300 rounded-t-full bg-gradient-to-b from-green-400 to-green-300"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-green-400 rounded-full top-1/2"></div>
                </div>
              </div>

              {/* Event 4 */}
              <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                  <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-green-500"></div>
                  </div>
                  <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-green-500 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-green-500 sm:w-[60%] w-[90%] border-green-500 border-2  rounded-xl col-start-6 col-end-10 mr-auto">
                  <img src={event[0].image} alt="event" className="border-green-500 rounded-lg border-2 object-fit w-full h-40" />
                  <h3 className="text-lg font-semibold lg:text-xl">{event[0].title}</h3>
                  <p className="mt-2 leading-6">{event[0].description}</p>
                  <span className="absolute text-sm text-green-500 -top-5 left-2 whitespace-nowrap">{event[0].date}</span>
                  <Link to="/events/gfg-streak-challenge" className="h-[30%] py-5 text-sm w-full justify-start text-green-500 bottom-5 left-2 whitespace-nowrap underline">View More</Link>
                </div>
              </div>
        </div>
      </div>
      </Reveal>
    </div>
  );
};

export default EventsPage;
