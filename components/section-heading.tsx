type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700/80">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
