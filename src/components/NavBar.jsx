// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import SITLOGO from '../assets/Logo/SIT.png';

// function NavBar() {
//   return (
//     <div className="flex justify-between items-center p-3 px-6 bg-gray-600 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-xl sm:w-3/4">
//       <img src={SITLOGO} alt="" className="w-8 sm:w-12" /> {/* Adjusted logo size */}
//       <div className="flex justify-between space-x-3 text-lg sm:text-xl"> {/* Adjusted text size */}
//         <NavLink
//           to="/"
//           className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/events"
//           className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}
//         >
//           Events
//         </NavLink>
//         <NavLink
//           to="/about"
//           className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}
//         >
//           About
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}
//         >
//           Contact us
//         </NavLink>
//       </div>
//       <img src={SITLOGO} alt="" className="w-8 sm:w-12" /> {/* Adjusted logo size */}
//     </div>
//   );
// }

// export default NavBar;


import React from 'react';
import { NavLink } from 'react-router-dom';
import SITLOGO from '../assets/Logo/SIT.png';

function NavBar() {
  return (
    <div className="flex justify-between items-center p-3 px-6 bg-gray-600 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-xl sm:w-3/4">
      <img src={SITLOGO} alt="" className="w-8 sm:w-12 mr-4" /> {/* Added margin to the logo */}
      <div className="flex justify-between space-x-3 text-lg sm:text-xl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}
        >
          Home
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}
        >
          Events
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}
        >
          Contact us
        </NavLink>
      </div>
      <img src={SITLOGO} alt="" className="w-8 sm:w-12 ml-4" /> {/* Added margin to the logo */}
    </div>
  );
}

export default NavBar;
