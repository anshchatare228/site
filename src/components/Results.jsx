import React from 'react';
import { Scissors, Calendar, Heart, Cpu } from 'lucide-react';

export default function Results() {
  const stats = [
    {
      icon: <Scissors className="w-6 h-6 text-blue-600" />,
      number: "1000+",
      label: "Surgeries Performed",
      subtext: "Successful orthopaedic procedures"
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      number: "10+",
      label: "Years Experience",
      subtext: "Across India and the United Kingdom"
    },
    {
      icon: <Heart className="w-6 h-6 text-blue-600" fill="currentColor" />,
      number: "98%",
      label: "Patient Satisfaction",
      subtext: "Based on post-operative surveys"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1E56A0] via-[#167D7F] to-[#29A19C] py-5 px-4 sm:px-6 lg:px-8 text-white font-sans text-center flex flex-col items-center">
      {/* Header text layout */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-wide font-serif mb-4">
          Results That Speak
        </h2>
        <p className="text-blue-50/90 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Over a decade of surgical excellence, measured in outcomes that matter.
        </p>
      </div>

      {/* Numerical statistics metric matrix */}
      <div className="max-w-7xl flex justify-center gap-10">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg transition-transform hover:-translate-y-1 duration-300"
          >
            {/* Visual Icon Container */}
            <div className="mb-4 p-1">
              {stat.icon}
            </div>

            {/* Core Metrics */}
            <div className="text-slate-900 font-bold text-4xl md:text-5xl tracking-tight mb-2">
              {stat.number}
            </div>

            {/* Decoded Metadata Label */}
            <div className="text-slate-800 font-bold text-sm md:text-base mb-1">
              {stat.label}
            </div>

            {/* Subtle Auxiliary Subtext */}
            <div className="text-slate-400 text-xs md:text-sm font-medium leading-snug">
              {stat.subtext}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
