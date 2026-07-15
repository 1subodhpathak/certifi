import { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const faqItems = [
  {
    question: 'Who is CareerSense built for?',
    answer:
      'CareerSense is designed for learners, hiring teams, training academies, colleges, and employers who need credible proof of skill instead of generic completion certificates.',
  },
  {
    question: 'How does certificate verification work?',
    answer:
      'Every certificate includes a unique credential ID, public verification page, and scannable barcode or QR workflow so the record can be validated instantly against the live credential ledger.',
  },
  {
    question: 'What happens if a candidate tries to cheat during an assessment?',
    answer:
      'The platform records trust signals such as fullscreen integrity, tab switching, face visibility, and suspicious activity summaries. These signals contribute to trust scoring and help protect certificate credibility.',
  },
  {
    question: 'Can I create my own custom assessment?',
    answer:
      'Yes. You can generate your own AI-powered assessment by choosing the skill, difficulty, number of questions, time per question, and MCQ versus case-study ratio.',
  },
  {
    question: 'What does a user receive after completing a test?',
    answer:
      'Depending on the assessment flow, users can receive a detailed score report, topic-wise strengths and weak areas, confidence scoring, verified public credentials, and improvement tracking across attempts.',
  },
  {
    question: 'Is a CareerSense certificate valid globally?',
    answer:
      'Yes. The credential is built to be shareable and verifiable anywhere through public validation links, barcode scanning, credential IDs, and employer-friendly evidence records.',
  },
];

function FaqRow({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100 last:border-b-0 transition-colors hover:bg-slate-50/50">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <span 
          className={`text-[15px] font-bold leading-snug transition-colors ${
            isOpen ? 'text-teal-700' : 'text-slate-900'
          }`}
        >
          {item.question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border shadow-sm transition-all duration-300 ${
            isOpen 
              ? 'rotate-180 border-teal-200 bg-teal-50 text-teal-600' 
              : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800'
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 pt-0 pr-12 sm:px-6 sm:pb-6 sm:pr-16">
            <p className="text-[13.5px] leading-relaxed text-slate-600">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-slate-50 px-6 py-16 lg:py-20">
      {/* Soft Decorative Ambient Background Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-teal-100/40 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-sky-100/50 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Main Panel Container (Crisp White SaaS style) */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/60 bg-white/70 p-8 shadow-xl shadow-slate-200/40 backdrop-blur-md md:p-10 lg:p-12">
          
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            
            {/* Left Header Panel - Matches Testimonial Typography */}
            <div className="flex h-full flex-col justify-between lg:sticky lg:top-0 lg:col-span-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                  Knowledge Base
                </div>

                <h2 className="mt-2 text-2xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-3xl">
                  Clear Answers For <br />
                  <span className="text-teal-600">Trusted Validation</span>
                </h2>

                <p className="mt-4 max-w-[34ch] text-sm font-normal leading-relaxed text-slate-500">
                  Find details about verification, custom assessments, proctoring integrity, public credentials, and global credibility.
                </p>
              </div>

              {/* <div className="mt-8 lg:mt-12">
                <button className="group inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700">
                  Contact Platform Support
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div> */}
            </div>

            {/* Right Feed Panel - FAQ List embedded in a matching card block */}
            <div className="flex flex-col lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:border-teal-500/20 hover:shadow-md hover:shadow-teal-500/5">
                {faqItems.map((item, index) => (
                  <FaqRow
                    key={item.question}
                    item={item}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
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