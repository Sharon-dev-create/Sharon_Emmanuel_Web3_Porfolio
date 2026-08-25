export default function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-label uppercase text-foreground/60 ${className}`}
    >
      {children}
    </span>
  );
}
