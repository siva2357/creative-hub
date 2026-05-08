"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    name: "Talent Hub",
    tagline: "Bridging the Gap Between Talent & Opportunity",
    description: "Deep-data insights for recruiters while giving candidates a platform to showcase true creative potential.",
    image: "/talent_hub_preview_1778225449414.png",
    href: "/talent-hub",
    color: "#3b82f6"
  },
  {
    name: "Course Hub",
    tagline: "Learning Redefined for the Modern Creator",
    description: "Immersive learning where theory meets practice through HD content and project-based certifications.",
    image: "/course_hub_preview_1778225464509.png",
    href: "/course-hub",
    color: "#10b981"
  },
  {
    name: "Meet Gen",
    tagline: "Collaborative Meetings Without Borders",
    description: "Crystal-clear, low-latency video conferencing suite integrated with real-time collaboration tools.",
    image: "/meet_gen_preview_1778225481685.png",
    href: "/meet-gen",
    color: "#f43f5e"
  },
  {
    name: "Cloud Hub",
    tagline: "Your Infrastructure, Unified",
    description: "Centralized monitoring and asset management for your entire digital ecosystem.",
    image: "/cloud_hub_preview_1778225514083.png",
    href: "/cloud-hub",
    color: "#0070f3"
  },
  {
    name: "Resume Builder",
    tagline: "Craft Your Professional Story",
    description: "AI-powered resume building with real-time previews and premium, ATS-friendly templates.",
    image: "/resume_builder_preview_1778225532230.png",
    href: "/resume-builder",
    color: "#f59e0b"
  },
  {
    name: "Community Hub",
    tagline: "Where Creators Collaborate",
    description: "A vibrant social space to join specialized groups, share insights, and participate in events.",
    image: "/community_hub_preview_1778225549426.png",
    href: "/community-hub",
    color: "#fb7185"
  }
];

const articles = [
  { title: "Mastering Next.js 14", category: "Course Hub", date: "2 hours ago", author: "Sarah Chen" },
  { title: "Top 10 AI Recruitment Trends", category: "Talent Hub", date: "5 hours ago", author: "Mark Johnson" },
  { title: "Scaling Cloud Infra in 2026", category: "Cloud Hub", date: "1 day ago", author: "Alex Reed" }
];

export default function ExploreEcosystemPage() {
  return (
    <div className="dashboard-content-wrapper">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: "48px" }}
        >
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 800, marginBottom: "12px" }}>Explore Ecosystem</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", maxWidth: "600px" }}>
            The complete guide to Creative-Hub products, latest insights, and platform innovations.
          </p>
        </motion.div>

        <div className="row g-5" style={{ alignItems: "flex-start" }}>
          {/* Latest Articles Section */}
          <div className="col-lg-8">
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "32px" }}>Latest Blogs & Insights</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {articles.map((article) => (
                <motion.div 
                  key={article.title}
                  whileHover={{ x: 10 }}
                  style={{ 
                    padding: "32px", 
                    borderRadius: "24px", 
                    background: "rgba(255, 255, 255, 0.7)", 
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    cursor: "pointer"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", color: "var(--accent-primary)", padding: "4px 12px", borderRadius: "8px", background: "rgba(0,112,243,0.05)" }}>
                      {article.category}
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontWeight: 500 }}>{article.date}</span>
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "16px" }}>{article.title}</h3>
                  <p style={{ margin: 0, fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>By {article.author} • 5 min read</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Platform Updates / Sidebar Section */}
          <div className="col-lg-4">
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "32px" }}>Updates</h2>
            <div className="app-card" style={{ background: "linear-gradient(135deg, var(--accent-primary), #00d2ff)", color: "white", border: "none", padding: "28px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-15px", right: "-15px", width: "80px", height: "80px", background: "rgba(255,255,255,0.1)", borderRadius: "50%" }}></div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "16px", position: "relative", zIndex: 1 }}>Ecosystem v2.4</h3>
              
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "12px", position: "relative", zIndex: 1 }}>
                {[
                  "AI Resume Optimization Engine",
                  "HD Meeting Recording in Meet Gen",
                  "Course Hub Analytics Dashboard",
                  "Talent Hub Global Search"
                ].map((update, i) => (
                  <li key={i} style={{ fontSize: "0.85rem", display: "flex", alignItems: "flex-start", gap: "8px", opacity: 0.95 }}>
                    <i className="bi bi-patch-check-fill" style={{ marginTop: "2px" }}></i>
                    {update}
                  </li>
                ))}
              </ul>

              <button style={{ width: "100%", background: "white", color: "var(--accent-primary)", border: "none", padding: "12px", borderRadius: "10px", fontWeight: 800, fontSize: "0.85rem", position: "relative", zIndex: 1, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                View Full Changelog
              </button>
            </div>
          </div>
        </div>

        {/* Product Stories Section */}
        <section style={{ marginTop: "80px", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "48px" }}>Deep Dive: Our Products</h2>
          <div className="row g-5">
            {products.map((product, idx) => (
              <div key={product.name} className="col-12">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ 
                    display: "flex", 
                    flexDirection: idx % 2 === 0 ? "row" : "row-reverse", 
                    gap: "48px", 
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.5)",
                    padding: "40px",
                    borderRadius: "32px",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(12px)"
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "16px" }}>{product.name}</h3>
                    <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "24px" }}>
                      <strong>{product.tagline}</strong><br/>
                      {product.description}
                    </p>
                    <Link href={product.href} className="btn-primary" style={{ textDecoration: "none", padding: "12px 32px", borderRadius: "12px" }}>
                      Launch {product.name}
                    </Link>
                  </div>
                  <div style={{ flex: 1, height: "320px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                    <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
