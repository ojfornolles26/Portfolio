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
            3rd-year BS IT student specializing in front-end development and currently a Front-End AI Engineer Intern @ FlyRank AI. Proven leader as COO of SWUdevs, managing operations for a 150+ member tech community, with deployed applications in privacy-first document workspaces and digital signatures, alongside an active community safety mapping project.
          </p>
          <p>
            As COO of SWUdevs, I coordinate operations and technical initiatives while facilitating hands-on workshops covering Python, Java, Git, HTML/CSS, JavaScript, Web Development, UI/UX, Prompt Engineering, and AI Integration, helping students build practical skills for hackathons, technical projects, and real-world software development.
          </p>
          <p className="font-serif italic text-stone-600 dark:text-stone-300 text-[15px] leading-relaxed">
            My applications are designed with a privacy-first architecture. By processing all operations directly in the browser, sensitive data like personal documents and digital signatures never leave the user's device.
          </p>
        </div>
      </div>
    </div>
  );
}

const TECH_CATEGORIES = [
  {
    name: "Frontend & Mobile",
    icon: Laptop,
    skills: ["React", "Next.js", "JavaScript", "HTML/CSS", "Tailwind CSS", "Flutter (Foundational)", "Dart (Foundational)"],
  },
  {
    name: "Backend & Serverless",
    icon: Cpu,
    skills: ["Node.js", "Firebase", "Supabase", "REST APIs", "Cloudflare Workers"],
  },
  {
    name: "AI & Emerging Tech",
    icon: Brain,
    skills: ["Generative AI", "RAG Pipelines", "LLM Integration"],
  },
  {
    name: "Developer Tools",
    icon: Wrench,
    skills: ["Git/GitHub", "VS Code", "Vite"],
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

