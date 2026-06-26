import { Laptop, Cpu, Mic, GraduationCap } from "lucide-react";

interface BundleCardProps {
  category: string;
  icon: string;
  items: readonly string[];
}

const IconMap: Record<string, React.ElementType> = {
  laptop: Laptop,
  cpu: Cpu,
  mic: Mic,
  "graduation-cap": GraduationCap,
};

export function BundleCard({ category, icon, items }: BundleCardProps) {
  const IconComponent = IconMap[icon];

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-accent/40 transition-all duration-300 ease-[var(--ease-out-expo)] h-full flex flex-col">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-dim)] flex items-center justify-center shrink-0">
          {IconComponent ? <IconComponent className="w-5 h-5 text-[var(--color-accent)]" /> : <div />}
        </div>
        <h3 className="font-semibold text-sm tracking-[0.04em] uppercase text-[var(--color-text-muted)]">
          {category}
        </h3>
      </div>
      
      <div className="h-px w-full bg-[var(--color-border-subtle)] my-5" />
      
      <ul className="flex flex-col gap-3 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-1 h-1 bg-[var(--color-accent)] mt-[9px] shrink-0" />
            <span className="text-[0.9375rem] text-[var(--color-text)] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
