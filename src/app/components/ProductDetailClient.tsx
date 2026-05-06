"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  features: string[];
  imageAlt: string;
  color: string;
  accent: string;
}

export default function ProductDetailClient({ product }: { product: Product }) {
  return (
    <div style={{ paddingTop: "120px" }}>
      {/* --- HERO --- */}
      <section style={{ 
        position: "relative", 
        padding: "80px 0", 
        overflow: "hidden"
      }}>
        <div className="container-custom">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Link href="/products" style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "8px", 
                  color: "var(--accent-primary)", 
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  marginBottom: "32px",
                  textDecoration: "none"
                }}>
                  <i className="bi bi-arrow-left"></i> Back to Ecosystem
                </Link>
                <h1 className="section-title" style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)", textAlign: "left", lineHeight: 1.0, marginBottom: "24px", fontWeight: 800 }}>
                  {product.title}
                </h1>
                <p style={{ fontSize: "1.3rem", color: "var(--text-secondary)", marginBottom: "48px", maxWidth: "650px", lineHeight: 1.6 }}>
                  {product.subtitle}. {product.description}
                </p>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  <button className="pill-button" style={{ padding: "14px 40px" }}>Deploy Now</button>
                  <button className="pill-button" style={{ 
                    background: "transparent", 
                    border: "1.5px solid rgba(0, 112, 243, 0.2)", 
                    color: "var(--text-primary)",
                    padding: "14px 40px"
                  }}>
                    Documentation
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  background: "#000",
                  borderRadius: "48px",
                  boxShadow: "0 40px 80px rgba(0, 112, 243, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  border: "2px solid rgba(0, 112, 243, 0.3)",
                  overflow: "hidden"
                }}
              >
                 {/* Pulsing Rings OVER visual */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 2.5],
                      opacity: [0.5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1.3,
                      ease: "easeOut"
                    }}
                    style={{
                      position: "absolute",
                      width: "140px",
                      height: "140px",
                      border: "2px solid var(--accent-primary)",
                      borderRadius: "50%",
                      zIndex: 10
                    }}
                  />
                ))}
                 <i className="bi bi-cpu" style={{ fontSize: "6rem", color: "var(--accent-primary)", filter: "drop-shadow(0 0 20px rgba(0, 112, 243, 0.5))", zIndex: 1 }}></i>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEEP DIVE --- */}
      <section style={{ padding: "120px 0", position: "relative" }}>
        <div className="container-custom">
          <div className="row g-5">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "32px", letterSpacing: "-0.02em" }}>Operational Strategy.</h2>
                <div style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                  {product.fullDescription}
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "32px", letterSpacing: "-0.02em" }}>Core Capabilities.</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
                  {product.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      style={{
                        padding: "24px 32px",
                        background: "#fff",
                        borderRadius: "24px",
                        border: "1.5px solid rgba(0, 112, 243, 0.15)",
                        boxShadow: "0 10px 30px rgba(0, 112, 243, 0.03)",
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <div style={{ 
                        width: "48px", 
                        height: "48px", 
                        background: "linear-gradient(135deg, rgba(0, 112, 243, 0.1), rgba(0, 112, 243, 0.02))", 
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(0, 112, 243, 0.1)"
                      }}>
                        <i className="bi bi-check-lg" style={{ fontSize: "1.2rem", color: "var(--accent-primary)", filter: "drop-shadow(0 0 5px rgba(0, 112, 243, 0.3))" }}></i>
                      </div>
                      <span style={{ fontSize: "1.05rem", fontWeight: 600 }}>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTEGRATION --- */}
      <section style={{ padding: "100px 0", position: "relative" }}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "24px" }}>Perfectly Integrated.</h2>
            <p style={{ maxWidth: "700px", margin: "0 auto 60px auto", color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.7 }}>
              {product.title} works seamlessly with every other tool in the Creative-Hub suite, powered by a unified account and the Cloud Hub infrastructure.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "48px", opacity: 0.6, filter: "grayscale(100%)" }}>
              <i className="bi bi-cpu" style={{ fontSize: "2.5rem" }}></i>
              <i className="bi bi-diagram-3" style={{ fontSize: "2.5rem" }}></i>
              <i className="bi bi-cloud-check" style={{ fontSize: "2.5rem" }}></i>
              <i className="bi bi-shield-check" style={{ fontSize: "2.5rem" }}></i>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
