
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Events from '../pages/Events';
import Development from '../pages/Development';
import Youth from '../pages/Youth';
import GetInvolved from '../pages/GetInvolved';
import Announcements from '../pages/Announcements';

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
          <Route path="/events" element={<Events />} />
          <Route path="/development" element={<Development />} />
          <Route path="/youth" element={<Youth />} />
          <Route path="/involved" element={<GetInvolved />} />
          <Route path="/announcements" element={<Announcements />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
