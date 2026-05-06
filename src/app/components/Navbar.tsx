"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Purpose", href: "/purpose" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className="glass-nav"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        width: "95%",
        maxWidth: "1400px",
        padding: "16px 48px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      {/* LEFT: Brand */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "16px", justifySelf: "start", textDecoration: "none" }}>
        <img 
          src="https://res.cloudinary.com/dpp8aspqs/image/upload/v1772290558/AI_Logo_dxqrdz.svg" 
          alt="Creative-Hub Logo" 
          style={{ width: "48px", height: "48px", objectFit: "contain" }}
        />
        <span style={{ 
          fontWeight: 800, 
          fontSize: "1.6rem", 
          letterSpacing: "-0.03em",
          color: "var(--text-primary)"
        }}>
          Creative-Hub
        </span>
      </Link>

      {/* CENTER: Links */}
      <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              style={{
                fontSize: "0.95rem",
                fontWeight: 500,
                color: isActive ? "var(--accent-primary)" : "var(--text-secondary)",
                transition: "var(--transition-smooth)",
                position: "relative",
                padding: "6px 0",
                textDecoration: "none"
              }}
              onMouseOver={(e) => !isActive && (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseOut={(e) => !isActive && (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.name}
              {isActive && (
                <motion.div 
                  layoutId="active-nav"
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--accent-primary)",
                    borderRadius: "2px"
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* RIGHT: Action */}
      <div style={{ justifySelf: "end", display: "flex", gap: "20px", alignItems: "center" }}>
        <Link 
          href="/login" 
          style={{ 
            fontSize: "0.9rem", 
            fontWeight: 500, 
            color: "var(--text-secondary)",
            transition: "var(--transition-smooth)",
            textDecoration: "none"
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
          onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
        >
          Sign In
        </Link>
        <Link 
          href="/signup" 
          className="pill-button" 
          style={{ 
            padding: "10px 28px", 
            fontSize: "0.9rem",
            textDecoration: "none" 
          }}
        >
          Sign Up
        </Link>
      </div>
    </motion.nav>
  );
}
