import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
export interface TeamMember {
    name: string;
    position: string;
    image: string;
    linkedin: string;
  }
  
  const TeamCard: React.FC<TeamMember> = ({ name, position, image, linkedin }) => {   
  
      return (
        <div className="sm:w-[16em] w-[30vh] my-6 mx-auto h-[20em] pb-2 text-wrap break-words bg-transparent border-2 border-green-500 flex flex-col items-center rounded-lg">
        <img
          src={image}
          alt="team member"
          className="w-[90%] min-h-[40%] max-h-[12.5rem]  mt-2 rounded-lg border-2 border-green-500"
        />
        <div className="flex flex-col p-2 items-start h-[60%] w-full justify-center">
          <h2 className="text-xl p-2 overflow-hidden  w-full items-center flex text-green-500">
            {name}
          </h2>
          <h2 className="text-sm p-2 w-full items-center text-gray-500 overflow-hidden">
            {position}
          </h2>
        </div>
          <div className="flex text-xl mb-0 justify-end w-[80%] h-[10%] text-white items-center">
            <a href={linkedin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
      </div>
  
      );
      }

export default TeamCard;