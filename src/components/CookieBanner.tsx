"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    let accepted: string | null = null;
    try {
      accepted = localStorage.getItem("cookie-consent");
    } catch {
      /* private mode / blocked storage */
    }
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted) return null;

  const accept = () => {
    try {
      localStorage.setItem("cookie-consent", "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  const decline = () => {
    try {
      localStorage.setItem("cookie-consent", "declined");
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
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-[420px] z-50"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div className="glass rounded-[20px] p-5 shadow-[var(--shadow-elevated)] border border-[rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#4A7C6B]/10 flex items-center justify-center flex-shrink-0">
                <Cookie size={16} className="text-[#4A7C6B]" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#111111] mb-1">Cookie Disclosure</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  We use cookies to improve your experience, analyse usage, and support AI-assisted
                  fraud prevention. By continuing, you agree to our{" "}
                  <a href="/legal/cookies" className="text-[#4A7C6B] hover:underline">Cookie Policy</a>.
                  Location data is only collected during active trips.
                </p>
              </div>
              <button
                onClick={decline}
                className="text-[#BEBEBE] hover:text-[#6B7280] transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D7A7A] rounded"
                aria-label="Dismiss cookie banner"
              >
                <X size={14} />
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={decline}
                className="flex-1 bg-[#ECECE8] text-[#4A4F4A] text-xs font-medium py-2.5 px-4 rounded-xl hover:bg-[#E0E0DC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D7A7A]"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="flex-1 bg-[#111111] text-white text-xs font-medium py-2.5 px-4 rounded-xl hover:bg-[#2A2D2A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
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
