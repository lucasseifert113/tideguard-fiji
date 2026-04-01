"use client";

import dynamic from "next/dynamic";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import { coastalRiskLocations } from "../../lib/coastal-risk-data";

const CoastalRiskMap = dynamic(() => import("../../components/CoastalRiskMap"), {
  ssr: false,
  loading: () => <div className="map-loading">Loading interactive map...</div>,
});

export default function RiskMapPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Interactive Coastal Risk Map"
        title="A simple map view makes the issue feel real faster."
        body="This is an educational prototype map. It highlights community case studies and broader coastal watch zones so users can connect climate risk with real places in Fiji. It should be presented as a public awareness feature, not an official engineering-grade hazard platform."
      />

      <section className="section-block">
        <div className="map-panel glass-panel">
          <CoastalRiskMap />
        </div>
      </section>

      <section className="section-block">
        <div className="cards-grid">
          {coastalRiskLocations.map((location) => (
            <div key={location.name} className="content-card glass-panel">
              <div className="label-small">{location.level} concern</div>
              <h3 className="card-title" style={{ marginTop: 10 }}>
                {location.name}
              </h3>
              <p className="body-copy">
                <strong>Main issue:</strong> {location.issue}
              </p>
              <p className="body-copy" style={{ marginTop: 8 }}>
                {location.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
