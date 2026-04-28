import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Community Impacts",
  description:
    "Climate change impacts Fiji's coastal communities beyond physical damage. Understand the social, economic, and cultural pressures created by sea-level rise and coastal hazards.",
};

export default function ImpactsPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Community Impacts"
        title="The hardest damage is often social, not just physical."
        body="Coastal climate risk affects more than buildings. It affects where people live, how they farm, how they move, what they can afford, and whether they can remain connected to place, memory, and identity."
      />

      <section className="section-block">
        <div className="cards-grid">
          <div className="content-card glass-panel">
            <h3 className="card-title">Homes and infrastructure</h3>
            <p className="body-copy">
              Repeated hazards can damage houses, roads, schools, seawalls, and
              public services that communities depend on daily.
            </p>
          </div>

          <div className="content-card glass-panel">
            <h3 className="card-title">Livelihoods</h3>
            <p className="body-copy">
              Fisheries, agriculture, and local economies can all be disrupted
              when land and water systems change.
            </p>
          </div>

          <div className="content-card glass-panel">
            <h3 className="card-title">Culture and identity</h3>
            <p className="body-copy">
              Relocation can mean separation from ancestral land, local history,
              burial grounds, and community patterns.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="feature-grid">
          <div className="wide-card glass-panel">
            <div className="section-kicker">Why this is difficult</div>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              Adaptation creates tradeoffs.
            </h2>
            <p className="body-copy" style={{ marginTop: 16 }}>
              Staying in place may require more protection, better planning, and
              sustained investment. Moving inland may lower direct coastal exposure,
              but it can also create financial strain, emotional loss, and new
              pressure on livelihoods.
            </p>
          </div>

          <div className="image-card glass-panel">
            <Image
              src="/fiji-coast.jpg"
              alt="Fiji coastal erosion"
              fill
              className="section-image"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
