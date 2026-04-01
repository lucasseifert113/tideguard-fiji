import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";

const sources = [
  {
    title: "Government of Fiji & World Bank — Climate Vulnerability Assessment",
    copy: "Use this for national climate risk context, infrastructure vulnerability, and resilience planning background.",
  },
  {
    title: "UNFCCC — Fiji and climate change impacts",
    copy: "Use this for accessible explanation of sea-level rise, flooding, and adaptation pressure.",
  },
  {
    title: "McNamara & Des Combes (2015)",
    copy: "Use this for climate relocation and the human implications of leaving place behind.",
  },
  {
    title: "McMichael, Katonivualiku, & Powell (2019)",
    copy: "Use this for planned relocation, community experience, and social impacts in Fiji.",
  },
  {
    title: "Asian Development Bank — Coastal resilience work",
    copy: "Use this for practical adaptation and resilience investment examples.",
  },
  {
    title: "UNDP Climate Promise — Small Island Developing States",
    copy: "Use this to connect Fiji’s situation to SDG 13 and climate justice context.",
  },
];

export default function SourcesPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Sources"
        title="The interface is simple. The research should not be weak."
        body="Use this page to show that the project is grounded in reports, development institution material, and scholarly work on adaptation and relocation in Fiji."
      />

      <section className="section-block">
        <div className="sources-grid">
          {sources.map((source) => (
            <div key={source.title} className="sources-card glass-panel">
              <h3 className="card-title">{source.title}</h3>
              <p>{source.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
