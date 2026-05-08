"use client";

import { motion } from "framer-motion";

export default function ProfilePage() {
  const user = {
    name: "Siva Prasad",
    role: "Full Stack Developer & Creative Hub Architect",
    location: "Hyderabad, India",
    email: "siva.prasad@example.com",
    joined: "Member since May 2026",
    bio: "Passionate developer building scalable ecosystems and intuitive user experiences. Focused on bridging the gap between technology and creativity through the Creative Hub platform.",
    skills: ["React/Next.js", "TypeScript", "Node.js", "Firebase", "Cloud Architecture", "UI/UX Design"],
    stats: [
      { label: "Products Explored", value: "6/6", icon: "bi-grid-fill" },
      { label: "Resumes Built", value: "12", icon: "bi-file-earmark-person" },
      { label: "Certifications", value: "4", icon: "bi-award" }
    ]
  };

  return (
    <div className="dashboard-content-wrapper">
      <div className="container-custom">
        {/* Header / Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "40px" }}
        >
          <div className="app-card" style={{ 
            background: "linear-gradient(135deg, var(--accent-primary) 0%, #6366f1 100%)", 
            padding: "48px", 
            borderRadius: "32px",
            color: "white",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.2)"
          }}>
            {/* Decorative circles */}
            <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.1)" }}></div>
            <div style={{ position: "absolute", bottom: "-30px", left: "10%", width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.05)" }}></div>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px", position: "relative", zIndex: 1 }}>
              <div style={{ width: "120px", height: "120px", borderRadius: "30px", background: "white", padding: "4px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Siva"
                  alt="Siva Prasad"
                  style={{ width: "100%", height: "100%", borderRadius: "26px", objectFit: "cover", background: "#f3f4f6" }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: 800, margin: "0 0 8px 0" }}>{user.name}</h1>
                <p style={{ fontSize: "1.1rem", opacity: 0.9, fontWeight: 500, margin: "0 0 16px 0" }}>{user.role}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
                    <i className="bi bi-geo-alt-fill"></i> {user.location}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem" }}>
                    <i className="bi bi-calendar-check"></i> {user.joined}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button style={{ padding: "12px 24px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)", color: "white", fontWeight: 700, fontSize: "0.9rem", backdropFilter: "blur(10px)" }}>
                  Share Profile
                </button>
                <button style={{ padding: "12px 24px", borderRadius: "12px", border: "none", background: "white", color: "#000000", fontWeight: 800, fontSize: "0.9rem" }}>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="row g-4">
          {/* Sidebar Info */}
          <div className="col-lg-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="app-card" style={{ marginBottom: "24px", padding: "32px", border: "1px solid #000" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "20px" }}>Expertise</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  {user.skills.map((skill, index) => (
                    <span key={index} style={{ 
                      padding: "8px 16px", 
                      borderRadius: "10px", 
                      background: "rgba(0,0,0,0.05)", 
                      color: "#000000", 
                      fontSize: "0.85rem", 
                      fontWeight: 700 
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="app-card" style={{ padding: "32px", border: "1px solid #000" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "20px" }}>Connect</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { label: "LinkedIn", value: "/in/sivaprasad", icon: "bi-linkedin", color: "#0077b5" },
                    { label: "GitHub", value: "/sivaprasad-dev", icon: "bi-github", color: "#333" },
                    { label: "Portfolio", value: "siva.dev", icon: "bi-globe", color: "#6366f1" }
                  ].map((social, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(0,0,0,0.03)", display: "flex", alignItems: "center", justifyContent: "center", color: social.color }}>
                        <i className={`bi ${social.icon}`} style={{ fontSize: "1.2rem" }}></i>
                      </div>
                      <div>
                        <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 700 }}>{social.label}</p>
                        <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-secondary)" }}>{social.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="col-lg-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Quick Stats */}
              <div className="row g-4" style={{ marginBottom: "24px" }}>
                {user.stats.map((stat, index) => (
                  <div key={index} className="col-md-4">
                    <div className="app-card" style={{ textAlign: "center", padding: "24px", border: "1px solid #000" }}>
                      <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(0,0,0,0.05)", color: "#000000", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
                        <i className={`bi ${stat.icon}`} style={{ fontSize: "1.2rem" }}></i>
                      </div>
                      <h4 style={{ fontSize: "1.5rem", fontWeight: 800, margin: "0 0 4px 0" }}>{stat.value}</h4>
                      <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0 }}>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bio Section */}
              <div className="app-card" style={{ marginBottom: "24px", padding: "32px", border: "1px solid #000" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "16px" }}>Professional Summary</h3>
                <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8, margin: 0 }}>
                  {user.bio}
                </p>
              </div>

              {/* Achievements / Recent Activity */}
              <div className="app-card" style={{ padding: "32px", border: "1px solid #000" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, margin: 0 }}>Recent Achievements</h3>
                  <button style={{ border: "none", background: "transparent", color: "#000000", fontSize: "0.85rem", fontWeight: 700 }}>View All</button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    { title: "Ecosystem Pioneer", desc: "Successfully explored and integrated all 6 Creative Hub products.", date: "2 days ago", icon: "bi-rocket-takeoff", color: "#8b5cf6" },
                    { title: "Resume Optimized", desc: "Achieved an ATS score of 95% on 'Senior Web Developer' resume.", date: "1 week ago", icon: "bi-check2-circle", color: "#10b981" },
                    { title: "Cloud Architect Cert", desc: "Completed the advanced Cloud Hub infrastructure certification.", date: "2 weeks ago", icon: "bi-shield-check", color: "#3b82f6" }
                  ].map((achievement, index) => (
                    <div key={index} style={{ display: "flex", gap: "16px", padding: "16px", borderRadius: "16px", border: "1px solid #000", background: "rgba(0,0,0,0.01)" }}>
                      <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "white", color: achievement.color, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}>
                        <i className={`bi ${achievement.icon}`} style={{ fontSize: "1.5rem" }}></i>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <h4 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>{achievement.title}</h4>
                          <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>{achievement.date}</span>
                        </div>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: "4px 0 0 0" }}>{achievement.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
