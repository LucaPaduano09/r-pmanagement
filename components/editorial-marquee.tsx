"use client";

type EditorialMarqueeProps = {
  items: string[];
  className?: string;
};

export function EditorialMarquee({ items, className = "" }: EditorialMarqueeProps) {
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden rounded-full border border-white/70 bg-white/74 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur ${className}`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f8fbff] via-[#f8fbff]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f8fbff] via-[#f8fbff]/80 to-transparent" />
      <div className="flex min-w-max animate-[editorialMarquee_28s_linear_infinite] items-center gap-4 py-3 pr-4">
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-600"
          >
            <span className="ml-4 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500 shadow-[0_0_14px_rgba(14,165,233,0.35)]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
