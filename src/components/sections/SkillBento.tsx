"use client";

import { useState, useEffect, useRef } from "react";
import { skillCategories } from "@/lib/data";
import { Server, Layout, Database, Settings } from "lucide-react";


export default function SkillBento() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.25rem",
      }}
    >
      {skillCategories.map((cat) => {
        const Icon =
          cat.icon === "backend" ? Server :
          cat.icon === "frontend" ? Layout :
          cat.icon === "database" ? Database : Settings;

        return (
          <div
            key={cat.label}
            className="glass glass-hover"
            style={{ padding: "1.5rem", borderRadius: "1rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                <Icon size={20} />
              </span>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1rem" }}>
                {cat.label}
              </h3>
            </div>


          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {cat.skills.map((skill, idx) => (
              <div key={skill.name}>
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  marginBottom: "0.4rem",
                }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    {skill.name}
                  </span>
                  <span style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                  }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: animated ? `${skill.level}%` : "0%",
                      transitionDelay: `${idx * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    })}

    </div>
  );
}
