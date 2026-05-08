"use client";

import { useEffect, useState } from "react";
import { HeroParallax } from "./HeroParallax";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="topbar">
        <div className="topbar__inner">
          <Link
            href="#header"
            className="logo-link"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/image/N-2.png"
              alt="Nithisha — home"
              width={40}
              height={40}
              className="logo-mark"
              priority
            />
            <span className="logo-text" aria-label="Nithisha">
              Nith<span className="logo-text--caps">IS</span>ha.
            </span>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </button>

          <nav
            id="primary-nav"
            className={`nav-links-wrap ${menuOpen ? "is-open" : ""}`}
            aria-label="Primary"
          >
            <ul className="nav-links">
              {navLinks.map(({ href, label }) => (
                <li key={href + label}>
                  <a href={href} onClick={() => setMenuOpen(false)}>
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/myResume/Nithisha_Resume_Portfolio.pdf"
                  download
                  className="nav-cta"
                  onClick={() => setMenuOpen(false)}
                >
                  Résumé
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div
        className={`nav-drawer__backdrop ${menuOpen ? "is-open" : ""}`}
        aria-hidden
        onClick={() => setMenuOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setMenuOpen(false);
        }}
        role="presentation"
      />

      <HeroParallax />
    </>
  );
}
