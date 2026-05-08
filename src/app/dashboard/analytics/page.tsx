"use client";

import { motion } from "framer-motion";

export default function AnalyticsPage() {
  return (
    <div className="dashboard-content-wrapper">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "48px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(59, 130, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="bi bi-bar-chart" style={{ fontSize: "1.5rem", color: "#3b82f6" }}></i>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 800, margin: 0 }}>Ecosystem Analytics</h1>
          </div>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px" }}>
            Comprehensive data insights across all your Creative-Hub services.
          </p>
        </motion.div>

        <div className="row g-4">
          {[
            { label: "Talent Hub", value: "1,240", growth: "+12%", icon: "bi-briefcase", color: "#3b82f6" },
            { label: "Course Hub", value: "850", growth: "+24%", icon: "bi-book", color: "#10b981" },
            { label: "Meet Gen", value: "4.2k", growth: "+18%", icon: "bi-camera-video", color: "#8b5cf6" },
            { label: "Resumes", value: "310", growth: "+5%", icon: "bi-file-earmark-person", color: "#f59e0b" },
            { label: "Community", value: "2.8k", growth: "+32%", icon: "bi-people", color: "#f43f5e" }
          ].map((stat) => (
            <div key={stat.label} className="col-xl col-lg-4 col-md-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="app-card" 
                style={{ 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "space-between",
                  padding: "24px",
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)"
                }}
              >
                <div>
                  <div style={{ 
                    width: "40px", 
                    height: "40px", 
                    borderRadius: "12px", 
                    background: `${stat.color}15`, 
                    color: stat.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    fontSize: "1.2rem"
                  }}>
                    <i className={`bi ${stat.icon}`}></i>
                  </div>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {stat.label}
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "12px" }}>
                  <h3 style={{ margin: 0, fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)" }}>{stat.value}</h3>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#10b981", background: "#10b98115", padding: "2px 8px", borderRadius: "6px" }}>
                    {stat.growth}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="row g-4" style={{ marginTop: "32px" }}>
          <div className="col-lg-8">
            <div className="app-card" style={{ padding: "32px", background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Ecosystem Growth</h3>
                  <p style={{ margin: "4px 0 0 0", fontSize: "0.9rem", color: "var(--text-secondary)" }}>Performance breakdown by individual product</p>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  {[
                    { label: "Talent", color: "#3b82f6" },
                    { label: "Course", color: "#10b981" },
                    { label: "Meet", color: "#f43f5e" }
                  ].map(dot => (
                    <div key={dot.label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: dot.color }}></div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-secondary)" }}>{dot.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modern Area Chart Representation */}
              <div style={{ position: "relative", height: "300px", marginTop: "20px" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100%", display: "flex", alignItems: "flex-end", gap: "2px" }}>
                  {[
                    { talent: 40, course: 20, meet: 10 },
                    { talent: 55, course: 35, meet: 15 },
                    { talent: 45, course: 40, meet: 25 },
                    { talent: 70, course: 60, meet: 45 },
                    { talent: 60, course: 55, meet: 40 },
                    { talent: 85, course: 75, meet: 60 },
                    { talent: 95, course: 90, meet: 80 }
                  ].map((data, i) => (
                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "0" }}>
                      <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "flex-end" }}>
                        {/* Talent Layer */}
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${data.talent}%` }}
                          transition={{ delay: i * 0.1, duration: 1 }}
                          style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(59, 130, 246, 0.4)", borderTop: "2px solid #3b82f6", zIndex: 1 }}
                        />
                        {/* Course Layer */}
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${data.course}%` }}
                          transition={{ delay: i * 0.1 + 0.1, duration: 1 }}
                          style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(16, 185, 129, 0.4)", borderTop: "2px solid #10b981", zIndex: 2 }}
                        />
                        {/* Meet Layer */}
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${data.meet}%` }}
                          transition={{ delay: i * 0.1 + 0.2, duration: 1 }}
                          style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(244, 63, 94, 0.4)", borderTop: "2px solid #f43f5e", zIndex: 3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px", color: "var(--text-secondary)", fontSize: "0.8rem", fontWeight: 600 }}>
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
                <span>SUN</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="app-card" style={{ padding: "32px", height: "100%", background: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "32px" }}>Activity Share</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {[
                  { name: "Talent Hub", value: "40%", color: "#3b82f6", icon: "bi-briefcase" },
                  { name: "Course Hub", value: "35%", color: "#10b981", icon: "bi-book" },
                  { name: "Meet Gen", value: "15%", color: "#f43f5e", icon: "bi-camera-video" },
                  { name: "Others", value: "10%", color: "#f59e0b", icon: "bi-grid" }
                ].map((product) => (
                  <div key={product.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <i className={`bi ${product.icon}`} style={{ color: product.color }}></i>
                        <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{product.name}</span>
                      </div>
                      <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>{product.value}</span>
                    </div>
                    <div style={{ height: "8px", background: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: product.value }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ height: "100%", background: product.color, borderRadius: "4px" }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "40px", padding: "20px", borderRadius: "16px", background: "rgba(0,112,243,0.05)", border: "1px solid rgba(0,112,243,0.1)" }}>
                <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 600, color: "var(--accent-primary)" }}>
                  <i className="bi bi-star-fill" style={{ marginRight: "8px" }}></i>
                  Product Leader
                </p>
                <p style={{ margin: "8px 0 0 0", fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  The Talent Hub remains your most active product, accounting for 40% of total ecosystem engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
