"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/marcoabdo20",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/marco-abdo-901071226",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/marcooabdo",
      label: "Instagram",
    },
    {
      icon: Mail,
      href: "mailto:marcoabdo20@gmail.com?subject=Portfolio Contact",
      label: "Email",
    },
  ];

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const animationTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.7 };

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="
        relative
        overflow-hidden
        border-t
        border-primary/10
        px-6
        pb-8
        pt-20
      "
    >
      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[350px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/[0.035]
            blur-[120px]
          "
        />

        {/* Left glow */}

        <div
          className="
            absolute
            bottom-0
            left-0
            h-64
            w-64
            rounded-full
            bg-primary/[0.025]
            blur-[100px]
          "
        />

        {/* Right glow */}

        <div
          className="
            absolute
            right-0
            top-1/2
            h-64
            w-64
            rounded-full
            bg-primary/[0.02]
            blur-[100px]
          "
        />
      </div>

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =================================================
            TOP CTA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={animationTransition}
          viewport={{
            once: true,
          }}
          className="
            mb-16
            text-center
          "
        >
          {/* Small label */}

          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-10 bg-primary/30" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-primary
              "
            >
              Let's Connect
            </span>

            <span className="h-px w-10 bg-primary/30" />
          </div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              md:text-4xl
            "
          >
            Let's Create Something{" "}
            <span className="text-gradient-gold">
              Amazing
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-foreground/40
            "
          >
            Have an idea or a project in mind?
            Let's turn it into a great digital
            experience.
          </p>
        </motion.div>

        {/* =================================================
            MAIN FOOTER GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            border-y
            border-primary/10
            py-10
            md:grid-cols-3
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={animationTransition}
            viewport={{
              once: true,
            }}
          >
            {/* Logo */}

            <button
              type="button"
              onClick={scrollToTop}
              className="
                group
                mb-5
                flex
                items-center
                gap-3
              "
              aria-label="Go to top"
            >
              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-primary/20
                  bg-primary/5
                  text-sm
                  font-bold
                  text-primary
                  transition-all
                  duration-300
                  group-hover:border-primary/40
                  group-hover:bg-primary/10
                "
              >
                MA
              </span>

              <span
                className="
                  text-lg
                  font-bold
                  text-foreground
                "
              >
                Marco Abdo
              </span>
            </button>

            <p
              className="
                max-w-xs
                text-sm
                leading-7
                text-foreground/40
              "
            >
              Front-End Developer crafting elegant
              and high-performance digital experiences
              for web and mobile.
            </p>

            {/* Availability */}

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-primary
                  shadow-[0_0_10px_rgba(191,144,0,0.6)]
                "
              />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-foreground/30
                "
              >
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ...animationTransition,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3
              className="
                mb-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              Navigation
            </h3>

            <nav
              aria-label="Footer navigation"
              className="flex flex-col gap-3"
            >
              {[
                {
                  label: "Home",
                  id: "hero",
                },
                {
                  label: "About",
                  id: "about",
                },
                {
                  label: "Projects",
                  id: "projects",
                },
                {
                  label: "Contact",
                  id: "contact",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    scrollToSection(item.id)
                  }
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-sm
                    text-foreground/40
                    transition-all
                    duration-300
                    hover:text-primary
                  "
                >
                  <span
                    className="
                      h-px
                      w-0
                      bg-primary
                      transition-all
                      duration-300
                      group-hover:w-4
                    "
                  />

                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* =================================================
              SOCIAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ...animationTransition,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3
              className="
                mb-5
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-primary
              "
            >
              Follow Me
            </h3>

            <p
              className="
                mb-5
                text-sm
                leading-6
                text-foreground/40
              "
            >
              Let's connect and stay in touch.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={
                      social.label === "Email"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.label === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="
                      group
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-primary/10
                      bg-card/30
                      text-foreground/40
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:border-primary/30
                      hover:bg-primary/10
                      hover:text-primary
                      hover:shadow-[0_0_20px_rgba(191,144,0,0.1)]
                    "
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            ...animationTransition,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            pt-8
            md:flex-row
          "
        >
          {/* Copyright */}

          <p
            className="
              text-center
              text-xs
              text-foreground/30
              md:text-left
            "
          >
            © {currentYear}{" "}
            <span className="text-foreground/50">
              Marco Abdo
            </span>
            . All rights reserved.
          </p>

          {/* Built with */}

          <p
            className="
              text-xs
              text-foreground/20
            "
          >
            Built with{" "}
            <span className="text-primary/60">
              React.js
            </span>{" "}
            &{" "}
            <span className="text-primary/60">
              Next.js
            </span>
          </p>

          {/* Back to top */}

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-primary/10
              bg-card/30
              text-foreground/40
              transition-all
              duration-300
              hover:border-primary/30
              hover:bg-primary/10
              hover:text-primary
            "
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}