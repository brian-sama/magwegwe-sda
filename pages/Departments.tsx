
import React from 'react';
import { Music, BookOpen, Heart, Users, Shield, Star, Hammer, Users2 } from 'lucide-react';
import MinistryCard from '../components/MinistryCard';

const Departments: React.FC = () => {
    const depts = [
        {
            title: 'Sabbath School',
            icon: BookOpen,
            color: 'bg-blue-100 text-blue-700',
            desc: 'The heart of the church for Bible study and fellowship.',
            path: '/departments/sabbath-school'
        },
        {
            title: 'Music Ministry',
            icon: Music,
            color: 'bg-purple-100 text-purple-700',
            desc: 'Choral masters and music directors leading us in praise.',
            path: '/departments/music'
        },
        {
            title: 'Dorcas / Community Services',
            icon: Heart,
            color: 'bg-red-100 text-red-700',
            desc: 'Reaching out to those in need within our community.',
            path: '/departments/dorcas'
        },
        {
            title: 'Youth Ministry',
            icon: Star,
            color: 'bg-yellow-100 text-yellow-700',
            desc: 'Adventurers, Pathfinders, and Senior Youth activities.',
            path: '/youth'
        },
        {
            title: 'Personal Ministries',
            icon: Users,
            color: 'bg-green-100 text-green-700',
            desc: 'Training and coordinating local missionary work.',
            path: '/involved'
        },
        {
            title: 'Deaconate',
            icon: Shield,
            color: 'bg-gray-100 text-gray-700',
            desc: 'Serving the physical and spiritual needs of the church.',
            path: '/organogram'
        }
    ];

    const councils = [
        {
            name: 'Music Council',
            leaders: ['Choral Master', 'Music Director', 'Pianists'],
            icon: Music
        },
        {
            name: 'Sabbath School Council',
            leaders: ['SS Superintendent', 'SS Secretary', 'Division Leaders'],
            icon: BookOpen
        },
        {
            name: 'Community Services',
            leaders: ['Dorcas Leader', 'AMO Leader', 'Adventist Possibility Ministries'],
            icon: Heart
        }
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                    <div>
                        <h1 className="text-5xl font-black text-blue-950 mb-4">Departments & Services</h1>
                        <p className="text-xl text-gray-500 max-w-xl">Every member a part, every part a purpose. Discover our various ministries.</p>
                    </div>
                    <div className="bg-yellow-500 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl shadow-yellow-500/20">
                        <Users2 className="text-blue-950 w-8 h-8" />
                        <div>
                            <p className="text-xs font-black text-blue-950/60 uppercase">Total Services</p>
                            <p className="text-xl font-black text-blue-950">20+ Active Areas</p>
                        </div>
                    </div>
                </div>

                {/* Departments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {depts.map((dept, i) => (
                        <MinistryCard
                            key={i}
                            title={dept.title}
                            description={dept.desc}
                            icon={dept.icon}
                            path={dept.path}
                            color={dept.color}
                        />
                    ))}
                </div>

                {/* Council Structure Section */}
                <div className="bg-blue-950 rounded-[4rem] p-12 lg:p-20 text-white shadow-2xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Council Structure</h2>
                        <p className="text-blue-200">The organizational framework behind our ministries.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {councils.map((council, idx) => (
                            <div key={idx} className="bg-white/5 rounded-[2rem] p-8 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center mb-6">
                                    <council.icon className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h4 className="text-xl font-bold mb-6 text-yellow-500">{council.name}</h4>
                                <ul className="space-y-4">
                                    {council.leaders.map((leader, lIdx) => (
                                        <li key={lIdx} className="flex items-center gap-3 text-blue-100">
                                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                                            {leader}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Departments;
