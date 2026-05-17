"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { personal, stats, techStack } from "@/lib/data";
import { Mail, ArrowDown, ChevronRight, Download, FolderCode, GitBranch, Cpu, Award, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";




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


const TechSVG = {
  PHP: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M7 14.5c.5-1.5 1-3.5 1-3.5.5-1.5.5-2 1.5-2s1.5.5 1.5 1.5c0 .5-.5 1.5-.5 1.5s.5-1 1-1.5.8-.5 1.2-.5 1.3.4 1.3 1.5c0 1.2-.8 3.5-.8 3.5" />
      <path d="M11 12.5h4M6.5 14.5c.5-1.5 1-3.5 1-3.5M16 11c0-.5-.2-1-.7-1h-1.3c-.5 0-.8.4-.8.9v3.6" />
    </svg>
  ),
  Laravel: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4l8-2 8 2v4l-8 2-8-2z" />
      <path d="M12 10v12" />
      <path d="M4 14l8 2 8-2" />
      <path d="M4 18l8 2 8-2" />
    </svg>
  ),
  Livewire: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  "Next.js": () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 16V8l8 8V8" />
    </svg>
  ),
  React: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  TypeScript: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="4" />
      <path d="M10 8h4M12 8v8M18 10c-1-1-2.5-.5-2.5 1s1.5 1.5 2.5 2.5-1.5 2.5-3 1.5" />
    </svg>
  ),
  "Tailwind CSS": () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 6.5c-2.8 0-4.5 1.4-5.1 4.2 1-.6 2.1-.8 3.4-.4 1.1.3 1.9 1.1 2.8 2 1.4 1.5 3 3.2 6.9 3.2 2.8 0 4.5-1.4 5.1-4.2-1 .6-2.1.8-3.4.4-1.1-.3-1.9-1.1-2.8-2-1.4-1.5-3-3.2-6.9-3.2zM5.1 13.3c-2.8 0-4.5 1.4-5.1 4.2 1-.6 2.1-.8 3.4-.4 1.1.3 1.9 1.1 2.8 2 1.4 1.5 3 3.2 6.9 3.2 2.8 0 4.5-1.4 5.1-4.2-1 .6-2.1.8-3.4.4-1.1-.3-1.9-1.1-2.8-2-1.4-1.5-3-3.2-6.9-3.2z" />
    </svg>
  ),
  MySQL: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  Git: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M6 9v6M9 18h6" />
    </svg>
  ),
  "Framer Motion": () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};


const Interactive3DCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // 3D Particles setup
    const particleCount = 75;
    const particles: { x: number; y: number; z: number; color: string }[] = [];
    const focalLength = 300;
    
    // Create random particles in a 3D sphere
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 100 + Math.random() * 120; // sphere radius
      
      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        color: i % 2 === 0 ? "rgba(99, 102, 241, 1)" : "rgba(6, 182, 212, 1)" // indigo & cyan
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.001;
    let targetRotationY = 0.0015;
    let rotationX = 0.001;
    let rotationY = 0.0015;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left - width / 2;
      const y = e.clientY - rect.top - height / 2;
      targetRotationY = x * 0.00002;
      targetRotationX = -y * 0.00002;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      const projected: { sx: number; sy: number; size: number; alpha: number; color: string; z: number }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 3D Rotations
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y1;
        p.z = z2;

        const scale = focalLength / (focalLength + z2);
        const sx = x1 * scale + width / 2;
        const sy = y1 * scale + height / 2;
        
        const alpha = Math.max(0.08, Math.min(0.9, (focalLength - z2) / (focalLength * 1.5)));
        const size = Math.max(0.8, scale * 3);

        projected.push({ sx, sy, size, alpha, color: p.color, z: z2 });
      }

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dz = particles[i].z - particles[j].z;
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

          if (dist < 120) {
            const minAlpha = Math.min(p1.alpha, p2.alpha);
            const lineAlpha = minAlpha * (1 - dist / 120) * 0.35;
            
            const grad = ctx.createLinearGradient(p1.sx, p1.sy, p2.sx, p2.sy);
            grad.addColorStop(0, p1.color.replace("1)", `${lineAlpha})`));
            grad.addColorStop(1, p2.color.replace("1)", `${lineAlpha})`));
            
            ctx.strokeStyle = grad;
            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.stroke();
          }
        }
      }

      projected.sort((a, b) => b.z - a.z);

      // Draw particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace("1)", `${p.alpha})`);
        
        if (p.alpha > 0.6) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.8,
      }}
    />
  );
};

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;
    let visible = true;
    const interval = setInterval(() => {
      visible = !visible;
      el.style.opacity = visible ? "1" : "0";
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="bg-grid"
      style={{
        minHeight: "calc(100vh - 72px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D Interactive Canvas Animation Background */}
      <Interactive3DCanvas />

      {/* Subtle depth lighting background glows */}
      <div style={{
        position: "absolute", top: "15%", left: "5%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "5%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        zIndex: 0
      }} />


      <div 
        style={{ 
          maxWidth: "1100px", 
          width: "100%", 
          zIndex: 1, 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "4rem", 
          alignItems: "center",
          animation: "slide-up 0.8s ease both" 
        }}
      >
        {/* Left Side: Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
          {/* Available badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.4rem 1rem", borderRadius: "999px",
            border: "1px solid rgba(16,185,129,0.3)",
            background: "rgba(16,185,129,0.08)",
            marginBottom: "1.75rem",
            animation: "fade-in 1s ease 0.2s both",
          }}>
            <span style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 8px #10b981",
              animation: "pulse-glow 2s ease-in-out infinite",
            }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#34d399" }}>
              Open to opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 style={{ marginBottom: "1rem", width: "100%" }}>
            <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "clamp(0.9rem, 2vw, 1.1rem)", color: "var(--accent-light)", marginBottom: "0.5rem", letterSpacing: "0.1em" }}>
              Hello, world! I&#39;m
            </span>
            <span className="gradient-text-hero" style={{ display: "block", fontSize: "clamp(2.2rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {personal.name}
            </span>
          </h1>

          {/* Animated role */}
          <div style={{ marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1rem, 3vw, 1.35rem)", color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--accent-2)" }}>&lt;</span>
              {personal.role}
              <span ref={cursorRef} style={{ color: "var(--accent)", marginLeft: "2px" }}>|</span>
              <span style={{ color: "var(--accent-2)" }}>/&gt;</span>
            </span>
          </div>

          {/* Tagline */}
          <p style={{
            fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)", color: "var(--text-secondary)",
            maxWidth: "600px", lineHeight: 1.7, marginBottom: "1rem",
          }}>
            {personal.tagline}
          </p>

          {/* University badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2.5rem" }}>
            <GraduationCap size={16} color="var(--accent)" />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              {personal.year} · {personal.university}
            </span>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
            <Link href="/projects" className="btn-primary">
              View Projects <ChevronRight size={18} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get In Touch <Mail size={18} />
            </Link>
            <a 
              href={personal.resumeUrl} 
              download="Bimsara_CV.pdf" 
              className="btn-secondary"
            >
              Resume <Download size={18} />
            </a>

          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
            {[
              { href: personal.github, icon: <GithubIcon size={20} />, label: "GitHub" },
              { href: personal.linkedin, icon: <LinkedinIcon size={20} />, label: "LinkedIn" },
              { href: `mailto:${personal.email}`, icon: <Mail size={20} />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: "42px", height: "42px", borderRadius: "10px",
                  border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-secondary)", textDecoration: "none",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--accent-light)";
                  el.style.borderColor = "var(--accent)";
                  el.style.background = "rgba(99,102,241,0.1)";
                  el.style.boxShadow = "0 0 15px var(--accent-glow)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--text-secondary)";
                  el.style.borderColor = "var(--border)";
                  el.style.background = "transparent";
                  el.style.boxShadow = "none";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Tech stack pills */}
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Tech I work with
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {techStack.map((t) => {
                const IconComponent = TechSVG[t.name as keyof typeof TechSVG];
                const techColors: Record<string, string> = {
                  PHP: "#777bb4",
                  Laravel: "#ff2d20",
                  Livewire: "#fb70a9",
                  "Next.js": "var(--text-primary)",
                  React: "#00d8ff",
                  TypeScript: "#3178c6",
                  "Tailwind CSS": "#38bdf8",
                  MySQL: "#00758f",
                  Git: "#f05032",
                  "Framer Motion": "#e01e5a",
                };
                const color = techColors[t.name] || "var(--accent)";

                return (
                  <div
                    key={t.name}
                    className="glass glass-hover"
                    title={t.name}
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-secondary)",
                      transition: "all 0.3s ease",
                      border: "1px solid var(--border)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = color;
                      el.style.borderColor = color;
                      el.style.boxShadow = `0 0 12px ${color}40`;
                      el.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "var(--text-secondary)";
                      el.style.borderColor = "var(--border)";
                      el.style.boxShadow = "none";
                      el.style.transform = "none";
                    }}
                  >
                    {IconComponent ? <IconComponent /> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Animated Floating Image with Framer Motion */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "340px",
              aspectRatio: "1/1",
              zIndex: 2,
            }}
          >
            {/* Ambient glowing aura underneath */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.5, 0.85, 0.5]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                inset: "-10px",
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                borderRadius: "2.5rem",
                filter: "blur(25px)",
                zIndex: 0,
              }}
            />

            {/* Float/Bobbing core wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "2.25rem",
                padding: "4px",
                background: "linear-gradient(135deg, var(--accent), var(--accent-2))",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                zIndex: 1,
              }}
            >
              <div style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "2rem",
                overflow: "hidden",
                background: "var(--bg-card)",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bimsara.jpeg"
                  alt="K A Bimsara Kaushal"
                  onError={(e) => {
                    // Fallback visual in case bimsara.jpeg is not uploaded yet
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.style.cssText = "width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:radial-gradient(circle, var(--bg-card) 0%, var(--bg-secondary) 100%);color:var(--accent-light);gap:0.5rem;";
                      
                      const mono = document.createElement("div");
                      mono.style.cssText = "font-size:2.5rem;font-family:var(--font-mono);font-weight:800;letter-spacing:-0.05em;background:linear-gradient(135deg, var(--accent-light), var(--accent-2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;";
                      mono.innerText = "KBK";
                      
                      const sub = document.createElement("div");
                      sub.style.cssText = "font-size:0.7rem;font-family:var(--font-mono);color:var(--text-muted);text-transform:uppercase;letter-spacing:0.1em;";
                      sub.innerText = "Undergraduate";
                      
                      fallback.appendChild(mono);
                      fallback.appendChild(sub);
                      parent.appendChild(fallback);
                    }
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "all 0.5s ease",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Stats Row */}
      <div style={{
        maxWidth: "1000px", width: "100%", marginTop: "4rem", zIndex: 1,
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem",
        animation: "slide-up 0.8s ease 0.65s both",
      }}>
        {stats.map((stat) => {
          const Icon =
            stat.icon === "projects" ? FolderCode :
            stat.icon === "github" ? GitBranch :
            stat.icon === "tech" ? Cpu : Award;

          return (
            <div
              key={stat.label}
              className="glass glass-hover"
              style={{
                padding: "1.25rem",
                borderRadius: "1rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.25rem"
              }}
            >
              <div style={{ color: "var(--accent)", marginBottom: "0.25rem" }}>
                <Icon size={22} />
              </div>
              <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--accent-light)", fontFamily: "var(--font-mono)", lineHeight: 1.2 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.1rem" }}>{stat.label}</div>
            </div>
          );
        })}

      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.35rem",
        color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "var(--font-mono)",
        animation: "float 2s ease-in-out infinite",
      }}>
        <span>scroll</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
