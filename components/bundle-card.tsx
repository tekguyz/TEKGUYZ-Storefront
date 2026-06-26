import { Laptop, Cpu, Mic, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface BundleCardProps {
  id?: string;
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

export function BundleCard({ id, category, icon, items }: BundleCardProps) {
  const IconComponent = IconMap[icon];

  return (
    <div className={cn(
      "bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 sm:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-accent/40 transition-all duration-300 ease-[var(--ease-out-expo)] h-full flex flex-col justify-between",
      id === "computer" && "md:p-10 border-accent/20 bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface)] to-[var(--color-accent-dim)]"
    )}>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-dim)] flex items-center justify-center shrink-0">
              {IconComponent ? <IconComponent className="w-5 h-5 text-[var(--color-accent)]" /> : <div />}
            </div>
            <div>
              <h3 className="font-semibold text-sm tracking-[0.04em] uppercase text-[var(--color-text-muted)]">
                {category}
              </h3>
              {id === "computer" && (
                <span className="text-[10px] text-[var(--color-accent)] font-semibold tracking-wider uppercase bg-[var(--color-accent-dim)] px-2 py-0.5 rounded-full mt-1 inline-block">
                  Featured Core System
                </span>
              )}
            </div>
          </div>
          
          <div className="h-px w-full bg-[var(--color-border-subtle)] my-5" />
        </div>
        
        {id === "computer" ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 flex-1 mt-1">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-[9px] shrink-0" />
                <span className="text-[0.9375rem] text-[var(--color-text)] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        ) : id === "support" ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 mt-1">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-[var(--color-base)] border border-[var(--color-border-subtle)] hover:border-accent/30 hover:bg-[var(--color-accent-dim)] transition-all duration-200">
                <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] mt-1.5 shrink-0 animate-pulse" />
                <span className="text-[0.9375rem] text-[var(--color-text)] leading-relaxed font-medium">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex flex-col gap-3 flex-1 mt-1">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1 h-1 bg-[var(--color-accent)] mt-[9px] shrink-0" />
                <span className="text-[0.9375rem] text-[var(--color-text)] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
