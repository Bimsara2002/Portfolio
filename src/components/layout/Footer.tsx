"use client";

import Link from "next/link";

import { personal, navLinks, socials } from "@/lib/data";
import { Mail, Code2, Heart, ArrowUpRight, MapPin } from "lucide-react";


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

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  mail: <Mail size={18} />,
};


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-glow" style={{ borderTop: "1px solid var(--border)", marginTop: "auto" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "10px",
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Code2 size={18} color="white" />
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--text-primary)" }}>
                {personal.shortName}<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "260px" }}>
              {personal.role} — Building digital experiences that matter.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.5rem", fontFamily: "var(--font-mono)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <MapPin size={12} color="var(--accent)" /> {personal.location}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "1rem", fontSize: "0.9rem" }}>Navigation</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent-light)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "1rem", fontSize: "0.9rem" }}>Connect</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.name !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = s.color; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                >
                  {iconMap[s.icon]}
                  <span>{s.handle}</span>
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--border-subtle)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}>
            © {year} {personal.name}. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
            Built with <Heart size={12} style={{ color: "#f87171" }} fill="#f87171" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
