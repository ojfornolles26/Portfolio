"use client";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "Chief Operating Officer",
    company: "SWUdevs",
    period: "2026 – Present",
    bullets: [
      "Coordinating operations and workflows across technology, creatives, programs, marketing, and finance for a 150+ member community.",
      "Facilitating curriculum-based workshops focused on university courses, hackathon preparation, and developer tools.",
    ],
  },
  {
    role: "Self-Taught Builder",
    company: "",
    period: "2025 – Present",
    bullets: [
      "Independently designed and architected digital systems focused on student productivity and workflows.",
      "Created Filo, a private client-side document workspace, utilizing local browser compilers for high-performance content extraction.",
      "Created Trae, a cross-platform duty hour tracker, to simplify duty hour tracking for students and interns.",
    ],
  },
  {
    role: "Wrote First Hello World",
    company: "Southwestern University PHINMA",
    period: "2024",
    bullets: [
      "Began coding journey, mastering core computational logic, basic syntax, and learning backend concepts.",
    ],
  },
];

export function ExperienceCard() {
  return (
    <div className="bento-card flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-colors duration-300" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Experience
          </h2>
        </div>

        <div className="relative border-l border-stone-200 dark:border-stone-800 ml-2 pl-4 space-y-4">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Dot */}
              <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-[var(--accent)] border border-stone-200 dark:border-stone-800 transition-colors duration-300" />
              
              <div className="space-y-0.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                    {item.role}{item.company && <span className="text-stone-400 dark:text-stone-500 font-normal"> @ {item.company}</span>}
                  </h3>
                  <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <ul className="list-disc pl-3.5 space-y-0.5 text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
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
    <div className="bento-card flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center mb-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Education
          </h2>
        </div>

        <div className="p-3 rounded-lg bg-transparent border border-stone-200/60 dark:border-stone-800/60 space-y-3">
          <div>
            <h3 className="text-xs font-semibold text-stone-800 dark:text-stone-200 leading-tight">
              BS in Information Technology
            </h3>
            <p className="text-xs text-stone-600 dark:text-stone-300 mt-0.5 font-medium">
              Southwestern University PHINMA
            </p>
            <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-0.5">
              Expected graduation: 2028
            </p>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pt-2.5 border-t border-stone-200/60 dark:border-stone-800/60">
            Focused on cross-platform application design, database engineering, and software architectures.
          </p>
        </div>
      </div>
    </div>
  );
}
