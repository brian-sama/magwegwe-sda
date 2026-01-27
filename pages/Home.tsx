
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Added Cross to the imports
import { ArrowRight, MapPin, Clock, Calendar, Heart, Quote, Sparkles, Cross } from 'lucide-react';
import { CHURCH_NAME } from '../constants';
import { GoogleGenAI } from "@google/genai";

const Home: React.FC = () => {
  const [inspiration, setInspiration] = useState<string>("Loading spiritual encouragement...");
  const [loadingInspiration, setLoadingInspiration] = useState(true);

  useEffect(() => {
    const fetchInspiration = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Provide a short, uplifting Christian daily inspiration message (max 30 words) for a Seventh-day Adventist church website. Include a brief Bible verse reference.",
          config: {
            systemInstruction: "You are a warm, encouraging church pastor writing daily notes of hope.",
            temperature: 0.8,
          }
        });
        setInspiration(response.text || "May God's peace be with you today as you seek His will. 'The Lord is my shepherd; I shall not want.' - Psalm 23:1");
      } catch (error) {
        console.error("Gemini failed:", error);
        setInspiration("Trust in the LORD with all thine heart; and lean not unto thine own understanding. - Proverbs 3:5");
      } finally {
        setLoadingInspiration(false);
      }
    };

    fetchInspiration();
  }, []);

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=-20.1473,28.4897`, '_blank');
      }, () => {
        // Fallback if permission denied
        window.open(`https://www.google.com/maps/search/?api=1&query=-20.1473,28.4897`, '_blank');
      });
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=-20.1473,28.4897`, '_blank');
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=2000" 
            alt="SDA Church Exterior" 
            className="w-full h-full object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-blue-950/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-[0.3em] rounded-full backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
            Seventh-day Adventist Church
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 tracking-tight">
            Magwegwe <span className="text-yellow-500">SDA</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-50 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 leading-relaxed font-light">
            Experiencing the joy of salvation through Christ and sharing the light of His truth in Bulawayo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link 
              to="/involved" 
              className="w-full sm:w-auto px-10 py-5 bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-black rounded-2xl transition-all shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-3 group text-lg"
            >
              Get Involved <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={handleGetLocation}
              className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl font-bold rounded-2xl transition-all border border-white/30 flex items-center justify-center gap-3 text-lg"
            >
              <MapPin className="w-5 h-5" /> Find Us Live
            </button>
          </div>
        </div>
      </section>

      {/* AI Daily Inspiration */}
      <section className="relative -mt-16 z-20 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-blue-50">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-blue-900 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/20">
              <Sparkles className="w-10 h-10 text-yellow-400" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 text-blue-700 font-bold uppercase tracking-widest text-xs mb-3">
                <Quote className="w-4 h-4" /> Daily Word of Encouragement
              </div>
              <p className={`text-xl md:text-2xl text-gray-800 font-serif italic leading-relaxed ${loadingInspiration ? 'animate-pulse' : ''}`}>
                "{inspiration}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times & Location */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Our Sabbath Schedule</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">Join us for a day of rest and worship</h2>
              
              <div className="grid gap-8">
                <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-700 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-colors">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Morning Session</h3>
                      <div className="space-y-1 text-gray-600">
                        <p className="flex justify-between w-full max-w-[200px]"><span>Sabbath School:</span> <span className="font-bold text-blue-900">09:00 AM</span></p>
                        <p className="flex justify-between w-full max-w-[200px]"><span>Divine Service:</span> <span className="font-bold text-blue-900">11:00 AM</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-yellow-200 hover:bg-yellow-50/30 transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-yellow-600 shadow-sm group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Afternoon Session</h3>
                      <div className="space-y-1 text-gray-600">
                        <p className="flex justify-between w-full max-w-[200px]"><span>Bible Study:</span> <span className="font-bold text-yellow-700">02:30 PM</span></p>
                        <p className="flex justify-between w-full max-w-[200px]"><span>Youth Programs:</span> <span className="font-bold text-yellow-700">04:00 PM</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden h-[500px] shadow-2xl border-8 border-white">
                <iframe 
                  title="Church Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.12345678!2d28.4897!3d-20.1473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb5500000000001%3A0x0000000000000000!2sMagwegwe%2C%20Bulawayo!5e0!3m2!1sen!2szw!4v1620000000000!5m2!1sen!2szw"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  className="brightness-90 hover:brightness-100 transition-all"
                ></iframe>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-900/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-50 text-blue-700 rounded-3xl flex items-center justify-center mb-8 rotate-3">
                <Calendar className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quarterly Events</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Stay updated with our divine calendar and special programs.</p>
              <Link to="/events" className="mt-auto px-6 py-3 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all flex items-center gap-2 group">
                View Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-blue-950 p-10 rounded-[2.5rem] shadow-2xl transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="w-20 h-20 bg-yellow-500 text-blue-950 rounded-3xl flex items-center justify-center mb-8 -rotate-3 z-10">
                <Heart className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white z-10">Building Progress</h3>
              <p className="text-blue-200 mb-8 leading-relaxed z-10">Witness the transformation of our sanctuary and contribute.</p>
              <Link to="/development" className="mt-auto px-6 py-3 bg-white text-blue-950 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 group z-10">
                Track Progress <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-50 text-green-700 rounded-3xl flex items-center justify-center mb-8 rotate-6">
                <Cross className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Evangelism</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Partner with us as we fulfill the Great Commission locally.</p>
              <Link to="/involved" className="mt-auto px-6 py-3 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-all flex items-center gap-2 group">
                Join Outreach <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
