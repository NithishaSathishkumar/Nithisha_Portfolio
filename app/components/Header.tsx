"use client";

import { useEffect, useState } from "react";
import { HeroEditorial } from "./HeroEditorial";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#portfolio", label: "Work" },
  { href: "#about", label: "About" },
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
            className="logo-link--editorial"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/image/N-2.png"
              alt=""
              width={32}
              height={32}
              className="logo-mark logo-mark--editorial"
              priority
            />
            <span className="logo-wordmark" aria-label="Nithisha Sathishkumar">
              Nithisha
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
            <ul className="nav-links nav-links--editorial">
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

      <HeroEditorial />
    </>
  );
}
