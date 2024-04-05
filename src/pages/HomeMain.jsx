import React, { useState, useEffect } from 'react';

import HomeVideo from './HomeVideo';
import Sponsors from './Sponsors';
import KnowMore from '../components/KnowMore';
import LatestNews from '../components/LatestNews';

function HomeMain() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // This effect will run only once after the component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="relative">
      {/* Render the LoaderPage only if the page is not loaded */}

      <div className="w-[100%]">
        <HomeVideo />
      </div>
      <div>
        <KnowMore />
      </div>
      <div className=" flex items-center justify-center">
        <LatestNews />
      </div>
      <div>
        <Sponsors />
      </div>
    </div>
  );
}

export default HomeMain;
