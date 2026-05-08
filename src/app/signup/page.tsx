"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate navigation to OTP verification
    router.push("/verify");
  };

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
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "8px" }}>Create an account</h1>
        </div>

        <form onSubmit={handleSignUp}>
          <div style={{ marginBottom: "16px" }}>
            <input type="text" id="fullname" className="input-custom" placeholder="Full Name" required />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <input type="email" id="email" className="input-custom" placeholder="Email Address" required />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <input type="password" id="password" className="input-custom" placeholder="Password" required minLength={8} />
          </div>

          <button type="submit" className="pill-button" style={{ width: "100%", padding: "12px", fontSize: "0.95rem", borderRadius: "16px", marginBottom: "24px" }}>
            Sign Up
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
          Already have an account? <Link href="/login" style={{ color: "var(--accent-primary)", fontWeight: 600 }}>Sign in</Link>
        </p>
      </motion.div>
    </div>
  );
}
