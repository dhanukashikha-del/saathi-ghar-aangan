import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  Navigation,
  X,
  CalendarClock,
} from "lucide-react";
import { BottomNav } from "@/components/sukhada/BottomNav";

export const Route = createFileRoute("/booking-waiting")({
  head: () => ({
    meta: [
      { title: "Anjali is on her way — Sukhada" },
      { name: "description", content: "Live status for your Saathi visit." },
    ],
  }),
  component: WaitingScreen,
});

type Stage = "searching" | "accepted" | "enroute" | "arrived";

function WaitingScreen() {
  const [stage, setStage] = useState<Stage>("searching");
  const [eta, setEta] = useState(12);

  // demo: auto-progress through stages so the screen feels alive in preview
  useEffect(() => {
    const t1 = setTimeout(() => setStage("accepted"), 1800);
    const t2 = setTimeout(() => setStage("enroute"), 3800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (stage !== "enroute") return;
    const i = setInterval(() => setEta((e) => Math.max(1, e - 1)), 4000);
    return () => clearInterval(i);
  }, [stage]);

  const steps: { id: Stage; label: string; sub: string }[] = [
    { id: "searching", label: "Looking for your Saathi", sub: "Reaching out to Anjali" },
    { id: "accepted", label: "Anjali accepted", sub: "She'll be there at 4:00 pm" },
    { id: "enroute", label: "On her way", sub: `Arrives in ~${eta} min` },
    { id: "arrived", label: "At your door", sub: "Tap to start the visit" },
  ];

  const stageIndex = steps.findIndex((s) => s.id === stage);

  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto w-full max-w-[480px] pb-40">
        <div className="sticky top-0 z-20 bg-paper px-5 pt-5 pb-3 flex items-center justify-between">
          <Link
            to="/volunteer"
            aria-label="Back"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface border border-line active:scale-95 transition"
          >
            <ArrowLeft size={20} color="var(--ink)" />
          </Link>
          <p
            className="font-sans font-medium uppercase text-marigold"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            Your visit
          </p>
          <div className="h-11 w-11" />
        </div>

        {/* Live status hero */}
        <section className="px-5">
          <div
            className="rounded-[20px] p-6 shadow-soft border border-line relative overflow-hidden"
            style={{
              background:
                stage === "searching"
                  ? "linear-gradient(160deg, #F8E5A8 0%, #FFF8EC 100%)"
                  : "linear-gradient(160deg, #C8E5DD 0%, #FFF8EC 100%)",
            }}
          >
            {stage === "searching" && (
              <span
                aria-hidden
                className="absolute -top-10 -right-10 h-40 w-40 rounded-full animate-ping"
                style={{ background: "rgba(217,162,27,0.18)" }}
              />
            )}

            <div className="relative">
              <p
                className="font-sans font-medium uppercase"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  color: stage === "searching" ? "var(--gold)" : "var(--jade)",
                }}
              >
                {stage === "searching"
                  ? "Sending your request…"
                  : "Booking confirmed"}
              </p>
              <h1
                className="font-serif text-ink mt-2"
                style={{ fontSize: "26px", lineHeight: 1.15, fontWeight: 500 }}
              >
                {stage === "searching" && "Looking for Anjali"}
                {stage === "accepted" && "Anjali is coming over"}
                {stage === "enroute" && `Anjali arrives in ~${eta} min`}
                {stage === "arrived" && "Anjali is at your door"}
              </h1>

              <div className="mt-5 flex items-center gap-4">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=70&auto=format&fit=crop"
                    alt="Anjali"
                    className="h-16 w-16 rounded-2xl object-cover ring-4 ring-white/70"
                  />
                  {stage !== "searching" && (
                    <span
                      aria-hidden
                      className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center"
                      style={{ background: "var(--jade)" }}
                    >
                      <CheckCircle2 size={14} color="#fff" strokeWidth={3} />
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className="font-serif text-ink"
                    style={{ fontSize: "18px", fontWeight: 500 }}
                  >
                    Anjali
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: "13px", color: "var(--ink-2)" }}
                  >
                    Saathi · 1.1 km away
                  </p>
                </div>
                {stage !== "searching" && (
                  <div className="flex gap-2">
                    <button
                      aria-label="Call Anjali"
                      className="h-12 w-12 rounded-full bg-surface border border-line flex items-center justify-center active:scale-95 transition"
                    >
                      <Phone size={20} color="var(--jade)" />
                    </button>
                    <button
                      aria-label="Message Anjali"
                      className="h-12 w-12 rounded-full bg-surface border border-line flex items-center justify-center active:scale-95 transition"
                    >
                      <MessageCircle size={20} color="var(--marigold)" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map-ish strip when en route */}
        {stage === "enroute" && (
          <section className="px-5 mt-4">
            <div
              className="rounded-[18px] border border-line shadow-soft overflow-hidden h-40 relative"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #FFF8EC 0 14px, #F8E5A8 14px 16px)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-3 bg-surface rounded-full px-4 py-2 shadow-soft border border-line">
                  <Navigation size={16} color="var(--marigold)" />
                  <span
                    className="font-sans font-medium"
                    style={{ fontSize: "13px", color: "var(--ink)" }}
                  >
                    Anjali · 1.1 km · ~{eta} min
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Timeline */}
        <section className="px-5 mt-6">
          <p
            className="font-sans font-medium uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "var(--ink-3)",
            }}
          >
            Visit progress
          </p>
          <ol className="mt-4 relative">
            <span
              aria-hidden
              className="absolute left-[11px] top-2 bottom-2 w-0.5"
              style={{ background: "var(--line)" }}
            />
            {steps.map((s, i) => {
              const done = i < stageIndex;
              const current = i === stageIndex;
              return (
                <li key={s.id} className="relative flex gap-4 pb-5 last:pb-0">
                  <span
                    className="h-6 w-6 rounded-full flex items-center justify-center shrink-0 relative z-10"
                    style={{
                      background:
                        done || current ? "var(--marigold)" : "var(--surface)",
                      border: `2px solid ${
                        done || current ? "var(--marigold)" : "var(--line)"
                      }`,
                    }}
                  >
                    {done && <CheckCircle2 size={14} color="#fff" strokeWidth={3} />}
                    {current && (
                      <span
                        className="h-2 w-2 rounded-full bg-white animate-pulse"
                        aria-hidden
                      />
                    )}
                  </span>
                  <div className="pt-0.5">
                    <p
                      className="font-serif"
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: done || current ? "var(--ink)" : "var(--ink-3)",
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      className="font-sans"
                      style={{
                        fontSize: "13px",
                        color: current ? "var(--marigold)" : "var(--ink-3)",
                      }}
                    >
                      {s.sub}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Visit summary card */}
        <section className="px-5 mt-6">
          <div className="rounded-[18px] bg-surface border border-line shadow-soft p-4 space-y-3">
            <Mini icon={<Clock size={16} color="var(--plum)" />} label="Today, 4:00 pm" />
            <Mini icon={<MapPin size={16} color="var(--jade)" />} label="14, Lotus Apartments, Indiranagar" />
          </div>
        </section>

        {/* Manage */}
        <section className="px-5 mt-4 grid grid-cols-2 gap-3">
          <button className="rounded-[14px] bg-surface border border-line shadow-soft py-3 font-sans font-medium inline-flex items-center justify-center gap-2"
            style={{ fontSize: "14px", color: "var(--ink)" }}>
            <CalendarClock size={16} color="var(--ink-2)" /> Reschedule
          </button>
          <button className="rounded-[14px] border py-3 font-sans font-medium inline-flex items-center justify-center gap-2"
            style={{ fontSize: "14px", color: "var(--plum)", borderColor: "var(--plum-soft)", background: "var(--plum-soft)" }}>
            <X size={16} /> Cancel visit
          </button>
        </section>
      </div>

      {stage === "enroute" || stage === "arrived" ? (
        <div
          className="fixed bottom-[72px] left-1/2 -translate-x-1/2 w-full max-w-[480px] px-5 pb-3 pt-4"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,248,236,0) 0%, var(--paper) 40%)",
          }}
        >
          <Link
            to="/booking-recap"
            className="w-full rounded-[14px] py-4 font-sans font-semibold text-surface active:scale-[0.99] transition shadow-soft inline-flex items-center justify-center gap-2"
            style={{ background: "var(--marigold)", fontSize: "16px" }}
          >
            Anjali has arrived — start visit
          </Link>
        </div>
      ) : null}

      <BottomNav active="more" />
    </div>
  );
}

function Mini({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span
        className="font-sans"
        style={{ fontSize: "14px", color: "var(--ink-2)" }}
      >
        {label}
      </span>
    </div>
  );
}
