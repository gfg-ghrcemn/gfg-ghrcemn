
import React from 'react'
import { useParams } from 'react-router-dom'
import eventdata from '../lib/event.json'

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const event = eventdata.find((event) => event.id === id);
  console.log(eventdata);
  console.log(event);
  if (!event) {
    return <div className='h-screen flex justify-center items-center text-green-500 text-5xl font-bold'>Coming Soon</div>
  }
  return (
    <div className='h-[80vh] p-2 bg-black flex flex-col w-[80%] justify-center items-center'>
        <h1 className='text-3xl'>Event Details</h1>
        <h1 className="text-5xl font-extrabold text-green-400 mt-12 mb-6">
          
          {event.title}

        </h1>
        <div className='text-white text-base flex  w-full justify-end px-4 mb-6'>
          <h3 className='text-white text-base'>
            {event.date}
          </h3>
        </div>

          <img src={event.image} alt={event.title}  className='w-1/2 h-1/2 object-cover rounded-lg border-2 border-green-400'/>
 
        <div className='text-white text-xl mb-6'>
          {event.description}
        </div>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg'>
          Register
        </button>


    </div>
  )
}

export default EventDetails