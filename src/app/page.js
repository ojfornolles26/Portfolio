"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";

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

      {/* Viewport Frame Border Lines (p5aholic style) - Hidden on mobile */}
      <div className="hidden md:block fixed inset-5 pointer-events-none z-40 border border-[var(--foreground)] opacity-15" />

      {/* Main Grid Layout Container */}
      <div className="h-full w-full p-4 sm:p-6 md:p-12 flex flex-col md:flex-row justify-between gap-0 md:gap-8 relative z-10">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="md:hidden flex items-center justify-between w-full pb-4 mb-4 border-b border-[var(--foreground)]/10 z-30">
          <div>
            <h1 className="text-2xl font-extralight tracking-tight leading-none text-[var(--foreground)]">
              Orlando Jr.
            </h1>
            <p className="text-xs uppercase tracking-widest text-[var(--muted)] mt-1 font-mono">
              Software Developer
            </p>
          </div>
        </div>

        {/* Left Fixed Sidebar Column (Hidden on Mobile) */}
        <aside className="hidden md:flex w-full md:w-80 shrink-0 flex-col justify-between h-auto md:h-full pt-1 md:pt-2 pb-1 md:pb-2 font-mono z-20">
          
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
              <ul className="flex flex-col items-start space-y-2.5 font-mono text-sm">
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
                            className="text-sm text-[var(--foreground)] font-bold inline-block"
                          >
                            ● 
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
          <div className="pt-6 border-t border-[var(--foreground)]/15">
            <div className="text-[10px] font-mono text-[var(--muted)] tracking-wider">
              &copy; {new Date().getFullYear()} Orlando Jr. Fornolles
            </div>
          </div>
        </aside>

        {/* Right Dynamic Content View Canvas (Desktop) */}
        <main
          ref={mainRef}
          className="hidden md:block flex-1 w-full h-full overflow-y-auto no-scrollbar pr-8 pt-2 pb-24 max-w-3xl font-mono scroll-smooth"
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
                  <div className="editorial-header font-mono">Let&apos;s Connect</div>
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

        {/* Right Dynamic Content View Canvas (Mobile Single Page) */}
        <main className="md:hidden flex-1 w-full h-auto overflow-y-auto no-scrollbar pt-2 pb-16 font-mono scroll-smooth space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 py-2 font-mono"
          >
            <div className="space-y-4">
              <p className="text-xl font-extralight leading-snug text-[var(--foreground)] tracking-tight font-mono">
                I build clean, focused web applications with React and modern web tools. Driven by good user experience, simple code, and continuous learning.
              </p>

              <p className="text-xs text-[var(--muted)] leading-relaxed font-mono">
                Currently contributing as a Software Developer Intern at SugboDoc Technologies and AI Engineer Intern at FlyRank AI, while empowering a 150+ student developer community as COO of SWUdevs.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="py-2 font-mono"
          >
            <Projects />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-12 py-2 font-mono"
          >
            <AboutCard />
            <EducationCard />
            <Certifications />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="py-2 editorial-section font-mono"
          >
            <div className="editorial-header">How I Build</div>
            <div className="pt-2 font-mono">
              <TechStackCard />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="py-2 font-mono"
          >
            <ExperienceCard />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="py-4 space-y-6 font-mono"
          >
            <div className="editorial-header font-mono">Let&apos;s Connect</div>
            <p className="text-lg font-extralight leading-relaxed font-mono">
              Interested in building together, scheduling a chat, or exploring AI?
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs">
              <div className="flex flex-col gap-1">
                <span className="text-[var(--muted)] w-24 shrink-0">Email:</span>
                <a
                  href="mailto:orlandojr058@gmail.com"
                  className="underline underline-offset-4 hover:text-[var(--accent)] transition-colors break-all"
                >
                  orlandojr058@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-1">
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

              <div className="flex flex-col gap-1">
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

              <div className="flex flex-col gap-1">
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
          </motion.div>
          
          <div className="pt-8 border-t border-[var(--foreground)]/15 flex flex-col items-center gap-4">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full border border-[var(--foreground)]/15 text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} strokeWidth={1.5} />
            </button>
            <div className="text-[10px] font-mono text-[var(--muted)] tracking-wider">
              &copy; {new Date().getFullYear()} Orlando Jr. Fornolles
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
