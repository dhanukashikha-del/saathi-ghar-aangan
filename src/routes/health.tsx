import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Pill,
  CalendarHeart,
  FileText,
  HeartPulse,
  Users,
  AlertCircle,
  Bell,
  ArrowLeft,
} from "lucide-react";
import { BottomNav } from "@/components/sukhada/BottomNav";

export const Route = createFileRoute("/health")({
  head: () => ({
    meta: [
      { title: "Your Health, Ji — Sukhada" },
      {
        name: "description",
        content:
          "Track your medicines, appointments, reports, vitals and family — all in one warm place.",
      },
      { property: "og:title", content: "Your Health, Ji — Sukhada" },
      {
        property: "og:description",
        content: "A senior-friendly health dashboard from Sukhada.",
      },
    ],
  }),
  component: HealthScreen,
});

function HealthScreen() {
  return (
    <div className="min-h-dvh bg-paper">
      <div className="mx-auto w-full max-w-[480px] pb-28">
        <HealthHeader />

        <main>
          {/* Refill nudge */}
          <section className="px-5 mt-2">
            <RefillNudge />
          </section>

          {/* Hero — today snapshot */}
          <section className="px-5 mt-5" aria-labelledby="today-heading">
            <p
              className="font-sans uppercase text-marigold"
              style={{ fontSize: "11px", letterSpacing: "0.14em", fontWeight: 600 }}
            >
              Today
            </p>
            <h2
              id="today-heading"
              className="mt-2 font-serif text-ink"
              style={{ fontSize: "28px", fontWeight: 600, lineHeight: 1.1 }}
            >
              Your Health,{" "}
              <span style={{ color: "var(--marigold)" }}>Ji</span>
            </h2>
            <p
              className="mt-2 font-sans"
              style={{ fontSize: "15px", color: "var(--ink-2)" }}
            >
              2 medicines due today · Stay on track
            </p>
          </section>

          {/* Bento grid of sections */}
          <section className="px-5 mt-5" aria-label="Health sections">
            <HealthGrid />
          </section>

          {/* Family ribbon */}
          <section className="px-5 mt-4">
            <FamilyRibbon />
          </section>
        </main>
      </div>
      <BottomNav active="health" />
    </div>
  );
}

function HealthHeader() {
  return (
    <header className="sticky top-0 z-20 bg-paper px-5 pt-5 pb-3">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          aria-label="Back"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-line active:scale-95 transition"
        >
          <ArrowLeft size={22} color="var(--ink)" strokeWidth={2} />
        </Link>
        <p
          className="font-serif text-ink"
          style={{ fontSize: "18px", fontWeight: 600 }}
        >
          Health
        </p>
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-surface border border-line active:scale-95 transition"
        >
          <Bell size={22} color="var(--ink)" strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}

function RefillNudge() {
  return (
    <button
      type="button"
      className="w-full text-left rounded-card border p-4 flex items-center gap-4 active:scale-[0.99] transition"
      style={{
        backgroundColor: "var(--marigold-soft)",
        borderColor: "rgba(232,118,31,0.18)",
        minHeight: 80,
      }}
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"
      >
        <AlertCircle size={22} color="var(--marigold)" strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className="font-serif text-ink"
          style={{ fontSize: "17px", fontWeight: 600, lineHeight: 1.3 }}
        >
          Refill check needed
        </p>
        <p
          className="mt-1 font-sans"
          style={{ fontSize: "14px", color: "var(--ink-2)" }}
        >
          Amlodipine is 26 days old · Tap to reorder
        </p>
      </div>
      <ChevronRight size={22} color="var(--marigold)" className="shrink-0" />
    </button>
  );
}

function HealthGrid() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Medicines — tall gold hero */}
        <button
          type="button"
          className="relative overflow-hidden rounded-card text-left row-span-2 active:scale-[0.99] transition flex flex-col"
          style={{ backgroundColor: "var(--gold-soft)", minHeight: 360 }}
        >
          <div className="flex items-start justify-between p-4">
            <span
              aria-hidden
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white"
            >
              <Pill size={24} color="#8a6610" strokeWidth={2} />
            </span>
            <span
              className="rounded-full font-sans"
              style={{
                backgroundColor: "#8a6610",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 600,
                padding: "6px 12px",
                letterSpacing: "0.04em",
              }}
            >
              2 DUE TODAY
            </span>
          </div>

          <div className="flex-1 flex items-end justify-start px-4 pb-3">
            <Pill size={92} color="rgba(138,102,16,0.18)" strokeWidth={1.6} />
          </div>

          <div className="m-3 rounded-2xl bg-white px-4 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <span
                className="inline-block rounded-full"
                style={{
                  backgroundColor: "var(--gold-soft)",
                  color: "#8a6610",
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "4px 10px",
                  letterSpacing: "0.06em",
                }}
              >
                DAWAI
              </span>
              <p
                className="mt-2 font-serif text-ink"
                style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.15 }}
              >
                Medicines
              </p>
              <p
                className="mt-0.5 font-sans"
                style={{ fontSize: "13px", color: "var(--ink-2)" }}
              >
                5 active · 2 due today
              </p>
            </div>
            <span
              aria-hidden
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "var(--gold-soft)" }}
            >
              <ChevronRight size={20} color="#8a6610" />
            </span>
          </div>
        </button>

        {/* Appointments — jade */}
        <SquareTile
          eyebrow="Next"
          title={<>Appointments</>}
          subtitle="Dr Mehta · 15 Jun"
          bg="var(--jade-soft)"
          fg="var(--jade)"
          Icon={CalendarHeart}
        />

        {/* Vitals — rose */}
        <SquareTile
          eyebrow="Last BP"
          title={<>Vitals</>}
          subtitle="128 / 82 · 2 days ago"
          bg="var(--rose-soft, #F5DDD0)"
          fg="var(--rose, #C2553A)"
          Icon={HeartPulse}
        />
      </div>

      {/* Reports — full width marigold */}
      <button
        type="button"
        className="w-full flex items-center gap-4 rounded-card p-4 active:scale-[0.99] transition"
        style={{ backgroundColor: "var(--marigold-soft)", minHeight: 88 }}
      >
        <span
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white"
        >
          <FileText size={22} color="var(--marigold)" strokeWidth={2} />
        </span>
        <div className="flex-1 min-w-0 text-left">
          <p
            className="font-sans uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "var(--marigold)",
              fontWeight: 600,
            }}
          >
            Documents
          </p>
          <p
            className="font-serif text-ink"
            style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.2 }}
          >
            Reports
          </p>
          <p
            className="mt-0.5 font-sans"
            style={{ fontSize: "13px", color: "var(--ink-2)" }}
          >
            8 saved · Tap to upload new
          </p>
        </div>
        <ChevronRight size={22} color="var(--marigold)" className="shrink-0" />
      </button>
    </div>
  );
}

function FamilyRibbon() {
  return (
    <button
      type="button"
      className="w-full flex items-center gap-4 rounded-card p-4 active:scale-[0.99] transition"
      style={{ backgroundColor: "var(--plum)", minHeight: 88 }}
    >
      <span
        aria-hidden
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
        style={{ backgroundColor: "var(--plum-soft)" }}
      >
        <Users size={22} color="var(--plum)" strokeWidth={2} />
      </span>
      <div className="flex-1 min-w-0 text-left">
        <p
          className="font-sans uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "0.14em",
            color: "var(--plum-soft)",
            fontWeight: 600,
          }}
        >
          Connected
        </p>
        <p
          className="font-serif text-white"
          style={{ fontSize: "18px", fontWeight: 500, lineHeight: 1.2 }}
        >
          Family Access · 3 members
        </p>
      </div>
      <ChevronRight size={22} color="rgba(255,255,255,0.85)" className="shrink-0" />
    </button>
  );
}

type TileProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  bg: string;
  fg: string;
  Icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
};

function SquareTile({ eyebrow, title, subtitle, bg, fg, Icon }: TileProps) {
  return (
    <button
      type="button"
      className="relative overflow-hidden rounded-card text-left p-4 active:scale-[0.98] transition flex flex-col justify-between"
      style={{ backgroundColor: bg, minHeight: 172 }}
    >
      <div className="flex items-start justify-between">
        <span
          aria-hidden
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white"
        >
          <Icon size={22} color={fg} strokeWidth={2} />
        </span>
      </div>
      <div>
        <p
          className="font-sans uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: fg,
            fontWeight: 600,
            opacity: 0.85,
          }}
        >
          {eyebrow}
        </p>
        <h3
          className="mt-1 font-serif"
          style={{ fontSize: "20px", fontWeight: 600, color: fg, lineHeight: 1.15 }}
        >
          {title}
        </h3>
        <p
          className="mt-1 font-sans"
          style={{ fontSize: "13px", color: "var(--ink-2)" }}
        >
          {subtitle}
        </p>
      </div>
    </button>
  );
}
