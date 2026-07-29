import React from 'react';

import DocPhoto from "../assets/docPhoto.png"
import { MessageSquareDot, PhoneCall, Calendar } from 'lucide-react';

export default function About() {
    const medicalBadges = ['MBBS', 'MS Ortho', 'DNB Ortho', 'MNAMS', 'MCh (Liverpool, UK)'];

    return (
        <section className="w-full bg-gradient-to-br from-[#0c4095] to-[#1a877f] text-white py-10 px-4 sm:px-6 md:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-10">

                {/* Right side*/}
                <div className="lg:col-span-5 flex justify-center relative w-full lg:order-last">
                    <div className="relative w-full max-w-[380px] lg:scale-125 aspect-[4/5] rounded-[2.5rem] overflow-hidden  shadow-2xl group">

                        {/* Image Placeholder Block */}
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/40 text-white/40 text-sm font-medium z-0">
                            <span>
                                <img src={DocPhoto} alt="" />
                            </span>
                        </div>

                        {/* Top Location Tag Badge Overlay */}
                        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md text-white text-[11px] font-semibold py-1 px-3 rounded-full flex items-center gap-1 z-10">
                            📍 Nanded, MH
                        </div>

                        {/* Bottom Floating Info Summary Panel Overlay */}
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-20 flex flex-col space-y-1.5 z-10">
                            <h3 className="text-xl sm:text-xl font-bold tracking-wide">
                                Dr. Shubham R. Tungenwar
                            </h3>
                            <p className="text-[13px] text-white/70">
                                MBBS · MS Ortho · DNB · MNAMS · MCh (Liverpool, UK)
                            </p>
                            <div className="flex items-center gap-1 text-[11px] text-green-600 font-bold">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                Robotic Joint Replacement & Sports Injury Specialist
                            </div>
                            <div className="flex items-center gap-1 text-xs pt-1">
                                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                                <span className="font-bold pl-1">5.0</span>
                                <span className="text-white/60 text-[11px]">Rating</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Left Side */}
                <div className="lg:col-span-7 flex flex-col space-y-6 lg:order-first">

                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-600"></span>
                        <span className="text-xs font-semibold tracking-widest uppercase opacity-95">
                            Consultant Orthopaedic Surgeon • Nanded
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-none font-['roboto']">
                        Dr Shubham R <br />
                        <span className="text-green-600">Tungenwar</span>
                    </h1>

                    <div className="space-y-1">
                        <p className="text-lg font-bold tracking-wide">
                            Consultant Trauma & Orthopaedic Surgeon
                        </p>
                        <p className="text-sm font-medium opacity-85">
                            Specialist in Arthroscopy & Joint Replacement Surgery
                        </p>
                        <p className="text-xs text-white/60 pt-1">
                            GMC Registered (UK) | MMC Reg No: 2019/04/2112
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {medicalBadges.map((badge, index) => (
                            <span
                                key={index}
                                className="bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>

                    <p className="text-base sm:text-lg opacity-90 leading-relaxed font-normal max-w-2xl pt-2">
                        Fellowship-trained Robotic Orthopaedic Surgeon from Liverpool, UK — specialising in Hip & Knee Replacement, Robotic Surgery, Arthroscopy, and Complex Trauma. Bringing world-class Orthopaedic care to Nanded, Maharashtra.
                    </p>

                    {/* Action/Contact Call-To-Action Buttons */}
                    <div className="flex flex-col lg:flex-row gap-4 pt-4">
                        <a
                            href="tel:+1234567890"
                            className="flex items-center gap-2 bg-white text-[#1b5093] font-bold text-sm px-6 py-3 rounded-xl hover:bg-opacity-95 transition-all shadow-md"
                        >
                            <PhoneCall/> Call Now
                        </a>
                        <a
                            href="https://wa.me"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-green-600 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-opacity-95 transition-all shadow-md"
                        >
                            <MessageSquareDot/> WhatsApp
                        </a>
                        <button className="flex items-center gap-2 bg-transparent border border-white/30 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/5 transition-all">
                            <Calendar/> Appointment
                        </button>
                    </div>

                    {/* Professional Milestone Statistics Footer */}
                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-md">
                        <div>
                            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight">1000+</p>
                            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/60">Surgeries</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl font-extrabold tracking-tight">10+</p>
                            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/60">Years Exp.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};