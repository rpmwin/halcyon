import React from 'react';
import Events from '../assets/Data';
import { Link } from 'react-router-dom';
// import EventCard from '../components/eventCard'; // Import your EventCard component

function AllEvents() {
  return (
    <div className="flex justify-center items-center text-white flex-wrap text-center overflow-hidden">
      {Events.map((category, index) => (
        <div key={index} className="m-5">
          <h1 className="text-3xl font-bold mb-4 text-yellow-600">
            {category.category}
          </h1>
          <div className="w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6    ">
            {category.events.map((event, eventIndex) => ( 
              <div
                key={eventIndex}
                className="container relative flex flex-col items-center justify-center overflow-hidden w-72 transition duration-500 ease-in-out lg:w-[100%] lg:h-[500px] border-[2px] border-white mx-auto "
              >
                <img
                  src={event.eventimage} // Use the event image from your data
                  className="background-image absolute object-cover object-center w-full blur-sm hover:blur-none"
                />

                <h1 className="text-[39px] text-black font-bold uppercase p-3 relative">
                  {event.name}
                </h1>
                <div className="relative flex justify-between bg-slate-900  bg-opacity-70 p-4 m-4 rounded content ">
                  <div className="content relative p-4 w-[50%] text-left ">
                    <p>
                      <strong>Date:</strong> {event.eventDetails.dateAndTime}
                      <br />
                      <br />
                      <strong>Location:</strong> {event.eventDetails.location}
                    </p>

                    <p className="hidden md:block">{event.description}</p>
                  </div>
                  <div className="w-[50%] flex justify-center items-center">
                    <Link to={`/Events/${index}/${eventIndex}`}>
                      <button className="relative bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                        Know More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllEvents;
