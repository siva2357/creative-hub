"use client";

import { motion } from "framer-motion";

export default function PurposePage() {
  return (
    <div style={{ paddingTop: "120px" }}>
      {/* --- HERO SECTION --- */}
      <section style={{ padding: "40px 0 120px", position: "relative", overflow: "hidden" }}>
        <div className="container-custom">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span style={{ 
                  fontSize: "0.75rem", 
                  fontWeight: 800, 
                  letterSpacing: "0.4em", 
                  textTransform: "uppercase", 
                  color: "var(--accent-primary)",
                  marginBottom: "24px",
                  display: "block"
                }}>
                  The Purpose
                </span>
                <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", textAlign: "left", lineHeight: 1.0, marginBottom: "32px", fontWeight: 800 }}>
                  Empowering Growth through<br />Intelligent Connectivity.
                </h1>
                <p className="section-subtitle" style={{ textAlign: "left", fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "600px", opacity: 0.8 }}>
                  At Creative-Hub, we believe that professional growth shouldn't be fragmented. Our purpose is to build an ecosystem where your learning, your community, and your career tools live in perfect harmony.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{
                  width: "100%",
                  height: "450px",
                  background: "#000",
                  borderRadius: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1.5px solid rgba(0, 112, 243, 0.4)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Pulsing Rings - OVER visual */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 3],
                      opacity: [0.6, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1,
                      ease: "easeOut"
                    }}
                    style={{
                      position: "absolute",
                      width: "150px",
                      height: "150px",
                      border: "2px solid var(--accent-primary)",
                      borderRadius: "50%",
                      zIndex: 10
                    }}
                  />
                ))}

                <i className="bi bi-bullseye" style={{ fontSize: "6rem", color: "var(--accent-primary)", filter: "drop-shadow(0 0 20px rgba(0, 112, 243, 0.4))", zIndex: 1 }}></i>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES GRID --- */}
      <section style={{ padding: "120px 0", background: "rgba(0, 112, 243, 0.02)" }}>
        <div className="container-custom">
          <div className="row g-4">
            {[
              { title: "Innovation", desc: "We leverage AI to solve complex problems in recruitment, education, and collaboration.", icon: "bi-cpu" },
              { title: "Integration", desc: "A single account unlocks a world of tools that talk to each other through Cloud Hub.", icon: "bi-link-45deg" },
              { title: "Impact", desc: "Our goal is to create tangible value for developers, engineers, and companies worldwide.", icon: "bi-lightning-charge" }
            ].map((value, i) => (
              <div className="col-md-4" key={value.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    padding: "48px 32px",
                    background: "#fff",
                    borderRadius: "32px",
                    border: "1.5px solid rgba(0, 112, 243, 0.15)",
                    boxShadow: "0 20px 40px rgba(0, 112, 243, 0.03)",
                    height: "100%"
                  }}
                >
                  <div style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, rgba(0, 112, 243, 0.1), rgba(0, 112, 243, 0.02))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "32px",
                    border: "1px solid rgba(0, 112, 243, 0.1)"
                  }}>
                    <i className={`bi ${value.icon}`} style={{ fontSize: "1.6rem", color: "var(--accent-primary)", filter: "drop-shadow(0 0 10px rgba(0, 112, 243, 0.3))" }}></i>
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "20px" }}>{value.title}</h3>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1.05rem" }}>{value.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}