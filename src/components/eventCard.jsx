import React from 'react';
import brimage from './download.webp'

function EventCard({
  eventname,
  eventdate,
  eventtime,
  eventlocation,
  eventdescription,
  eventimage,
}) {
  return (
    <div className="container relative flex flex-col items-center justify-center overflow-hidden w-72 transition duration-500 ease-in-out lg:w-[100%] lg:h-[500px]  ">
      <img
        src={brimage}
        className="background-image absolute  object-cover object-center w-full blur-sm hover:blur-none "
      />
      <h1 className="text-2xl uppercase p-3 relative">{eventname}</h1>
      <div className='flex  justify-between'>
        <div className="content relative p-4 w-[50%] text-left ">
          <p>
            <strong>Date:</strong> {eventdate}
            <br />
            <strong>Time:</strong> {eventtime}
            <br />
            <strong>Location:</strong> {eventlocation}
          </p>
          <p className='hidden md:block'>{eventdescription}</p>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <button className="relative bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800  ">
            {' '}
            Register Here
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
