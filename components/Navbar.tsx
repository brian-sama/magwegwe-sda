
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { CHURCH_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      children: [
        { name: 'About Us', path: '/about' },
        { name: 'Organogram', path: '/organogram' },
        { name: 'Doctrine', path: '/doctrine' },
      ],
    },
    {
      name: 'Ministries',
      children: [
        { name: 'Overview', path: '/departments' },
        { name: 'Music Ministry', path: '/departments/music' },
        { name: 'Sabbath School', path: '/departments/sabbath-school' },
        { name: 'Dorcas Relief', path: '/departments/dorcas' },
        { name: 'Pathfinders', path: '/youth/pathfinders' },
        { name: 'Adventurers', path: '/youth/adventurers' },
        { name: 'Senior Youth', path: '/youth/senior' },
      ],
    },
    { name: 'Events & News', path: '/events' },
    { name: 'Church Development', path: '/development' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white p-1 rounded-full shadow-lg overflow-hidden border-2 border-blue-900">
              <img src="/logo.jpg" alt="SDA Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-blue-950">
                {CHURCH_NAME}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-blue-700 font-semibold hidden md:block">
                Bulawayo, Zimbabwe
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group px-3 py-2">
                {link.path ? (
                  <Link
                    to={link.path}
                    className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:text-blue-700 ${isActive(link.path) ? 'text-blue-700' : 'text-gray-600'
                      }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button className="flex items-center space-x-1 text-sm font-bold uppercase tracking-wide text-gray-600 group-hover:text-blue-700 transition-all duration-300">
                    <span>{link.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                )}

                {link.children && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 ${isActive(child.path) ? 'text-blue-700 bg-blue-50/50' : 'text-gray-700'
                            }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-900 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.path ? (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-lg font-bold transition-all ${isActive(link.path)
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <div className="space-y-1">
                    <div className="px-4 py-3 text-sm font-black uppercase tracking-widest text-gray-400">
                      {link.name}
                    </div>
                    {link.children?.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-8 py-3 rounded-xl text-base font-bold transition-all ${isActive(child.path)
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-50'
                          }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
