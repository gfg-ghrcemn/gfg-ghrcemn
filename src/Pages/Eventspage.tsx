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
    "title": "GFG Installation / TECHFORGE",
    "date": "October 10, 2024",
    "description": "GFG Student Chapter Forum Installation and experts talk over the respected workshop.",
    "image": "https://example.com/event-tech-conference.jpg",
    "link": "https://example.com/register-techforge"
  },
  {
    "title": "UI/UX IGNITE",
    "date": "February 10-11, 2025",
    "description": "A 2-day UI/UX hackathon, Day 1: Information Gathering, Day 2: Designing Hackathon.",
    "image": "https://example.com/event-ui-ux.jpg",
    "link": "https://example.com/register-uiux-ignite"
  },
  {
    "title": "TECH TRIVIA",
    "date": "January 15, 2025",
    "description": "A tech quiz covering topics from GFG.",
    "image": "https://example.com/event-tech-quiz.jpg",
    "link": "https://example.com/register-tech-trivia"
  },
  {
    "title": "CODE CRUSADE",
    "date": "February 25, 2025",
    "description": "An inter-college treasure hunt event with coding challenges.",
    "image": "https://example.com/event-code-treasure.jpg",
    "link": "https://example.com/register-code-crusade"
  },
  {
    "title": "GFG ARENA: THE ULTIMATE CLASH",
    "date": "March 10, 2025",
    "description": "A code debugging event focusing on optimization techniques.",
    "image": "https://example.com/event-debugging.jpg",
    "link": "https://example.com/register-gfg-arena"
  },
  {
    "title": "CAREER CATALYST: PLACEMENT EDITION",
    "date": "March 20, 2025",
    "description": "A career-oriented event including aptitude, group discussion, and technical interviews.",
    "image": "https://example.com/event-career.jpg",
    "link": "https://example.com/register-career-catalyst"
  },
  {
    "title": "TECH TOAST AND TOASTMASTERS",
    "date": "April 5, 2025",
    "description": "A Toastmasters event discussing the latest in technology.",
    "image": "https://example.com/event-toastmasters.jpg",
    "link": "https://example.com/register-tech-toast"
  },
  {
    "title": "HACKEXPERIENCE SUMMIT",
    "date": "April 15, 2025",
    "description": "A collaborative hackathon event in partnership with RCOEM and Suresh Bhatt.",
    "image": "https://example.com/event-hackathon.jpg",
    "link": "https://example.com/register-hackexperience"
  },
  {
    "title": "DOMAIN DYNAMICS",
    "date": "April 25, 2025",
    "description": "An event with domain-specific technical questions.",
    "image": "https://example.com/event-domain.jpg",
    "link": "https://example.com/register-domain-dynamics"
  },
  {
    "title": "ALGORITHM QUEST",
    "date": "May 1, 2025",
    "description": "An MCQ-based event focusing on data structures and algorithms.",
    "image": "https://example.com/event-dsa.jpg",
    "link": "https://example.com/register-algorithm-quest"
  },
  {
    "title": "MEMECEPTION SHOWDOWN",
    "date": "May 10, 2025",
    "description": "A month-long meme showdown competition.",
    "image": "https://example.com/event-memes.jpg",
    "link": "https://example.com/register-memeception"
  }
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
