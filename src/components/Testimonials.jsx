import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, MapPin, Scissors, Quote, MessageSquarePlus } from 'lucide-react';
// import Test1 from "../assets/test1.png"
// import Test2 from "../assets/test2.png"
// import Test3 from "../assets/test3.png"
// import Test4 from "../assets/test4.png"

// Google Maps review page for the clinic
const GOOGLE_REVIEW_URL =
    "https://search.google.com/local/writereview?placeid=ChIJe17y2zvX0TsRHNJX2R9s1fk";

export default function Testimonial() {
    // Array containing dummy image paths alongside data matching the current UI state
    const testimonials = [
        {
            quote: "My mother recently underwent a left total hip replacement by Dr. Shubham Tungenwar and we had an excellent experience. She was walking within 24 hours, and her pain was very well managed. A special thanks to Dr. Shubham Tungenwar for being so professional and reassuring throughout.",
            name: "Ramesh Kulkarni",
            location: "Nanded, Maharashtra",
            tag: "Hip Replacement Surgery",
            // avatarImg: Test1,
            // mainImg: Test1
        },
        {
            quote: "Dr. Shubham’s expertise in arthroscopy is impressive. He performed my meniscus surgery with precision and care. I appreciated how he walked me through the entire process. The positive environment in the clinic really helped ease my nerves.",
            name: "Sunita Deshmukh",
            location: "Latur, Maharashtra",
            tag: "meniscus surgery",
            // avatarImg: Test2,
            // mainImg: Test2
        },
        {
            quote: "I received treatment for my shoulder injury, and I was very happy with the care I received. Dr. Shubham Tungenwar took the time to explain everything in detail. The staff were friendly and made the experience much more enjoyable.",
            name: "Prashant Pawar",
            location: "Aurangabad, Maharashtra",
            tag: "Shoulder Surgery",
            // avatarImg: Test3,
            // mainImg: Test3
        },
        {
            quote: "My recovery after the hip replacement has been surprisingly fast. The doctor’s expertise was evident, and the care was top-notch.",
            name: "Meena Shinde",
            location: "Nanded, Maharashtra",
            tag: "Hip Replacement Surgery",
            // avatarImg: Test4,
            // mainImg: Test4
        }
    ];

    // Total slides = all testimonials + 1 closing "leave a review" slide
    const totalSlides = testimonials.length + 1;
    const reviewSlideIndex = testimonials.length; // last slide

    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('next');

    const handlePrev = () => {
        setDirection('prev');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setDirection('next');
        setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    const goTo = (idx) => {
        setDirection(idx > currentIndex ? 'next' : 'prev');
        setCurrentIndex(idx);
    };

    const isReviewSlide = currentIndex === reviewSlideIndex;
    const current = !isReviewSlide ? testimonials[currentIndex] : null;

    // --- Swipe handling for mobile ---
    const touchStartX = React.useRef(0);
    const touchEndX = React.useRef(0);
    const SWIPE_THRESHOLD = 50; // minimum px distance to count as a swipe

    const handleTouchStart = (e) => {
        touchEndX.current = e.touches[0].clientX; // reset in case of tap only
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const distance = touchStartX.current - touchEndX.current;
        if (distance > SWIPE_THRESHOLD) {
            handleNext(); // swiped left -> next
        } else if (distance < -SWIPE_THRESHOLD) {
            handlePrev(); // swiped right -> previous
        }
    };

    return (
        <section className="relative bg-slate-50 py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans antialiased text-slate-800 overflow-hidden">

            {/* Ambient background accents */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-blue-100/60 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-8 w-64 h-64 rounded-full bg-amber-100/40 blur-3xl" />

            {/* Category Section Header Tag */}
            <div className="relative flex justify-center items-center gap-2 mb-3">
                <span className="text-amber-500 text-sm">★</span>
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                    Patient Stories
                </span>
            </div>

            {/* Main Core Title */}
            <h2 className="relative text-center text-2xl md:text-4xl font-serif text-[#0F2942] tracking-tight mb-12">
                Trusted by <span className="text-blue-600">Patients Across Maharashtra</span>
            </h2>

            {/* Main Combined Card Element */}
            <div
                className="relative max-w-3xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 overflow-hidden h-[420px] flex flex-col touch-pan-y select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Top accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 shrink-0" />

                {isReviewSlide ? (
                    /* --- Closing slide: ask the patient to leave a Google review --- */
                    <div className="relative p-6 md:p-10 flex flex-col items-center justify-center text-center h-full min-h-0 gap-5">
                        <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                            <MessageSquarePlus className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                        </div>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <div>
                            <h3 className="font-serif text-xl md:text-2xl text-[#0F2942] mb-2">
                                Loved your experience with us?
                            </h3>
                            <p className="text-slate-500 text-sm md:text-base max-w-md">
                                Your feedback helps other patients find the right care. Would you like to leave us a quick review on Google?
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
                            <a
                                href={GOOGLE_REVIEW_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-md shadow-blue-200"
                            >
                                Yes, leave a review
                            </a>
                            <button
                                onClick={() => goTo(0)}
                                className="px-6 py-2.5 rounded-full border border-slate-200 text-slate-500 text-sm font-semibold hover:bg-slate-50 hover:text-slate-700 transition-all"
                            >
                                Maybe later
                            </button>
                        </div>
                    </div>
                ) : (
                    /* --- Informational Context Body Block --- */
                    <div className="relative p-6 md:p-10 flex flex-col justify-between h-full min-h-0">

                        {/* Decorative oversized quote glyph */}
                        <Quote className="absolute top-4 right-6 w-20 h-20 text-blue-50 rotate-180 pointer-events-none" strokeWidth={1} fill="currentColor" />

                        <div className="relative min-h-0 flex flex-col overflow-hidden">
                            {/* Identity row: avatar + name + tag beside name (moved to top) */}
                            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 shrink-0">
                                <div className="flex items-center gap-3">
                                    {/*
                                    <img
                                        src={current.avatarImg}
                                        alt={current.name}
                                        className="w-10 h-10 rounded-full object-cover border border-slate-100"
                                    />
                                    */}
                                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-serif text-sm font-semibold shrink-0">
                                        {current.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight">
                                                {current.name}
                                            </h4>
                                            {/* <span className="flex items-center gap-1 bg-blue-50 text-blue-700 text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full">
                                                <Scissors className="w-3 h-3 rotate-90" />
                                                {current.tag}
                                            </span> */}
                                        </div>
                                        <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5 font-medium">
                                            <MapPin className="w-3 h-3 text-slate-400" />
                                            {current.location}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Core Testimonial Quote Field (scrolls internally so card height stays fixed) */}
                            <div
                                key={currentIndex}
                                className="overflow-y-auto pr-2 mb-6 [scrollbar-width:thin] animate-testimonial-in"
                            >
                                <p className="font-serif text-slate-700 text-base md:text-xl leading-relaxed">
                                    “{current.quote}”
                                </p>
                            </div>
                        </div>

                        {/* Bottom Metagroup: Star Rating + Navigation Buttons (rating moved to bottom) */}
                        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-slate-100 shrink-0">

                            {/* Star Rating */}
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                ))}
                            </div>

                            {/* Pagination Controls Area */}
                            <div className="flex items-center gap-4 self-end sm:self-auto">
                                <span className="text-xs font-semibold text-slate-400 tracking-wide tabular-nums">
                                    0{currentIndex + 1} <span className="text-slate-300 font-normal">/</span> 0{totalSlides}
                                </span>

                                <div className="flex gap-2">
                                    <button
                                        onClick={handlePrev}
                                        className="p-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 hover:-translate-x-0.5 transition-all shadow-sm bg-white"
                                        aria-label="Previous testimonial"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:translate-x-0.5 transition-all shadow-md shadow-blue-200"
                                        aria-label="Next testimonial"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

            </div>

            {/* Row of Dot Indicators at Bottom (replaces avatar thumbnails) */}
            <div className="relative flex justify-center items-center gap-2.5 mt-8">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goTo(idx)}
                        aria-label={
                            idx === reviewSlideIndex
                                ? "Go to leave-a-review slide"
                                : `Go to testimonial ${idx + 1}`
                        }
                        className={`rounded-full transition-all duration-300 ${currentIndex === idx
                                ? 'w-6 h-2.5 bg-blue-600 shadow-sm shadow-blue-300'
                                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                            }`}
                    />
                ))}
            </div>

            {/* Local styles: subtle fade + rise animation each time the quote changes */}
            <style>{`
                @keyframes testimonialIn {
                    from { opacity: 0; transform: translateY(6px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-testimonial-in {
                    animation: testimonialIn 0.35s ease-out;
                }
                @media (prefers-reduced-motion: reduce) {
                    .animate-testimonial-in { animation: none; }
                }
            `}</style>

        </section>
    );
}