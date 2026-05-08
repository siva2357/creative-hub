"use client";

import { motion } from "framer-motion";

export default function ServiceRequestsPage() {
  return (
    <div className="dashboard-content-wrapper">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "40px" }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>Service Requests</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>Track and manage your requests across the ecosystem.</p>
        </motion.div>

        <div className="app-card" style={{ padding: "32px", textAlign: "center" }}>
          <i className="bi bi-clipboard-check" style={{ fontSize: "4rem", color: "var(--accent-primary)", opacity: 0.2 }}></i>
          <h2 style={{ marginTop: "24px", fontWeight: 700 }}>Request Tracker Coming Soon</h2>
          <p style={{ color: "var(--text-secondary)" }}>Your central hub for tracking support and feature requests is being built.</p>
        </div>
      </div>
    </div>
  );
}
