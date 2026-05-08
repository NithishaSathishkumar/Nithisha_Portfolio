"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type TabId = "skills" | "experience" | "education";

const tabs: { id: TabId; label: string }[] = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const viewport = { once: true, amount: 0.25 as const };

const springTrans = { type: "spring" as const, stiffness: 80, damping: 22 };

export function About() {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeTab, setActiveTab] = useState<TabId>("skills");

  const fadeUp = { opacity: 0, y: 48 };

  return (
    <section id="about" className="section section--tight section--reveal">
      <div className="shell">
        <motion.div
          className="section__head"
          initial={reduceMotion ? undefined : fadeUp}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ ...springTrans, delay: 0.04 }}
        >
          <div>
            <p className="section__label">01 · About</p>
            <h2 className="section__title">People-first engineering</h2>
          </div>
          <p className="section__lede">
            Full-stack developer: I ship across{" "}
            <strong className="hero__accent-strong">web</strong>,{" "}
            <strong className="hero__accent-strong">mobile</strong>, and{" "}
            <strong className="hero__accent-strong">backend</strong> — reliable
            systems and interfaces people actually want to use.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-photo"
            initial={reduceMotion ? undefined : fadeUp}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...springTrans, delay: 0.06 }}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -6, rotate: -0.5, transition: { duration: 0.3 } }
            }
          >
            <div className="about-photo__inner">
              <Image
                src="/image/nithisha.jpg"
                alt="Nithisha Sathishkumar"
                width={480}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <p className="about-photo__badge">
              Based in the Pacific Northwest ·{" "}
              <strong>Open to new roles</strong>
            </p>
          </motion.div>

          <motion.div
            className="about-copy"
            initial={reduceMotion ? undefined : fadeUp}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ ...springTrans, delay: 0.12 }}
          >
            <p>
              Hi! I&apos;m Nithisha Sathishkumar, a passionate software developer
              specializing in full-stack development, artificial intelligence,
              and app development. I am dedicated to building innovative
              solutions to solve real-world problems.
            </p>

            <div className="tab-row" role="tablist" aria-label="About sections">
              {tabs.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === id}
                  className={`tab-pill ${activeTab === id ? "is-active" : ""}`}
                  onClick={() => setActiveTab(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div
              id="panel-skills"
              role="tabpanel"
              className={`tab-panel ${activeTab === "skills" ? "is-active" : ""}`}
            >
              <ul className="info-list">
                <li>
                  <strong>Programming languages</strong>
                  Python, C++, Java, Swift
                </li>
                <li>
                  <strong>Web</strong>
                  HTML, CSS, JavaScript, React, Node.js, TypeScript
                </li>
                <li>
                  <strong>AI & ML</strong>
                  TensorFlow, PyTorch, computer vision
                </li>
                <li>
                  <strong>Tools & platforms</strong>
                  Docker, Git, VS Code, Azure, Tableau
                </li>
                <li>
                  <strong>Design</strong>
                  Figma, Lucidchart
                </li>
                <li>
                  <strong>Data</strong>
                  SQL, PostgreSQL, MySQL
                </li>
                <li>
                  <strong>OS</strong>
                  Linux, Windows, macOS
                </li>
              </ul>
            </div>

            <div
              id="panel-experience"
              role="tabpanel"
              className={`tab-panel ${activeTab === "experience" ? "is-active" : ""}`}
            >
              <ul className="info-list timeline">
                <li>
                  <strong>Mar 2024 – Dec 2024 · Student Leader</strong>
                  Peer coach — facilitated onboarding for 40+ first-year students
                  with academic and personal guidance.
                </li>
                <li>
                  <strong>Mar 2022 – Jun 2023 · Teaching Assistant</strong>
                  CS teaching assistant — helped teach programming fundamentals
                  and improved engagement for 35+ students.
                </li>
              </ul>
            </div>

            <div
              id="panel-education"
              role="tabpanel"
              className={`tab-panel ${activeTab === "education" ? "is-active" : ""}`}
            >
              <ul className="info-list timeline">
                <li>
                  <strong>2025 · University of Washington Bothell</strong>
                  B.S. Computer Science & Software Engineering — GPA 3.87
                </li>
                <li>
                  <strong>2022 · Cascadia College</strong>
                  Running Start — GPA 3.91
                </li>
                <li>
                  <strong>2022 · Bothell High School</strong>
                  High school diploma — GPA 3.85
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
