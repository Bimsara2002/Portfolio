import SkillBento from "@/components/sections/SkillBento";
import { personal, education } from "@/lib/data";
import type { Metadata } from "next";
import { User, GraduationCap, BookOpen, Terminal, MapPin, Mail } from "lucide-react";


export const metadata: Metadata = {
  title: "Experience — K A Bimsara Kaushal",
  description: "About K A Bimsara Kaushal — skills, education, and background as a full-stack developer from Sri Lanka.",
};

export default function ExperiencePage() {
  return (
    <div style={{ padding: "5rem 1.5rem", minHeight: "80vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── About Me ─────────────────────────────────────────── */}
        <section style={{ marginBottom: "5rem" }}>
          <div className="section-label">
            <User size={14} /> About Me
          </div>
          <h1 className="section-title" style={{ marginBottom: "2rem" }}>
            Who I Am
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", alignItems: "start" }}>
            {/* Bio card */}
            <div className="glass" style={{ padding: "2rem", borderRadius: "1rem" }}>
              <div style={{
                width: "80px", height: "80px", borderRadius: "1rem",
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.25rem",
                boxShadow: "0 0 25px var(--accent-glow)",
              }}>
                <Terminal size={28} color="white" />
              </div>
              <h2 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                {personal.name}
              </h2>
              <p style={{ color: "var(--accent-light)", fontFamily: "var(--font-mono)", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
                {personal.role}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { icon: GraduationCap, label: "University", value: personal.university },
                  { icon: BookOpen, label: "Year", value: personal.year },
                  { icon: MapPin, label: "Location", value: personal.location },
                  { icon: Mail, label: "Email", value: personal.email },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginTop: "0.2rem" }}>
                      <item.icon size={15} />
                    </span>
                    <div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {personal.bio.map((para, i) => (
                <p key={i} style={{ color: "var(--text-secondary)", fontSize: "1.025rem", lineHeight: 1.75 }}>
                  {para}
                </p>
              ))}

              {/* Quick traits */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginTop: "0.5rem" }}>
                {[
                  "Clean code advocate",
                  "Problem-first thinker",
                  "Continuous learner",
                  "Team collaborator",
                  "Open source enthusiast",
                  "Design-aware developer",
                ].map((trait) => (
                  <div key={trait} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>✓</span>
                    <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ────────────────────────────────────────────── */}
        <section style={{ marginBottom: "5rem" }} className="bg-grid" id="skills">
          <div style={{ padding: "3rem", borderRadius: "1.5rem", background: "var(--bg-secondary)" }}>
            <div className="section-label">
              <BookOpen size={14} /> Technical Skills
            </div>
            <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
              My Skill Set
            </h2>
            <SkillBento />
          </div>
        </section>

        {/* ── Education ─────────────────────────────────────────── */}
        <section style={{ marginBottom: "3rem" }}>
          <div className="section-label">
            <GraduationCap size={14} /> Education
          </div>
          <h2 className="section-title" style={{ marginBottom: "2.5rem" }}>
            Academic Background
          </h2>

          <div style={{ position: "relative", paddingLeft: "3rem" }}>
            <div className="timeline-line" />

            {education.map((edu, idx) => (
              <div key={idx} style={{ position: "relative", marginBottom: "2.5rem", display: "flex", gap: "1.5rem" }}>
                {/* Dot */}
                <div className="timeline-dot" style={{ position: "absolute", left: "-2.15rem", top: "1.25rem" }} />

                <div className="glass glass-hover" style={{ padding: "1.75rem", borderRadius: "1rem", flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <div>
                      <div className="tag" style={{ marginBottom: "0.5rem", display: "inline-flex" }}>{edu.shortName}</div>
                      <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.05rem" }}>
                        {edu.degree}
                      </h3>
                      <p style={{ color: "var(--accent-light)", fontSize: "0.875rem", marginTop: "0.2rem" }}>
                        {edu.institution}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                        {edu.period}
                      </div>
                      <div style={{
                        marginTop: "0.4rem", padding: "0.2rem 0.6rem", borderRadius: "999px",
                        background: edu.status === "Completed" ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)",
                        border: `1px solid ${edu.status === "Completed" ? "rgba(16,185,129,0.3)" : "rgba(245,158,11,0.3)"}`,
                        fontSize: "0.68rem", color: edu.status === "Completed" ? "#34d399" : "#fbbf24",
                        fontFamily: "var(--font-mono)", display: "inline-block",
                      }}>
                        {edu.status}
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                    {edu.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {edu.highlights.map((h) => (
                      <span key={h} className="tag-cyan" style={{ fontSize: "0.72rem", padding: "0.2rem 0.6rem", borderRadius: "999px", border: "1px solid rgba(6,182,212,0.25)", background: "rgba(6,182,212,0.1)", color: "#22d3ee", fontFamily: "var(--font-mono)", display: "inline-flex" }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Values ────────────────────────────────────────────── */}
        <section>
          <div
            className="glass"
            style={{ padding: "2.5rem", borderRadius: "1.25rem", textAlign: "center", position: "relative", overflow: "hidden" }}
          >
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08), transparent 70%)",
              pointerEvents: "none",
            }} />
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>
              What Drives Me
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: 1.75 }}>
              I believe great software comes from the perfect blend of technical precision and user empathy. Every line of code I write is in service of a better user experience.
            </p>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
              {["Clean Architecture", "User-Centric Design", "Performance First", "Continuous Improvement"].map((v) => (
                <div key={v} className="tag-purple" style={{ padding: "0.4rem 1rem", borderRadius: "999px", border: "1px solid rgba(168,85,247,0.25)", background: "rgba(168,85,247,0.1)", color: "#c084fc", fontFamily: "var(--font-mono)", fontSize: "0.82rem", display: "inline-flex" }}>
                  {v}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
