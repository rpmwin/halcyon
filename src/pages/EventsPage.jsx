import React from 'react';
import { BackgroundBlogCard } from '../components/EventsComponentAll';
import Data from '../assets/Data.js';

function EventsPage() {

  console.log(Data)
  return (
    <div>
      <div className="relative">
        {/* <Home /> */}

        <div className='flex flex-col items-center scale-95 justify-center sm:flex-row flex-wrap'>
          {Data.map((category, index) => (
            <div className='m-5  hover:scale-105 duration-500'>

            <BackgroundBlogCard key={index} category = {category} ></BackgroundBlogCard>
            </div>
          ))}
        </div>
        {/* <BackgroundBlogCard /> */}
      </div>
    </div>
  );
}

export default EventsPage;
