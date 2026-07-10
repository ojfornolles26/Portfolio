"use client";

const EXPERIENCE_ITEMS = [
  {
    role: "Software Developer Intern",
    company: "SugboDoc Technologies Inc.",
    period: "Jul 2026 – Present",
    bullets: [
      "Build and maintain full-stack web applications on-site, contributing to SugboDoc Technologies Inc.'s healthcare technology platform serving the Cebu community.",
      "Complete structured training in UI/UX design fundamentals using Figma for wireframing, prototyping, and interface design workflows.",
      "Collaborate with the development team on production features, applying modern web development practices across the full software development lifecycle.",
    ],
  },
  {
    role: "Front-End AI Engineer Intern",
    company: "FlyRank AI",
    period: "Jun 2026 – Present",
    bullets: [
      "Build responsive React and Next.js applications through structured front-end engineering modules, applying modern component architecture, Tailwind CSS styling, and Vercel deployment workflows.",
      "Develop production-grade UI features across project-based modules, practicing reusable component patterns, state management with React hooks, and performance optimization.",
      "Deploy a capstone project demonstrating end-to-end front-end development proficiency, from design translation to deployment, earning a verifiable front-end AI engineering credential.",
    ],
  },
  {
    role: "Chief Operating Officer",
    company: "SWUdevs",
    period: "Jun 2026 – Present",
    bullets: [
      "Facilitate hands-on workshops and peer-to-peer tutoring sessions covering JavaScript, HTML/CSS, Web Development, UI/UX, Git, Python, Java, Prompt Engineering, and AI Integration for 150+ student developers.",
      "Coordinate operations and communications across technology, creatives, programs, marketing, and finance teams, helping students build practical skills for hackathons, technical projects, and real-world software development.",
      "Lead cross-functional technical initiatives independently and asynchronously, consistently delivering structured documentation and feedback across diverse teams.",
    ],
  },
  {
    role: "Self-Taught Builder",
    company: "",
    period: "Jan 2025 – Present",
    bullets: [
      "Independently designed and architected digital systems focused on student productivity and workflows.",
      "Created Filo, a private client-side document workspace, utilizing local browser compilers for high-performance content extraction, batch PDF-to-image conversion, and lossless PDF export.",
      "Created Embraze, a community-driven safety and hazard reporting platform for Cebu with an interactive Leaflet map, featuring photo upload with canvas compression, thumbs voting verification, geolocation capture, and localStorage persistence with dark/light theming.",
      "Created Signity, a private-by-design signature creator featuring real-time high-precision smoothing, dual drawing/cursive typing modes, and auto-cropped exports.",
    ],
  },
  {
    role: "Wrote First Hello World",
    company: "Southwestern University PHINMA",
    period: "Aug 2024",
    bullets: [
      "Began coding journey, mastering core computational logic, basic syntax, and learning backend concepts.",
    ],
  },
];

export function ExperienceCard() {
  return (
    <div className="bento-card flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-colors duration-300" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Experience
          </h2>
        </div>

        <div className="relative border-l border-stone-200/60 dark:border-stone-900 ml-1.5 pl-4 space-y-5">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div key={idx} className="relative group/timeline">
              {/* Dot - Ring design */}
              <div className="absolute -left-[20.5px] top-1 h-2 w-2 rounded-full bg-[var(--card-bg)] border border-[var(--accent)] transition-all duration-300 group-hover/timeline:scale-110" />
              
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                    <span>{item.role}</span>
                    {item.company && (
                      <span className="block sm:inline font-serif italic font-normal text-[var(--accent)] sm:ml-1 mt-0.5 sm:mt-0">
                        @ {item.company}
                      </span>
                    )}
                  </h3>
                  <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <ul className="list-disc pl-3.5 space-y-1 text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  {item.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EducationCard() {
  return (
    <div className="bento-card flex flex-col justify-between h-auto">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-colors duration-300" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Education
          </h2>
        </div>

        <div className="space-y-4 pt-1">
          <div>
            <h3 className="text-sm font-serif font-bold text-stone-900 dark:text-stone-100 leading-tight">
              BS in Information Technology
            </h3>
            <p className="text-xs text-[var(--accent)] mt-1 font-medium">
              Southwestern University PHINMA
            </p>
            <p className="text-[10px] font-mono text-stone-400 dark:text-stone-500 mt-1">
              Expected graduation: 2028
            </p>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pt-3 border-t border-stone-200/50 dark:border-stone-900">
            Relevant coursework: Object-Oriented Programming, Data Structures &amp; Algorithms, Web Development, Database Management Systems, Software Architectures, and Mobile Application Development.
          </p>
        </div>
      </div>
    </div>
  );
}
