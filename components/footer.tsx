"use client"

import { useCallback } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/marcoabdo20", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/marco-abdo-901071226", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/marcooabdo", label: "Instagram" },
    { icon: Mail, href: "mailto:marco@example.com?subject=Portfolio Contact", label: "Email" },
  ]

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <footer role="contentinfo" aria-label="Site footer" className="border-t border-border/50 py-12 px-6 will-change-transform">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4">Marco Abdo</h3>
            <p className="text-foreground/60 text-sm">
              Front-End Developer crafting elegant digital experiences with modern web technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60" aria-label="Quick navigation">
              <li>
                <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("hero") }} className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects") }} className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about") }} className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact") }} className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-border/50 hover:border-primary hover:text-primary transition-colors"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/50"
        >
          <p>© {currentYear} Marco Abdo. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}