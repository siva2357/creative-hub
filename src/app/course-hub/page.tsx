"use client";

import { motion } from "framer-motion";

export default function CourseHubPage() {
  return (
    <div className="dashboard-content-wrapper">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "48px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "rgba(139, 92, 246, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="bi bi-book" style={{ fontSize: "1.5rem", color: "#8b5cf6" }}></i>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 800, margin: 0 }}>Course Hub</h1>
          </div>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px" }}>
            Manage your learning journey, courses, and certifications.
          </p>
        </motion.div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="app-card">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "16px" }}>Enrolled Courses</h3>
              <p style={{ fontSize: "2.5rem", fontWeight: 800, margin: 0, color: "#8b5cf6" }}>8</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>3 in progress</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="app-card">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "16px" }}>Certifications</h3>
              <p style={{ fontSize: "2.5rem", fontWeight: 800, margin: 0, color: "#10b981" }}>4</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>View all verified</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="app-card">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "16px" }}>Learning Hours</h3>
              <p style={{ fontSize: "2.5rem", fontWeight: 800, margin: 0, color: "#f59e0b" }}>124</p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>Total time spent</p>
            </div>
          </div>
        </div>

        <div className="app-card" style={{ marginTop: "32px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "24px" }}>Recent Progress</h3>
          {[
            { name: "Advanced React Patterns", progress: 85, color: "#8b5cf6" },
            { name: "UI/UX Design Masterclass", progress: 40, color: "#3b82f6" },
            { name: "Next.js for Beginners", progress: 100, color: "#10b981" }
          ].map((course) => (
            <div key={course.name} style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontWeight: 600 }}>{course.name}</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: course.color }}>{course.progress}%</span>
              </div>
              <div style={{ height: "8px", background: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progress}%` }}
                  transition={{ duration: 1 }}
                  style={{ height: "100%", background: course.color, borderRadius: "4px" }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
