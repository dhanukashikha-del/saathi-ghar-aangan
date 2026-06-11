import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Pill,
  CalendarDays,
  FileText,
  Heart,
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

        <main className="px-5 space-y-6">
          <RefillNudge />
          <TodayGreeting />

          <div className="space-y-4">
            <MedicationsCard />
            <VitalsCard />
            <div className="grid grid-cols-2 gap-4">
              <AppointmentsCard />
              <ReportsCard />
            </div>
            <FamilyRibbon />
          </div>
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
          <span
            aria-hidden
            className="absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full border-2 border-surface"
            style={{ backgroundColor: "var(--saffron)" }}
          />
        </button>
      </div>
    </header>
  );
}

function RefillNudge() {
  return (
    <button
      type="button"
      className="w-full text-left rounded-card p-5 flex items-start gap-4 active:scale-[0.99] transition"
      style={{ backgroundColor: "var(--marigold-soft)", minHeight: 88 }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
        <AlertCircle size={22} color="var(--marigold)" strokeWidth={2.5} />
      </div>
      <div className="min-w-0 flex-1">
        <p
          className="font-serif text-ink"
          style={{ fontSize: "18px", fontWeight: 600, lineHeight: 1.25 }}
        >
          Refill check needed
        </p>
        <p
          className="mt-1 font-sans"
          style={{ fontSize: "15px", color: "var(--ink-2)" }}
        >
          Amlodipine is 26 days old. Tap to reorder.
        </p>
      </div>
      <ChevronRight size={20} color="var(--marigold)" className="shrink-0 mt-1" />
    </button>
  );
}

function TodayGreeting() {
  return (
    <div>
      <p
        className="font-sans uppercase"
        style={{
          fontSize: "11px",
          letterSpacing: "0.16em",
          fontWeight: 700,
          color: "var(--marigold)",
        }}
      >
        Today
      </p>
      <h1
        className="mt-1 font-serif text-ink"
        style={{ fontSize: "30px", fontWeight: 600, lineHeight: 1.1 }}
      >
        Your Health, <span style={{ color: "var(--marigold)" }}>Ji</span>
      </h1>
      <p
        className="mt-2 font-sans"
        style={{ fontSize: "16px", color: "var(--ink-2)" }}
      >
        2 medicines due today · Stay on track
      </p>
    </div>
  );
}

function MedicationsCard() {
  const taken = 3;
  const total = 5;
  const pct = (taken / total) * 100;
  const accent = "#8a6610";
  return (
    <button
      type="button"
      className="w-full text-left rounded-card p-5 active:scale-[0.99] transition relative overflow-hidden"
      style={{ backgroundColor: "var(--gold-soft)" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span
            className="inline-block rounded-full px-3 py-1 font-sans uppercase"
            style={{
              backgroundColor: "rgba(255,255,255,0.6)",
              color: accent,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            Dawai
          </span>
          <h3
            className="mt-3 font-serif"
            style={{ fontSize: "24px", fontWeight: 600, color: accent, lineHeight: 1.15 }}
          >
            Medications
          </h3>
          <p
            className="mt-1 font-sans"
            style={{ fontSize: "16px", color: accent, opacity: 0.85 }}
          >
            5 active · 2 due today
          </p>
        </div>
        <span
          aria-hidden
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: accent }}
        >
          <Pill size={26} color="#fff" strokeWidth={2} />
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <div
          className="h-2 flex-1 rounded-full overflow-hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, backgroundColor: accent }}
          />
        </div>
        <span
          className="font-sans"
          style={{ fontSize: "12px", fontWeight: 700, color: accent }}
        >
          {taken}/{total} taken
        </span>
      </div>
    </button>
  );
}

function VitalsCard() {
  const accent = "var(--rose, #C2553A)";
  return (
    <button
      type="button"
      className="w-full text-left rounded-card p-5 active:scale-[0.99] transition"
      style={{ backgroundColor: "var(--rose-soft, #F5DDD0)" }}
    >
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white"
        >
          <Heart size={22} color={accent as string} strokeWidth={2} fill={accent as string} />
        </span>
        <div className="min-w-0">
          <p
            className="font-sans uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              fontWeight: 700,
              color: accent,
            }}
          >
            Last BP
          </p>
          <h3
            className="font-serif"
            style={{ fontSize: "22px", fontWeight: 600, color: "var(--ink)", lineHeight: 1.15 }}
          >
            Vitals · 128 / 82
          </h3>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <p
          className="font-sans"
          style={{ fontSize: "14px", color: "var(--ink-2)" }}
        >
          Checked 2 days ago
        </p>
        <span
          className="rounded-xl font-sans text-white"
          style={{
            backgroundColor: accent,
            fontSize: "13px",
            fontWeight: 600,
            padding: "8px 14px",
          }}
        >
          Update now
        </span>
      </div>
    </button>
  );
}

function AppointmentsCard() {
  return (
    <button
      type="button"
      className="w-full text-left rounded-card p-5 active:scale-[0.99] transition flex flex-col"
      style={{ backgroundColor: "var(--jade-soft)", minHeight: 160 }}
    >
      <span
        aria-hidden
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-white mb-4"
      >
        <CalendarDays size={20} color="var(--jade)" strokeWidth={2} />
      </span>
      <p
        className="font-sans uppercase"
        style={{
          fontSize: "11px",
          letterSpacing: "0.14em",
          fontWeight: 700,
          color: "var(--jade)",
        }}
      >
        Next
      </p>
      <p
        className="mt-1 font-serif"
        style={{ fontSize: "18px", fontWeight: 600, color: "var(--ink)", lineHeight: 1.2 }}
      >
        Dr. Mehta
      </p>
      <p
        className="font-sans"
        style={{ fontSize: "15px", color: "var(--jade)" }}
      >
        15 Jun · 11 AM
      </p>
    </button>
  );
}

function ReportsCard() {
  return (
    <button
      type="button"
      className="w-full text-left rounded-card p-5 active:scale-[0.99] transition flex flex-col"
      style={{ backgroundColor: "var(--marigold-soft)", minHeight: 160 }}
    >
      <span
        aria-hidden
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-white mb-4"
      >
        <FileText size={20} color="var(--marigold)" strokeWidth={2} />
      </span>
      <p
        className="font-sans uppercase"
        style={{
          fontSize: "11px",
          letterSpacing: "0.14em",
          fontWeight: 700,
          color: "var(--marigold)",
        }}
      >
        Documents
      </p>
      <p
        className="mt-1 font-serif"
        style={{ fontSize: "18px", fontWeight: 600, color: "var(--ink)", lineHeight: 1.2 }}
      >
        Reports
      </p>
      <p
        className="font-sans"
        style={{ fontSize: "15px", color: "var(--marigold)" }}
      >
        8 saved · 3 recent
      </p>
    </button>
  );
}

function FamilyRibbon() {
  return (
    <button
      type="button"
      className="w-full flex items-center gap-4 rounded-card p-5 active:scale-[0.99] transition"
      style={{ backgroundColor: "var(--plum)", minHeight: 80 }}
    >
      <span
        aria-hidden
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: "rgba(255,255,255,0.14)" }}
      >
        <Users size={22} color="#fff" strokeWidth={2} />
      </span>
      <div className="flex-1 min-w-0 text-left">
        <p
          className="font-serif text-white"
          style={{ fontSize: "18px", fontWeight: 600, lineHeight: 1.2 }}
        >
          Family Access
        </p>
        <p
          className="font-sans"
          style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)" }}
        >
          3 members connected
        </p>
      </div>
      <ChevronRight size={22} color="rgba(255,255,255,0.85)" className="shrink-0" />
    </button>
  );
}
