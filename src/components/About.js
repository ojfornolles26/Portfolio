"use client";

import { Laptop, Cpu, Brain, Wrench } from "lucide-react";

export function AboutCard() {
  return (
    <div className="bento-card flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-colors duration-300" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            About
          </h2>
        </div>
        <div className="space-y-3.5 text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
          <p className="font-medium text-stone-900 dark:text-stone-100">
            Frontend developer specializing in React.js and modern JavaScript, with hands-on experience building responsive, production-grade web applications using React 19, Next.js, Vite, and Tailwind CSS. Currently completing a Front-End Engineering Internship at FlyRank AI, developing React and Next.js applications with modern component architecture and deployment workflows. As COO of SWUdevs, I lead a 150+ member developer community, coordinating cross-functional teams and delivering workshops on web development and UI/UX best practices.
          </p>
          <p>
            As COO of SWUdevs, I coordinate operations and technical initiatives while facilitating hands-on workshops and peer-to-peer tutoring sessions covering JavaScript, HTML/CSS, Web Development, UI/UX, Git, Python, and Java, helping students build practical skills for hackathons, technical projects, and real-world software development.
          </p>
          <p className="font-serif italic text-stone-600 dark:text-stone-300 text-[15px] leading-relaxed">
            I believe the best tools are the ones that get out of the user's way. That principle guides every interface I design and every component I write.
          </p>
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
    <div className="bento-card flex flex-col justify-between h-full">
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
                <h3 className="text-[11px] font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5" />
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs rounded bg-transparent border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 font-medium"
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

