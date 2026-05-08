"use client";

import { motion } from "framer-motion";

export default function MeetGenPage() {
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
              <i className="bi bi-camera-video" style={{ fontSize: "1.5rem", color: "#f43f5e" }}></i>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 800, margin: 0 }}>Meet Gen</h1>
          </div>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px" }}>
            Host, schedule, and manage your high-definition video meetings.
          </p>
        </motion.div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="app-card" style={{ background: "linear-gradient(135deg, #f43f5e, #fb7185)", color: "white", border: "none" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }}>Start Instant Meeting</h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.9, marginBottom: "24px" }}>Create a secure room and invite participants in one click.</p>
              <button style={{ background: "white", color: "#f43f5e", border: "none", padding: "12px 24px", borderRadius: "12px", fontWeight: 700 }}>
                Start Now
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="app-card">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px" }}>Schedule Meeting</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "24px" }}>Plan your upcoming sessions and sync with your calendar.</p>
              <button style={{ background: "rgba(0,0,0,0.05)", border: "none", padding: "12px 24px", borderRadius: "12px", fontWeight: 700, color: "var(--text-primary)" }}>
                Pick a Date
              </button>
            </div>
          </div>
        </div>

        <div className="app-card" style={{ marginTop: "32px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "24px" }}>Upcoming Meetings</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { title: "Team Weekly Sync", time: "Today, 4:00 PM", participants: 8 },
              { title: "Client Discovery Call", time: "Tomorrow, 11:30 AM", participants: 3 },
              { title: "Design Feedback", time: "12 May, 2:00 PM", participants: 5 }
            ].map((meet) => (
              <div key={meet.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", borderRadius: "16px", background: "rgba(0,0,0,0.02)" }}>
                <div>
                  <p style={{ margin: 0, fontWeight: 700 }}>{meet.title}</p>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-secondary)" }}>{meet.time} • {meet.participants} Participants</p>
                </div>
                <button style={{ padding: "8px 16px", borderRadius: "8px", border: "none", background: "var(--accent-primary)", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
