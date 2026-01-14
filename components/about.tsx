"use client"

import { motion } from "framer-motion"

export default function About() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-foreground/80 leading-relaxed">
             I'm a passionate Front-End Developer with a keen eye for creating beautiful and functional digital experiences on both web and mobile platforms. With over 1 year of experience in web development and mobile application development, I specialize in React.js, React Native, TypeScript, Next.js, and modern CSS frameworks including Tailwind CSS.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-foreground/80 leading-relaxed">
              I am committed to writing clean, maintainable, and scalable code, staying updated with the latest web and mobile technologies, and following best practices to deliver high-quality applications.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Education & Training</h3>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Bachelor's in Information Technology - Egyptian E-Learning University</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Front-End & Cross-Platform Mobile Developer - ITI Graduate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>Web Performance Optimization Course - Udemy</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img src="/modern-developer-workspace-stockcake.jpg" alt="Marco's workspace" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-6 -right-6 bg-card border border-border rounded-lg p-6 shadow-xl max-w-xs"
            >
              <p className="text-sm text-foreground/70 mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["React", "React Native", "TypeScript", "Next.js", "Javascript", "HTML", "CSS", "Tailwind CSS", "Node.js", "Firebase", "Angular", "UI/UX"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
