import React from 'react';
import { GraduationCap, Trophy, Award, Medal, Activity, CheckCircle, ExternalLink, MapPin, Check } from 'lucide-react';

export default function Experience() {
    const qualifications = [
        {
            degree: "MBBS",
            year: "2010",
            institution: "Topiwala National Medical College & B.Y.L. Nair Charitable Hospital",
            location: "Mumbai, Maharashtra",
        },
        {
            degree: "MS (Orthopaedics)",
            year: "2015",
            institution: "Topiwala National Medical College & B.Y.L. Nair Charitable Hospital",
            location: "Mumbai, Maharashtra",
            highlight: "Ranked 2nd in Maharashtra – Vice Chancellor's Certificate of Merit, MUHS"
        },
        {
            degree: "DNB (Orthopaedics)",
            year: "2016",
            institution: "National Board of Examinations (NBE)",
            location: "New Delhi, India"
        },
        {
            degree: "MNAMS",
            year: "2016",
            institution: "National Academy of Medical Sciences",
            location: "India"
        },
        {
            degree: "MCh Trauma & Orthopaedics",
            year: "2019",
            institution: "NHS University Hospitals of Liverpool Group (Aintree & Broadgreen Hospitals)",
            location: "Liverpool, United Kingdom",
            highlight: "Liverpool – the crucible of orthopaedics, home to Hugh Owen-Thomas, Robert Jones & T.P. McMurray"
        },
        {
            degree: "Fellowship in Hip & Knee Surgery",
            year: "2019",
            institution: "University Hospitals of Liverpool",
            location: "Liverpool, United Kingdom"
        },
    ];

    const recognitions = [
        {
            icon: <Trophy className="w-5 h-5 text-zinc-6700 mt-1 flex-shrink-0" />,
            title: "SICOT 2022 – Top 10 Global Paper",
            description: 'Awarded International Diploma in Trauma & Orthopaedic Surgery at SICOT World Congress 2023 in Madrid, Spain for excellence in orthopaedic surgery.'
        },
        {
            icon: <Award className="w-5 h-5 text-zinc-6700 mt-1 flex-shrink-0" />,
            title: "Best Papers Session – World Congress",
            description: 'Best Papers Session – SICOT World Congress, Kuala Lumpur, Malaysia 2022 One of only two Indian delegates selected that year.'
        },
        {
            icon: <Medal className="w-5 h-5 text-zinc-6700 mt-1 flex-shrink-0" />,
            title: "Vice Chancellor's Certificate of Merit",
            description: "2nd in Maharashtra, MS Orthopaedics (MUHS)."
        },
        {
            icon: <CheckCircle className="w-5 h-5 text-zinc-6700 mt-1 flex-shrink-0" />,
            title: "GMC Registered (UK)",
            // description: "Reg No: 2019/04/2112."
        }
    ];

    const expertises = [
        "Hip & Knee Replacement Surgery",
        "Revision Hip & Knee Replacement Surgery",
        "Robotic knee Replacement Surgery",
        "Arthroscopic Surgery of the Knee and Shoulder",
        "Knee preservation Surgeries - high Tibial Osteotomies",
        "Stem Cell Therapy for Avascular Necrosis (AVN) of the Hip"
    ];

    return (
        <section className="bg-slate-50 pt-0 pb-10 px-4 md:px-8 max-w-7xl mx-auto font-sans text-slate-800 antialiased">
            {/* Main Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-4 font-serif">
                    World-Class Training, <span className="text-blue-600">Local Expertise</span>
                </h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                    Rigorous training across India's most prestigious medical institutions and the United Kingdom, bringing international standards of orthopaedic care to Nanded.
                </p>
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                {/* LEFT COLUMN: ACADEMIC QUALIFICATIONS (COMMENTED OUT) */}
                {/* 
        <div className="lg:col-span-7">
          ... (Qualifications Content HIdden)
        </div> 
        */}

                {/* Updated from lg:col-span-5 to lg:col-span-12 for full width */}
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                    {/* Section: International Recognition */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold tracking-widest text-black/80 font-serif uppercase border-b pb-1">
                            INTERNATIONAL RECOGNITION
                        </h3>
                        <div className="space-y-3">
                            {recognitions.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-slate-100 rounded-xl p-3.5 shadow-sm hover:shadow-md transition flex gap-3 items-start duration-300 hover:bg-teal-800 group"
                                >
                                    <div className="bg-black/5 p-1.5 rounded-lg group-hover:scale-105 group-hover:bg-black/50 group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-0.5 group-hover:text-white transition-all duration-300">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-500 text-xs leading-snug group-hover:text-white/80 transition-all duration-300">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section: Areas of Expertise */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold tracking-widest text-black/80 font-serif uppercase border-b pb-1">
                            AREAS OF EXPERTISE
                        </h3>
                        <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1">
                            {expertises.map((exp, idx) => (
                                <div key={idx} className="flex items-start gap-2.5">
                                    <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700 text-xs md:text-sm font-medium leading-normal">
                                        {exp}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
