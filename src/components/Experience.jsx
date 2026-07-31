import React from 'react';
import {
    GraduationCap,
    Trophy,
    Award,
    Medal,
    Activity,
    CheckCircle,
    ExternalLink,
    MapPin,
    Check
} from 'lucide-react';

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
        {
            degree: "Fellowship in Robotic Knee Replacement Surgery",
            year: "2019",
            institution: "Depuy VELYST™ Robotic System Training",
            location: ""
        }
    ];

    const recognitions = [
        {
    icon: <Trophy className="w-5 h-5 text-zinc-6   700 mt-1 flex-shrink-0" />,
    title: "SICOT 2022 – Top 10 Global Paper",
    description: 'Rotator cuff repair paper selected Top 10 of 500+ submissions, Kuala Lumpur.'
},
{
    icon: <Award className="w-5 h-5 text-zinc-6700 mt-1 flex-shrink-0" />,
    title: "Best Papers Session – World Congress",
    description: 'One of only two Indian delegates selected that year.'
},
{
    icon: <Medal className="w-5 h-5 text-zinc-6700 mt-1 flex-shrink-0" />,
    title: "Vice Chancellor's Certificate of Merit",
    description: "2nd in Maharashtra, MS Orthopaedics (MUHS)."
},
{
    icon: <CheckCircle className="w-5 h-5 text-zinc-6  700 mt-1 flex-shrink-0" />,
    title: "GMC Registered (UK)",
    description: "Reg No: 2019/04/2112."
}   
    ];

    const expertises = [
        "Hip & Knee Replacement Surgery",
        "Revision Hip & Knee Replacement Surgery",
        "Robotic Joint Replacement Surgery",
        "Arthroscopic Surgery of the Knee and Shoulder",
        "Stem Cell Therapy for Avascular Necrosis (AVN) of the Hip"
    ];

    return (
        <section className="bg-slate-50 pt-0 pb-10 px-4 md:px-8 max-w-7xl mx-auto font-sans text-slate-800 antialiased">
            {/* Header Tabs Area */}
            {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
                <button className="flex items-center gap-2 text-slate-600 border border-slate-200 px-4 py-2 rounded-full bg-white shadow-sm text-sm font-medium hover:bg-slate-100 transition">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    EDUCATION & CREDENTIALS
                </button>
            </div> */}

            {/* Main Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-4 font-serif">
                    World-Class Training, <span className="text-blue-600">Local Expertise</span>
                </h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                    Rigorous training across India's most prestigious medical institutions and the United Kingdom,
                    bringing international standards of orthopaedic care to Nanded.
                </p>
            </div>

            {/* Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                {/* Left Column: Academic Qualifications */}
                <div className="lg:col-span-7">
                    <h3 className="text-lg font-bold tracking-widest text-black/80 font-serif uppercase mb-5 border-b pb-1">
                        ACADEMIC QUALIFICATIONS
                    </h3>
 
                    <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-6">
                        {qualifications.map((q, idx) => (
                            <div key={idx} className="relative group">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[38px] top-0.5 bg-blue-600 text-white rounded-full p-1 shadow-md flex items-center justify-center z-10">
                                    <GraduationCap size={20} />
                                </span>
 
                                {/* Content Header */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {q.degree}
                                    </h4>
                                    <span className="text-emerald-500 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded-md inline-block self-start sm:self-auto">
                                        {q.year}
                                    </span>
                                </div>
 
                                {/* Institution & Location */}
                                <p className="text-slate-700 font-semibold mt-0.5 text-xs md:text-sm leading-snug">
                                    {q.institution}
                                </p>
 
                                {/* {q.location && (
                                    <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
                                        <MapPin className="w-3 h-3 flex-shrink-0 text-slate-400" />
                                        {q.location}
                                    </p>
                                )} */}
 
                                {/* Inner Highlight/Context Boxes */}
                                {q.highlight && (
                                    <div className="mt-2 bg-amber-50/60 border border-amber-200/70 rounded-lg p-2.5 text-xs text-amber-800 leading-relaxed font-medium">
                                        {q.highlight}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
 
                {/* Right Column: International Recognition & Expertise */}
                <div className="lg:col-span-5 space-y-8">
 
                    {/* Section: International Recognition */}
                    <div>
                        <h3 className="text-lg font-bold tracking-widest text-black/80 font-serif uppercase mb-4 border-b pb-1">
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
                    <div>
                        <h3 className="text-lg font-bold tracking-widest text-black/80 font-serif uppercase mb-4 border-b pb-1">
                            AREAS OF EXPERTISE
                        </h3>
                        <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm space-y-2">
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
