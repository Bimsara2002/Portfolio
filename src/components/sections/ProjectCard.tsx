"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";
import ProjectMockup from "./ProjectMockup";



const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  color: string;
  github: string;
  live: string | null;
  featured: boolean;
  category: string;
  status: string;
  highlights: string[];
};

export default function ProjectCard({ project, variant = "default" }: { project: Project; variant?: "default" | "featured" }) {
  const statusColor =
    project.status === "Completed" ? "#10b981" :
    project.status === "In Progress" ? "#f59e0b" : "#6366f1";

  return (
    <div
      className="project-card"
      style={variant === "featured" ? { gridColumn: "span 1" } : {}}
    >
      {/* Top accent line colored per project */}
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${project.color}, transparent)`, borderRadius: "1rem 1rem 0 0" }} />

      {/* Exquisite graphical UI mockup representing the project */}
      <ProjectMockup id={project.id} color={project.color} category={project.category} title={project.title} />

      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
          <div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: "0.7rem",
              color: "var(--text-muted)", display: "block", marginBottom: "0.25rem",
            }}>
              {project.category}
            </span>
            <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.3 }}>
              {project.title}
            </h3>
          </div>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.35rem",
            padding: "0.2rem 0.6rem", borderRadius: "999px",
            border: `1px solid ${statusColor}40`,
            background: `${statusColor}15`,
            fontSize: "0.68rem", fontFamily: "var(--font-mono)",
            color: statusColor, flexShrink: 0, marginLeft: "0.75rem",
          }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: statusColor }} />
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1rem", flex: 1 }}>
          {project.description}
        </p>

        {/* Highlights */}
        <ul style={{ marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          {project.highlights.map((h) => (
            <li key={h} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <span style={{ color: project.color, fontSize: "0.9rem" }}>›</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
          {project.tech.map((t) => (
            <span key={t} className="tag" style={{ fontSize: "0.7rem" }}>{t}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: "0.35rem",
              color: "var(--text-secondary)", fontSize: "0.82rem",
              textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
          >
            <GithubIcon size={15} /> Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: "0.35rem",
                color: "var(--text-secondary)", fontSize: "0.82rem",
                textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent-light)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
