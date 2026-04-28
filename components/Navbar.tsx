import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/problem", label: "Problem" },
  { href: "/impacts", label: "Impacts" },
  { href: "/solutions", label: "Solutions" },
  { href: "/risk-map", label: "Risk Map" },
  { href: "/infographic", label: "Infographic" },
  { href: "/sources", label: "Sources" },
];

export default function Navbar() {
  return (
    <header className="nav-shell">
      <div className="container-shell">
        <div className="nav-inner glass-panel">
          <Link href="/" className="brand-link">
            <span className="brand-logo-shell">
              <Image
                src="/tideguard-logo.jpg"
                alt="TideGuard logo"
                width={42}
                height={42}
                className="brand-logo"
              />
            </span>

            <span className="brand-copy">
              <span className="brand-name">TideGuard</span>
              <span className="brand-tag">Climate Action • Fiji</span>
            </span>
          </Link>

          <nav className="nav-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Link href="/risk-map" className="button-secondary">
              Explore Risk
            </Link>
            <a
              href="https://www.paypal.biz/seifertsites"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Donate
            </a>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
