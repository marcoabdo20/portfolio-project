"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const nameContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  // CV popover state and outside-click handler
  const [showCVOptions, setShowCVOptions] = useState<boolean>(false);
  const cvRef = useRef<HTMLDivElement | null>(null);

  const handleDocClick = useCallback((e: MouseEvent) => {
    if (!cvRef.current) return;
    if (!cvRef.current.contains(e.target as Node)) {
      setShowCVOptions(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, [handleDocClick]);

  const scrollToProjects = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl"
      >
        {/* my img*/}
        <motion.div variants={itemVariants} className="mb-4">
          <div className="w-42 h-42 mx-auto mb-4 relative">
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-full h-full rounded-full bg-gradient-to-br from-primary/40 to-primary/10 flex items-center justify-center overflow-hidden will-change-transform"
            >
              <img
                src="/marco.png"
                alt="Marco Abdo profile picture"
                role="img"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 200px, 300px"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* My name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
          aria-label="Marco Abdo"
        >
          <motion.span
            variants={nameContainerVariants}
            className="inline-block"
            aria-hidden="true"
          >
            {Array.from("Marco Abdo").map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className={
                  "inline-block leading-none " +
                  (char === " " ? "mx-1 w-2" : "")
                }
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>

          <span className="sr-only">Marco Abdo</span>
        </motion.h1>

        {/* Job Title */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-primary font-light mb-6"
        >
          Front-End Developer{" "}
          <span className="text-white" aria-label="React.js">
            React.js
          </span>{" "}
          | Mobile Developer{" "}
          <span className="text-white" aria-label="React Native">
            React Native
          </span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Engineering responsive, performance-optimized web and mobile solutions with React.js and React Native, delivering seamless cross-platform experiences.
        </motion.p>

        {/* butons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            type="button"
            onClick={scrollToProjects}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(191, 144, 0, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all"
            aria-label="View my projects"
          >
            View My Work
          </motion.button>

          {/* Download / View CV*/}
          <div className="relative">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05, borderColor: "#bf9000" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCVOptions((s) => !s)}
              className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-medium hover:bg-primary/10 transition-all"
              aria-expanded={showCVOptions}
              aria-haspopup="menu"
              aria-controls="cv-menu"
            >
              CV
            </motion.button>

            {showCVOptions && (
              <div
                id="cv-menu"
                ref={cvRef}
                role="menu"
                className="absolute right-0 mt-2 w-44 bg-background/95 backdrop-blur-md border border-neutral-200 rounded-lg shadow-lg z-50"
              >
                <a
                  href="/Marco{CV}.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm hover:bg-primary/5"
                  onClick={() => setShowCVOptions(false)}
                  role="menuitem"
                >
                  Open CV
                </a>

                <a
                  href="/Marco{CV}.pdf"
                  download
                  className="block px-4 py-2 text-sm hover:bg-primary/5"
                  onClick={() => setShowCVOptions(false)}
                  role="menuitem"
                >
                  Download CV
                </a>
              </div>
            )}
          </div>
        </motion.div>

        {/* down*/}
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <ArrowDown aria-label="Scroll down" className="w-6 h-6 mx-auto text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}