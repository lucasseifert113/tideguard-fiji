export default function StatCard({
  label,
  value,
  copy,
}: {
  label: string;
  value: string;
  copy: string;
}) {
  return (
    <div className="stat-card glass-panel">
      <div className="label-small">{label}</div>
      <div className="card-number">{value}</div>
      <p className="body-copy" style={{ marginTop: 12 }}>
        {copy}
      </p>
    </div>
  );
}
