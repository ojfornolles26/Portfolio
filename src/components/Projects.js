"use client";

import { ExternalLink } from "lucide-react";
import { Github } from "./icons";

const PROJECTS = [
  {
    title: "Filo",
    category: "Web App / Productivity",
    description:
      "React 19 document workspace and offline-first PWA with modular components for batch format conversion (PNG, JPEG, WebP), high-DPI canvas cropping, local PDF audio reading, and offline text/Markdown extraction. Processes files 100% client-side for absolute data privacy.",
    tech: ["React", "Vite", "Tailwind CSS", "jsPDF", "pdfjs-dist", "JSZip", "PWA", "Motion"],
    github: "https://github.com/ojfornolles26/Filo",
    live: "https://filo-5iot.onrender.com/",
    metrics: [
      "100% Local Offline PWA Processing",
      "Local PDF Text & Audio Reader",
      "Format Converter (PNG/JPEG/WebP)",
      "High-DPI Canvas Cropper & Editor",
    ],
  },
  {
    title: "Signity",
    category: "Web App / Productivity",
    description:
      "Privacy-first React application for digital signatures with dual creator modes: hand-drawn signing via HTML5 Canvas with real-time useRef state synchronization, and typed calligraphy with dynamic font styling. Features high-precision curve smoothing and pixel-based auto-cropping for transparent PNG export.",
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS", "Motion", "HTML5 Canvas", "Google Fonts"],
    github: "https://github.com/ojfornolles26/Signity",
    live: "https://signity-b8l8.onrender.com/",
    metrics: [
      "Dual Hand-Drawn & Typed Modes",
      "6 Calligraphy & Cursive Font Styles",
      "6 Premium Ink Colors & Pen Controls",
      "Pixel-Based Auto-Cropped PNG Export",
    ],
  },
  {
    title: "Embraze",
    category: "Web App / Community Safety",
    description:
      "Community-driven safety and hazard reporting React application for Cebu with an interactive Leaflet map featuring z-index layering and opacity aging. Includes photo upload with canvas compression, thumbs voting verification, geolocation capture, localStorage persistence, and social-media-style incident detail views with dark/light theming.",
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS", "Leaflet", "Lucide React", "Geolocation API", "Canvas API"],
    github: "https://github.com/ojfornolles26/Embraze",
    metrics: [
      "Interactive Leaflet Map with Opacity Aging",
      "Photo Upload with Canvas Compression",
      "Thumbs Voting Verification System",
      "LocalStorage Persistence & Dark Mode",
    ],
  },
  {
    title: "Portfolio",
    category: "Web App / Portfolio",
    description:
      "Next.js 16 portfolio built with React 19, featuring 6 reusable components, data-driven rendering, Framer Motion animations with AnimatePresence, accessible semantic HTML (aria-labels, heading hierarchy), dark/light theme toggling, and a responsive bento grid layout.",
    tech: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Motion", "Lucide React"],
    github: "https://github.com/ojfornolles26/Portfolio",
    metrics: [
      "Editorial-Inspired Typography",
      "Responsive Bento Grid Layout",
      "Framer Motion Micro-Animations",
      "Static Page Optimization",
    ],
  },
];

export default function Projects() {
  return (
    <div className="bento-card">
      <div className="flex items-center gap-2 mb-6">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-colors duration-300" />
        <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
          Selected Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className={`group/project flex flex-col justify-between p-4 rounded border border-stone-200/60 dark:border-stone-900 bg-stone-100/10 dark:bg-stone-950/10 hover:bg-stone-100/20 dark:hover:bg-stone-950/20 transition-all duration-300 hover:border-stone-350 dark:hover:border-stone-750 hover:shadow-[0_2px_6px_rgba(0,0,0,0.015)] ${
              idx === PROJECTS.length - 1 && PROJECTS.length % 2 !== 0
                ? "sm:col-span-2"
                : ""
            }`}
          >
            <div>
              {/* Header: Number, Category & Actions */}
              <div className="flex justify-between items-center mb-2.5">
                <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="font-serif italic font-bold text-[var(--accent)]">
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  <span>
                    {project.category.includes(" (") ? (
                      <>
                        {project.category.split(" (")[0]}{" "}
                        <span className="opacity-60">
                          ({project.category.split(" (")[1]}
                        </span>
                      </>
                    ) : (
                      project.category
                    )}
                  </span>
                </span>
                <div className="flex items-center gap-2.5">
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
                      className="text-stone-400 hover:text-[var(--accent)] dark:text-stone-500 dark:hover:text-[var(--accent)] transition-colors flex items-center gap-0.5 group/link"
                      aria-label={`${project.title} Live`}
                    >
                      <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-1.5 font-sans group-hover/project:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="mb-4 space-y-1 border-t border-stone-200/50 dark:border-stone-900/60 pt-3 flex flex-col">
                {project.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex items-start gap-2 text-[10px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1 mt-auto pt-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-stone-100/40 dark:bg-stone-900/40 border border-stone-200/40 dark:border-stone-900/80 text-stone-500 dark:text-stone-400"
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
