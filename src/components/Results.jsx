import React from 'react';
import { Scissors, Calendar, Heart } from 'lucide-react';
import { motion } from "framer-motion";

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
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-wide font-serif mb-4">
          Results That Speak
        </h2>
        <p className="text-blue-50/90 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Over a decade of surgical excellence, measured in outcomes that matter.
        </p>
      </div>

      <div className="max-w-7xl flex flex-col lg:flex-row justify-center gap-10">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              x: idx === 0 ? -80 : idx === 2 ? 80 : 0,
              y: idx === 1 ? 0 : 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              // delay: idx * 0.15,
              ease: "easeOut",
            }}
            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-lg transition-all duration-300 group"
          >
            <div className="mb-4 p-1 group-hover:scale-80 duration-300">
              {stat.icon}
            </div>

            <div className="text-slate-900 font-bold text-4xl md:text-5xl tracking-tight mb-2 group-hover:scale-130 duration-300">
              {stat.number}
            </div>

            <div className="group-hover:scale-80 duration-300">
              <div className="text-slate-800 font-bold text-sm md:text-base mb-1">
                {stat.label}
              </div>

              <div className="text-slate-400 text-xs md:text-sm font-medium leading-snug">
                {stat.subtext}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}