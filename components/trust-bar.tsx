import { TRUST_ITEMS } from "@/lib/constants";

export default function TrustBar() {
  return (
    <div className="w-full border-y border-[var(--color-border-subtle)] bg-[var(--color-surface)] py-5">
      <div className="container">
        <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between md:items-center gap-6 md:gap-0">
          {TRUST_ITEMS.map((item, index) => (
            <div key={index} className="flex flex-col items-center md:flex-row md:items-center relative w-full justify-center">
              <div className="flex flex-col items-center text-center">
                <span className="font-semibold text-[var(--color-text)]">{item.value}</span>
                <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mt-1">{item.label}</span>
              </div>
              {index < TRUST_ITEMS.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-[var(--color-border)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
