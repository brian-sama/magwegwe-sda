
import React from 'react';
import { Book, Shield, Heart, Sparkles } from 'lucide-react';

const Doctrine: React.FC = () => {
    const beliefs = [
        { title: 'The Word of God', desc: 'The Holy Scriptures are the infallible revelation of His will.' },
        { title: 'The Trinity', desc: 'There is one God: Father, Son, and Holy Spirit.' },
        { title: 'The Great Controversy', desc: 'All humanity is now involved in a great controversy between Christ and Satan.' },
        { title: 'The Sabbath', desc: 'The seventh day is a day of rest, worship, and ministry in harmony with the teaching and practice of Jesus.' },
        { title: 'The Second Coming', desc: 'The second coming of Christ is the blessed hope of the church, the grand climax of the gospel.' },
        { title: 'Christian Behavior', desc: 'We are called to be a godly people who think, feel, and act in harmony with the principles of heaven.' }
    ];

    return (
        <div className="pt-24 pb-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-blue-950 mb-4">What We Believe</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Exploring the 28 Fundamental Beliefs of the Seventh-day Adventist Church.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {beliefs.map((belief, i) => (
                        <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                            <div className="w-14 h-14 bg-blue-50 text-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                                <Shield className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-blue-950 mb-3">{belief.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{belief.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-blue-950 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Deepen Your Study</h2>
                            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                                Seventh-day Adventists accept the Bible as their only creed and hold certain fundamental
                                beliefs to be the teaching of the Holy Scriptures. These beliefs, as set forth here,
                                constitute the church's understanding and expression of the teaching of Scripture.
                            </p>
                            <button className="px-8 py-4 bg-yellow-500 text-blue-950 font-black rounded-2xl hover:bg-yellow-400 transition-all flex items-center gap-2">
                                <Book className="w-5 h-5" /> Full 28 Beliefs (PDF)
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <Sparkles className="text-yellow-400 w-8 h-8 mb-4" />
                                <h4 className="font-bold mb-2">Grace Alone</h4>
                                <p className="text-sm text-blue-100">Saved through faith in Jesus Christ.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <Heart className="text-red-400 w-8 h-8 mb-4" />
                                <h4 className="font-bold mb-2">Love In Action</h4>
                                <p className="text-sm text-blue-100">Living out God's character daily.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctrine;
