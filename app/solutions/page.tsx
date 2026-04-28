import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore climate action and resilience solutions for Fiji's coastal communities. From nature-based protection to adaptation planning and planned relocation.",
};

export default function SolutionsPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Solutions"
        title="Climate action here means resilience, adaptation, and community support."
        body="This project does not pretend there is one easy fix. It presents a realistic response mix: better planning, stronger protection, nature-based adaptation, clearer public information, and planned relocation when safer in-place options are no longer enough."
      />

      <section className="section-block">
        <div className="image-grid">
          <div className="image-card image-card--tall glass-panel">
            <Image
              src="/mangroves.jpg"
              alt="Mangroves protecting shoreline"
              fill
              className="section-image"
            />
          </div>

          <div className="feature-card glass-panel">
            <div className="section-kicker">Nature-based resilience</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              Protection can work with the coast, not just against it.
            </h2>
            <p className="body-copy" style={{ marginTop: 16 }}>
              Mangroves and restored coastal ecosystems can reduce erosion,
              absorb wave energy, and improve shoreline resilience while also
              supporting biodiversity and local livelihoods.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="cards-grid">
          <div className="content-card glass-panel">
            <h3 className="card-title">Resilience planning</h3>
            <p className="body-copy">
              Governments and partners can use assessments, local consultation,
              and risk mapping to prioritize where support is needed first.
            </p>
          </div>

          <div className="content-card glass-panel">
            <h3 className="card-title">Nature-based protection</h3>
            <p className="body-copy">
              Mangroves, revegetation, and ecosystem restoration can help stabilize
              coastlines and reduce physical exposure.
            </p>
          </div>

          <div className="content-card glass-panel">
            <h3 className="card-title">Planned relocation</h3>
            <p className="body-copy">
              In severe cases, communities may need structured relocation that
              protects dignity, land connections, and long-term livelihood options.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
