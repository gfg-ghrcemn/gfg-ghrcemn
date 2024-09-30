import React from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "./EventsCard";


const EventSection: React.FC = () => {
  const navto = useNavigate();

  const events = [
    {
      title: "Smackathon",
      date: "Coming Soon",
      description: "Join us for a 24-hour hackathon to build amazing projects.",
      image: "https://example.com/event1.jpg",
      link: "/events/tech-conference-2024",
    },
    {
      title: "GFG Inauguration",
      date: "Oct 10, 2024",
      description: "Join us for the grand inauguration of GeeksforGeeks Student Chapter.",
      image: "https://example.com/event2.jpg",
      link: "/events/ai-future",
    },
    {
      title: "UI/UX Jam",
      date: "Coming Soon",
      description: "UI/UX design workshop and hackathon for designers and developers.",
      image: "https://example.com/event3.jpg",
      link: "/events/web-dev-bootcamp",
    },
    {
      title: "Tech Conference 2024",
      date: "March 20, 2024",
      description: "Join us for a deep dive into the latest tech trends and innovations.",
      image: "https://example.com/event1.jpg",
    },
    {
      title: "AI & Future",
      date: "April 10, 2024",
      description: "Discover the role of AI in shaping the future with expert speakers.",
      image: "https://example.com/event2.jpg",
    },
    {
      title: "Web Development Bootcamp",
      date: "May 5, 2024",
      description: "An intensive bootcamp to sharpen your web development skills.",
      image: "https://example.com/event3.jpg",
    }
    // Additional events...
  ];

  const handleKnowMoreClick = () => {
    navto('/events');
  };

  return (
    <div id="Events" className="overflow-hidden h-[90vh] flex flex-col items-center">
      <h1 className="text-7xl font-extrabold text-green-400 mt-12 mb-6">
        Events
      </h1> 

      <div className="text-center text-xl text-white mb-6">
        Check out our upcoming events and join us
      </div>

      {/* Carousel Section */}
      <div className="flex overflow-x-auto flex-nowrap no-scrollbar space-x-4 px-4">
        {events.map((event, index) => (
          <div key={index} className="min-w-[300px] max-w-[300px]">
            <EventCard
              title={event.title}
              date={event.date}
              description={event.description}
              image={event.image}
              link={event.link}
            />
          </div>
        ))}
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
