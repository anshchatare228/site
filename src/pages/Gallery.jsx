import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";

import { ArrowLeft, ChevronLeft, ChevronRight, Eye, Film } from 'lucide-react';
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
import clinicalVideo from "../assets/ClinicalVideo.mp4"
import img1 from "../assets/IMG_5689.JPG.jpeg"
import img2 from "../assets/IMG_5999.PNG"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"
import vid1 from "../assets/vid1.mp4"
import vid2 from "../assets/vid2.mp4"
import vid3 from "../assets/vid3.mp4"
import vid4 from "../assets/vid4.mp4"



const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // or simply remove this line
    });
  }, []);

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
      src: Phamphlet,
    },
    // {
    //   id: 3,
    //   type: 'image',
    //   category: 'clinical',
    //   title: 'Intraoperative Alignment View',
    //   desc: 'Surgical field photo illustrating robotic alignment accuracy.',
    //   isGraphic: true,
    //   src: clinicalImage
    // },
    // {
    //   id: 4,
    //   type: 'video',
    //   category: 'clinical',
    //   title: 'Robotic Joint Resection Footage',
    //   desc: 'Live screen feed recorded from the robotic arm console.',
    //   isGraphic: true,
    //   src: clinicalVideo
    // },
    {
      id: 5,
      type: 'image',
      category: 'educational',
      title: 'Stages of Osteoarthritis Breakdown',
      desc: 'Visual chart illustrating the progressive deterioration of joint spaces.',
      src: img2,
    },
    {
      id: 6,
      type: 'image',
      category: 'educational',
      title: 'Avascular Necrosis Breakdown',
      desc: 'Visual chart illustrating the progressive death of bone tissue in the hip due to lack of blood supply.',
      src: google2,
    },
    {
      id: 7,
      type: 'image',
      category: 'educational',
      title: 'Radiographic Evaluation of the Femoral Head',
      desc: 'X-ray imagery showing advanced structural degradation and flattening of the hip joint.',
      src: google3,
    },
    {
      id: 8,
      type: 'image',
      category: 'educational',
      title: 'Total Hip Arthroplasty Components',
      desc: 'Exploded anatomical diagram showcasing the plastic liner, femoral head, and femoral stem assembly.',
      src: google4,
    },
    {
      id: 9,
      type: 'image',
      category: 'educational',
      title: 'Stages of Osteoarthritis Breakdown',
      desc: 'Visual chart illustrating the progressive deterioration of joint spaces.',
      src: google5,
    },
    {
      id: 10,
      type: 'image',
      category: 'educational',
      title: 'Stages of Osteoarthritis Breakdown',
      desc: 'Visual chart illustrating the progressive deterioration of joint spaces.',
      src: img1,
    },
    {
      id: 11,
      type: 'image',
      category: 'educational',
      title: 'Stages of Osteoarthritis Breakdown',
      desc: 'Visual chart illustrating the progressive deterioration of joint spaces.',
      src: img3,
    },
    {
      id: 9,
      type: 'image',
      category: 'educational',
      title: 'Stages of Osteoarthritis Breakdown',
      desc: 'Visual chart illustrating the progressive deterioration of joint spaces.',
      src: img4,
    },
    {
      id: 9,
      type: 'image',
      category: 'educational',
      title: 'Stages of Osteoarthritis Breakdown',
      desc: 'Visual chart illustrating the progressive deterioration of joint spaces.',
      src: google2,
    },
    {
      id: 4,
      type: 'video',
      category: 'clinical',
      title: 'Robotic Joint Resection Footage',
      desc: 'Live screen feed recorded from the robotic arm console.',
      isGraphic: false,
      src: vid1
    },
    {
      id: 4,
      type: 'video',
      category: 'clinical',
      title: 'Robotic Joint Resection Footage',
      desc: 'Live screen feed recorded from the robotic arm console.',
      isGraphic: false,
      src: vid2
    },
    {
      id: 4,
      type: 'video',
      category: 'clinical',
      title: 'Robotic Joint Resection Footage',
      desc: 'Live screen feed recorded from the robotic arm console.',
      isGraphic: false,
      src: vid3
    },
    {
      id: 4,
      type: 'video',
      category: 'clinical',
      title: 'Robotic Joint Resection Footage',
      desc: 'Live screen feed recorded from the robotic arm console.',
      isGraphic: false,
      src: vid4
    },
    // {
    //   id: 9,
    //   type: 'image',
    //   category: 'educational',
    //   title: 'Stages of Osteoarthritis Breakdown',
    //   desc: 'Visual chart illustrating the progressive deterioration of joint spaces.',
    //   src: google5,
    // },
  ];

  const filteredItems = activeFilter === 'all'
    ? mediaItems
    : mediaItems.filter(item => item.category === activeFilter);
  const selectedMedia = selectedMediaIndex === null ? null : filteredItems[selectedMediaIndex];

  const openMedia = (index) => setSelectedMediaIndex(index);
  const closeMedia = () => setSelectedMediaIndex(null);
  const showPrevious = () => setSelectedMediaIndex((currentIndex) => (
    currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1
  ));
  const showNext = () => setSelectedMediaIndex((currentIndex) => (
    currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1
  ));

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24">
      {/* 1. Header Back Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Website
          </button>
          <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Dr. Shubham Tungenwar</span>
        </div>
      </div>

      {/* 2. Title Block */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-green-600 bg-green-50 px-3 py-1 rounded-full">
          Clinical Insights
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight leading-tight">
          Gallery
        </h1>
      </div>

      {/* 3. Media Grid (3 columns) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={`${item.id}-${item.src}`}
              onClick={() => openMedia(index)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail Layer */}
              <div className="relative aspect-square bg-gray-900 overflow-hidden">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    poster={clinicalImage}
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.isGraphic ? 'blur-md brightness-50' : ''
                      }`}
                  />
                )}

                {/* Icon Overlay Toggles */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                  {item.type === 'video' ? (
                    <div className="bg-green-600 text-white p-3 rounded-full shadow-lg">
                      <Film className="w-5 h-5" />
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
            </div>
          ))}
        </div>
      </div>

      {/* 4. Lightbox Modal Overlay (Triggers when item is clicked) */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">

            {/* Close Button */}
            <button
              onClick={closeMedia}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full z-50 text-xs font-bold border border-white/10 cursor-pointer transition-colors"
            >
              Close
            </button>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous media"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-3 rounded-full z-50 border border-white/10 cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next media"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-3 rounded-full z-50 border border-white/10 cursor-pointer transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
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
    </div>
  );
};

export default GalleryPage;