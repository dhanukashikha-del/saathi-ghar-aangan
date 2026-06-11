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
  Clock,
  Sparkles,
} from "lucide-react";
import { BottomNav } from "@/components/sukhada/BottomNav";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Become a Saathi — Sukhada" },
      {
        name: "description",
        content:
          "Give an hour a week to a senior near you. Choose how you help — a visit, a phone call, a clinic ride, or a garden afternoon.",
      },
      { property: "og:title", content: "Become a Saathi — Sukhada" },
      {
        property: "og:description",
        content: "A warm, simple way to volunteer with seniors in your neighbourhood.",
      },
    ],
  }),
  component: VolunteerScreen,
});

type Way = {
  id: string;
  title: string;
  blurb: string;
  Icon: typeof HandHeart;
  tint: string;
  ink: string;
};

const ways: Way[] = [
  {
    id: "visit",
    title: "Home visit",
    blurb: "Chai, conversation, a little company.",
    Icon: HomeIcon,
    tint: "var(--marigold-soft)",
    ink: "var(--marigold)",
  },
  {
    id: "call",
    title: "Phone friend",
    blurb: "A 20-minute call, once a week.",
    Icon: Phone,
    tint: "var(--jade-soft)",
    ink: "var(--jade)",
  },
  {
    id: "clinic",
    title: "Clinic ride",
    blurb: "Accompany Uncle or Aunty to a check-up.",
    Icon: Stethoscope,
    tint: "var(--plum-soft)",
    ink: "var(--plum)",
  },
  {
    id: "garden",
    title: "Garden afternoon",
    blurb: "Help with the tulsi, share a samosa.",
    Icon: Sprout,
    tint: "var(--gold-soft)",
    ink: "var(--gold)",
  },
];

type Opening = {
  id: string;
  name: string;
  age: number;
  need: string;
  area: string;
  when: string;
  img: string;
  tag: string;
  tagInk: string;
  tagBg: string;
};

const openings: Opening[] = [
  {
    id: "1",
    name: "Ramesh Uncle",
    age: 78,
    need: "Wants someone to read the morning paper with him.",
    area: "Indiranagar · 1.2 km",
    when: "Tue & Fri mornings",
    img: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=300&q=70&auto=format&fit=crop",
    tag: "Home visit",
    tagInk: "var(--marigold)",
    tagBg: "var(--marigold-soft)",
  },
  {
    id: "2",
    name: "Lakshmi Aunty",
    age: 71,
    need: "A weekly phone call. Loves talking about her grandchildren.",
    area: "Jayanagar · phone",
    when: "Any evening",
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&q=70&auto=format&fit=crop",
    tag: "Phone friend",
    tagInk: "var(--jade)",
    tagBg: "var(--jade-soft)",
  },
  {
    id: "3",
    name: "Prakash Uncle",
    age: 82,
    need: "Ride to the cardiologist, monthly.",
    area: "Koramangala · 3 km",
    when: "First Saturday",
    img: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=300&q=70&auto=format&fit=crop",
    tag: "Clinic ride",
    tagInk: "var(--plum)",
    tagBg: "var(--plum-soft)",
  },
];

function VolunteerScreen() {
  const [selected, setSelected] = useState<string>("visit");

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
            Saathi Programme
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
                One hour. One senior. One week.
              </span>
            </div>
            <h1
              className="font-serif text-ink mt-4"
              style={{ fontSize: "30px", lineHeight: 1.15, fontWeight: 500 }}
            >
              Become a Saathi in your neighbourhood
            </h1>
            <p
              className="mt-3 font-sans"
              style={{ fontSize: "15px", lineHeight: 1.5, color: "var(--ink-2)" }}
            >
              Small acts of company go a long way. Pick how you'd like to help
              — we'll match you with a senior nearby.
            </p>

            {/* Stats row */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                { n: "1,240", l: "Saathis" },
                { n: "3,890", l: "Visits" },
                { n: "42", l: "Cities" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-[14px] bg-surface px-3 py-3 text-center border border-line"
                >
                  <p
                    className="font-serif text-ink"
                    style={{ fontSize: "20px", fontWeight: 500 }}
                  >
                    {s.n}
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: "11px", color: "var(--ink-3)" }}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to help */}
        <section className="px-5 mt-8">
          <div className="flex items-baseline justify-between">
            <h2
              className="font-serif text-ink"
              style={{ fontSize: "20px", fontWeight: 500 }}
            >
              How would you like to help?
            </h2>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {ways.map((w) => {
              const active = selected === w.id;
              return (
                <button
                  key={w.id}
                  onClick={() => setSelected(w.id)}
                  className="text-left rounded-[18px] bg-surface p-4 border transition active:scale-[0.98]"
                  style={{
                    borderColor: active ? w.ink : "var(--line)",
                    boxShadow: active
                      ? `0 0 0 3px ${w.tint}`
                      : "var(--shadow-soft)",
                  }}
                >
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ background: w.tint }}
                  >
                    <w.Icon size={20} color={w.ink} />
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

        {/* Openings */}
        <section className="px-5 mt-8">
          <div className="flex items-baseline justify-between">
            <h2
              className="font-serif text-ink"
              style={{ fontSize: "20px", fontWeight: 500 }}
            >
              Seniors near you
            </h2>
            <button
              className="font-sans font-medium flex items-center gap-1"
              style={{ fontSize: "13px", color: "var(--marigold)" }}
            >
              See all <ChevronRight size={14} />
            </button>
          </div>

          <ul className="mt-4 space-y-3">
            {openings.map((o) => (
              <li
                key={o.id}
                className="rounded-[18px] bg-surface border border-line shadow-soft p-4 flex gap-4"
              >
                <img
                  src={o.img}
                  alt={o.name}
                  className="h-16 w-16 rounded-2xl object-cover shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p
                      className="font-serif text-ink truncate"
                      style={{ fontSize: "17px", fontWeight: 500 }}
                    >
                      {o.name}
                      <span
                        className="font-sans font-normal ml-1"
                        style={{ color: "var(--ink-3)", fontSize: "13px" }}
                      >
                        · {o.age}
                      </span>
                    </p>
                    <span
                      className="rounded-full px-2 py-0.5 font-sans font-medium shrink-0"
                      style={{
                        fontSize: "11px",
                        background: o.tagBg,
                        color: o.tagInk,
                      }}
                    >
                      {o.tag}
                    </span>
                  </div>
                  <p
                    className="mt-1 font-sans"
                    style={{ fontSize: "14px", color: "var(--ink-2)", lineHeight: 1.45 }}
                  >
                    {o.need}
                  </p>
                  <div
                    className="mt-2 flex items-center gap-3 font-sans"
                    style={{ fontSize: "12px", color: "var(--ink-3)" }}
                  >
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} /> {o.area}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} /> {o.when}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Quote */}
        <section className="px-5 mt-8">
          <div
            className="rounded-[18px] p-5 border border-line"
            style={{ background: "var(--jade-soft)" }}
          >
            <p
              className="font-serif text-ink"
              style={{ fontSize: "17px", lineHeight: 1.45, fontWeight: 500 }}
            >
              "I came to give an hour. I left with a grandfather."
            </p>
            <p
              className="mt-2 font-sans"
              style={{ fontSize: "13px", color: "var(--ink-2)" }}
            >
              Ananya, Saathi since 2024
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
          <HandHeart size={18} /> Apply to be a Saathi
        </button>
      </div>

      <BottomNav active="more" />
    </div>
  );
}
