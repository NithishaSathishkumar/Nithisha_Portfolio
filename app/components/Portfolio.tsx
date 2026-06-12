"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";

const viewport = { once: true, amount: 0.22 as const };

export function Portfolio() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="portfolio" className="section section--projects section--reveal">
      <div className="shell">
        <motion.div
          className="section__head section__head--editorial"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
        >
          <div>
            <h2 className="section__title section__title--lg">Selected works</h2>
            <p className="section__lede section__lede--tight">
              Production systems and technical explorations — web, mobile, and
              data layers.
            </p>
          </div>
          <a
            href="https://github.com/NithishaSathishkumar?tab=repositories"
            className="section__archive"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all archive
            <i className="fa-solid fa-arrow-right section__archive-icon" aria-hidden />
          </a>
        </motion.div>

        <div className="project-grid project-grid--editorial">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="project-card project-card--editorial"
            >
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 48 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  type: "spring",
                  stiffness: 72,
                  damping: 20,
                  delay: reduceMotion ? 0 : i * 0.06,
                }}
              >
                <div className="project-card__media project-card__media--video">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    className="project-card__img project-card__img--ed"
                  />
                  {p.highlight && (
                    <span className="project-card__highlight">{p.highlight}</span>
                  )}
                </div>
                <div className="project-card__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="project-card__title project-card__title--ed">
                  {p.title}
                </h3>
                <p className="project-card__desc project-card__desc--ed">
                  {p.tagline}
                </p>
                <span className="project-card__cta">
                  View project <i className="fa-solid fa-arrow-right" aria-hidden />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
