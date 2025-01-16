import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const EventSection = () => {
  const navto = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      id="event" 
      className={`relative flex flex-col justify-center items-center mt-10 p-4 group transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="text-2xl sm:text-4xl font-extrabold text-green-400 mb-6">Events</h1>
      
      <div 
        className="w-full max-w-md aspect-square transition-transform hover:scale-105 cursor-pointer"
        onClick={() => navto("/events")}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle 
            cx="200" 
            cy="200" 
            r="180" 
            className="fill-none stroke-green-400/20"
            strokeWidth="4"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,1200;1200,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </circle>

          <circle 
            cx="200" 
            cy="200" 
            r="150" 
            className="fill-green-500/10"
          >
            <animate
              attributeName="r"
              values="150;160;150"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          <g className="translate-x-[200px] translate-y-[200px] scale-[1.2]">
            <rect 
              x="-50" 
              y="-60" 
              width="100" 
              height="90" 
              className="fill-none stroke-green-400" 
              strokeWidth="4"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,400;400,0"
                dur="2s"
                fill="freeze"
              />
            </rect>
            <rect 
              x="-50" 
              y="-60" 
              width="100" 
              height="20" 
              className="fill-none stroke-green-400" 
              strokeWidth="4"
            />
            <line 
              x1="-20" 
              y1="-70" 
              x2="-20" 
              y2="-50" 
              className="stroke-green-400" 
              strokeWidth="4"
            />
            <line 
              x1="20" 
              y1="-70" 
              x2="20" 
              y2="-50" 
              className="stroke-green-400" 
              strokeWidth="4"
            />
          </g>

          <text 
            x="200" 
            y="320" 
            className="fill-white text-lg font-medium" 
            textAnchor="middle"
          >
            Click to explore events
          </text>
        </svg>
      </div>
      
      <p className="text-white text-center mt-6 text-lg sm:text-xl opacity-80">
        Join us for exciting upcoming events!
      </p>
    </div>
  );
};

export default EventSection;