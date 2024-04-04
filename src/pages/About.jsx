import React from 'react';
import SiddagangaMutt from '../assets/Images/siddagangaMutt.jpg';
import ShivakumaraSwamiji from '../assets/Images/ShivakumaraSwamiji.png';
import SIT from '../assets/Images/SIT.jpg';
import halcyon from '../assets/Images/halcyon.png';

function About() {
  return (
    <div className=" w-screen mt-14 flex flex-col justify-center items-center">
      <div className=" w-3/4 text-left flex  items-center justify-center m-10">
        <div className="w-[80%]">
          <h1 className="text-4xl font-bold text-center mb-4 uppercase mt-5">
            {' '}
            About Siddaganga - Mutt
          </h1>

          <p className=" text-xl p-4 m-8">
            Siddaganga Mutt, located in Karnataka, India, was established in the
            15th century. It serves as a hub for education and spiritual
            guidance. Founded by Swami Siddaganga, the mutt continues to provide
            schooling and colleges, embodying his vision of accessible education
            for all, regardless of social status.
          </p>
        </div>
        <div>
          <img src={SiddagangaMutt} alt="" />
        </div>
      </div>
      <div className=" w-3/4 text-left flex  items-center justify-center m-10">
        <div>
          <img src={ShivakumaraSwamiji} alt="" />
        </div>
        <div className="w-[80%]">
          <h1 className="text-4xl font-bold text-center mb-4 uppercase mt-5">
            {' '}
            About Shivakumara Swamiji
          </h1>

          <p className=" text-xl p-4 m-8">
            Shivakumara Swamiji was a revered spiritual leader from Karnataka,
            India. Head of Siddaganga Mutt, he dedicated his life to education
            and social welfare. Providing free education and essentials to the
            underprivileged, his selfless service earned him the title "Walking
            God". His legacy of compassion continues to inspire millions
            worldwide.
          </p>
        </div>
      </div>
      <div className=" w-3/4 text-left flex  items-center justify-center m-10">
        <div className="w-[80%]">
          <h1 className="text-4xl font-bold text-center mb-4 uppercase mt-5">
            {' '}
            About Siddaganga Insitiute of Technology
          </h1>

          <p className=" text-xl p-4 m-8">
            Siddaganga Institute of Technology (SIT), located in Karnataka,
            India, is a renowned educational institution offering engineering
            and technological programs. Founded with a vision to provide quality
            education, SIT has upheld its commitment to excellence since its
            establishment. With state-of-the-art facilities and dedicated
            faculty, SIT continues to nurture talented engineers and
            professionals, contributing to the advancement of society.
          </p>
        </div>
        <div>
          <img src={SIT} alt="" />
        </div>
      </div>
      <div className=" w-3/4 text-left flex  items-center justify-center m-10">
        <div>
          <img src={halcyon} alt="" />
        </div>
        <div className="w-[80%]">
          <h1 className="text-4xl font-bold text-center mb-4 uppercase mt-5">
            {' '}
            About Halcyon - 2024
          </h1>

          <p className=" text-xl p-4 m-8">
            The main event of SIT Tumkur's Halcyon fest is a vibrant celebration
            of talent and creativity. Featuring a diverse range of competitions,
            performances, and showcases, the event embodies the spirit of
            innovation and collaboration. From technical challenges to cultural
            extravaganzas, Halcyon fest offers participants a platform to
            showcase their skills and passions. With enthusiastic participation
            from students and faculty alike, the event fosters a sense of
            community and camaraderie, making it a highlight of the academic
            calendar at SIT Tumkur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
