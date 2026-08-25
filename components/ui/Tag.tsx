export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-label uppercase border border-editorial-border px-3 py-1 text-foreground">
      {children}
    </span>
  );
}
