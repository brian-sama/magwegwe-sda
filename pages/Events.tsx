
import React from 'react';
import { EVENTS } from '../constants';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="relative h-[400px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=2000" 
          alt="Events Background" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Church Programs</h1>
          <p className="text-xl text-blue-100">Worship, fellowship, and growth for the current quarter.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Events List */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-yellow-500 pl-4">Upcoming Programs</h2>
            {EVENTS.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {event.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{event.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-gray-500">
                      <Calendar className="w-5 h-5 text-yellow-600" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                      <Clock className="w-5 h-5 text-yellow-600" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-500">
                      <MapPin className="w-5 h-5 text-yellow-600" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar / Announcements */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-950">Quarterly Focus</h2>
              <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-yellow-400 mb-4">Q1: Spiritual Revival</h3>
                <p className="text-blue-100 mb-6 italic">"Wilt thou not revive us again: that thy people may rejoice in thee?" - Psalm 85:6</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Daily Morning Prayer (05:00 AM)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Home Bible Study Groups</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Visitation Program</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-blue-950">Reminders</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm">Remember to bring your lesson pamphlets for Sabbath School.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm">Lunch fellowship next Sabbath after Divine Service.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
