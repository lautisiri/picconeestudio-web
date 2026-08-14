export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-navy/15 bg-navy/[0.04] px-3.5 py-1.5 font-sans text-xs font-medium text-navy/80 transition-colors duration-300 ease-premium">
      {children}
    </span>
  );
}
