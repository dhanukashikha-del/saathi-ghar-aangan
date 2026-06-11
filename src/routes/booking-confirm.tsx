import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Home as HomeIcon,
  MessageSquare,
  Users,
  ChevronRight,
  Star,
  Shield,
} from "lucide-react";
import { BottomNav } from "@/components/sukhada/BottomNav";

export const Route = createFileRoute("/booking-confirm")({
  head: () => ({
    meta: [
      { title: "Confirm your Saathi — Sukhada" },
      { name: "description", content: "Review your Saathi visit before sending." },
    ],
  }),
  component: BookingConfirm,
});

function BookingConfirm() {
  const [note, setNote] = useState("Please ring the bell twice. Tea is ready.");

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
            Review & confirm
          </p>
          <div className="h-11 w-11" />
        </div>

        <div className="px-5">
          <h1
            className="font-serif text-ink"
            style={{ fontSize: "28px", lineHeight: 1.15, fontWeight: 500 }}
          >
            Almost done, Sharmila Ji
          </h1>
          <p
            className="mt-2 font-sans"
            style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: 1.5 }}
          >
            Have a quick look before we send your request.
          </p>
        </div>

        {/* Saathi card */}
        <section className="px-5 mt-6">
          <div className="rounded-[20px] bg-surface border border-line shadow-soft p-5">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=70&auto=format&fit=crop"
                alt="Anjali"
                className="h-16 w-16 rounded-2xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <p
                  className="font-serif text-ink"
                  style={{ fontSize: "20px", fontWeight: 500 }}
                >
                  Anjali
                </p>
                <p
                  className="font-sans inline-flex items-center gap-1"
                  style={{ fontSize: "13px", color: "var(--ink-3)" }}
                >
                  <Star size={13} fill="var(--gold)" color="var(--gold)" /> 4.9
                  · 84 visits · 1.1 km
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {["Verified", "First-aid", "Hindi · Kannada"].map((b) => (
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
            </div>
          </div>
        </section>

        {/* Visit details */}
        <section className="px-5 mt-4">
          <div className="rounded-[20px] bg-surface border border-line shadow-soft divide-y divide-line">
            <Row
              icon={<HomeIcon size={18} color="var(--marigold)" />}
              tint="var(--marigold-soft)"
              label="Help with"
              value="Home visit · chai & conversation"
            />
            <Row
              icon={<Calendar size={18} color="var(--plum)" />}
              tint="var(--plum-soft)"
              label="When"
              value="Today, 2 Jun"
              sub="4:00 pm – 5:00 pm"
            />
            <Row
              icon={<MapPin size={18} color="var(--jade)" />}
              tint="var(--jade-soft)"
              label="Where"
              value="14, Lotus Apartments"
              sub="Indiranagar, Bengaluru 560038"
              action="Change"
            />
            <Row
              icon={<Users size={18} color="var(--gold)" />}
              tint="var(--gold-soft)"
              label="Family will be notified"
              value="Vikram (son) · Priya (daughter)"
            />
          </div>
        </section>

        {/* Note */}
        <section className="px-5 mt-4">
          <div className="rounded-[20px] bg-surface border border-line shadow-soft p-5">
            <div className="flex items-center gap-2">
              <MessageSquare size={16} color="var(--ink-2)" />
              <p
                className="font-sans font-medium"
                style={{ fontSize: "13px", color: "var(--ink-2)" }}
              >
                A note for Anjali (optional)
              </p>
            </div>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="mt-3 w-full resize-none rounded-[14px] bg-paper border border-line p-3 font-sans focus:outline-none focus:ring-2 focus:ring-saffron"
              style={{ fontSize: "15px", color: "var(--ink)", lineHeight: 1.45 }}
            />
          </div>
        </section>

        {/* Reassurance */}
        <section className="px-5 mt-4">
          <div
            className="rounded-[18px] p-4 border border-line flex items-start gap-3"
            style={{ background: "var(--jade-soft)" }}
          >
            <Shield size={18} color="var(--jade)" />
            <p
              className="font-sans"
              style={{ fontSize: "13px", color: "var(--ink-2)", lineHeight: 1.45 }}
            >
              Anjali is background-checked. Your family sees this visit, and
              you can cancel anytime — free.
            </p>
          </div>
        </section>
      </div>

      <div
        className="fixed bottom-[72px] left-1/2 -translate-x-1/2 w-full max-w-[480px] px-5 pb-3 pt-4"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,248,236,0) 0%, var(--paper) 40%)",
        }}
      >
        <Link
          to="/booking-waiting"
          className="w-full rounded-[14px] py-4 font-sans font-semibold text-surface active:scale-[0.99] transition shadow-soft inline-flex items-center justify-center gap-2"
          style={{ background: "var(--marigold)", fontSize: "16px" }}
        >
          Send request to Anjali
        </Link>
      </div>

      <BottomNav active="more" />
    </div>
  );
}

function Row({
  icon,
  tint,
  label,
  value,
  sub,
  action,
}: {
  icon: React.ReactNode;
  tint: string;
  label: string;
  value: string;
  sub?: string;
  action?: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4">
      <div
        className="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
        style={{ background: tint }}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
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
        <p
          className="font-serif text-ink mt-0.5"
          style={{ fontSize: "16px", fontWeight: 500 }}
        >
          {value}
        </p>
        {sub && (
          <p
            className="font-sans"
            style={{ fontSize: "13px", color: "var(--ink-3)" }}
          >
            {sub}
          </p>
        )}
      </div>
      {action && (
        <button
          className="font-sans font-medium inline-flex items-center gap-0.5"
          style={{ fontSize: "13px", color: "var(--marigold)" }}
        >
          {action} <ChevronRight size={14} />
        </button>
      )}
    </div>
  );
}
