"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, ArrowRight, MessageCircle, CheckCircle, Loader2 } from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    label: "General Enquiries",
    value: "admin@helpinghandsau.com",
    href: "mailto:admin@helpinghandsau.com",
  },
  {
    icon: MessageCircle,
    label: "Provider & Driver Support",
    value: "support@helpinghands.com",
    href: "mailto:support@helpinghands.com",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Queensland, Australia",
    href: null,
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const submitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current !== null) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    };
  }, []);

  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const subject = encodeURIComponent(
      `[HelpingHandsAu Website] ${form.enquiryType ? form.enquiryType.charAt(0).toUpperCase() + form.enquiryType.slice(1) + " Enquiry" : "New Enquiry"} — ${form.firstName} ${form.lastName}`
    );

    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      `Enquiry Type: ${form.enquiryType || "Not specified"}\n\n` +
      `Message:\n${form.message}\n\n` +
      `---\nSent from HelpingHandsAu website contact form.`
    );

    // Open the user's mail client pre-filled — works without a backend
    window.location.href = `mailto:admin@helpinghandsau.com?subject=${subject}&body=${body}`;

    if (submitTimeoutRef.current !== null) clearTimeout(submitTimeoutRef.current);
    submitTimeoutRef.current = setTimeout(() => {
      submitTimeoutRef.current = null;
      setStatus("sent");
      setForm({ firstName: "", lastName: "", email: "", enquiryType: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="section-padding bg-[#ECECE8]" aria-labelledby="contact-heading">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4A7C6B] mb-4 block">
              Get in Touch
            </span>
            <h2
              id="contact-heading"
              className="text-[clamp(28px,4vw,48px)] font-semibold tracking-tight text-[#111111] text-balance mb-6"
            >
              Ready to build something
              <br />
              extraordinary?
            </h2>
            <p className="text-base text-[#4A4F4A] leading-relaxed mb-8 font-light">
              Whether you&rsquo;re interested in partnering with our platforms, exploring provider
              or driver opportunities, or have compliance and media enquiries — we&rsquo;d love to hear from you.
            </p>

            <div className="space-y-4">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[rgba(0,0,0,0.06)] flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-subtle)]">
                    <item.icon size={16} className="text-[#4A4F4A]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#6B7280] mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-[#111111] hover:text-[#4A7C6B] transition-colors link-underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-[#111111]">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time note */}
            <div className="mt-8 flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-[rgba(0,0,0,0.06)] shadow-[var(--shadow-subtle)] max-w-sm">
              <div className="w-2 h-2 bg-[#4A7C6B] rounded-full animate-pulse-subtle flex-shrink-0" />
              <p className="text-xs text-[#4A4F4A]">
                We typically respond within <strong className="text-[#111111]">2 business days</strong>
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="bg-white rounded-[32px] p-8 border border-[rgba(0,0,0,0.06)] shadow-[var(--shadow-card)]"
          >
            {status === "sent" ? (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-10 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#4A7C6B]/10 flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#4A7C6B]" />
                </div>
                <h3 className="text-xl font-semibold text-[#111111]">Message sent!</h3>
                <p className="text-sm text-[#6B7280] max-w-xs leading-relaxed">
                  Your email client has opened with your message pre-filled and addressed to{" "}
                  <span className="font-medium text-[#111111]">admin@helpinghandsau.com</span>.
                  Just hit send — we&rsquo;ll get back to you within 2 business days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-[#4A7C6B] hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A7C6B] rounded"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-[#111111] mb-6">Send us a message</h3>
                <form
                  className="space-y-4"
                  onSubmit={handleSubmit}
                  aria-label="Contact form"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div suppressHydrationWarning>
                      <label htmlFor="firstName" className="block text-xs font-medium text-[#4A4F4A] mb-1.5">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full bg-[#F7F7F5] border border-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-[#BEBEBE] focus:outline-none focus:border-[#4A7C6B] focus:ring-1 focus:ring-[#4A7C6B] transition-all"
                        placeholder="Alex"
                      />
                    </div>
                    <div suppressHydrationWarning>
                      <label htmlFor="lastName" className="block text-xs font-medium text-[#4A4F4A] mb-1.5">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full bg-[#F7F7F5] border border-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-[#BEBEBE] focus:outline-none focus:border-[#4A7C6B] focus:ring-1 focus:ring-[#4A7C6B] transition-all"
                        placeholder="Johnson"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[#4A4F4A] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-[#F7F7F5] border border-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-[#BEBEBE] focus:outline-none focus:border-[#4A7C6B] focus:ring-1 focus:ring-[#4A7C6B] transition-all"
                      placeholder="alex@company.com.au"
                    />
                  </div>

                  <div>
                    <label htmlFor="enquiryType" className="block text-xs font-medium text-[#4A4F4A] mb-1.5">
                      Enquiry Type
                    </label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={form.enquiryType}
                      onChange={handleChange}
                      className="w-full bg-[#F7F7F5] border border-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-sm text-[#111111] focus:outline-none focus:border-[#4A7C6B] focus:ring-1 focus:ring-[#4A7C6B] transition-all appearance-none"
                    >
                      <option value="">Select enquiry type…</option>
                      <option value="partnership">Partnership Enquiry</option>
                      <option value="provider">Become a Provider</option>
                      <option value="driver">Become a Driver</option>
                      <option value="media">Media / Press</option>
                      <option value="legal">Legal &amp; Compliance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-[#4A4F4A] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full bg-[#F7F7F5] border border-[rgba(0,0,0,0.08)] rounded-xl px-4 py-3 text-sm text-[#111111] placeholder:text-[#BEBEBE] focus:outline-none focus:border-[#4A7C6B] focus:ring-1 focus:ring-[#4A7C6B] transition-all resize-none"
                      placeholder="Tell us about your enquiry…"
                    />
                  </div>

                  <p className="text-[10px] text-[#6B7280] leading-relaxed">
                    By submitting this form you consent to HelpingHandsAu processing your data in
                    accordance with our{" "}
                    <a href="/legal/privacy" className="text-[#4A7C6B] hover:underline">
                      Privacy Policy
                    </a>
                    . Your message will be sent directly to{" "}
                    <span className="font-medium text-[#4A4F4A]">admin@helpinghandsau.com</span>.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group w-full flex items-center justify-center gap-2 bg-[#111111] text-white py-4 rounded-xl text-sm font-medium hover:bg-[#2A2D2A] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" aria-hidden="true" />
                        Opening email…
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
