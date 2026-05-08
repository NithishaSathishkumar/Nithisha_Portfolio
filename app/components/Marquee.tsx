"use client";

const defaultItems = [
  "Full-stack",
  "Web apps",
  "Mobile",
  "React",
  "TypeScript",
  "Node",
  "APIs",
  "PostgreSQL",
  "AI / ML",
  "Product",
];

type MarqueeProps = {
  items?: string[];
};

export function Marquee({ items = defaultItems }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {loop.map((label, i) => (
          <span key={`${label}-${i}`} className="marquee__chunk">
            <span className="marquee__dot" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
