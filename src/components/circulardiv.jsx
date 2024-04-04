// CircularDiv.js

import React from 'react';

const CircularDiv = () => {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="w-60 h-60 rounded-full bg-blue-500 text-white flex justify-center items-center absolute" style={{ animation: 'moveInCircle 5s linear infinite' }}>
        Circular Div
      </div>
    </div>
  );
};

export default CircularDiv;
