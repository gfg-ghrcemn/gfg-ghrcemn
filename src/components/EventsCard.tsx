
interface EventCardProps {
    title: string;
    date: string;
    description: string;
    image: string;
    link?: string;
  }
  
  const EventCard: React.FC<EventCardProps> = ({ title, date, description, image }) => {
    return (
      <div className="min-w-[300px] max-w-xs  p-2 overflow-hidden shadow-lg bg-transparent border-green-500 border-2 rounded-lg shadow-green-400 mx-2">
        <img className="w-full h-48 object-cover rounded-lg border-2 border-green-400" src={image} alt={title} />
        <div className="px-6 py-4 h-[200px]">
          <div className="font-bold text-xl mb-2 text-green-400">{title}</div>
          <p className="text-white text-sm mb-4">{date}</p>
          <p className="text-gray-300 text-base">{description}</p>
        </div>
        <div className="px-6 py-4 flex flex-row justify-center">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
            Register
          </button>
          <button className="bg-transparent hover:bg-green-700 text-white border-2 border-green-400 rounded-lg font-bold py-2 px-4 ml-2">
            Know More
          </button>
        </div>
      </div>
    );
  };

export default EventCard;