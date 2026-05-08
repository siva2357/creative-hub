"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", position: "relative" }}>
      {/* Global BackgroundBlobs are handling the background now */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="auth-card"
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Link href="/">
            <img src="/logo.png" alt="Creative-Hub" style={{ height: "48px", marginBottom: "24px" }} />
          </Link>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "8px" }}>Welcome back</h1>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ marginBottom: "16px" }}>
            <input type="email" id="email" className="input-custom" placeholder="Email Address" required />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <input type="password" id="password" className="input-custom" placeholder="Password" required />
          </div>

          <div style={{ textAlign: "right", marginBottom: "24px" }}>
            <Link href="#" style={{ fontSize: "0.85rem", color: "var(--accent-primary)", fontWeight: 600 }}>Forgot password?</Link>
          </div>

          <button type="submit" className="pill-button" style={{ width: "100%", padding: "12px", fontSize: "0.95rem", borderRadius: "16px", marginBottom: "24px" }}>
            Sign In
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
          Don't have an account? <Link href="/signup" style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
}
