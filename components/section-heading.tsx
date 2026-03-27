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
  const alignment = align === "center" ? "text-center items-center mx-auto" : "";

  return (
    <div className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <div className="flex items-center gap-4">
        <span className="h-px w-12 bg-cyan-300/80" />
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
          {eyebrow}
        </span>
      </div>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}
