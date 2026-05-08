"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundBlobs from "./BackgroundBlobs";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // List of paths where Navbar and Footer should be hidden
  const hideLayoutPaths = ["/signin", "/signup", "/verify", "/confirmation", "/login"];
  const isAuthPage = hideLayoutPaths.includes(pathname);

  return (
    <>
      <BackgroundBlobs />
      {!isAuthPage && <Navbar />}
      <main>{children}</main>
      {!isAuthPage && <Footer />}
    </>
  );
}
