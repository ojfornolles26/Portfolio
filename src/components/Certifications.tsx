"use client";

import { Award, ArrowUpRight } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year: string;
  link: string;
}

const CERTS: Certification[] = [
  {
    name: "Retrieval-Augmented Generation for Enhanced AI Outputs",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "https://www.credly.com/badges/85d736a4-2e7a-4d27-b9b3-fdbe403f47f7/linked_in_profile",
  },
  {
    name: "Gemini for Application Developers",
    issuer: "Google Cloud",
    year: "2026",
    link: "https://www.skills.google/public_profiles/cdd1b14e-f2fd-4625-a88c-cf4139540444/badges/24040192?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "https://www.credly.com/badges/2f5683e1-11e9-453f-98d4-8665aaf905f8/linked_in_profile",
  },
  {
    name: "Full-Stack Development 101",
    issuer: "Simplilearn",
    year: "2026",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAwOTM5NDZfMTAzODQwODZfMTc3NjAxMzA1ODk0NC5wbmciLCJ1c2VybmFtZSI6Ik9ybGFuZG8gVC4gRm9ybm9sbGVzIEpyLiJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6075%2FFull-Stack-Development-101%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1587301939072218284&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVz3BM9jI3KqnKMEqyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDANn6669BAAAA",
  },
  {
    name: "Flutter Development",
    issuer: "Google Skills / Google Cloud",
    year: "2026",
    link: "https://www.skills.google/public_profiles/cdd1b14e-f2fd-4625-a88c-cf4139540444/badges/23714436?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
];

export default function Certifications() {
  return (
    <div className="bento-card">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-colors duration-300" />
          <h2 className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {CERTS.map((cert, idx) => (
            <div
              key={idx}
              className={`flex items-start justify-between gap-3 p-3 rounded-lg bg-transparent border border-stone-200/60 dark:border-stone-800/60 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300 group/item ${
                idx === CERTS.length - 1 && CERTS.length % 2 !== 0
                  ? "md:col-span-2 md:mx-auto md:w-[calc(50%-6px)] w-full"
                  : ""
              }`}
            >
              <div className="flex gap-2.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-transparent border border-stone-200 dark:border-stone-800 text-stone-400 dark:text-stone-500 group-hover/item:text-[var(--accent)] dark:group-hover/item:text-[var(--accent)] transition-colors duration-300">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-stone-800 dark:text-stone-200 leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-[10px] text-stone-500 dark:text-stone-400 mt-1">
                    {cert.issuer} &middot; {cert.year}
                  </p>
                </div>
              </div>

              {cert.link && cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-[var(--accent)] dark:text-stone-500 dark:hover:text-[var(--accent)] transition-colors flex-shrink-0 mt-0.5"
                  title="Verify Certification"
                >
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
