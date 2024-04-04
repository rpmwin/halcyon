import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Events from '../assets/Data';
import './IndividualEvent.css';

function IndividualEvent() {
  const { eventId, subEventId } = useParams();
  const eventCategory = Events[eventId].category;
  const subevent = Events[eventId].events[subEventId];

  return (
    <div className="min-h-screen  text-center flex justify-center items-center pt-28">
      <div className="boxi text-3xl p-1 lg:w-[40%]">
        <div className="insidebox bg-slate-900 rounded-2xl ">
          <div className="rounded-xl overflow-hidden">
            <h1 className="text-3xl font-semibold uppercase tracking-wide text-white mb-8">
              {eventCategory}
            </h1>

            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                {subevent.name}
              </h2>
              <Link to="#">
                <button className="bg-yellow-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mb-3 duration-300">
                  REGISTER
                </button>
              </Link>
              <p className="text-lg text-gray-300 mb-4">
                <span className="font-bold uppercase tracking-wider block">
                  Cash Prize:{' '}
                </span>{' '}
                ₹ {subevent.cashPrize}
              </p>
              <p className="text-lg text-gray-300 mb-4 lg:max-w-[50%] mx-auto">
                <span className="font-bold uppercase tracking-wider block ">
                  Rules:{' '}
                </span>
                {subevent.rules}
              </p>
              <p className="text-lg text-gray-300 mb-4">
                <span className="font-bold uppercase tracking-wider block">
                  Registration Fee:
                </span>{' '}
                ₹ {subevent.eventDetails.registrationFee}
              </p>
              <p className="text-lg text-gray-300 mb-4">
                <span className="font-bold uppercase tracking-wider block">
                  Date and Time:
                </span>{' '}
                {subevent.eventDetails.dateAndTime}
              </p>
              <p className="text-lg text-gray-300 mb-4">
                <span className="font-bold uppercase tracking-wider block">
                  {' '}
                  Location:{' '}
                </span>{' '}
                {subevent.eventDetails.location}
              </p>
              <p className="text-lg text-gray-300 mb-2">
                <span className="font-bold uppercase tracking-wider block">
                  Coordinator Details:{' '}
                </span>
              </p>
              <ul className="text-lg text-gray-300">
                {Object.entries(subevent.coordinatorDetails).map(
                  ([name, phone], index) => (
                    <li key={index}>
                      {name}: {phone}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualEvent;
