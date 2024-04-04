import React from 'react';
import './EventPage.css';

import { Link, useParams } from 'react-router-dom';

import Events from '../assets/Data';



function EventPage() {
  const { eventId } = useParams();

  const eventCategory = Events[eventId].category;
  const subEvents = Events[eventId].events;
  console.log(subEvents);

  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8 mx-auto ">
      <div className="text-[60px] font-bold text-white mb-8 uppercase text-center">
        {eventCategory}
      </div>

      <div className="row grid lg:grid-cols-3 gap-2 sm:grid-cols-1  ">
        {subEvents.map((event, index) => (
          <div key={index}>
            <div className="card ">
              <div className="cover item-a " style={{ backgroundImage: `url(${event.eventimage})` }}>
                <h1>{event.name}</h1>
                <span className="price">Price-Money: ₹ {event.cashPrize}</span>
                <div className="card-back">
                  <a href="#">Register</a>
                  <Link to={`/Events/${eventId}/${index}`}>View detail</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventPage;
