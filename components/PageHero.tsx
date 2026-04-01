export default function PageHero({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <section className="page-header">
      <div className="page-header-card glass-panel">
        <div className="section-kicker">{kicker}</div>
        <h1 className="page-title" style={{ marginTop: 12 }}>
          {title}
        </h1>
        <p className="body-copy" style={{ marginTop: 18, maxWidth: 860 }}>
          {body}
        </p>
      </div>
    </section>
  );
}
