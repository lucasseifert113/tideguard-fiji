import Image from "next/image";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";

export default function InfographicPage() {
  return (
    <PageShell>
      <PageHero
        kicker="SDG 13 Infographic"
        title="Coastal Communities Under Rising Seas"
        body="A visual overview of the global climate crisis, the specific threat facing Fiji's coastlines, and how TideGuard aims to connect communities to action."
      />

      <section className="section-block">
        <div className="glass-panel" style={{ padding: "32px", borderRadius: "16px", textAlign: "center" }}>
          <p className="body-copy" style={{ marginBottom: "28px", opacity: 0.75 }}>
            This infographic was created as part of the ENTRP 2010 SDG TED Talk project at UW-Platteville by Lucas Seifert &amp; Carson Loshaw.
          </p>
          <div style={{ position: "relative", width: "100%", maxWidth: "900px", margin: "0 auto", borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
            <Image
              src="/sdg13-infographic.png"
              alt="SDG 13 Climate Action Infographic – TideGuard"
              width={1000}
              height={2200}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
          <div style={{ marginTop: "28px" }}>
            <a
              href="/sdg13-infographic.png"
              download="SDG13-TideGuard-Infographic.png"
              className="button-secondary"
              style={{ display: "inline-block" }}
            >
              Download Infographic
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
