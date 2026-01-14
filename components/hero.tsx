"use client";

import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    function handleDocClick(e: MouseEvent) {
      if (!cvRef.current) return;
      if (!cvRef.current.contains(e.target as Node)) {
        setShowCVOptions(false);
      }
    }

    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, []);

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
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-full h-full rounded-full bg-gradient-to-br from-primary/40 to-primary/10 flex items-center justify-center overflow-hidden"
            >
              <img
                src="/marco.png"
                alt=" Marco Abdo"
                loading="lazy"
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
          Crafting elegant, performant digital experiences with modern web
          technologies. Specializing in React, TypeScript, and creating
          interfaces that delight users.
        </motion.p>

        {/* butons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(191, 144, 0, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all"
          >
            View My Work
          </motion.button>

          {/* Download / View CV*/}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#bf9000" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCVOptions((s) => !s)}
              className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-medium hover:bg-primary/10 transition-all"
              aria-expanded={showCVOptions}
              aria-haspopup="menu"
            >
              CV
            </motion.button>

            {showCVOptions && (
              <div
                ref={cvRef}
                role="menu"
                className="absolute right-0 mt-2 w-44 bg-background/95 backdrop-blur-md border border-neutral-200 rounded-lg shadow-lg z-50"
              >
                <a
                  href="/Marco Abdo Gress-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm hover:bg-primary/5"
                  onClick={() => setShowCVOptions(false)}
                >
                  Open CV
                </a>

                <a
                  href="/Marco Abdo Gress-CV.pdf"
                  download
                  className="block px-4 py-2 text-sm hover:bg-primary/5"
                  onClick={() => setShowCVOptions(false)}
                >
                  Download CV
                </a>
              </div>
            )}
          </div>
        </motion.div>

        {/* down*/}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <ArrowDown className="w-6 h-6 mx-auto text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
