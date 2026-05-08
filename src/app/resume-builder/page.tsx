"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ResumeBuilderPage() {
  return (
    <div className="dashboard-content-wrapper">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "48px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="bi bi-file-earmark-person" style={{ fontSize: "1.5rem", color: "#10b981" }}></i>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 800, margin: 0 }}>Resume Builder</h1>
          </div>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px" }}>
            Craft professional, ATS-friendly resumes with AI-powered suggestions.
          </p>
        </motion.div>

        <div className="row g-4" style={{ alignItems: "flex-start" }}>
          <div className="col-lg-12">
            {/* 1. Premium Templates Grid (FIRST) */}
            <div className="app-card" style={{ background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.3)", padding: "32px", marginBottom: "40px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, margin: 0 }}>Premium Templates</h3>
                <Link href="#" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--accent-primary)", textDecoration: "none" }}>Browse All Templates <i className="bi bi-arrow-right"></i></Link>
              </div>
              <div className="row g-4">
                {[
                  { name: "The Executive", desc: "Corporate & Minimalist", icon: "bi-briefcase" },
                  { name: "Creative Flow", desc: "Modern & Visual", icon: "bi-palette" },
                  { name: "Tech Minimal", desc: "Clean & Professional", icon: "bi-cpu" },
                  { name: "Modern Scholar", desc: "Academic & Detailed", icon: "bi-mortarboard" }
                ].map((template) => (
                  <div key={template.name} className="col-md-6 col-xl-3">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      style={{ 
                        padding: "24px", 
                        borderRadius: "20px", 
                        background: "white", 
                        border: "1px solid rgba(0,0,0,0.05)",
                        textAlign: "center",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.02)"
                      }}
                    >
                      <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(0,112,243,0.05)", color: "var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px auto" }}>
                        <i className={`bi ${template.icon}`} style={{ fontSize: "1.5rem" }}></i>
                      </div>
                      <h5 style={{ fontSize: "1rem", fontWeight: 800, margin: "0 0 4px 0" }}>{template.name}</h5>
                      <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>{template.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. My Resumes Section (SECOND) */}
            <div className="app-card" style={{ background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.3)", padding: "40px", marginBottom: "40px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
                <div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0 }}>Resume Management</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "4px 0 0 0" }}>Your professional document repository</p>
                </div>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <button style={{ padding: "10px 20px", borderRadius: "12px", border: "1px solid var(--accent-primary)", background: "transparent", color: "var(--accent-primary)", fontWeight: 700, fontSize: "0.9rem", whiteSpace: "nowrap" }}>
                    <i className="bi bi-upload" style={{ marginRight: "8px" }}></i> Upload CV
                  </button>
                  <button className="btn-primary" style={{ padding: "10px 24px", borderRadius: "12px", fontSize: "0.9rem", whiteSpace: "nowrap" }}>
                    <i className="bi bi-plus-lg" style={{ marginRight: "8px" }}></i> Create New
                  </button>
                </div>
              </div>

              <div className="row g-4" style={{ borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "40px" }}>
                {/* Created Resumes Column */}
                <div className="col-lg-6">
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-primary)" }}></div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-primary)", margin: 0 }}>AI-Assisted Drafts</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {[
                      { name: "Full Stack Engineer", date: "Updated 2h ago", score: 92, status: "Optimized" },
                      { name: "Product Designer", date: "Updated 1d ago", score: 85, status: "Needs Review" }
                    ].map((resume) => (
                      <motion.div 
                        key={resume.name}
                        whileHover={{ scale: 1.02 }}
                        style={{ 
                          padding: "24px", 
                          borderRadius: "20px", 
                          border: "1px solid rgba(0,0,0,0.05)", 
                          background: "white",
                          boxShadow: "0 4px 20px rgba(0,0,0,0.02)"
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(0,112,243,0.05)", color: "var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <i className="bi bi-file-earmark-text" style={{ fontSize: "1.25rem" }}></i>
                            </div>
                            <div>
                              <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 700 }}>{resume.name}</h4>
                              <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)" }}>{resume.date}</p>
                            </div>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <span style={{ fontSize: "0.9rem", fontWeight: 800, color: resume.score > 90 ? "#10b981" : "#f59e0b" }}>{resume.score}%</span>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <button style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "none", background: "var(--accent-primary)", color: "white", fontSize: "0.85rem", fontWeight: 700 }}>Edit Draft</button>
                          <button style={{ padding: "10px 14px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.1)", background: "white" }}>
                            <i className="bi bi-three-dots"></i>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Uploaded Resumes Column */}
                <div className="col-lg-6">
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }}></div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-primary)", margin: 0 }}>External Uploads</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {[
                      { name: "Siva_Prasad_CV.pdf", date: "Uploaded 3d ago", type: "PDF" },
                      { name: "Portfolio_Resume.docx", date: "Uploaded 1w ago", type: "DOCX" }
                    ].map((resume) => (
                      <motion.div 
                        key={resume.name}
                        whileHover={{ scale: 1.02 }}
                        style={{ 
                          padding: "24px", 
                          borderRadius: "20px", 
                          border: "1px solid rgba(0,0,0,0.05)", 
                          background: "rgba(0,0,0,0.01)",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "white", border: "1px solid rgba(0,0,0,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <i className={`bi ${resume.type === 'PDF' ? 'bi-file-pdf' : 'bi-file-word'}`} style={{ fontSize: "1.25rem", color: resume.type === 'PDF' ? "#ef4444" : "#3b82f6" }}></i>
                            </div>
                            <div>
                              <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 700 }}>{resume.name}</h4>
                              <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)" }}>{resume.date}</p>
                            </div>
                          </div>
                          <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--text-secondary)", background: "rgba(0,0,0,0.05)", padding: "4px 10px", borderRadius: "6px" }}>{resume.type}</span>
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <button style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "none", background: "#10b981", color: "white", fontSize: "0.85rem", fontWeight: 700 }}>Run ATS Check</button>
                          <button style={{ padding: "10px 14px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.1)", background: "white" }}>
                            <i className="bi bi-download"></i>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Resume ATS Sections (THIRD - FULL WIDTH) */}
            <div className="row g-4" style={{ alignItems: "stretch" }}>
              <div className="col-lg-8">
                <div className="app-card" style={{ background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.3)", padding: "40px", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <i className="bi bi-shield-check" style={{ color: "#10b981", fontSize: "1.5rem" }}></i>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 800, margin: 0 }}>Detailed ATS Audit</h3>
                  </div>
                  <div className="row g-4">
                    {[
                      { label: "Action Verbs", status: "Perfect", color: "#10b981", score: 100 },
                      { label: "Keyword Density", status: "Good", color: "#f59e0b", score: 75 },
                      { label: "Contact Info", status: "Verified", color: "#10b981", score: 100 },
                      { label: "Skills Alignment", status: "Optimal", color: "#3b82f6", score: 90 }
                    ].map(item => (
                      <div key={item.label} className="col-md-6">
                        <div style={{ padding: "20px", borderRadius: "16px", background: "white", border: "1px solid rgba(0,0,0,0.05)" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                            <span style={{ fontSize: "0.9rem", fontWeight: 700 }}>{item.label}</span>
                            <span style={{ fontSize: "0.8rem", fontWeight: 800, color: item.color }}>{item.status}</span>
                          </div>
                          <div style={{ height: "8px", background: "rgba(0,0,0,0.05)", borderRadius: "4px" }}>
                            <div style={{ width: `${item.score}%`, height: "100%", background: item.color, borderRadius: "4px" }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="app-card" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white", border: "none", padding: "32px", height: "100%" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "16px" }}>Optimization Tip</h3>
                  <p style={{ fontSize: "0.9rem", opacity: 0.9, lineHeight: 1.7, marginBottom: "24px" }}>
                    "Focus on results, not just tasks. Use the STAR method to describe your experience for a 20% higher ATS score."
                  </p>
                  <button style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "none", background: "white", color: "#6366f1", fontWeight: 800, fontSize: "0.85rem" }}>
                    Get AI Coaching
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
