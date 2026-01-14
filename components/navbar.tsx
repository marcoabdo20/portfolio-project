"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          MA
        </motion.div>

        <div className="hidden md:flex gap-8">
          {["About", "Projects", "Contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ color: "#bf9000" }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
            >
              {item}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contact")}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-primary/50 transition-all"
        >
          Get in Touch
        </motion.button>
      </div>
    </motion.nav>
  )
}
