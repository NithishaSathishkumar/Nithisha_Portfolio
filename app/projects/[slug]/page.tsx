"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { getProjectBySlug } from "@/app/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);
  const reduceMotion = useReducedMotion() ?? false;

  if (!project) {
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
          <Link href="/#portfolio" className="project-nav__back">
            <i className="fa-solid fa-arrow-left" aria-hidden />
            Back to projects
          </Link>
        </div>
      </nav>

      {/* Hero section */}
      <section className="project-hero">
        <div className="shell">
          <motion.div
            className="project-hero__content"
            initial={reduceMotion ? undefined : fadeUp}
            animate={reduceMotion ? undefined : visible}
            transition={{ ...spring, delay: 0.1 }}
          >
            <div className="project-hero__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="project-hero__title">{project.title}</h1>
            <p className="project-hero__tagline">{project.tagline}</p>
            <div className="project-hero__meta">
              <span>
                <i className="fa-solid fa-calendar" aria-hidden />
                {project.year}
              </span>
              <span>
                <i className="fa-solid fa-clock" aria-hidden />
                {project.duration}
              </span>
              <span>
                <i className="fa-solid fa-user" aria-hidden />
                {project.role}
              </span>
            </div>
            <div className="project-hero__actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <i className="fa-brands fa-github" aria-hidden />
                View on GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <i className="fa-solid fa-external-link" aria-hidden />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project image/video */}
      <section className="project-media">
        <div className="shell">
          <motion.div
            className="project-media__frame"
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.2 }}
          >
            {project.videoUrl ? (
              <div className="project-media__video">
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} demo video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="project-media__placeholder">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 1140px) 100vw, 1140px"
                  className="project-media__img"
                  priority
                />
                <div className="project-media__overlay">
                  <i className="fa-solid fa-play-circle" aria-hidden />
                  <span>Demo video coming soon</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Description */}
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
            <p className="project-description__text">{project.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="project-section project-section--alt">
        <div className="shell">
          <motion.h2
            className="project-section__title"
            initial={reduceMotion ? undefined : fadeUp}
            whileInView={reduceMotion ? undefined : visible}
            viewport={{ once: true, amount: 0.3 }}
            transition={spring}
          >
            Key Features
          </motion.h2>
          <div className="features-grid">
            {project.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={reduceMotion ? undefined : fadeUp}
                whileInView={reduceMotion ? undefined : visible}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...spring, delay: reduceMotion ? 0 : i * 0.08 }}
              >
                <div className="feature-card__icon">
                  <i className={feature.icon} aria-hidden />
                </div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__desc">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="project-section">
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
            {project.tools.map((tool) => (
              <div key={tool.name} className="tool-card">
                <span className="tool-card__name">{tool.name}</span>
                <span className="tool-card__category">{tool.category}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenges & Learnings */}
      {(project.challenges || project.learnings) && (
        <section className="project-section project-section--alt">
          <div className="shell">
            <div className="insights-grid">
              {project.challenges && (
                <motion.div
                  className="insight-card"
                  initial={reduceMotion ? undefined : fadeUp}
                  whileInView={reduceMotion ? undefined : visible}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={spring}
                >
                  <h3 className="insight-card__title">
                    <i className="fa-solid fa-mountain" aria-hidden />
                    Challenges
                  </h3>
                  <p className="insight-card__text">{project.challenges}</p>
                </motion.div>
              )}
              {project.learnings && (
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
                  <p className="insight-card__text">{project.learnings}</p>
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
              <Link href="/#portfolio" className="btn-ghost">
                View more projects
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
