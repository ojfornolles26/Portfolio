"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Mail, MapPin, Sun, Moon, ArrowUpRight } from "lucide-react";
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

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "orlandojr058@gmail.com";
    try {
      navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      
      // Also open local mail client for direct composition
      window.location.href = `mailto:${email}?subject=Inquiry%20from%20Portfolio`;
    } catch (err) {
      console.error("Failed to copy email:", err);
      window.location.href = `mailto:${email}?subject=Inquiry%20from%20Portfolio`;
    }
  };

  const handleThemeToggle = (e) => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(nextTheme);
      return;
    }

    const x = e.clientX ?? window.innerWidth / 2;
    const y = e.clientY ?? window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const docEl = document.documentElement;
    docEl.style.setProperty("--x", `${x}px`);
    docEl.style.setProperty("--y", `${y}px`);
    docEl.style.setProperty("--r", `${endRadius}px`);

    const transitionClass = nextTheme === "dark" ? "transition-to-dark" : "transition-to-light";
    docEl.classList.add(transitionClass);

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(nextTheme);
      });
      // Force DOM class update synchronously so the View Transitions API captures the correct theme colors
      if (nextTheme === "dark") {
        docEl.classList.add("dark");
      } else {
        docEl.classList.remove("dark");
      }
    });

    transition.finished.finally(() => {
      docEl.classList.remove(transitionClass);
      docEl.style.removeProperty("--x");
      docEl.style.removeProperty("--y");
      docEl.style.removeProperty("--r");
    });
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

  // Animation constants for structured loading
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500 font-sans">
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-16 flex flex-col gap-6 relative">
        
        {/* Minimalist Theme Toggle (Top Right) */}
        <div className="absolute top-6 right-4 md:top-12 md:right-6 z-50">
          <button
            onClick={handleThemeToggle}
            className="h-8 w-8 flex items-center justify-center rounded-md border border-stone-200 dark:border-stone-900 bg-[var(--card-bg)] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            aria-label="Toggle theme"
          >
            {currentTheme === "dark" ? (
              <Sun className="h-4.5 w-4.5" />
            ) : (
              <Moon className="h-4.5 w-4.5" />
            )}
          </button>
        </div>

        {/* Master Bento Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4 pt-8"
        >
          
          {/* Cell 1: Profile Banner (6 cols) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-6">
            <div className="bento-card relative flex flex-col md:flex-row items-center md:items-start gap-6 h-full">
              
              {/* Profile Photo */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded border border-stone-200 dark:border-stone-900 bg-stone-100/30 overflow-hidden flex-shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <Image
                  src="/profile1.jpg"
                  alt="Orlando Fornolles Jr."
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 112px, 128px"
                />
              </div>

              {/* Info Details */}
              <div className="flex-1 w-full min-w-0 flex flex-col justify-between h-full space-y-4 md:space-y-6 pt-1 text-center md:text-left">
                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-serif text-stone-900 dark:text-stone-100">
                      Orlando Fornolles Jr.
                    </h1>
                    
                    {/* Verified Badge */}
                    <div
                      className="relative flex items-center justify-center"
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                      onTouchStart={() => setShowTooltip(prev => !prev)}
                    >
                      <svg
                        viewBox="0 0 22 22"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4.5 w-4.5 text-sky-600 dark:text-sky-400 flex-shrink-0 cursor-pointer select-none"
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
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2.5 py-1 rounded bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 text-[10px] font-mono tracking-wide shadow-md pointer-events-none z-50 select-none whitespace-nowrap"
                          >
                            Verified by Orlando himself
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[4px] border-transparent border-t-stone-900 dark:border-t-stone-100" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="mt-1.5 mb-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded border border-stone-200 dark:border-stone-850 bg-stone-100/60 dark:bg-stone-900/50 text-[10px] font-mono font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300">
                      Software Developer
                    </span>
                  </div>
                </div>

                {/* Location Detail */}
                <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-medium">
                  <MapPin className="h-4 w-4 text-[var(--accent)]" />
                  <span>Cebu City, Philippines</span>
                </div>

                {/* Primary CTA & Social Buttons Grid/Flex Container */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-2 pt-3 w-full max-w-sm sm:max-w-lg mx-auto md:mx-0">
                  
                  {/* Primary actions row */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 flex-1 sm:flex-initial sm:flex-shrink-0">
                    {/* Send Email (Primary - Solid Green) */}
                    <button
                      onClick={handleEmailClick}
                      className="flex h-9 flex-shrink-0 items-center justify-center rounded bg-[var(--accent)] hover:bg-[var(--accent-hover)] px-4 text-xs font-bold text-white dark:text-stone-950 transition-colors gap-2 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] w-full sm:w-auto min-w-[145px]"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {copiedEmail ? (
                          <motion.span
                            key="copied"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.15 }}
                            className="flex items-center gap-2 font-bold"
                          >
                            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Email Copied</span>
                          </motion.span>
                        ) : (
                          <motion.span
                            key="send"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.15 }}
                            className="flex items-center gap-2 font-bold"
                          >
                            <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                            <span>Send Email</span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>

                    {/* Schedule Meeting (Secondary - Outlined) */}
                    <a
                      href="https://calendar.google.com/calendar/render?action=TEMPLATE&add=orlandojr058@gmail.com&text=Meeting%20with%20Orlando%20Fornolles%20Jr."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 flex-shrink-0 items-center justify-center rounded border border-stone-200 dark:border-stone-850 bg-white/40 dark:bg-stone-900/40 text-xs font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-100/50 dark:hover:bg-stone-900/80 transition-colors gap-2 cursor-pointer w-full sm:w-auto px-4.5"
                    >
                      <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>Schedule a Session</span>
                    </a>
                  </div>

                  {/* Social links row: side-by-side full-width on mobile, square icons on desktop */}
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href="https://www.linkedin.com/in/ojfornolles26"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 flex-1 sm:flex-initial sm:w-9 items-center justify-center rounded border border-stone-200 dark:border-stone-850 bg-white/40 dark:bg-stone-900/40 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/50 dark:hover:bg-stone-900/80 transition-colors cursor-pointer gap-2 sm:gap-0 sm:px-0"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-4 w-4 flex-shrink-0" />
                      <span className="text-[10px] font-bold font-mono uppercase tracking-wider sm:hidden">LinkedIn</span>
                    </a>

                    <a
                      href="https://github.com/ojfornolles26"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 flex-1 sm:flex-initial sm:w-9 items-center justify-center rounded border border-stone-200 dark:border-stone-850 bg-white/40 dark:bg-stone-900/40 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100/50 dark:hover:bg-stone-900/80 transition-colors cursor-pointer gap-2 sm:gap-0 sm:px-0"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-4 w-4 flex-shrink-0" />
                      <span className="text-[10px] font-bold font-mono uppercase tracking-wider sm:hidden">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Cell 3: About Card (6 cols) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-6">
            <AboutCard />
          </motion.div>

          {/* Cell 5: Experience Timeline (4 cols) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-4">
            <ExperienceCard />
          </motion.div>

          {/* Right Column Stack: Tech Stack & Education (2 cols) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 flex flex-col gap-3 md:gap-4">
            <TechStackCard />
            <EducationCard />
          </motion.div>

          {/* Cell 7: Selected Projects (6 cols - Full Width) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-6">
            <Projects />
          </motion.div>

          {/* Cell 8: Certifications (6 cols - Full Width) */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-6">
            <Certifications />
          </motion.div>

        </motion.section>

        {/* Footer */}
        <footer className="mt-12 border-t border-stone-200/60 dark:border-stone-850 pt-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-widest text-center sm:text-left">
          {/* Left Side: Copyright */}
          <span>&copy; {new Date().getFullYear()} Orlando Fornolles Jr. &middot; Cebu City, PH</span>

          {/* Right Side: Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group/foot flex items-center gap-1 hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer select-none font-bold"
            aria-label="Scroll to top of the page"
          >
            <span>Back to Top</span>
            <svg
              className="h-3 w-3 text-stone-400 group-hover/foot:-translate-y-0.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </footer>

      </main>
    </div>
  );
}

