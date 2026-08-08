"use client";

import { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Github } from "./icons";

const PROJECTS = [
  {
    title: "Filo",
    subtitle: "2025 / React 19 / Privacy Document Workspace",
    category: "Productivity",
    description:
      "React 19 document workspace & offline-first PWA with modular tools for batch format conversion (PNG, JPEG, WebP), high-DPI canvas cropping, local PDF audio reading, and offline text extraction. 100% client-side processing.",
    tech: ["React", "Vite", "Tailwind CSS", "jsPDF", "PWA"],
    github: "https://github.com/ojfornolles26/Filo",
    live: "https://filo-5iot.onrender.com/",
  },
  {
    title: "Signity",
    subtitle: "2025 / React / Digital Signature Engine",
    category: "Utility",
    description:
      "Privacy-first React application for digital signatures with dual creator modes: hand-drawn signing via HTML5 Canvas with real-time useRef state sync, and typed calligraphy with dynamic font styling.",
    tech: ["React", "Vite", "HTML5 Canvas", "Tailwind CSS"],
    github: "https://github.com/ojfornolles26/Signity",
    live: "https://signity-b8l8.onrender.com/",
  },
  {
    title: "Embraze",
    subtitle: "2025 / React / Community Safety Map",
    category: "Community Safety",
    description:
      "Community safety & hazard reporting application for Cebu with an interactive Leaflet map featuring z-index layering and opacity aging. Includes photo compression, thumbs voting, and dark/light theming.",
    tech: ["React", "Vite", "Leaflet", "Geolocation API"],
    github: "https://github.com/ojfornolles26/Embraze",
  },
  {
    title: "Portfolio",
    subtitle: "2026 / Next.js 16 / Minimalist Web App",
    category: "Portfolio",
    description:
      "Next.js 16 portfolio built with React 19, featuring full-screen SPA view switcher, custom canvas particle dither texture, theme modes (Light/Dark/Ember/Mono), and accessible layout architecture.",
    tech: ["React 19", "Next.js 16", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ojfornolles26/Portfolio",
  },
];

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <div className="editorial-section">
      <div className="editorial-header">What I've Built</div>
      <div className="pt-4 flex flex-col gap-10">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="group relative border-b border-[var(--border)]/20 pb-8 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              {/* Large Minimalist Title (Keita Yamada Style) */}
              <h3 className="text-3xl md:text-5xl font-extralight tracking-tight text-[var(--foreground)] group-hover:opacity-80 transition-opacity">
                {project.title}
              </h3>

              {/* Action Links */}
              <div className="flex items-center gap-4 text-xs font-mono text-[var(--muted)]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[var(--foreground)] transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[var(--foreground)] transition-colors font-bold"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Subtitle / Metadata */}
            <p className="text-xs font-mono text-[var(--muted)] mt-2">
              {project.subtitle}
            </p>

            {/* Expanded Description & Tech Badges */}
            <div className="mt-4 max-w-xl space-y-3">
              <p className="text-sm text-[var(--foreground)]/80 leading-relaxed font-sans">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px]">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 border border-[var(--border)]/30 text-[var(--muted)] rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
