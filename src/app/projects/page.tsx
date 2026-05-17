import { projects } from "@/lib/data";
import ProjectCard from "@/components/sections/ProjectCard";
import type { Metadata } from "next";
import { Layers, FolderCode, Server, Layout, CheckCircle2, Hammer, Star } from "lucide-react";


export const metadata: Metadata = {
  title: "Projects — K A Bimsara Kaushal",
  description: "A showcase of full-stack web applications and software projects built by K A Bimsara Kaushal.",
};

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  return (
    <div style={{ padding: "5rem 1.5rem", minHeight: "80vh" }} className="bg-grid">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem", maxWidth: "640px" }}>
          <div className="section-label">
            <Layers size={14} /> Portfolio
          </div>
          <h1 className="section-title" style={{ marginBottom: "1rem" }}>
            All Projects
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Every project here represents a real-world problem solved with production-grade code. Each one pushed my skills further.
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex", flexWrap: "wrap", gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {[
            { label: "Total Projects", value: projects.length, icon: "projects" },
            { label: "Full-Stack", value: projects.filter(p => p.category === "Full-Stack").length, icon: "backend" },
            { label: "Frontend", value: projects.filter(p => p.category === "Frontend").length, icon: "frontend" },
            { label: "Completed", value: projects.filter(p => p.status === "Completed").length, icon: "completed" },
          ].map((stat) => {
            const Icon = 
              stat.icon === "projects" ? FolderCode :
              stat.icon === "backend" ? Server :
              stat.icon === "frontend" ? Layout : CheckCircle2;
            return (
              <div
                key={stat.label}
                className="glass"
                style={{ padding: "1rem 1.5rem", borderRadius: "0.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
              >
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                  <Icon size={18} />
                </span>
                <div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--accent-light)", lineHeight: 1.2 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state for future */}
        <div
          className="glass"
          style={{
            marginTop: "3rem",
            padding: "3rem",
            borderRadius: "1rem",
            textAlign: "center",
            border: "1px dashed var(--border)",
            background: "rgba(99,102,241,0.03)",
          }}
        >
          <span style={{ display: "flex", justifyContent: "center", color: "var(--accent)", marginBottom: "0.75rem" }}>
            <Hammer size={32} />
          </span>
          <h3 style={{ color: "var(--text-secondary)", fontWeight: 600, marginBottom: "0.5rem" }}>
            More projects coming soon
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
            Currently building more cool stuff. Star my GitHub to follow along!
          </p>
          <a
            href="https://github.com/Bimsara2002"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: "inline-flex", gap: "0.4rem", marginTop: "1.25rem", alignItems: "center" }}
          >
            <Star size={14} fill="var(--accent)" stroke="var(--accent)" /> Star on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
