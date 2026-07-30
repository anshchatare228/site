import React, { useState } from 'react';
import { ArrowLeft, Eye, Film } from 'lucide-react'; 
import google1 from "../assets/google1.jpeg"
import google2 from "../assets/google2.jpeg"
import google3 from "../assets/google3.jpeg"
import google4 from "../assets/google4.jpeg"
import google5 from "../assets/google5.jpeg"
import google6 from "../assets/google6.jpeg"
import google7 from "../assets/google7.jpeg"
import google8 from "../assets/google8.jpeg"
import Phamphlet from "../assets/phamphlet.jpeg"
import Paper from "../assets/paper.jpeg"
import clinicalImage from "../assets/clinicalImage.jpeg"
import clinicalVideo from "../assets/clinicalVideo.mp4"

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Categories to segment the client's mixed content cleanly
  const filters = [
    { id: 'all', label: 'All Media' },
    { id: 'clinical', label: 'Clinical Cases' },
    { id: 'press', label: 'Media & Features' },
    { id: 'educational', label: 'Patient Education' },
  ];

  // Placeholder array containing your client's exact asset footprint
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      category: 'press',
      title: 'News Feature & Achievement',
      desc: 'Local newspaper feature covering advanced medical procedures.',
      src: Paper
    },
    {
      id: 2,
      type: 'image',
      category: 'educational',
      title: 'Hospital Informational Pamphlet',
      desc: 'Official medical guide outlining surgical care pathways and patient instructions.',
      src: Phamphlet, // Replace with your Pamphlet image
    },
    {
      id: 3,
      type: 'image',
      category: 'clinical',
      title: 'Intraoperative Alignment View',
      desc: 'Surgical field photo illustrating robotic alignment accuracy.',
      isGraphic: true,
      src: clinicalImage
    },
    {
      id: 4,
      type: 'video',
      category: 'clinical',
      title: 'Robotic Joint Resection Footage',
      desc: 'Live screen feed recorded from the robotic arm console.',
      isGraphic: true,
      src: clinicalVideo
    },
    {
      id: 5,
      type: 'image',
      category: 'educational',
      title: 'Stages of Osteoarthritis Breakdown',
      desc: 'Visual chart illustrating the progressive deterioration of joint spaces.',
      src: google1, // Replace with your Google pics / charts
    },
    {
      id: 6,
      type: 'image',
      category: 'educational',
      title: 'Avascular Necrosis Breakdown',
      desc: 'Visual chart illustrating the progressive death of bone tissue in the hip due to lack of blood supply.',
      src: google2, // Replace with your Google pics / charts
    },
    {
      id: 7,
      type: 'image',
      category: 'educational',
      title: 'Radiographic Evaluation of the Femoral Head',
      desc: 'X-ray imagery showing advanced structural degradation and flattening of the hip joint.',
      src: google3, // Replace with your Google pics / charts
    },
    {
      id: 8,
      type: 'image',
      category: 'educational',
      title: 'Total Hip Arthroplasty Components',
      desc: 'Exploded anatomical diagram showcasing the plastic liner, femoral head, and femoral stem assembly.',
      src: google4, // Replace with your Google pics / charts
    },
    {
      id: 9,
      type: 'image',
      category: 'educational',
      title: 'Stages of Osteoarthritis Breakdown',
      desc: 'Visual chart illustrating the progressive deterioration of joint spaces.',
      src: google5, // Replace with your Google pics / charts
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24">
      {/* 1. Header Back Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Website
          </a>
          <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Dr. Shubham Tungenwar</span>
        </div>
      </div>

      {/* 2. Hero Split Block (Intro text beside the main category view) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <span className="text-xs font-bold uppercase tracking-widest text-green-600 bg-green-50 px-3 py-1 rounded-full">
            Clinical Insights
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight leading-tight">
            Media & Case Study Gallery
          </h1>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            Welcome to the medical archives. This dedicated space contains a curated selection of patient educational graphics, published press releases, and active surgical insights managed under professional protocols.
          </p>
          <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200/60 rounded-xl p-3 mt-6 leading-normal font-medium">
            ⚠️ <strong>Viewer Discretion:</strong> The "Clinical Cases" section contains operating room assets intended solely for scientific documentation and surgical transparency.
          </p>

          {/* Filter Pills Sidebar */}
          <div className="flex flex-wrap lg:flex-col gap-2 mt-8 border-t border-gray-200 pt-6">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide text-left cursor-pointer transition-all ${
                  activeFilter === filter.id 
                    ? 'bg-green-700 text-white shadow-sm' 
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Media Presentation Template Grid */}
        <div className="lg:col-span-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedMedia(item)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Thumbnail Layer */}
                <div className="relative aspect-video bg-gray-900 overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      item.isGraphic ? 'blur-md brightness-50' : ''
                    }`}
                  />
                  
                  {/* Icon Overlay Toggles */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                    {item.type === 'video' ? (
                      <div className="bg-green-600 text-white p-3 rounded-full shadow-lg">
                        <Film className="w-5 h-5 fill-current" />
                      </div>
                    ) : (
                      <div className="bg-white/90 text-gray-900 p-2.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Graphic Content Warning Banner */}
                  {item.isGraphic && (
                    <div className="absolute bottom-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded tracking-wider shadow">
                      Graphic
                    </div>
                  )}
                </div>

                {/* Info Text Meta */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-green-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-4">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Lightbox Modal Overlay (Triggers when item is clicked) */}
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
                <video src={selectedMedia.src} controls autoPlay className="max-w-full max-h-[60vh] object-contain rounded-lg" />
              ) : (
                <img src={selectedMedia.src} alt={selectedMedia.title} className="max-w-full max-h-[60vh] object-contain rounded-lg" />
              )}
            </div>

            {/* Modal Bottom Metadata */}
            <div className="bg-white p-6 border-t border-gray-100">
              <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">
                Case File Details
              </span>
              <h2 className="text-xl font-bold text-gray-900 mt-1">{selectedMedia.title}</h2>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">{selectedMedia.desc}</p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
