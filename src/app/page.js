"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { AboutCard, TechStackCard } from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import { ExperienceCard, EducationCard } from "@/components/Experience";
import NoiseCanvas from "@/components/NoiseCanvas";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState("home");
  const mainRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "The Prelude" },
    { id: "projects", label: "What I've Built" },
    { id: "info", label: "My Journey" },
    { id: "capabilities", label: "How I Build" },
    { id: "experience", label: "Where I've Contributed" },
    { id: "contact", label: "Let's Connect" },
  ];

  if (!mounted) {
    return <div className="min-h-screen bg-[#111111]" />;
  }

  return (
    <div className="min-h-screen md:h-screen w-screen overflow-x-hidden md:overflow-hidden bg-[var(--background)] text-[var(--foreground)] font-mono relative selection:bg-stone-500/30 selection:text-[var(--accent)]">
      {/* Animated Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Background Noise Canvas */}
      <NoiseCanvas />

      {/* Viewport Frame Border Lines (p5aholic style) */}
      <div className="fixed inset-2 sm:inset-3 md:inset-5 pointer-events-none z-40 border border-[var(--foreground)] opacity-15" />

      {/* Main Grid Layout Container */}
      <div className="h-full w-full p-4 sm:p-6 md:p-12 flex flex-col md:flex-row justify-between gap-6 md:gap-8 relative z-10">
        
        {/* Left Fixed Sidebar Column */}
        <aside className="w-full md:w-80 shrink-0 flex flex-col justify-between h-auto md:h-full pt-1 md:pt-2 pb-1 md:pb-2 font-mono z-20">
          
          {/* Top: Brand Header & SPA Nav Menu */}
          <div className="space-y-4 md:space-y-8">
            
            {/* Name Header */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extralight tracking-tight leading-none text-[var(--foreground)]">
                Orlando Jr.
              </h1>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[var(--muted)] mt-1.5 md:mt-2.5 font-mono">
                Software Developer
              </p>
            </div>

            {/* SPA Navigation Dot Menu (Responsive: horizontal scroll on mobile, vertical list on desktop) */}
            <nav className="pt-1 md:pt-2">
              <ul className="flex md:flex-col items-center md:items-start overflow-x-auto no-scrollbar gap-4 md:gap-0 md:space-y-2.5 font-mono text-xs md:text-sm py-2 md:py-0 border-y md:border-y-0 border-[var(--foreground)]/10">
                {navItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <li key={item.id} className="shrink-0">
                      <button
                        onClick={() => handleTabChange(item.id)}
                        className="text-left cursor-pointer transition-all block py-0.5 whitespace-nowrap"
                        title={item.label}
                      >
                        {isActive ? (
                          <motion.span
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs md:text-sm text-[var(--foreground)] font-bold inline-block"
                          >
                            ● <span className="md:hidden text-xs font-normal ml-1">{item.label}</span>
                          </motion.span>
                        ) : (
                          <span className="text-[var(--muted)] hover:text-[var(--foreground)] opacity-70 hover:opacity-100 transition-opacity duration-200">
                            {item.label}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Bottom: Copyright (Desktop) */}
          <div className="hidden md:block pt-6 border-t border-[var(--foreground)]/15">
            <div className="text-[10px] font-mono text-[var(--muted)] tracking-wider">
              &copy; {new Date().getFullYear()} Orlando Jr. Fornolles
            </div>
          </div>
        </aside>

        {/* Right Dynamic Content View Canvas */}
        <main
          ref={mainRef}
          className="flex-1 w-full h-auto md:h-full overflow-y-auto no-scrollbar pr-0 md:pr-8 pt-2 pb-16 md:pb-24 max-w-3xl font-mono scroll-smooth"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full font-mono"
            >
              {/* HOME VIEW */}
              {activeTab === "home" && (
                <div className="space-y-8 md:space-y-12 py-2 md:py-4 font-mono">
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-xl sm:text-2xl md:text-4xl font-extralight leading-snug text-[var(--foreground)] tracking-tight font-mono">
                      I build clean, focused web applications with React and modern web tools. Driven by good user experience, simple code, and continuous learning.
                    </p>

                    <p className="text-xs sm:text-sm md:text-base text-[var(--muted)] leading-relaxed font-mono max-w-xl">
                      Currently contributing as a Software Developer Intern at SugboDoc Technologies and AI Engineer Intern at FlyRank AI, while empowering a 150+ student developer community as COO of SWUdevs.
                    </p>
                  </div>
                </div>
              )}

              {/* PROJECTS VIEW */}
              {activeTab === "projects" && (
                <div className="py-2 font-mono">
                  <Projects />
                </div>
              )}

              {/* INFO VIEW (Profile & Education) */}
              {activeTab === "info" && (
                <div className="space-y-12 md:space-y-16 py-2 font-mono">
                  <AboutCard />
                  <EducationCard />
                  <Certifications />
                </div>
              )}

              {/* CAPABILITIES VIEW */}
              {activeTab === "capabilities" && (
                <div className="py-2 editorial-section font-mono">
                  <div className="editorial-header">How I Build</div>
                  <div className="pt-2 font-mono">
                    <TechStackCard />
                  </div>
                </div>
              )}

              {/* EXPERIENCE VIEW */}
              {activeTab === "experience" && (
                <div className="py-2 font-mono">
                  <ExperienceCard />
                </div>
              )}

              {/* CONTACT VIEW */}
              {activeTab === "contact" && (
                <div className="py-4 md:py-6 space-y-6 md:space-y-8 font-mono">
                  <div className="editorial-header font-mono">Let's Connect</div>
                  <p className="text-lg sm:text-xl md:text-2xl font-extralight leading-relaxed font-mono">
                    Interested in building together, scheduling a chat, or exploring AI?
                  </p>

                  <div className="space-y-3 sm:space-y-4 pt-2 md:pt-4 font-mono text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-[var(--muted)] w-24 shrink-0">Email:</span>
                      <a
                        href="mailto:orlandojr058@gmail.com"
                        className="underline underline-offset-4 hover:text-[var(--accent)] transition-colors break-all"
                      >
                        orlandojr058@gmail.com
                      </a>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-[var(--muted)] w-24 shrink-0">Calendar:</span>
                      <a
                        href="https://calendar.google.com/calendar/render?action=TEMPLATE&add=orlandojr058@gmail.com&text=Meeting%20with%20Orlando%20Fornolles%20Jr."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-[var(--accent)] transition-colors flex items-center gap-1"
                      >
                        <span>Book Google Calendar Meeting</span>
                        <ArrowUpRight className="h-3 w-3 shrink-0" />
                      </a>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-[var(--muted)] w-24 shrink-0">LinkedIn:</span>
                      <a
                        href="https://linkedin.com/in/ojfornolles26"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-[var(--accent)] transition-colors flex items-center gap-1 break-all"
                      >
                        <span>linkedin.com/in/ojfornolles26</span>
                        <ArrowUpRight className="h-3 w-3 shrink-0" />
                      </a>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="text-[var(--muted)] w-24 shrink-0">GitHub:</span>
                      <a
                        href="https://github.com/ojfornolles26"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-[var(--accent)] transition-colors flex items-center gap-1 break-all"
                      >
                        <span>github.com/ojfornolles26</span>
                        <ArrowUpRight className="h-3 w-3 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom Copyright (Mobile Footer) */}
        <div className="block md:hidden pt-4 border-t border-[var(--foreground)]/15 text-center">
          <div className="text-[10px] font-mono text-[var(--muted)] tracking-wider">
            &copy; {new Date().getFullYear()} Orlando Jr. Fornolles
          </div>
        </div>

      </div>
    </div>
  );
}
