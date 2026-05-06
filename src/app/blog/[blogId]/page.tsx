"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

const posts = [
  {
    id: "meet-gen-api",
    title: "Introducing the Meet Gen API",
    content: "The Meet Gen API represents a massive leap forward in integrated video communication. By exposing the underlying engine that powers our internal meeting platform, we are enabling developers to build high-quality, research-driven video experiences directly into their own workflows. The API features low-latency streaming, real-time noise cancellation, and seamless integration with Cloud Hub storage.",
    date: "May 1, 2026",
    category: "Technical",
    icon: "bi-cpu"
  },
  {
    id: "integrated-ecosystems",
    title: "The Power of Integrated Ecosystems",
    content: "The future of professional growth lies in connected tools. At Creative-Hub, we believe that data shouldn't be siloed. Our integrated ecosystem approach ensures that every project, every community interaction, and every learning step is shared across a unified data layer. This synergy accelerates personal development and operational efficiency in ways that fragmented tools simply cannot.",
    date: "April 28, 2026",
    category: "Philosophy",
    icon: "bi-diagram-3"
  },
  {
    id: "scaling-cloud-hub",
    title: "Scaling Cloud Hub for Global Users",
    content: "Infrastructure is the silent backbone of innovation. Scaling Cloud Hub to support millions of concurrent users required a complete rethink of distributed storage architectures. We've implemented a multi-region, zero-trust infrastructure that ensures your data is always available, always secure, and always fast, regardless of where you are in the world.",
    date: "April 20, 2026",
    category: "Infrastructure",
    icon: "bi-cloud-check"
  }
];

export default function BlogDetailPage() {
  const params = useParams();
  const blogId = params.blogId;
  const post = posts.find((p) => p.id === blogId) || posts[0];

  return (
    <div style={{ paddingTop: "120px" }}>
      {/* --- ARTICLE HERO --- */}
      <section style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
        <div className="container-custom">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Link href="/blog" style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent-primary)", fontWeight: 700, marginBottom: "32px", textDecoration: "none" }}>
                  <i className="bi bi-arrow-left"></i> Back to Insights
                </Link>
                
                <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
                  <span style={{ 
                    fontSize: "0.75rem", 
                    fontWeight: 800, 
                    letterSpacing: "0.4em", 
                    textTransform: "uppercase", 
                    color: "var(--accent-primary)",
                    background: "rgba(0, 112, 243, 0.05)",
                    padding: "6px 16px",
                    borderRadius: "99px",
                    border: "1px solid rgba(0, 112, 243, 0.1)"
                  }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>{post.date}</span>
                </div>

                <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", textAlign: "left", lineHeight: 1.1, marginBottom: "40px", fontWeight: 800 }}>
                  {post.title}
                </h1>
              </motion.div>
            </div>
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{
                  width: "100%",
                  height: "300px",
                  background: "#000",
                  borderRadius: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1.5px solid rgba(0, 112, 243, 0.4)",
                  position: "relative",
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
                      width: "120px",
                      height: "120px",
                      border: "2px solid var(--accent-primary)",
                      borderRadius: "50%",
                      zIndex: 10
                    }}
                  />
                ))}
                <i className={`bi ${post.icon}`} style={{ fontSize: "5rem", color: "var(--accent-primary)", filter: "drop-shadow(0 0 20px rgba(0, 112, 243, 0.4))", zIndex: 1 }}></i>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section style={{ paddingBottom: "120px", position: "relative" }}>
        <div className="container-custom" style={{ maxWidth: "900px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              padding: "64px",
              background: "#fff",
              borderRadius: "48px",
              border: "1.5px solid rgba(0, 112, 243, 0.1)",
              boxShadow: "0 40px 80px rgba(0, 112, 243, 0.05)",
              position: "relative"
            }}
          >
            {/* Background Accent Rings */}
            <div style={{ position: "absolute", top: "-100px", right: "-100px", opacity: 0.5, pointerEvents: "none" }}>
               <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{
                  width: "300px",
                  height: "300px",
                  border: "1px solid rgba(0, 112, 243, 0.1)",
                  borderRadius: "50%"
                }}
              />
            </div>

            <div style={{ fontSize: "1.25rem", lineHeight: 1.8, color: "var(--text-secondary)", fontWeight: 400 }}>
              <p style={{ marginBottom: "32px" }}>
                {post.content}
              </p>
              <p style={{ marginBottom: "32px" }}>
                As we continue to evolve the Creative-Hub ecosystem, our focus remains on providing researchers, developers, and professionals with a unified platform that accelerates growth through intelligent automation and deep infrastructure connectivity.
              </p>
              <blockquote style={{
                borderLeft: "4px solid var(--accent-primary)",
                paddingLeft: "32px",
                margin: "48px 0",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#000",
                fontStyle: "italic",
                lineHeight: 1.4
              }}>
                "Integration is not just about connecting tools; it's about amplifying human potential through seamless technology."
              </blockquote>
              <p>
                Stay tuned for more updates from the Command Center as we deploy new modules and refine our core intelligence engine.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
