import React from 'react';
import { BookOpen, Users, Globe, Flame, Quote } from 'lucide-react';
import Hero from '../components/Hero';
import Breadcrumbs from '../components/Breadcrumbs';

const SabbathSchool: React.FC = () => {
    const objectives = [
        { icon: BookOpen, title: 'Bible Study', desc: 'Systematic study of the Holy Scriptures using various lesson guides for all ages.' },
        { icon: Users, title: 'Fellowship', desc: 'Building strong community bonds through small group discussions and social activities.' },
        { icon: Globe, title: 'Community Outreach', desc: 'Engaging with our local neighborhood to share the love and truth of God.' },
        { icon: Flame, title: 'World Mission', desc: 'Supporting the global mission of the SDA church through prayers and offerings.' }
    ];

    return (
        <div className="pt-20 pb-20">
            <Hero
                title="Sabbath School"
                subtitle="The heart of the church where study meets fellowship."
                backgroundImage="https://images.unsplash.com/photo-1504052434139-a8c5d80d2430?auto=format&fit=crop&q=80&w=2000"
                icon={BookOpen}
                accentColor="text-yellow-500"
            />

            <Breadcrumbs items={[
                { label: 'Departments', path: '/departments' },
                { label: 'Sabbath School', path: '/departments/sabbath-school' }
            ]} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Four Great Objectives */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div>
                        <h2 className="text-4xl font-bold text-blue-950 mb-8">Four Great Objectives</h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            The Sabbath School is the primary religious education program of the Church and has four key focuses that guide everything we do.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {objectives.map((obj, i) => (
                                <div key={i} className="p-6 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-white text-blue-900 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                                        <obj.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-blue-950 mb-2">{obj.title}</h4>
                                    <p className="text-sm text-gray-600">{obj.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-100 to-blue-100 rounded-[3rem] p-12 flex flex-col justify-center items-center text-center">
                        <BookOpen className="w-20 h-20 text-blue-900 mb-6" />
                        <div>
                            <p className="text-xs font-black text-blue-900 uppercase tracking-widest mb-2">Sabbath Morning</p>
                            <p className="text-2xl font-bold text-gray-900 mb-4">09:00 AM - 10:30 AM</p>
                        </div>
                        <p className="text-sm text-gray-600 italic mt-6">"Study to shew thyself approved unto God..."</p>
                        <p className="text-xs text-gray-500 mt-2">2 Timothy 2:15</p>
                    </div>
                </div>

                {/* Age Divisions */}
                <div className="bg-blue-950 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden mb-32">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-6 text-center lg:text-left">Explore Our Divisions</h2>
                        <p className="text-blue-100 text-lg mb-10 leading-relaxed text-center lg:text-left max-w-3xl">
                            We have classes tailored for every age group, from the tiniest toddlers to our seasoned senior members.
                            Each division uses age-appropriate curriculum to ensure the word of God is understood by all.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {['Cradle Roll & Kindergarten', 'Primary & Junior', 'Earliteen & Youth', 'Adult & Senior'].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                    <div className="w-10 h-10 bg-yellow-500 text-blue-950 rounded-full flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Announcements */}
                <div className="mb-32">
                    <h2 className="text-4xl font-bold text-blue-950 mb-12 flex items-center gap-4">
                        Sabbath School Notices <span className="h-1 w-20 bg-yellow-500 rounded-full"></span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Quarterly Lesson Review', date: 'Next Sabbath', content: 'Join us for a special combined review of this quarter\'s lessons.' },
                            { title: 'Teacher Training', date: 'Sunday 10AM', content: 'All division teachers are invited to a pedagogy workshop in the Youth Hall.' },
                            { title: 'Thirteenth Sabbath', date: 'March 29', content: 'Start preparing your divisional items for our special program.' }
                        ].map((ann, i) => (
                            <div key={i} className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                                <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-700 text-[10px] font-black rounded-full uppercase tracking-widest mb-4">{ann.date}</span>
                                <h3 className="text-xl font-bold text-blue-950 mb-3">{ann.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{ann.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inspirational Quote */}
                <div className="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-[3rem] p-12 lg:p-16 border border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <Quote className="w-12 h-12 text-yellow-500 mx-auto mb-6 opacity-50" />
                        <p className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed mb-6">
                            "The Sabbath school is an important branch of the missionary work, not only because it gives to young and old a knowledge of God's word, but because it awakens in them a love for its sacred truths, and a desire to study them for themselves."
                        </p>
                        <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">Ellen G. White</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SabbathSchool;
