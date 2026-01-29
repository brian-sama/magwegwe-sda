import React, { useState } from 'react';
import { Mic2, Music, Users, Mail, Heart } from 'lucide-react';
import ImageModal from '../components/ImageModal';
import Hero from '../components/Hero';
import { CHURCH_CHOIRS, MINISTRY_GROUPS } from '../constants';

const MusicMinistry: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="relative rounded-[3rem] overflow-hidden bg-purple-900 h-[450px] mb-20 shadow-2xl group cursor-zoom-in"
                    onClick={() => setSelectedImage({ url: '/images/pathfinder-1.jpg', alt: 'Music Ministry' })}>
                    <img
                        src="/images/pathfinder-1.jpg"
                        alt="Music Ministry"
                        className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507838596056-a756dfe5d0ec?auto=format&fit=crop&q=80&w=2000';
                        }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <span className="px-6 py-2 bg-yellow-500 text-blue-950 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-8">Praising Through Song</span>
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Music Ministry</h1>
                        <p className="text-xl md:text-2xl text-purple-100 max-w-2xl font-light">"Make a joyful noise unto the LORD, all the earth: make a loud noise, and rejoice, and sing praise." - Psalm 98:4</p>
                    </div>
                </div>

                {/* A Sanctuary of Song Section */}
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
                                { icon: Heart, title: 'Spiritual Depth', desc: 'Focusing on the message and meaning behind every lyric.' }
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

                {/* Church Music Structures - 5 Choirs Grid */}
                <div className="mb-32">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-4xl font-bold text-blue-950">Church Music Structures</h2>
                        <div className="h-1 flex-grow mx-8 bg-purple-100 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {CHURCH_CHOIRS.map((choir) => (
                            <div key={choir.id} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-50 hover:shadow-xl transition-all text-center group">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-700 group-hover:scale-110 transition-transform cursor-zoom-in overflow-hidden"
                                    onClick={() => setSelectedImage({ url: choir.image, alt: choir.name })}>
                                    <img src={choir.image} alt={choir.name} className="w-full h-full object-cover" 
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://picsum.photos/80/80?random=' + choir.id;
                                        }}
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-blue-950 mb-2">{choir.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-xs">{choir.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ministry Groups Section */}
                <div className="mb-32">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-4xl font-bold text-blue-950">Ministry Groups</h2>
                        <div className="h-1 flex-grow mx-8 bg-purple-100 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {MINISTRY_GROUPS.map((group) => (
                            <div key={group.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 hover:shadow-xl transition-all overflow-hidden group cursor-zoom-in"
                                onClick={() => setSelectedImage({ url: group.image, alt: group.name })}>
                                <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-200 group-hover:scale-105 transition-transform">
                                    <img src={group.image} alt={group.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-950 text-center">{group.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Choir Practice Schedule */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative rounded-[3rem] overflow-hidden h-[400px] shadow-2xl group cursor-zoom-in"
                        onClick={() => setSelectedImage({ url: '/images/pathfinder-2.jpg', alt: 'Choir Practice' })}>
                        <img
                            src="/images/pathfinder-2.jpg"
                            alt="Choir Practice"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://picsum.photos/600/400?random=30';
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent"></div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-blue-950 mb-8">Choir Practice Schedule</h2>
                        <div className="bg-purple-50 rounded-[2.5rem] border border-purple-100 p-8">
                            <p className="text-2xl font-bold text-blue-950 mb-4">Every Saturday</p>
                            <p className="text-xl text-gray-700 font-semibold mb-2 flex items-center gap-3">
                                <span className="text-purple-600">📍</span>
                                Choir practice: 16:00hrs–17:00hrs
                            </p>
                            <p className="text-gray-600 mt-6 leading-relaxed">
                                Join us every Saturday evening for an hour of dedicated choir practice. All are welcome to participate in praising God through song.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Service Request Section */}
                <div className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-blue-950 mb-8">Request Our Service</h2>
                        <div className="bg-yellow-50 rounded-[2.5rem] border border-yellow-100 p-8">
                            <p className="text-2xl font-bold text-blue-950 mb-6">Feel free to request any service</p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Whether you need music for a special event, a song for a particular celebration, or just want to book our choir for your occasion, we're here to serve.
                            </p>
                            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl">
                                <Mail className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-600 font-semibold">Contact us at</p>
                                    <p className="text-xl font-bold text-blue-950">music@magwegwe.sda</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-[3rem] overflow-hidden h-[400px] shadow-2xl group cursor-zoom-in"
                        onClick={() => setSelectedImage({ url: '/images/pathfinder-3.jpg', alt: 'Service Request' })}>
                        <img
                            src="/images/pathfinder-3.jpg"
                            alt="Service Request"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://picsum.photos/600/400?random=31';
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent"></div>
                    </div>
                </div>

                {/* Join Worship Team CTA */}
                <div className="bg-gradient-to-br from-purple-900 to-indigo-950 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-10 border border-white/20">
                            <Music className="w-10 h-10 text-purple-300" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-8">Join the Worship Team</h2>
                        <p className="text-xl text-purple-100 max-w-2xl mb-12 leading-relaxed">
                            Do you have a gift for singing or playing an instrument? We are always looking for dedicated individuals to join our music ministry and serve God through the gift of music.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="px-10 py-5 bg-white text-indigo-950 font-black rounded-2xl hover:bg-purple-50 transition-all">
                                Sign Up for Auditions
                            </button>
                            <button className="px-10 py-5 bg-white/10 text-white font-bold border border-white/20 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md">
                                View Rehearsal Schedule
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Modal */}
                {selectedImage && (
                    <ImageModal
                        imageUrl={selectedImage.url}
                        alt={selectedImage.alt}
                        onClose={() => setSelectedImage(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default MusicMinistry;
