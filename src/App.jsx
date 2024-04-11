import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventPage from './pages/EventPage';
import About from './pages/About';
import IndividualEvent from './pages/IndividualEvent';
import HomeMain from './pages/HomeMain';
import NavBar from './components/NavBar';
import EventsPage from './pages/EventsPage';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-w-screen min-h-screen flex flex-col bg-zinc-900 text-white overflow-x-hidden relative">
      <Router>
        <div className="z-20 fixed top-3 p-3 w-screen transform navbarcss flex justify-center items-center">
          <NavBar />
        </div>
        <div className=" flex-grow">
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:eventId" element={<EventPage />} />
            <Route
              path="/events/:eventId/:subEventId"
              element={<IndividualEvent />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/Test" element={<LoadingAnimation />} /> */}
          </Routes>
        </div>
        <div className=" p-2 ">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
