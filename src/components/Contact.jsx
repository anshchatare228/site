import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

import googleMaps from "../assets/maps.png"

export default function Contacts() {
  return (
    <section className=" py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans antialiased text-slate-800">

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
        <div className="lg:col-span-5 space-y-4 font-['roboto']">

          {/* Clinic Address Card */}
          <div className="bg-white border border-slate-100 p-2 rounded-2xl shadow-sm flex items-start gap-4">
            <div className=" p-2.5 rounded-xl border border-white flex-shrink-0">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-[13px] font-bold text-slate-400 tracking-wider block uppercase mb-0.5">
                HOSPITAL ADDRESS
              </span>
              <h4 className="font-bold text-slate-900 text-sm md:text-base">
                SHREE VENKATESHWARA CENTER FOR JOINT REPLACEMENT, ARTHROSCOPY & TRAUMA
              </h4>
              <p className="text-slate-500 text-xs md:text-sm mt-0.5 leading-snug">
                Shree Venkateshwara Hospital, behind Kothari Complex, Shivaji Nagar, Gokul Nagar, Nanded, Maharashtra 431602
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white border border-slate-100 p-2 rounded-2xl shadow-sm flex items-start gap-4">
            <div className=" p-2.5 rounded-xl border border-white flex-shrink-0">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-[13px] font-bold text-slate-400 tracking-wider block uppercase mb-0.5">
                PHONE
              </span>
              <div className='flex flex-col lg:flex-row gap-4'>
                <p className="font-bold text-slate-900 text-sm md:text-base">
                  +91 9172000604
                </p>
                <p className="font-bold text-slate-900 text-sm md:text-base">
                  +91 02462-238816
                </p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white border border-slate-100 p-2 rounded-2xl shadow-sm flex items-start gap-4">
            <div className=" p-2.5 rounded-xl border border-white flex-shrink-0">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-[13px] font-bold text-slate-400 tracking-wider block uppercase mb-0.5">
                EMAIL
              </span>
              <a
                href="mailto:svshnanded@gmail.com"
                className="font-bold text-slate-900 text-sm md:text-base hover:text-blue-600 transition-colors cursor-pointer"
              >
                svshnanded@gmail.com
              </a>

            </div>
          </div>

          {/* OPD Hours Card */}
          <div className="bg-white border border-slate-100 p-2 rounded-2xl shadow-sm flex items-start gap-4">
            <div className=" p-2.5 rounded-xl border border-white flex-shrink-0">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-[13px] font-bold text-slate-400 tracking-wider block uppercase mb-0.5">
                OPD HOURS
              </span>
              <p className="font-bold text-slate-900 text-sm md:text-base">
                Mon - Sat: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Map Wrapper Card Container */}
          <a href="https://www.google.com/maps/place/%E2%9C%85%F0%9D%97%97%F0%9D%97%BF+%F0%9D%97%A6%F0%9D%97%B5%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B5%F0%9D%97%AE%F0%9D%97%BA+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%BB%F0%9D%97%B4%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%84%F0%9D%97%AE%F0%9D%97%BF+-+MS+DNB+Ortho+Dip+SICOT+MCh+Orth+UK+%7C+Joint+Replacement,+Arthroscopy+%26+Sports+Injury+Specialist/@19.1625806,77.304989,495m/data=!3m1!1e3!4m10!1m2!2m1!1stungenwar+orthopedic+clinic!3m6!1s0x3bd1d73bdbf25e7b:0xf9d56c1fd957d21c!8m2!3d19.1626301!4d77.3072922!15sCht0dW5nZW53YXIgb3J0aG9wZWRpYyBjbGluaWNaHSIbdHVuZ2Vud2FyIG9ydGhvcGVkaWMgY2xpbmljkgESb3J0aG9wZWRpY19zdXJnZW9u4AEA!16s%2Fg%2F11xnvn1207?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer" className=''>
            <div className="relative rounded-2xl overflow-hidden shadow-sm h-36 border border-slate-200 group w-full bg-slate-100">

              {/* 1. Background Screenshot Image Layout */}
              <img
                src={googleMaps}
                alt="Dr. Tungenwar Orthopaedic Clinic Location Map"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-300 pointer-events-none"
              />

              {/* 2. Soft Vignette Overlay to blend the button visually */}
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors pointer-events-none" />

              {/* 3. Absolute Action Trigger Redirection Button */}
              <div className="absolute inset-0 flex items-end justify-end">
                <div
                  href="https://www.google.com/maps/place/%E2%9C%85%F0%9D%97%97%F0%9D%97%BF+%F0%9D%97%A6%F0%9D%97%B5%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B5%F0%9D%97%AE%F0%9D%97%BA+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%BB%F0%9D%97%B4%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%84%F0%9D%97%AE%F0%9D%97%BF+-+MS+DNB+Ortho+Dip+SICOT+MCh+Orth+UK+%7C+Joint+Replacement,+Arthroscopy+%26+Sports+Injury+Specialist/@19.1625806,77.304989,495m/data=!3m1!1e3!4m10!1m2!2m1!1stungenwar+orthopedic+clinic!3m6!1s0x3bd1d73bdbf25e7b:0xf9d56c1fd957d21c!8m2!3d19.1626301!4d77.3072922!15sCht0dW5nZW53YXIgb3J0aG9wZWRpYyBjbGluaWNaHSIbdHVuZ2Vud2FyIG9ydGhvcGVkaWMgY2xpbmljkgESb3J0aG9wZWRpY19zdXJnZW9u4AEA!16s%2Fg%2F11xnvn1207?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/90 text-white font-bold text-xs py-2 px-4 rounded-xl shadow-md hover:bg-slate-800 backdrop-blur-sm transition-all flex items-center gap-1.5 active:scale-95 mb-2 mr-2"
                >
                  {/* Small Map Pin Vector Graphic */}
                  <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-red-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Open Directions Link
                </div>
              </div>

              {/* 4. Bottom-Left Location Sub-Badge */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm shadow-xs py-1 px-2.5 rounded-full flex items-center gap-1.5 text-[10px] font-extrabold text-slate-800 border border-slate-100 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Shivaji Nagar, Nanded
              </div>
            </div>
          </a>




        </div>

        {/* Right Column: Interactive Consultation Card */}
        <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl shadow-md overflow-hidden flex flex-col self-stretch">

          {/* Dynamic Upper Panel Gradient Banner */}
          <div className="bg-gradient-to-r from-[#1E56A0] to-[#167D7F] p-8 text-white">
            <h3 className="text-xl font-['roboto'] md:text-4xl font-bold tracking-tight mb-2">
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
          <div className="p-6 md:p-8 space-y-4 flex flex-col justify-center">
            
            <div className='flex flex-col justify-between items-center mb-10'>
              <p className='text-md md:text-3xl font-serif'>
                Excellence in Orthopaedic Surgery.
              </p>

              <p className='text-md md:text-3xl font-serif text-blue-700'>
                Trusted Care, Better Outcomes.
              </p>
            </div>

            {/* Direct Phone Dial Button Link */}
            <a
              href="tel:+919172000604"
              className="w-full py-4 px-6 md:mt-6 bg-[#1B4E8F] text-white rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#153e73] transition shadow-md group"
            >
              <Phone className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              Call +91 9172000604
            </a>

            {/* Direct WhatsApp API Forwarding Button Link */}
            <a
              href="https://wa.me/919172000604"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-[#00A86B] text-white rounded-xl font-bold text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#008f5b] transition shadow-md group"
            >
              <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              WhatsApp for Appointment
            </a>

          </div>

          {/* Footer Consultation Hospitals Area
          <div className="p-6 md:p-8 /50 border-t border-slate-100">
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
          </div> */}

        </div>

      </div>
    </section>
  );
}
