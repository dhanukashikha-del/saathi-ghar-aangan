import { ChevronRight, UsersRound, Coffee, HeartPulse, CalendarDays } from "lucide-react";

export function FeatureGrid() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Hero tile — Your Circle */}
        <button
          type="button"
          className="relative overflow-hidden rounded-card text-left row-span-2 active:scale-[0.99] transition flex flex-col"
          style={{ backgroundColor: "var(--marigold)", minHeight: 360 }}
        >
          <div className="flex items-start justify-end p-4">
            <span
              className="rounded-full bg-white font-sans"
              style={{
                color: "var(--ink)",
                fontSize: "12px",
                fontWeight: 600,
                padding: "6px 12px",
                letterSpacing: "0.04em",
              }}
            >
              3 NEW
            </span>
          </div>

          <div className="flex-1 flex items-end justify-start px-4 pb-3">
            <UsersRound size={92} color="rgba(255,255,255,0.55)" strokeWidth={1.6} />
          </div>

          <div
            className="m-3 rounded-2xl bg-white px-4 py-3 flex items-center gap-3"
          >
            <div className="flex-1 min-w-0">
              <span
                className="inline-block rounded-full"
                style={{
                  backgroundColor: "var(--marigold-soft)",
                  color: "var(--marigold)",
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "4px 10px",
                  letterSpacing: "0.06em",
                }}
              >
                SOCIAL FEED
              </span>
              <p
                className="mt-2 font-serif text-ink"
                style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.15 }}
              >
                Your Circle
              </p>
              <p
                className="mt-0.5 font-sans"
                style={{ fontSize: "13px", color: "var(--ink-2)" }}
              >
                Catch up with friends
              </p>
            </div>
            <span
              aria-hidden
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "var(--marigold-soft)" }}
            >
              <ChevronRight size={20} color="var(--marigold)" />
            </span>
          </div>
        </button>

        {/* Jade — Need company today */}
        <button
          type="button"
          className="relative overflow-hidden rounded-card text-left p-4 active:scale-[0.98] transition flex flex-col justify-between"
          style={{ backgroundColor: "var(--jade-soft)", minHeight: 172 }}
        >
          <div className="flex justify-center">
            <Coffee size={36} color="var(--jade)" strokeWidth={1.8} />
          </div>
          <div>
            <h3
              className="font-serif"
              style={{ fontSize: "20px", fontWeight: 600, color: "var(--jade)", lineHeight: 1.15 }}
            >
              Need company<br />today?
            </h3>
            <p
              className="mt-1 font-sans"
              style={{ fontSize: "13px", color: "var(--ink-2)" }}
            >
              Book a SukhSathi
            </p>
          </div>
        </button>

        {/* Gold — Track your health */}
        <button
          type="button"
          className="relative overflow-hidden rounded-card text-left p-4 active:scale-[0.98] transition flex flex-col justify-between"
          style={{ backgroundColor: "var(--gold-soft)", minHeight: 172 }}
        >
          <div className="flex justify-center">
            <HeartPulse size={36} color="#8a6610" strokeWidth={1.8} />
          </div>
          <div>
            <h3
              className="font-serif"
              style={{ fontSize: "20px", fontWeight: 600, color: "#8a6610", lineHeight: 1.15 }}
            >
              Track your<br />health
            </h3>
            <p
              className="mt-1 font-sans"
              style={{ fontSize: "13px", color: "var(--ink-2)" }}
            >
              Meds, vitals, reports
            </p>
          </div>
        </button>
      </div>

      {/* Plum ribbon — Events near you */}
      <button
        type="button"
        className="w-full flex items-center gap-4 rounded-card p-4 active:scale-[0.99] transition"
        style={{ backgroundColor: "var(--plum)", minHeight: 80 }}
      >
        <span
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{
            background: "linear-gradient(135deg, var(--gold), var(--marigold))",
          }}
        >
          <CalendarDays size={22} color="#fff" strokeWidth={2} />
        </span>
        <div className="flex-1 min-w-0 text-left">
          <p
            className="font-sans uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "var(--marigold-soft)",
              fontWeight: 600,
            }}
          >
            Upcoming
          </p>
          <p
            className="font-serif text-white"
            style={{ fontSize: "18px", fontWeight: 500, lineHeight: 1.2 }}
          >
            Events near you
          </p>
        </div>
        <ChevronRight size={22} color="rgba(255,255,255,0.85)" className="shrink-0" />
      </button>
    </div>
  );
}
