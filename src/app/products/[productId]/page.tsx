"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { detailedProducts } from "@/app/data/products";

export default function ProductDetails() {
  const params = useParams();
  const productId = params.productId as string;
  const product = detailedProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div style={{ paddingTop: "150px", textAlign: "center" }} className="container-custom">
        <h1>Product not found</h1>
        <Link href="/products" className="pill-button" style={{ marginTop: "20px" }}>Back to Ecosystem</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "100px" }}>
      {/* --- HERO --- */}
      <section style={{ 
        position: "relative", 
        padding: "100px 0", 
        background: `linear-gradient(135deg, ${product.color} 0%, #ffffff 100%)`,
        overflow: "hidden"
      }}>
        <div className="container-custom">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link href="/products" style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "8px", 
                  color: "var(--text-secondary)", 
                  fontSize: "0.9rem",
                  marginBottom: "32px",
                  textDecoration: "none"
                }}>
                  <i className="bi bi-arrow-left"></i> Back to Ecosystem
                </Link>
                <h1 style={{ fontSize: "clamp(3.5rem, 8vw, 5rem)", fontWeight: 800, lineHeight: 1, marginBottom: "24px" }}>
                  {product.title}
                </h1>
                <p style={{ fontSize: "1.5rem", color: "var(--text-secondary)", marginBottom: "40px", maxWidth: "600px", lineHeight: "1.4" }}>
                  {product.subtitle}
                </p>
                <div style={{ display: "flex", gap: "16px" }}>
                  <button className="pill-button" style={{ background: "black", color: "white" }}>Get Started with {product.title}</button>
                  <button className="pill-button" style={{ background: "transparent", border: "1px solid rgba(0,0,0,0.1)", color: "black" }}>Watch Demo</button>
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
                  height: "400px",
                  background: "#fff",
                  borderRadius: "40px",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}
              >
                 <i className="bi bi-layers-half" style={{ fontSize: "6rem", opacity: 0.1 }}></i>
                 <div style={{ 
                   position: "absolute", 
                   bottom: "30px", 
                   left: "30px", 
                   right: "30px", 
                   padding: "20px", 
                   background: "rgba(0,0,0,0.02)", 
                   borderRadius: "20px",
                   textAlign: "center"
                 }}>
                   <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{product.imageAlt}</span>
                 </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEEP DIVE --- */}
      <section style={{ padding: "120px 0" }}>
        <div className="container-custom">
          <div className="row g-5">
            <div className="col-lg-6">
              <h2 style={{ fontSize: "2.5rem", marginBottom: "32px" }}>Overview</h2>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                {product.fullDescription}
              </p>
            </div>
            <div className="col-lg-6">
              <h2 style={{ fontSize: "2.5rem", marginBottom: "32px" }}>Core Capabilities</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
                {product.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      padding: "24px",
                      background: "white",
                      borderRadius: "24px",
                      border: "1px solid rgba(0,0,0,0.05)",
                      display: "flex",
                      gap: "20px",
                      alignItems: "center"
                    }}
                  >
                    <div style={{ 
                      width: "48px", 
                      height: "48px", 
                      background: product.color, 
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: product.accent
                    }}>
                      <i className="bi bi-check-lg" style={{ fontSize: "1.2rem" }}></i>
                    </div>
                    <span style={{ fontSize: "1.1rem", fontWeight: 500 }}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTEGRATION SECTION --- */}
      <section style={{ padding: "100px 0", background: "#fafafa" }}>
        <div className="container-custom text-center">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "24px" }}>Perfectly Integrated</h2>
          <p style={{ maxWidth: "700px", margin: "0 auto 60px auto", color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            {product.title} works seamlessly with every other tool in the Creative-Hub suite, powered by a unified account and the Cloud Hub infrastructure.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "40px", opacity: 0.5 }}>
            <i className="bi bi-google" style={{ fontSize: "2rem" }}></i>
            <i className="bi bi-github" style={{ fontSize: "2rem" }}></i>
            <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
            <i className="bi bi-stripe" style={{ fontSize: "2rem" }}></i>
          </div>
        </div>
      </section>
    </div>
  );
}