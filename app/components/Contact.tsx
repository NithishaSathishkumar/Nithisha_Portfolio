"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";

const viewport = { once: true, amount: 0.28 as const };

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const reduceMotion = useReducedMotion() ?? false;
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY", // Replace with your Web3Forms key
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          subject: `Portfolio Contact from ${formData.get("name")}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section section--contact section--reveal">
      <div className="shell">
        <motion.div
          className="contact-inquiry"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ type: "spring", stiffness: 75, damping: 22 }}
        >
          <div className="contact-inquiry__grid">
            <div className="contact-inquiry__copy">
              <h2 className="contact-inquiry__title">Let&apos;s work together</h2>
              <p className="contact-inquiry__lede">
                Looking for a dedicated developer to join your team? I&apos;m
                actively seeking full-time opportunities where I can contribute
                to meaningful products and grow as an engineer.
              </p>
              <div className="contact-links contact-links--editorial">
                <a href="mailto:sathishkumar.nithisha@gmail.com">
                  <i className="fa-solid fa-envelope" aria-hidden />
                  sathishkumar.nithisha@gmail.com
                </a>
                <span>
                  <i className="fa-solid fa-location-dot" aria-hidden />
                  Seattle, WA — Open to relocate
                </span>
              </div>
              <div className="social-row social-row--editorial">
                <a
                  href="https://github.com/NithishaSathishkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  href="https://linkedin.com/in/nithishasathishkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
              </div>
              <a
                href="/myResume/Nithisha_Resume_Portfolio.pdf"
                download
                className="btn-primary btn-primary--inline"
              >
                Download résumé
                <i className="fa-solid fa-file-arrow-down" aria-hidden />
              </a>
            </div>

            <form
              className="contact-inquiry__form"
              onSubmit={handleSubmit}
              noValidate
            >
              {status === "success" && (
                <div className="form-message form-message--success">
                  <i className="fa-solid fa-check-circle" aria-hidden />
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="form-message form-message--error">
                  <i className="fa-solid fa-exclamation-circle" aria-hidden />
                  Something went wrong. Please email me directly.
                </div>
              )}
              <div>
                <label htmlFor="name" className="visually-hidden">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="input-line"
                  placeholder="YOUR NAME"
                  autoComplete="name"
                  required
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <label htmlFor="email" className="visually-hidden">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="input-line"
                  placeholder="YOUR EMAIL ADDRESS"
                  autoComplete="email"
                  required
                  disabled={status === "submitting"}
                />
              </div>
              <div>
                <label htmlFor="message" className="visually-hidden">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="input-line input-line--area"
                  rows={4}
                  placeholder="YOUR MESSAGE"
                  required
                  disabled={status === "submitting"}
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary btn-primary--inline"
                whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  <>
                    Sending...
                    <i className="fa-solid fa-spinner fa-spin" aria-hidden />
                  </>
                ) : (
                  <>
                    Send message
                    <i className="fa-solid fa-paper-plane" aria-hidden />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      <footer className="site-footer site-footer--editorial">
        <div className="shell site-footer__inner">
          <span className="site-footer__brand">Nithisha</span>
          <p className="site-footer__legal">
            © {new Date().getFullYear()} Nithisha Sathishkumar
          </p>
          <div className="site-footer__links">
            <a
              href="https://github.com/NithishaSathishkumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nithishasathishkumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="#header">Back to top</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
