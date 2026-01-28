import React, { useState } from 'react';
import { Shield, MapPin, Calendar, Camera, Trophy, Bell } from 'lucide-react';
import { YOUTH_GALLERY } from '../../constants';
import ImageModal from '../../components/ImageModal';

const Pathfinders: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="relative rounded-[3rem] overflow-hidden h-[400px] mb-20 shadow-2xl shadow-yellow-500/10 cursor-zoom-in group"
                    style={{
                        backgroundImage: 'url(/images/pathfinder-1.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    onClick={() => setSelectedImage({ url: '/images/pathfinder-1.jpg', alt: 'Pathfinders' })}
                >
                    <div className="absolute inset-0 bg-white/60"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <span className="px-4 py-1 bg-blue-900 text-white rounded-full text-xs font-black uppercase tracking-widest mb-6">Ages 10-15</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-blue-950 mb-6 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">Pathfinders</h1>
                        <p className="text-xl text-blue-900 max-w-2xl font-medium drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">A worldwide organization of young people directed by the Seventh-day Adventist Church.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-blue-950 mb-8 underline decoration-yellow-400 decoration-8 underline-offset-8">Club Mission</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            The Pathfinder Club is a church-centered spiritual-recreational-activity program designed for
                            young people in grades 5 through 10. Our goal is to lead them into a loving, serving
                            relationship with Jesus Christ.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow">
                                <Trophy className="w-10 h-10 text-yellow-600 mb-6" />
                                <h4 className="text-xl font-bold mb-4 text-blue-950">Honors & Skills</h4>
                                <p className="text-gray-600">From nature study to computer science, Pathfinders earn honors that build confidence and knowledge.</p>
                            </div>
                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow">
                                <Shield className="w-10 h-10 text-blue-700 mb-6" />
                                <h4 className="text-xl font-bold mb-4 text-blue-950">Discipline & Leadership</h4>
                                <p className="text-gray-600">Learning order and responsibility through drill and team activities.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-950 rounded-[3rem] p-10 text-white">
                        <h3 className="text-2xl font-bold mb-8">Club Classes</h3>
                        <ul className="space-y-4">
                            {['Friend', 'Companion', 'Explorer', 'Ranger', 'Voyager', 'Guide'].map((className, idx) => (
                                <li key={idx} className="flex items-center gap-4 py-3 border-b border-blue-900 last:border-0">
                                    <span className="w-8 h-8 rounded-full bg-yellow-500 text-blue-950 flex items-center justify-center font-black text-xs">{idx + 5}</span>
                                    <span className="font-bold">{className}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Pathfinder Announcements */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-yellow-500 text-blue-950 rounded-2xl">
                            <Bell className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-blue-950">Unit Notices</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: 'Uniform Inspection', date: 'Next Sunday', content: 'Full Class A uniform is required for the upcoming district parade.' },
                            { title: 'Camporee Deposit', date: 'Due Friday', content: 'Final deposits for the regional camporee must be paid to the treasurer.' }
                        ].map((ann, i) => (
                            <div key={i} className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">{ann.date}</span>
                                <h4 className="text-xl font-bold text-blue-950 mb-2">{ann.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{ann.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activities Section */}
                <div className="bg-yellow-50 rounded-[3rem] p-12 mb-20">
                    <h2 className="text-3xl font-bold text-blue-950 mb-10 text-center">Upcoming Adventures</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Camping Trip', date: 'Monthly', location: 'Various Sites' },
                            { title: 'Drill & Drum Corps', date: 'Every Sunday', location: 'Church Grounds' },
                            { title: 'Camporee 2026', date: 'TBA', location: 'Regional Center' }
                        ].map((act, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-yellow-100">
                                <div className="flex items-center gap-2 text-yellow-600 font-bold mb-2">
                                    <Calendar className="w-4 h-4" /> {act.date}
                                </div>
                                <h4 className="text-xl font-bold mb-4">{act.title}</h4>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <MapPin className="w-4 h-4" /> {act.location}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery */}
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-bold text-blue-950">Pathfinder Memories</h2>
                    <button className="text-blue-700 font-bold flex items-center gap-2 hover:underline"><Camera className="w-5 h-5" /> All Photos</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {YOUTH_GALLERY.map((photo) => (
                        <div key={photo.id} className="aspect-square rounded-2xl overflow-hidden group cursor-zoom-in"
                            onClick={() => setSelectedImage({ url: photo.url, alt: photo.caption })}>
                            <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    ))}
                </div>

                <ImageModal
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    imageUrl={selectedImage?.url || ''}
                    imageAlt={selectedImage?.alt}
                />
            </div>
        </div>
    );
};

export default Pathfinders;
