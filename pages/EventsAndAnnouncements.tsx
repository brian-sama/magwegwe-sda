import React from 'react';
import { EVENTS, ANNOUNCEMENTS } from '../constants';
import { Calendar, Clock, MapPin, Tag, Bell, Info, Sparkles } from 'lucide-react';

const EventsAndAnnouncements: React.FC = () => {
    return (
        <div className="min-h-screen pt-20">
            {/* Banner */}
            <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=2000"
                    alt="Events and Announcements"
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.3] scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-950/80"></div>
                <div className="relative z-10 text-center px-4 max-w-4xl">
                    <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] rounded-full backdrop-blur-sm mb-6">
                        Church Life
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Programs & News</h1>
                    <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed">
                        Stay informed about our upcoming worship services, special programs, and community updates.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">

                    {/* Announcements Section (Left Sidebar style) */}
                    <div className="space-y-12">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-yellow-500 text-blue-950 rounded-2xl shadow-lg shadow-yellow-500/10">
                                    <Bell className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-blue-950">Announcements</h2>
                            </div>

                            <div className="space-y-6">
                                {ANNOUNCEMENTS.map((announcement) => (
                                    <div key={announcement.id} className="group p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500">
                                        <div className="flex items-center gap-3 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
                                            <Calendar className="w-3 h-3" /> {announcement.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">{announcement.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{announcement.content}</p>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                            <Info className="w-3 h-3" /> Posted by Clerk
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 bg-blue-950 rounded-[3rem] text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-yellow-500/20 transition-colors"></div>
                            <h3 className="text-xl font-bold mb-4 relative z-10">Have an announcement?</h3>
                            <p className="text-blue-200 text-sm mb-8 leading-relaxed relative z-10">
                                Contact the church clerk or elders by Thursday evening to have your notice included.
                            </p>
                            <a href="mailto:clerk@magwegwesda.org" className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors inline-flex items-center gap-2 relative z-10">
                                Email the Clerk <Sparkles className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Events Section (Main Area) */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-900 text-white rounded-2xl shadow-lg shadow-blue-900/10">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold text-blue-950">Upcoming Programs</h2>
                            </div>
                            <span className="hidden sm:block text-xs font-bold text-gray-400 uppercase tracking-widest">Current Quarter</span>
                        </div>

                        <div className="space-y-8">
                            {EVENTS.map((event) => (
                                <div key={event.id} className="relative group bg-white rounded-[3rem] border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 overflow-hidden">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                                    <div className="p-10">
                                        <div className="flex flex-wrap items-center gap-3 mb-6">
                                            <span className="px-4 py-1 bg-blue-50 text-blue-700 text-[10px] font-black rounded-full uppercase tracking-[0.2em] flex items-center gap-2 border border-blue-100/50">
                                                <Tag className="w-3 h-3" /> {event.category}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl font-bold text-blue-950 mb-4 group-hover:text-blue-900 transition-colors">{event.title}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">{event.description}</p>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-50">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center shadow-sm">
                                                    <Calendar className="w-5 h-5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">When</span>
                                                    <span className="text-sm font-bold text-gray-900">{event.date}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                                                    <Clock className="w-5 h-5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Time</span>
                                                    <span className="text-sm font-bold text-gray-900">{event.time}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shadow-sm">
                                                    <MapPin className="w-5 h-5" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Where</span>
                                                    <span className="text-sm font-bold text-gray-900">{event.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 p-12 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200 text-center">
                            <p className="text-gray-500 font-medium italic">More programs are added regularly. Please check back next week.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsAndAnnouncements;
