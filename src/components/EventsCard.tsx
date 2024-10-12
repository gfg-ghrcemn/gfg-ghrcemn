import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  link?: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, image, link }) => {
  function handleRegisteration() {
    window.open(link, "_blank");
  }

  return (
    <div className="w-[35vh] sm:w-[16em] h-[60vh] p-2 mx-auto overflow-hidden shadow-lg bg-transparent border-green-500 border-2 rounded-lg shadow-green-400 my-4">
      {/* Image */}
        <img
          className="border-green-500 border-2 object-cover w-full h-[40%] sm:h-[40%] "
          src={image}
          alt="event"
        />
      {/* Event Information */}
      <div className="px-4 py-4 sm:px-6 sm:py-4 h-[40%] sm:h-[40%]">
        <div className="font-bold h-1/3 text-wrap mb-2 text-green-400 ">{title}</div>
        <p className="text-white text-sm">{date}</p>
        {/* Description hidden on small screens */}
      </div>
      {/* Buttons */}
      <div className="flex justify-center items-center h-[20%] sm:h-[20%]">
        <button
          onClick={handleRegisteration}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default EventCard;
