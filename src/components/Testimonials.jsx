import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, MapPin, Scissors } from 'lucide-react';
import Test1 from "../assets/test1.png"
import Test2 from "../assets/test2.png"
import Test3 from "../assets/test3.png"
import Test4 from "../assets/test4.png"

export default function Testimonial() {
    // Array containing dummy image paths alongside data matching the current UI state
    const testimonials = [
        {
            quote: "My mother recently underwent a left total hip replacement by Dr. Shubham Tungenwar and we had an excellent experience. She was walking within 24 hours, and her pain was very well managed. A special thanks to Dr. Shubham Tungenwar for being so professional and reassuring throughout.",
            name: "Ramesh Kulkarni",
            location: "Nanded, Maharashtra",
            tag: "Robotic Knee Replacement",
            avatarImg: Test1,
            mainImg: Test1
        },
        {
            quote: "Dr. Shubham’s expertise in arthroscopy is impressive. He performed my meniscus surgery with precision and care. I appreciated how he walked me through the entire process. The positive environment in the clinic really helped ease my nerves.",
            name: "Sunita Deshmukh",
            location: "Latur, Maharashtra",
            tag: "Hip Replacement Surgery",
            avatarImg: Test2,
            mainImg: Test2
        },
        {
            quote: "I received treatment for my shoulder injury, and I was very happy with the care I received. Dr. Shubham Tungenwar took the time to explain everything in detail. The staff were friendly and made the experience much more enjoyable.",
            name: "Prashant Pawar",
            location: "Aurangabad, Maharashtra",
            tag: "ACL Reconstruction",
            avatarImg: Test3,
            mainImg: Test3
        },
        {
            quote: "My recovery after the hip replacement has been surprisingly fast. The doctor’s expertise was evident, and the care was top-notch.",
            name: "Meena Shinde",
            location: "Nanded, Maharashtra",
            tag: "Partial Knee Replacement",
            avatarImg: Test4,
            mainImg: Test4
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const current = testimonials[currentIndex];

    return (
        <section className="bg-slate-50 py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans antialiased text-slate-800">

            {/* Category Section Header Tag */}
            <div className="flex justify-center items-center gap-2 mb-3">
                <span className="text-amber-500 text-sm">★</span>
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                    PATIENT STORIES
                </span>
            </div>

            {/* Main Core Title */}
            <h2 className="text-center text-2xl md:text-4xl font-serif text-[#0F2942] tracking-tight mb-12">
                Trusted by <span className="text-blue-600">Patients Across Maharashtra</span>
            </h2>

            {/* Main Combined Card Element */}
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[340px]">

                {/* Left Side: Dynamic Image Template Layout Container */}
                <div className="relative md:col-span-4 min-h-[240px] md:min-h-full bg-slate-200">
                    <img
                        src={current.mainImg}
                        alt={current.name}
                        className="w-full h-full object-cover"
                    />
                    {/* Tag Overlay Label */}
                    {/* <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-white text-xs font-medium border border-white/20">
                        <Scissors className="w-3.5 h-3.5 transform rotate-90 text-white" />
                        {current.tag}
                    </div> */}
                </div>

                {/* Right Side: Informational Context Body Block */}
                <div className="md:col-span-8 p-6 md:p-10 flex flex-col justify-between">
                    <div>
                        {/* Star Metrics Render Loop */}
                        <div className="flex gap-1 mb-5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                            ))}
                        </div>

                        {/* Core Testimonial Quote Field */}
                        <p className="text-slate-700 text-sm md:text-[17px] font-medium leading-relaxed mb-6">
                            "{current.quote}"
                        </p>
                    </div>

                    {/* Bottom Metagroup: Author Info + Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-50">

                        {/* Profile Avatar + Identity Subtext Group */}
                        <div className="flex items-center gap-3">
                            <img
                                src={current.avatarImg}
                                alt={current.name}
                                className="w-10 h-10 rounded-full object-cover border border-slate-100"
                            />
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">
                                    {current.name}
                                </h4>
                                <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5 font-medium">
                                    <MapPin className="w-3 h-3 text-slate-400" />
                                    {current.location}
                                </p>
                            </div>
                        </div>

                        {/* Pagination Controls Area */}
                        <div className="flex items-center gap-4 self-end sm:self-auto">
                            <span className="text-xs font-semibold text-slate-400 tracking-wide">
                                0{currentIndex + 1} <span className="text-slate-300 font-normal">/</span> 0{testimonials.length}
                            </span>

                            <div className="flex gap-2">
                                <button
                                    onClick={handlePrev}
                                    className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition shadow-sm bg-white"
                                    aria-label="Previous testimonial"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
                                    aria-label="Next testimonial"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Row of Avatar Indicators at Bottom */}
            <div className="flex justify-center items-center gap-3 mt-8">
                {testimonials.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`transition-all duration-300 rounded-full overflow-hidden ${currentIndex === idx
                                ? 'ring-2 ring-blue-600 ring-offset-2 scale-110 p-0.5'
                                : 'opacity-40 hover:opacity-80 scale-100'
                            }`}
                    >
                        <img
                            src={item.avatarImg}
                            alt=""
                            className="w-9 h-9 rounded-full object-cover"
                        />
                    </button>
                ))}
            </div>

        </section>
    );
}
