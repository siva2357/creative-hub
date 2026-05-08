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
      if (window.innerWidth >= 1200) {
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
    if (window.innerWidth < 1200) {
      setIsSidebarOpen(false);
    }
  }, [pathname]);

  // List of paths where Navbar and Footer should be hidden
  const hideLayoutPaths = ["/signin", "/signup", "/verify", "/confirmation", "/login"];
  const isAuthPage = hideLayoutPaths.includes(pathname);
  
  // Routes that should use the Dashboard/App layout (Sidebar + AuthNavbar)
  const appRoutes = [
    "/dashboard",
    "/profile",
    "/settings",
    "/service-requests",
    "/resume-builder",
    "/talent-hub",
    "/course-hub",
    "/meet-gen",
    "/community-hub",
    "/cloud-hub",
    "/explore",
    "/analytics"
  ];

  const isAppPage = appRoutes.some(route => pathname === route || pathname.startsWith(route + "/"));

  return (
    <>
      <BackgroundBlobs />
      {!isAuthPage && !isAppPage && <Navbar />}
      {isAppPage && <AuthNavbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />}
      <div style={{ display: "flex" }}>
        {isAppPage && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />}
        <main style={{ flexGrow: 1, width: "100%" }}>{children}</main>
      </div>
      {!isAuthPage && !isAppPage && <Footer />}
    </>
  );
}
