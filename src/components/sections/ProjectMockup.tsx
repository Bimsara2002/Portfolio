"use client";

import React from "react";

type MockupProps = {
  id: number;
  color: string;
  category: string;
  title: string;
};

export default function ProjectMockup({ id, color, category, title }: MockupProps) {
  // Common styles
  const containerStyle: React.CSSProperties = {
    height: "170px",
    background: "var(--bg-secondary)",
    borderBottom: "1px solid var(--border-subtle)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-mono)",
    userSelect: "none",
  };

  const overlayGlow: React.CSSProperties = {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background: `radial-gradient(circle, ${color}10 0%, transparent 60%)`,
    pointerEvents: "none",
  };

  // Render different layouts based on Project ID
  switch (id) {
    case 1: // University Management System (Full-Stack ERP Dashboard)
      return (
        <div style={containerStyle} className="mockup-container">
          <div style={overlayGlow} />
          {/* Admin Browser Mockup */}
          <div className="browser-frame" style={{ width: "90%", height: "80%", background: "#060913", border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            {/* Browser Bar */}
            <div style={{ height: "18px", background: "#0d1326", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", padding: "0 0.5rem", gap: "3px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#ef4444" }} />
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f59e0b" }} />
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981" }} />
              <span style={{ fontSize: "0.55rem", color: "var(--text-muted)", marginLeft: "0.5rem", scale: "0.8" }}>nibm-erp.lk/admin</span>
            </div>
            {/* Dashboard Content */}
            <div style={{ flex: 1, padding: "0.4rem", display: "flex", gap: "0.4rem" }}>
              {/* Sidebar */}
              <div style={{ width: "20%", background: "#0d1326", borderRadius: "4px", padding: "0.2rem", display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <span style={{ height: "4px", width: "80%", background: color, borderRadius: "2px" }} />
                <span style={{ height: "3px", width: "60%", background: "var(--border)", borderRadius: "1px" }} />
                <span style={{ height: "3px", width: "70%", background: "var(--border)", borderRadius: "1px" }} />
                <span style={{ height: "3px", width: "50%", background: "var(--border)", borderRadius: "1px" }} />
              </div>
              {/* Main area */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                {/* Stats Row */}
                <div style={{ display: "flex", gap: "0.3rem" }}>
                  <div style={{ flex: 1, background: "#0d1326", borderRadius: "4px", padding: "0.2rem", display: "flex", flexDirection: "column", gap: "1px" }}>
                    <span style={{ fontSize: "0.45rem", color: "var(--text-muted)", scale: "0.8", transformOrigin: "left" }}>Students</span>
                    <span style={{ fontSize: "0.6rem", fontWeight: 700, color: "#10b981" }}>1,482</span>
                  </div>
                  <div style={{ flex: 1, background: "#0d1326", borderRadius: "4px", padding: "0.2rem", display: "flex", flexDirection: "column", gap: "1px" }}>
                    <span style={{ fontSize: "0.45rem", color: "var(--text-muted)", scale: "0.8", transformOrigin: "left" }}>Courses</span>
                    <span style={{ fontSize: "0.6rem", fontWeight: 700, color: color }}>24</span>
                  </div>
                </div>
                {/* Data Table */}
                <div style={{ flex: 1, background: "#0d1326", borderRadius: "4px", padding: "0.25rem", display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "0.45rem", color: color, fontWeight: 700, marginBottom: "1px" }}>Livewire Table</span>
                  <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "1px" }}>
                    <span style={{ fontSize: "0.4rem", color: "var(--text-secondary)", scale: "0.9" }}>Student</span>
                    <span style={{ fontSize: "0.4rem", color: "var(--text-secondary)", scale: "0.9" }}>Status</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.42rem", color: "var(--text-primary)", scale: "0.85", transformOrigin: "left" }}>Kaushal.B</span>
                    <span style={{ fontSize: "0.38rem", background: "rgba(16,185,129,0.15)", color: "#10b981", padding: "0px 3px", borderRadius: "2px" }}>Active</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.42rem", color: "var(--text-primary)", scale: "0.85", transformOrigin: "left" }}>Ranasinghe.K</span>
                    <span style={{ fontSize: "0.38rem", background: "rgba(99,102,241,0.15)", color: "#6366f1", padding: "0px 3px", borderRadius: "2px" }}>Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 2: // Study Planner & Scheduler (Max-Heap Algorithm Scheduling GUI)
      return (
        <div style={containerStyle} className="mockup-container">
          <div style={overlayGlow} />
          {/* Mobile Screen Mockup */}
          <div className="mobile-frame" style={{ width: "70px", height: "130px", background: "#060913", border: "2.5px solid var(--border)", borderRadius: "14px", padding: "4px", position: "relative", display: "flex", flexDirection: "column", gap: "3px" }}>
            {/* Phone Notch */}
            <div style={{ height: "4px", width: "24px", background: "var(--border)", borderRadius: "2px", margin: "0 auto 2px" }} />
            {/* Top Stat */}
            <div style={{ height: "12px", background: `${color}15`, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${color}30` }}>
              <span style={{ fontSize: "0.4rem", color, scale: "0.8", fontWeight: 700 }}>Priority Queue</span>
            </div>
            {/* Heap Stack Visualizer */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5px", justifyContent: "center" }}>
              <div style={{ height: "12px", background: color, borderRadius: "3px", padding: "0 2px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.35rem", color: "white", scale: "0.85" }}>ML Exam</span>
                <span style={{ fontSize: "0.35rem", color: "white", scale: "0.85", fontWeight: 700 }}>Heap 1</span>
              </div>
              <div style={{ height: "12px", background: `${color}cc`, width: "90%", borderRadius: "3px", padding: "0 2px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.35rem", color: "white", scale: "0.85" }}>Java OOP</span>
                <span style={{ fontSize: "0.35rem", color: "white", scale: "0.85", fontWeight: 700 }}>Heap 2</span>
              </div>
              <div style={{ height: "12px", background: `${color}88`, width: "80%", borderRadius: "3px", padding: "0 2px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.35rem", color: "white", scale: "0.85" }}>SQL Proj</span>
                <span style={{ fontSize: "0.35rem", color: "white", scale: "0.85", fontWeight: 700 }}>Heap 3</span>
              </div>
            </div>
            {/* Algorithm stats */}
            <div style={{ background: "#0d1326", borderRadius: "4px", padding: "1.5px", display: "flex", flexDirection: "column", gap: "1px", border: "1px solid var(--border-subtle)" }}>
              <span style={{ fontSize: "0.35rem", color: "var(--text-muted)", scale: "0.8" }}>Complexity:</span>
              <span style={{ fontSize: "0.38rem", color: "#10b981", fontWeight: 700, fontFamily: "var(--font-mono)" }}>O(log N)</span>
            </div>
          </div>
        </div>
      );

    case 3: // Seat Allocation System (Exams Theater Room Visualizer)
      return (
        <div style={containerStyle} className="mockup-container">
          <div style={overlayGlow} />
          {/* Mobile Screen Mockup */}
          <div className="mobile-frame" style={{ width: "70px", height: "130px", background: "#060913", border: "2.5px solid var(--border)", borderRadius: "14px", padding: "4px", display: "flex", flexDirection: "column", gap: "3px" }}>
            {/* notch */}
            <div style={{ height: "4px", width: "24px", background: "var(--border)", borderRadius: "2px", margin: "0 auto 2px" }} />
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 1px" }}>
              <span style={{ fontSize: "0.45rem", color: "var(--text-primary)", fontWeight: 700, scale: "0.9" }}>Hall A</span>
              <span style={{ fontSize: "0.38rem", color: "#ef4444", fontWeight: 700 }}>Full</span>
            </div>
            {/* Grid of Seats */}
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5px", padding: "2px" }}>
              {[...Array(9)].map((_, i) => {
                const isAllocated = i % 3 === 0 || i === 7;
                return (
                  <div
                    key={i}
                    style={{
                      borderRadius: "3px",
                      background: isAllocated ? color : "rgba(255,255,255,0.05)",
                      border: `1px solid ${isAllocated ? color : "rgba(255,255,255,0.1)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "14px"
                    }}
                  >
                    <span style={{ fontSize: "0.35rem", color: isAllocated ? "white" : "var(--text-muted)", scale: "0.75" }}>
                      {i + 1}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Bottom allocated stats */}
            <div style={{ background: "#0d1326", borderRadius: "3px", padding: "2px", textAlign: "center" }}>
              <span style={{ fontSize: "0.35rem", color: "var(--text-muted)", display: "block", scale: "0.8" }}>Assigned</span>
              <span style={{ fontSize: "0.42rem", color, fontWeight: 700 }}>88%</span>
            </div>
          </div>
        </div>
      );

    case 4: // ML Stock Forecasting App (Financial Line Chart Visualizer)
      return (
        <div style={containerStyle} className="mockup-container">
          <div style={overlayGlow} />
          {/* Chart Frame */}
          <div style={{ width: "85%", height: "80%", background: "#060913", border: "1px solid var(--border)", borderRadius: "8px", padding: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.55rem", color: "var(--text-primary)", fontWeight: 700 }}>NASDAQ: AAPL</span>
              <span style={{ fontSize: "0.55rem", color: "#10b981", fontWeight: 700, fontFamily: "var(--font-mono)" }}>+18.4% (Forecasted)</span>
            </div>
            {/* SVG Graph */}
            <div style={{ flex: 1, position: "relative", borderLeft: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)", overflow: "hidden" }}>
              {/* Grid Lines */}
              <div style={{ position: "absolute", top: "30%", left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.03)" }} />
              <div style={{ position: "absolute", top: "60%", left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.03)" }} />
              
              {/* SVG Curve */}
              <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
                {/* Historical data */}
                <path d="M 0 50 Q 20 60 40 40 T 80 55 T 120 30" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                {/* ML Forecast forecast line */}
                <path d="M 120 30 Q 140 20 160 15 T 220 5" fill="none" stroke={color} strokeWidth="2" strokeDasharray="3,2" />
                {/* Shading/Envelope of standard deviation */}
                <path d="M 120 30 Q 140 10 160 5 T 220 0 L 220 20 T 160 25 T 120 30 Z" fill={`${color}10`} />
              </svg>
              {/* Prediction Point Indicator */}
              <div style={{ position: "absolute", top: "4px", right: "20px", width: "4px", height: "4px", borderRadius: "50%", background: color, boxShadow: `0 0 8px ${color}` }} />
            </div>
          </div>
        </div>
      );

    case 5: // LifeLink - Donation App (Broadcast Radar Pulse Mobile)
      return (
        <div style={containerStyle} className="mockup-container">
          <div style={overlayGlow} />
          {/* Mobile Screen Mockup */}
          <div className="mobile-frame" style={{ width: "70px", height: "130px", background: "#060913", border: "2.5px solid var(--border)", borderRadius: "14px", padding: "4px", display: "flex", flexDirection: "column", gap: "3px" }}>
            <div style={{ height: "4px", width: "24px", background: "var(--border)", borderRadius: "2px", margin: "0 auto 2px" }} />
            
            {/* Emergency Alert Banner */}
            <div style={{ background: "rgba(239,68,68,0.15)", border: "1px solid #ef444450", borderRadius: "4px", padding: "2px", display: "flex", flexDirection: "column", gap: "1px", alignItems: "center" }}>
              <span style={{ fontSize: "0.35rem", color: "#ef4444", fontWeight: 700, animation: "blink 1.5s infinite" }}>🚨 CRITICAL ALERT</span>
              <span style={{ fontSize: "0.3rem", color: "var(--text-secondary)", scale: "0.8" }}>O- Required NIBM Clinic</span>
            </div>

            {/* Radar map pulse graphic */}
            <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Radar rings */}
              <div style={{ position: "absolute", width: "38px", height: "38px", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "50%" }} />
              <div style={{ position: "absolute", width: "24px", height: "24px", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "50%" }} />
              {/* Center map pin */}
              <div style={{ zIndex: 1, fontSize: "0.7rem", position: "relative" }}>❤️</div>
              {/* Pulsating glow */}
              <div style={{ position: "absolute", width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444", opacity: 0.6, boxShadow: "0 0 10px #ef4444", animation: "ping 1.5s infinite" }} />
            </div>

            {/* Donor response */}
            <div style={{ background: color, borderRadius: "4px", padding: "2px", textAlign: "center", border: `1px solid ${color}` }}>
              <span style={{ fontSize: "0.35rem", color: "white", fontWeight: 700, scale: "0.85" }}>DONATE NOW</span>
            </div>
          </div>
        </div>
      );

    case 6: // Hospital Management System (Patient Electronic Health Record Board)
      return (
        <div style={containerStyle} className="mockup-container">
          <div style={overlayGlow} />
          {/* Admin Browser Mockup */}
          <div className="browser-frame" style={{ width: "90%", height: "80%", background: "#060913", border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "16px", background: "#0d1326", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", padding: "0 0.5rem", gap: "3px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#ef4444" }} />
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f59e0b" }} />
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981" }} />
              <span style={{ fontSize: "0.5rem", color: "var(--text-muted)", marginLeft: "0.5rem", scale: "0.8" }}>careflow-hms.org/patients</span>
            </div>
            {/* Content */}
            <div style={{ flex: 1, padding: "0.4rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.5rem", fontWeight: 700, color: "var(--text-primary)" }}>Patient Profile</span>
                <span style={{ fontSize: "0.45rem", background: "rgba(6,182,212,0.15)", color: "#06b6d4", padding: "1px 3px", borderRadius: "2px" }}>Ward 03B</span>
              </div>
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
              {/* Record grids */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.3rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                  <span style={{ fontSize: "0.38rem", color: "var(--text-muted)", scale: "0.8", transformOrigin: "left" }}>Name:</span>
                  <span style={{ fontSize: "0.48rem", color: "white", fontWeight: 700 }}>A. Perera</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                  <span style={{ fontSize: "0.38rem", color: "var(--text-muted)", scale: "0.8", transformOrigin: "left" }}>Heart Rate:</span>
                  <span style={{ fontSize: "0.48rem", color: "#10b981", fontWeight: 700 }}>76 bpm</span>
                </div>
              </div>
              {/* Vital charts */}
              <div style={{ flex: 1, background: "rgba(0,0,0,0.2)", border: "1px solid var(--border-subtle)", borderRadius: "4px", position: "relative", overflow: "hidden" }}>
                <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
                  <path d="M 0 15 L 15 15 L 20 5 L 25 25 L 30 15 L 50 15 L 55 5 L 60 25 L 65 15 L 90 15 L 95 5 L 100 25 L 105 15 L 130 15 L 135 5 L 140 25 L 145 15 L 170 15" fill="none" stroke="#10b981" strokeWidth="1.2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      );

    case 7: // Personal Finance Manager (Credit Card & Budget Progress View)
      return (
        <div style={containerStyle} className="mockup-container">
          <div style={overlayGlow} />
          {/* Card & Budget Panel */}
          <div style={{ width: "85%", height: "85%", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {/* Virtual Credit Card */}
            <div style={{ height: "65px", background: `linear-gradient(135deg, ${color}, #090e1a)`, borderRadius: "6px", border: `1px solid ${color}40`, padding: "0.4rem", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "60px", height: "60px", background: "rgba(255,255,255,0.03)", borderRadius: "50%" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: "0.38rem", color: "rgba(255,255,255,0.6)", scale: "0.85", transformOrigin: "left" }}>FINANCE MANAGER</span>
                <span style={{ fontSize: "0.45rem", fontWeight: 700, color: "white" }}>VISA</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "0.42rem", color: "rgba(255,255,255,0.5)", scale: "0.8", transformOrigin: "left" }}>Balance</span>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "white", lineHeight: 1 }}>$4,892.40</span>
              </div>
            </div>
            {/* Budget Progress bar */}
            <div style={{ flex: 1, background: "#060913", border: "1px solid var(--border)", borderRadius: "6px", padding: "0.3rem", display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.4rem", color: "var(--text-muted)" }}>
                <span>Monthly Budget</span>
                <span style={{ color: "#10b981", fontWeight: 700 }}>62% Used</span>
              </div>
              {/* Progress Bar Track */}
              <div style={{ height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: "62%", background: color, borderRadius: "3px" }} />
              </div>
            </div>
          </div>
        </div>
      );

    case 8: // Mobile Sales Manager (Inventory Control Catalog Desktop App)
      return (
        <div style={containerStyle} className="mockup-container">
          <div style={overlayGlow} />
          {/* Desktop App frame */}
          <div className="desktop-frame" style={{ width: "90%", height: "85%", background: "#060913", border: "1px solid var(--border)", borderRadius: "6px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            {/* Header */}
            <div style={{ height: "16px", background: "#0d1326", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", padding: "0 0.5rem" }}>
              <span style={{ fontSize: "0.5rem", color: "var(--text-primary)", fontWeight: 700 }}>Sales Manager v2.4</span>
            </div>
            {/* Inventory table & actions */}
            <div style={{ flex: 1, padding: "0.3rem", display: "flex", gap: "0.3rem" }}>
              {/* Inventory items */}
              <div style={{ flex: 1.5, background: "rgba(0,0,0,0.15)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: "4px", padding: "2px", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "0.4rem", color: color, fontWeight: 700, paddingBottom: "1px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>In-Stock Items</span>
                {[
                  { n: "iPhone 15 Pro", s: "48 qty" },
                  { n: "Samsung S24", s: "23 qty" },
                  { n: "iPad Air", s: "12 qty" },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.38rem", scale: "0.85", transformOrigin: "left" }}>
                    <span style={{ color: "var(--text-primary)" }}>{item.n}</span>
                    <span style={{ color: "var(--text-muted)" }}>{item.s}</span>
                  </div>
                ))}
              </div>
              {/* Receipt / Invoice Printout preview */}
              <div style={{ flex: 1, background: "white", borderRadius: "4px", padding: "0.2rem 0.15rem", display: "flex", flexDirection: "column", gap: "2px", color: "black", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
                <span style={{ fontSize: "0.35rem", fontWeight: 700, textAlign: "center", borderBottom: "1px dashed #ccc", paddingBottom: "1px" }}>INVOICE</span>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.3rem" }}>
                  <span>Total:</span>
                  <span style={{ fontWeight: 700 }}>$1,299.00</span>
                </div>
                <div style={{ marginTop: "auto", background: "#000", color: "#fff", fontSize: "0.28rem", textAlign: "center", borderRadius: "2px", padding: "1px" }}>
                  PRINT
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 9: // Doctor Appointment System (Calendar Date Slot Reservation)
      return (
        <div style={containerStyle} className="mockup-container">
          <div style={overlayGlow} />
          {/* Scheduling Calendar */}
          <div style={{ width: "85%", height: "80%", background: "#060913", border: "1px solid var(--border)", borderRadius: "8px", padding: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.5rem", color: "var(--text-primary)", fontWeight: 700 }}>Book Dr. Perera</span>
              <span style={{ fontSize: "0.45rem", color, fontWeight: 700 }}>Dentist</span>
            </div>
            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
            {/* Calendar slot matrix */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3px", flex: 1, padding: "2px 0" }}>
              {[
                { time: "09:00 AM", free: false },
                { time: "10:30 AM", free: true },
                { time: "11:15 AM", free: true },
                { time: "02:00 PM", free: false },
                { time: "03:30 PM", free: true },
                { time: "04:45 PM", free: false },
              ].map((slot, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: "4px",
                    background: slot.free ? `${color}15` : "rgba(255,255,255,0.03)",
                    border: `1px solid ${slot.free ? `${color}35` : "rgba(255,255,255,0.05)"}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2px"
                  }}
                >
                  <span style={{ fontSize: "0.38rem", color: slot.free ? "var(--text-primary)" : "var(--text-muted)", scale: "0.85" }}>{slot.time}</span>
                  <span style={{ fontSize: "0.32rem", color: slot.free ? color : "#ef4444", fontWeight: 700, scale: "0.8" }}>{slot.free ? "FREE" : "BOOKED"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div style={containerStyle}>
          <div style={overlayGlow} />
          <span style={{ fontSize: "0.75rem", color }}>{category}</span>
        </div>
      );
  }
}
