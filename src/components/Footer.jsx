// import React from 'react';

// function Footer() {
//   return (
//     <div className='text-white w-screen text-center' style={{backgroundImage: 'url(../src/assets/Images/footerBackground.jpg)', backdropFilter: 'blur(5px)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
//       <div className='border-t-2 border-white mt-3'></div>
//       <div className='flex items-center flex-col justify-center sm:flex-row sm:justify-around'>
//         <div className='grid grid-cols-1 gap-3 p-5 text-lg'>
//           <div>Halcyon_official</div>
//           <div>Halcyon.sit@gmail.com</div>
//           <div>culturalcomittee@sit.ac.in</div>
//         </div>
//         <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 p-5 text-lg'>
//           <div>DR M N Channabasappa (Director)</div>
//           <div>DR Shivakumaraiah (C E O)</div>
//           <div>DR S V Dinesh (Principal)</div>
//           <div>DR Sagar T S (cultural coordinator)</div>
//         </div>
//         <div className='p-3'>
//           <h1 className='text-2xl'>Student Coordinator</h1>
//           <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
//             <div>Shreyas S : 123456789</div>
//             <div>Akshobya K.N : 123456789</div>
//             <div>Manasa G.N : 123456789</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

import FooterImg from '../assets/Images/footerBackground.jpg';
import React from 'react';

function Footer() {
  return (
    <div className='text-white w-screen text-center' style={{backgroundImage: `url(${FooterImg})`, backdropFilter: 'blur(5px)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='border-t-2 border-white mt-3'></div>
      <div className='flex items-center flex-col justify-center sm:flex-row sm:justify-around'>
        <div className='grid grid-cols-1 gap-3 p-5 text-lg'>
        <div>
  <a href="https://www.instagram.com/halcyon_official" target="_blank" rel="noopener noreferrer">Halcyon_official</a>
</div>
       <div>
  <a href="mailto:Halcyon.sit@gmail.com">Halcyon.sit@gmail.com</a>
</div>
<div>
  <a href="https://www.google.com/maps/search/?api=1&query=Bangalore+-+Honnavar+Hwy,+Chandana+Complex,+Tumakuru,+Karnataka+572103" target="_blank" rel="noopener noreferrer">SIT,TUMKUR</a>
</div>

        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 p-5 text-lg'>
          <div>DR M N Channabasappa (Director)</div>
          <div>DR Shivakumaraiah (C E O)</div>
          <div>DR S V Dinesh (Principal)</div>
          <div>DR Sagar T S (cultural coordinator)</div>
        </div>
        <div className='p-3'>
          <h1 className='text-2xl'>Student Coordinator</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            <div><a href="tel:7411630453">Shreyas S : 7411630453</a></div>
            <div><a href="tel:8618625600">Akshobya K.N : 8618625600</a></div>
            <div><a href="tel:8904434275">Manasa G.N : 8904434275</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
