import React from 'react';
import video from '../assets/video.mp4';

function HomeVideo() {
  return (
    <div className="relative">
      <section className="flex flex-col items-center py-20 px-4 md:py-40 md:px-20">
        <video
          src={video}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 uppercase mt-5">
            Halcyon - sit
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 uppercase mt-5">
            About - college
          </h1>
              <p className="text-lg md:text-2xl text-center mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                eligendi harum temporibus maiores nobis deleniti laborum
                accusantium modi aspernatur explicabo ducimus eum quasi, cumque
                numquam possimus ab quisquam dolorum. Sequi?
              </p>
            </div>
            <div>
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 uppercase mt-5">
            About - Halcyon
          </h1>
              <p className="text-lg md:text-2xl text-center mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                eligendi harum temporibus maiores nobis deleniti laborum
                accusantium modi aspernatur explicabo ducimus eum quasi, cumque
                numquam possimus ab quisquam dolorum. Sequi?
              </p>
            </div>
          </div>
        </div>
        <a className="absolute bottom-10 boxBtn uppercase border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-500 ease-in-out">
          Scroll
        </a>
      </section>
      
    </div>
  );
}

export default HomeVideo;
