import Image from "next/image";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";

export default function ProblemPage() {
  return (
    <PageShell>
      <PageHero
        kicker="The Problem"
        title="Fiji’s coastlines face layered climate pressure."
        body="This project focuses on the overlapping risks of sea-level rise, coastal flooding, shoreline erosion, and saltwater intrusion. Together, these pressures can make homes less secure, damage infrastructure, reduce agricultural productivity, and push communities toward difficult adaptation decisions."
      />

      <section className="section-block">
        <div className="image-grid">
          <div className="image-card image-card--tall glass-panel">
            <Image
              src="/fiji-coast.jpg"
              alt="Eroded Fiji coastline"
              fill
              className="section-image"
            />
          </div>

          <div className="feature-card glass-panel">
            <div className="section-kicker">Core hazards</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              Four pressures, one coastline.
            </h2>
            <ul className="clean-list">
              <li>Sea-level rise increases long-term exposure for low-lying communities.</li>
              <li>Coastal flooding damages homes, roads, schools, and essential services.</li>
              <li>Shoreline erosion reduces usable land and weakens settlement stability.</li>
              <li>Saltwater intrusion threatens freshwater systems and agriculture.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="two-column-grid">
          <div className="content-card glass-panel">
            <h3 className="card-title">Sea-level rise</h3>
            <p className="body-copy">
              Low-lying coastal zones face increasing exposure as higher seas and
              stronger storm impacts make disruption more frequent.
            </p>
          </div>

          <div className="content-card glass-panel">
            <h3 className="card-title">Flooding</h3>
            <p className="body-copy">
              Flooding is not only water in homes. It can damage roads, utilities,
              community buildings, and recovery capacity.
            </p>
          </div>

          <div className="content-card glass-panel">
            <h3 className="card-title">Erosion</h3>
            <p className="body-copy">
              Erosion means land loss, weaker natural barriers, and more pressure
              on houses and infrastructure close to shore.
            </p>
          </div>

          <div className="content-card glass-panel">
            <h3 className="card-title">Saltwater intrusion</h3>
            <p className="body-copy">
              Saltwater can reduce crop productivity, disrupt water access, and
              make it harder for communities to maintain livelihoods in place.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
