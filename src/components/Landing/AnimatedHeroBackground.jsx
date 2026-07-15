import React, { useMemo } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const AnimatedHeroBackground = () => {
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const scrollRange = [0, 800];

  const bgLight1 = useTransform(scrollY, scrollRange, ["#b8f3e8", "#d8faf4"]);
  const bgLight2 = useTransform(scrollY, scrollRange, ["#8ee8d4", "#a5f3fc"]);
  const bgLight3 = useTransform(scrollY, scrollRange, ["#9fe3ea", "#d5fafc"]);

  const bgDark1 = useTransform(scrollY, scrollRange, ["#0f766e", "#34d399"]);
  const bgDark2 = useTransform(scrollY, scrollRange, ["#115e59", "#0f766e"]);
  const bgDark3 = useTransform(scrollY, scrollRange, ["#0e7490", "#22c55e"]);

  const sparks = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 1,
      duration: Math.random() * 5 + 8,
      height: Math.random() * 40 + 20,
      opacity: Math.random() * 2 + 1.5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50">
      {/* 1. STRUCTURAL GRID */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 95% 95% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 95% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* 2. SCROLL-DRIVEN AURORA BLOOMS */}
      <div className="absolute inset-0 opacity-60 mix-blend-multiply saturate-150">
        {/* LIGHT MODE ORBS */}
        <div className="absolute inset-0">
          <motion.div
            style={{ backgroundColor: bgLight1 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    x: ["0%", "40%", "-10%", "0%"],
                    y: ["0%", "30%", "-10%", "0%"],
                  }
            }
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[120px]"
          />

          <motion.div
            style={{ backgroundColor: bgLight2 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    x: ["0%", "-50%", "20%", "0%"],
                    y: ["0%", "-40%", "30%", "0%"],
                  }
            }
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full blur-[130px]"
          />

          <motion.div
            style={{ backgroundColor: bgLight3 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    x: ["0%", "60%", "-20%", "0%"],
                    y: ["0%", "-50%", "10%", "0%"],
                  }
            }
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-[20%] left-[10%] w-[60vw] h-[40vw] rounded-full blur-[140px]"
          />
        </div>
      </div>

      {/* 3. AI DATA SPARKS */}
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: "-20vh",
                  opacity: [0, spark.opacity, 0],
                }
          }
          transition={{
            duration: spark.duration,
            repeat: Infinity,
            ease: "linear",
            delay: spark.delay,
          }}
          className="absolute w-[1px] rounded-full bg-gradient-to-t from-transparent via-teal-500 to-transparent"
          style={{
            left: spark.left,
            height: `${spark.height}px`,
            boxShadow: "0 0 10px rgba(20, 184, 166, 0.45)",
          }}
        />
      ))}

      {/* 3.5 INTELLIGENT FLOW LINES */}
      <svg className="absolute inset-0 h-full w-full opacity-40">
        <defs>
          <linearGradient id="flowLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0" />
            <stop offset="40%" stopColor="#14b8a6" stopOpacity="0.7" />
            <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>

          <filter id="flowGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {[
          "M -100 600 C 200 420, 420 260, 720 420 S 1100 620, 1500 300",
          "M -120 250 C 220 120, 420 280, 700 350 S 1100 300, 1500 100",
          "M -100 800 C 260 650, 520 560, 780 690 S 1100 780, 1500 500",
        ].map((path, i) => (
          <motion.path
            key={i}
            d={path}
            fill="none"
            stroke="url(#flowLineGrad)"
            strokeWidth={i === 0 ? 2.2 : 1.6}
            strokeDasharray="420 800"
            filter="url(#flowGlow)"
            animate={
              reduceMotion ? {} : { strokeDashoffset: [0, -1200] }
            }
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}

        {[
          "M 100 -100 C 300 200, 600 250, 900 200 S 1200 300, 1500 700",
        ].map((path, i) => (
          <motion.path
            key={`secondary-${i}`}
            d={path}
            fill="none"
            stroke="url(#flowLineGrad)"
            strokeWidth="1.2"
            strokeDasharray="300 700"
            opacity="0.5"
            animate={
              reduceMotion ? {} : { strokeDashoffset: [0, -1000] }
            }
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* 4. SEAMLESS BLEND MASKS */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-slate-50 to-transparent" />
      <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-slate-50 to-transparent" />
    </div>
  );
};

export default AnimatedHeroBackground;
