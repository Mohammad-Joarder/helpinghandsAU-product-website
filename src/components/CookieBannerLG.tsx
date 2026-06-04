"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "letsgo-cookie-consent";
const A = "#7C3AED";

export default function CookieBannerLG() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* private mode / blocked storage */
    }
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  if (!mounted) return null;

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };
  const decline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "declined");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "fixed", bottom: 24, left: 16, right: 16, maxWidth: 420, marginLeft: "auto", zIndex: 50 }}
          className="md:left-auto md:right-6"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(16px)",
            borderRadius: 20,
            padding: 20,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            border: "1px solid rgba(0,0,0,0.08)",
          }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 12, flexShrink: 0,
                background: "#7C3AED1A", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={A} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#111111", marginBottom: 4 }}>Cookie Disclosure</p>
                <p style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>
                  We use cookies for secure sessions, analytics, and AI-assisted fraud prevention.
                  Location data is only collected during active trips. See our{" "}
                  <a href="/letsgo/legal/cookies" style={{ color: A }}>Cookie Policy</a>.
                </p>
              </div>
              <button
                onClick={decline}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#BEBEBE", padding: 4, borderRadius: 6 }}
                aria-label="Dismiss"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={decline}
                style={{
                  flex: 1, background: "#F3F4F6", color: "#4A4F4A", border: "none", cursor: "pointer",
                  fontSize: 12, fontWeight: 500, padding: "10px 16px", borderRadius: 12,
                }}
              >
                Decline
              </button>
              <button
                onClick={accept}
                style={{
                  flex: 1, background: A, color: "#fff", border: "none", cursor: "pointer",
                  fontSize: 12, fontWeight: 500, padding: "10px 16px", borderRadius: 12,
                }}
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
