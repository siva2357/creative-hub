"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ConfirmationPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", position: "relative" }}>
      {/* Global BackgroundBlobs are handling the background now */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: "center", maxWidth: "800px", padding: "0 20px" }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          style={{ 
            width: "100px", 
            height: "100px", 
            background: "rgba(52, 168, 83, 0.1)", 
            borderRadius: "50%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            margin: "0 auto 40px", 
            color: "#34a853", 
            fontSize: "3rem",
            border: "1px solid rgba(52, 168, 83, 0.2)"
          }}
        >
          <i className="bi bi-check-lg"></i>
        </motion.div>
        
        <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontWeight: 800, marginBottom: "24px", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
          You're all set.
        </h1>
        
        <p style={{ color: "var(--text-secondary)", fontSize: "clamp(1.1rem, 2vw, 1.3rem)", lineHeight: 1.6, marginBottom: "56px", maxWidth: "600px", margin: "0 auto 56px auto" }}>
          Your identity is verified. You now have the master key to the entire Creative-Hub ecosystem.
        </p>

        <Link href="/login" className="pill-button" style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "16px 40px", fontSize: "1.1rem", borderRadius: "99px", background: "var(--text-primary)", color: "var(--bg-primary)" }}>
          Go to Login <i className="bi bi-arrow-right"></i>
        </Link>
      </motion.div>
    </div>
  );
}
