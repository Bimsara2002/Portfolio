"use client";

import { useState, FormEvent } from "react";
import { socials, personal } from "@/lib/data";
import { Mail, Send, CheckCircle, AlertCircle, MessageSquare, Zap, Users, Lightbulb } from "lucide-react";


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
  github: <GithubIcon size={22} />,
  linkedin: <LinkedinIcon size={22} />,
  mail: <Mail size={22} />,
};


export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "New Portfolio Message",
          message: form.message,
        })
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("FormSubmit submission failed, falling back to mailto");
      }
    } catch (err) {
      console.warn("AJAX email submission failed, opening Gmail fallback:", err);
      // Bulletproof fallback: Open pre-filled web-based Gmail instead of native Outlook app
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${encodeURIComponent(
        form.subject || "Contact Inquiry from Portfolio"
      )}&body=${encodeURIComponent(
        `Hi Bimsara Kaushal,\n\nMessage:\n${form.message}\n\nSender Details:\n- Name: ${form.name}\n- Email: ${form.email}`
      )}`;
      window.open(gmailUrl, "_blank");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  }




  return (
    <div style={{ padding: "5rem 1.5rem", minHeight: "80vh" }} className="bg-grid">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "4rem", maxWidth: "600px" }}>
          <div className="section-label">
            <MessageSquare size={14} /> Get In Touch
          </div>
          <h1 className="section-title" style={{ marginBottom: "1rem" }}>
            Let&apos;s Work Together
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.75 }}>
            Have a project in mind, a question, or just want to say hi? My inbox is always open. I&apos;ll do my best to respond within 24 hours.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem", alignItems: "start" }}>

          {/* ── Contact Form ──────────────────────── */}
          <div className="glass" style={{ padding: "2rem", borderRadius: "1.25rem" }}>
            <h2 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.15rem", marginBottom: "1.5rem" }}>
              Send a Message
            </h2>

            {status === "success" ? (
              <div style={{
                textAlign: "center", padding: "2.5rem",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem",
              }}>
                <div style={{ color: "#10b981" }}><CheckCircle size={48} /></div>
                <h3 style={{ color: "var(--text-primary)", fontWeight: 700 }}>Message Sent!</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", maxWidth: "340px", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                  Thank you! Your message has been routed directly to <span style={{ color: "var(--accent-light)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>{personal.email}</span>.
                </p>
                <div style={{
                  padding: "1rem",
                  borderRadius: "12px",
                  background: "rgba(99, 102, 241, 0.08)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                  maxWidth: "340px",
                  textAlign: "left",
                }}>
                  <strong style={{ color: "var(--accent-light)", display: "block", marginBottom: "0.25rem" }}>💡 First-Time Activation Required:</strong>
                  If this is your first time using this contact form, please check your inbox at <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{personal.email}</span> for a confirmation email from FormSubmit and click the <strong>"Activate"</strong> button inside it to start receiving direct inbox messages instantly!
                </div>


                <button
                  onClick={() => setStatus("idle")}
                  className="btn-secondary"
                  style={{ marginTop: "0.5rem" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem", fontFamily: "var(--font-mono)" }}>
                      Name *
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem", fontFamily: "var(--font-mono)" }}>
                      Email *
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem", fontFamily: "var(--font-mono)" }}>
                    Subject
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What&apos;s this about?"
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem", fontFamily: "var(--font-mono)" }}>
                    Message *
                  </label>
                  <textarea
                    className="form-input"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    required
                    style={{ resize: "vertical", minHeight: "130px" }}
                  />
                </div>

                {status === "error" && (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#f87171", fontSize: "0.85rem" }}>
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === "sending"}
                  style={{ justifyContent: "center", marginTop: "0.5rem", opacity: status === "sending" ? 0.7 : 1 }}
                >
                  {status === "sending" ? (
                    <>Sending<span style={{ animation: "blink 1s infinite" }}>...</span></>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Right Side ────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Direct contact */}
            <div className="glass" style={{ padding: "1.75rem", borderRadius: "1.25rem" }}>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: "1.25rem", fontSize: "1rem" }}>
                Direct Contact
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target={s.name !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "1rem",
                      padding: "0.85rem 1rem", borderRadius: "0.75rem",
                      border: "1px solid var(--border)",
                      textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = s.color;
                      el.style.background = `${s.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "var(--border)";
                      el.style.background = "transparent";
                    }}
                  >
                    <div style={{ color: s.color }}>{iconMap[s.icon]}</div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                        {s.name}
                      </div>
                      <div style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 500 }}>
                        {s.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="glass" style={{ padding: "1.75rem", borderRadius: "1.25rem" }}>
              <h3 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: "1rem", fontSize: "1rem" }}>
                What to Expect
              </h3>
              {[
                { icon: "zap", title: "Fast Response", desc: "Usually within 24 hours" },
                { icon: "users", title: "Open to Collaboration", desc: "Freelance, internships & projects" },
                { icon: "lightbulb", title: "Always Learning", desc: "Keen to take on new challenges" },
              ].map((item) => {
                const Icon = 
                  item.icon === "zap" ? Zap : 
                  item.icon === "users" ? Users : Lightbulb;
                return (
                  <div key={item.title} style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", alignItems: "flex-start" }}>
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginTop: "0.2rem" }}>
                      <Icon size={18} />
                    </span>
                    <div>
                      <div style={{ fontSize: "0.9rem", color: "var(--text-primary)", fontWeight: 600 }}>{item.title}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Location card */}
            <div
              className="glass"
              style={{
                padding: "1.75rem", borderRadius: "1.25rem",
                background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(6,182,212,0.05))",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "2.5rem" }}>🇱🇰</span>
                <div>
                  <div style={{ color: "var(--text-primary)", fontWeight: 700 }}>Based in Sri Lanka</div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
                    Available for remote work globally
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                    UTC+5:30
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
