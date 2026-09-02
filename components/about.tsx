"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Sparkles, ArrowRight, Briefcase } from "lucide-react";

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

  // Stagger wrapper for each timeline list (education / experience)
  const timelineContainerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Individual timeline row animation
  const timelineItemVariants = {
    hidden: {
      opacity: 0,
      x: -16,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
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

  const education = [
    {
      title:
        "Bachelor's in Information Technology - Egyptian E-Learning University",
    },
    {
      title: "Front-End & Cross-Platform Mobile Developer - ITI Graduate",
    },
    {
      title: "Web Performance Optimization Course - Udemy",
    },
  ];

  const experience = [
    {
      role: "Front-End Developer (Part-Time)",
      company: "SwiftX",
      period: "Aug 2026 – Present",
      description:
        "Developing responsive and production-ready web applications using React.js and Next.js while collaborating remotely with design and product teams.",
    },
    {
      role: "Front-End Developer",
      company: "Tech Mahindra",
      period: "Jul 2026 – Present",
      description:
        "Collaborating with cross-functional teams to deliver high-quality solutions while meeting project deadlines.",
    },
    {
      role: "Front-End Developer",
      company: "ITI",
      period: "Jul 2025 – Jan 2026",
      description:
        "Developed responsive web applications with React.js and modern front-end technologies, as well as cross-platform mobile applications using React Native.",
    },
    {
      role: "Front-End Development Trainee",
      company: "SB Technology",
      period: "Jul 2024 – Dec 2024",
      description:
        "Built modern responsive interfaces using React.js, Tailwind CSS and JavaScript while working with Git and GitHub on real-world projects.",
    },
    {
      role: "Software Instructor",
      company: "Digital Egypt Cubs Initiative (DECI)",
      period: "May 2024 – Present",
      description:
        "Teaching programming fundamentals, Firebase, HTML, CSS, JavaScript, React.js and TypeScript while helping teenagers develop practical digital and programming skills.",
    },
    {
      role: "Cross-Platform Mobile Developer",
      company: "ITI",
      period: "Jul 2023 – Aug 2023",
      description:
        "Developed cross-platform mobile applications using React Native for iOS and Android following Mobile-First Design principles.",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        px-4
        py-20
        sm:px-6
        sm:py-24
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
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary/[0.035]
            blur-[90px]
            sm:h-[500px]
            sm:w-[500px]
            sm:blur-[130px]
          "
        />

        {/* Left Glow */}

        <div
          className="
            absolute
            left-0
            top-1/4
            h-40
            w-40
            rounded-full
            bg-primary/[0.025]
            blur-[80px]
            sm:h-72
            sm:w-72
            sm:blur-[110px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            bottom-0
            right-0
            h-48
            w-48
            rounded-full
            bg-primary/[0.025]
            blur-[90px]
            sm:h-80
            sm:w-80
            sm:blur-[120px]
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
          w-full
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
            mb-12
            text-center
            sm:mb-16
          "
        >
          {/* Small Label */}

          <span
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-primary
              sm:mb-5
              sm:gap-3
              sm:text-[10px]
              sm:tracking-[0.3em]
            "
          >
            <span className="h-px w-6 bg-primary sm:w-8" />
            About Me
            <span className="h-px w-6 bg-primary sm:w-8" />
          </span>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            <span className="text-primary">Who I Am</span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-xs
              text-sm
              leading-6
              text-foreground/50
              sm:mt-5
              sm:max-w-2xl
              sm:text-base
              sm:leading-7
            "
          >
            Passionate about creating meaningful digital experiences through
            modern technologies and thoughtful design.
          </p>

          {/* Divider */}

          <div
            className="
              mx-auto
              mt-6
              max-w-[280px]
              sm:mt-8
              sm:max-w-md
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
            items-start
            gap-10
            sm:gap-12
            md:grid-cols-2
            md:items-center
            md:gap-14
            lg:items-start
            lg:gap-16
            xl:gap-20
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
              amount: 0.15,
            }}
            className="
              order-2
              flex
              min-w-0
              flex-col
              justify-center
              space-y-6
              sm:space-y-8
              md:order-1
            "
          >
            {/* Introduction */}

            <motion.div variants={itemVariants}>
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-primary/20
                    bg-primary/5
                    text-primary
                    sm:h-10
                    sm:w-10
                  "
                >
                  <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-primary/70
                      sm:text-base
                      sm:tracking-[0.2em]
                    "
                  >
                    Front-End Developer
                  </p>

                  <p className="text-[11px] text-foreground/30 sm:text-xs">
                    Web & Mobile Development
                  </p>
                </div>
              </div>

              <p
                className="
                  text-[15px]
                  leading-7
                  text-foreground/70
                  sm:text-base
                  sm:leading-8
                  md:text-lg
                "
              >
                I'm a passionate Front-End Developer with a keen eye for
                creating beautiful and functional digital experiences on both
                web and mobile platforms. With over 1 year of experience in web
                development and mobile application development, I specialize in
                React.js, React Native, TypeScript, Next.js, and modern CSS
                frameworks including Tailwind CSS.
              </p>
            </motion.div>

            {/* Second Paragraph */}

            <motion.div variants={itemVariants}>
              <p
                className="
                  text-[15px]
                  leading-7
                  text-foreground/60
                  sm:text-base
                  sm:leading-8
                  md:text-lg
                "
              >
                I am committed to writing clean, maintainable, and scalable
                code, staying updated with the latest web and mobile
                technologies, and following best practices to deliver
                high-quality applications.
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
                p-5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-primary/25
                hover:bg-card/50
                sm:p-6
              "
            >
              {/* Header */}
              <div className="mb-5 flex items-center gap-3 sm:mb-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary sm:h-10 sm:w-10">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    Education & Training
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-primary/50 sm:text-[10px]">
                    Academic Background
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <motion.div
                variants={timelineContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-4 sm:space-y-5"
              >
                {education.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={timelineItemVariants}
                    whileHover={{ x: 4 }}
                    className="group flex gap-4"
                  >
                    <div className="relative flex shrink-0 flex-col items-center">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full border border-primary bg-background shadow-[0_0_10px_var(--gold-soft)] transition-transform duration-300 group-hover:scale-125" />
                      {index !== education.length - 1 && (
                        <span className="mt-2 h-full w-px bg-gradient-to-b from-primary/40 to-transparent" />
                      )}
                    </div>

                    <div className="min-w-0 pb-1">
                      <p className="text-sm font-medium leading-6 text-foreground/75">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Professional Experience */}
            <motion.div
              variants={itemVariants}
              className="
                rounded-2xl
                border
                border-primary/10
                bg-card/30
                p-5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-primary/25
                hover:bg-card/50
                sm:p-6
              "
            >
              {/* Header */}
              <div className="mb-5 flex items-center gap-3 sm:mb-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary sm:h-10 sm:w-10">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    Professional Experience
                  </h3>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-primary/50 sm:text-[10px]">
                    Career Journey
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <motion.div
                variants={timelineContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="space-y-4 sm:space-y-5"
              >
                {experience.map((item, index) => (
                  <motion.div
                    key={`${item.role}-${item.company}`}
                    variants={timelineItemVariants}
                    whileHover={{ x: 4 }}
                    className="group flex gap-4 rounded-lg p-1.5 -m-1.5 transition-colors duration-300 hover:bg-primary/[0.03]"
                  >
                    <div className="relative flex shrink-0 flex-col items-center">
                      <span
                        className={`mt-1 h-2.5 w-2.5 rounded-full border border-primary bg-background transition-transform duration-300 group-hover:scale-125 ${
                          index === 0
                            ? "shadow-[0_0_10px_var(--gold-soft)]"
                            : ""
                        }`}
                      />
                      {index !== experience.length - 1 && (
                        <span className="mt-2 h-full w-px bg-gradient-to-b from-primary/40 to-transparent" />
                      )}
                    </div>

                    <div className="min-w-0 pb-1">
                      <h4 className="text-sm font-semibold text-foreground">
                        {item.role}
                      </h4>
                      <p className="mt-1 break-words text-xs text-primary/70">
                        {item.company} · {item.period}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-foreground/60">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
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
            className="order-1 relative flex min-w-0 flex-col justify-center md:order-2 lg:sticky lg:top-28 lg:justify-start lg:self-start"
          >
            {/* Image Container */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-primary/15
                bg-card
                p-1
                shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                sm:rounded-3xl
                sm:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
              "
            >
              <div
                className="
                  relative
                  h-[300px]
                  overflow-hidden
                  rounded-[18px]
                  xs:h-[340px]
                  sm:h-[420px]
                  sm:rounded-[22px]
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
                    left-4
                    top-4
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-primary/20
                    bg-background/60
                    px-3
                    py-1.5
                    backdrop-blur-md
                    sm:left-5
                    sm:top-5
                    sm:px-4
                    sm:py-2
                  "
                >
                  <Sparkles
                    className="
                      h-3
                      w-3
                      text-primary
                      sm:h-3.5
                      sm:w-3.5
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-primary
                      sm:text-[9px]
                      sm:tracking-[0.2em]
                    "
                  >
                    My Workspace
                  </span>
                </div>

                {/* Bottom Text */}

                <div
                  className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    sm:bottom-6
                    sm:left-6
                    sm:right-6
                  "
                >
                  <p
                    className="
                      mb-1.5
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-primary
                      sm:mb-2
                      sm:text-[10px]
                      sm:tracking-[0.25em]
                    "
                  >
                    Building Digital Experiences
                  </p>

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-white
                      sm:text-2xl
                      md:text-3xl
                    "
                  >
                    Turning Ideas Into
                    <span className="text-primary"> Reality</span>
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
                -mt-6
                mx-4
                rounded-2xl
                border
                border-primary/15
                bg-card/80
                p-4
                shadow-[0_15px_50px_rgba(0,0,0,0.3)]
                backdrop-blur-xl
                sm:-mt-8
                sm:mx-6
                sm:p-5
                md:mx-10
              "
            >
              {/* Header */}

              <div
                className="
                  mb-3
                  flex
                  items-center
                  justify-between
                  sm:mb-4
                "
              >
                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-foreground
                      sm:text-sm
                    "
                  >
                    Tech Stack
                  </p>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      uppercase
                      tracking-[0.14em]
                      text-foreground/30
                      sm:text-[9px]
                      sm:tracking-[0.18em]
                    "
                  >
                    Technologies I Work With
                  </p>
                </div>

                <div
                  className="
                    h-2
                    w-2
                    shrink-0
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
                  gap-1.5
                  sm:gap-2
                "
              >
                {technologies.map((tech) => (
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
                        px-2.5
                        py-1
                        text-[9px]
                        font-medium
                        text-foreground/55
                        transition-all
                        duration-300
                        hover:border-primary/30
                        hover:bg-primary/10
                        hover:text-primary
                        sm:px-3
                        sm:py-1.5
                        sm:text-[10px]
                      "
                  >
                    {tech}
                  </motion.span>
                ))}
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
            mt-14
            flex
            justify-center
            px-4
            text-center
            sm:mt-20
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-foreground/20
              sm:gap-4
              sm:text-[9px]
              sm:tracking-[0.3em]
            "
          >
            <span className="h-px w-8 bg-primary/20 sm:w-12" />
            Passion • Code • Creativity
            <span className="h-px w-8 bg-primary/20 sm:w-12" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}