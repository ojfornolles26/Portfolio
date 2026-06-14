"use client";

import { ExternalLink } from "lucide-react";
import { Github } from "./icons";

const PROJECTS = [
  {
    title: "Filo",
    category: "Web App / Productivity",
    description:
      "Browser-native document workspace for batch image-to-PDF conversion and PDF text extraction with structured Markdown output. Processes files entirely client-side for maximum privacy, with no server uploads required.",
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS", "jsPDF", "PDF.js", "JSZip", "Motion"],
    github: "https://github.com/ojfornolles26/Filo",
    live: "https://filo-5iot.onrender.com/",
    metrics: ["100% Client-Side Processing", "Zero-Server PDF & Image Conversion"],
  },
  {
    title: "Signity",
    category: "Web App / Productivity",
    description:
      "Privacy-first digital signature creator with high-precision line smoothing and real-time canvas rendering. Exports auto-cropped transparent PNG files ready for professional documents. All processing runs locally, ensuring signature data never leaves the device.",
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS", "Motion", "HTML5 Canvas"],
    github: "https://github.com/ojfornolles26/Signity",
    live: "https://signity-b8l8.onrender.com/",
    metrics: ["100% Private & Client-Side", "Auto-Cropped Transparent PNG"],
  },
  {
    title: "Embraze",
    category: "Web App / Community Safety (Active Development)",
    description:
      "Community-driven safety and hazard reporting platform featuring an interactive map of Cebu City. Enables residents to report localized hazards with auto-expiry, upvote active issues to verify validity, and dispute inaccurate entries.",
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS", "Leaflet", "Lucide React"],
    github: "https://github.com/ojfornolles26/Embraze",
    metrics: ["Interactive Leaflet Map", "Community Verification System"],
  },
  {
    title: "Portfolio",
    category: "Web App / Portfolio",
    description:
      "Editorial-inspired, minimalist digital resume and portfolio showcasing clean software engineering, local-first web applications, and AI integration workflows. Features fluid typography, seamless light/dark theme transition, and static optimization.",
    tech: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Motion", "Lucide React"],
    github: "https://github.com/ojfornolles26/Portfolio",
    metrics: ["Editorial-inspired typography", "Static Page Generation"],
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
            className={`flex flex-col justify-between p-3.5 rounded-lg bg-transparent border border-stone-200/60 dark:border-stone-800/60 transition-all duration-300 hover:border-stone-400 dark:hover:border-stone-700 hover:shadow-[0_2px_8px_rgba(0,0,0,0.015)] ${
              idx === PROJECTS.length - 1 && PROJECTS.length % 2 !== 0
                ? "sm:col-span-2"
                : ""
            }`}
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
