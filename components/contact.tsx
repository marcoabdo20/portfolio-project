"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

/* SVG Icons */
const Mail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="2" />
    <path d="M8 11v5" />
    <path d="M8 8v1" />
    <path d="M12 11v5" />
    <path d="M16 11v5" />
  </svg>
);

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a10 10 0 0 0-3 19.5c.5.1.7-.2.7-.5v-1.8c-3 .7-3.6-1.4-3.6-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6-.7 1.9-1.1-.8-.1-1.6-.4-1.6-1.9 0-.4.1-.8.4-1.1-.4-.1-1-.5 0-1 0 0 .9-.3 3 .8a10.5 10.5 0 0 1 5.5 0c2.1-1.1 3-.8 3-.8 1 .5.4.9.1 1 .3.3.4.6.4 1.1 0 1.5-.8 1.8-1.6 1.9.5.4 1.1 1.1 1.1 2.3v3.4c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
  </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 4a10.9 10.9 0 0 1-3.1.9A4.8 4.8 0 0 0 22.4 2a9.6 9.6 0 0 1-3.1 1.2A4.8 4.8 0 0 0 12 6.3 13.6 13.6 0 0 1 1.6 3 4.8 4.8 0 0 0 3 9.2 4.7 4.7 0 0 1 .9 8.8v.1a4.8 4.8 0 0 0 3.9 4.7 4.8 4.8 0 0 1-2.2.1 4.8 4.8 0 0 0 4.5 3.3A9.6 9.6 0 0 1 1 19.5 13.6 13.6 0 0 0 7.4 21c8.8 0 13.6-7.3 13.6-13.6V7.5A9.8 9.8 0 0 0 23 4z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // متغير client-only لتجنب Hydration mismatch
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data?.error || "Failed to send message");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/marcoabdo20", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/marco-abdo-901071226 ", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/marcooabdo", label: "Instagram" },
    { icon: Mail, href: "mailto:marcoabdo20@gmail.com", label: "Email" },
  ];

  if (!isClient) return null; // منع Hydration mismatch

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-foreground/70">
            Have a project in mind? Let&apos;s collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              required
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: status === "sending" ? 1 : 1.05 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.95 }}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                status === "sending" ? "bg-primary/60 cursor-not-allowed" : "bg-primary hover:shadow-lg hover:shadow-primary/50"
              } text-primary-foreground`}
            >
              {status === "sending" ? "Sending..." : status === "success" ? "Message Sent! ✓" : status === "error" ? "Send Failed" : "Send Message"}
            </motion.button>

            {status === "error" && errorMessage && <p className="text-sm text-red-500 mt-2 text-center">{errorMessage}</p>}
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-foreground/70 leading-relaxed">
                I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-foreground/50">FOLLOW ME</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.2, color: "#bf9000" }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 flex items-center justify-center rounded-lg border border-border hover:border-primary transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-foreground/50">
                📧 marcoabdo20@gmail.com
                <br />
                📍 Based in Egypt, Cairo
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
