"use client";

import { motion } from "framer-motion";

export default function TalentHubPage() {
  return (
    <div className="dashboard-content-wrapper">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "40px" }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "8px" }}>Talent Hub</h1>
          <p style={{ color: "var(--text-secondary)" }}>Manage your recruitment pipeline and candidate data.</p>
        </motion.div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="app-card">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "16px" }}>Active Job Postings</h3>
              <p style={{ fontSize: "2rem", fontWeight: 800, margin: 0, color: "var(--accent-primary)" }}>12</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>+3 since last week</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="app-card">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "16px" }}>New Applications</h3>
              <p style={{ fontSize: "2rem", fontWeight: 800, margin: 0, color: "#10b981" }}>48</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>12 requiring review</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="app-card">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "16px" }}>Interviews Today</h3>
              <p style={{ fontSize: "2rem", fontWeight: 800, margin: 0, color: "#f59e0b" }}>5</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>Next: 2:00 PM</p>
            </div>
          </div>
        </div>

        <div className="app-card" style={{ marginTop: "32px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "24px" }}>Recent Activity</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", paddingBottom: "16px", borderBottom: i < 3 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(0,112,243,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="bi bi-person-plus" style={{ color: "var(--accent-primary)" }}></i>
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: "0.95rem" }}>New applicant for Senior Frontend Developer</p>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-secondary)" }}>2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
