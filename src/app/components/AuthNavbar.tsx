"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { useState, useRef, useEffect } from "react";

export default function AuthNavbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="auth-header"
    >
      {/* Left: Hamburger & Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button 
          onClick={onToggleSidebar}
          className="d-xl-none"
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            padding: "4px",
            cursor: "pointer"
          }}
        >
          <i className="bi bi-list"></i>
        </button>

        <Link href="/dashboard" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src="/logo.png"
            alt="Creative-Hub Logo"
            style={{ width: "auto", height: "clamp(40px, 8vw, 60px)", objectFit: "contain" }}
          />
        </Link>
      </div>

      {/* Right: Notifications & User Profile */}
      <div style={{ display: "flex", gap: "clamp(8px, 2vw, 16px)", alignItems: "center" }}>

        {/* Notifications */}
        <div style={{ position: "relative" }} ref={notifRef}>
          <button
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            style={{
              width: "clamp(36px, 8vw, 44px)",
              height: "clamp(36px, 8vw, 44px)",
              borderRadius: "12px",
              background: "rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "clamp(1rem, 4vw, 1.2rem)",
              color: "var(--text-primary)",
              position: "relative"
            }}
          >
            <i className="bi bi-bell"></i>
            <span style={{
              position: "absolute",
              top: "20%",
              right: "20%",
              width: "8px",
              height: "8px",
              background: "#ff4d4d",
              borderRadius: "50%",
              border: "2px solid white"
            }}></span>
          </button>

          {isNotifOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              style={{
                position: "absolute",
                top: "55px",
                right: "-10px",
                width: "min(300px, 85vw)",
                background: "white",
                borderRadius: "20px",
                padding: "20px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid rgba(0,0,0,0.08)",
                zIndex: 1001
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: 700 }}>Notifications</h4>
                <span style={{ fontSize: "0.75rem", color: "var(--accent-primary)", fontWeight: 600 }}>Mark all as read</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ padding: "10px", borderRadius: "12px", background: "rgba(0,112,243,0.05)", fontSize: "0.85rem" }}>
                  <p style={{ margin: "0 0 4px 0", fontWeight: 600 }}>Application Update</p>
                  <p style={{ margin: 0, color: "var(--text-secondary)" }}>Your application for Senior Designer was viewed.</p>
                </div>
                <div style={{ padding: "10px", borderRadius: "12px", background: "rgba(0,0,0,0.02)", fontSize: "0.85rem" }}>
                  <p style={{ margin: "0 0 4px 0", fontWeight: 600 }}>New Course Available</p>
                  <p style={{ margin: 0, color: "var(--text-secondary)" }}>Advanced Next.js is now live in Course Hub.</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* User Profile Dropdown */}
        <div style={{ position: "relative" }} ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "clamp(4px, 1vw, 6px) clamp(4px, 1vw, 6px) clamp(4px, 1vw, 6px) clamp(8px, 2vw, 16px)",
              background: "rgba(0,112,243,0.05)",
              borderRadius: "99px",
              border: "1.5px solid rgba(0,112,243,0.1)",
              cursor: "pointer"
            }}
          >
            <span className="d-none d-md-inline" style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>Alex Prasad</span>
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
              alt="Alex Prasad"
              style={{ width: "clamp(32px, 7vw, 36px)", height: "clamp(32px, 7vw, 36px)", borderRadius: "50%", objectFit: "cover", border: "2px solid var(--accent-primary)" }}
            />
          </button>

          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              style={{
                position: "absolute",
                top: "60px",
                right: 0,
                width: "240px",
                background: "white",
                borderRadius: "20px",
                padding: "12px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                border: "1px solid rgba(0,0,0,0.08)",
                zIndex: 1001,
                display: "flex",
                flexDirection: "column",
                gap: "4px"
              }}
            >
              <Link href="/profile" className="dropdown-item-custom" onClick={() => setIsProfileOpen(false)}>
                <i className="bi bi-person"></i> View Profile
              </Link>
              <Link href="/settings" className="dropdown-item-custom" onClick={() => setIsProfileOpen(false)}>
                <i className="bi bi-gear"></i> Account Settings
              </Link>
              <Link href="/service-requests" className="dropdown-item-custom" onClick={() => setIsProfileOpen(false)}>
                <i className="bi bi-clipboard-check"></i> Service Requests
              </Link>
              <div style={{ height: "1px", background: "rgba(0,0,0,0.05)", margin: "8px 4px" }} />
              <Link href="/login" className="dropdown-item-custom" style={{ color: "#ff4d4d" }}>
                <i className="bi bi-box-arrow-right"></i> Logout
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
