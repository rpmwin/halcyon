import React, { useState, useEffect } from 'react';

import HomeVideo from './HomeVideo';
import Sponsors from './Sponsors';
import KnowMore from '../components/KnowMore';

function HomeMain() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // This effect will run only once after the component mounts
    setLoaded(true);
  }, []);

  return (
    <div className='relative'>
      {/* Render the LoaderPage only if the page is not loaded */}
      
      <div className='w-[100%]' >
        <HomeVideo />
      </div>
      <div>
        <KnowMore />
      </div>
        <div >
          <Sponsors />
        </div>
    </div>
  );
}

export default HomeMain;
