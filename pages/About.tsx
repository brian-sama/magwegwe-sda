
import React from 'react';
import { LEADERS } from '../constants';
import { Shield, Target, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-blue-950 mb-4">Our Story & Mission</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover who we are, where we came from, and where God is leading us.
          </p>
        </div>

        {/* Mission, Vision, History Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-2xl mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To proclaim the everlasting gospel of Jesus Christ in the context of the three angels' messages of Revelation 14:6-12 to all people in our community.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-700 rounded-2xl mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              In harmony with Bible prophecies, we see as the climax of God's plan the restoration of all His creation to full harmony with His perfect will and righteousness.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-700 rounded-2xl mb-6">
              <History className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our History</h2>
            <p className="text-gray-600 leading-relaxed">
              Magwegwe SDA Church has been a beacon of light in the Bulawayo community for decades, growing from a small prayer group to a vibrant congregation.
            </p>
          </div>
        </div>

        {/* Leadership Hierarchy */}
        <div className="bg-gray-50 rounded-3xl p-12 lg:p-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Church Leadership</h2>
            <p className="text-gray-600">Committed servants leading our congregation.</p>
          </div>

          <div className="flex flex-col items-center">
            {/* Primary Leader */}
            <div className="mb-20 text-center group">
              <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-xl mb-6 mx-auto transition-transform group-hover:scale-[1.02]">
                <img src={LEADERS[0].image} alt={LEADERS[0].name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold text-blue-950">{LEADERS[0].name}</h3>
              <p className="text-yellow-600 font-semibold">{LEADERS[0].role}</p>
            </div>

            {/* Other Leaders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
              {LEADERS.slice(1).map((leader) => (
                <div key={leader.id} className="text-center group">
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg mb-6 transition-transform group-hover:scale-[1.02]">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white text-sm italic">{leader.bio || 'Faithful servant of the church.'}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-950">{leader.name}</h3>
                  <p className="text-gray-600">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
