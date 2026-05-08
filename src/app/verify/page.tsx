"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function VerifyPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== "" && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call and redirect to confirmation
    router.push("/confirmation");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", position: "relative" }}>
      {/* Global BackgroundBlobs are handling the background now */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="auth-card"
        style={{ maxWidth: "550px" }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ width: "64px", height: "64px", background: "rgba(0, 112, 243, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", color: "var(--accent-primary)", fontSize: "2rem" }}>
            <i className="bi bi-shield-lock"></i>
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "12px" }}>Verify your email</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
            We've sent a 6-digit verification code to <strong>hello@creative-hub.com</strong>.
            Please enter it below to confirm your account.
          </p>
        </div>

        <form onSubmit={handleVerify}>
          <div style={{ display: "flex", gap: "clamp(8px, 2vw, 16px)", justifyContent: "center", marginBottom: "40px" }}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="otp-input"
                required
              />
            ))}
          </div>

          <button type="submit" className="pill-button" style={{ width: "100%", padding: "12px", fontSize: "0.95rem", borderRadius: "16px", marginBottom: "24px" }}>
            Verify Account
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
          Didn't receive the code? <button type="button" style={{ color: "var(--accent-primary)", fontWeight: 600, background: "none", border: "none", padding: 0, cursor: "pointer", textDecoration: "underline" }}>Resend code</button>
        </p>
        
        <div style={{ textAlign: "center", marginTop: "24px" }}>
           <Link href="/signup" style={{ fontSize: "0.9rem", color: "var(--text-secondary)", textDecoration: "underline" }}>
             <i className="bi bi-arrow-left"></i> Back to sign up
           </Link>
        </div>
      </motion.div>
    </div>
  );
}
