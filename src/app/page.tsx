"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const products = [
  {
    title: "Meet Gen",
    description: "The dual-purpose meeting engine. Direct URL meetings or Developer API integration for your own apps.",
    tags: ["Meeting Engine", "Developer API"],
    color: "#e6f4ea"
  },
  {
    title: "Community Hub",
    description: "A professional community hub for developers and engineers to share ideas and creative content.",
    tags: ["Community", "Networking"],
    color: "#f1f3f4"
  },
  {
    title: "Talent Hub",
    description: "The future of recruitment. A modern job portal integrated with Meet Gen for 1:1 video interviews.",
    tags: ["Jobs", "Interviews"],
    color: "#e8f0fe"
  },
  {
    title: "Resume Hub",
    description: "AI-powered Resume Builder and ATS Checker to help you land your dream job with ease.",
    tags: ["AI", "Career Tools"],
    color: "#fef7e0"
  },
  {
    title: "Course Platform",
    description: "Educational excellence with AI coding assistants, pattern analysis, and integrated live classes.",
    tags: ["Education", "AI Assistant"],
    color: "#fce8e6"
  },
  {
    title: "Cloud Hub",
    description: "The internal storage backbone powering the entire ecosystem. Securely host resumes, assignments, and more.",
    tags: ["Infrastructure", "Storage"],
    color: "#f3e8fd"
  }
];

export default function LandingPage() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="main-page-wrapper" style={{ paddingTop: "120px" }}>
      {/* --- HERO SECTION --- */}
      <section
        className="hero-section"
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          padding: "80px 0"
        }}
      >
        {/* Background Layers */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        </div>

        {/* --- HERO CONTENT --- */}
        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div style={{ marginBottom: "32px" }}>
              <span style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--accent-primary)",
                background: "rgba(0, 112, 243, 0.05)",
                padding: "6px 20px",
                borderRadius: "99px",
                border: "1px solid rgba(0, 112, 243, 0.1)"
              }}>
                Creative-Hub Ecosystem
              </span>
            </div>

            <h1 className="section-title" style={{
              fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
              marginTop: "24px",
              letterSpacing: "-0.04em",
              fontWeight: 800,
              lineHeight: 1.0
            }}>
              One Ecosystem.<br />
              <span style={{
                background: "linear-gradient(90deg, #000, #444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Infinite Growth.
              </span>
            </h1>

            <p className="section-subtitle" style={{
              marginInline: "auto",
              marginTop: "40px",
              fontSize: "1.2rem",
              maxWidth: "680px",
              opacity: 0.8,
              lineHeight: 1.6
            }}>
              Connecting people, projects, and potential through a suite of integrated, AI-driven platforms.
            </p>

            <div className="hero-buttons d-flex flex-md-row flex-column gap-3 justify-content-center align-items-center" style={{ marginTop: "64px" }}>
              <Link href="/products" className="pill-button" style={{ padding: "18px 48px", background: "#000", color: "#fff" }}>
                Explore Products
              </Link>
              <Link href="/about" className="pill-button-secondary" style={{ padding: "18px 48px", border: "1px solid rgba(0,0,0,0.1)" }}>
                Learn Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)", padding: "120px 0" }}>
        <div className="container-custom">
          <div style={{ marginBottom: "64px" }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "16px" }}>The Pillars</h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "500px" }}>
              Discover our integrated tools designed to elevate every aspect of your professional journey.
            </p>
          </div>

          <div className="row g-4 product-grid-row">
            {products.map((product, index) => (
              <div className="col-lg-4 col-md-6" key={product.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="product-card"
                  style={{ background: product.color }}
                >
                  <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
                    {product.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        padding: "4px 12px",
                        background: "rgba(0,0,0,0.05)",
                        borderRadius: "99px",
                        textTransform: "uppercase"
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: "1.75rem", marginBottom: "16px" }}>{product.title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1rem", marginBottom: "32px" }}>
                    {product.description}
                  </p>
                  <Link href={`/products#${product.title.toLowerCase().replace(" ", "-")}`} style={{
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    Learn More <i className="bi bi-arrow-right"></i>
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INFRASTRUCTURE SECTION --- */}
      <section className="container-custom section-padding" style={{ padding: "120px 0" }}>
        <div className="row align-items-center g-5 infrastructure-row">
          <div className="col-12 col-xl-6 infrastructure-text-col text-center text-xl-start d-flex flex-column align-items-center align-items-xl-start">
            <h2 className="section-title">Powered by Cloud Hub</h2>
            <p className="section-subtitle">
              Every tool in our ecosystem is seamlessly connected via Cloud Hub. Your resumes, your assignments, and your meeting recordings stay exactly where you need them.
            </p>
            <div className="infrastructure-btn-wrapper d-flex justify-content-center justify-content-xl-start w-100">
              <Link href="/purpose" className="pill-button">The Infrastructure Story</Link>
            </div>
          </div>
          <div className="col-12 col-xl-6 infrastructure-visual-col d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="infrastructure-visual-container"
              style={{
                width: "100%",
                height: "500px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#000",
                borderRadius: "32px",
                overflow: "hidden"
              }}
            >
              {/* Circular Animation Rings */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.6
                  }}
                  style={{
                    position: "absolute",
                    width: `calc((var(--ring-scale, 1) * ${(i + 1) * 180}) * 1px)`,
                    height: `calc((var(--ring-scale, 1) * ${(i + 1) * 180}) * 1px)`,
                    border: "2px solid var(--accent-primary)",
                    boxShadow: "0 0 25px rgba(0, 112, 243, 0.5)",
                    borderRadius: "50%",
                  }}
                />
              ))}

              {/* Dark Center Overlay */}
              <div className="dark-overlay" style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
                zIndex: 1
              }} />

              <motion.img
                src="/cloud.png"
                alt="Cloud Hub Infrastructure"
                animate={{
                  y: [0, -15, 0],
                  filter: ["drop-shadow(0 15px 30px rgba(0, 112, 243, 0.3))", "drop-shadow(0 30px 60px rgba(0, 112, 243, 0.5))", "drop-shadow(0 15px 30px rgba(0, 112, 243, 0.3))"]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: "55%",
                  height: "auto",
                  objectFit: "contain",
                  zIndex: 2
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* --- CALL TO ACTION --- */}
      <section className="cta-section" style={{ padding: "120px 0", textAlign: "center", background: "var(--text-primary)", color: "white" }}>
        <div className="container-custom">
          <h2 className="section-title" style={{ color: "white" }}>Ready to join the ecosystem?</h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.6)", marginInline: "auto" }}>
            Experience the power of integration with a single Creative-Hub account.
          </p>
          <button className="pill-button" style={{ background: "white", color: "black" }}>Create Your Account</button>
        </div>
      </section>

      <style jsx global>{`
  /* =========================
      GLOBAL FIXES
  ========================== */

  .main-page-wrapper {
    overflow-x: hidden;
  }

  .product-card {
    padding: 40px;
    border-radius: 32px;
    height: 100%;
    transition: all 0.3s ease;
  }

  /* =========================
      STACKED & CENTERED (Up to 1199px)
  ========================== */

  @media (max-width: 1199px) {
    .container-custom {
      padding-left: 32px !important;
      padding-right: 32px !important;
    }

    .hero-section {
      padding: 80px 0 60px !important;
    }

    .hero-section h1 {
      font-size: 3rem !important;
    }

    .hero-buttons {
      width: 100% !important;
      max-width: 320px !important;
      margin-inline: auto !important;
      display: flex !important;
      flex-direction: column !important;
    }

    .hero-buttons a {
      width: 100% !important;
      padding: 16px 20px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .product-grid-row > div {
      width: 100% !important;
    }

    .infrastructure-row {
      row-gap: 56px !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
    }

    .infrastructure-text-col {
      padding: 0 10px !important;
      margin-bottom: 20px !important;
      width: 100% !important;
      max-width: 800px !important;
    }

    .infrastructure-visual-col {
      width: 100% !important;
      display: flex !important;
      justify-content: center !important;
    }

    .infrastructure-visual-container {
      width: 100% !important;
      max-width: 640px !important;
      height: 400px !important;
      --ring-scale: 0.65;
      margin-inline: auto !important;
    }

    .dark-overlay {
      width: 240px !important;
      height: 240px !important;
    }

    .infrastructure-visual-container img {
      width: 70% !important;
    }

    .section-title {
      font-size: 2.4rem !important;
      line-height: 1.2 !important;
      text-align: center !important;
      width: 100% !important;
    }

    .section-subtitle {
      font-size: 1.15rem !important;
      line-height: 1.7 !important;
      text-align: center !important;
      max-width: 640px !important;
      margin-inline: auto !important;
    }
  }

  /* =========================
      SMALL MOBILE (480px)
  ========================== */

  @media (max-width: 480px) {
    .container-custom {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }

    .hero-section h1 {
      font-size: 2rem !important;
    }

    .section-title {
      font-size: 1.8rem !important;
    }

    .infrastructure-visual-container {
      height: 280px !important;
      --ring-scale: 0.4;
    }

    .dark-overlay {
      width: 180px !important;
      height: 180px !important;
    }
  }
`}</style>

    </div>
  );
}
