"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Send, Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    try {
      const formDataToSend = new FormData();

      formDataToSend.append(
        "access_key",
        "79fb01b2-c7e7-4963-a3ed-ba507b0012b5",
      );

      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
        }, 3000);
      } else {
        setErrorMessage(data.message || "Failed to send message");

        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please try again.");

      setStatus("error");
    }
  };

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
      href: "mailto:marcoabdo20@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        px-6
        py-28
        md:py-32
      "
    >
      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
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

        <div
          className="
            absolute
            bottom-0
            left-0
            h-72
            w-72
            rounded-full
            bg-primary/[0.025]
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            right-0
            top-0
            h-80
            w-80
            rounded-full
            bg-primary/[0.025]
            blur-[120px]
          "
        />
      </div>

      {/* =================================================
          MAIN CONTAINER
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
          className="mb-16 text-center"
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
            Get In Touch
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
            Let's <span className="text-gradient-gold">Connect</span>
          </h2>

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
            Have a project in mind? Let's collaborate and create something
            amazing together.
          </p>

          {/* Divider */}

          <div className="mx-auto mt-8 max-w-md">
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
            CONTENT GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[1.15fr_0.85fr]
          "
        >
          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              rounded-3xl
              border
              border-primary/10
              bg-card/30
              p-6
              backdrop-blur-xl
              md:p-8
            "
          >
            {/* Form Header */}

            <div className="mb-8">
              <div
                className="
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-primary/20
                  bg-primary/5
                  text-primary
                "
              >
                <Mail className="h-5 w-5" />
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-foreground
                "
              >
                Send Me a Message
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-foreground/40
                "
              >
                Tell me a little about your project and I'll get back to you as
                soon as possible.
              </p>
            </div>

            {/* Form */}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-foreground/50
                  "
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-primary/10
                    bg-background/40
                    px-4
                    py-3.5
                    text-sm
                    text-foreground
                    outline-none
                    placeholder:text-foreground/25
                    transition-all
                    duration-300
                    focus:border-primary/40
                    focus:bg-background/60
                    focus:ring-1
                    focus:ring-primary/20
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-foreground/50
                  "
                >
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="
                    w-full
                    rounded-xl
                    border
                    border-primary/10
                    bg-background/40
                    px-4
                    py-3.5
                    text-sm
                    text-foreground
                    outline-none
                    placeholder:text-foreground/25
                    transition-all
                    duration-300
                    focus:border-primary/40
                    focus:bg-background/60
                    focus:ring-1
                    focus:ring-primary/20
                  "
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-foreground/50
                  "
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-primary/10
                    bg-background/40
                    px-4
                    py-3.5
                    text-sm
                    text-foreground
                    outline-none
                    placeholder:text-foreground/25
                    transition-all
                    duration-300
                    focus:border-primary/40
                    focus:bg-background/60
                    focus:ring-1
                    focus:ring-primary/20
                  "
                />
              </div>

              {/* Button */}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{
                  scale: status === "sending" ? 1 : 1.02,
                }}
                whileTap={{
                  scale: status === "sending" ? 1 : 0.98,
                }}
                className={`
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-primary-foreground
                  transition-all
                  duration-300
                  ${
                    status === "sending"
                      ? "cursor-not-allowed bg-primary/50"
                      : "bg-primary hover:shadow-[0_0_30px_rgba(191,144,0,0.25)]"
                  }
                `}
              >
                {status === "sending" ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-primary-foreground/30
                        border-t-primary-foreground
                      "
                    />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>Message Sent ✓</>
                ) : status === "error" ? (
                  "Send Failed"
                ) : (
                  <>
                    Send Message
                    <Send
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </>
                )}
              </motion.button>

              {/* Error */}

              {status === "error" && errorMessage && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                      text-center
                      text-xs
                      text-red-400
                    "
                >
                  {errorMessage}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* =================================================
              RIGHT SIDE
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
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              flex
              flex-col
              gap-6
            "
          >
            {/* =================================================
                GET IN TOUCH CARD
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-primary/10
                bg-card/30
                p-7
                backdrop-blur-xl
              "
            >
              {/* Decorative Glow */}

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-primary/[0.06]
                  blur-3xl
                "
              />

              <div className="relative z-10">
                <span
                  className="
                    mb-4
                    inline-block
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-primary
                  "
                >
                  Available For Work
                </span>

                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-tight
                    md:text-3xl
                  "
                >
                  Let's Build
                  <br />
                  Something <span className="text-gradient-gold">Great</span>
                </h3>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-foreground/50
                  "
                >
                  I'm always interested in hearing about new projects, creative
                  ideas, and exciting opportunities.
                </p>

                {/* Availability */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-primary/10
                    bg-background/30
                    px-4
                    py-3
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-primary
                      shadow-[0_0_10px_rgba(191,144,0,0.7)]
                    "
                  />

                  <span
                    className="
                      text-xs
                      text-foreground/50
                    "
                  >
                    Open to new opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                SOCIAL CARD
            ================================================= */}

            <div
              className="
                rounded-3xl
                border
                border-primary/10
                bg-card/30
                p-7
                backdrop-blur-xl
              "
            >
              <div className="mb-5">
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-primary
                  "
                >
                  Follow Me
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    text-foreground/40
                  "
                >
                  Let's connect on social media.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.label === "Email" ? undefined : "_blank"}
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
                        scale: 0.95,
                      }}
                      className="
                          group
                          flex
                          h-14
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-primary/10
                          bg-background/30
                          text-foreground/40
                          transition-all
                          duration-300
                          hover:border-primary/30
                          hover:bg-primary/10
                          hover:text-primary
                        "
                      aria-label={social.label}
                    >
                      <Icon
                        className="
                            h-5
                            w-5
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                CONTACT INFO
            ================================================= */}

            <div
              className="
                rounded-3xl
                border
                border-primary/10
                bg-card/30
                p-7
                backdrop-blur-xl
              "
            >
              <div className="space-y-5">
                {/* Email */}

                <a
                  href="mailto:marcoabdo20@gmail.com"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-primary/10
                      bg-primary/5
                      text-primary
                      transition-all
                      duration-300
                      group-hover:border-primary/30
                      group-hover:bg-primary/10
                    "
                  >
                    <Mail className="h-4 w-4" />
                  </div>

                  <div>
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-foreground/30
                      "
                    >
                      Email
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-foreground/70
                        transition-colors
                        group-hover:text-primary
                      "
                    >
                      marcoabdo20@gmail.com
                    </p>
                  </div>
                </a>

                {/* Location */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-primary/10
                      bg-primary/5
                      text-primary
                    "
                  >
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div>
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-foreground/30
                      "
                    >
                      Location
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-foreground/70
                      "
                    >
                      Cairo, Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            FOOTER DECORATION
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
            Let's Create Something Amazing
            <span className="h-px w-12 bg-primary/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
