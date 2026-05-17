"use client";

import React from "react";

// Inline Technology SVGs
const TechIcons = {
  PHP: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M7 14.5c.5-1.5 1-3.5 1-3.5.5-1.5.5-2 1.5-2s1.5.5 1.5 1.5c0 .5-.5 1.5-.5 1.5s.5-1 1-1.5.8-.5 1.2-.5 1.3.4 1.3 1.5c0 1.2-.8 3.5-.8 3.5" />
      <path d="M11 12.5h4M6.5 14.5c.5-1.5 1-3.5 1-3.5M16 11c0-.5-.2-1-.7-1h-1.3c-.5 0-.8.4-.8.9v3.6" />
    </svg>
  ),
  Laravel: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4l8-2 8 2v4l-8 2-8-2z" />
      <path d="M12 10v12" />
      <path d="M4 14l8 2 8-2" />
      <path d="M4 18l8 2 8-2" />
    </svg>
  ),
  React: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  Nextjs: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 16V8l8 8V8" />
    </svg>
  ),
  TypeScript: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="4" />
      <path d="M10 8h4M12 8v8M18 10c-1-1-2.5-.5-2.5 1s1.5 1.5 2.5 2.5-1.5 2.5-3 1.5" />
    </svg>
  ),
  JavaScript: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="4" />
      <path d="M15 15c.5.5 1.5 1 2 1s1-.5 1-1-.5-1-1.5-1.5-1.5-1-1.5-2.5 1.5-2.5 3-1.5M10 8v6c0 1-.5 2-2 2" />
    </svg>
  ),
  Flutter: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M14 2L4 12l4 4 12-12z" />
      <path d="M14 14l-4 4 4 4h6l-6-6z" />
    </svg>
  ),
  Spring: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm0-4.5c0 .83-.67 1.5-1.5 1.5S10 12.83 10 12s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm0-4.5c0 .83-.67 1.5-1.5 1.5S10 8.33 10 7.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
    </svg>
  ),
  Python: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c2.76 0 5 2.24 5 5v2h2c1.66 0 3 1.34 3 3v2c0 2.76-2.24 5-5 5h-2v-2c0-1.66-1.34-3-3-3H7c-1.66 0-3-1.34-3-3v-2c0-2.76 2.24-5 5-5h3z" />
      <circle cx="8.5" cy="6.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="17.5" r="1" fill="currentColor" />
      <path d="M12 22c-2.76 0-5-2.24-5-5v-2H5c-1.66 0-3-1.34-3-3v-2c0-2.76 2.24-5 5-5h2v2c0 1.66 1.34 3 3 3h5c1.66 0 3 1.34 3 3v2c0 2.76-2.24 5-5 5h-3z" />
    </svg>
  ),
  MySQL: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  Git: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M6 9v6M9 18h6" />
    </svg>
  ),
  Tailwind: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 6.5c-2.8 0-4.5 1.4-5.1 4.2 1-.6 2.1-.8 3.4-.4 1.1.3 1.9 1.1 2.8 2 1.4 1.5 3 3.2 6.9 3.2 2.8 0 4.5-1.4 5.1-4.2-1 .6-2.1.8-3.4.4-1.1-.3-1.9-1.1-2.8-2-1.4-1.5-3-3.2-6.9-3.2zM5.1 13.3c-2.8 0-4.5 1.4-5.1 4.2 1-.6 2.1-.8 3.4-.4 1.1.3 1.9 1.1 2.8 2 1.4 1.5 3 3.2 6.9 3.2 2.8 0 4.5-1.4 5.1-4.2-1 .6-2.1.8-3.4.4-1.1-.3-1.9-1.1-2.8-2-1.4-1.5-3-3.2-6.9-3.2z" />
    </svg>
  ),
  Firebase: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15l8-13 3 6M12 2l8 13-8 5-8-5" />
      <path d="M4 15l8 5 8-5M12 9l5 9H7z" />
    </svg>
  ),
  VSCode: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 22V2l-7 5.5L6.5 4 2 8l5 4-5 4 4.5 4 4.5-3.5L18 22z" />
      <path d="M18 10l-7-3v10l7-3" />
    </svg>
  ),
  Livewire: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
};

const techRow1 = [
  { name: "PHP", icon: TechIcons.PHP, color: "#777bb4" },
  { name: "Laravel", icon: TechIcons.Laravel, color: "#ff2d20" },
  { name: "Livewire", icon: TechIcons.Livewire, color: "#fb70a9" },
  { name: "React", icon: TechIcons.React, color: "#00d8ff" },
  { name: "Next.js", icon: TechIcons.Nextjs, color: "#7f7f7f" },
  { name: "TypeScript", icon: TechIcons.TypeScript, color: "#3178c6" },
  { name: "Tailwind CSS", icon: TechIcons.Tailwind, color: "#38bdf8" },
  { name: "JavaScript", icon: TechIcons.JavaScript, color: "#f7df1e" },
];

const techRow2 = [
  { name: "Flutter", icon: TechIcons.Flutter, color: "#02569b" },
  { name: "Spring Boot", icon: TechIcons.Spring, color: "#6db33f" },
  { name: "Python", icon: TechIcons.Python, color: "#3776ab" },
  { name: "MySQL", icon: TechIcons.MySQL, color: "#00758f" },
  { name: "Git", icon: TechIcons.Git, color: "#f05032" },
  { name: "Firebase", icon: TechIcons.Firebase, color: "#ffca28" },
  { name: "VS Code", icon: TechIcons.VSCode, color: "#007acc" },
];

export default function TechMarquee() {
  return (
    <section 
      style={{ 
        padding: "4rem 0", 
        background: "var(--bg-secondary)", 
        borderTop: "1px solid var(--border-subtle)", 
        borderBottom: "1px solid var(--border-subtle)",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Background radial glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        height: "100%",
        background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.35,
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", marginBottom: "2.5rem", zIndex: 1, position: "relative" }}>
        <div style={{ textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Stack &amp; Tools</div>
          <h2 className="section-title" style={{ fontSize: "1.85rem", marginBottom: "0.5rem" }}>Technologies I Use Every Day</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "500px", margin: "0 auto" }}>
            Proficient with a wide spectrum of modern languages, tools, frameworks and relational databases.
          </p>
        </div>
      </div>

      {/* Infinite scrolling marquee containers */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative", zIndex: 1 }}>
        
        {/* Row 1: Sliding Left */}
        <div className="marquee-wrapper">
          <div className="marquee-track sliding-left">
            {/* Double the array for infinite illusion */}
            {[...techRow1, ...techRow1, ...techRow1].map((tech, idx) => (
              <div 
                key={`${tech.name}-${idx}`} 
                className="tech-marquee-card glass"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  color: "var(--text-primary)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tech.color;
                  e.currentTarget.style.color = tech.color;
                  e.currentTarget.style.boxShadow = `0 0 15px ${tech.color}35`;
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <span className="tech-marquee-icon">{React.createElement(tech.icon)}</span>
                <span style={{ fontWeight: 600 }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Sliding Right */}
        <div className="marquee-wrapper">
          <div className="marquee-track sliding-right">
            {[...techRow2, ...techRow2, ...techRow2].map((tech, idx) => (
              <div 
                key={`${tech.name}-${idx}`} 
                className="tech-marquee-card glass"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  color: "var(--text-primary)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tech.color;
                  e.currentTarget.style.color = tech.color;
                  e.currentTarget.style.boxShadow = `0 0 15px ${tech.color}35`;
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <span className="tech-marquee-icon">{React.createElement(tech.icon)}</span>
                <span style={{ fontWeight: 600 }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
          display: flex;
        }

        .marquee-track {
          display: flex;
          gap: 1.5rem;
          white-space: nowrap;
          width: max-content;
        }

        .sliding-left {
          animation: marquee-left 25s linear infinite;
        }

        .sliding-right {
          animation: marquee-right 22s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.333% - 0.75rem));
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(calc(-33.333% - 0.75rem));
          }
          100% {
            transform: translateX(0);
          }
        }

        .tech-marquee-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .tech-marquee-card:hover .tech-marquee-icon {
          transform: rotate(8deg) scale(1.15);
        }
      `}</style>
    </section>
  );
}
