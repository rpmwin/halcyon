// // import React from 'react';
// // import video from '../assets/video.mp4';
// // import carnival from '../assets/Images/carnival.webp';
// // import './HomeVideo.css';

// // function HomeVideo() {
// //   return (
// //     <div className="relative h-screen flex justify-center items-center ">
// //       <section className="flex flex-col items-center py-20 px-4 md:py-40 md:px-20 bg ">
// //         {/* <img
// //           src={carnival}
// //           autoPlay
// //           muted
// //           loop
// //           className="absolute top-0 left-0 w-full h-full object-cover z-0 blur"
// //         /> */}
// //         <img
// //           src={carnival}
// //           alt="carnival image"
// //           className="absolute top-0 left-0 w-full h-full object-cover z-0 blur"
// //         />
// //         <div
// //           className="relative z-10 rounded-xl  "
// //           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
// //         >
// //           <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 p-8 uppercase mt-5">
// //             Welcome to HALCYON - 2024
// //           </h1>

// //           {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             <div>
// //               <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 uppercase mt-5">
// //                 welcome TO
// //               </h1>
// //             </div>
// //             <div>
// //               <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 uppercase mt-5">
// //                 HALCYON
// //               </h1>
// //             </div>
// //           </div> */}
// //         </div>
// //         <a className="absolute bottom-10 boxBtn uppercase border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-500 ease-in-out scroll-btn">
// //           Scroll
// //         </a>
// //       </section>
// //     </div>
// //   );
// // }

// // export default HomeVideo;

// import React from 'react';
// import carnival from '../assets/Images/carnival.webp';
// import './HomeVideo.css';

// function HomeVideo() {
//   return (
//     <div className="relative h-screen flex justify-center items-center">
//       <section className="flex flex-col items-center py-20 px-4 md:py-40 md:px-20 bg">
//         <img
//           src={carnival}
//           alt="carnival image"
//           className="absolute top-0 left-0 w-full h-full object-cover z-0 blur"
//         />
//         <div
//           className="relative z-10 rounded-xl"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 p-8 uppercase mt-5">
//             Welcome to HALCYON - 2024
//           </h1>
//         </div>
//         <a
//           className="absolute bottom-10 boxBtn hover:bg-white hover:text-black transition duration-500 ease-in-out scroll-btn"
//           onClick={() => {
//             window.scrollTo({
//               top: window.innerHeight,
//               behavior: 'smooth'
//             });
//           }}
//         >
//           <i className="fas fa-chevron-down"></i>
//         </a>
//       </section>
//     </div>
//   );
// }

// export default HomeVideo;

import React from 'react';
import carnival from '../assets/Images/bgtrial.svg';
import './HomeVideo.css';
import arrow from '../assets/Images/downArrow.svg'
function HomeVideo() {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <section className="flex flex-col items-center py-20 px-4 md:py-40 md:px-20 bg">
        <img
          src={carnival}
          alt="carnival image"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 "
        />
        <div
          className="relative z-10 rounded-xl"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 p-8 uppercase mt-5">
            Welcome to HALCYON - 2024
          </h1>
        </div>
        <a
          className="absolute bottom-10 boxBtn uppercase border text-lg border-black px-5 py-6 rounded-full bg-white text-black transition duration-500 ease-in-out scroll-btn select-none opacity-60"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
        <img src={arrow} alt="scroll down" className='text-black w-6 ' />
        </a>
      </section>
    </div>
  );
}

export default HomeVideo;
