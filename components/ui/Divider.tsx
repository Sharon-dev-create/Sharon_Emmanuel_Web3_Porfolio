export default function Divider({ className = "" }: { className?: string }) {
  return <div className={`w-full border-t border-editorial-border ${className}`} />;
}
