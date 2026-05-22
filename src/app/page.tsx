"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Calendar, Mail, MapPin, Sun, Moon } from "lucide-react";

// Components
import { AboutCard, TechStackCard } from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import { ExperienceCard, EducationCard } from "@/components/Experience";

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#fafaf9] dark:bg-[#0c0a09] transition-colors duration-500" />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-[#0c0a09] text-stone-900 dark:text-stone-100 transition-colors duration-500">
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-16 flex flex-col gap-6 relative">
        
        {/* Floating Theme Toggle (Top Right) */}
        <div className="absolute top-6 right-4 md:top-12 md:right-6 z-50">
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none bg-stone-200 dark:bg-stone-800 cursor-pointer hover:opacity-90 flex-shrink-0 before:absolute before:-inset-3 before:content-['']"
            aria-label="Toggle theme"
          >
            <motion.div
              className="absolute left-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-stone-300 shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
              animate={{ x: currentTheme === "dark" ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {currentTheme === "dark" ? (
                <Moon className="h-3 w-3 text-stone-800" />
              ) : (
                <Sun className="h-3 w-3 text-stone-600" />
              )}
            </motion.div>
          </button>
        </div>
        
        {/* Compact Header Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
          
          {/* Profile Photo */}
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-transparent flex-shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <Image
              src="/profile.jpg"
              alt="Orlando Fornolles Jr."
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 112px, 128px"
            />
          </div>

          {/* Info Details */}
          <div className="flex-1 w-full min-w-0 space-y-1.5 text-center md:text-left">
            
            {/* Title / Name Row with Verified Badge */}
            <div className="flex items-center justify-center md:justify-start gap-2">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight font-serif text-stone-900 dark:text-stone-100">
                Orlando Fornolles Jr.
              </h1>
              
              {/* Verified Badge SVG */}
              <svg
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4.5 w-4.5 text-blue-500 flex-shrink-0"
                aria-label="Verified user"
              >
                <path
                  d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Location row */}
            <div className="flex items-center justify-center md:justify-start gap-1 text-xs text-stone-500 dark:text-stone-400 font-medium">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span>Cebu City, Philippines</span>
            </div>

            {/* Sub-headline */}
            <div className="pt-0.5">
              <p className="text-sm font-serif italic text-[#8c7a6b] dark:text-[#c29b68]">
                Software Developer & Chief Operating Officer
              </p>
            </div>

            {/* Quick Action Button Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2.5">
              
              {/* Schedule meeting */}
              <a
                href="https://calendar.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center rounded-lg bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 px-3.5 text-xs font-semibold text-stone-100 dark:text-stone-900 transition-colors gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Schedule a Meeting</span>
              </a>

              {/* Email */}
              <a
                href="mailto:orlandojr058@gmail.com"
                className="inline-flex h-8 items-center rounded-lg border border-stone-200 dark:border-stone-800 bg-white/40 dark:bg-stone-900/40 px-3.5 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-stone-600 hover:bg-white/80 dark:hover:bg-stone-900/80 transition-all gap-1.5"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Send Email</span>
              </a>


            </div>

          </div>
        </section>

        {/* Bento Grid Area */}
        <section className="grid grid-cols-1 md:grid-cols-6 gap-2.5 md:gap-3">
          
          {/* Row 1: About (4 cols) & Tech Stack (2 cols) */}
          <div className="col-span-1 md:col-span-4">
            <AboutCard />
          </div>
          <div className="col-span-1 md:col-span-2">
            <TechStackCard />
          </div>

          {/* Row 2: Experience (4 cols) & Education (2 cols) */}
          <div className="col-span-1 md:col-span-4">
            <ExperienceCard />
          </div>
          <div className="col-span-1 md:col-span-2">
            <EducationCard />
          </div>

          {/* Row 3: Projects (6 cols - Full Width) */}
          <div className="col-span-1 md:col-span-6">
            <Projects />
          </div>

          {/* Row 4: Certifications (6 cols - Full Width) */}
          <div className="col-span-1 md:col-span-6">
            <Certifications />
          </div>

        </section>

        {/* Footer */}
        <footer className="mt-8 border-t border-stone-200/60 dark:border-stone-800/60 pt-6 text-center text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} Orlando Fornolles Jr. &middot; Cebu City, PH</span>
        </footer>

      </main>
    </div>
  );
}
