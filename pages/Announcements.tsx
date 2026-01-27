
import React from 'react';
import { ANNOUNCEMENTS } from '../constants';
import { Bell, Info, Calendar } from 'lucide-react';

const Announcements: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-yellow-100 text-yellow-700 rounded-2xl">
            <Bell className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Church Announcements</h1>
            <p className="text-gray-600">Stay updated with the latest news from our congregation.</p>
          </div>
        </div>

        <div className="space-y-6">
          {ANNOUNCEMENTS.map((announcement) => (
            <div key={announcement.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-950">{announcement.title}</h3>
                <span className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  <Calendar className="w-3 h-3" /> {announcement.date}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">{announcement.content}</p>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                <Info className="w-4 h-4" />
                <span>Posted by Church Clerk</span>
              </div>
            </div>
          ))}

          {ANNOUNCEMENTS.length === 0 && (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-500">No new announcements at this time.</p>
            </div>
          )}
        </div>

        <div className="mt-20 p-8 bg-blue-950 rounded-3xl text-white text-center">
          <h3 className="text-xl font-bold mb-4">Have an announcement?</h3>
          <p className="text-blue-200 mb-6">Contact the church clerk or elders to have your notice included in the bulletin.</p>
          <a href="mailto:clerk@magwegwesda.org" className="text-yellow-400 font-bold hover:underline">Email the Clerk</a>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
