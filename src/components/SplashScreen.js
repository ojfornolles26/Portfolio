"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 bg-[#111111] text-[#faf9f6] font-mono flex flex-col items-center justify-center p-6 select-none overflow-hidden"
    >
      {/* Viewport Frame Border Lines */}
      <div className="fixed inset-3 md:inset-5 pointer-events-none z-40 border border-[#faf9f6]/20" />

      {/* Center Name & Role */}
      <div className="text-center space-y-3 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-extralight tracking-tight text-[#faf9f6] font-mono"
        >
          Orlando Jr.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-widest text-[#faf9f6]/50 font-mono"
        >
          Software Developer
        </motion.p>
      </div>
    </motion.div>
  );
}
