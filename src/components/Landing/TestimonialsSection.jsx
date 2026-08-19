import { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import coverageBg from '../../assets/Testimony.png';
import vikramImage from '../../assets/testimonials/vikram.png';
import ananyaImage from '../../assets/testimonials/ananya.png';
import siddharthImage from '../../assets/testimonials/siddharth.png';
import poojaImage from '../../assets/testimonials/pooja.png';
import karanImage from '../../assets/testimonials/karan.png';
import deepikaImage from '../../assets/testimonials/deepika.png';

const testimonials = [
  {
    name: 'Vikramaditya Rao',
    role: 'VP of Engineering @ HCLTech',
    text: 'The certification-ready workflow helped us spot candidates with practical depth faster. The structured reports made evaluation much easier to trust.',
    image: vikramImage,
  },
  {
    name: 'Ananya Banerjee',
    role: 'Director of People Operations @ Zomato',
    text: 'We now look beyond resumes and actually review evidence of capability. The assessment flow is clean, fast, and easy to use for our hiring teams.',
    image: ananyaImage,
  },
  {
    name: 'Siddharth Menon',
    role: 'Lead Cloud Security Architect @ Razorpay',
    text: 'The credential view and verification flow feel production-grade. It gives our team confidence when we shortlist candidates with claimed technical skills.',
    image: siddharthImage,
  },
  {
    name: 'Pooja Hegde',
    role: 'Principal HR Business Partner @ Freshworks',
    text: 'The scoring breakdown made it easier to compare applicants consistently. We stopped relying on gut feel and started looking at real performance signals.',
    image: poojaImage,
  },
  {
    name: 'Karan Kapoor',
    role: 'Chief Technology Officer @ Delhivery',
    text: 'The platform made skill validation much more operational for us. Reports, certificates, and review loops all sit in one clean experience.',
    image: karanImage,
  },
  {
    name: 'Deepika Reddy',
    role: 'Staff Talent Partner @ PhonePe',
    text: 'We liked how quickly candidates could move from assessment to proof. The verification layer adds a lot of credibility to the overall experience.',
    image: deepikaImage,
  },
];

const ITEMS_PER_PAGE = 3;

export default function TestimonialsSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const numPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const currentPage = Math.floor(testimonialIndex / ITEMS_PER_PAGE);

  const visibleTestimonials = useMemo(
    () => testimonials.slice(testimonialIndex, testimonialIndex + ITEMS_PER_PAGE),
    [testimonialIndex]
  );

  const handleNextPage = () => {
    setTestimonialIndex((prev) => 
      prev + ITEMS_PER_PAGE >= testimonials.length ? 0 : prev + ITEMS_PER_PAGE
    );
  };

  const handlePrevPage = () => {
    setTestimonialIndex((prev) => 
      prev === 0 ? testimonials.length - ITEMS_PER_PAGE : prev - ITEMS_PER_PAGE
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextPage();
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonialIndex]);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-950 py-16 lg:py-20">
      
      {/* Dark Coverage Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 mix-blend-luminosity"
          style={{ backgroundImage: `url(${coverageBg})` }}
        />
        <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8">
        
        {/* Edge-to-Edge Grid (Removed the white container padding) */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Left Header Panel - Original Typography but adjusted for dark background */}
          <div className="flex flex-col justify-between lg:col-span-4 h-full">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400">
                Success Stories
              </div>

              <h2 className="mt-2 text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-3xl">
                Validated Proof <br />
                <span className="text-teal-400">That Works</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 font-normal max-w-[34ch]">
                See how global tech teams use our workflow platform to validate skill depth, eliminate hiring uncertainty, and track performance.
              </p>
            </div>
          </div>

          {/* Right Feed Panel */}
          <div className="flex flex-col lg:col-span-8">
            
            {/* Dynamic Grid Window */}
            <div className="min-h-[220px] sm:min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, y: 8, filter: 'blur(2px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-4 sm:grid-cols-3"
                >
                  {visibleTestimonials.map((testimonial) => (
                    <article
                      key={testimonial.name}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:border-teal-500/50 hover:shadow-md hover:shadow-teal-500/10"
                    >
                      <div>
                        {/* Card User Header */}
                        <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-50">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="overflow-hidden">
                            <h4 className="text-xs font-bold truncate text-slate-900">{testimonial.name}</h4>
                            <span className="block truncate text-[11px] font-medium text-slate-400">{testimonial.role}</span>
                          </div>
                        </div>

                        {/* Card Text Context */}
                        <div className="relative mt-3">
                          <Quote className="absolute -left-1 -top-1 h-5 w-5 text-teal-500/5 rotate-180" />
                          <p className="relative z-10 text-[12.5px] leading-relaxed text-slate-600 pl-3">
                            {testimonial.text}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Row */}
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex gap-1.5">
                <button
                  onClick={handlePrevPage}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-slate-800"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNextPage}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-teal-200 bg-teal-50 text-teal-600 shadow-sm transition hover:bg-teal-100"
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Page Indicator Dot Trackers */}
              <div className="flex gap-1.5 px-1">
                {[...Array(numPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index * ITEMS_PER_PAGE)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentPage ? 'w-4 bg-teal-400' : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}