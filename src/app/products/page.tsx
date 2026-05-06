"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { detailedProducts } from "@/app/data/products";

export default function ProductsPage() {
  return (
    <div style={{ paddingTop: "120px" }}>
      {/* --- HERO SECTION --- */}
      <section style={{ position: "relative", overflow: "hidden", padding: "100px 0" }}>
        {/* Background Layer */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        </div>

        <div className="container-custom">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <span style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent-primary)",
                  marginBottom: "24px",
                  display: "block"
                }}>
                  The Suite
                </span>
                <h1 className="section-title" style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", textAlign: "left", lineHeight: 1.1 }}>
                  The Integrated<br />Ecosystem
                </h1>
                <p className="section-subtitle" style={{ textAlign: "left", marginTop: "32px", maxWidth: "100%" }}>
                  Explore the six interconnected pillars designed to accelerate your professional journey from discovery to deployment.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                  padding: "40px",
                  background: "rgba(255,255,255,0.4)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "32px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
                }}
              >
                {detailedProducts.map((p, i) => (
                  <Link key={p.id} href={`/products/${p.id}`} style={{ textDecoration: "none" }}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      style={{
                        padding: "24px 10px",
                        textAlign: "center",
                        background: "#fff",
                        borderRadius: "24px",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.02)",
                        border: "1.5px solid rgba(0,0,0,0.12)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px",
                        cursor: "pointer"
                      }}
                    >
                      <div style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        border: "1.5px solid rgba(0,0,0,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <i className={`bi bi-${i === 0 ? 'camera-video' : i === 1 ? 'people' : i === 2 ? 'briefcase' : i === 3 ? 'file-earmark-text' : i === 4 ? 'mortarboard' : 'cloud'}`}
                          style={{ fontSize: "1.2rem", color: "#000" }}></i>
                      </div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "0.02em" }}>
                        {p.title.split(' ')[0]}
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT LIST --- */}
      {detailedProducts.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          style={{
            padding: "100px 0",
            background: index % 2 === 0 ? "var(--bg-primary)" : "var(--bg-secondary)"
          }}
        >
          <div className="container-custom">
            <div className={`row align-items-center ${product.align === "right" ? "flex-row-reverse" : ""}`}>
              <div className="col-lg-6">
                <motion.div
                  initial={{ opacity: 0, x: product.align === "left" ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--accent-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                  }}>
                    {product.subtitle}
                  </span>
                  <h2 style={{ fontSize: "3rem", marginTop: "16px", marginBottom: "24px" }}>{product.title}</h2>
                  <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "40px", lineHeight: "1.8" }}>
                    {product.description}
                  </p>

                  <div className="row g-4">
                    {product.features.map((feature, fIndex) => (
                      <div className="col-md-6" key={fIndex}>
                        <div style={{ display: "flex", gap: "12px" }}>
                          <i className="bi bi-check2-circle" style={{ color: "var(--accent-primary)", fontSize: "1.2rem" }}></i>
                          <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: "48px" }}>
                    <Link href={`/products/${product.id}`} className="pill-button">Explore {product.title} in Detail</Link>
                  </div>
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
                    height: "500px",
                    background: product.color,
                    borderRadius: "var(--radius-card-large)",
                    marginTop: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.05)"
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <i className="bi bi-layers" style={{ fontSize: "5rem", opacity: 0.1 }}></i>
                    <p style={{ marginTop: "20px", fontWeight: 500, opacity: 0.5 }}>{product.imageAlt}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* --- CALL TO ACTION --- */}
      <section style={{ padding: "120px 0", textAlign: "center", background: "var(--text-primary)", color: "white" }}>
        <div className="container-custom">
          <h2 className="section-title" style={{ color: "white" }}>Ready to join the ecosystem?</h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.6)", marginInline: "auto" }}>
            Experience the power of integration with a single Creative-Hub account.
          </p>
          <button className="pill-button" style={{ background: "white", color: "black" }}>Create Your Account</button>
        </div>
      </section>
    </div>
  );
}
