import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "Research sources grounding TideGuard in climate vulnerability assessments, academic studies on relocation, and development institution reports on coastal resilience in Fiji.",
};

const sources = [
  {
    title: "Government of Fiji & World Bank — Climate Vulnerability Assessment",
    url: "https://www.worldbank.org/en/country/pacificislands/publication/climate-vulnerability-assessment-fiji",
    copy: "National climate risk context, infrastructure vulnerability, and resilience planning background.",
  },
  {
    title: "UNFCCC — Fiji and climate change impacts",
    url: "https://unfccc.int/topics/adaptation-and-resilience",
    copy: "Accessible explanation of sea-level rise, flooding, and adaptation pressure from the UN Framework Convention on Climate Change.",
  },
  {
    title: "McNamara & Des Combes (2015)",
    url: "https://doi.org/10.1007/978-3-642-31427-8_9",
    copy: "Climate relocation and the human implications of leaving place behind. Published in Climate Change and Disaster Risk Management.",
  },
  {
    title: "McMichael, Katonivualiku, & Powell (2019)",
    url: "https://doi.org/10.1016/j.worlddev.2019.104662",
    copy: "Planned relocation, community experience, and social impacts in Fiji. Published in World Development.",
  },
  {
    title: "Asian Development Bank — Coastal resilience work",
    url: "https://www.adb.org/what-we-do/topics/climate-change-disaster-risk-management/main",
    copy: "Practical adaptation and resilience investment examples from the ADB's climate change and disaster risk management program.",
  },
  {
    title: "UNDP Climate Promise — Small Island Developing States",
    url: "https://climatepromise.undp.org/what-we-do/where-we-work/pacific",
    copy: "Connects Fiji's situation to SDG 13 and the broader climate justice context for Pacific island nations.",
  },
];

export default function SourcesPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Sources"
        title="The interface is simple. The research should not be weak."
        body="This project is grounded in reports, development institution material, and scholarly work on adaptation and relocation in Fiji. Click any source to read the original."
      />

      <section className="section-block">
        <div className="sources-grid">
          {sources.map((source) => (
            <a
              key={source.title}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="sources-card glass-panel source-link"
            >
              <h3 className="card-title">{source.title} ↗</h3>
              <p>{source.copy}</p>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
