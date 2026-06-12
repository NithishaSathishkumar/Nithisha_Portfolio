"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const viewport = { once: true, amount: 0.2 as const };

const springTrans = { type: "spring" as const, stiffness: 80, damping: 22 };

export function About() {
  const reduceMotion = useReducedMotion() ?? false;

  const fadeUp = { opacity: 0, y: 48 };

  return (
    <>
      {/* About Section */}
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
                Based in Seattle ·{" "}
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
              <p>
                With a strong foundation in computer science from UW Bothell and
                hands-on experience building production applications, I bring both
                technical expertise and a user-centered mindset to every project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section--alt">
        <div className="shell">
          <motion.div
            className="section__head"
            initial={reduceMotion ? undefined : fadeUp}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={viewport}
            transition={springTrans}
          >
            <div>
              <p className="section__label">02 · Skills</p>
              <h2 className="section__title">Technical expertise</h2>
            </div>
          </motion.div>

          <div className="skills-section-grid">
            <motion.div
              className="skill-category-card"
              initial={reduceMotion ? undefined : fadeUp}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...springTrans, delay: 0.1 }}
            >
              <h4 className="skill-category__title">Languages</h4>
              <div className="skill-bars">
                <div className="skill-bar">
                  <div className="skill-bar__header">
                    <span>Python</span>
                    <span className="skill-bar__level">Advanced</span>
                  </div>
                  <div className="skill-bar__track">
                    <motion.div
                      className="skill-bar__fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    />
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar__header">
                    <span>TypeScript / JavaScript</span>
                    <span className="skill-bar__level">Advanced</span>
                  </div>
                  <div className="skill-bar__track">
                    <motion.div
                      className="skill-bar__fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar__header">
                    <span>Java / C++</span>
                    <span className="skill-bar__level">Proficient</span>
                  </div>
                  <div className="skill-bar__track">
                    <motion.div
                      className="skill-bar__fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="skill-bar__header">
                    <span>Swift / Go</span>
                    <span className="skill-bar__level">Intermediate</span>
                  </div>
                  <div className="skill-bar__track">
                    <motion.div
                      className="skill-bar__fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="skill-category-card"
              initial={reduceMotion ? undefined : fadeUp}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...springTrans, delay: 0.2 }}
            >
              <h4 className="skill-category__title">Frontend & Frameworks</h4>
              <div className="skill-tags">
                <span className="skill-tag skill-tag--primary">React</span>
                <span className="skill-tag skill-tag--primary">Next.js</span>
                <span className="skill-tag skill-tag--primary">React Native</span>
                <span className="skill-tag">TailwindCSS</span>
                <span className="skill-tag">Framer Motion</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </motion.div>

            <motion.div
              className="skill-category-card"
              initial={reduceMotion ? undefined : fadeUp}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...springTrans, delay: 0.3 }}
            >
              <h4 className="skill-category__title">AI/ML & APIs</h4>
              <div className="skill-tags">
                <span className="skill-tag skill-tag--primary">OpenAI API</span>
                <span className="skill-tag skill-tag--primary">TensorFlow</span>
                <span className="skill-tag">Computer Vision</span>
                <span className="skill-tag">Gemini API</span>
                <span className="skill-tag">Stripe API</span>
                <span className="skill-tag">Zoom API</span>
              </div>
            </motion.div>

            <motion.div
              className="skill-category-card"
              initial={reduceMotion ? undefined : fadeUp}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...springTrans, delay: 0.4 }}
            >
              <h4 className="skill-category__title">Tools & Cloud</h4>
              <div className="skill-tags">
                <span className="skill-tag">AWS Lambda</span>
                <span className="skill-tag">AWS Amplify</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Supabase</span>
                <span className="skill-tag">Figma</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="shell">
          <motion.div
            className="section__head"
            initial={reduceMotion ? undefined : fadeUp}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={viewport}
            transition={springTrans}
          >
            <div>
              <p className="section__label">03 · Experience</p>
              <h2 className="section__title">Where I&apos;ve contributed</h2>
            </div>
          </motion.div>

          <div className="experience-grid">
            {[
              {
                period: "Jun 2025 – Present",
                title: "Full Stack Developer",
                org: "Vitals Vault",
                description:
                  "Led development of revenue-critical features across checkout, onboarding, and scheduling using React, Next.js, TailwindCSS, Framer Motion, and Supabase — supporting 1,000+ active users. Built serverless AWS Lambda pipeline automating 1,000+ onboarding submissions, reducing manual operations by 80%. Developed multi-step Stripe checkout processing 1,000+ payments. Integrated AI-powered workflows using OpenAI and Gemini APIs.",
              },
              {
                period: "Mar 2025 – Jun 2025",
                title: "Full Stack Web Developer",
                org: "Stem of Other",
                description:
                  "Architected a STEM education game platform using React, Next.js, and Python, serving 2,000+ K–12 students nationwide. Built and optimized 15+ cross-platform features improving performance by 30%. Integrated Clerk authentication and Stripe payments supporting 100+ monthly transactions. Onboarded and mentored 5+ developers while enforcing coding standards.",
              },
              {
                period: "Mar 2024 – Dec 2024",
                title: "Peer Coach & Student Leader",
                org: "University of Washington Bothell",
                description:
                  "Led onboarding for 40+ first-year CS students — delivered 1-on-1 mentorship, academic guidance, and career planning sessions resulting in 95% retention rate.",
              },
              {
                period: "Mar 2022 – Jun 2023",
                title: "CS Teaching Assistant",
                org: "University of Washington Bothell",
                description:
                  "Supported 35+ students in data structures & algorithms — created supplemental materials, held office hours, and improved average exam scores by 15%.",
              },
            ].map((exp, i) => (
              <motion.div
                key={exp.title}
                className="experience-card"
                initial={reduceMotion ? undefined : fadeUp}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...springTrans, delay: i * 0.1 }}
              >
                <span className="experience-card__period">{exp.period}</span>
                <h3 className="experience-card__title">{exp.title}</h3>
                <span className="experience-card__org">{exp.org}</span>
                <p className="experience-card__desc">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section section--alt">
        <div className="shell">
          <motion.div
            className="section__head"
            initial={reduceMotion ? undefined : fadeUp}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={viewport}
            transition={springTrans}
          >
            <div>
              <p className="section__label">04 · Education</p>
              <h2 className="section__title">Academic background</h2>
            </div>
          </motion.div>

          <div className="education-grid">
            <motion.div
              className="education-card education-card--featured"
              initial={reduceMotion ? undefined : fadeUp}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...springTrans, delay: 0.1 }}
            >
              <div className="education-card__year">2025</div>
              <div className="education-card__content">
                <h3 className="education-card__title">University of Washington Bothell</h3>
                <p className="education-card__degree">B.S. Computer Science & Software Engineering</p>
                <span className="education-card__gpa">GPA: 3.87</span>
              </div>
            </motion.div>
            <motion.div
              className="education-card"
              initial={reduceMotion ? undefined : fadeUp}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...springTrans, delay: 0.2 }}
            >
              <div className="education-card__year">2022</div>
              <div className="education-card__content">
                <h3 className="education-card__title">Cascadia College</h3>
                <p className="education-card__degree">Running Start Program</p>
                <span className="education-card__gpa">GPA: 3.91</span>
              </div>
            </motion.div>
            <motion.div
              className="education-card"
              initial={reduceMotion ? undefined : fadeUp}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ ...springTrans, delay: 0.3 }}
            >
              <div className="education-card__year">2022</div>
              <div className="education-card__content">
                <h3 className="education-card__title">Bothell High School</h3>
                <p className="education-card__degree">High School Diploma</p>
                <span className="education-card__gpa">GPA: 3.85</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section">
        <div className="shell">
          <motion.div
            className="section__head"
            initial={reduceMotion ? undefined : fadeUp}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={viewport}
            transition={springTrans}
          >
            <div>
              <p className="section__label">05 · Achievements</p>
              <h2 className="section__title">Recognition & certifications</h2>
            </div>
          </motion.div>

          <div className="achievements-grid">
            {[
              {
                icon: "fa-solid fa-trophy",
                title: "Dean's List Awards",
                description:
                  "Recognized for academic excellence every quarter from Sep 2022 to Jun 2025 at UW Bothell",
              },
              {
                icon: "fa-solid fa-code",
                title: "Hackathon Winner",
                description:
                  "Built SignTalk in 48 hours — awarded for innovation in accessibility technology",
              },
              {
                icon: "fa-solid fa-users",
                title: "Leadership Award",
                description:
                  "Recognized for outstanding peer mentorship and facilitating success for 40+ students",
              },
              {
                icon: "fa-solid fa-certificate",
                title: "AWS Cloud Practitioner",
                description:
                  "Certified in cloud fundamentals, architecture, and AWS services",
              },
            ].map((achievement, i) => (
              <motion.div
                key={achievement.title}
                className="achievement-card"
                initial={reduceMotion ? undefined : fadeUp}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...springTrans, delay: i * 0.1 }}
              >
                <div className="achievement-card__icon">
                  <i className={achievement.icon} aria-hidden />
                </div>
                <h3 className="achievement-card__title">{achievement.title}</h3>
                <p className="achievement-card__desc">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
