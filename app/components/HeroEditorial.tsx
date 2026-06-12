"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "AI/ML Engineer",
  "Mobile App Developer",
  "Problem Solver",
];

export function HeroEditorial() {
  const reduceMotion = useReducedMotion() ?? false;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayText(roles[0]);
      return;
    }

    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, reduceMotion]);

  const fadeUp = { opacity: 0, y: 40 };
  const visible = { opacity: 1, y: 0 };
  const spring = { type: "spring" as const, stiffness: 70, damping: 20 };

  return (
    <section id="header" className="hero-ed" aria-labelledby="hero-heading">
      <div className="shell hero-ed__shell">
        <div className="hero-ed__grid">
          <div className="hero-ed__copy">
            <motion.p
              className="hero-ed__eyebrow"
              initial={reduceMotion ? undefined : fadeUp}
              animate={reduceMotion ? undefined : visible}
              transition={{ ...spring, delay: 0.1 }}
            >
              <span className="hero-ed__role" aria-live="polite">
                {displayText}
                <span className="hero-ed__cursor" aria-hidden>|</span>
              </span>
            </motion.p>
            <motion.h1
              id="hero-heading"
              className="hero-ed__title"
              initial={reduceMotion ? undefined : fadeUp}
              animate={reduceMotion ? undefined : visible}
              transition={{ ...spring, delay: 0.2 }}
            >
              Code as craft.
              <br />
              Logic as literature.
            </motion.h1>
            <motion.p
              className="hero-ed__lede"
              initial={reduceMotion ? undefined : fadeUp}
              animate={reduceMotion ? undefined : visible}
              transition={{ ...spring, delay: 0.3 }}
            >
              I&apos;m <strong className="hero__accent-strong">Nithisha Sathishkumar</strong> — a
              full-stack engineer who builds scalable web apps, intelligent AI systems,
              and polished mobile experiences. I turn complex problems into elegant,
              production-ready solutions that users love.
            </motion.p>
            <motion.div
              className="hero-ed__actions"
              initial={reduceMotion ? undefined : fadeUp}
              animate={reduceMotion ? undefined : visible}
              transition={{ ...spring, delay: 0.4 }}
            >
              <Link href="#portfolio" className="btn-primary">
                Explore projects
                <i className="fa-solid fa-arrow-right" aria-hidden />
              </Link>
              <Link href="#contact" className="btn-ghost">
                Let&apos;s talk
              </Link>
            </motion.div>
            <motion.div
              className="hero-ed__stats"
              initial={reduceMotion ? undefined : fadeUp}
              animate={reduceMotion ? undefined : visible}
              transition={{ ...spring, delay: 0.5 }}
            >
              <div className="hero-stat">
                <span className="hero-stat__number">4+</span>
                <span className="hero-stat__label">Projects Shipped</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat__number">3.87</span>
                <span className="hero-stat__label">GPA</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat__number">10+</span>
                <span className="hero-stat__label">Technologies</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="hero-ed__figure"
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.3 }}
          >
            <div className="hero-ed__frame">
              <Image
                src="/image/nithisha.jpg"
                alt="Portrait of Nithisha Sathishkumar"
                width={520}
                height={693}
                className="hero-ed__img"
                priority
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
