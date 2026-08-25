export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`border border-editorial-border bg-surface p-1 relative overflow-hidden ${className}`}
    >
      <div
        className="w-full h-full flex items-center justify-center grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(26,26,26,0.06) 0px, rgba(26,26,26,0.06) 1px, transparent 1px, transparent 14px)",
        }}
      >
        <span className="font-mono text-label uppercase tracking-widest text-foreground/50 text-center px-6">
          {label}
        </span>
      </div>
    </div>
  );
}
