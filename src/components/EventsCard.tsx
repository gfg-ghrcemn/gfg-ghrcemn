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
    <div className="w-[30vh] sm:w-[16em] h-[50vh] p-2 mx-auto overflow-hidden shadow-lg bg-transparent border-green-500 border-2 rounded-lg shadow-green-400 my-4">
      {/* Image */}
      <img
        className="w-full h-40 sm:h-48 object-cover rounded-lg border-2 border-green-400"
        src={image}
        alt={title}
      />
      {/* Event Information */}
      <div className="px-4 py-4 sm:px-6 sm:py-4 h-auto sm:h-[40%]">
        <div className="font-bold h-[20%] text-lg sm:text-xl mb-2 text-green-400 overflow-hidden">{title}</div>
        <p className="text-white text-sm sm:text-base mb-2">{date}</p>
        {/* Description hidden on small screens */}
      </div>
      {/* Buttons */}
      <div className="px-4 sm:px-6 flex flex-col sm:flex-row justify-center items-center gap-2">
        <button
          onClick={handleRegisteration}
          className="bg-green-500 hidden sm:block hover:bg-green-700 text-white font-bold py-2 px-1 rounded-lg w-full sm:w-auto"
        >
          Register
        </button>
        <Dialog>
          <DialogTrigger>
            <button className="bg-transparent hover:bg-green-700 text-white border-2 border-green-400 rounded-lg text-lg sm:text-xl font-semibold py-2 px-4 w-full sm:w-auto">
              info
            </button>
          </DialogTrigger>
          <DialogContent className="bg-black text-white font-Silkscreen border-green-500 shadow-lg shadow-green-500">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <DialogDescription>{description}</DialogDescription>
            <DialogFooter>
              <button
                onClick={handleRegisteration}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Register
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EventCard;
