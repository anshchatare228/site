import React from 'react';

export default function Services() {
    return (
        <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto">

                {/* Top Tag & Main Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 border border-blue-100">
                        <span>✂</span>
                        <span>Specialisations</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                        Advanced Orthopaedic Care
                    </h1>
                    <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
                        Comprehensive orthopaedic services from sports injuries to complex joint replacement — all under one roof.
                    </p>
                </div>

                {/* Top Grid: Service Cards & Signature Robotic Surgery Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

                    {/* Card 1: Knee Replacement */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between transition hover:shadow-md">
                        <div>
                            <div className="text-blue-500 text-xl mb-4">
                                {/* Simulated icon using path or inline icon style */}
                                <span className="inline-block p-2 bg-blue-50 rounded-lg">✂</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Knee Replacement</h3>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                                Total and partial knee replacement using robotic-assisted precision for optimal implant alignment and faster recovery.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                                Robotic-Assisted
                            </span>
                            <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">
                                Minimally Invasive
                            </span>
                        </div>
                    </div>

                    {/* Card 2: Hip Replacement */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between transition hover:shadow-md">
                        <div>
                            <div className="text-emerald-500 text-xl mb-4">
                                <span className="inline-block p-2 bg-emerald-50 rounded-lg">⚡</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Hip Replacement</h3>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                                Anterior and posterior approach hip replacements with computer navigation for accurate positioning.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">
                                Computer-Guided
                            </span>
                            <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                                Same-Day Discharge
                            </span>
                        </div>
                    </div>

                    {/* Card 3: Signature Robotic Surgery Component */}
                    <div className="bg-teal-700 text-white rounded-2xl p-6 shadow-md md:col-span-2 lg:col-span-1 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-teal-200">
                                <span className="text-xs font-semibold tracking-widest uppercase">
                                    Signature Procedure
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Robotic Surgery</h3>
                            <p className="text-xs sm:text-sm text-teal-100 leading-relaxed mb-6">
                                State-of-the-art robotic orthopaedic surgery for unmatched precision in joint replacement procedures. Sub-millimetre accuracy reduces revision rates by up to 40%.
                            </p>

                            {/* Bullet Points */}
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

                        {/* CTA Button */}
                        <button className="w-full bg-white text-slate-900 font-semibold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-50 transition active:scale-[0.98]">
                            <span>📅</span> Book Robotic Surgery Consult
                        </button>
                    </div>

                    {/* Card 4: Sports Medicine */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between transition hover:shadow-md">
                        <div>
                            <div className="text-orange-500 text-xl mb-4">
                                <span className="inline-block p-2 bg-orange-50 rounded-lg">🔥</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Sports Medicine</h3>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                                ACL reconstruction, meniscus repair, and shoulder stabilisation for athletes of all levels.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">
                                ACL Repair
                            </span>
                            <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">
                                Arthroscopy
                            </span>
                        </div>
                    </div>

                    {/* Card 5: Spine Surgery */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between transition hover:shadow-md">
                        <div>
                            <div className="text-purple-500 text-xl mb-4">
                                <span className="inline-block p-2 bg-purple-50 rounded-lg">⇅</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Spine Surgery</h3>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                                Minimally invasive spine procedures for disc herniation, spinal stenosis, and deformity correction.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">
                                Minimally Invasive
                            </span>
                            <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                                Disc Repair
                            </span>
                        </div>
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
