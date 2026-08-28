"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const technologies = [
    "React",
    "React Native",
    "TypeScript",
    "Next.js",
    "Javascript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Firebase",
    "Angular",
    "UI/UX",
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        px-6
        py-28
        md:py-32
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >
        {/* Main Glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/[0.035]
            blur-[130px]
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            left-0
            top-1/4
            h-72
            w-72
            rounded-full
            bg-primary/[0.025]
            blur-[110px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            bottom-0
            right-0
            h-80
            w-80
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
            HEADER
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
          {/* Small Label */}

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

            About Me

            <span className="h-px w-8 bg-primary" />
          </span>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              md:text-5xl
              lg:text-6xl
            "
          >
            <span className="text-primary">
              Who I Am
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
            Passionate about creating meaningful
            digital experiences through modern
            technologies and thoughtful design.
          </p>

          {/* Divider */}

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
            MAIN GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-14
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              space-y-8
            "
          >
            {/* Introduction */}

            <motion.div
              variants={itemVariants}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-primary/20
                    bg-primary/5
                    text-primary
                  "
                >
                  <Code2 className="h-5 w-5" />
                </div>

                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-primary/70
                    "
                  >
                    Front-End Developer
                  </p>

                  <p className="text-xs text-foreground/30">
                    Web & Mobile Development
                  </p>
                </div>
              </div>

              <p
                className="
                  text-base
                  leading-8
                  text-foreground/70
                  md:text-lg
                "
              >
                I'm a passionate Front-End Developer
                with a keen eye for creating beautiful
                and functional digital experiences on
                both web and mobile platforms. With over
                1 year of experience in web development
                and mobile application development, I
                specialize in React.js, React Native,
                TypeScript, Next.js, and modern CSS
                frameworks including Tailwind CSS.
              </p>
            </motion.div>

            {/* Second Paragraph */}

            <motion.div
              variants={itemVariants}
            >
              <p
                className="
                  text-base
                  leading-8
                  text-foreground/60
                  md:text-lg
                "
              >
                I am committed to writing clean,
                maintainable, and scalable code, staying
                updated with the latest web and mobile
                technologies, and following best
                practices to deliver high-quality
                applications.
              </p>
            </motion.div>

            {/* =================================================
                EDUCATION
            ================================================= */}

            <motion.div
              variants={itemVariants}
              className="
                rounded-2xl
                border
                border-primary/10
                bg-card/30
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-primary/25
                hover:bg-card/50
              "
            >
              {/* Header */}

              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-primary/20
                    bg-primary/5
                    text-primary
                  "
                >
                  <GraduationCap className="h-5 w-5" />
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-foreground
                    "
                  >
                    Education & Training
                  </h3>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.15em]
                      text-primary/50
                    "
                  >
                    Academic Background
                  </p>
                </div>
              </div>

              {/* Timeline */}

              <div className="space-y-5">
                {/* Item 1 */}

                <div className="group flex gap-4">
                  <div
                    className="
                      relative
                      flex
                      flex-col
                      items-center
                    "
                  >
                    <span
                      className="
                        mt-1
                        h-2.5
                        w-2.5
                        rounded-full
                        border
                        border-primary
                        bg-background
                        shadow-[0_0_10px_var(--gold-soft)]
                      "
                    />

                    <span
                      className="
                        mt-2
                        h-full
                        w-px
                        bg-gradient-to-b
                        from-primary/40
                        to-transparent
                      "
                    />
                  </div>

                  <div className="pb-2">
                    <p
                      className="
                        text-sm
                        font-medium
                        leading-6
                        text-foreground/75
                      "
                    >
                      Bachelor's in Information
                      Technology - Egyptian E-Learning
                      University
                    </p>
                  </div>
                </div>

                {/* Item 2 */}

                <div className="group flex gap-4">
                  <div
                    className="
                      relative
                      flex
                      flex-col
                      items-center
                    "
                  >
                    <span
                      className="
                        mt-1
                        h-2.5
                        w-2.5
                        rounded-full
                        border
                        border-primary
                        bg-background
                      "
                    />

                    <span
                      className="
                        mt-2
                        h-full
                        w-px
                        bg-gradient-to-b
                        from-primary/40
                        to-transparent
                      "
                    />
                  </div>

                  <div className="pb-2">
                    <p
                      className="
                        text-sm
                        font-medium
                        leading-6
                        text-foreground/75
                      "
                    >
                      Front-End & Cross-Platform Mobile
                      Developer - ITI Graduate
                    </p>
                  </div>
                </div>

                {/* Item 3 */}

                <div className="flex gap-4">
                  <div className="flex items-start">
                    <span
                      className="
                        mt-1
                        h-2.5
                        w-2.5
                        rounded-full
                        border
                        border-primary
                        bg-background
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-sm
                        font-medium
                        leading-6
                        text-foreground/75
                      "
                    >
                      Web Performance Optimization
                      Course - Udemy
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative"
          >
            {/* Image Container */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-primary/15
                bg-card
                p-1
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              "
            >
              <div
                className="
                  relative
                  h-[420px]
                  overflow-hidden
                  rounded-[22px]
                  md:h-[500px]
                "
              >
                <img
                  src="/modern-developer-workspace-stockcake.jpg"
                  alt="Marco Abdo - Front-End Developer workspace"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-background
                    via-background/20
                    to-transparent
                  "
                />

                {/* Gold Overlay */}

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

                {/* Top Label */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-primary/20
                    bg-background/60
                    px-4
                    py-2
                    backdrop-blur-md
                  "
                >
                  <Sparkles
                    className="
                      h-3.5
                      w-3.5
                      text-primary
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-primary
                    "
                  >
                    My Workspace
                  </span>
                </div>

                {/* Bottom Text */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                  "
                >
                  <p
                    className="
                      mb-2
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-primary
                    "
                  >
                    Building Digital Experiences
                  </p>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                      md:text-3xl
                    "
                  >
                    Turning Ideas Into
                    <span className="text-primary">
                      {" "}
                      Reality
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* =================================================
                TECH STACK CARD
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-20
                -mt-8
                ml-6
                mr-6
                rounded-2xl
                border
                border-primary/15
                bg-card/80
                p-5
                shadow-[0_15px_50px_rgba(0,0,0,0.3)]
                backdrop-blur-xl
                md:ml-10
                md:mr-10
              "
            >
              {/* Header */}

              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-foreground
                    "
                  >
                    Tech Stack
                  </p>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-foreground/30
                    "
                  >
                    Technologies I Work With
                  </p>
                </div>

                <div
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-primary
                    shadow-[0_0_12px_var(--gold-soft)]
                  "
                />
              </div>

              {/* Technologies */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {technologies.map(
                  (tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{
                        y: -2,
                        scale: 1.03,
                      }}
                      className="
                        rounded-full
                        border
                        border-primary/10
                        bg-primary/[0.04]
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        text-foreground/55
                        transition-all
                        duration-300
                        hover:border-primary/30
                        hover:bg-primary/10
                        hover:text-primary
                      "
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>

            {/* Decorative Arrow */}

            <motion.div
              animate={{
                x: [0, 6, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="
                absolute
                -right-3
                top-1/2
                hidden
                text-primary/30
                lg:block
              "
            >
              <ArrowRight className="h-8 w-8" />
            </motion.div>
          </motion.div>
        </div>

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

            Passion • Code • Creativity

            <span className="h-px w-12 bg-primary/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}