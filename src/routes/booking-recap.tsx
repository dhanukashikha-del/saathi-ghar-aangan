import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Star,
  Heart,
  Camera,
  Repeat,
  Share2,
  Sparkles,
  Clock,
  Calendar,
} from "lucide-react";
import { BottomNav } from "@/components/sukhada/BottomNav";

export const Route = createFileRoute("/booking-recap")({
  head: () => ({
    meta: [
      { title: "How was your visit? — Sukhada" },
      { name: "description", content: "Recap your Saathi visit and rebook." },
    ],
  }),
  component: RecapScreen,
});

const warmthChips = ["Kind", "Patient", "Funny", "On time", "Great listener"];

function RecapScreen() {
  const [rating, setRating] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [share, setShare] = useState(true);

  function toggle(c: string) {
    setSelected((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));
  }

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
            Visit complete
          </p>
          <div className="h-11 w-11" />
        </div>

        {/* Recap hero */}
        <section className="px-5">
          <div
            className="rounded-[20px] p-6 shadow-soft border border-line"
            style={{
              background:
                "linear-gradient(160deg, #C8E5DD 0%, #FFF8EC 60%, #F8E5A8 100%)",
            }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1"
              style={{ background: "rgba(255,255,255,0.6)" }}
            >
              <Sparkles size={14} color="var(--jade)" />
              <span
                className="font-sans font-medium"
                style={{ fontSize: "12px", color: "var(--jade)" }}
              >
                A lovely afternoon
              </span>
            </div>
            <h1
              className="font-serif text-ink mt-4"
              style={{ fontSize: "26px", lineHeight: 1.2, fontWeight: 500 }}
            >
              You spent 1 hr 12 min with Anjali today
            </h1>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Stat icon={<Clock size={16} color="var(--marigold)" />} label="Duration" value="1h 12m" />
              <Stat icon={<Calendar size={16} color="var(--plum)" />} label="Next suggested" value="Fri, 5 Jun" />
            </div>
          </div>
        </section>

        {/* Rating */}
        <section className="px-5 mt-6">
          <div className="rounded-[20px] bg-surface border border-line shadow-soft p-5">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=70&auto=format&fit=crop"
                alt="Anjali"
                className="h-12 w-12 rounded-2xl object-cover"
              />
              <div>
                <p
                  className="font-serif text-ink"
                  style={{ fontSize: "17px", fontWeight: 500 }}
                >
                  How was Anjali?
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: "13px", color: "var(--ink-3)" }}
                >
                  Your rating helps other seniors.
                </p>
              </div>
            </div>

            <div className="mt-5 flex justify-between">
              {[1, 2, 3, 4, 5].map((n) => {
                const on = n <= rating;
                return (
                  <button
                    key={n}
                    onClick={() => setRating(n)}
                    aria-label={`Rate ${n} stars`}
                    className="h-12 w-12 rounded-full flex items-center justify-center active:scale-95 transition"
                    style={{
                      background: on ? "var(--gold-soft)" : "var(--paper)",
                    }}
                  >
                    <Star
                      size={26}
                      strokeWidth={1.5}
                      color={on ? "var(--gold)" : "var(--ink-3)"}
                      fill={on ? "var(--gold)" : "transparent"}
                    />
                  </button>
                );
              })}
            </div>

            {/* Warmth chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {warmthChips.map((c) => {
                const on = selected.includes(c);
                return (
                  <button
                    key={c}
                    onClick={() => toggle(c)}
                    className="rounded-full px-3 py-1.5 font-sans font-medium border transition"
                    style={{
                      fontSize: "13px",
                      background: on ? "var(--marigold-soft)" : "var(--paper)",
                      borderColor: on ? "var(--marigold)" : "var(--line)",
                      color: on ? "var(--marigold)" : "var(--ink-2)",
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="A warm note for Anjali (optional)…"
              className="mt-4 w-full resize-none rounded-[14px] bg-paper border border-line p-3 font-sans focus:outline-none focus:ring-2 focus:ring-saffron"
              style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.45 }}
            />
          </div>
        </section>

        {/* Share to circle */}
        <section className="px-5 mt-4">
          <button
            onClick={() => setShare((s) => !s)}
            className="w-full rounded-[18px] bg-surface border border-line shadow-soft p-4 flex items-center gap-4 text-left"
          >
            <div
              className="h-11 w-11 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: "var(--plum-soft)" }}
            >
              <Camera size={20} color="var(--plum)" />
            </div>
            <div className="min-w-0 flex-1">
              <p
                className="font-serif text-ink"
                style={{ fontSize: "16px", fontWeight: 500 }}
              >
                Share a moment to your Circle
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "13px", color: "var(--ink-3)" }}
              >
                Vikram and Priya would love to see it.
              </p>
            </div>
            <span
              aria-hidden
              className="h-6 w-11 rounded-full relative transition"
              style={{ background: share ? "var(--jade)" : "var(--line)" }}
            >
              <span
                className="absolute top-0.5 h-5 w-5 rounded-full bg-white transition"
                style={{ left: share ? 22 : 2 }}
              />
            </span>
          </button>
        </section>

        {/* Rebook */}
        <section className="px-5 mt-4">
          <div className="rounded-[20px] bg-surface border border-line shadow-soft p-5">
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center"
                style={{ background: "var(--marigold-soft)" }}
              >
                <Repeat size={18} color="var(--marigold)" />
              </div>
              <div>
                <p
                  className="font-serif text-ink"
                  style={{ fontSize: "17px", fontWeight: 500 }}
                >
                  Same time next week?
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: "13px", color: "var(--ink-3)" }}
                >
                  Friday, 5 June · 4:00 pm with Anjali
                </p>
              </div>
            </div>
            <button
              className="mt-4 w-full rounded-[14px] py-3 font-sans font-semibold border active:scale-[0.99] transition inline-flex items-center justify-center gap-2"
              style={{
                background: "var(--paper)",
                borderColor: "var(--marigold)",
                color: "var(--marigold)",
                fontSize: "15px",
              }}
            >
              <Heart size={16} /> Yes, book again
            </button>
          </div>
        </section>

        {/* Footer note */}
        <p
          className="px-6 mt-6 text-center font-sans"
          style={{ fontSize: "13px", color: "var(--ink-3)", lineHeight: 1.5 }}
        >
          Anjali has been added to your Circle.
          <br />
          Send her a hello anytime.
        </p>
      </div>

      <div
        className="fixed bottom-[72px] left-1/2 -translate-x-1/2 w-full max-w-[480px] px-5 pb-3 pt-4 flex gap-3"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,248,236,0) 0%, var(--paper) 40%)",
        }}
      >
        <button
          aria-label="Share"
          className="h-[52px] w-[52px] rounded-[14px] bg-surface border border-line shadow-soft flex items-center justify-center"
        >
          <Share2 size={20} color="var(--ink-2)" />
        </button>
        <Link
          to="/circle"
          className="flex-1 rounded-[14px] py-4 font-sans font-semibold text-surface active:scale-[0.99] transition shadow-soft inline-flex items-center justify-center gap-2"
          style={{ background: "var(--marigold)", fontSize: "16px" }}
        >
          Done · back to Circle
        </Link>
      </div>

      <BottomNav active="more" />
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[14px] bg-surface border border-line px-4 py-3">
      <div className="flex items-center gap-2">
        {icon}
        <p
          className="font-sans uppercase"
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "var(--ink-3)",
          }}
        >
          {label}
        </p>
      </div>
      <p
        className="font-serif text-ink mt-1"
        style={{ fontSize: "18px", fontWeight: 500 }}
      >
        {value}
      </p>
    </div>
  );
}
