import React, { useState } from 'react';
import { Users, Calendar, MapPin, Camera, Bell } from 'lucide-react';
import { YOUTH_GALLERY } from '../../constants';
import ImageModal from '../../components/ImageModal';

const SeniorYouth: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

    return (
        <div className="pt-24 pb-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-[3rem] overflow-hidden bg-blue-900 h-[400px] mb-20 cursor-zoom-in group"
                    onClick={() => setSelectedImage({ url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000', alt: 'Senior Youth' })}>
                    <img
                        src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000"
                        alt="Senior Youth"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                        <span className="px-4 py-1 bg-yellow-500 text-blue-950 rounded-full text-xs font-black uppercase tracking-widest mb-6">Ages 16-35</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Senior Youth</h1>
                        <p className="text-xl text-blue-100 max-w-2xl">Fueling a passion for Christ and a heart for service in our young adults.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-950 mb-8">About Our Ministry</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            The Senior Youth ministry at Magwegwe West SDA provides a space for young adults to grow spiritually,
                            socially, and professionally. We focus on building deep biblical foundations while addressing
                            the unique challenges faced by the youth in today's world.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                                <Calendar className="w-6 h-6 text-blue-700" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Vespers & Socials</h4>
                                    <p className="text-sm text-gray-500">Every Friday evening and one social per month.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                                <MapPin className="w-6 h-6 text-blue-700" />
                                <div>
                                    <h4 className="font-bold text-gray-900">Community Outreach</h4>
                                    <p className="text-sm text-gray-500">Regular mission trips and local service projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100">
                        <h2 className="text-3xl font-bold text-blue-950 mb-8">What We Do</h2>
                        <ul className="space-y-6">
                            {[
                                { title: 'AY Classes', desc: 'Developing specialized skills and spiritual leadership.' },
                                { title: 'Bible Studies', desc: 'Deep dives into the word of God and prophecy.' },
                                { title: 'Singing Groups', desc: 'Praising God through choral and contemporary music.' },
                                { title: 'Youth Fellowships', desc: 'Connecting with other young believers across the district.' }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <div className="w-6 h-6 bg-blue-900 text-white rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold">{idx + 1}</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Senior Youth Announcements */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-blue-900 text-white rounded-2xl">
                            <Bell className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-blue-950">Youth Bulletin</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: 'Entrepreneurship Seminar', date: 'Next Weekend', content: 'Join us for a workshop on starting a small business in the current economy.' },
                            { title: 'Global Youth Day', date: 'March 22', content: 'We will be visiting the local orphanage. Please coordinate with the AY leader for transport.' }
                        ].map((ann, i) => (
                            <div key={i} className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col justify-center">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">{ann.date}</span>
                                <h4 className="text-2xl font-bold text-blue-950 mb-3">{ann.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{ann.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gallery Preview */}
                <div>
                    <h2 className="text-3xl font-bold text-blue-950 mb-10">Captured Moments</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {YOUTH_GALLERY.map((photo) => (
                            <div key={photo.id} className="aspect-square rounded-2xl overflow-hidden shadow-md cursor-zoom-in group"
                                onClick={() => setSelectedImage({ url: photo.url, alt: photo.caption })}>
                                <img src={photo.url} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
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

export default SeniorYouth;
