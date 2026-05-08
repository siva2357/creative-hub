"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundBlobs from "./BackgroundBlobs";
import AuthNavbar from "./AuthNavbar";
import Sidebar from "./Sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Responsive sidebar initialization
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar on route change ONLY on mobile
  useEffect(() => {
    if (window.innerWidth < 992) {
      setIsSidebarOpen(false);
    }
  }, [pathname]);

  // List of paths where Navbar and Footer should be hidden
  const hideLayoutPaths = ["/signin", "/signup", "/verify", "/confirmation", "/login"];
  const isAuthPage = hideLayoutPaths.includes(pathname);
  const isDashboard = pathname === "/dashboard" || pathname.startsWith("/dashboard/");

  return (
    <>
      <BackgroundBlobs />
      {!isAuthPage && !isDashboard && <Navbar />}
      {isDashboard && <AuthNavbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />}
      <div style={{ display: "flex" }}>
        {isDashboard && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
        <main style={{ flexGrow: 1, width: "100%" }}>{children}</main>
      </div>
      {!isAuthPage && !isDashboard && <Footer />}
    </>
  );
}
