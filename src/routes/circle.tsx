import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  Mic,
  Heart,
  MessageCircle,
  Phone,
  Cake,
  Image as ImageIcon,
  MapPin,
  X,
} from "lucide-react";
import { BottomNav } from "@/components/sukhada/BottomNav";

export const Route = createFileRoute("/circle")({
  head: () => ({
    meta: [
      { title: "Your Circle — Sukhada" },
      {
        name: "description",
        content:
          "Small moments from the people you care about. Send a warm hello, a voice note, or wish someone on their special day.",
      },
      { property: "og:title", content: "Your Circle — Sukhada" },
      {
        property: "og:description",
        content: "Warm updates from your circle of care, all in one place.",
      },
    ],
  }),
  component: CircleScreen,
});

/* ---------- mock data ---------- */

type Person = {
  id: string;
  name: string;
  short: string;
  img: string;
  active?: boolean;
};

const circle: Person[] = [
  { id: "ramesh", name: "Ramesh", short: "uncle", img: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=200&q=70&auto=format&fit=crop", active: true },
  { id: "lakshmi", name: "Lakshmi", short: "aunty", img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=200&q=70&auto=format&fit=crop", active: true },
  { id: "anjali", name: "Anjali", short: "saathi", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=70&auto=format&fit=crop" },
  { id: "prakash", name: "Prakash", short: "uncle", img: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=200&q=70&auto=format&fit=crop" },
  { id: "sunita", name: "Sunita", short: "aunty", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=70&auto=format&fit=crop", active: true },
  { id: "vikram", name: "Vikram", short: "son", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=70&auto=format&fit=crop" },
];

type Moment =
  | {
      kind: "photo";
      id: string;
      who: Person;
      when: string;
      text: string;
      img: string;
      hellos: number;
    }
  | {
      kind: "voice";
      id: string;
      who: Person;
      when: string;
      text: string;
      seconds: number;
      hellos: number;
    }
  | {
      kind: "plan";
      id: string;
      who: Person;
      when: string;
      title: string;
      place: string;
      going: number;
    }
  | {
      kind: "birthday";
      id: string;
      who: Person;
      when: string;
      ageHint: string;
    };

const moments: Moment[] = [
  {
    kind: "birthday",
    id: "m0",
    who: circle[0],
    when: "Thursday",
    ageHint: "Ramesh uncle turns 72",
  },
  {
    kind: "photo",
    id: "m1",
    who: circle[1],
    when: "this morning",
    text: "First marigolds of the season 🌼",
    img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=900&q=70&auto=format&fit=crop",
    hellos: 4,
  },
  {
    kind: "plan",
    id: "m2",
    who: circle[3],
    when: "Sunday, 4 pm",
    title: "Chai at the temple ground",
    place: "Shivaji Park gate 3",
    going: 3,
  },
  {
    kind: "voice",
    id: "m3",
    who: circle[2],
    when: "an hour ago",
    text: "Sharing a small thought from today's visit",
    seconds: 38,
    hellos: 2,
  },
  {
    kind: "photo",
    id: "m4",
    who: circle[4],
    when: "yesterday",
    text: "Grandson's first day at school",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=70&auto=format&fit=crop",
    hellos: 7,
  },
];

const presets = [
  "Thinking of you 🌼",
  "All well here, Ji",
  "Call me when free",
  "Bahut sundar!",
  "Take care",
  "I'm coming over",
];

/* ---------- screen ---------- */

function CircleScreen() {
  const [helloFor, setHelloFor] = useState<Person | null>(null);

  return (
    <div className="min-h-dvh bg-paper">
      <div className="mx-auto w-full max-w-[480px] pb-28">
        <CircleHeader />
        <main className="px-5 pt-2 space-y-6">
          <Greeting />
          <PeopleRibbon onTap={setHelloFor} />
          <Feed onSayHello={setHelloFor} />
        </main>
      </div>
      <BottomNav active="circle" />
      {helloFor ? <HelloSheet person={helloFor} onClose={() => setHelloFor(null)} /> : null}
    </div>
  );
}

/* ---------- header ---------- */

function CircleHeader() {
  return (
    <header className="px-5 pt-6 pb-2 flex items-center justify-between">
      <Link
        to="/"
        aria-label="Back to home"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-surface border border-line"
      >
        <ArrowLeft size={20} color="var(--ink)" />
      </Link>
      <p className="font-sans uppercase" style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--ink-3)", fontWeight: 600 }}>
        Your Circle
      </p>
      <div className="w-10" />
    </header>
  );
}

/* ---------- greeting ---------- */

function Greeting() {
  return (
    <section>
      <h1 className="font-serif text-ink" style={{ fontSize: 28, fontWeight: 600, lineHeight: 1.15 }}>
        Small moments from{" "}
        <span style={{ color: "var(--marigold)" }}>your people</span>
      </h1>
      <p className="mt-1 font-sans" style={{ fontSize: 15, color: "var(--ink-2)" }}>
        3 new today. Tap a face to say hello.
      </p>
    </section>
  );
}

/* ---------- people ribbon ---------- */

function PeopleRibbon({ onTap }: { onTap: (p: Person) => void }) {
  return (
    <section aria-label="Your circle">
      <div className="no-scrollbar -mx-5 overflow-x-auto">
        <ul className="flex gap-4 px-5 pb-1">
          {circle.map((p) => (
            <li key={p.id} className="shrink-0">
              <button
                type="button"
                onClick={() => onTap(p)}
                className="flex flex-col items-center gap-1.5 active:scale-95 transition"
                style={{ width: 64 }}
              >
                <span className="relative">
                  <img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    className="h-16 w-16 rounded-full object-cover border-2"
                    style={{ borderColor: p.active ? "var(--jade)" : "var(--line)" }}
                  />
                  {p.active ? (
                    <span
                      aria-hidden
                      className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2"
                      style={{ backgroundColor: "var(--jade)", borderColor: "var(--paper)" }}
                    />
                  ) : null}
                </span>
                <span className="font-sans text-ink truncate w-full text-center" style={{ fontSize: 13, fontWeight: 500 }}>
                  {p.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- feed ---------- */

function Feed({ onSayHello }: { onSayHello: (p: Person) => void }) {
  return (
    <section aria-label="Moments" className="space-y-4">
      <h2 className="font-serif text-ink" style={{ fontSize: 20, fontWeight: 600 }}>
        Today's moments
      </h2>
      {moments.map((m) => (
        <MomentCard key={m.id} m={m} onSayHello={onSayHello} />
      ))}
    </section>
  );
}

function MomentCard({ m, onSayHello }: { m: Moment; onSayHello: (p: Person) => void }) {
  if (m.kind === "birthday") {
    return (
      <article
        className="rounded-card p-4 flex items-center gap-3"
        style={{ backgroundColor: "var(--marigold-soft)" }}
      >
        <span
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{ backgroundColor: "var(--marigold)" }}
        >
          <Cake size={22} color="#fff" />
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-sans uppercase" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--marigold)", fontWeight: 700 }}>
            {m.when}
          </p>
          <p className="font-serif text-ink mt-0.5" style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.2 }}>
            {m.ageHint}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onSayHello(m.who)}
          className="rounded-full font-sans"
          style={{ backgroundColor: "var(--marigold)", color: "#fff", fontSize: 14, fontWeight: 600, padding: "10px 16px" }}
        >
          Send wish
        </button>
      </article>
    );
  }

  return (
    <article className="rounded-card overflow-hidden bg-surface border border-line">
      {/* author row */}
      <div className="flex items-center gap-3 p-4 pb-3">
        <img src={m.who.img} alt="" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
        <div className="flex-1 min-w-0">
          <p className="font-sans text-ink" style={{ fontSize: 15, fontWeight: 600 }}>
            {m.who.name} <span style={{ color: "var(--ink-3)", fontWeight: 400 }}>{m.who.short}</span>
          </p>
          <p className="font-sans" style={{ fontSize: 13, color: "var(--ink-3)" }}>
            {m.when}
          </p>
        </div>
        {m.kind === "photo" ? <ImageIcon size={18} color="var(--ink-3)" /> : null}
      </div>

      {/* body */}
      {m.kind === "photo" ? (
        <>
          <img src={m.img} alt={m.text} className="w-full aspect-[5/4] object-cover" loading="lazy" />
          <p className="px-4 pt-3 font-serif text-ink" style={{ fontSize: 17, fontWeight: 500, lineHeight: 1.3 }}>
            {m.text}
          </p>
        </>
      ) : null}

      {m.kind === "voice" ? (
        <div className="px-4">
          <div
            className="flex items-center gap-3 rounded-2xl p-3"
            style={{ backgroundColor: "var(--jade-soft)" }}
          >
            <button
              type="button"
              aria-label="Play voice note"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "var(--jade)" }}
            >
              <span aria-hidden style={{ display: "inline-block", width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderLeft: "10px solid #fff", marginLeft: 3 }} />
            </button>
            <div className="flex-1 h-8 flex items-center gap-[3px]">
              {Array.from({ length: 28 }).map((_, i) => (
                <span
                  key={i}
                  className="rounded-full"
                  style={{
                    width: 3,
                    height: 6 + ((i * 7) % 22),
                    backgroundColor: "var(--jade)",
                    opacity: 0.7,
                  }}
                />
              ))}
            </div>
            <span className="font-sans" style={{ fontSize: 13, color: "var(--jade)", fontWeight: 600 }}>
              0:{String(m.seconds).padStart(2, "0")}
            </span>
          </div>
          <p className="mt-3 font-sans" style={{ fontSize: 15, color: "var(--ink-2)" }}>
            {m.text}
          </p>
        </div>
      ) : null}

      {m.kind === "plan" ? (
        <div className="mx-4 rounded-2xl p-4" style={{ backgroundColor: "var(--plum-soft)" }}>
          <p className="font-sans uppercase" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--plum)", fontWeight: 700 }}>
            {m.when}
          </p>
          <p className="mt-1 font-serif text-ink" style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.2 }}>
            {m.title}
          </p>
          <p className="mt-1 flex items-center gap-1.5 font-sans" style={{ fontSize: 13, color: "var(--ink-2)" }}>
            <MapPin size={14} color="var(--plum)" />
            {m.place}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-sans" style={{ fontSize: 13, color: "var(--ink-3)" }}>
              {m.going} going
            </span>
            <button
              type="button"
              className="rounded-full font-sans"
              style={{ backgroundColor: "var(--plum)", color: "#fff", fontSize: 14, fontWeight: 600, padding: "8px 16px" }}
            >
              I'm coming
            </button>
          </div>
        </div>
      ) : null}

      {/* actions */}
      {m.kind !== "plan" ? (
        <div className="flex items-center gap-2 p-3 pt-3">
          <button
            type="button"
            onClick={() => onSayHello(m.who)}
            className="flex-1 flex items-center justify-center gap-2 rounded-full font-sans"
            style={{ backgroundColor: "var(--marigold-soft)", color: "var(--marigold)", fontSize: 14, fontWeight: 600, padding: "10px 12px" }}
          >
            <MessageCircle size={16} />
            Say hello
          </button>
          <button
            type="button"
            aria-label="Send love"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface"
          >
            <Heart size={18} color="var(--marigold)" />
          </button>
          <span
            className="font-sans"
            style={{ fontSize: 13, color: "var(--ink-3)", minWidth: 56, textAlign: "right", paddingRight: 4 }}
          >
            {"hellos" in m ? `${m.hellos} hellos` : null}
          </span>
        </div>
      ) : null}
    </article>
  );
}

/* ---------- hello sheet ---------- */

function HelloSheet({ person, onClose }: { person: Person; onClose: () => void }) {
  const [recording, setRecording] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-end" role="dialog" aria-label={`Say hello to ${person.name}`}>
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />
      <div
        className="relative w-full max-w-[480px] mx-auto bg-paper rounded-t-3xl p-5 pb-8"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 24px)" }}
      >
        <div className="flex items-center gap-3">
          <img src={person.img} alt="" className="h-12 w-12 rounded-full object-cover" />
          <div className="flex-1 min-w-0">
            <p className="font-serif text-ink" style={{ fontSize: 20, fontWeight: 600 }}>
              Say hello to {person.name}
            </p>
            <p className="font-sans" style={{ fontSize: 13, color: "var(--ink-3)" }}>
              Hold the mic to record, or tap a reply
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface border border-line"
          >
            <X size={18} color="var(--ink)" />
          </button>
        </div>

        {/* voice */}
        <div className="mt-5 flex flex-col items-center">
          <button
            type="button"
            onPointerDown={() => setRecording(true)}
            onPointerUp={() => setRecording(false)}
            onPointerLeave={() => setRecording(false)}
            className="flex h-24 w-24 items-center justify-center rounded-full active:scale-95 transition"
            style={{
              backgroundColor: recording ? "var(--marigold)" : "var(--marigold-soft)",
              boxShadow: recording ? "0 0 0 12px rgba(232,118,31,0.18)" : "none",
            }}
            aria-label="Hold to record voice note"
          >
            <Mic size={36} color={recording ? "#fff" : "var(--marigold)"} />
          </button>
          <p className="mt-3 font-sans" style={{ fontSize: 14, color: "var(--ink-2)" }}>
            {recording ? "Listening… release to send" : "Hold to record"}
          </p>
        </div>

        {/* presets */}
        <div className="mt-6">
          <p className="font-sans uppercase" style={{ fontSize: 11, letterSpacing: "0.14em", color: "var(--ink-3)", fontWeight: 600 }}>
            Or a quick reply
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {presets.map((p) => (
              <li key={p}>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full bg-surface border border-line font-sans text-ink"
                  style={{ fontSize: 14, fontWeight: 500, padding: "10px 14px" }}
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* call */}
        <button
          type="button"
          className="mt-5 w-full flex items-center justify-center gap-2 rounded-full font-sans"
          style={{ backgroundColor: "var(--jade)", color: "#fff", fontSize: 16, fontWeight: 600, padding: "14px" }}
        >
          <Phone size={18} />
          Call {person.name} instead
        </button>
      </div>
    </div>
  );
}
