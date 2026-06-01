import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-paper px-5 pt-5 pb-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p
            className="text-marigold font-sans font-medium uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            Tuesday · 2 June
          </p>
          <h1
            className="mt-2 font-serif text-ink"
            style={{ fontSize: "30px", lineHeight: 1.15, fontWeight: 500 }}
          >
            Namaste, Sharmila Ji
          </h1>
        </div>

        <div className="flex shrink-0 items-center gap-3 pt-1">
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-line active:scale-95 transition"
          >
            <Bell size={22} strokeWidth={2} color="var(--ink)" />
            <span
              aria-hidden
              className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-marigold ring-2 ring-surface"
            />
          </button>
          <div
            aria-label="Your profile"
            className="h-12 w-12 rounded-full p-[2px]"
            style={{
              background:
                "linear-gradient(135deg, #E8761F 0%, #F5A623 50%, #D96A86 100%)",
            }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-surface font-serif text-ink" style={{ fontSize: "16px", fontWeight: 600 }}>
              S
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
