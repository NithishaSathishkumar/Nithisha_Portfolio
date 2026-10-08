"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { getExperienceBySlug } from "@/app/data/experiences";

interface ExperiencePageProps {
  params: Promise<{ slug: string }>;
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = use(params);
  const experience = getExperienceBySlug(slug);
  const reduceMotion = useReducedMotion() ?? false;

  if (!experience) {
    notFound();
  }

  const fadeUp = { opacity: 0, y: 30 };
  const visible = { opacity: 1, y: 0 };
  const spring = { type: "spring" as const, stiffness: 70, damping: 20 };

  return (
    <main className="project-page">
      {/* Back navigation */}
      <nav className="project-nav">
        <div className="shell">
          <Link href="/#experience" className="project-nav__back">
            <i className="fa-solid fa-arrow-left" aria-hidden />
            Back to experience
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="project-hero">
        <div className="shell">
          <motion.div
            className="project-hero__content"
            initial={reduceMotion ? undefined : fadeUp}
            animate={reduceMotion ? undefined : visible}
            transition={{ ...spring, delay: 0.1 }}
          >
            <span className="experience-hero__period">{experience.period}</span>
            <h1 className="project-hero__title">{experience.title}</h1>
            <p className="experience-hero__org">
              {experience.org}
              {experience.location ? ` · ${experience.location}` : ""}
            </p>
            <p className="project-hero__tagline">{experience.tagline}</p>
            <div className="project-hero__meta">
              <span>
                <i className="fa-solid fa-calendar" aria-hidden />
                {experience.period}
              </span>
              <span>
                <i className="fa-solid fa-building" aria-hidden />
                {experience.org}
              </span>
              {experience.location && (
                <span>
                  <i className="fa-solid fa-location-dot" aria-hidden />
                  {experience.location}
                </span>
              )}
            </div>
            {experience.website && (
              <div className="project-hero__actions">
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <i className="fa-solid fa-external-link" aria-hidden />
                  Visit {experience.org}
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Demo / media */}
      {(experience.demoVideoUrl || experience.heroImage) && (
        <section className="project-media">
          <div className="shell">
            <motion.div
              className="project-media__frame"
              initial={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ ...spring, delay: 0.2 }}
            >
              {experience.demoVideoUrl ? (
                <div className="project-media__video">
                  <iframe
                    src={experience.demoVideoUrl}
                    title={`${experience.title} demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : experience.heroImage ? (
                <div className="project-media__placeholder">
                  <Image
                    src={experience.heroImage}
                    alt={`${experience.org} preview`}
                    fill
                    sizes="(max-width: 1140px) 100vw, 1140px"
                    className="project-media__img"
                    priority
                  />
                </div>
              ) : null}
            </motion.div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="project-section">
        <div className="shell">
          <motion.div
            className="project-description"
            initial={reduceMotion ? undefined : fadeUp}
            whileInView={reduceMotion ? undefined : visible}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <h2 className="project-section__title">Overview</h2>
            <p className="project-description__text">{experience.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Metrics / data */}
      {experience.metrics.length > 0 && (
        <section className="project-section project-section--alt">
          <div className="shell">
            <motion.h2
              className="project-section__title"
              initial={reduceMotion ? undefined : fadeUp}
              whileInView={reduceMotion ? undefined : visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={spring}
            >
              By the numbers
            </motion.h2>
            <div className="metrics-grid">
              {experience.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="metric-card"
                  initial={reduceMotion ? undefined : fadeUp}
                  whileInView={reduceMotion ? undefined : visible}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...spring, delay: reduceMotion ? 0 : i * 0.06 }}
                >
                  <span className="metric-card__value">{m.value}</span>
                  <span className="metric-card__label">{m.label}</span>
                  {m.hint && (
                    <span className="metric-card__hint">{m.hint}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features / features I worked on */}
      <section className="project-section">
        <div className="shell">
          <motion.h2
            className="project-section__title"
            initial={reduceMotion ? undefined : fadeUp}
            whileInView={reduceMotion ? undefined : visible}
            viewport={{ once: true, amount: 0.3 }}
            transition={spring}
          >
            Features I worked on
          </motion.h2>
          <div className="feature-rows">
            {experience.features.map((feature, i) => {
              const isReversed = i % 2 === 1;
              return (
                <motion.article
                  key={feature.title}
                  className={`feature-row${
                    isReversed ? " feature-row--reverse" : ""
                  }`}
                  initial={reduceMotion ? undefined : fadeUp}
                  whileInView={reduceMotion ? undefined : visible}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ ...spring, delay: reduceMotion ? 0 : i * 0.06 }}
                >
                  <div className="feature-row__media">
                    {feature.videoUrl ? (
                      <div className="feature-row__media-frame feature-row__media-frame--video">
                        <iframe
                          src={feature.videoUrl}
                          title={`${feature.title} demo`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : feature.image ? (
                      <div
                        className={`feature-row__media-frame${
                          feature.imageFit === "contain"
                            ? " feature-row__media-frame--contain"
                            : ""
                        }`}
                      >
                        <Image
                          src={feature.image}
                          alt={`${feature.title} preview`}
                          fill
                          sizes="(max-width: 900px) 100vw, 50vw"
                          className={`feature-row__img${
                            feature.imageFit === "contain"
                              ? " feature-row__img--contain"
                              : ""
                          }`}
                        />
                      </div>
                    ) : (
                      <div
                        className="feature-row__media-frame feature-row__media-frame--icon"
                        aria-hidden
                      >
                        <span className="feature-row__index">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <i className={feature.icon} />
                      </div>
                    )}

                    {feature.tags && feature.tags.length > 0 && (
                      <div className="feature-row__tags">
                        {feature.tags.map((tag) => (
                          <span key={tag} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {feature.examples && feature.examples.length > 0 && (
                      <div className="feature-row__examples">
                        <span className="feature-row__examples-label">
                          Live examples
                        </span>
                        <div className="feature-row__examples-list">
                          {feature.examples.map((example) => (
                            <a
                              key={example.url}
                              href={example.url}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="feature-row__example"
                            >
                              {example.label}
                              <i
                                className="fa-solid fa-arrow-up-right-from-square"
                                aria-hidden
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="feature-row__content">
                    <span className="feature-row__eyebrow">
                      <span className="feature-row__eyebrow-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="feature-row__eyebrow-label">
                        Feature
                      </span>
                    </span>
                    <h3 className="feature-row__title">{feature.title}</h3>
                    <p className="feature-row__desc">{feature.description}</p>

                    {feature.bullets && feature.bullets.length > 0 && (
                      <ul className="feature-row__bullets">
                        {feature.bullets.map((bullet) => (
                          <li key={bullet} className="feature-row__bullet">
                            <i
                              className="fa-solid fa-check feature-row__bullet-icon"
                              aria-hidden
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {feature.liveUrl && (
                      <a
                        href={feature.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="feature-row__link"
                      >
                        View live
                        <i className="fa-solid fa-arrow-right" aria-hidden />
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      {experience.tools.length > 0 && (
        <section className="project-section project-section--alt">
          <div className="shell">
            <motion.h2
              className="project-section__title"
              initial={reduceMotion ? undefined : fadeUp}
              whileInView={reduceMotion ? undefined : visible}
              viewport={{ once: true, amount: 0.3 }}
              transition={spring}
            >
              Tools & Technologies
            </motion.h2>
            <motion.div
              className="tools-grid"
              initial={reduceMotion ? undefined : fadeUp}
              whileInView={reduceMotion ? undefined : visible}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...spring, delay: 0.1 }}
            >
              {experience.tools.map((tool) => (
                <div key={tool.name} className="tool-card">
                  <span className="tool-card__name">{tool.name}</span>
                  <span className="tool-card__category">{tool.category}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Impact & learnings */}
      {(experience.impact || experience.learnings) && (
        <section className="project-section">
          <div className="shell">
            <div className="insights-grid">
              {experience.impact && (
                <motion.div
                  className="insight-card"
                  initial={reduceMotion ? undefined : fadeUp}
                  whileInView={reduceMotion ? undefined : visible}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={spring}
                >
                  <h3 className="insight-card__title">
                    <i className="fa-solid fa-chart-line" aria-hidden />
                    Impact
                  </h3>
                  <p className="insight-card__text">{experience.impact}</p>
                </motion.div>
              )}
              {experience.learnings && (
                <motion.div
                  className="insight-card"
                  initial={reduceMotion ? undefined : fadeUp}
                  whileInView={reduceMotion ? undefined : visible}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...spring, delay: 0.1 }}
                >
                  <h3 className="insight-card__title">
                    <i className="fa-solid fa-lightbulb" aria-hidden />
                    What I Learned
                  </h3>
                  <p className="insight-card__text">{experience.learnings}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="project-cta">
        <div className="shell">
          <motion.div
            className="project-cta__inner"
            initial={reduceMotion ? undefined : fadeUp}
            whileInView={reduceMotion ? undefined : visible}
            viewport={{ once: true, amount: 0.3 }}
            transition={spring}
          >
            <h2 className="project-cta__title">Interested in working together?</h2>
            <p className="project-cta__text">
              I&apos;m currently looking for full-time opportunities where I can contribute
              my skills and continue growing as a developer.
            </p>
            <div className="project-cta__actions">
              <Link href="/#contact" className="btn-primary">
                Get in touch
                <i className="fa-solid fa-arrow-right" aria-hidden />
              </Link>
              <Link href="/#experience" className="btn-ghost">
                View more experience
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
            <Link href="/#header">Back to top</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
