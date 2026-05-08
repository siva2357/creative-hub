"use client";

import { motion } from "framer-motion";

export default function CommunityHubPage() {
  return (
    <div className="dashboard-content-wrapper">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "48px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(244, 63, 94, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="bi bi-people" style={{ fontSize: "1.5rem", color: "#f43f5e" }}></i>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 800, margin: 0 }}>Community Hub</h1>
          </div>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px" }}>
            Connect, collaborate, and grow with the Creative-Hub global community.
          </p>
        </motion.div>

        <div className="row g-4" style={{ alignItems: "flex-start" }}>
          <div className="col-lg-8">
            <div className="app-card" style={{ background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Community Feed</h3>
                <button style={{ padding: "8px 16px", borderRadius: "10px", border: "none", background: "var(--accent-primary)", color: "white", fontWeight: 600, fontSize: "0.85rem" }}>
                  New Post
                </button>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { user: "Sarah Chen", role: "UI Designer", content: "Just finished a new project using the Creative-Hub Cloud assets! The performance is incredible. 🚀", likes: 24, comments: 5 },
                  { user: "Mark Johnson", role: "Full Stack Dev", content: "Anyone interested in a weekend hackathon for the Talent Hub API? Let's build something cool!", likes: 12, comments: 8 }
                ].map((post, i) => (
                  <div key={i} style={{ padding: "20px", borderRadius: "16px", background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.03)" }}>
                    <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#eee" }}></div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: "0.95rem" }}>{post.user}</p>
                        <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-secondary)" }}>{post.role}</p>
                      </div>
                    </div>
                    <p style={{ margin: "0 0 16px 0", fontSize: "0.95rem", lineHeight: 1.6 }}>{post.content}</p>
                    <div style={{ display: "flex", gap: "16px" }}>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "4px" }}>
                        <i className="bi bi-heart"></i> {post.likes}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "4px" }}>
                        <i className="bi bi-chat"></i> {post.comments}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="app-card" style={{ background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.3)", padding: "24px" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "20px" }}>Trending Groups</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { name: "React Pioneers", members: "1.2k", icon: "bi-cpu", color: "#3b82f6" },
                  { name: "Design Systems", members: "850", icon: "bi-palette", color: "#10b981" },
                  { name: "Cloud Architects", members: "430", icon: "bi-cloud", color: "#8b5cf6" }
                ].map((group) => (
                  <div key={group.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `${group.color}10`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <i className={`bi ${group.icon}`} style={{ fontSize: "0.9rem", color: group.color }}></i>
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 700, fontSize: "0.85rem" }}>{group.name}</p>
                        <p style={{ margin: 0, fontSize: "0.7rem", color: "var(--text-secondary)" }}>{group.members} members</p>
                      </div>
                    </div>
                    <button style={{ padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(0,0,0,0.1)", background: "white", fontSize: "0.75rem", fontWeight: 700 }}>Join</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="app-card" style={{ marginTop: "24px", background: "linear-gradient(135deg, #f43f5e, #fb7185)", color: "white", border: "none", padding: "24px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-10px", right: "-10px", width: "60px", height: "60px", background: "rgba(255,255,255,0.1)", borderRadius: "50%" }}></div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px", position: "relative", zIndex: 1 }}>Community Events</h3>
              <p style={{ fontSize: "0.85rem", opacity: 0.9, marginBottom: "16px", lineHeight: 1.4, position: "relative", zIndex: 1 }}>
                <strong>Building Scalable Microservices</strong> <br/>
                Tomorrow, 6:00 PM
              </p>
              <button style={{ width: "100%", padding: "8px", borderRadius: "8px", border: "none", background: "white", color: "#f43f5e", fontWeight: 800, fontSize: "0.8rem", position: "relative", zIndex: 1 }}>
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
