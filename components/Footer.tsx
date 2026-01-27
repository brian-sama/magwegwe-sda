
import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { CHURCH_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white p-1 rounded-lg">
                <img src="/logo.jpg" alt="SDA Logo" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold">{CHURCH_NAME}</h3>
            </div>
            <p className="text-blue-200 mb-8">
              A community of faith growing in grace and reaching out with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Youtube /></a>
              <a href="#" className="hover:text-yellow-500 transition-colors"><Instagram /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-blue-200">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span>Magwegwe, Bulawayo, Zimbabwe</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>+263 770 000 000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>info@magwegwesda.org</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-blue-200">
              <li><a href="#/about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="#/events" className="hover:text-yellow-500">Church Programs</a></li>
              <li><a href="#/involved" className="hover:text-yellow-500">Evangelism</a></li>
              <li><a href="#/youth" className="hover:text-yellow-500">Pathfinders</a></li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Service Times</h4>
            <ul className="space-y-2 text-blue-200">
              <li className="flex justify-between">
                <span>Sabbath School</span>
                <span className="text-white font-medium">09:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Divine Service</span>
                <span className="text-white font-medium">11:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Bible Study</span>
                <span className="text-white font-medium">02:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Youth Meeting</span>
                <span className="text-white font-medium">04:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-blue-900 text-center text-blue-400 text-sm">
          <p>© {new Date().getFullYear()} {CHURCH_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
