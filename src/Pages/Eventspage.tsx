import React from "react";
import EventCard from "../components/EventsCard";

interface Event {
  title: string;
  date: string;
  description: string;
  image: string; 
  link?: string;

}

const EventsPage: React.FC = () => {
  // Simulate the events data, in real app this might come from an API
  const events: Event[] = [
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
    },
  ];

  return (
    <div className="overflow-hidden h-[90vh] flex flex-col items-center">
      <h1 className="text-7xl font-extrabold text-green-400 mt-12 mb-6">
        Events
      </h1>

      <div className="text-center text-xl text-white mb-6">
        Check out our upcoming events and join us
      </div>

        <div className="flex overflow-x-auto no-scrollbar space-x-4 px-4">
            {events.map((event, index) => (
                <EventCard
                    key={index}
                    title={event.title}
                    date={event.date}
                    description={event.description}
                    image={event.image}
                    link={event?.link}
                />
            ))}
        </div>
    </div>
  );
};

export default EventsPage;
