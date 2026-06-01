import { ChevronRight, Footprints } from "lucide-react";

export function NudgeCard() {
  return (
    <button
      type="button"
      className="w-full text-left bg-surface rounded-card shadow-soft border border-line/60 p-4 flex items-center gap-4 active:scale-[0.99] transition"
      style={{ minHeight: 80 }}
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: "var(--marigold-soft)" }}
      >
        <Footprints size={22} color="var(--marigold)" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-serif text-ink" style={{ fontSize: "18px", fontWeight: 500, lineHeight: 1.3 }}>
          Your saathi Anjali visits on Thursday
        </p>
        <p className="mt-1 font-sans" style={{ fontSize: "14px", color: "var(--ink-2)" }}>
          11 AM · Park walk and chai
        </p>
      </div>
      <ChevronRight size={22} color="var(--ink-3)" className="shrink-0" />
    </button>
  );
}
