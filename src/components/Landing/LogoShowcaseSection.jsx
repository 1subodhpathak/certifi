import React from 'react';
import { FcGoogle, FcElectricity } from 'react-icons/fc';
import {
  FaMicrosoft,
  FaAmazon,
  FaUber,
  FaApple,
  FaStripe,
  FaAirbnb,
  FaSpotify,
  FaSalesforce,
  FaSnowflake,
  FaInfinity,
  FaCircleNotch,
  FaCubes,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const LOGO_LIST = [
  { name: 'Google', Icon: FcGoogle, isFc: true },
  { name: 'Microsoft', Icon: FaMicrosoft, color: '#00A4EF' },
  { name: 'Salesforce', Icon: FaSalesforce, color: '#00A1E0' },
  { name: 'Netflix', isText: true, text: 'NETFLIX', color: '#E50914' },
  { name: 'Amazon', Icon: FaAmazon, color: '#FF9900' },
  { name: 'Meta', Icon: FaInfinity, color: '#0668E1' },
  { name: 'LinkedIn', Icon: FaLinkedin, color: '#0A66C2' },
  { name: 'GitHub', Icon: FaGithub, color: '#181717' },
  { name: 'Uber', Icon: FaUber, color: '#000000' },
  { name: 'Apple', Icon: FaApple, color: '#555555' },
  { name: 'Tesla', Icon: FcElectricity, isFc: true },
  { name: 'Stripe', Icon: FaStripe, color: '#635BFF' },
  { name: 'Airbnb', Icon: FaAirbnb, color: '#FF5A5F' },
  { name: 'Spotify', Icon: FaSpotify, color: '#1DB954' },
  { name: 'Coinbase', Icon: FaCircleNotch, color: '#0052FF' },
  { name: 'Databricks', Icon: FaCubes, color: '#FF3621' },
  { name: 'Snowflake', Icon: FaSnowflake, color: '#29B5E8' },
];

export default function LogoShowcaseSection() {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-white py-12">
      <style>
        {`
          @keyframes certifi-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .certifi-marquee {
            animation: certifi-marquee 44s linear infinite;
            display: flex;
            width: max-content;
          }
          .certifi-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent md:w-48" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent md:w-48" />

      <div className="relative z-0 mx-auto w-full max-w-[1400px] px-6">
        <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
          Accepted for roles at top companies
        </p>

        <div className="overflow-hidden">
          <div className="certifi-marquee items-center gap-x-16 py-6 md:gap-x-24">
            {[...Array(2)].map((_, arrayIndex) => (
              <React.Fragment key={arrayIndex}>
                {LOGO_LIST.map((company, index) => (
                  <div
                    key={`${company.name}-${arrayIndex}-${index}`}
                    className="group relative flex cursor-pointer flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  >
                    {company.isText ? (
                      <span
                        className="text-2xl font-black tracking-tighter md:text-3xl"
                        style={{ color: company.color }}
                      >
                        {company.text}
                      </span>
                    ) : company.isFc ? (
                      <company.Icon
                        size={36}
                        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110 md:h-9"
                      />
                    ) : (
                      <company.Icon
                        size={36}
                        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110 md:h-9"
                        style={{ color: company.color }}
                      />
                    )}

                    <span className="absolute -bottom-8 whitespace-nowrap text-[0.7rem] font-bold uppercase tracking-widest text-slate-500 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
                      {company.name}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
