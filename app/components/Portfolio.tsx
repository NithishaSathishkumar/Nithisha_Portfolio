"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    image: "/image/signTalk.png",
    title: "SignTalk",
    description:
      "AI/ML sign language recognition from mobile camera — gestures to text and audio in real time for more inclusive communication.",
    href: "https://github.com/NithishaSathishkumar/SignTalk",
    alt: "SignTalk project preview",
  },
  {
    image: "/image/MentorMe.png",
    title: "MentorMe Tutoring Platform",
    description:
      "A web platform connecting learners and tutors with session scheduling, payments, and personalized profiles.",
    href: "https://github.com/NithishaSathishkumar/CSS_481_Project",
    alt: "MentorMe project preview",
  },
  {
    image: "/image/weather.png",
    title: "Weather Application",
    description:
      "Real-time conditions for 100+ locations via OpenWeather API, with a polished UI including dark mode.",
    href: "https://github.com/NithishaSathishkumar/Weather",
    alt: "Weather app preview",
  },
  {
    image: "/image/Hotel Reservation.png",
    title: "Hotel Reservation System",
    description:
      "PostgreSQL schema and queries for reservations and staff — tuned for roughly 20% faster reads on core paths.",
    href: "https://github.com/NithishaSathishkumar/475Final_Project",
    alt: "Hotel reservation project preview",
  },
];

const viewport = { once: true, amount: 0.22 as const };

export function Portfolio() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="portfolio" className="section section--projects section--reveal">
      <div className="shell">
        <motion.div
          className="section__head"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          <div>
            <p className="section__label">02 · Selected work</p>
            <h2 className="section__title">Projects that shipped</h2>
          </div>
          <p className="section__lede">
            Web apps, mobile experiences, and data layers — a snapshot of
            things I&apos;ve built as a full-stack developer.
          </p>
        </motion.div>

        <div className="project-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="project-card"
              initial={reduceMotion ? false : { opacity: 0, y: 56, rotateX: 4 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotateX: 0 }}
              viewport={viewport}
              transition={{
                type: "spring",
                stiffness: 72,
                damping: 20,
                delay: reduceMotion ? 0 : i * 0.07,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -8, transition: { duration: 0.28 } }
              }
            >
              <div className="project-card__media">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  className="project-card__img"
                />
              </div>
              <div className="project-card__body">
                <p className="project-card__index">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.description}</p>
                <a
                  className="project-card__link"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                  <i className="fa-solid fa-arrow-up-right" aria-hidden />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="section-footer-cta"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ delay: reduceMotion ? 0 : 0.2 }}
        >
          <a
            href="https://github.com/NithishaSathishkumar?tab=repositories"
            className="btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            All repositories on GitHub
            <i className="fa-brands fa-github" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
