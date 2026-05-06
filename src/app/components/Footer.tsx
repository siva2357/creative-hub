"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ padding: "80px 0 40px 0", background: "#000000", color: "#ffffff", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="container-custom">
        <div className="row g-5">
          <div className="col-lg-4">
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
              <img 
                src="https://res.cloudinary.com/dpp8aspqs/image/upload/v1772290558/AI_Logo_dxqrdz.svg" 
                alt="Creative-Hub Logo" 
                style={{ width: "60px", height: "60px", objectFit: "contain" }}
              />
              <span style={{ fontWeight: 800, fontSize: "1.8rem", letterSpacing: "-0.02em" }}>Creative-Hub</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: "1.7", maxWidth: "300px" }}>
              The most integrated ecosystem for professional growth and collaborative intelligence.
            </p>
          </div>
          <div className="col-lg-2 offset-lg-1">
            <h5 style={{ marginBottom: "24px", fontSize: "1rem", fontWeight: 600 }}>Platform</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><Link href="/products" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Products</Link></li>
              <li><Link href="/about" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>About</Link></li>
              <li><Link href="/purpose" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Purpose</Link></li>
              <li><Link href="/blog" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Blog</Link></li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h5 style={{ marginBottom: "24px", fontSize: "1rem", fontWeight: 600 }}>Ecosystem</h5>
            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><Link href="/products#meet-gen" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Meet Gen</Link></li>
              <li><Link href="/products#community-hub" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Community Hub</Link></li>
              <li><Link href="/products#talent-hub" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Talent Hub</Link></li>
              <li><Link href="/products#resume-hub" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Resume Hub</Link></li>
              <li><Link href="/products#cloud-hub" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Cloud Hub</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5 style={{ marginBottom: "24px", fontSize: "1rem", fontWeight: 600 }}>Connect</h5>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem" }}>
              Stay updated with our latest innovations.
            </p>
            <div style={{ marginTop: "24px", display: "flex", gap: "20px" }}>
              <i className="bi bi-twitter-x" style={{ fontSize: "1.3rem", cursor: "pointer", opacity: 0.6 }}></i>
              <i className="bi bi-linkedin" style={{ fontSize: "1.3rem", cursor: "pointer", opacity: 0.6 }}></i>
              <i className="bi bi-github" style={{ fontSize: "1.3rem", cursor: "pointer", opacity: 0.6 }}></i>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "80px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center", fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>
          &copy; {new Date().getFullYear()} Creative-Hub Ecosystem. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
