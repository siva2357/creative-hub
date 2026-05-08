"use client";

import { motion } from "framer-motion";

export default function CloudHubPage() {
  return (
    <div className="dashboard-content-wrapper">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "48px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(0,112,243,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="bi bi-cloud-check" style={{ fontSize: "1.5rem", color: "var(--accent-primary)" }}></i>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 800, margin: 0 }}>Cloud Hub</h1>
          </div>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px" }}>
            Real-time monitoring and resource management for your Creative-Hub infrastructure.
          </p>
        </motion.div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="app-card" style={{ height: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 4px 0" }}>Storage Usage</h3>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-secondary)" }}>Across all regions</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--accent-primary)" }}>75%</span>
                  <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-secondary)" }}>Capacity used</p>
                </div>
              </div>
              
              <div style={{ height: "12px", background: "rgba(0,0,0,0.05)", borderRadius: "6px", overflow: "hidden", marginBottom: "24px" }}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ height: "100%", background: "linear-gradient(to right, var(--accent-primary), #00d2ff)", borderRadius: "6px" }}
                ></motion.div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "32px" }}>
                  <div>
                    <p style={{ margin: "0 0 4px 0", fontSize: "0.7rem", color: "var(--text-secondary)", fontWeight: 700, textTransform: "uppercase" }}>Used</p>
                    <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>1.2 TB</p>
                  </div>
                  <div>
                    <p style={{ margin: "0 0 4px 0", fontSize: "0.7rem", color: "var(--text-secondary)", fontWeight: 700, textTransform: "uppercase" }}>Free</p>
                    <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: 700 }}>400 GB</p>
                  </div>
                </div>
                <button style={{ background: "none", border: "1px solid rgba(0,112,243,0.2)", borderRadius: "8px", padding: "4px 12px", fontSize: "0.8rem", fontWeight: 600, color: "var(--accent-primary)" }}>
                  Expand
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="app-card" style={{ height: "100%" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "32px" }}>Resource Load (24h)</h3>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "100px", marginBottom: "20px" }}>
                {[40, 70, 45, 90, 65, 80, 50, 60, 40, 85].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    style={{ flex: 1, background: i === 9 ? "var(--accent-primary)" : "rgba(0,112,243,0.15)", borderRadius: "6px 6px 0 0" }}
                  ></motion.div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Peak load: 90%</span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Avg: 62%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="app-card" style={{ marginTop: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Ecosystem Asset Browser</h3>
            <span style={{ fontSize: "0.85rem", color: "var(--accent-primary)", fontWeight: 600 }}>2.4 TB Total Capacity</span>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { 
                name: "Talent Hub", 
                files: "450", 
                icon: "bi-briefcase",
                categories: [
                  { type: "Candidate Resumes", count: "320", size: "15 GB" },
                  { type: "Portfolio Files", count: "130", size: "85 GB" }
                ]
              },
              { 
                name: "Course Hub", 
                files: "890", 
                icon: "bi-book",
                categories: [
                  { type: "Video Content", count: "45", size: "1.1 TB" },
                  { type: "Student Handouts", count: "845", size: "200 GB" }
                ]
              },
              { 
                name: "Resume Builder", 
                files: "310", 
                icon: "bi-file-earmark-person",
                categories: [
                  { type: "User Drafts", count: "210", size: "5 GB" },
                  { type: "Exported PDFs", count: "100", size: "12 GB" }
                ]
              },
              { 
                name: "Meet Gen", 
                files: "120", 
                icon: "bi-camera-video",
                categories: [
                  { type: "Session Recordings", count: "115", size: "300 GB" },
                  { type: "Meeting Transcripts", count: "5", size: "2 MB" }
                ]
              },
              { 
                name: "Community Hub", 
                files: "1,4k", 
                icon: "bi-people",
                categories: [
                  { type: "Post Attachments", count: "1.2k", size: "450 GB" },
                  { type: "Group Assets", count: "200", size: "120 GB" }
                ]
              },
              { 
                name: "Other Products", 
                files: "85", 
                icon: "bi-plus-circle",
                categories: [
                  { type: "Misc Assets", count: "85", size: "25 GB" }
                ]
              }
            ].map((product, idx) => (
              <details key={product.name} style={{ border: "1px solid rgba(0,0,0,0.05)", borderRadius: "16px", background: "white", overflow: "hidden" }}>
                <summary style={{ 
                  listStyle: "none", 
                  padding: "20px", 
                  cursor: "pointer", 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  background: "rgba(0,0,0,0.01)" 
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(0,112,243,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className={`bi ${product.icon}`} style={{ color: "var(--accent-primary)" }}></i>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700 }}>{product.name}</p>
                      <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)" }}>{product.files} Files total</p>
                    </div>
                  </div>
                  <i className="bi bi-chevron-down" style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}></i>
                </summary>
                <div style={{ padding: "16px", background: "white" }}>
                  <div className="row g-3">
                    {product.categories.map((cat) => (
                      <div key={cat.type} className="col-sm-6">
                        <div style={{ padding: "16px", borderRadius: "12px", background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.03)" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                            <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>{cat.type}</span>
                            <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--accent-primary)" }}>{cat.size}</span>
                          </div>
                          <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-secondary)" }}>{cat.count} individual assets</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
