
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Hammer, Coins, TrendingUp, Sparkles, Building2, Map, ShieldCheck } from 'lucide-react';
import ImageModal from '../components/ImageModal';

const Development: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  const churchPlan = {
    title: "Our Mission: The New Church Sanctuary",
    description: "Our vision is to build a modern, multi-purpose sanctuary that reflects the glory of God and serves as a beacon of hope in Magwegwe. This facility will feature increased seating capacity, a dedicated youth center, and community welfare offices.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000",
    features: [
      { icon: Building2, text: "1,500+ Seating Capacity" },
      { icon: Map, text: "Community Resource Center" },
      { icon: ShieldCheck, text: "Modern Infrastructure" }
    ]
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <span className="text-blue-700 font-bold tracking-widest uppercase text-sm mb-4 block">Building His House</span>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Development & Infrastructure</h1>
          <p className="text-xl text-gray-600">
            We are dedicated to improving our church facilities to better serve our congregation and community.
            Track our progress and see how your contributions are making a difference.
          </p>
        </div>

        {/* New Sanctuary Plan Section */}
        <div className="mb-32 bg-blue-50 rounded-[3rem] overflow-hidden border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-[400px] lg:h-auto relative cursor-zoom-in group" onClick={() => setSelectedImage({ url: churchPlan.image, alt: churchPlan.title })}>
              <img
                src={churchPlan.image}
                alt={churchPlan.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Future Vision</span>
              <h2 className="text-4xl font-bold text-blue-950 mb-6">{churchPlan.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {churchPlan.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {churchPlan.features.map((feature, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-4 bg-white rounded-2xl shadow-sm border border-blue-50">
                    <feature.icon className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="text-sm font-bold text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
              <button className="w-full sm:w-max px-10 py-5 bg-blue-900 text-white font-bold rounded-2xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20">
                View Architectural Plans
              </button>
            </div>
          </div>
        </div>

        {/* Progress Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
              <Hammer className="w-8 h-8" />
            </div>
            <div>
              <p className="text-gray-500 text-sm uppercase font-bold tracking-wider">Active Projects</p>
              <h3 className="text-3xl font-bold text-gray-900">3</h3>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <p className="text-gray-500 text-sm uppercase font-bold tracking-wider">Overall Progress</p>
              <h3 className="text-3xl font-bold text-gray-900">68%</h3>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
            <div className="w-16 h-16 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center flex-shrink-0">
              <Coins className="w-8 h-8" />
            </div>
            <div>
              <p className="text-gray-500 text-sm uppercase font-bold tracking-wider">Fundraising Goal</p>
              <h3 className="text-3xl font-bold text-gray-900">Phase 2</h3>
            </div>
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-16">
          {PROJECTS.map((project) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl h-[350px] cursor-zoom-in group"
                onClick={() => setSelectedImage({ url: project.image, alt: project.name })}
              >
                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-blue-950 shadow-lg">
                  {project.percentage === 100 ? 'Completed' : `${project.percentage}% Done`}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-950">{project.name}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm font-bold text-gray-900">
                    <span>Progress</span>
                    <span>{project.percentage}%</span>
                  </div>
                  <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-1000 ${project.percentage === 100 ? 'bg-green-500' : 'bg-blue-600'}`}
                      style={{ width: `${project.percentage}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </div>

                {project.percentage < 100 && (
                  <button className="px-8 py-3 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors">
                    Support This Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contribution Section */}
        <div className="mt-32 bg-blue-950 rounded-[3rem] p-12 lg:p-20 text-center text-white overflow-hidden relative">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Contribute to the Work</h2>
            <p className="text-blue-200 text-lg mb-10 leading-relaxed">
              Every brick, every tile, and every donation brings us closer to a better worship environment.
              Partner with us today in building the sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-500 text-blue-950 font-bold rounded-full hover:bg-yellow-400 transition-all">
                Pledge Donation
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-bold border border-white/20 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm">
                View Bill of Quantities
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-800/50 rounded-full blur-3xl"></div>
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ''}
        imageAlt={selectedImage?.alt}
      />
    </div>
  );
};

export default Development;
