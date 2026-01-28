import React, { useState } from 'react';
import { Mic2, Music, Users, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import ImageModal from '../components/ImageModal';
import Hero from '../components/Hero';
import Breadcrumbs from '../components/Breadcrumbs';

const MusicMinistry: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

    const choirs = [
        { name: 'Main Choir', description: 'Traditional hymns and classical choral pieces.', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800' },
        { name: 'Youth Praise', description: 'Contemporary worship songs and modern arrangements.', image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&auto=format&q=80&w=800' },
        { name: 'Primary Melodies', description: 'Our youngest voices praising God with joy.', image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&auto=format&q=80&w=800' },
        { name: 'Male Chorale', description: 'Rich harmonies from our dedicated men\'s group.', image: 'https://images.unsplash.com/photo-1559223608-acdec9806f6b?auto=format&fit=crop&auto=format&q=80&w=800' },
    ];

    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="relative rounded-[3rem] overflow-hidden bg-purple-900 h-[450px] mb-20 shadow-2xl group cursor-zoom-in"
                    onClick={() => setSelectedImage({ url: 'https://images.unsplash.com/photo-1507838596056-a756dfe5d0ec?auto=format&fit=crop&q=80&w=2000', alt: 'Music Ministry' })}>
                    <img
                        src="https://images.unsplash.com/photo-1507838596056-a756dfe5d0ec?auto=format&fit=crop&q=80&w=2000"
                        alt="Music Ministry Logo"
                        className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <span className="px-6 py-2 bg-yellow-500 text-blue-950 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8">Praising Through Song</span>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Music Ministry</h1>
                        <p className="text-xl md:text-2xl text-purple-100 max-w-2xl font-light">"Make a joyful noise unto the LORD, all the earth: make a loud noise, and rejoice, and sing praise." - Psalm 98:4</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100 group cursor-zoom-in"
                                onClick={() => setSelectedImage({ url: 'https://images.unsplash.com/photo-1514320296841-c67a93a6f174?auto=format&fit=crop&q=80&w=1000', alt: 'Choir Singing' })}>
                                <img
                                    src="https://images.unsplash.com/photo-1514320296841-c67a93a6f174?auto=format&fit=crop&q=80&w=1000"
                                    alt="Choir Singing"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute top-10 -left-10 bg-purple-600 p-6 rounded-3xl shadow-2xl text-white">
                                <Music className="w-10 h-10" />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-bold text-blue-950 mb-8">A Sanctuary of Song</h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Music is a vital part of our worship. It prepares the heart for the word of God and allows us to express our deepest gratitude and love for our Creator.
                        </p>
                        <ul className="space-y-6">
                            {[
                                { icon: Mic2, title: 'Vocal Excellence', desc: 'Training our voices to provide the best for God\'s service.' },
                                { icon: Music, title: 'Instrumental', desc: 'Skillful playing of piano, organ, and other instruments.' },
                                { icon: Sparkles, title: 'Spiritual Depth', desc: 'Focusing on the message and meaning behind every lyric.' }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-6">
                                    <div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-950">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mb-32">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-4xl font-bold text-blue-950">Ministry Announcements</h2>
                        <div className="h-1 flex-grow mx-8 bg-purple-100 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: 'Choir Rehearsal Change', date: 'This Thursday', content: 'Rehearsal will start at 6:00 PM instead of 5:30 PM this week only.' },
                            { title: 'New Hymnals Arrived', date: 'Available Now', content: 'The new SDA Hymnals have arrived. Please see the music director to pick up choir copies.' }
                        ].map((ann, i) => (
                            <div key={i} className="p-8 bg-purple-50 rounded-[2rem] border border-purple-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Mic2 className="w-16 h-16" />
                                </div>
                                <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest mb-2 block">{ann.date}</span>
                                <h3 className="text-xl font-bold text-blue-950 mb-3">{ann.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{ann.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-32">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {choirs.map((choir, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 hover:shadow-xl transition-all text-center group">
                                <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-700 group-hover:scale-110 transition-transform cursor-zoom-in overflow-hidden"
                                    onClick={() => setSelectedImage({ url: choir.image, alt: choir.name })}>
                                    <img src={choir.image} alt={choir.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-950 mb-3">{choir.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{choir.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900 to-indigo-950 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-10 border border-white/20">
                            <Headphones className="w-10 h-10 text-purple-300" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8">Join the Worship Team</h2>
                        <p className="text-xl text-purple-100 max-w-2xl mb-12 leading-relaxed">
                            Do you have a gift for singing or playing an instrument? We are always looking for dedicated individuals to join our music ministry.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="px-10 py-5 bg-white text-indigo-950 font-black rounded-2xl hover:bg-purple-50 transition-all flex items-center gap-2">
                                Sign Up for Auditions <Play className="w-5 h-5 fill-current" />
                            </button>
                            <button className="px-10 py-5 bg-white/10 text-white font-bold border border-white/20 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md">
                                View Rehearsal Schedule
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicMinistry;
