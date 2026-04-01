import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="container-shell">
        <div className="footer-inner glass-panel">
          <div>
            <div className="logo-panel">
              <div className="logo-panel__image">
                <Image
                  src="/tideguard-logo.jpg"
                  alt="TideGuard logo"
                  width={78}
                  height={78}
                  className="brand-logo"
                />
              </div>

              <div>
                <div className="logo-panel__title">TideGuard</div>
                <div className="label-small">SDG 13 • Climate Action</div>
              </div>
            </div>

            <p className="footer-note" style={{ marginTop: 16, maxWidth: 560 }}>
              Educational prototype focused on coastal climate risk, resilience,
              and adaptation in Fiji. Built in a clean, modern presentation style.
            </p>
          </div>

          <div className="footer-links">
            <Link href="/problem">Problem</Link>
            <Link href="/impacts">Impacts</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/risk-map">Risk Map</Link>
            <Link href="/sources">Sources</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
