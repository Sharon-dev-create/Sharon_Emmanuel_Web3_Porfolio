import Link from "next/link";

export default function ArrowLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const content = (
    <>
      {children}{" "}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  const classes = `group inline-flex items-center gap-2 font-mono text-label uppercase tracking-widest border-b border-transparent hover:border-foreground transition-colors duration-300 pb-1 w-fit ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
