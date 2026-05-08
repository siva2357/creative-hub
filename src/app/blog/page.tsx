"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    id: "meet-gen-api",
    title: "Introducing the Meet Gen API",
    excerpt: "Learn how you can integrate high-quality video meetings directly into your own applications.",
    date: "May 1, 2026",
    category: "Technical",
    icon: "bi-cpu"
  },
  {
    id: "integrated-ecosystems",
    title: "The Power of Integrated Ecosystems",
    excerpt: "Why the future of professional growth lies in connected tools and shared data layer insights.",
    date: "April 28, 2026",
    category: "Philosophy",
    icon: "bi-diagram-3"
  },
  {
    id: "scaling-cloud-hub",
    title: "Scaling Cloud Hub for Global Users",
    excerpt: "A deep dive into the infrastructure that powers Creative-Hub's massive storage needs.",
    date: "April 20, 2026",
    category: "Infrastructure",
    icon: "bi-cloud-check"
  },
  {
    id: "talent-discovery-ai",
    title: "AI in Talent Discovery",
    excerpt: "How we're using neural networks to match candidates with the perfect opportunities.",
    date: "April 15, 2026",
    category: "AI Research",
    icon: "bi-robot"
  },
  {
    id: "future-of-education",
    title: "The Future of Education",
    excerpt: "Building tools that personalize learning paths through real-time feedback loops.",
    date: "April 10, 2026",
    category: "Education",
    icon: "bi-book"
  },
  {
    id: "security-first-culture",
    title: "A Security-First Culture",
    excerpt: "How we protect user data across the entire Creative-Hub ecosystem with zero-trust.",
    date: "April 5, 2026",
    category: "Security",
    icon: "bi-shield-check"
  }
];

export default function BlogPage() {
  return (
    <div style={{ paddingTop: "120px" }}>
      {/* --- HERO SECTION --- */}
      <section style={{ padding: "40px 0 100px", position: "relative", overflow: "hidden" }}>
        <div className="container-custom">
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
              Insights
            </span>
            <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", textAlign: "left", lineHeight: 1.0, marginBottom: "32px", fontWeight: 800 }}>
              Updates from the <br />Command Center.
            </h1>
            <p className="section-subtitle" style={{ textAlign: "left", fontSize: "1.15rem", lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "700px", opacity: 0.8 }}>
              Exploring the intersection of AI, infrastructure, and human potential through the lens of the Creative-Hub ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section style={{ paddingBottom: "120px", position: "relative", overflow: "hidden" }}>
        <div className="container-custom" style={{ position: "relative" }}>
          {/* Pulsing Rings OVER the grid */}
          <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 100, pointerEvents: "none" }}>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 4],
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
                  width: "500px",
                  height: "500px",
                  border: "1px solid var(--accent-primary)",
                  borderRadius: "50%",
                  marginLeft: "-250px",
                  marginTop: "-250px"
                }}
              />
            ))}
          </div>

          <div className="row g-4" style={{ position: "relative", zIndex: 1 }}>
            {posts.map((post, i) => (
              <div className="col-lg-6 col-md-12" key={post.id}>
                <Link href={`/blog/${post.id}`} style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10, borderColor: "rgba(0, 112, 243, 0.6)", boxShadow: "0 20px 40px rgba(0, 112, 243, 0.1)" }}
                    style={{
                      padding: "32px 24px",
                      background: "#fff",
                      borderRadius: "32px",
                      border: "2px solid rgba(0, 112, 243, 0.25)",
                      boxShadow: "0 20px 40px rgba(0, 112, 243, 0.03)",
                      height: "100%",
                      transition: "all 0.3s ease",
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <div style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "16px",
                      background: "linear-gradient(135deg, rgba(0, 112, 243, 0.1), rgba(0, 112, 243, 0.02))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      border: "1px solid rgba(0, 112, 243, 0.1)"
                    }}>
                      <i className={`bi ${post.icon}`} style={{ fontSize: "1.4rem", color: "var(--accent-primary)", filter: "drop-shadow(0 0 10px rgba(0, 112, 243, 0.3))" }}></i>
                    </div>

                    <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", color: "var(--accent-primary)", letterSpacing: "0.1em" }}>{post.category}</span>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(0,0,0,0.1)" }}></div>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{post.date}</span>
                    </div>

                    <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px", lineHeight: 1.3 }}>{post.title}</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>{post.excerpt}</p>

                    <div style={{ marginTop: "auto", fontWeight: 700, fontSize: "0.9rem", color: "var(--accent-primary)", display: "flex", alignItems: "center", gap: "8px" }}>
                      Read Analysis <i className="bi bi-arrow-right"></i>
                    </div>
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}