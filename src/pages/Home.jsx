import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  


  useEffect(() => {
    const cards = document.querySelectorAll('.smallCard');
    cards.forEach(card => {
      card.addEventListener('click', handleCardClick);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('click', handleCardClick);
      });
    };
  }, []);


  function next() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
  }
  
  function prev() {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-x-hidden mt-52">
      <div className="containerHome overflow-x-hidden sm:w-screen">
        <div id="slide" className="flex overflow-x-hidden sm:w-screen">
          <div className="item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611673982064-7385a5d9574e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJhbWF8ZW58MHx8MHx8fDA%3D)' }}>
            <div className="contentHome">
              <div className="name">THEATRE</div>
              <div className="des">THEATRE</div>
              <button className='text-xl text-black px-4 py-2 rounded-md hover:bg-teal-600 bg-transparent duration-300 bg-white '><Link to="/Events/0" >See more</Link></button>
            </div>
          </div>
          <div className="item text-black" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="contentHome">
              <div className="name">MUSIC</div>
              <div className="des">ALL ABOUT MUSIC</div>
              <button className='text-xl text-black px-4 py-2 rounded-md hover:bg-teal-600 bg-transparent duration-300 bg-white '><Link to="/Events/0" >See more</Link></button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="contentHome">
              <div className="name">LITERATURE</div>
              <div className="des">ALL ABOUT LITERATURE</div>
              <button className='text-xl text-black px-4 py-2 rounded-md hover:bg-teal-600 bg-transparent duration-300 bg-white '><Link to="/Events/0" >See more</Link></button>
              
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504505278590-428d1acd0f07?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="contentHome">
              <div className="name">DANCE</div>
              <div className="des">ALL ABOUT DANCE</div>
              <button className='text-xl text-black px-4 py-2 rounded-md hover:bg-teal-600 bg-transparent duration-300 bg-white '><Link to="/Events/0" >See more</Link></button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611882008386-abd536c39413?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="contentHome">
              <div className="name">FINE ARTS</div>
              <div className="des">ALL ABOUT FINE ARTS </div>
              <button className='text-xl text-black px-4 py-2 rounded-md hover:bg-teal-600 bg-transparent duration-300 bg-white '><Link to="/Events/0" >See more</Link></button>
            </div>
          </div>
          <div className="item" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
            <div className="contentHome">
              <div className="name">GAMING</div>
              <div className="des">ALL ABOUT GAMING </div>
              <button className='text-xl text-black px-4 py-2 rounded-md hover:bg-teal-600 bg-transparent duration-300 bg-white '><Link to="/Events/1" >See more</Link></button>
            </div>
          </div>
          {/* Add more items here as needed */}
        </div>
        <div className="buttons">
          <button id="prev" onClick={prev} className=' bg-slate-500 rounded-full'>
            <p className=" bold text-3xl text-center">{"<"}</p>
          </button>
          <button id="next" onClick={next} className=' bg-slate-500 rounded-full'>
            <p className=" bold text-3xl text-center">{">"}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
