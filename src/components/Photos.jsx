import React, { useState } from 'react';
import { Images, ArrowUpRight } from 'lucide-react';

import Phamphlet from "../assets/phamphlet.jpeg";
import Paper from "../assets/paper.jpeg";
import google1 from "../assets/google1.jpeg";
import { useSearchParams } from 'react-router';

const Photos = () => {
    const [selectedMedia, setSelectedMedia] = useState(null)
  const previewItems = [
    {
      id: 1,
      title: 'News Feature & Achievement',
      src: Paper,
    },
    {
      id: 2,
      title: 'Hospital Informational Pamphlet',
      src: Phamphlet,
    },
    {
      id: 3,
      title: 'Stages of Osteoarthritis Breakdown',
      src: google1,
    },
  ];

  return (
    <section className="bg-gray-50 py-9 md:pt-4 md:pb-18 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-green-600 bg-green-50 px-3 py-1 rounded-full">
              Clinical Insights
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-4 tracking-tight">
              Gallery
            </h2>
            <p className="text-gray-600 text-sm mt-2 max-w-xl leading-relaxed">
              A glimpse into press features, patient education material, and clinical documentation.
            </p>
          </div>

          <a
            href="/#gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors cursor-pointer"
          >
            View Full Gallery
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Preview Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => (
            <a
              key={item.id}
              href="#gallery"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 hover:shadow-md transition-all duration-300 cursor-pointer aspect-video block"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="bg-white/90 text-gray-900 p-2.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Images className="w-4 h-4" />
                </div>
              </div>

              {/* Title Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-xs font-semibold leading-snug">
                  {item.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {selectedMedia && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">

            {/* Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full z-50 text-xs font-bold border border-white/10 cursor-pointer transition-colors"
            >
              ✕ Close
            </button>

            {/* Media Canvas Area */}
            <div className="flex-1 bg-black flex items-center justify-center p-4 overflow-hidden min-h-[300px]">
              {selectedMedia.type === 'video' ? (
                <video src={selectedMedia.src} controls autoPlay className="max-w-full max-h-[80vh] object-contain rounded-lg" />
              ) : (
                <img src={selectedMedia.src} alt={selectedMedia.title} className="max-w-full max-h-[80vh] object-contain rounded-lg" />
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Photos;