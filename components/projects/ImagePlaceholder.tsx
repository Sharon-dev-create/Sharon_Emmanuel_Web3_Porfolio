import Image from "next/image";

export default function ImagePlaceholder({
  label,
  image,
  href,
  className = "",
}: {
  label: string;
  image?: string;
  href?: string;
  className?: string;
}) {
  const content = image ? (
    <>
      <Image
        src={image}
        alt={label}
        fill
        sizes="(max-width: 768px) 100vw, 42vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      {href && (
        <span className="absolute inset-0 flex items-center justify-center bg-foreground/0 font-mono text-label uppercase tracking-widest text-background opacity-0 transition-all duration-500 group-hover:bg-foreground/75 group-hover:opacity-100">
          OPEN PROJECT <span className="ml-2 transition-transform duration-500 group-hover:translate-x-1">→</span>
        </span>
      )}
    </>
  ) : (
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
  );

  return (
    <div
      className={`${image ? "relative overflow-hidden" : "border border-editorial-border bg-surface p-1 relative overflow-hidden"} ${className}`}
    >
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="absolute inset-0 z-10">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
