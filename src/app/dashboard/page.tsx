"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DashboardOverview() {
  return (
    <div className="dashboard-content-wrapper">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "48px" }}
        >
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 800, marginBottom: "12px" }}>Dashboard Overview</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px" }}>
            Welcome back! Here's a high-level look at your Creative-Hub ecosystem.
          </p>
        </motion.div>

        {/* Quick Analytics Cards */}
        <div className="row g-4" style={{ marginBottom: "48px" }}>
          {[
            { label: "Active Projects", value: "12", icon: "bi-layers", color: "#3b82f6" },
            { label: "Team Members", value: "24", icon: "bi-people", color: "#10b981" },
            { label: "Storage Used", value: "65%", icon: "bi-cloud", color: "#8b5cf6" },
            { label: "Next Deadline", value: "Tomorrow", icon: "bi-calendar-event", color: "#f43f5e" }
          ].map((stat) => (
            <div key={stat.label} className="col-xl-3 col-md-6">
              <div className="app-card" style={{ padding: "24px", display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${stat.color}15`, color: stat.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>
                  <i className={`bi ${stat.icon}`}></i>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>{stat.label}</p>
                  <p style={{ margin: 0, fontSize: "1.25rem", fontWeight: 800 }}>{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="app-card" style={{ padding: "32px", height: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, margin: 0 }}>Recent Activity</h3>
                <Link href="/analytics" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--accent-primary)", textDecoration: "none" }}>View Analytics</Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { action: "New course enrolled", time: "2 hours ago", user: "Sarah Chen" },
                  { action: "Resume export completed", time: "5 hours ago", user: "You" },
                  { action: "Team meeting scheduled", time: "1 day ago", user: "Mark Johnson" }
                ].map((activity, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", borderRadius: "12px", background: "rgba(0,0,0,0.02)" }}>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: "0.95rem" }}>{activity.action}</p>
                      <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)" }}>{activity.user}</p>
                    </div>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="app-card" style={{ padding: "32px", background: "rgba(0,112,243,0.05)", border: "1px solid rgba(0,112,243,0.1)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "16px" }}>Ecosystem Tip</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "24px" }}>
                Did you know? You can sync your Talent Hub profile directly with the Resume Builder to save time.
              </p>
              <Link href="/explore" className="btn-primary" style={{ display: "block", textAlign: "center", textDecoration: "none", padding: "10px", borderRadius: "10px" }}>
                Explore More Tips
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
