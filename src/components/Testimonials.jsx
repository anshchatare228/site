import React, { useEffect, useRef } from 'react';
import {
    Star,
    MapPin,
    Quote,
    MessageSquarePlus,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
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

            {/* Two-column layout: fixed review card (left) + all testimonials (right, own cards) */}
            <div className="relative flex flex-col lg:flex-row gap-6">

    {/* Fixed Review Card */}
    <div className="lg:w-[360px] lg:flex-shrink-0">
        <div className="h-full min-h-[320px] bg-white rounded-3xl shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 overflow-hidden flex flex-col sticky lg:top-8">
            <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 shrink-0" />

            <div className="relative p-6 md:p-10 flex flex-col items-center justify-center text-center flex-1 gap-5">
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

                    <p className="text-slate-500 text-sm md:text-base">
                        Your feedback helps other patients find the right care. Would you like to leave us a quick review on Google?
                    </p>
                </div>

                <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-md"
                >
                    Yes, leave a review
                </a>
            </div>
        </div>
    </div>

    {/* Horizontal Scroll Testimonials */}
    <div className="flex-1 overflow-x-auto">
        <div className="flex gap-6 pb-2 w-max">
            {testimonials.map((t, idx) => (
                <div
                    key={idx}
                    className="w-[320px] md:w-[360px] bg-white rounded-3xl shadow-lg shadow-slate-200/50 ring-1 ring-slate-100 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500" />

                    <div className="relative p-6 flex flex-col flex-1">
                        <Quote
                            className="absolute top-4 right-5 w-14 h-14 text-blue-50 rotate-180"
                            strokeWidth={1}
                            fill="currentColor"
                        />

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-serif font-semibold">
                                {t.name.charAt(0)}
                            </div>

                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">
                                    {t.name}
                                </h4>

                                <p className="text-slate-400 text-xs flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {t.location}
                                </p>
                            </div>
                        </div>

                        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold w-fit">
                            {t.tag}
                        </span>

                        <p className="text-slate-700 leading-relaxed text-sm md:text-base flex-1">
                            “{t.quote}”
                        </p>

                        <div className="mt-5 pt-4 border-t border-slate-100 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>

</div>

        </section>
    );
}