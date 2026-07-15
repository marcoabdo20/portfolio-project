"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, EyeOff, ChevronDown, ChevronUp, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern and elegant e-commerce website showcasing luxury watches and jewelry with a clean, responsive design and smooth user experience.",
    image: "/e-commerce.png",
    tags: ["HTML", "CSS", "JavaScript"],
    links: { demo: "#", github: "#" },
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
      github: "https://github.com/marcoabdo20/landing-page",
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
      github: "https://github.com/marcoabdo20/Restaurant-Mobile-Application",
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
      github: "https://github.com/marcoabdo20/Landing-Page-",
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
      github: "https://github.com/nihalsabri/GP-ITI/tree/Marco",
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
    tags: ["React Native", "NativeWind", "Firebase"],
    links: { demo: "#", github: "https://github.com/nihalsabri/GP-ITI-App" },
    hasDemo: false,
    hasCode: true,
  },
  {
    id: 8,
    title: "Doctor Appointment Booking — Full-Stack",
    description:
      "A full-stack healthcare web application that allows patients to book appointments with doctors online, view doctor profiles and reviews, and manage their medical appointments. Doctors can manage their schedules, confirm appointments, and view patient reviews.",
    image: "/doctors.png",
    tags: ["React", "Firebase", "Material-UI"],
    links: { demo: "https://doctor-app-blond.vercel.app/", github: "https://github.com/marcoabdo20/doctor-app/" },
    hasDemo: true,
    hasCode: true,
  },
  {
    id: 9,
    title: "Electronics E-Commerce Store — Full-Stack Marketplace",
    description:
      "A production-ready electronics marketplace with admin dashboard, real-time order tracking, and role-based authentication. Built for scalability with clean architecture.",
    image: "/electronics.png",
    tags: ["React 18", "Firebase", "Cloudinary" , "Pure CSS"],
    links: { demo: "https://electronics-store-2epx.vercel.app/", github: "https://github.com/marcoabdo20/electronics-store" },
    hasDemo: true,
    hasCode: true,
  },
];

function ImageLightbox({ image, title, isOpen, onClose }: { image: string; title: string; isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-5xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-primary transition-colors p-2"
          aria-label="Close image"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
        />
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const hasLongDescription = project.description.length > 100;

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
        whileHover={{ y: -10 }}
        className="group relative"
      >
        <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
          <div 
            className="relative h-64 overflow-hidden cursor-pointer"
            onClick={() => setIsImageOpen(true)}
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-4 py-2 bg-background/80 backdrop-blur-sm rounded-lg text-sm font-medium text-foreground">
                Click to Expand
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>

            <div 
              className={`text-foreground/70 text-sm mb-4 ${!isExpanded && hasLongDescription ? 'line-clamp-2' : ''} cursor-pointer select-none transition-all duration-300`}
              onClick={() => hasLongDescription && setIsExpanded(!isExpanded)}
            >
              <p>{project.description}</p>

              {hasLongDescription && (
                <motion.div 
                  className="flex items-center gap-1 mt-2 text-primary text-xs font-medium"
                  initial={false}
                  animate={{ opacity: 1 }}
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-3 h-3" />
                      <span>Show Less</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3" />
                      <span>Read More</span>
                    </>
                  )}
                </motion.div>
              )}
            </div>

            <AnimatePresence>
              {isExpanded && hasLongDescription && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.hasDemo ? (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium hover:scale-105 active:scale-95"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-muted-foreground text-sm font-medium cursor-not-allowed opacity-60">
                        <EyeOff className="w-4 h-4" />
                        No Demo
                      </span>
                    )}
                    {project.hasCode ? (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium hover:scale-105 active:scale-95"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-muted-foreground text-sm font-medium cursor-not-allowed opacity-60">
                        <EyeOff className="w-4 h-4" />
                        Private
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isExpanded && (
              <>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.hasDemo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium hover:scale-105 active:scale-95"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-muted-foreground text-sm font-medium cursor-not-allowed opacity-60">
                      <EyeOff className="w-4 h-4" />
                      No Demo
                    </span>
                  )}
                  {project.hasCode ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium hover:scale-105 active:scale-95"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-muted-foreground text-sm font-medium cursor-not-allowed opacity-60">
                      <EyeOff className="w-4 h-4" />
                      Private
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isImageOpen && (
          <ImageLightbox
            image={project.image}
            title={project.title}
            isOpen={isImageOpen}
            onClose={() => setIsImageOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[...projects].sort((a, b) => b.id - a.id).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>

  );
}