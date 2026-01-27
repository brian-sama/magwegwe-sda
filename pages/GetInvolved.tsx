
import React from 'react';
import { Cross, MessageCircle, Heart, Share2, Users, Flame, Globe, Zap } from 'lucide-react';

const GetInvolved: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Evangelism Hero */}
        <div className="relative rounded-[3rem] overflow-hidden mb-24 aspect-[21/9] flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
            alt="Outreach"
          />
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <div className="inline-flex p-4 bg-yellow-500 text-blue-950 rounded-full mb-8 animate-bounce shadow-lg shadow-yellow-500/20">
              <Flame className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">Fueling the Gospel Flame</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light max-w-2xl mx-auto leading-relaxed italic">
              "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses... to the ends of the earth." — Acts 1:8
            </p>
          </div>
        </div>

        {/* Our Focus */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-blue-700 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Commitment</span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-8">Four Streams of Evangelism</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Magwegwe SDA, we believe evangelism is not just an event, but a lifestyle. We've structured our outreach into four key areas where every member can find a place to serve.
          </p>
        </div>

        {/* Evangelism Streams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <div className="group p-12 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-blue-900 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-blue-900/10 group-hover:text-white/10 transition-colors">
              <Globe className="w-32 h-32" />
            </div>
            <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:text-blue-900 transition-all">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-blue-950 group-hover:text-white transition-colors">Community Bible Studies</h2>
            <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors">
              Opening doors and hearts through systematic Bible study in our neighborhood. Join our team of lay-instructors.
            </p>
            <ul className="space-y-3 mb-10 group-hover:text-blue-100 transition-colors">
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Door-to-door visitation</li>
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Small group home circles</li>
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Discovery Bible sets</li>
            </ul>
            <button className="px-8 py-3 bg-blue-900 text-white font-bold rounded-xl group-hover:bg-yellow-500 group-hover:text-blue-950 transition-all flex items-center gap-2">
              Volunteer to Teach <Share2 className="w-4 h-4" />
            </button>
          </div>

          <div className="group p-12 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-red-900 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-red-900/10 group-hover:text-white/10 transition-colors">
              <Heart className="w-32 h-32" />
            </div>
            <div className="w-16 h-16 bg-red-100 text-red-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:text-blue-900 transition-all">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-red-950 group-hover:text-white transition-colors">Health & Welfare</h2>
            <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-red-100 transition-colors">
              The "right arm" of the gospel—reaching people through their physical needs to touch their spiritual lives.
            </p>
            <ul className="space-y-3 mb-10 group-hover:text-red-100 transition-colors">
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Health expos and clinics</li>
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Food bank distribution</li>
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Community garden projects</li>
            </ul>
            <button className="px-8 py-3 bg-red-700 text-white font-bold rounded-xl group-hover:bg-yellow-500 group-hover:text-blue-950 transition-all flex items-center gap-2">
              Join Outreach <Share2 className="w-4 h-4" />
            </button>
          </div>

          <div className="group p-12 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-blue-950 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-blue-900/10 group-hover:text-white/10 transition-colors">
              <Users className="w-32 h-32" />
            </div>
            <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:text-blue-900 transition-all">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-blue-950 group-hover:text-white transition-colors">Public Campaigns</h2>
            <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-blue-100 transition-colors">
              Large-scale community meetings and evangelistic series held quarterly to proclaim the Three Angels' Messages.
            </p>
            <ul className="space-y-3 mb-10 group-hover:text-blue-100 transition-colors">
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Event coordination</li>
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Music and ushering</li>
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Technical support</li>
            </ul>
            <button className="px-8 py-3 bg-blue-900 text-white font-bold rounded-xl group-hover:bg-yellow-500 group-hover:text-blue-950 transition-all flex items-center gap-2">
              Support the Effort <Share2 className="w-4 h-4" />
            </button>
          </div>

          <div className="group p-12 bg-gray-50 rounded-[3rem] border border-gray-100 hover:bg-green-900 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-green-900/10 group-hover:text-white/10 transition-colors">
              <Share2 className="w-32 h-32" />
            </div>
            <div className="w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 group-hover:text-blue-900 transition-all">
              <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-green-950 group-hover:text-white transition-colors">Literature & Digital</h2>
            <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-green-100 transition-colors">
              Sharing the truth through printed pages and digital spaces. Reach thousands through your mobile device or a simple tract.
            </p>
            <ul className="space-y-3 mb-10 group-hover:text-green-100 transition-colors">
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Social media evangelism</li>
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Tract distribution squads</li>
              <li className="flex items-center gap-2 text-sm font-medium"><Zap className="w-4 h-4 text-yellow-500" /> Web content ministry</li>
            </ul>
            <button className="px-8 py-3 bg-green-800 text-white font-bold rounded-xl group-hover:bg-yellow-500 group-hover:text-blue-950 transition-all flex items-center gap-2">
              Start Sharing <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Commitment Form Section */}
        <div className="bg-blue-950 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-500 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Will You <span className="text-yellow-500">Go</span> For Him?</h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed font-light">
                The harvest is truly plentiful, but the laborers are few. We are looking for passionate hearts to join our mission teams in Magwegwe and beyond.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-yellow-500 text-blue-950 rounded-full flex items-center justify-center font-black">1</div>
                  <p className="font-medium">Free training sessions every Sunday afternoon</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-yellow-500 text-blue-950 rounded-full flex items-center justify-center font-black">2</div>
                  <p className="font-medium">Resources and materials provided by the church</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 bg-yellow-500 text-blue-950 rounded-full flex items-center justify-center font-black">3</div>
                  <p className="font-medium">Mentorship for new evangelism volunteers</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-2xl">
              <h3 className="text-2xl font-bold text-blue-950 mb-8 text-center">Evangelism Interest Form</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">WhatsApp / Phone</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+263 ..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2 uppercase tracking-wide">Primary Call</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                    <option>Bible Studies & Visitation</option>
                    <option>Health Missionary Work</option>
                    <option>Digital Evangelism</option>
                    <option>Literature Ministry</option>
                    <option>Campaign Logistics</option>
                  </select>
                </div>
                <button className="w-full py-5 bg-blue-900 text-white font-bold rounded-2xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 uppercase tracking-[0.2em]">
                  Send Interest
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
