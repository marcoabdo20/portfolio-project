"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Sparkles } from "lucide-react";

export default function Hero() {
  const [showCVOptions, setShowCVOptions] = useState(false);

  const cvRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  /* -------------------------------------------------------
     Framer Motion Variants
  ------------------------------------------------------- */

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
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const nameContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
      },
    },
  };

  /* -------------------------------------------------------
     Close CV menu when clicking outside
  ------------------------------------------------------- */

  const handleDocClick = useCallback((e: MouseEvent) => {
    if (!cvRef.current) return;

    if (!cvRef.current.contains(e.target as Node)) {
      setShowCVOptions(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleDocClick);

    return () => {
      document.removeEventListener("mousedown", handleDocClick);
    };
  }, [handleDocClick]);

  /* -------------------------------------------------------
     Scroll to Projects
  ------------------------------------------------------- */

  const scrollToProjects = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  /* -------------------------------------------------------
     Cursor Spotlight
  ------------------------------------------------------- */

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = hero.getBoundingClientRect();

      hero.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);

      hero.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    };

    hero.addEventListener("pointermove", handlePointerMove);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  /* -------------------------------------------------------
     Reduced Motion
  ------------------------------------------------------- */

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        pt-24
        px-6
        overflow-hidden
        spotlight
      "
    >
      {/* ---------------------------------------------------
          Decorative Background Glow
      --------------------------------------------------- */}

      <div
        aria-hidden="true"
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-primary/5
          blur-3xl
          pointer-events-none
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          top-20
          left-10
          w-2
          h-2
          rounded-full
          bg-primary
          shadow-[0_0_20px_rgba(191,144,0,0.8)]
          animate-pulse
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-32
          right-16
          w-1.5
          h-1.5
          rounded-full
          bg-primary
          shadow-[0_0_20px_rgba(191,144,0,0.8)]
          animate-pulse
        "
      />

      {/* ---------------------------------------------------
          Main Content
      --------------------------------------------------- */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          z-10
          text-center
          max-w-5xl
          mx-auto
          w-full
        "
      >
        {/* -------------------------------------------------
            Small Introduction Badge
        ------------------------------------------------- */}

        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div
            className="
              glass-panel
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              text-sm
              text-foreground/70
              border
              border-primary/20
              shadow-lg
            "
          >
            <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />

            <span>Available for new opportunities</span>

            <span
              className="
                w-2
                h-2
                rounded-full
                bg-primary
                animate-pulse
              "
              aria-hidden="true"
            />
          </div>
        </motion.div>

        {/* -------------------------------------------------
            Profile Image
        ------------------------------------------------- */}

        <motion.div variants={itemVariants} className="mb-8">
          <div
            className="
              relative
              w-[180px]
              h-[180px]
              md:w-[220px]
              md:h-[220px]
              mx-auto
            "
          >
            {/* Rotating border */}

            <div
              className="
                absolute
                -inset-2
                rounded-full
                border
                border-primary/20
              "
            />

            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      rotate: 360,
                    }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                -inset-2
                rounded-full
                border
                border-transparent
                border-t-primary
                border-r-primary/30
              "
            />

            {/* Image glow */}

            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, -20, 0],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                relative
                w-full
                h-full
                rounded-full
                overflow-hidden
              
                p-1
               
              "
            >
              {/* <div
                className="
                  w-full
                  h-full
                  rounded-full
                  overflow-hidden
                  
                  border
                  border-primary/20
                "
              > */}
              <img
                src="/marco.png"
                alt="Marco Abdo profile picture"
                loading="eager"
                decoding="async"
                sizes="(max-width: 768px) 180px, 220px"
                className="
                    w-full
                    h-full
                    object-cover
                    scale-105
                  "
              />
              {/* </div> */}
            </motion.div>

            {/* Floating status */}

            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                -bottom-2
                -right-4
                glass-panel
                rounded-full
                px-3
                py-1.5
                flex
                items-center
                gap-2
                text-xs
                text-foreground/80
                shadow-xl
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-primary
                  animate-pulse
                "
              />

              <span>Developer</span>
            </motion.div>
          </div>
        </motion.div>

        {/* -------------------------------------------------
            Name
        ------------------------------------------------- */}

        <motion.h1
          variants={itemVariants}
          className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-bold
            tracking-tight
            mb-5
          "
          aria-label="Marco Abdo"
        >
          <motion.span
            variants={nameContainerVariants}
            className="
              inline-block
              text-primary
            "
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

        {/* -------------------------------------------------
            Job Title
        ------------------------------------------------- */}

        <motion.div variants={itemVariants} className="mb-7">
          <p
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              font-light
              leading-relaxed
            "
          >
            <span className="text-primary">Front-End Developer</span>

            <span className="text-foreground/40 mx-2">|</span>

            <span className="text-shimmer font-medium">React.js</span>

            <span className="text-foreground/40 mx-2">|</span>

            <span className="text-primary">Mobile Developer</span>

            <span className="text-foreground/40 mx-2">|</span>

            <span className="text-shimmer font-medium">React Native</span>
          </p>
        </motion.div>

        {/* -------------------------------------------------
            Divider
        ------------------------------------------------- */}

        <motion.div
          variants={itemVariants}
          className="
            divider-luxury
            max-w-2xl
            mx-auto
            mb-7
          "
        >
          <span className="text-primary text-xs">◆</span>
        </motion.div>

        {/* -------------------------------------------------
            Description
        ------------------------------------------------- */}

        <motion.p
          variants={itemVariants}
          className="
            text-base
            sm:text-lg
            text-foreground/65
            max-w-2xl
            mx-auto
            mb-10
            leading-relaxed
          "
        >
          Engineering responsive, performance-optimized web and mobile solutions
          with <span className="text-foreground font-medium">React.js</span> and{" "}
          <span className="text-foreground font-medium">React Native</span>,
          delivering seamless cross-platform experiences.
        </motion.p>

        {/* -------------------------------------------------
            Buttons
        ------------------------------------------------- */}

        <motion.div
          variants={itemVariants}
          className="
            flex
            gap-4
            justify-center
            flex-wrap
          "
        >
          {/* View Work */}

          <motion.button
            type="button"
            onClick={scrollToProjects}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(191,144,0,0.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              px-8
              py-3.5
              bg-primary
              text-primary-foreground
              rounded-lg
              font-semibold
              transition-all
              shadow-lg
              shadow-primary/10
            "
          >
            View My Work
          </motion.button>

          {/* CV */}

          <div ref={cvRef} className="relative">
            <motion.button
              type="button"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => setShowCVOptions((s) => !s)}
              className="
                px-8
                py-3.5
                border
                border-primary/40
                text-primary
                rounded-lg
                font-semibold
                glass-panel
                hover:bg-primary/10
                hover:border-primary
                transition-all
              "
              aria-expanded={showCVOptions}
              aria-haspopup="menu"
              aria-controls="cv-menu"
            >
              View CV
            </motion.button>

            {/* CV Dropdown */}

            {showCVOptions && (
              <motion.div
                id="cv-menu"
                role="menu"
                initial={{
                  opacity: 0,
                  y: -8,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                className="
                  absolute
                  right-0
                  mt-3
                  w-52
                  glass-panel
                  rounded-xl
                  p-2
                  shadow-2xl
                  z-50
                  border
                  border-primary/20
                "
              >
                <a
                  href="/Marco{CV}.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowCVOptions(false)}
                  role="menuitem"
                  className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-lg
                    text-sm
                    hover:bg-primary/10
                    hover:text-primary
                    transition-all
                  "
                >
                  <ExternalLink className="w-4 h-4" />
                  Open CV
                </a>

                <a
                  href="/Marco{CV}.pdf"
                  download
                  onClick={() => setShowCVOptions(false)}
                  role="menuitem"
                  className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-lg
                    text-sm
                    hover:bg-primary/10
                    hover:text-primary
                    transition-all
                  "
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* -------------------------------------------------
            Scroll Indicator
        ------------------------------------------------- */}

        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-col items-center gap-3"
        >
          <span
            className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-foreground/30
          "
          >
            Scroll to explore
          </span>

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, 10, 0],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <ArrowDown
              aria-label="Scroll down"
              className="
                w-6
                h-6
                text-primary/60
              "
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
