import Hero from "@/components/sections/Hero";
import ProjectCard from "@/components/sections/ProjectCard";
import SkillBento from "@/components/sections/SkillBento";
import TechMarquee from "@/components/sections/TechMarquee";
import Link from "next/link";
import { projects, skillCategories, personal } from "@/lib/data";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />
      <TechMarquee />


      {/* ── Featured Projects ─────────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div className="section-label">
              <Sparkles size={14} /> Featured Work
            </div>
            <h2 className="section-title">Projects I&apos;ve Built</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", maxWidth: "520px", fontSize: "1.05rem" }}>
              Real-world applications built with modern tech stacks and production-quality code.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/projects" className="btn-secondary" style={{ display: "inline-flex" }}>
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Skills Preview ─────────────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem" }} className="bg-grid">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div className="section-label">Technical Skills</div>
            <h2 className="section-title">What I Work With</h2>
            <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem", maxWidth: "520px", fontSize: "1.05rem" }}>
              A focused toolkit built through hands-on project development and continuous learning.
            </p>
          </div>
          <SkillBento />
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/experience" className="btn-secondary" style={{ display: "inline-flex" }}>
              Full Experience <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section style={{ padding: "6rem 1.5rem", background: "var(--bg-secondary)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <div
            className="glass"
            style={{
              padding: "3.5rem 2rem",
              borderRadius: "1.5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at center, rgba(99,102,241,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "relative" }}>
              <Sparkles size={38} color="var(--accent)" style={{ margin: "0 auto 1.25rem", display: "block", animation: "float 3s ease-in-out infinite" }} />

              <h2 className="section-title" style={{ marginBottom: "1rem" }}>
                Let&apos;s Build Something Amazing
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", marginBottom: "2rem", lineHeight: 1.7 }}>
                I&apos;m currently open to freelance projects and collaborations. If you have an idea, let&apos;s talk about it!
              </p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="/contact" className="btn-primary">
                  Start a Conversation <ArrowRight size={18} />
                </Link>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
