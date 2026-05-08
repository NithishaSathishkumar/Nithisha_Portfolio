"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Marquee } from "./Marquee";

const ROLES = [
  "Full-stack developer",
  "Web · iOS · Android",
  "APIs & cloud backends",
  "Product-minded shipping",
];

function usePointerParallax(intensity: number) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 28, damping: 19, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 28, damping: 19, mass: 0.45 });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const py = ((e.clientY - r.top) / r.height - 0.5) * 2;
    x.set(px * intensity);
    y.set(py * intensity);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return { x: springX, y: springY, onMove, onLeave };
}

function heroContainerVariants(reduce: boolean) {
  if (reduce) {
    return {
      show: { transition: { staggerChildren: 0 } },
    };
  }
  return {
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.04 },
    },
  };
}

function heroItemVariants(reduce: boolean) {
  if (reduce) {
    return {
      hidden: { opacity: 1, y: 0 },
      show: { opacity: 1, y: 0 },
    };
  }
  return {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] as const },
    },
  };
}

export function HeroParallax() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const yGrid = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const rotGrid = useTransform(scrollYProgress, [0, 1], [0, -1.5]);
  const yOrbs = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fadeHero = useTransform(scrollYProgress, [0, 0.52], [1, 0.12]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const fadeScrollCue = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const pointer = usePointerParallax(20);
  const mx1 = useTransform(pointer.x, (v) => v * 0.35);
  const my1 = useTransform(pointer.y, (v) => v * 0.32);
  const mx2 = useTransform(pointer.x, (v) => v * -0.48);
  const my2 = useTransform(pointer.y, (v) => v * -0.38);

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  const itemV = heroItemVariants(reduceMotion);
  const containerV = heroContainerVariants(reduceMotion);

  return (
    <section
      id="header"
      className="hero hero--motion hero--alt"
      ref={sectionRef}
      onMouseMove={reduceMotion ? undefined : pointer.onMove}
      onMouseLeave={reduceMotion ? undefined : pointer.onLeave}
    >
      <div className="hero__vignette hero__vignette--alt" aria-hidden />

      <motion.div
        className="hero__bg hero__bg--alt"
        style={{ y: reduceMotion ? 0 : yGlow }}
        aria-hidden
      />
      <motion.div
        className="hero__grid hero__grid--parallax hero__grid--alt"
        style={{
          y: reduceMotion ? 0 : yGrid,
          rotateZ: reduceMotion ? 0 : rotGrid,
        }}
        aria-hidden
      />
      <motion.div
        className="hero__blobs hero__blobs--alt"
        style={{ y: reduceMotion ? 0 : yOrbs }}
        aria-hidden
      >
        <motion.div
          className="hero__blob hero__blob--a hero__blob--alt"
          style={{
            x: reduceMotion ? 0 : mx1,
            y: reduceMotion ? 0 : my1,
          }}
        />
        <motion.div
          className="hero__blob hero__blob--b hero__blob--alt"
          style={{
            x: reduceMotion ? 0 : mx2,
            y: reduceMotion ? 0 : my2,
          }}
        />
        <motion.div
          className="hero__blob hero__blob--c hero__blob--alt"
          style={{
            x: reduceMotion ? 0 : mx1,
            y: reduceMotion ? 0 : my2,
          }}
        />
      </motion.div>

      <motion.div
        className="hero__content hero__content--alt"
        variants={containerV}
        initial="hidden"
        animate="show"
        style={
          reduceMotion
            ? undefined
            : {
                y: yContent,
                opacity: fadeHero,
                scale: scaleHero,
              }
        }
      >
        <motion.p className="hero__eyebrow hero__eyebrow--alt" variants={itemV}>
          Available for projects · Seattle area / remote
        </motion.p>

        <motion.h1 className="hero__wordmark" variants={itemV}>
          <span className="hero__wordmark-brand" aria-hidden>
            <span className="hero__wordmark-part">Nith</span>
            <span className="hero__wordmark-part hero__wordmark-part--caps">
              IS
            </span>
            <span className="hero__wordmark-part">ha.</span>
          </span>
          <span className="visually-hidden">Nithisha Sathishkumar</span>
        </motion.h1>

        <motion.p className="hero__tagline" variants={itemV}>
          App &amp; web developer · full-stack engineer
        </motion.p>

        <motion.p className="hero__subtitle hero__subtitle--alt" variants={itemV}>
          I design and ship software end to end — mobile and web clients, APIs,
          data layers, and the glue in between — with the clarity and craft you
          see on studios&apos; best Framer sites.
        </motion.p>

        <motion.div className="hero__marquee-slot" variants={itemV}>
          <Marquee />
        </motion.div>

        <motion.div className="role-line role-line--alt" variants={itemV}>
          <span className="role-line__label">Now</span>
          <motion.span
            className="role-line__value"
            key={roleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {ROLES[roleIndex]}
          </motion.span>
        </motion.div>

        <motion.div className="hero__actions hero__actions--alt" variants={itemV}>
          <motion.a
            className="btn-primary"
            href="#portfolio"
            whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            Selected work
            <i className="fa-solid fa-arrow-right-long" aria-hidden />
          </motion.a>
          <motion.a
            className="btn-ghost"
            href="#contact"
            whileHover={reduceMotion ? undefined : { scale: 1.01, y: -1 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            Let&apos;s talk
          </motion.a>
        </motion.div>

        <motion.div className="hero__meta hero__meta--alt" variants={itemV}>
          {[
            { strong: "UW Bothell", span: "CS & Software Engineering" },
            { strong: "3.87", span: "GPA" },
            { strong: "Stack", span: "Web · mobile · APIs" },
          ].map((item) => (
            <motion.div
              key={item.strong}
              className="hero__meta-item"
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -3, borderColor: "var(--accent)" }
              }
              transition={{ type: "spring", stiffness: 420, damping: 26 }}
            >
              <strong>{item.strong}</strong>
              <span>{item.span}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-hint"
        style={{ opacity: reduceMotion ? 1 : fadeScrollCue }}
        aria-hidden
      >
        <span>Scroll</span>
        <motion.span
          className="hero__scroll-mouse"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.65, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
