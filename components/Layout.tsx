
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import EventsAndAnnouncements from '../pages/EventsAndAnnouncements';
import Home from '../pages/Home';
import About from '../pages/About';
import Events from '../pages/Events';
import Development from '../pages/Development';
import Youth from '../pages/Youth';
import GetInvolved from '../pages/GetInvolved';
import Announcements from '../pages/Announcements';
import Organogram from '../pages/Organogram';
import Doctrine from '../pages/Doctrine';
import Departments from '../pages/Departments';
import MusicMinistry from '../pages/MusicMinistry';
import SabbathSchool from '../pages/SabbathSchool';
import Dorcas from '../pages/Dorcas';
import SeniorYouth from '../pages/Youth/SeniorYouth';
import Pathfinders from '../pages/Youth/Pathfinders';
import Adventurers from '../pages/Youth/Adventurers';

const Layout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventsAndAnnouncements />} />
          <Route path="/development" element={<Development />} />
          <Route path="/youth" element={<Youth />} />
          <Route path="/involved" element={<GetInvolved />} />
          <Route path="/announcements" element={<EventsAndAnnouncements />} />
          <Route path="/organogram" element={<Organogram />} />
          <Route path="/doctrine" element={<Doctrine />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/music" element={<MusicMinistry />} />
          <Route path="/departments/sabbath-school" element={<SabbathSchool />} />
          <Route path="/departments/dorcas" element={<Dorcas />} />
          <Route path="/youth/senior" element={<SeniorYouth />} />
          <Route path="/youth/pathfinders" element={<Pathfinders />} />
          <Route path="/youth/adventurers" element={<Adventurers />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
