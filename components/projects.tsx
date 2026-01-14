"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern and elegant e-commerce website showcasing luxury watches and jewelry with a clean, responsive design and smooth user experience.",
    image: "/e-commerce.png",
    tags: ["HTML", "CSS", "JAVA SCREPT"],
    links: { demo: "#", github: "#" },
  },
  {
    id: 2,
    title: "Landing Page Farargy",
    description:
      "A modern and fully responsive restaurant landing page designed to attract customers and highlight the brand’s identity. The page includes five main sections.",
    image: "/farargy.png",
    tags: ["HTML", "Tailwind CSS"],
    links: { demo: "https://classy-beignet-bebe51.netlify.app/#", github: "https://github.com/marcoabdo20/landing-page" },
  },
  {
    id: 3,
    title: "Restaurant Mobile Application",
    description:
      "Developed a cross-platform restaurant mobile application using React Native",
    image: "/mobile.jpg",
    tags: ["React Native", "Tailwind CSS"],
    links: { demo: "#", github: "https://github.com/marcoabdo20/Restaurant-Mobile-Application" },
  },
  {
    id: 4,
    title: "Landing Page HR",
    description:
      "Designed and developed a responsive HR landing page featuring company services, and modern UI design",
    image: "/HR.png",
    tags: ["React", "Tailwind-CSS"],
    links: { demo: "#", github: "https://github.com/marcoabdo20/Landing-Page-" },
  },
  {
    id: 5,
    title: "User-Side Web Application",
    description:
      "Developed a user-side web application  enabling users to find and explore skilled craftsmen through a responsive and user-friendly interface",
    image: "/user-side.png",
    tags: ["React", "Tailwind-CSS", "Firebase"],
    links: { demo: "https://gp-iti-website.vercel.app/", github: "https://github.com/nihalsabri/GP-ITI-website-using-react/tree/Marco" },
  },
  {
    id: 6,
    title: "Dashboard Web Application",
    description:
      "Built a complete dashboard using Angular and CSS, featuring responsive layouts, modular components, and modern UI design",
    image: "/dashboard.png",
    tags: ["Angular", "CSS", "Firebase"],
    links: { demo: "https://dashboard-iti.netlify.app", github: "https://github.com/nihalsabri/GP-ITI/tree/Marco" },
  },
  {
    id: 7,
    title: "User-Side Mobile Application",
    description:
      " Built a mobile application using React Native & NativeWind that allows users to find and explore professional craftsmen with a user-friendly and responsive design",
    image: "/mobile-iti.jpeg",
    tags: ["Angular", "CSS", "Firebase"],
    links: { demo: "#", github: "https://github.com/nihalsabri/GP-ITI-App" },
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} whileHover={{ y: -10 }} className="group relative">
              <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.demo}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.links.github}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
