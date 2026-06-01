"use client";

import { ExternalLink } from "lucide-react";
import { Github } from "./icons";

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  metrics: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Filo",
    category: "Web App / Productivity",
    description:
      "A premium, browser-native document workspace that runs 100% locally on your device. Allows users to privately convert batches of images into PDF documents and extract structured text or formatted Markdown from PDFs.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "jsPDF", "PDF.js"],
    github: "https://github.com/orlandofornollesjr/Filo",
    live: "https://filo-5iot.onrender.com/",
    metrics: ["100% Client-Side Processing", "Zero-Server PDF & Image Conversion"],
  },
  {
    title: "Trae",
    category: "Mobile App / Productivity",
    description:
      "A cross-platform duty hour tracker for students and interns to log time against a monthly goal. Features a live timer, manual entry, per-day calendar logging with notes, multi-session support, a 7-day analytics chart, and smart daily/weekly catch-up guidance.",
    tech: ["React Native", "Expo", "Zustand", "Expo Router", "NativeWind", "Gifted Charts"],
    github: "https://github.com/orlandofornollesjr/Trae",
    live: "",
    metrics: ["Multi-Session & Monthly Archive", "Live Timer + Manual Logging"],
  },
  {
    title: "Signity",
    category: "Web App / Productivity",
    description:
      "A premium, client-side signature whiteboard that allows users to draw, auto-crop, and download high-fidelity transparent signatures. Features high-precision stroke smoothing and instant clipboard copying.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Motion", "HTML5 Canvas"],
    github: "https://github.com/ojfornolles26/Signity",
    live: "https://signity-b8l8.onrender.com/",
    metrics: ["100% Private & Client-Side", "Auto-Cropped Transparent PNG"],
  },
];

export default function Projects() {
  return (
    <div className="bento-card">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-colors duration-300" />
        <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
          Selected Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-3.5 rounded-lg bg-transparent border border-stone-200/60 dark:border-stone-800/60 transition-all duration-300 hover:border-stone-400 dark:hover:border-stone-700 hover:shadow-[0_2px_8px_rgba(0,0,0,0.015)]"
          >
            <div>
              {/* Header: Category & Actions */}
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[9px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-[var(--accent)] dark:text-stone-500 dark:hover:text-[var(--accent)] transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-[var(--accent)] dark:text-stone-500 dark:hover:text-[var(--accent)] transition-colors"
                      aria-label={`${project.title} Live`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-1">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="mb-3.5 space-y-0.5 border-t border-stone-200/60 dark:border-stone-800/60 pt-2 flex flex-col gap-0.5">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-stone-600 dark:text-stone-300">
                    <span className="h-1 w-1 rounded-full bg-stone-600 dark:bg-stone-300" />
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1 mt-auto pt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 text-[10px] rounded bg-transparent border border-stone-200/60 dark:border-stone-800/60 text-stone-500 dark:text-stone-400 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
