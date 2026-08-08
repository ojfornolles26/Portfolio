"use client";

import { Laptop, Cpu, Brain, Wrench } from "lucide-react";

export function AboutCard() {
  return (
    <div className="editorial-section">
      <div className="editorial-header">What I Do</div>
      <div className="pt-2">
        <div className="max-w-3xl space-y-5 text-sm text-[var(--muted)] leading-relaxed font-mono">
          <p className="font-normal text-[var(--foreground)] text-base leading-snug">
            I started building for the web out of pure curiosity, wanting to see how code turns into real tools people actually use. Today, I work primarily with React and Next.js, focusing on clean UI and simple, reliable code.
          </p>
          <p>
            I'm currently interning at SugboDoc Technologies and FlyRank AI, where I work on full-stack web features and AI tools. Beyond day-to-day coding, I serve as COO of SWUdevs, running community operations, organizing workshops, leading peer-to-peer initiatives, and speaking on AI.
          </p>
          <blockquote className="border-l-2 border-[var(--foreground)]/40 pl-4 py-1 italic text-[var(--foreground)]/90 text-sm leading-relaxed font-mono">
            "Building real software taught me what textbooks couldn't. I learn best by shipping code, solving actual problems, and sharing what I figure out along the way."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

const techCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "react", color: "61DAFB", darkColor: "61DAFB" },
      { name: "Next.js", icon: "nextdotjs", color: "000000", darkColor: "FFFFFF" },
      { name: "JavaScript", icon: "javascript", color: "F7DF1E", darkColor: "F7DF1E" },
      { name: "HTML5", icon: "html5", color: "E34F26", darkColor: "FF6B4A" },
      { name: "CSS3", icon: "css", color: "1572B6", darkColor: "60A5FA" },
      { name: "Tailwind", icon: "tailwindcss", color: "06B6D4", darkColor: "22D3EE" },
      { name: "Framer", icon: "framer", color: "0055FF", darkColor: "60A5FA" },
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", icon: "nodedotjs", color: "5FA04E", darkColor: "4ADE80" },
      { name: "Express", icon: "express", color: "000000", darkColor: "FFFFFF" },
      { name: "PHP", icon: "php", color: "777BB4", darkColor: "A78BFA" },
      { name: "MySQL", icon: "mysql", color: "4479A1", darkColor: "93C5FD" },
      { name: "Firebase", icon: "firebase", color: "FFCA28", darkColor: "FFCA28" },
      { name: "Supabase", icon: "supabase", color: "3FCF8E", darkColor: "6EE7B7" },
      { name: "Workers", icon: "cloudflare", color: "F38020", darkColor: "FDBA74" },
    ],
  },
  {
    title: "Tools & Deploy",
    skills: [
      { name: "Git", icon: "git", color: "F05032", darkColor: "F87171" },
      { name: "GitHub", icon: "github", color: "181717", darkColor: "FFFFFF" },
      { name: "Vite", icon: "vite", color: "646CFF", darkColor: "818CF8" },
      { name: "VS Code", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Vercel", icon: "vercel", color: "000000", darkColor: "FFFFFF" },
      { name: "Netlify", icon: "netlify", color: "00C7B7", darkColor: "2DD4BF" },
      { name: "Render", icon: "render", color: "46E3B7", darkColor: "5EEAD4" },
    ],
  },
];

export function TechStackCard() {
  return (
    <div className="w-full space-y-6 mt-4">
      {techCategories.map((category, idx) => (
        <div key={idx} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-b border-stone-200/40 dark:border-stone-800/40 pb-6 last:border-0">
          <h3 className="text-xs font-bold tracking-widest uppercase text-[var(--muted)] md:w-48 shrink-0 md:pt-1">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-4">
            {category.skills.map((skill) => {
              const lightSrc = skill.customUrl || `https://cdn.simpleicons.org/${skill.icon}/${skill.color}`;
              const darkSrc = skill.customUrl || `https://cdn.simpleicons.org/${skill.icon}/${skill.darkColor}`;
              return (
                <div key={skill.name} className="flex items-center gap-2 text-[var(--foreground)] group">
                  {/* Light Mode Logo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={lightSrc} 
                    alt={skill.name} 
                    className="w-4 h-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:hidden"
                  />
                  {/* Dark Mode Logo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={darkSrc} 
                    alt={skill.name} 
                    className="w-4 h-4 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 hidden dark:block"
                  />
                  <span className="font-serif text-sm leading-relaxed">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}


