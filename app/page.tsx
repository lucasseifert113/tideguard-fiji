import Image from "next/image";
import Link from "next/link";
import PageShell from "../components/PageShell";
import StatCard from "../components/StatCard";

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy glass-panel">
            <div className="eyebrow">SDG 13 • Climate Action • Fiji</div>
            <h1 className="hero-title">
              Coastal change in Fiji is not abstract.
              <span className="accent-text"> It is already reshaping communities.</span>
            </h1>
            <p className="body-copy hero-description">
              TideGuard is a clean, modern educational website that explains how
              sea-level rise, flooding, erosion, and saltwater intrusion affect
              coastal communities, and what resilience, adaptation, and relocation
              can look like in response.
            </p>

            <div className="actions-row">
              <Link href="/problem" className="button-primary">
                See the problem
              </Link>
              <Link href="/risk-map" className="button-secondary">
                Open risk map
              </Link>
            </div>

            <div className="stats-grid" style={{ marginTop: 18 }}>
              <StatCard
                label="Core risk"
                value="Sea-level rise"
                copy="Low-lying coasts face growing pressure from inundation, erosion, and storm-driven flooding."
              />
              <StatCard
                label="Human impact"
                value="Relocation"
                copy="For some communities, adaptation may include moving homes and infrastructure inland."
              />
              <StatCard
                label="Goal"
                value="Resilience"
                copy="The site turns dense climate research into clear public-facing explanation and action."
              />
            </div>
          </div>

          <div className="hero-visual glass-panel">
            <Image
              src="/fiji-hero.jpg"
              alt="Fiji coastline"
              fill
              priority
              className="hero-image"
            />

            <div className="hero-badge">
              <div className="hero-badge__logo">
                <Image
                  src="/tideguard-logo.jpg"
                  alt="TideGuard logo"
                  width={44}
                  height={44}
                  className="brand-logo"
                />
              </div>

              <div>
                <div className="hero-badge__title">TideGuard</div>
                <div className="hero-badge__meta">Community-centered climate interface</div>
              </div>
            </div>

            <div className="hero-overlay-card">
              <div className="label-small">Why this site exists</div>
              <div className="overlay-title">
                Dense climate reports are useful, but they are not fast enough for
                everyday understanding.
              </div>
              <div className="overlay-copy">
                This site translates the issue into clear pages, visuals, and one
                interactive coastal risk map.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="cards-grid">
          <div className="content-card glass-panel">
            <div className="section-kicker">Problem</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              What is happening?
            </h2>
            <p className="body-copy" style={{ marginTop: 16 }}>
              Fiji’s coastal communities are dealing with repeated flooding,
              shoreline erosion, stronger climate pressures, and saltwater intrusion
              that can damage homes, roads, farmland, and daily life.
            </p>
          </div>

          <div className="content-card glass-panel">
            <div className="section-kicker">People</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              Why it matters
            </h2>
            <p className="body-copy" style={{ marginTop: 16 }}>
              Climate change is not only an environmental issue. It becomes a
              cultural, economic, and social issue when communities face loss of
              land, identity, and long-term stability.
            </p>
          </div>

          <div className="content-card glass-panel">
            <div className="section-kicker">Response</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              What this shows
            </h2>
            <p className="body-copy" style={{ marginTop: 16 }}>
              The website breaks the issue into problem, impacts, solutions,
              sources, and a map-based view so the project feels concrete instead
              of vague.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block donate-section">
        <div className="content-card glass-panel" style={{ textAlign: "center", padding: "48px 24px" }}>
          <div className="section-kicker">Support</div>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Help protect coastal communities
          </h2>
          <p className="body-copy" style={{ marginTop: 18, maxWidth: 640, margin: "18px auto 0" }}>
            Donations support climate education, community resilience research,
            and tools that make coastal risk easier to understand and act on.
            Every contribution helps keep this work accessible and growing.
          </p>
          <div style={{ marginTop: 28 }}>
            <a
              href="https://www.paypal.biz/seifertsites"
              target="_blank"
              rel="noopener noreferrer"
              className="donate-button"
            >
              Donate via PayPal
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
