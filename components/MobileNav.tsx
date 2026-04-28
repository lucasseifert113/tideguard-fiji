"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/problem", label: "Problem" },
  { href: "/impacts", label: "Impacts" },
  { href: "/solutions", label: "Solutions" },
  { href: "/risk-map", label: "Risk Map" },
  { href: "/infographic", label: "Infographic" },
  { href: "/sources", label: "Sources" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        className="hamburger-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        <span className={`hamburger-icon ${open ? "hamburger-icon--open" : ""}`}>
          <span />
          <span />
          <span />
        </span>
      </button>

      {open && (
        <div className="mobile-menu glass-panel">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="mobile-menu__link"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.paypal.biz/seifertsites"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary mobile-menu__donate"
            onClick={() => setOpen(false)}
          >
            Donate
          </a>
        </div>
      )}
    </div>
  );
}
