import React, { useState } from 'react';
import { Heart, Star, Cloud, Music, Camera, Bell } from 'lucide-react';
import ImageModal from '../../components/ImageModal';

const Adventurers: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-[3rem] overflow-hidden bg-green-500 h-[400px] mb-20 cursor-zoom-in group"
                    onClick={() => setSelectedImage({ url: 'https://images.unsplash.com/photo-1545643444-6019a8685117?auto=format&fit=crop&q=80&w=2000', alt: 'Adventurers' })}>
                    <img
                        src="https://images.unsplash.com/photo-1545643444-6019a8685117?auto=format&fit=crop&q=80&w=2000"
                        alt="Adventurers"
                        className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <div className="bg-white/90 backdrop-blur-md p-10 rounded-[3rem] shadow-2xl">
                            <span className="px-4 py-1 bg-green-600 text-white rounded-full text-xs font-black uppercase tracking-widest mb-6">Ages 4-9</span>
                            <h1 className="text-5xl md:text-6xl font-black text-blue-950 mb-6 tracking-tight">Adventurer Club</h1>
                            <p className="text-xl text-gray-700 max-w-lg mx-auto leading-relaxed">Helping children and parents build a strong foundation of faith through play and discovery.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img src="/images/pathfinder-1.jpg" alt="Activity" className="rounded-3xl shadow-lg rotate-3 cursor-zoom-in" onClick={() => setSelectedImage({ url: '/images/pathfinder-1.jpg', alt: 'Adventurer Activity' })} />
                            <img src="/images/pathfinder-2.jpg" alt="Activity" className="rounded-3xl shadow-lg -rotate-3 mt-12 cursor-zoom-in" onClick={() => setSelectedImage({ url: '/images/pathfinder-2.jpg', alt: 'Adventurer Activity' })} />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-blue-950 mb-8">Nurturing Young Hearts</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10">
                            The Adventurer Club is designed to strengthen parent-child relationships while leading
                            the little ones to Jesus. Through age-appropriate activities, we explore God's world
                            and learn about His love.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Star, title: 'Bible Gems', color: 'text-yellow-500' },
                                { icon: Cloud, title: 'Nature Fun', color: 'text-blue-500' },
                                { icon: Music, title: 'Songs of Joy', color: 'text-pink-500' },
                                { icon: Heart, title: 'Kindness Acts', color: 'text-red-500' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                    <span className="font-bold text-gray-800">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Classes Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-blue-950 mb-10 text-center">Adventure Classes</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {['Little Lamb', 'Eager Beaver', 'Busy Bee', 'Sunbeam', 'Builder', 'Helping Hand'].map((grade, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-green-50 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4 font-black">
                                    {idx + 1}
                                </div>
                                <h4 className="font-bold text-blue-950 text-xs uppercase tracking-tight">{grade}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Adventurer Announcements */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-green-600 text-white rounded-2xl">
                            <Bell className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-blue-950">Little Notices</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: 'Family Fun Day', date: 'Next Sunday', content: 'Bring your favorites snacks and games for our annual family bonding day at the park.' },
                            { title: 'Craft Supplies Needed', date: 'Ongoing', content: 'We are looking for empty toilet paper rolls and colorful bottle caps for our next project.' }
                        ].map((ann, i) => (
                            <div key={i} className="p-8 bg-green-50 rounded-[2.5rem] border border-green-100">
                                <span className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-2 block">{ann.date}</span>
                                <h4 className="text-xl font-bold text-blue-950 mb-2">{ann.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{ann.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enrollment Box */}
                <div className="bg-gradient-to-br from-green-600 to-green-700 p-12 lg:p-20 rounded-[3.5rem] text-center text-white shadow-2xl shadow-green-600/20">
                    <h2 className="text-4xl font-black mb-8">Join the Adventure Today!</h2>
                    <p className="text-green-50 text-xl max-w-2xl mx-auto mb-10">
                        Open for all children aged 4-9 in the Magwegwe community. Parent participation is highly encouraged!
                    </p>
                    <button className="px-10 py-5 bg-white text-green-700 font-black rounded-full hover:scale-105 transition-transform shadow-lg">
                        Register Your Child
                    </button>
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

export default Adventurers;
