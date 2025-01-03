import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="team"
      className={`bg-black h-screen text-white relative px-2 flex flex-col items-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Fade direction="up">
      <div className="text-center pt-10">
        <h1 className="sm:text-4xl text-2xl font-bold text-green-400">Meet Our Team</h1>
        <p className="text-gray-300">Our diverse and passionate team is here.</p>
      </div>
      </Fade>

      <div
        className="w-full max-w-md aspect-square mt-8 cursor-pointer"
        onClick={() => window.location.href = "/team"}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle
            cx="200"
            cy="200"
            r="160"
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

          {/* Team member circles */}
          {[0, 72, 144, 216, 288].map((angle, index) => (
            <g key={index} transform={`rotate(${angle} 200 200)`}>
              <circle
                cx="200"
                cy="100"
                r="20"
                className="fill-green-400"
              >
                <animate
                  attributeName="r"
                  values="20;22;20"
                  dur={`${2 + index * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}

          <circle
            cx="200"
            cy="200"
            r="40"
            className="fill-green-500"
          >
            <animate
              attributeName="r"
              values="40;45;40"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>

          <text
            x="200"
            y="320"
            className="fill-white text-lg font-medium"
            textAnchor="middle"
          >
            Click to meet the team
          </text>
        </svg>
      </div>

      <Link
        to="/team"
        className="mt-10 border-1 border-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-green-600 shadow-lg"
      >
        View All
      </Link>
    </div>
  );
};

export default TeamSection;
