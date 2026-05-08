"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { FormEvent } from "react";

const viewport = { once: true, amount: 0.28 as const };

export function Contact() {
  const reduceMotion = useReducedMotion() ?? false;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section id="contact" className="section section--contact section--reveal">
      <div className="shell">
        <motion.div
          className="section__head"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ type: "spring", stiffness: 75, damping: 22 }}
        >
          <div>
            <p className="section__label">03 · Contact</p>
            <h2 className="section__title">Let&apos;s build something</h2>
          </div>
          <p className="section__lede">
            Building a web or mobile product? Need a full-stack partner — I&apos;d
            love to hear what you&apos;re working on.
          </p>
        </motion.div>

        <div className="contact-layout">
          <motion.div
            className="contact-card"
            initial={reduceMotion ? false : { opacity: 0, x: -32 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ type: "spring", stiffness: 70, damping: 22, delay: 0.05 }}
          >
            <h3>Say hello</h3>
            <p>
              Email is best for detailed messages. I try to reply within a couple
              of business days.
            </p>
            <div className="contact-links">
              <a href="mailto:sathishkumar.nithisha@gmail.com">
                <i className="fa-solid fa-envelope" aria-hidden />
                sathishkumar.nithisha@gmail.com
              </a>
              <span>
                <i className="fa-solid fa-phone" aria-hidden />
                425-364-0364
              </span>
            </div>
            <div className="social-row">
              <a
                href="https://github.com/NithishaSathishkumar"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                href="https://linkedin.com/in/nithishasathishkumar"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
            </div>
            <a
              href="/myResume/Nithisha_Resume_Portfolio.pdf"
              download
              className="btn-primary"
            >
              Download résumé
              <i className="fa-solid fa-file-arrow-down" aria-hidden />
            </a>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={reduceMotion ? false : { opacity: 0, x: 32 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ type: "spring", stiffness: 70, damping: 22, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What would you like to collaborate on?"
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary"
                whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                Send message
                <i className="fa-solid fa-paper-plane" aria-hidden />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} Nithisha Sathishkumar ·{" "}
          <a href="#header">Back to top</a>
        </p>
      </footer>
    </section>
  );
}
