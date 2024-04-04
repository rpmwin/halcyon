import React from 'react';
import { NavLink } from 'react-router-dom';
import SITLOGO from '../assets/Logo/SIT.png';

function NavBar() {
  return (
    <div className="flex justify-between items-center p-3 px-6 bg-gray-600 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-xl w-screen">
      <img src={SITLOGO} alt="" className="w-12 hidden sm:inline md:inline" />
      <div className="flex justify-between space-x-6 text-xl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}
        >
          Home
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}>
          Events
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}>
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'text-red-500' : ' hover:text-yellow-500')}
        >
          Contact us
        </NavLink>
      </div>
      <img src={SITLOGO} alt="" className="w-12" />
    </div>
    
  )
}

export default NavBar