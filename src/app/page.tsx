"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
      className="d-flex align-items-center justify-content-center"
    >
      {/* 🔵 BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          width: "1200px",
          height: "1200px",
          background:
            "radial-gradient(circle, rgba(20,80,255,0.4), transparent 70%)",
          top: "-300px",
          left: "-300px",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      {/* 🟣 FLOATING BLOB */}
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(100,0,255,0.4), transparent 70%)",
          bottom: "-150px",
          right: "-150px",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      {/* 🔷 MAIN CONTENT */}
      <div
        className="text-center px-3"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://res.cloudinary.com/dpp8aspqs/image/upload/v1772290558/AI_Logo_dxqrdz.svg"
            alt="Creative Hub Logo"
            width={160}
            height={160}
            priority
            style={{ marginBottom: "30px" }}
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          style={{
            fontSize: "clamp(2.8rem, 6vw, 3rem)",
            fontWeight: 600,
            letterSpacing: "-1.5px",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Creative Hub
        </motion.h1>

        {/* Tagline */}
        <motion.p
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
            opacity: 0.6,
            marginTop: "20px",
            maxWidth: "600px",
            marginInline: "auto",
            lineHeight: "1.6",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          An ecosystem for growth development — built for the future.
        </motion.p>

        {/* CTA */}
        <motion.div
          style={{ marginTop: "50px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            style={{
              padding: "14px 34px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: "white",
              backdropFilter: "blur(12px)",
              fontSize: "14px",
              letterSpacing: "0.5px",
              transition: "all 0.5s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Launching Soon
          </button>
        </motion.div>
      </div>
    </div>
  );
}
