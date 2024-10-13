import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import TeamCard from "../components/TeamCard";
import { TeamMember } from "../components/TeamCard";
import team from "../lib/team.json";



const EventsPage: React.FC = () => {
  // Simulate the events data, in real app this might come from an API
  scroll(0, 0)
  // Team members data
  const teamMembers: TeamMember[] = team
  
  return (
    <div className="overflow-hidden p-2 flex flex-col items-center">
      <h1 className="text-3xl sm:text-7xl font-extrabold text-green-400 mt-12 mb-6">
        Team
      </h1>

      <div className="text-center text-xl text-white mb-6">
        Meet our diverse and passionate team.
      </div>

        <div className="flex flex-wrap p-10 justify-center gap-10 items-center">
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
        </div>
    </div>
  );
};

export default EventsPage;
