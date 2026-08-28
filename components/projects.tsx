"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ExternalLink,
  Github,
  EyeOff,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

/* =========================================================
   PROJECTS DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern and elegant e-commerce website showcasing luxury watches and jewelry with a clean, responsive design and smooth user experience.",
    image: "/e-commerce.png",
    tags: ["HTML", "CSS", "JavaScript"],
    links: {
      demo: "#",
      github: "#",
    },
    hasDemo: false,
    hasCode: false,
  },

  {
    id: 2,
    title: "Landing Page Farargy",
    description:
      "A modern and fully responsive restaurant landing page designed to attract customers and highlight the brand's identity. The page includes five main sections.",
    image: "/farargy.png",
    tags: ["HTML", "Tailwind CSS"],
    links: {
      demo: "https://classy-beignet-bebe51.netlify.app/#",
      github:
        "https://github.com/marcoabdo20/landing-page",
    },
    hasDemo: true,
    hasCode: true,
  },

  {
    id: 3,
    title: "Restaurant Mobile Application",
    description:
      "Developed a cross-platform restaurant mobile application using React Native",
    image: "/mobile.jpg",
    tags: ["React Native", "Tailwind CSS"],
    links: {
      demo: "#",
      github:
        "https://github.com/marcoabdo20/Restaurant-Mobile-Application",
    },
    hasDemo: false,
    hasCode: true,
  },

  {
    id: 4,
    title: "Landing Page HR",
    description:
      "Designed and developed a responsive HR landing page featuring company services, and modern UI design",
    image: "/HR.png",
    tags: ["React", "Tailwind CSS"],
    links: {
      demo: "#",
      github:
        "https://github.com/marcoabdo20/Landing-Page-",
    },
    hasDemo: false,
    hasCode: true,
  },

  {
    id: 5,
    title: "User-Side Web Application",
    description:
      "Developed a user-side web application enabling users to find and explore skilled craftsmen through a responsive and user-friendly interface",
    image: "/user-side.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    links: {
      demo: "https://gp-iti-website.vercel.app/",
      github:
        "https://github.com/nihalsabri/GP-ITI-website-using-react/tree/Marco",
    },
    hasDemo: true,
    hasCode: true,
  },

  {
    id: 6,
    title: "Dashboard Web Application",
    description:
      "Built a complete dashboard using Angular and CSS, featuring responsive layouts, modular components, and modern UI design",
    image: "/dashboard.png",
    tags: ["Angular", "CSS", "Firebase"],
    links: {
      demo: "https://dashboard-iti.netlify.app",
      github:
        "https://github.com/nihalsabri/GP-ITI/tree/Marco",
    },
    hasDemo: true,
    hasCode: true,
  },

  {
    id: 7,
    title: "User-Side Mobile Application",
    description:
      "Built a mobile application using React Native & NativeWind that allows users to find and explore professional craftsmen with a user-friendly and responsive design",
    image: "/mobile-iti.jpeg",
    tags: [
      "React Native",
      "NativeWind",
      "Firebase",
    ],
    links: {
      demo: "#",
      github:
        "https://github.com/nihalsabri/GP-ITI-App",
    },
    hasDemo: false,
    hasCode: true,
  },

  {
    id: 8,
    title:
      "Doctor Appointment Booking — Full-Stack",
    description:
      "A full-stack healthcare web application that allows patients to book appointments with doctors online, view doctor profiles and reviews, and manage their medical appointments. Doctors can manage their schedules, confirm appointments, and view patient reviews.",
    image: "/doctors.png",
    tags: [
      "React",
      "Firebase",
      "Material-UI",
    ],
    links: {
      demo:
        "https://doctor-app-blond.vercel.app/",
      github:
        "https://github.com/marcoabdo20/doctor-app/",
    },
    hasDemo: true,
    hasCode: true,
  },

  {
    id: 9,
    title:
      "Electronics E-Commerce Store — Full-Stack Marketplace",
    description:
      "A production-ready electronics marketplace with admin dashboard, real-time order tracking, and role-based authentication. Built for scalability with clean architecture.",
    image: "/electronics.png",
    tags: [
      "React 18",
      "Firebase",
      "Cloudinary",
      "Pure CSS",
    ],
    links: {
      demo:
        "https://electronics-store-2epx.vercel.app/",
      github:
        "https://github.com/marcoabdo20/electronics-store",
    },
    hasDemo: true,
    hasCode: true,
  },

  {
    id: 10,
    title: "Dentlora — Dental Care Platform",
    description:
      "A bilingual (English/Arabic) dental care landing page with automatic RTL/LTR switching, standalone legal pages, and a modular component architecture. Built with a centralized translation system for full internationalization.",
    image: "/dentlora.png",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "i18n / RTL",
    ],
    links: {
      demo:
        "https://dental-landing-page-gamma.vercel.app/",
      github:
        "https://github.com/swiftx-io/Dental-landing-page-",
    },
    hasDemo: true,
    hasCode: true,
  },
];

/* =========================================================
   IMAGE LIGHTBOX
========================================================= */

function ImageLightbox({
  image,
  title,
  isOpen,
  onClose,
}: {
  image: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        bg-black/90
        p-4
        backdrop-blur-md
      "
    >
      <motion.div
        initial={{
          scale: 0.92,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0.92,
          opacity: 0,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        onClick={(e) =>
          e.stopPropagation()
        }
        className="
          relative
          w-full
          max-w-6xl
        "
      >
        {/* Close */}

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            -top-12
            right-0
            flex
            items-center
            gap-2
            rounded-full
            border
            border-primary/20
            bg-background/60
            px-4
            py-2
            text-xs
            font-medium
            uppercase
            tracking-[0.15em]
            text-white/70
            backdrop-blur-md
            transition-all
            hover:border-primary/50
            hover:text-primary
          "
          aria-label="Close image"
        >
          Close

          <X className="h-4 w-4" />
        </button>

        {/* Image */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-primary/20
            bg-background
            p-1
            shadow-[0_0_80px_rgba(0,0,0,0.5)]
          "
        >
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="
              max-h-[85vh]
              w-full
              rounded-xl
              object-contain
            "
          />
        </div>

        {/* Title */}

        <p
          className="
            mt-4
            text-center
            text-sm
            font-medium
            text-white/70
          "
        >
          {title}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof projects)[0];
  index: number;
  total: number;
}) {
  const [isExpanded, setIsExpanded] =
    useState(false);

  const [isImageOpen, setIsImageOpen] =
    useState(false);

  const hasLongDescription =
    project.description.length > 110;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },

          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: "easeOut",
            },
          },
        }}
        whileHover={{
          y: -8,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="group relative h-full"
      >
        {/* Card */}

        <div
          className="
            relative
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-primary/10
            bg-card/40
            backdrop-blur-xl
            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
            transition-all
            duration-500

            hover:border-primary/40
            hover:bg-card/60
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          "
        >
          {/* ================= IMAGE ================= */}

          <div
            className="
              relative
              h-60
              shrink-0
              cursor-pointer
              overflow-hidden
              md:h-72
            "
            onClick={() =>
              setIsImageOpen(true)
            }
          >
            <img
              src={
                project.image ||
                "/placeholder.svg"
              }
              alt={project.title}
              loading="lazy"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-110
              "
            />

            {/* Dark Gradient */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-background
                via-background/20
                to-transparent
                opacity-80
                transition-opacity
                duration-500
                group-hover:opacity-95
              "
            />

            {/* Gold Glow */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-primary/10
                via-transparent
                to-primary/5
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Shine */}

            <div
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                transition-transform
                duration-1000
                group-hover:translate-x-full
              "
            />

            {/* Project Number */}

            <span
              className="
                absolute
                left-5
                top-5
                rounded-full
                border
                border-primary/30
                bg-background/60
                px-3
                py-1.5
                text-[10px]
                font-semibold
                tracking-[0.18em]
                text-primary
                backdrop-blur-md
              "
            >
              {String(index).padStart(2, "0")}

              <span className="mx-1 text-primary/30">
                /
              </span>

              {String(total).padStart(2, "0")}
            </span>

            {/* View Image */}

            <span
              className="
                absolute
                bottom-5
                right-5
                translate-y-3
                rounded-full
                border
                border-primary/20
                bg-background/70
                px-4
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-primary
                opacity-0
                backdrop-blur-md
                transition-all
                duration-300
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              View Image
            </span>
          </div>

          {/* ================= CONTENT ================= */}

          <div
            className="
              flex
              flex-1
              flex-col
              p-6
              md:p-7
            "
          >
            {/* Small Label */}

            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-6 bg-primary" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-primary/70
                "
              >
                Project
              </span>
            </div>

            {/* Title */}

            <h3
              className="
                mb-3
                text-xl
                font-bold
                tracking-tight
                text-foreground
                transition-colors
                duration-300
                group-hover:text-primary
                md:text-2xl
              "
            >
              {project.title}
            </h3>

            {/* Description */}

            <div
              className={`
                text-sm
                leading-7
                text-foreground/60

                ${
                  !isExpanded &&
                  hasLongDescription
                    ? "line-clamp-3"
                    : ""
                }

                ${
                  hasLongDescription
                    ? "cursor-pointer"
                    : ""
                }
              `}
              onClick={() =>
                hasLongDescription &&
                setIsExpanded(
                  !isExpanded
                )
              }
            >
              <p>
                {project.description}
              </p>
            </div>

            {/* Read More */}

            {hasLongDescription && (
              <button
                type="button"
                onClick={() =>
                  setIsExpanded(
                    !isExpanded
                  )
                }
                className="
                  mt-2
                  inline-flex
                  w-fit
                  items-center
                  gap-1
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-primary/70
                  transition-colors
                  hover:text-primary
                "
              >
                {isExpanded
                  ? "Show Less"
                  : "Read More"}

                {isExpanded ? (
                  <ChevronUp className="h-3 w-3" />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
              </button>
            )}

            {/* ================= TAGS ================= */}

            <div
              className="
                mb-7
                mt-5
                flex
                flex-wrap
                gap-2
              "
            >
              {project.tags.map(
                (tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-primary/10
                      bg-primary/[0.03]
                      px-3
                      py-1.5
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-wide
                      text-foreground/50
                      transition-all
                      duration-300
                      group-hover:border-primary/25
                      group-hover:text-primary/80
                    "
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* ================= DIVIDER ================= */}

            <div
              className="
                mb-5
                h-px
                w-full
                bg-gradient-to-r
                from-primary/20
                via-border/50
                to-transparent
              "
            />

            {/* ================= ACTIONS ================= */}

            <div
              className="
                mt-auto
                flex
                gap-3
              "
            >
              {/* Live Demo */}

              {project.hasDemo ? (
                <a
                  href={
                    project.links.demo
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group/btn
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-primary/30
                    bg-primary/[0.03]
                    px-4
                    py-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-primary
                    transition-all
                    duration-300

                    hover:border-primary
                    hover:bg-primary
                    hover:text-primary-foreground
                    hover:shadow-[0_0_20px_var(--gold-soft)]

                    active:scale-95
                  "
                >
                  <ExternalLink
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      group-hover/btn:-translate-y-0.5
                    "
                  />

                  Live Demo
                </a>
              ) : (
                <span
                  className="
                    inline-flex
                    flex-1
                    cursor-not-allowed
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-dashed
                    border-border/40
                    px-4
                    py-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-muted-foreground
                    opacity-40
                  "
                >
                  <EyeOff className="h-3.5 w-3.5" />

                  No Demo
                </span>
              )}

              {/* Github */}

              {project.hasCode ? (
                <a
                  href={
                    project.links.github
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-border/50
                    px-4
                    py-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-foreground/70
                    transition-all
                    duration-300

                    hover:border-primary/50
                    hover:bg-primary/5
                    hover:text-primary

                    active:scale-95
                  "
                >
                  <Github className="h-3.5 w-3.5" />

                  Code
                </a>
              ) : (
                <span
                  className="
                    inline-flex
                    flex-1
                    cursor-not-allowed
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-dashed
                    border-border/30
                    px-4
                    py-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-muted-foreground
                    opacity-40
                  "
                >
                  <EyeOff className="h-3.5 w-3.5" />

                  Private
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}

      <AnimatePresence>
        {isImageOpen && (
          <ImageLightbox
            image={project.image}
            title={project.title}
            isOpen={isImageOpen}
            onClose={() =>
              setIsImageOpen(false)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   PROJECTS SECTION
========================================================= */

export default function Projects() {
  const sorted = [...projects].sort(
    (a, b) => b.id - a.id
  );

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        px-6
        py-28
        md:py-32
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
        "
      >
        {/* Center */}

        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-primary/[0.035]
            blur-[120px]
          "
        />

        {/* Left */}

        <div
          className="
            absolute
            left-0
            top-1/2
            h-64
            w-64
            rounded-full
            bg-primary/[0.025]
            blur-[100px]
          "
        />

        {/* Right */}

        <div
          className="
            absolute
            bottom-0
            right-0
            h-72
            w-72
            rounded-full
            bg-primary/[0.025]
            blur-[120px]
          "
        />
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
        "
      >
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            mb-16
            text-center
          "
        >
          {/* Label */}

          <span
            className="
              mb-5
              inline-flex
              items-center
              gap-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-primary
            "
          >
            <span className="h-px w-8 bg-primary" />

            My Work

            <span className="h-px w-8 bg-primary" />
          </span>

          {/* Title */}

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              md:text-5xl
              lg:text-6xl
            "
          >
            <span className="text-gradient-gold">
              Featured Projects
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-foreground/50
              md:text-base
            "
          >
            A selection of web and mobile
            applications I've designed and
            developed using modern
            technologies.
          </p>

          {/* Luxury Divider */}

          <div
            className="
              mx-auto
              mt-8
              max-w-md
            "
          >
            <div className="divider-luxury">
              <span
                className="
                  h-1.5
                  w-1.5
                  rotate-45
                  bg-primary
                "
              />
            </div>
          </div>
        </motion.div>

        {/* =================================================
            PROJECT COUNT
        ================================================= */}

        <div
          className="
            mb-8
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-foreground/30
            "
          >
            Selected Work
          </span>

          <span
            className="
              text-xs
              text-primary/60
            "
          >
            {sorted.length} Projects
          </span>
        </div>

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            grid
            grid-cols-1
            gap-7
            md:grid-cols-2
          "
        >
          {sorted.map(
            (project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index + 1}
                total={sorted.length}
              />
            )
          )}
        </motion.div>

        {/* =================================================
            BOTTOM DECORATION
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-20
            flex
            justify-center
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-foreground/20
            "
          >
            <span className="h-px w-12 bg-primary/20" />

            Crafted With Passion

            <span className="h-px w-12 bg-primary/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}