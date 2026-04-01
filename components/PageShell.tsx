export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="page-shell container-shell">{children}</main>;
}
