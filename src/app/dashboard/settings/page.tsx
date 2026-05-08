"use client";

import { motion } from "framer-motion";

export default function SettingsPage() {
  return (
    <div className="dashboard-content-wrapper">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "40px" }}
        >
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>Account Settings</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>Manage your account preferences and security.</p>
        </motion.div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {/* Section 1: Profile Details */}
              <div className="app-card" style={{ padding: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(0,112,243,0.05)", color: "var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="bi bi-person-badge" style={{ fontSize: "1.2rem" }}></i>
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, margin: 0 }}>Profile Details</h3>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "8px", display: "block" }}>Full Name</label>
                      <input 
                        type="text" 
                        value="Siva Prasad" 
                        disabled 
                        style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)", cursor: "not-allowed", fontWeight: 500 }} 
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "8px", display: "block" }}>Username</label>
                      <input 
                        type="text" 
                        value="sivaprasad_dev" 
                        disabled 
                        style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)", cursor: "not-allowed", fontWeight: 500 }} 
                      />
                    </div>
                    <div className="col-12">
                      <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "8px", display: "block" }}>Email Address</label>
                      <input 
                        type="email" 
                        value="siva.prasad@creativehub.com" 
                        disabled 
                        style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)", cursor: "not-allowed", fontWeight: 500 }} 
                      />
                      <div style={{ marginTop: "12px", padding: "12px 16px", borderRadius: "10px", background: "rgba(0,112,243,0.03)", border: "1px solid rgba(0,112,243,0.1)", display: "flex", gap: "10px", alignItems: "center" }}>
                        <i className="bi bi-info-circle-fill" style={{ color: "var(--accent-primary)" }}></i>
                        <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: 1.4 }}>
                          Your primary identity details are managed through the central organizational directory and cannot be modified here.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Account & Security */}
              <div className="app-card" style={{ padding: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(0,112,243,0.05)", color: "var(--accent-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="bi bi-shield-lock" style={{ fontSize: "1.2rem" }}></i>
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, margin: 0 }}>Account & Security</h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div>
                    <label style={{ fontSize: "0.85rem", fontWeight: 700, marginBottom: "8px", display: "block" }}>Current Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••" 
                      style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.1)", background: "white" }} 
                    />
                  </div>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label style={{ fontSize: "0.85rem", fontWeight: 700, marginBottom: "8px", display: "block" }}>New Password</label>
                      <input 
                        type="password" 
                        placeholder="Enter new password" 
                        style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.1)", background: "white" }} 
                      />
                    </div>
                    <div className="col-md-6">
                      <label style={{ fontSize: "0.85rem", fontWeight: 700, marginBottom: "8px", display: "block" }}>Confirm New Password</label>
                      <input 
                        type="password" 
                        placeholder="Repeat new password" 
                        style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.1)", background: "white" }} 
                      />
                    </div>
                  </div>
                  <div style={{ paddingTop: "12px" }}>
                    <button style={{ 
                      padding: "16px 32px", 
                      borderRadius: "14px", 
                      fontSize: "1rem", 
                      fontWeight: 800, 
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "none",
                      width: "fit-content",
                      background: "#000000",
                      color: "#ffffff",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}>
                      <i className="bi bi-check2-circle"></i>
                      Update Security Credentials
                    </button>
                  </div>
                </div>
              </div>

              {/* Section 3: Manage Account */}
              <div className="app-card" style={{ padding: "40px", border: "1.5px solid rgba(255, 77, 77, 0.15)", background: "rgba(255, 77, 77, 0.01)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(255, 77, 77, 0.05)", color: "#ff4d4d", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="bi bi-trash3" style={{ fontSize: "1.2rem" }}></i>
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, margin: 0, color: "#ff4d4d" }}>Manage Account</h3>
                </div>
                
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "32px", lineHeight: 1.6 }}>
                  Warning: Deleting your account is a <strong>permanent action</strong>. All your data across the Creative Hub ecosystem will be irrecoverably removed.
                </p>
                
                <button style={{ 
                  padding: "14px 28px", 
                  borderRadius: "12px", 
                  border: "1.5px solid #ff4d4d", 
                  background: "white", 
                  color: "#ff4d4d", 
                  fontWeight: 800, 
                  fontSize: "0.9rem",
                  transition: "all 0.2s ease"
                }}>
                  Delete My Account Permanently
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div style={{ position: "sticky", top: "100px" }}>
              {/* Interface Preferences Card */}
              <div className="app-card" style={{ padding: "32px", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                  <i className="bi bi-palette" style={{ color: "var(--accent-primary)", fontSize: "1.2rem" }}></i>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, margin: 0 }}>Interface Preferences</h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {/* Theme Selector */}
                  <div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "12px" }}>THEME MODE</p>
                    <div style={{ display: "flex", background: "rgba(0,0,0,0.03)", padding: "4px", borderRadius: "12px", gap: "4px" }}>
                      <button style={{ flex: 1, padding: "8px", borderRadius: "10px", border: "none", background: "white", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", fontSize: "0.85rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                        <i className="bi bi-sun"></i> Light
                      </button>
                      <button style={{ flex: 1, padding: "8px", borderRadius: "10px", border: "none", background: "transparent", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                        <i className="bi bi-moon"></i> Dark
                      </button>
                    </div>
                  </div>

                  {/* Navigation Layout */}
                  <div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "12px" }}>NAVIGATION LAYOUT</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px", borderRadius: "12px", border: "2px solid var(--accent-primary)", background: "rgba(0,112,243,0.03)", cursor: "pointer" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <i className="bi bi-layout-sidebar-inset" style={{ fontSize: "1.1rem", color: "var(--accent-primary)" }}></i>
                          <span style={{ fontSize: "0.9rem", fontWeight: 700 }}>Sidebar Navigation</span>
                        </div>
                        <i className="bi bi-check-circle-fill" style={{ color: "var(--accent-primary)" }}></i>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.08)", background: "transparent", cursor: "pointer" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <i className="bi bi-layout-header" style={{ fontSize: "1.1rem" }}></i>
                          <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>Top Menu Navigation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Card */}
              <div className="app-card" style={{ padding: "32px", background: "linear-gradient(135deg, rgba(0,112,243,0.05) 0%, rgba(99,102,241,0.05) 100%)" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: "12px" }}>Need Help?</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "20px", lineHeight: 1.5 }}>
                  Can't find the setting you're looking for? Reach out to our support team.
                </p>
                <button style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid var(--accent-primary)", background: "transparent", color: "var(--accent-primary)", fontWeight: 700, fontSize: "0.85rem" }}>
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
