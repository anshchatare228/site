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
            icon: <Trophy className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />,
            title: "SICOT 2022 – Top 10 Global Paper",
            description: 'Research paper "Arthroscopic Transosseous Anchorless Suture Repair of Rotator Cuff" selected as Top 10 out of 500 global submissions at SICOT International Congress 2022, Kuala Lumpur, Malaysia.'
        },
        {
            icon: <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />,
            title: "Best Papers Session – World Congress",
            description: 'Presented in the prestigious "Best Papers Session" at the World Congress — one of only two Indian delegates to receive this distinction that year.'
        },
        {
            icon: <Medal className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />,
            title: "Vice Chancellor's Certificate of Merit",
            description: "Ranked 2nd in the State of Maharashtra in the final MS Orthopaedics examination by Maharashtra University of Health Sciences (MUHS)."
        },
        {
            icon: <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />,
            title: "GMC Registered (UK)",
            description: "Registered with the General Medical Council, United Kingdom. MMC Reg No: 2019/04/2112."
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
        <section className="bg-slate-50 py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans text-slate-800 antialiased">
            {/* Header Tabs Area */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
                <button className="flex items-center gap-2 text-slate-600 border border-slate-200 px-4 py-2 rounded-full bg-white shadow-sm text-sm font-medium hover:bg-slate-100 transition">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    EDUCATION & CREDENTIALS
                </button>
            </div>

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
                    <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8 border-b pb-2">
                        ACADEMIC QUALIFICATIONS
                    </h3>

                    <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-10">
                        {qualifications.map((q, idx) => (
                            <div key={idx} className="relative group">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[35px] top-1 bg-blue-600 text-white rounded-full p-1.5 shadow-md flex items-center justify-center z-10">
                                    <GraduationCap className="w-4 h-4" />
                                </span>

                                {/* Content Header */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {q.degree}
                                    </h4>
                                    <span className="text-emerald-500 font-bold text-sm bg-emerald-50 px-2.5 py-0.5 rounded-md inline-block self-start sm:self-auto">
                                        {q.year}
                                    </span>
                                </div>

                                {/* Institution & Location */}
                                <p className="text-slate-700 font-semibold mt-1 text-sm md:text-base leading-snug">
                                    {q.institution}
                                </p>

                                {q.location && (
                                    <p className="text-slate-400 text-xs flex items-center gap-1 mt-1">
                                        <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                                        {q.location}
                                    </p>
                                )}

                                {/* Inner Highlight/Context Boxes */}
                                {q.highlight && (
                                    <div className="mt-3 bg-amber-50/60 border border-amber-200/70 rounded-lg p-3 text-xs md:text-sm text-amber-800 leading-relaxed font-medium">
                                        {q.highlight}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: International Recognition & Expertise */}
                <div className="lg:col-span-5 space-y-12">

                    {/* Section: International Recognition */}
                    <div>
                        <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6 border-b pb-2">
                            INTERNATIONAL RECOGNITION
                        </h3>
                        <div className="space-y-4">
                            {recognitions.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition flex gap-4 items-start"
                                >
                                    <div className="bg-blue-50 p-2 rounded-lg">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-base mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section: Areas of Expertise */}
                    <div>
                        <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6 border-b pb-2">
                            AREAS OF EXPERTISE
                        </h3>
                        <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm space-y-3">
                            {expertises.map((exp, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700 text-sm md:text-base font-medium leading-normal">
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
