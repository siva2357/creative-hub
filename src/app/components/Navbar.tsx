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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    if (setIsMenuOpen) setIsMenuOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  return (
    <>
      {/* --- DESKTOP NAVBAR (FLOATING PILL) --- */}
      {!isMobileView && (
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
            border: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          {/* LEFT: Brand */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "16px", justifySelf: "start", textDecoration: "none" }}>
            <img
              src="/logo.png"
              alt="Creative-Hub Logo"
              style={{ width: "auto", height: "70px", objectFit: "contain" }}
            />
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
                textDecoration: "none"
              }}
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
      )}

      {/* --- MOBILE & TABLET NAVBAR (FULL WIDTH HEADER) --- */}
      {isMobileView && (
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            borderBottom: scrolled ? "1.5px solid var(--accent-primary)" : "1px solid rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            zIndex: 1000,
            transition: "all 0.3s ease"
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/logo.png"
              alt="Creative-Hub Logo"
              style={{ width: "auto", height: "55px", objectFit: "contain" }}
            />
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ 
              width: "48px", 
              height: "48px", 
              background: "rgba(0,112,243,0.05)", 
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-primary)",
              fontSize: "1.5rem",
              border: "1px solid rgba(0,112,243,0.1)"
            }}
          >
            <i className={`bi bi-${isMenuOpen ? 'x' : 'list'}`}></i>
          </button>
        </motion.nav>
      )}

      {/* MOBILE MENU OVERLAY */}
      {isMobileView && isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: "fixed",
            top: "90px",
            left: "12px",
            right: "12px",
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(30px)",
            borderRadius: "24px",
            padding: "32px",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            border: "1.5px solid var(--accent-primary)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
          }}
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              style={{ 
                fontSize: "0.95rem", 
                fontWeight: 600, 
                color: pathname === link.href ? "var(--accent-primary)" : "var(--text-primary)",
                textDecoration: "none"
              }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ height: "1px", background: "rgba(0,0,0,0.05)", margin: "8px 0" }} />
          <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            <Link 
              href="/login" 
              style={{ 
                flex: 1, 
                textAlign: "center", 
                padding: "10px 20px", 
                borderRadius: "12px", 
                border: "1.5px solid rgba(0,0,0,0.1)", 
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none"
              }}
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="pill-button" 
              style={{ 
                flex: 1, 
                textAlign: "center", 
                padding: "10px 20px", 
                fontSize: "0.9rem",
                textDecoration: "none"
              }}
            >
              Sign Up
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
