"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Mail, MapPin, Sun, Moon } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

// Components
import { AboutCard, TechStackCard } from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import { ExperienceCard, EducationCard } from "@/components/Experience";

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailClick = () => {
    try {
      navigator.clipboard.writeText("orlandojr058@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[var(--background)] transition-colors duration-500" />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
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
              src="/profile.webp"
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
              
              {/* Verified Badge Container with Interactive Tooltip */}
              <div
                className="relative flex items-center justify-center"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onTouchStart={() => setShowTooltip(prev => !prev)}
              >
                <svg
                  viewBox="0 0 22 22"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4.5 w-4.5 text-sky-600 dark:text-sky-400 flex-shrink-0 transition-colors duration-300 cursor-pointer select-none"
                  aria-label="Verified user"
                >
                  <path
                    d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                    fill="currentColor"
                  />
                </svg>

                <AnimatePresence>
                  {showTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 4, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.98 }}
                      transition={{ duration: 0.12, ease: "easeOut" }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2.5 py-1 rounded bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 text-[10px] md:text-xs font-sans font-medium tracking-wide shadow-md pointer-events-none z-50 select-none whitespace-nowrap"
                    >
                      Verified by Orlando himself
                      {/* Tooltip arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-stone-900 dark:border-t-stone-100" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Location row */}
            <div className="flex items-center justify-center md:justify-start gap-1 text-xs text-stone-500 dark:text-stone-400 font-medium">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span>Cebu City, Philippines</span>
            </div>

            {/* Sub-headline */}
            <div className="pt-0.5">
              <p className="text-xs md:text-sm font-sans font-medium tracking-wide text-stone-500 dark:text-stone-400 transition-colors duration-300">
                Front-End Developer | AI Engineer Intern @ FlyRank AI | COO @ SWUdevs
              </p>
            </div>

            {/* Quick Action Button Links */}
            <div className="flex flex-wrap gap-2 pt-2.5 w-full max-w-[360px] mx-auto sm:max-w-none sm:mx-0 sm:items-center sm:justify-start sm:w-auto">
              
              {/* Schedule meeting */}
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&add=orlandojr058@gmail.com&text=Meeting%20with%20Orlando%20Fornolles%20Jr."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 md:h-8 items-center justify-center rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] px-3 text-xs font-semibold text-white dark:text-stone-950 transition-all duration-300 gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.05)] cursor-pointer w-full sm:w-auto relative before:absolute before:-inset-1.5 before:content-['']"
              >
                <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                <span>Schedule a Meeting</span>
              </a>

              {/* Email */}
              <a
                href="mailto:orlandojr058@gmail.com"
                onClick={handleEmailClick}
                className="inline-flex h-9 md:h-8 w-full sm:w-[130px] justify-center items-center rounded-lg border border-stone-200 dark:border-stone-800 bg-white/40 dark:bg-stone-900/40 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-stone-600 hover:bg-white/80 dark:hover:bg-stone-900/80 transition-all cursor-pointer select-none relative before:absolute before:-inset-1.5 before:content-['']"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copiedEmail ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400"
                    >
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Email Copied!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1.5"
                    >
                      <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>Send Email</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ojfornolles26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 md:h-8 w-[calc(50%-4px)] sm:w-8 px-3.5 sm:px-0 items-center justify-center rounded-lg border border-stone-200 dark:border-stone-800 bg-white/40 dark:bg-stone-900/40 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-stone-600 hover:bg-white/80 dark:hover:bg-stone-900/80 transition-all cursor-pointer gap-2 sm:gap-0 relative before:absolute before:-inset-1.5 before:content-['']"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="text-xs font-semibold sm:hidden">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ojfornolles26"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 md:h-8 w-[calc(50%-4px)] sm:w-8 px-3.5 sm:px-0 items-center justify-center rounded-lg border border-stone-200 dark:border-stone-800 bg-white/40 dark:bg-stone-900/40 text-stone-700 dark:text-stone-300 hover:border-stone-400 dark:hover:border-stone-600 hover:bg-white/80 dark:hover:bg-stone-900/80 transition-all cursor-pointer gap-2 sm:gap-0 relative before:absolute before:-inset-1.5 before:content-['']"
                aria-label="GitHub Profile"
              >
                <Github className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="text-xs font-semibold sm:hidden">GitHub</span>
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
