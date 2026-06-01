import { Phone } from "lucide-react";

export function TalkToUsCard() {
  return (
    <section
      className="flex items-center gap-4 rounded-card p-5"
      style={{ backgroundColor: "var(--marigold-soft)" }}
    >
      <div className="min-w-0 flex-1">
        <h2 className="font-serif text-ink" style={{ fontSize: "18px", fontWeight: 600, lineHeight: 1.25 }}>
          Need help, Ji?
        </h2>
        <p className="mt-1 font-sans" style={{ fontSize: "14px", color: "var(--ink-2)" }}>
          Call us anytime, 9 AM – 7 PM
        </p>
      </div>
      <a
        href="tel:+911800000000"
        className="flex shrink-0 items-center justify-center gap-2 rounded-2xl font-sans text-white active:scale-[0.97] transition"
        style={{
          backgroundColor: "var(--saffron)",
          height: 80,
          paddingInline: 22,
          fontSize: "16px",
          fontWeight: 600,
          boxShadow: "0 4px 14px rgba(245,166,35,0.35)",
        }}
        aria-label="Call Sukhada support"
      >
        <Phone size={22} strokeWidth={2.2} />
        <span>Call</span>
      </a>
    </section>
  );
}
