"use client";

import { Laptop, Cpu, Brain, Wrench } from "lucide-react";

export function AboutCard() {
  return (
    <div className="bento-card">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-colors duration-300" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            About
          </h2>
        </div>
        
        <div className="max-w-3xl space-y-5 text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
          <p className="font-medium text-stone-900 dark:text-stone-100 text-base leading-snug">
            Software developer specializing in React.js and modern JavaScript, building responsive, production-grade web applications using React 19, Next.js, Vite, and Tailwind CSS.
          </p>
          <p>
            Currently a Software Developer Intern at SugboDoc Technologies Inc., building full-stack web applications on-site for a healthcare technology platform. Also completing a Front-End Engineering Internship at FlyRank AI, developing React and Next.js applications with modern component architecture and deployment workflows. As COO of SWUdevs, I lead a 150+ member developer community, coordinating cross-functional teams and delivering workshops on web development and UI/UX best practices.
          </p>
          <blockquote className="border-l-2 border-[var(--accent)] pl-4 py-1 font-serif italic text-stone-855 dark:text-stone-200 text-base leading-relaxed">
            "I believe the best tools are the ones that get out of the user's way. That principle guides every interface I design and every component I write."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

const TECH_CATEGORIES = [
  {
    name: "Frontend",
    icon: Laptop,
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    name: "Libraries & Patterns",
    icon: Laptop,
    skills: ["React Hooks", "Framer Motion", "Leaflet", "Lucide React", "jsPDF", "pdfjs-dist"],
  },
  {
    name: "Backend & APIs",
    icon: Cpu,
    skills: ["Node.js", "Express", "REST APIs", "Firebase", "Supabase", "Cloudflare Workers"],
  },
  {
    name: "Developer Tools",
    icon: Wrench,
    skills: ["Git/GitHub", "VS Code", "Vite", "ESLint", "Vercel", "Render", "Netlify"],
  },
  {
    name: "AI-Assisted Development",
    icon: Brain,
    skills: ["Prompt Engineering", "LLM Integration", "Generative AI"],
  },
];

export function TechStackCard() {
  return (
    <div className="bento-card flex flex-col justify-between h-auto">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-colors duration-300" />
            <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
              Tech Stack
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {TECH_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="space-y-1.5">
                <h3 className="text-[10px] font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                  <Icon className="h-3 w-3 text-stone-400" />
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-stone-100/60 dark:bg-stone-900/60 border border-stone-200/50 dark:border-stone-800/80 text-stone-600 dark:text-stone-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


