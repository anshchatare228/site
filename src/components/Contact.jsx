import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contacts() {
  return (
    <section className="bg-slate-50 py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans antialiased text-slate-800">
      
      {/* Top Badge Button */}
      <div className="flex justify-center mb-4">
        <button className="flex items-center gap-2 border border-blue-200 px-4 py-1.5 rounded-full bg-blue-50/50 text-blue-600 text-xs font-bold tracking-wider uppercase shadow-sm">
          📅 Book an Appointment
        </button>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-[#0F2942] tracking-tight mb-3">
          Start Your Recovery Journey
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Reach out to schedule a consultation. Walk-ins welcome during OPD hours.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
        
        {/* Left Column: Contact Cards + Map Placeholder */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Clinic Address Card */}
          <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex-shrink-0">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider block uppercase mb-0.5">
                CLINIC ADDRESS
              </span>
              <h4 className="font-bold text-slate-900 text-sm md:text-base">
                Dr. Tungenwar Orthopaedic Clinic
              </h4>
              <p className="text-slate-500 text-xs md:text-sm mt-0.5 leading-snug">
                Near Civil Hospital, Nanded, Maharashtra 431601
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex-shrink-0">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider block uppercase mb-0.5">
                PHONE
              </span>
              <p className="font-bold text-slate-900 text-sm md:text-base">
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex-shrink-0">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider block uppercase mb-0.5">
                EMAIL
              </span>
              <p className="font-bold text-slate-900 text-sm md:text-base">
                appointments@drtungenwar.in
              </p>
            </div>
          </div>

          {/* OPD Hours Card */}
          <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex items-start gap-4">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex-shrink-0">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider block uppercase mb-0.5">
                OPD HOURS
              </span>
              <p className="font-bold text-slate-900 text-sm md:text-base">
                Mon - Sat: 9:30 AM - 2:00 PM
              </p>
              <p className="text-slate-400 text-xs mt-0.5 font-medium">
                Evening: <span className="text-slate-500 font-semibold">5:00 PM - 8:00 PM</span>
              </p>
            </div>
          </div>

          {/* Map Image Thumbnail Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm h-36 bg-slate-200 border border-slate-200 group">
            {/* Template image placeholder setup */}
            <div className="w-full h-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] bg-slate-100 flex items-center justify-center">
              <span className="text-xs text-slate-400 font-medium">Interactive Map Placeholder</span>
            </div>
            {/* Absolute Badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm shadow-sm py-1.5 px-3 rounded-full flex items-center gap-1.5 text-xs font-bold text-slate-800 border border-slate-100">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Nanded, Maharashtra
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Consultation Card */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl shadow-md overflow-hidden flex flex-col justify-between self-stretch">
          
          {/* Dynamic Upper Panel Gradient Banner */}
          <div className="bg-gradient-to-r from-[#1E56A0] to-[#167D7F] p-8 text-white">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">
              Book Your Consultation
            </h3>
            <p className="text-blue-50/80 text-xs md:text-sm max-w-md leading-relaxed mb-4">
              Get expert orthopaedic advice from Dr. Tungenwar. First consultation includes full assessment and personalised treatment plan.
            </p>
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Appointments available today
            </div>
          </div>

          {/* Action Trigger Interactive Links Block */}
          <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col justify-center">
            
            {/* Direct Phone Dial Button Link */}
            <a 
              href="tel:+919876543210" 
              className="w-full py-4 px-6 bg-[#1B4E8F] text-white rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#153e73] transition shadow-md group"
            >
              <Phone className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              Call: +91 98765 43210
            </a>

            {/* Direct WhatsApp API Forwarding Button Link */}
            <a 
              href="https://wa.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-4 px-6 bg-[#00A86B] text-white rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#008f5b] transition shadow-md group"
            >
              <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              WhatsApp for Appointment
            </a>

          </div>

          {/* Footer Consultation Hospitals Area */}
          <div className="p-6 md:p-8 bg-slate-50/50 border-t border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 tracking-wider block uppercase mb-3">
              ALSO CONSULTING AT
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                Government Medical College, Nanded
              </span>
              <span className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full text-xs font-semibold shadow-xs">
                Marathwada Superspeciality Hospital
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
