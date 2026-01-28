
import React from 'react';
import { User, Users, ChevronDown } from 'lucide-react';

const Organogram: React.FC = () => {
    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-blue-950 mb-4">Church Organogram</h1>
                    <p className="text-xl text-gray-600">Our structural hierarchy and leadership flow.</p>
                </div>

                {/* District Level */}
                <div className="mb-20">
                    <div className="flex flex-col items-center">
                        <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">District Level</span>
                        <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-blue-900 text-center w-full max-w-md">
                            <div className="w-24 h-24 bg-blue-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                                <User className="w-12 h-12" />
                            </div>
                            <h2 className="text-2xl font-bold text-blue-950">Pr. M. Dube</h2>
                            <p className="text-blue-600 font-semibold mb-4 text-lg">District Pastor</p>
                            <div className="pt-4 border-t border-gray-100 text-sm text-gray-500">
                                Overseeing the Bulawayo West District
                            </div>
                        </div>

                        <div className="h-12 w-1 bg-blue-200 my-2"></div>
                        <ChevronDown className="text-blue-300 w-8 h-8 mb-2" />

                        {/* Churches under District */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
                            {['Magwegwe West', 'Magwegwe North', 'Pelandaba', 'Other Branch'].map((church, idx) => (
                                <div key={idx} className={`p-4 rounded-xl text-center font-bold text-sm shadow-sm ${church === 'Magwegwe West' ? 'bg-blue-900 text-white' : 'bg-white text-gray-600 border border-gray-200'}`}>
                                    {church} SDA
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Local Church Level */}
                <div className="relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-1 bg-blue-200"></div>
                    <div className="pt-12 flex flex-col items-center">
                        <span className="px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Local Church: Magwegwe West</span>

                        {/* Head Elder */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-yellow-500 text-center w-full max-w-md mb-12 relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-500 text-blue-950 px-4 py-1 rounded-full text-xs font-black uppercase">Administration</div>
                            <div className="w-20 h-20 bg-yellow-500 rounded-2xl flex items-center justify-center text-blue-950 mx-auto mb-4">
                                <Users className="w-10 h-10" />
                            </div>
                            <h2 className="text-xl font-bold text-blue-950">Elder J. Moyo</h2>
                            <p className="text-yellow-600 font-bold">First Elder / Head Elder</p>
                        </div>

                        {/* Departments Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                            <div className="flex flex-col items-center">
                                <div className="h-8 w-1 bg-gray-200"></div>
                                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 w-full text-center hover:border-blue-200 transition-colors">
                                    <h3 className="font-bold text-blue-900 mb-2">Church Board</h3>
                                    <p className="text-sm text-gray-500">Executive decision making body</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="h-8 w-1 bg-gray-200"></div>
                                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 w-full text-center hover:border-blue-200 transition-colors">
                                    <h3 className="font-bold text-blue-900 mb-2">Church Council</h3>
                                    <p className="text-sm text-gray-500">Departmental coordination</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="h-8 w-1 bg-gray-200"></div>
                                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 w-full text-center hover:border-blue-200 transition-colors">
                                    <h3 className="font-bold text-blue-900 mb-2">Clerk's Office</h3>
                                    <p className="text-sm text-gray-500">Membership & records</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="h-8 w-1 bg-gray-200"></div>
                                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 w-full text-center hover:border-blue-200 transition-colors">
                                    <h3 className="font-bold text-blue-900 mb-2">Treasury</h3>
                                    <p className="text-sm text-gray-500">Financial stewardship</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="h-8 w-1 bg-gray-200"></div>
                                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 w-full text-center hover:border-blue-200 transition-colors">
                                    <h3 className="font-bold text-blue-900 mb-2">Deaconate</h3>
                                    <p className="text-sm text-gray-500">Physical care & service</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="h-8 w-1 bg-gray-200"></div>
                                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 w-full text-center hover:border-blue-200 transition-colors">
                                    <h3 className="font-bold text-blue-900 mb-2">Departments</h3>
                                    <p className="text-sm text-gray-500">Music, SS, Youth, etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Note on Structure */}
                <div className="mt-20 p-8 bg-blue-900 rounded-[2.5rem] text-white text-center shadow-xl">
                    <h3 className="text-2xl font-bold mb-4">Servant Leadership</h3>
                    <p className="max-w-3xl mx-auto text-blue-100 leading-relaxed">
                        In the Seventh-day Adventist Church, leadership is based on the biblical model of servant leadership.
                        All officers are elected by the church members and serve for specified terms, working together
                        to fulfill the mission of the church.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Organogram;
