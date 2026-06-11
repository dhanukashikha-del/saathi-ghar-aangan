import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  HandHeart,
  Phone,
  Home as HomeIcon,
  Stethoscope,
  Sprout,
  ChevronRight,
  MapPin,
  Star,
  Calendar,
  Sparkles,
  Check,
} from "lucide-react";
import { BottomNav } from "@/components/sukhada/BottomNav";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Book a Saathi — Sukhada" },
      {
        name: "description",
        content:
          "Book a trusted Saathi for a home visit, a clinic ride, a phone call, or a garden afternoon — verified volunteers near you.",
      },
      { property: "og:title", content: "Book a Saathi — Sukhada" },
      {
        property: "og:description",
        content: "Trusted, verified volunteers for seniors — booked in a few taps.",
      },
    ],
  }),
  component: VolunteerScreen,
});

type Help = {
  id: string;
  title: string;
  blurb: string;
  Icon: typeof HandHeart;
  tint: string;
  ink: string;
};

const helps: Help[] = [
  {
    id: "visit",
    title: "Home visit",
    blurb: "Chai & conversation, an hour or two.",
    Icon: HomeIcon,
    tint: "var(--marigold-soft)",
    ink: "var(--marigold)",
  },
  {
    id: "clinic",
    title: "Clinic ride",
    blurb: "A Saathi to take you, and bring you home.",
    Icon: Stethoscope,
    tint: "var(--plum-soft)",
    ink: "var(--plum)",
  },
  {
    id: "call",
    title: "Phone friend",
    blurb: "A warm call, twice a week.",
    Icon: Phone,
    tint: "var(--jade-soft)",
    ink: "var(--jade)",
  },
  {
    id: "garden",
    title: "Garden afternoon",
    blurb: "Tulsi, sunshine, a samosa together.",
    Icon: Sprout,
    tint: "var(--gold-soft)",
    ink: "var(--gold)",
  },
];

const slots = [
  { day: "Today", date: "2 Jun", time: "4:00 pm" },
  { day: "Tomorrow", date: "3 Jun", time: "11:00 am" },
  { day: "Thursday", date: "4 Jun", time: "5:30 pm" },
  { day: "Saturday", date: "6 Jun", time: "10:00 am" },
];

type Saathi = {
  id: string;
  name: string;
  age: number;
  km: string;
  rating: number;
  visits: number;
  img: string;
  note: string;
  badges: string[];
};

const saathis: Saathi[] = [
  {
    id: "anjali",
    name: "Anjali",
    age: 32,
    km: "1.1 km",
    rating: 4.9,
    visits: 84,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=70&auto=format&fit=crop",
    note: "Speaks Hindi & Kannada. Loves old film songs.",
    badges: ["Verified", "First-aid"],
  },
  {
    id: "vikram",
    name: "Vikram",
    age: 28,
    km: "2.3 km",
    rating: 4.8,
    visits: 51,
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=70&auto=format&fit=crop",
    note: "Doctor by training. Patient and gentle.",
    badges: ["Verified", "Medical"],
  },
  {
    id: "meera",
    name: "Meera",
    age: 41,
    km: "0.8 km",
    rating: 5.0,
    visits: 132,
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=70&auto=format&fit=crop",
    note: "Reads beautifully. Brings homemade ladoos.",
    badges: ["Verified", "Top-rated"],
  },
];

function VolunteerScreen() {
  const [help, setHelp] = useState("visit");
  const [slot, setSlot] = useState(0);

  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto w-full max-w-[480px] pb-32">
        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-paper px-5 pt-5 pb-3 flex items-center justify-between">
          <Link
            to="/"
            aria-label="Back"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-surface border border-line active:scale-95 transition"
          >
            <ArrowLeft size={20} color="var(--ink)" />
          </Link>
          <p
            className="font-sans font-medium uppercase text-marigold"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            Saathi on call
          </p>
          <div className="h-11 w-11" />
        </div>

        {/* Hero */}
        <section className="px-5">
          <div
            className="rounded-[20px] p-6 shadow-soft border border-line"
            style={{
              background:
                "linear-gradient(160deg, #FFE3C2 0%, #FFF8EC 55%, #F8E5A8 100%)",
            }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1"
              style={{ background: "rgba(255,255,255,0.6)" }}
            >
              <Sparkles size={14} color="var(--marigold)" />
              <span
                className="font-sans font-medium"
                style={{ fontSize: "12px", color: "var(--marigold)" }}
              >
                Verified · Background-checked · Free
              </span>
            </div>
            <h1
              className="font-serif text-ink mt-4"
              style={{ fontSize: "30px", lineHeight: 1.15, fontWeight: 500 }}
            >
              Need a hand today, Sharmila Ji?
            </h1>
            <p
              className="mt-3 font-sans"
              style={{ fontSize: "15px", lineHeight: 1.5, color: "var(--ink-2)" }}
            >
              Book a kind, trusted Saathi to drop by, take you to the clinic,
              or simply spend an hour with you.
            </p>
          </div>
        </section>

        {/* Step 1 — What kind of help */}
        <section className="px-5 mt-8">
          <StepLabel n={1} label="What would you like help with?" />
          <div className="mt-4 grid grid-cols-2 gap-3">
            {helps.map((w) => {
              const active = help === w.id;
              return (
                <button
                  key={w.id}
                  onClick={() => setHelp(w.id)}
                  className="text-left rounded-[18px] bg-surface p-4 border transition active:scale-[0.98]"
                  style={{
                    borderColor: active ? w.ink : "var(--line)",
                    boxShadow: active
                      ? `0 0 0 3px ${w.tint}`
                      : "var(--shadow-soft)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center"
                      style={{ background: w.tint }}
                    >
                      <w.Icon size={20} color={w.ink} />
                    </div>
                    {active && (
                      <div
                        className="h-6 w-6 rounded-full flex items-center justify-center"
                        style={{ background: w.ink }}
                      >
                        <Check size={14} color="#fff" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <p
                    className="mt-3 font-serif text-ink"
                    style={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    {w.title}
                  </p>
                  <p
                    className="mt-1 font-sans"
                    style={{ fontSize: "13px", color: "var(--ink-3)", lineHeight: 1.4 }}
                  >
                    {w.blurb}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 2 — When */}
        <section className="px-5 mt-8">
          <StepLabel n={2} label="When works for you?" />
          <div className="mt-4 -mx-5 px-5 flex gap-3 overflow-x-auto no-scrollbar">
            {slots.map((s, i) => {
              const active = slot === i;
              return (
                <button
                  key={s.date}
                  onClick={() => setSlot(i)}
                  className="shrink-0 rounded-[16px] px-4 py-3 border transition active:scale-[0.98]"
                  style={{
                    minWidth: 124,
                    background: active ? "var(--ink)" : "var(--surface)",
                    borderColor: active ? "var(--ink)" : "var(--line)",
                    boxShadow: active ? "none" : "var(--shadow-soft)",
                  }}
                >
                  <p
                    className="font-sans font-medium uppercase"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      color: active ? "var(--gold-soft)" : "var(--ink-3)",
                    }}
                  >
                    {s.day} · {s.date}
                  </p>
                  <p
                    className="font-serif mt-1"
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: active ? "#FFF8EC" : "var(--ink)",
                    }}
                  >
                    {s.time}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Step 3 — Saathis */}
        <section className="px-5 mt-8">
          <div className="flex items-baseline justify-between">
            <StepLabel n={3} label="Saathis near you" inline />
            <button
              className="font-sans font-medium flex items-center gap-1"
              style={{ fontSize: "13px", color: "var(--marigold)" }}
            >
              See all <ChevronRight size={14} />
            </button>
          </div>

          <ul className="mt-4 space-y-3">
            {saathis.map((s) => (
              <li
                key={s.id}
                className="rounded-[18px] bg-surface border border-line shadow-soft p-4 flex gap-4"
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-16 w-16 rounded-2xl object-cover shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p
                      className="font-serif text-ink truncate"
                      style={{ fontSize: "17px", fontWeight: 500 }}
                    >
                      {s.name}
                      <span
                        className="font-sans font-normal ml-1"
                        style={{ color: "var(--ink-3)", fontSize: "13px" }}
                      >
                        · {s.age}
                      </span>
                    </p>
                    <span
                      className="inline-flex items-center gap-1 font-sans font-medium"
                      style={{ fontSize: "13px", color: "var(--ink)" }}
                    >
                      <Star size={13} fill="var(--gold)" color="var(--gold)" />
                      {s.rating.toFixed(1)}
                    </span>
                  </div>
                  <p
                    className="mt-1 font-sans"
                    style={{ fontSize: "14px", color: "var(--ink-2)", lineHeight: 1.45 }}
                  >
                    {s.note}
                  </p>
                  <div
                    className="mt-2 flex items-center gap-3 font-sans"
                    style={{ fontSize: "12px", color: "var(--ink-3)" }}
                  >
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {s.km}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} /> {s.visits} visits
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {s.badges.map((b) => (
                      <span
                        key={b}
                        className="rounded-full px-2 py-0.5 font-sans font-medium"
                        style={{
                          fontSize: "11px",
                          background: "var(--jade-soft)",
                          color: "var(--jade)",
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Reassurance */}
        <section className="px-5 mt-8">
          <div
            className="rounded-[18px] p-5 border border-line"
            style={{ background: "var(--jade-soft)" }}
          >
            <p
              className="font-serif text-ink"
              style={{ fontSize: "16px", lineHeight: 1.45, fontWeight: 500 }}
            >
              Every Saathi is background-checked, trained, and rated by other
              seniors. Your family is notified before every visit.
            </p>
          </div>
        </section>
      </div>

      {/* Sticky CTA */}
      <div
        className="fixed bottom-[72px] left-1/2 -translate-x-1/2 w-full max-w-[480px] px-5 pb-3 pt-4"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,248,236,0) 0%, var(--paper) 40%)",
        }}
      >
        <button
          className="w-full rounded-[14px] py-4 font-sans font-semibold text-surface active:scale-[0.99] transition shadow-soft inline-flex items-center justify-center gap-2"
          style={{ background: "var(--marigold)", fontSize: "16px" }}
        >
          <HandHeart size={18} /> Request a Saathi · {slots[slot].day}, {slots[slot].time}
        </button>
      </div>

      <BottomNav active="more" />
    </div>
  );
}

function StepLabel({
  n,
  label,
  inline,
}: {
  n: number;
  label: string;
  inline?: boolean;
}) {
  return (
    <div className={inline ? "inline-flex items-center gap-3" : "flex items-center gap-3"}>
      <span
        className="h-6 w-6 rounded-full inline-flex items-center justify-center font-sans font-semibold"
        style={{
          background: "var(--marigold-soft)",
          color: "var(--marigold)",
          fontSize: "12px",
        }}
      >
        {n}
      </span>
      <h2
        className="font-serif text-ink"
        style={{ fontSize: "20px", fontWeight: 500 }}
      >
        {label}
      </h2>
    </div>
  );
}
