
import React from 'react'
import { useParams } from 'react-router-dom'
import eventdata from '../lib/event.json'

const EventDetails = () => {
  return (
    <div className="overflow-hidden p-2 flex flex-col h-screen justify-center items-center">
      <h1 className="text-3xl sm:text-7xl font-extrabold text-green-500 mt-12 mb-6">
        Coming Soon
      </h1>
    </div>
  )
}

export default EventDetails