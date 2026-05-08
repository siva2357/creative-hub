"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "120px" }}>
      {/* --- HERO SECTION --- */}
      <section style={{ position: "relative", overflow: "hidden", padding: "clamp(40px, 8vw, 120px) 0" }}>
        {/* Background Layer */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        </div>

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
                  Our Mission
                </span>
                <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", textAlign: "left", lineHeight: 1.0, marginBottom: "32px", fontWeight: 800 }}>
                  Architecting the <br />Future of Work.
                </h1>
                <p className="section-subtitle" style={{ textAlign: "left", fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "600px", opacity: 0.8 }}>
                  Creative-Hub is more than a platform—it's a research-driven ecosystem engineered to unify communication, talent discovery, and education into a single, intelligent infrastructure.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ position: "relative" }}
              >
                <div style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "40px",
                  overflow: "hidden",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(0,0,0,0.05)"
                }}>
                  <img 
                    src="/fluid-bg-1.png" 
                    alt="Abstract Mission" 
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISION & IMPACT --- */}
      <section style={{ padding: "100px 0", background: "#000", color: "#fff" }}>
        <div className="container-custom">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "32px" }}>The Integrated Vision.</h2>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.6)", marginBottom: "32px" }}>
                  Our journey began with a simple observation: the digital tools we use for meetings, hiring, and learning are fundamentally disconnected. Data is siloed, intelligence is fragmented, and growth is stifled.
                </p>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.6)" }}>
                  We set out to rebuild this foundation from the ground up. By centralizing storage in Cloud Hub and powering interaction through the Meet Gen engine, we've created a world where your resume informs your job search, and your learning path accelerates your career—all in real-time.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{
                  width: "100%",
                  height: "450px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 100%)",
                  borderRadius: "48px",
                  border: "1.5px solid rgba(0, 112, 243, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {/* Pulsing Rings - Expanded */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 3.5],
                      opacity: [0.6, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      delay: i * 1.2,
                      ease: "easeOut"
                    }}
                    style={{
                      position: "absolute",
                      width: "180px",
                      height: "180px",
                      border: "2px solid var(--accent-primary)",
                      borderRadius: "50%",
                      zIndex: 0
                    }}
                  />
                ))}

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    width: "300px",
                    height: "300px",
                    border: "1px dashed rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "radial-gradient(circle, rgba(0, 112, 243, 0.05) 0%, transparent 70%)",
                    zIndex: 1
                  }}
                >
                  <i className="bi bi-cpu" style={{ fontSize: "4rem", color: "var(--accent-primary)", filter: "drop-shadow(0 0 20px rgba(0, 112, 243, 0.4))" }}></i>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE PRINCIPLES --- */}
      <section style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
        <div className="container-custom" style={{ position: "relative" }}>
          <div className="text-center" style={{ marginBottom: "80px", position: "relative", zIndex: 1 }}>
            <h2 className="section-title">The Foundation.</h2>
            <p className="section-subtitle" style={{ marginInline: "auto" }}>
              Four pillars that guide every decision we make and every product we ship.
            </p>
          </div>

          <div className="row g-4" style={{ position: "relative", zIndex: 1 }}>
            {[
              { title: "Unified Intelligence", desc: "Every product communicates through a shared data layer, creating a cohesive experience.", icon: "bi-node-plus" },
              { title: "Fluid Design", desc: "Minimalist, research-grade interfaces that prioritize clarity and user performance.", icon: "bi-layers" },
              { title: "Uncompromising Security", desc: "Enterprise-grade protection powered by the Cloud Hub infrastructure.", icon: "bi-shield-lock" },
              { title: "Human Growth", desc: "Our ultimate metric is the professional advancement of our global community.", icon: "bi-person-up" }
            ].map((principle, i) => (
              <div className="col-lg-3 col-md-6" key={principle.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  style={{
                    padding: "48px 32px",
                    background: "#fff",
                    borderRadius: "32px",
                    border: "1.5px solid rgba(0, 112, 243, 0.2)",
                    boxShadow: "0 20px 40px rgba(0, 112, 243, 0.05)",
                    height: "100%",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
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
                    border: "1px solid rgba(0, 112, 243, 0.1)",
                    boxShadow: "0 10px 20px rgba(0, 112, 243, 0.05)"
                  }}>
                    <i className={`bi ${principle.icon}`} style={{ fontSize: "1.6rem", color: "var(--accent-primary)", filter: "drop-shadow(0 0 10px rgba(0, 112, 243, 0.3))" }}></i>
                  </div>
                  <h4 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "16px" }}>{principle.title}</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>{principle.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Background Signal Rings for Foundation - Now OVER cards with high zIndex */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 100, pointerEvents: "none" }}>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 3],
                  opacity: [0.15, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 2.5,
                  ease: "easeOut"
                }}
                style={{
                  position: "absolute",
                  width: "400px",
                  height: "400px",
                  border: "1px solid var(--accent-primary)",
                  borderRadius: "50%",
                  marginLeft: "-200px",
                  marginTop: "-200px"
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section style={{ padding: "100px 0", background: "linear-gradient(to bottom, #fff, #fafafa)", textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>Want to learn more?</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <button className="pill-button" style={{ background: "black", color: "white" }}>View Our Blog</button>
            <button className="pill-button">Contact the Team</button>
          </div>
        </div>
      </section>
    </div>
  );
}