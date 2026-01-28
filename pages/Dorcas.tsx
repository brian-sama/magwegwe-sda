import React, { useState } from 'react';
import { Heart, HandHelping, Home, Utensils, Shirt, Sparkles, MessageCircle } from 'lucide-react';
import ImageModal from '../components/ImageModal';
import Hero from '../components/Hero';
import Breadcrumbs from '../components/Breadcrumbs';

const Dorcas: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

    const services = [
        { icon: Utensils, title: 'Food Distribution', desc: 'Providing nutritional support to vulnerable families in our community.' },
        { icon: Shirt, title: 'Clothing Ministry', desc: 'Collecting and distributing quality clothing to those in need.' },
        { icon: Home, title: 'Home Visitation', desc: 'Visiting the elderly and sick to provide companionship and assistance.' },
        { icon: MessageCircle, title: 'Counseling', desc: 'Offering spiritual and emotional support through difficult times.' }
    ];

    return (
        <div className="pt-20 pb-20">
            <Hero
                title="Dorcas & Community"
                subtitle="The hands and feet of Jesus, serving with love and compassion."
                backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=2000"
                icon={Heart}
                accentColor="text-red-500"
            />

            <Breadcrumbs items={[
                { label: 'Departments', path: '/departments' },
                { label: 'Dorcas Ministry', path: '/departments/dorcas' }
            ]} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-4xl font-bold text-blue-950 mb-8">Serving Like Dorcas</h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Inspired by the biblical Dorcas, who was "full of good works and almsdeeds," our ministry seeks to meet the practical needs of our community while sharing the hope of the gospel.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {services.map((service, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-red-50/50 rounded-3xl border border-red-100/50">
                                    <div className="w-12 h-12 bg-white text-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-950">{service.title}</h4>
                                        <p className="text-sm text-gray-600">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100 group cursor-zoom-in"
                            onClick={() => setSelectedImage({ url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000', alt: 'Community Service' })}>
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000"
                                alt="Community Service"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute -top-10 -right-10 bg-yellow-500 p-8 rounded-[2.5rem] shadow-2xl text-blue-950">
                            <HandHelping className="w-12 h-12" />
                        </div>
                    </div>
                </div>

                <ImageModal
                    isOpen={!!selectedImage}
                    onClose={() => setSelectedImage(null)}
                    imageUrl={selectedImage?.url || ''}
                    imageAlt={selectedImage?.alt}
                />

                {/* Ministry Announcements */}
                <div className="mb-32">
                    <h2 className="text-4xl font-bold text-blue-950 mb-12 flex items-center gap-4">
                        Service Notices <span className="h-1 w-20 bg-red-500 rounded-full"></span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 bg-red-900 text-white rounded-[3rem] shadow-xl shadow-red-900/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                <Shirt className="w-20 h-20" />
                            </div>
                            <span className="text-[10px] font-black text-red-300 uppercase tracking-widest mb-2 block">Urgent Need</span>
                            <h3 className="text-2xl font-bold mb-4">Winter Clothing Drive</h3>
                            <p className="text-red-100 leading-relaxed">We are collecting warm blankets and coats for the elderly in our community. Please drop off donations at the welfare office.</p>
                        </div>
                        <div className="p-8 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block">Weekly Schedule</span>
                            <h3 className="text-2xl font-bold text-blue-950 mb-4">Food Parcel Distribution</h3>
                            <p className="text-gray-600 leading-relaxed">Distribution will take place every Wednesday from 2:00 PM. Volunteers needed for sorting from 10:00 AM.</p>
                        </div>
                    </div>
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        { label: 'Families Supported', value: '150+', icon: Sparkles, color: 'text-blue-600' },
                        { label: 'Meals Provided', value: '500+', icon: Utensils, color: 'text-orange-600' },
                        { label: 'Volunteer Hours', value: '1000+', icon: Heart, color: 'text-red-600' }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 text-center">
                            <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-4`} />
                            <h3 className="text-4xl font-black text-blue-950 mb-2">{stat.value}</h3>
                            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-blue-950 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-red-600/10 to-transparent pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <h2 className="text-4xl md:text-6xl font-black mb-8">Touch a Life Today</h2>
                        <p className="text-xl text-blue-100 max-w-2xl mb-12 leading-relaxed">
                            Whether you want to donate supplies, your time, or financial resources, your contribution makes a direct impact on those who need it most in Magwegwe.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="px-10 py-5 bg-red-600 text-white font-black rounded-2xl hover:bg-red-500 transition-all shadow-xl shadow-red-600/20">
                                Donate Items
                            </button>
                            <button className="px-10 py-5 bg-white/10 text-white font-bold border border-white/20 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-md">
                                Volunteer for Outreach
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dorcas;
