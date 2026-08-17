import React from 'react';
import { Scissors, Activity, Flame, MoveVertical, Cpu, Calendar, PenTool } from 'lucide-react'
import { motion } from "framer-motion";

export default function Services() {
    return (
        <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto">

                {/* Top Tag & Main Header */}
                <div className="text-center mb-12">
                    {/* <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 border border-blue-100">
                        <span> <PenTool size={17} /> </span>
                        <span>Specialisations</span>
                    </div> */}
                    <h1 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-3 tracking-wide">
                        Advanced Orthopaedic Care
                    </h1>
                    <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
                        Comprehensive orthopaedic services from sports injuries to complex joint replacement — all under one roof.
                    </p>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">

                        <motion.div initial={{ opacity: 0.5, x: -120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between transition duration-300 hover:shadow-md hover:scale-102">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-blue-500">
                                        <span className="inline-block p-2 bg-blue-50 rounded-lg">
                                            <Scissors className="w-5 h-5" />
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">Robotic Knee Replacement</h3>
                                </div>
                                <p className="text-xs sm:text-sm text-black/80 leading-relaxed mb-6">
                                    Total and partial knee replacement using top notch CORI robotic-assisted precision for optimal implant alignment and faster recovery.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">Robotic-Assisted</span>
                                <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">Minimally Invasive</span>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0.5, x: -120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                             className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between transition duration-300 hover:shadow-md hover:scale-102">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-emerald-500">
                                        <span className="inline-block p-2 bg-emerald-50 rounded-lg">
                                            <Activity className="w-5 h-5" />
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">Hip Replacement</h3>
                                </div>
                                <p className="text-xs sm:text-sm text-black/80 leading-relaxed mb-6">
                                    Advanced Direct Anterior and MIS Posterior approach hip replacements with computer navigation for accurate positioning.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">Computer-Guided</span>
                                <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">Same-Day Discharge</span>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0.5, x: -120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                             className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between transition duration-300 hover:shadow-md hover:scale-102">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-orange-500">
                                        <span className="inline-block p-2 bg-orange-50 rounded-lg">
                                            <Flame className="w-5 h-5" />
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">Arthroscopic Surgery of the Knee and Shoulder</h3>
                                </div>
                                <p className="text-xs sm:text-sm text-black/80 leading-relaxed mb-6">
                                        
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">ACL Reconstruction</span>
                                <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">Arthroscopy</span>
                                <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">Keyhole surgery</span>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0.5, x: -120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between transition duration-300 hover:shadow-md hover:scale-102">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-purple-500">
                                        <span className="inline-block p-2 bg-purple-50 rounded-lg">
                                            <MoveVertical className="w-5 h-5" />
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">PRP Injections</h3>
                                </div>
                                <p className="text-xs sm:text-sm text-black/80 leading-relaxed mb-6">
                                    Regenerative treatments using Platelet-Rich Plasma (PRP) injections to accelerate healing, restore joint function for arthritis, tendonitis, and sports injuries.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">Minimally Invasive</span>
                                {/* <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">Disc Repair</span> */}
                            </div>
                        </motion.div>

                    </div>

                    <div className="bg-teal-700 text-white rounded-2xl p-6 shadow-md flex flex-col justify-between h-full">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-teal-200">
                                <Cpu className="w-4 h-4" />
                                <span className="text-xs font-semibold tracking-widest uppercase">Signature Procedure</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 font-['roboto']">Robotic Knee Replacement Surgery</h3>
                            <p className="text-xs sm:text-sm text-teal-100 leading-relaxed mb-6">
                                State-of-the-art robotic orthopaedic surgery for unmatched precision in joint replacement procedures using cori surgical system. Sub-millimetre accuracy reduces revision rates by up to 40%.
                            </p>

                            <ul className="space-y-2 mb-8 text-xs sm:text-sm text-teal-50">
                                <li className="flex items-center gap-2">
                                    <span className="text-teal-300">•</span> Sub-mm Accuracy
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-teal-300">•</span> Faster Recovery
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-teal-300">•</span> Reduced Pain
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-teal-300">•</span> Lower Revision Rate
                                </li>
                            </ul>
                        </div>

                        <a href='#contact' className="w-full bg-white text-slate-900 font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-black/70 hover:text-white duration-500 transition active:scale-[0.98]">
                            <Calendar className="w-4 h-4" />
                            Book Robotic Surgery Consult
                        </a>
                    </div>

                </div>



                {/* Bottom Full-Width Card: Fracture & Trauma Care */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 transition hover:shadow-md">
                    <div className="flex items-start gap-4">
                        <div className="text-red-500 text-xl mt-0.5">
                            <span className="inline-block p-2 bg-red-50 rounded-lg">🛡️</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Fracture & Trauma Care</h3>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
                                Emergency and elective fracture management with advanced fixation techniques for optimal bone healing. Available for complex polytrauma cases.
                            </p>
                        </div>
                    </div>

                    {/* Side Tags */}
                    <div className="flex flex-row sm:flex-col gap-2 justify-start sm:items-end shrink-0">
                        <span className="text-[11px] font-medium text-red-600 bg-red-50 px-2.5 py-1 rounded-md whitespace-nowrap">
                            Emergency Care
                        </span>
                        <span className="text-[11px] font-medium text-red-600 bg-red-50 px-2.5 py-1 rounded-md whitespace-nowrap">
                            Complex Fractures
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
