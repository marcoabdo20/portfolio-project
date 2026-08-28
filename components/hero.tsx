"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Eye, Sparkles } from "lucide-react";

export default function Hero() {
  const [showCVOptions, setShowCVOptions] = useState(false);

  const cvRef = useRef<HTMLDivElement | null>(null);

  /* =====================================================
     ANIMATIONS
  ===================================================== */

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const nameContainerVariants = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  /* =====================================================
     OUTSIDE CLICK
  ===================================================== */

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

  /* =====================================================
     SCROLL
  ===================================================== */

  const scrollToProjects = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const scrollToAbout = useCallback(() => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  /* =====================================================
     REDUCED MOTION
  ===================================================== */

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        px-6
        pb-20
        pt-32
        md:pt-36
      "
    >
      {/* =================================================
          BACKGROUND EFFECTS
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Main Glow */}

        <div
          className="
            absolute
            left-1/2
            top-[25%]
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/[0.055]
            blur-[130px]
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            left-[-150px]
            top-[40%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-primary/[0.025]
            blur-[100px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            right-[-150px]
            top-[20%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-primary/[0.025]
            blur-[110px]
          "
        />

        {/* Decorative Lines */}

        <div
          className="
            absolute
            left-[10%]
            top-[30%]
            hidden
            h-px
            w-24
            bg-gradient-to-r
            from-transparent
            via-primary/20
            to-transparent
            lg:block
          "
        />

        <div
          className="
            absolute
            right-[10%]
            top-[30%]
            hidden
            h-px
            w-24
            bg-gradient-to-r
            from-transparent
            via-primary/20
            to-transparent
            lg:block
          "
        />
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-5xl
          flex-col
          items-center
          text-center
        "
      >
        {/* =================================================
            AVAILABLE BADGE
        ================================================= */}

        <motion.div variants={itemVariants}>
          <div
            className="
              mb-7
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-primary/15
              bg-primary/[0.04]
              px-4
              py-2
              backdrop-blur-sm
            "
          >
            <span
              className="
                relative
                flex
                h-2
                w-2
              "
            >
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-primary/50
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-primary
                "
              />
            </span>

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-primary
              "
            >
              Available for opportunities
            </span>
          </div>
        </motion.div>

        {/* =================================================
            PROFILE IMAGE
        ================================================= */}

        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, -10, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Outer Glow */}

            <div
              className="
                absolute
                inset-[-15px]
                rounded-full
                bg-primary/[0.08]
                blur-2xl
              "
            />

            {/* Border */}

            <div
              className="
                relative
                h-40
                w-40
                rounded-full
                border
                border-primary/30
                bg-gradient-to-br
                from-primary/20
                via-primary/5
                to-transparent
                p-1
                shadow-[0_0_50px_rgba(191,144,0,0.12)]
                md:h-48
                md:w-48
              "
            >
              <div
                className="
                  h-full
                  w-full
                  overflow-hidden
                  rounded-full
                  border
                  border-primary/10
                  bg-card
                "
              >
                <img
                  src="/marco.png"
                  alt="Marco Abdo profile picture"
                  loading="eager"
                  decoding="async"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>
            </div>

            {/* Sparkle */}
          </motion.div>
        </motion.div>

        {/* =================================================
            NAME
        ================================================= */}

        <motion.h1
          variants={itemVariants}
          className="
            mb-5
            text-5xl
            font-bold
            tracking-tight
            md:text-7xl
            lg:text-8xl
          "
          aria-label="Marco Abdo"
        >
          <motion.span
            variants={nameContainerVariants}
            className="inline-block"
            aria-hidden="true"
          >
            {Array.from("Marco Abdo").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`
                    inline-block
                    leading-none
                    ${char === " " ? "mx-1 w-2 md:mx-2 md:w-3" : ""}
                  `}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>

          <span className="sr-only">Marco Abdo</span>
        </motion.h1>

        {/* =================================================
            JOB TITLE
        ================================================= */}

        <motion.div variants={itemVariants} className="mb-6">
          <h2
            className="
              text-xl
              font-light
              leading-relaxed
              text-primary
              sm:text-2xl
              md:text-3xl
            "
          >
            Front-End Developer
          </h2>

          <div
            className="
              mt-3
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
              text-sm
              text-foreground/40
              md:text-base
            "
          >
            <span>React.js</span>

            <span className="text-primary/40">•</span>

            <span>React Native</span>

            <span className="text-primary/40">•</span>

            <span>Next.js</span>
          </div>
        </motion.div>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <motion.p
          variants={itemVariants}
          className="
            mx-auto
            mb-10
            max-w-2xl
            text-base
            leading-8
            text-foreground/50
            md:text-lg
          "
        >
          Engineering responsive, performance-optimized web and mobile solutions
          with modern technologies, delivering seamless cross-platform
          experiences.
        </motion.p>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <motion.div
          variants={itemVariants}
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
          "
        >
          {/* View Work */}

          <motion.button
            type="button"
            onClick={scrollToProjects}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 35px rgba(191,144,0,0.25)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              group
              flex
              items-center
              gap-2
              rounded-xl
              bg-primary
              px-7
              py-3.5
              text-sm
              font-semibold
              text-primary-foreground
              transition-all
              duration-300
            "
          >
            View My Work
            <ArrowDown
              className="
                h-4
                w-4
                rotate-[-90deg]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </motion.button>

          {/* CV */}

          <div ref={cvRef} className="relative">
            <motion.button
              type="button"
              onClick={() => setShowCVOptions((current) => !current)}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-primary/30
                bg-card/30
                px-7
                py-3.5
                text-sm
                font-semibold
                text-primary
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-primary/60
                hover:bg-primary/5
              "
              aria-expanded={showCVOptions}
              aria-haspopup="menu"
              aria-controls="cv-menu"
            >
              <Download className="h-4 w-4" />
              My CV
            </motion.button>

            {/* CV MENU */}

            {showCVOptions && (
              <motion.div
                id="cv-menu"
                role="menu"
                initial={{
                  opacity: 0,
                  y: 8,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  absolute
                  left-1/2
                  top-full
                  z-50
                  mt-3
                  w-48
                  -translate-x-1/2
                  overflow-hidden
                  rounded-xl
                  border
                  border-primary/15
                  bg-background/95
                  p-1.5
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                {/* Open */}

                <a
                  href="/Marco{CV}.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowCVOptions(false)}
                  role="menuitem"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    px-3
                    py-3
                    text-sm
                    text-foreground/60
                    transition-all
                    hover:bg-primary/10
                    hover:text-primary
                  "
                >
                  <Eye
                    className="
                      h-4
                      w-4
                    "
                  />

                  <span>View CV</span>
                </a>

                {/* Download */}

                <a
                  href="/Marco{CV}.pdf"
                  download
                  onClick={() => setShowCVOptions(false)}
                  role="menuitem"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    px-3
                    py-3
                    text-sm
                    text-foreground/60
                    transition-all
                    hover:bg-primary/10
                    hover:text-primary
                  "
                >
                  <Download
                    className="
                      h-4
                      w-4
                    "
                  />

                  <span>Download CV</span>
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        <motion.div
          variants={itemVariants}
          className="
            mt-14
            flex
            flex-col
            items-center
            gap-4
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-foreground/25
            "
          >
            Specialized In
          </span>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-2
            "
          >
            {[
              "React.js",
              "React Native",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-primary/10
                  bg-card/20
                  px-3
                  py-1.5
                  text-[10px]
                  text-foreground/35
                  backdrop-blur-sm
                  transition-colors
                  hover:border-primary/25
                  hover:text-primary
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            SCROLL DOWN
        ================================================= */}

        <motion.button
          type="button"
          onClick={scrollToAbout}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, 8, 0],
                }
          }
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mt-16
            flex
            flex-col
            items-center
            gap-3
            text-foreground/25
            transition-colors
            hover:text-primary
          "
          aria-label="Scroll to About section"
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
            "
          >
            Scroll to explore
          </span>

          <div
            className="
              flex
              h-9
              w-6
              items-center
              justify-center
              rounded-full
              border
              border-primary/20
            "
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}
