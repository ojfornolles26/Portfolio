"use client";

import { ArrowUpRight } from "lucide-react";

const CERTS = [
  {
    name: "AI Fluency: Framework & Foundations",
    issuer: "Anthropic Education",
    year: "2026",
    link: "https://verify.skilljar.com/c/8gfps2x9hd8q",
  },
  {
    name: "Enterprise Design Thinking Practitioner",
    issuer: "IBM SkillsBuild",
    year: "2026",
    link: "https://www.credly.com/badges/44257081-7f93-4727-91aa-0fb7da8a8a2e/public_url",
  },
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
    name: "Flutter Development",
    issuer: "Google Skills / Google Cloud",
    year: "2026",
    link: "https://www.skills.google/public_profiles/cdd1b14e-f2fd-4625-a88c-cf4139540444/badges/23714436?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Full-Stack Development 101",
    issuer: "Simplilearn",
    year: "2026",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAwOTM5NDZfMTAzODQwODZfMTc3NjAxMzA1ODk0NC5wbmciLCJ1c2VybmFtZSI6Ik9ybGFuZG8gVC4gRm9ybm9sbGVzIEpyLiJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6075%2FFull-Stack-Development-101%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1587301939072218284&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVz3BM9jI3KqnKMEqyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDANn6669BAAAA",
  },
];

export default function Certifications() {
  return (
    <div className="editorial-section font-mono">
      <div className="editorial-header font-mono">Proofs of Mastery</div>
      <div className="pt-2 flex flex-col divide-y divide-[var(--foreground)]/15">
        {CERTS.map((cert, idx) => (
          <div
            key={idx}
            className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group transition-colors"
          >
            <div className="flex items-baseline gap-3">
              <span className="text-[10px] text-[var(--muted)] opacity-60 font-mono">
                {String(idx + 1).padStart(2, "0")}.
              </span>
              <span className="text-xs md:text-sm font-normal text-[var(--foreground)] group-hover:opacity-80 transition-opacity font-mono">
                {cert.name}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[var(--muted)] font-mono pl-6 sm:pl-0 shrink-0">
              <span>{cert.issuer}</span>
              <span className="opacity-40">·</span>
              <span>{cert.year}</span>
              {cert.link && cert.link !== "#" && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--foreground)] opacity-70 hover:opacity-100 transition-opacity"
                  title="Verify Certification"
                >
                  <ArrowUpRight className="h-3 w-3 inline ml-1" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
