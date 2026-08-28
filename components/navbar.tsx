"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsMobileMenuOpen(false);
  }, []);

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.nav
        role="navigation"
        aria-label="Main navigation"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled ? "bg-background/70 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        {/* Gold bottom line */}

        <div
          className={`absolute bottom-0 left-0 h-px w-full transition-opacity duration-500 ${
            isScrolled
              ? "bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-100"
              : "opacity-0"
          }`}
        />

        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          {/* ================= LOGO ================= */}

          <motion.button
            type="button"
            onClick={() => scrollToSection("hero")}
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    scale: 1.05,
                  }
            }
            whileTap={
              prefersReducedMotion
                ? {}
                : {
                    scale: 0.95,
                  }
            }
            className="group relative flex items-center"
            aria-label="Go to top"
          >
            {/* Glow */}

            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Logo */}

            <span className="text-2xl font-bold tracking-tight text-primary">
              MA
            </span>

            {/* Small line */}

            <span className="ml-2 h-5 w-px bg-primary/30" />

            <span className="ml-2 hidden text-[10px] uppercase tracking-[0.25em] text-foreground/40 sm:block">
              Portfolio
            </span>
          </motion.button>

          {/* ================= DESKTOP MENU ================= */}

          <div className="hidden items-center gap-9 md:flex">
            {menuItems.map((item) => (
              <motion.button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: -2,
                      }
                }
                className="group relative py-2 text-sm font-medium text-foreground/60 transition-colors duration-300 hover:text-primary"
              >
                {item.label}

                {/* Underline */}

                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          {/* ================= DESKTOP CTA ================= */}

          <motion.button
            type="button"
            onClick={() => scrollToSection("contact")}
            whileHover={
              prefersReducedMotion
                ? {}
                : {
                    y: -2,
                    scale: 1.02,
                  }
            }
            whileTap={
              prefersReducedMotion
                ? {}
                : {
                    scale: 0.97,
                  }
            }
            className="group relative hidden overflow-hidden rounded-lg border border-primary/40 bg-primary/[0.04] px-5 py-2.5 text-sm font-medium text-primary backdrop-blur-sm transition-all duration-500 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_25px_var(--gold-soft)] md:block"
          >
            <span className="relative z-10">Get in Touch</span>

            {/* Hover shine */}

            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-700 group-hover:translate-x-full"
            />
          </motion.button>

          {/* ================= MOBILE BUTTON ================= */}

          <motion.button
            type="button"
            whileTap={
              prefersReducedMotion
                ? {}
                : {
                    scale: 0.9,
                  }
            }
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.03] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? {
                        rotate: 45,
                        y: 6,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                className="block h-px w-5 bg-primary"
              />

              <motion.span
                animate={
                  isMobileMenuOpen
                    ? {
                        opacity: 0,
                      }
                    : {
                        opacity: 1,
                      }
                }
                className="block h-px w-5 bg-primary"
              />

              <motion.span
                animate={
                  isMobileMenuOpen
                    ? {
                        rotate: -45,
                        y: -6,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                className="block h-px w-5 bg-primary"
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md md:hidden"
            />

            {/* Mobile Panel */}

            <motion.div
              id="mobile-menu"
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={
                prefersReducedMotion
                  ? {
                      duration: 0,
                    }
                  : {
                      type: "spring",
                      damping: 26,
                      stiffness: 220,
                    }
              }
              className="fixed right-0 top-0 z-50 h-full w-[290px] border-l border-primary/10 bg-background/95 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="flex h-full flex-col p-6">
                {/* Mobile Header */}

                <div className="mb-12 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => scrollToSection("hero")}
                    className="text-xl font-bold text-primary"
                  >
                    MA
                  </button>

                  <motion.button
                    type="button"
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 text-foreground/70 transition-colors hover:border-primary/30 hover:text-primary"
                    aria-label="Close menu"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Menu */}

                <div className="flex flex-col gap-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      type="button"
                      key={item.id}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={
                        prefersReducedMotion
                          ? {
                              duration: 0,
                            }
                          : {
                              delay: index * 0.08,
                            }
                      }
                      whileHover={{
                        x: 5,
                      }}
                      onClick={() => scrollToSection(item.id)}
                      className="group flex items-center justify-between rounded-lg px-4 py-4 text-left text-lg font-medium text-foreground/60 transition-all duration-300 hover:bg-primary/[0.05] hover:text-primary"
                    >
                      <span>{item.label}</span>

                      <span className="text-primary/30 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Divider */}

                <div className="divider-luxury my-8">
                  <span className="h-1 w-1 rotate-45 bg-primary" />
                </div>

                {/* CTA */}

                <motion.button
                  type="button"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={
                    prefersReducedMotion
                      ? {
                          duration: 0,
                        }
                      : {
                          delay: 0.3,
                        }
                  }
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => scrollToSection("contact")}
                  className="mt-auto w-full rounded-lg bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-lg transition-all duration-500 hover:shadow-[0_0_30px_var(--gold-mid)]"
                >
                  Get in Touch
                </motion.button>

                {/* Footer text */}

                <p className="mt-5 text-center text-[10px] uppercase tracking-[0.25em] text-foreground/25">
                  Marco Abdo • Portfolio
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
