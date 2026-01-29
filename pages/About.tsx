
import React from 'react';
import { Shield, Target, History } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';

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

        {/* Mission, Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="p-10 bg-blue-50 rounded-[2.5rem] border border-blue-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-2xl mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-blue-950">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To proclaim the everlasting gospel of Jesus Christ in the context of the three angels' messages of Revelation 14:6-12 to all people in our community.
            </p>
          </div>
          <div className="p-10 bg-yellow-50 rounded-[2.5rem] border border-yellow-100">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-700 rounded-2xl mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              In harmony with Bible prophecies, we see as the climax of God's plan the restoration of all His creation to full harmony with His perfect will and righteousness.
            </p>
          </div>
        </div>

        {/* Detailed History with Video */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-700 rounded-2xl mb-6">
              <History className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-blue-950 mb-4">Our Rich Heritage</h2>
            <p className="text-xl text-gray-600">A journey of faith through the decades.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative pl-10 border-l-4 border-blue-200">
                <div className="absolute -left-[14px] top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Makokoba Roots</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our journey began in the historic suburb of Makokoba, where the first seeds of Adventist faith were sown. It was a time of humble beginnings and fervent prayer.
                </p>
              </div>

              <div className="relative pl-10 border-l-4 border-blue-200">
                <div className="absolute -left-[14px] top-0 w-6 h-6 bg-blue-400 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Pelandaba Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  As the congregation grew, the light of truth moved to Pelandaba. The church expanded its reach, touching many lives and establishing a stronger community presence.
                </p>
              </div>

              <div className="relative pl-10 border-l-4 border-blue-200">
                <div className="absolute -left-[14px] top-0 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Magwegwe North Expansion</h3>
                <p className="text-gray-600 leading-relaxed">
                  God lead us further into Magwegwe North, where several branch Sabbath Schools were established, paving the way for the vibrant community we see today.
                </p>
              </div>

              <div className="relative pl-10 border-l-4 border-blue-600">
                <div className="absolute -left-[14px] top-0 w-6 h-6 bg-blue-900 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-2xl font-bold text-blue-950 mb-2">Magwegwe West - Our Current Home</h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, we stand strong in Magwegwe West, a beacon of hope and a center for divine worship. Our story is still being written as we wait for the glorious return of our Lord.
                </p>
              </div>
            </div>

            <div className="relative">
              <VideoPlayer
                title="Watch: The History of Magwegwe SDA Church"
                thumbnailUrl="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=1000"
              />
              <div className="mt-8 p-6 bg-blue-950 rounded-3xl text-white shadow-xl">
                <p className="italic text-lg font-light leading-relaxed">
                  "Remembering the way the Lord has led us in our past history."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
