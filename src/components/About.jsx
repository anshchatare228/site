import React, { useState, useRef, useEffect } from 'react';
import SVHN from "../assets/SVHN.mp4"
import DocPhoto from "../assets/docPhoto.png"
import { MessageSquareDot, PhoneCall, Calendar, Languages } from 'lucide-react';
import { motion } from "framer-motion";

export default function About() {
    const [lang, setLang] = useState('en');
    const videoRef = useRef(null);

    useEffect(() => {
        const vid = videoRef.current;
        if (!vid) return;
        vid.muted = true;
        vid.defaultMuted = true;
        const playPromise = vid.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
            });
        }
    }, []);

    const content = {
        en: {
            eyebrow: 'Robotic Joint Replacement & Sports Injury Specialist',
            nameLine1: 'Dr Shubham R',
            nameLine2: 'Tungenwar',
            title: 'Consultant Trauma & Orthopaedic Surgeon',
            subtitle: 'Specialist in Arthroscopy & Joint Replacement Surgery',
            registration: 'GMC Registered (UK)',
            description: 'Fellowship-trained from Liverpool, UK — specialising in Hip & Knee Replacement, Robotic Surgery, Arthroscopy & Sports Surgery, and Complex Trauma.',
            callNow: 'Call Now',
            whatsapp: 'WhatsApp',
            appointment: 'Appointment',
            surgeries: 'Surgeries',
            yearsExp: 'Years Exp.',
            locationTag: '📍 Nanded, MH',
            cardName: 'Dr Shubham R Tungenwar',
            cardBadges: 'MBBS · MS Ortho · DNB · MNAMS · Dip SICOT(Belgium) · MCh (Liverpool, UK)',
            cardSpecialist: 'Robotic Joint Replacement & Sports Injury Specialist',
            rating: 'Rating',
            translateLabel: 'मराठीत वाचा',
        },
        mr: {
            eyebrow: 'रोबोटिक सांधे प्रत्यारोपण आणि क्रीडा दुखापत तज्ज्ञ',
            nameLine1: 'डॉ शुभम आर',
            nameLine2: 'तुंगेनवार',
            title: 'सल्लागार ट्रॉमा आणि अस्थिव्यंग शल्यचिकित्सक',
            subtitle: 'आर्थ्रोस्कोपी आणि सांधे प्रत्यारोपण शस्त्रक्रियेतील तज्ज्ञ',
            registration: 'GMC नोंदणीकृत (यूके)',
            description: 'युनायटेड किंगडममधील लिव्हरपूल येथून फेलोशिपचे प्रशिक्षण घेतले असून, हिप आणि नी रिप्लेसमेंट, रोबोटिक सर्जरी, आर्थ्रोस्कोपी आणि स्पोर्ट्स सर्जरी, तसेच कॉम्प्लेक्स ट्रॉमा यांमध्ये विशेष प्राविण्य',
            callNow: 'आता कॉल करा',
            whatsapp: 'व्हॉट्सअ‍ॅप',
            appointment: 'अपॉइंटमेंट',
            surgeries: 'शस्त्रक्रिया',
            yearsExp: 'वर्षांचा अनुभव',
            locationTag: '📍 नांदेड, महाराष्ट्र',
            cardName: 'डॉ शुभम आर तुंगेनवार',
            cardBadges: 'MBBS · MS Ortho · DNB · MNAMS · MCh (लिव्हरपूल, यूके)',
            cardSpecialist: 'रोबोटिक सांधे प्रत्यारोपण आणि क्रीडा दुखापत तज्ज्ञ',
            rating: 'रेटिंग',
            translateLabel: 'Read in English',
        },
    };

    const t = content[lang];

    const medicalBadges = ['MBBS', 'MS Ortho', 'DNB Ortho', 'MNAMS' , 'Dip SICOT(Belgium)', 'MCh (Liverpool, UK)'];

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    return (
        <section className="relative w-full text-white py-18 px-4 sm:px-6 md:py-20 overflow-hidden">

            <video
                ref={videoRef}
                src={SVHN}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                className="absolute hidden sm:block inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#0c4095]/80 to-[#1a877f]/85 z-[1]"></div>

            <button
                onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
                className="absolute right-5 mt-5 lg:right-40 lg:top-20 z-20 flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full transition-all"
            >
                <Languages size={16} />
                {t.translateLabel}
            </button>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-10">

                {/* Right side*/}
                <motion.div initial={{ opacity: 0.5, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }} 
                    className="lg:col-span-5 flex flex-col items-center relative w-full lg:order-last mt-7 lg:mt-0">

                    {/* Translate Toggle Button — sits just above the photo */}

                    <div className="relative w-full max-w-[380px] lg:scale-125 aspect-[4/5] rounded-[2.5rem] overflow-hidden  shadow-2xl group">

                        {/* Image Placeholder Block */}
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/40 text-white/40 text-sm font-medium z-0">
                            <span>
                                <img src={DocPhoto} alt="" />
                            </span>
                        </div>

                        {/* Top Location Tag Badge Overlay */}
                        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md text-white text-[11px] font-semibold py-1 px-3 rounded-full flex items-center gap-1 z-10">
                            {t.locationTag}
                        </div>

                        {/* Bottom Floating Info Summary Panel Overlay */}
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-20 flex flex-col space-y-1.5 z-10">
                            <h3 className="text-xl sm:text-xl font-bold tracking-wide">
                                {t.cardName}
                            </h3>
                            <p className="text-[13px] text-white/70">
                                {t.cardBadges}
                            </p>
                            <div className="flex items-center gap-1 text-[11px] text-green-600 font-bold">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                {t.cardSpecialist}
                            </div>
                            <div className="flex items-center gap-1 text-xs pt-1">
                                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                                <span className="font-bold pl-1">5.0</span>
                                <span className="text-white/60 text-[11px]">{t.rating}</span>
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* Left Side */}
                <motion.div initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }} 
                    className="lg:col-span-7 flex flex-col space-y-6 lg:order-first">

                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-600"></span>
                        <span className="text-xs font-semibold tracking-widest uppercase opacity-95">
                            {t.eyebrow}
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-none font-['roboto']">
                        {t.nameLine1} <br />
                        <span className="text-green-600">{t.nameLine2}</span>
                    </h1>

                    <div className="space-y-1">
                        <p className="text-lg font-bold tracking-wide">
                            {t.title}
                        </p>
                        <p className="text-sm font-medium opacity-85">
                            {t.subtitle}
                        </p>
                        <p className="text-xs text-white/60 pt-1">
                            {t.registration}
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
                        {t.description}
                    </p>

                    {/* Action/Contact Call-To-Action Buttons */}
                    <div className="flex flex-col lg:flex-row gap-4 pt-4">
                        <a
                            href="tel:+919172000604"
                            className="flex items-center gap-2 bg-white text-[#1b5093] font-bold text-sm px-6 py-3 rounded-xl hover:scale-105 hover:bg-opacity-95 transition-all shadow-md duration-300"
                        >
                            <PhoneCall /> {t.callNow}
                        </a>
                        <a
                            href="https://wa.me/919172000604"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 bg-green-600 text-white font-bold text-sm px-6 py-3 hover:scale-105 rounded-xl hover:bg-opacity-95 transition-all shadow-md duration-300"
                        >
                            <MessageSquareDot /> {t.whatsapp}
                        </a>
                        <a href='#contact' className="flex items-center gap-2 bg-transparent border border-white/30 text-white hover:scale-105 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                            <Calendar /> {t.appointment}
                        </a>
                    </div>

                    <div className='w-full flex justify-center items-center'>
                        {/* Professional Milestone Statistics Footer */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-md">
                            <div>
                                <p className="text-4xl sm:text-3xl font-extrabold tracking-tight">1000+</p>
                                <p className="text-[13px] sm:text-xs font-bold uppercase tracking-wider text-white/60">{t.surgeries}</p>
                            </div>
                            <div>
                                <p className="text-4xl sm:text-3xl font-extrabold tracking-tight">10+</p>
                                <p className="text-[13px] sm:text-xs font-bold uppercase tracking-wider text-white/60">{t.yearsExp}</p>
                            </div>
                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};