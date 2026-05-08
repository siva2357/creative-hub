"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const sidebarLinks = [

  { name: "Explore Ecosystem", href: "/dashboard/explore", icon: "bi-compass", badge: "New" },
  { name: "Overview", href: "/dashboard", icon: "bi-grid-1x2" },
  { name: "Talent Hub", href: "/dashboard/talent-hub", icon: "bi-briefcase", badge: "Live" },
  { name: "Course Hub", href: "/dashboard/course-hub", icon: "bi-book" },
  { name: "Meet Gen", href: "/dashboard/meet-gen", icon: "bi-camera-video" },
  { name: "Community Hub", href: "/dashboard/community-hub", icon: "bi-people" },
  { name: "Cloud Hub", href: "/dashboard/cloud-hub", icon: "bi-cloud-check" },
  { name: "Resume Builder", href: "/dashboard/resume-builder", icon: "bi-file-earmark-person" },
  { name: "Analytics", href: "/dashboard/analytics", icon: "bi-bar-chart" },
];

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Sidebar Container */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : (window.innerWidth < 992 ? -300 : 0)
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        style={{
          position: "fixed",
          top: "80px",
          left: 0,
          bottom: 0,
          width: "280px",
          background: "rgba(255, 255, 255, 1)",
          borderRight: "1px solid rgba(0,0,0,0.1)",
          padding: "32px 16px",
          zIndex: 1001,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          overflowY: "auto"
        }}
        className="dashboard-sidebar"
      >
        <div style={{ padding: "0 16px 24px 16px" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-secondary)", margin: 0 }}>
            Ecosystem Menu
          </p>
        </div>

        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                if (window.innerWidth < 992) {
                  setIsOpen(false);
                }
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                borderRadius: "12px",
                textDecoration: "none",
                color: isActive ? "var(--accent-primary)" : "var(--text-primary)",
                background: isActive ? "rgba(0,112,243,0.05)" : "transparent",
                transition: "all 0.2s ease",
                fontWeight: isActive ? 600 : 500,
                fontSize: "0.95rem"
              }}
              className="sidebar-link"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <i className={`bi ${link.icon}`} style={{ fontSize: "1.1rem" }}></i>
                <span>{link.name}</span>
              </div>
              {link.badge && (
                <span style={{
                  fontSize: "0.7rem",
                  background: "var(--accent-primary)",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "99px",
                  fontWeight: 700
                }}>
                  {link.badge}
                </span>
              )}
            </Link>
          );
        })}
      </motion.aside>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.3)",
              zIndex: 1000
            }}
            className="d-lg-none"
          />
        )}
      </AnimatePresence>
    </>
  );
}
