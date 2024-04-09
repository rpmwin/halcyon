// import React from 'react';
// import { BackgroundBlogCard } from '../components/EventsComponentAll';
// import Data from '../assets/Data.js';
// import bgmi from '../assets/Images/bgtrial.svg'
// function EventsPage() {

//   console.log(Data)
//   return (
//     <div>
//       <div className="relative">
//         {/* <Home /> */}

//         <div className='flex scale-95 justify-center sm:flex-row flex-wrap'>
//           {Data.map((category, index) => (
//             <div className='m-5  hover:scale-105 duration-500'>

//             <BackgroundBlogCard key={index} category = {category} ></BackgroundBlogCard>
//             </div>
//           ))}
//         </div>
//         {/* <BackgroundBlogCard /> */}
//       </div>
//     </div>
//   );
// }

// export default EventsPage;

import React from 'react';
import { BackgroundBlogCard } from '../components/EventsComponentAll';
import Data from '../assets/Data.js';
import bgmi1 from '../assets/Images/bgtrial1.svg';

function EventsPage() {
  const pageStyle = {
    backgroundImage: `url(${bgmi1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center', // Center the background image horizontally and vertically
    minHeight: '100vh',
  };

  return (
    <div style={pageStyle}>
      <div className="relative">
        <div className='flex scale-95 justify-center sm:flex-row flex-wrap'>
          {Data.map((category, index) => (
            <div className='m-5 hover:scale-105 duration-500' key={index}>
              <BackgroundBlogCard category={category}></BackgroundBlogCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsPage;

