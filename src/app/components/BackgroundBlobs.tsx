"use client";

import { motion } from "framer-motion";

export default function BackgroundBlobs() {
  return (
    <div style={{ 
      position: "fixed", 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      zIndex: -1, 
      overflow: "hidden", 
      pointerEvents: "none" 
    }}>
      {/* Top Left Blue Blob */}
      <motion.div
        animate={{ 
          x: [-50, 50, -50],
          y: [-30, 30, -30],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "-5%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(0, 112, 243, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />
      
      {/* Bottom Right Purple Blob */}
      <motion.div
        animate={{ 
          x: [50, -50, 50],
          y: [30, -30, 30],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(121, 40, 202, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      {/* Center Soft Accent Blob */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "40%",
          left: "30%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0, 255, 255, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}
