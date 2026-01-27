
import React from 'react';
import { YOUTH_GALLERY } from '../constants';
import { Camera, Users, Trophy, BookOpen } from 'lucide-react';

const Youth: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-4 block underline decoration-yellow-300 decoration-4 underline-offset-8">Youth Ministry</span>
            <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">Empowering the Next Generation of Leaders</h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              The Pathfinders and Adventurers clubs are at the heart of our church, fostering spiritual growth, physical discipline, and community service.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-2xl">
                <Users className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-1">Pathfinders</h3>
                <p className="text-sm text-gray-500">Ages 10-15</p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-2xl">
                <Trophy className="w-8 h-8 text-yellow-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-1">Adventurers</h3>
                <p className="text-sm text-gray-500">Ages 4-9</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-[12px] border-gray-50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000" 
                alt="Youth Group" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Next Gathering</p>
                  <p className="font-bold text-gray-900">Sabbath @ 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pathfinder Gallery */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery of Growth</h2>
              <p className="text-gray-600">Moments from our recent adventures and ceremonies.</p>
            </div>
            <button className="px-6 py-2 bg-gray-900 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors">
              <Camera className="w-4 h-4" /> View Full Gallery
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {YOUTH_GALLERY.map((photo) => (
              <div key={photo.id} className="group cursor-pointer">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all">
                  <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                    <p className="text-white font-medium">{photo.caption}</p>
                  </div>
                </div>
                <div className="px-1">
                  <h4 className="font-bold text-gray-900 text-sm truncate">{photo.caption}</h4>
                  <p className="text-xs text-gray-500">{photo.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-12 lg:p-20 rounded-[3rem] text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Club?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
            Registration for the current year is open. We welcome all children in the Magwegwe community to join our scouting programs.
          </p>
          <button className="px-10 py-4 bg-yellow-500 text-blue-950 font-bold rounded-full hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/20">
            Download Enrollment Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Youth;
