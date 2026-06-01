type Tile = {
  title: string;
  subline: string;
  bg: string;
  fg: string;
  illustration: React.ReactNode;
};

function TileCard({ tile }: { tile: Tile }) {
  return (
    <button
      type="button"
      className="relative overflow-hidden rounded-card text-left p-4 active:scale-[0.98] transition"
      style={{ backgroundColor: tile.bg, height: 160 }}
    >
      <h3 className="font-serif" style={{ fontSize: "18px", fontWeight: 600, color: tile.fg, lineHeight: 1.2 }}>
        {tile.title}
      </h3>
      <p className="mt-1 font-sans" style={{ fontSize: "13px", color: "var(--ink-2)", maxWidth: "85%" }}>
        {tile.subline}
      </p>
      <div className="absolute bottom-2 right-2 opacity-90 pointer-events-none">
        {tile.illustration}
      </div>
    </button>
  );
}

const sz = 64;

const CircleIllus = (
  <svg width={sz} height={sz} viewBox="0 0 64 64" fill="none">
    <circle cx="22" cy="28" r="9" stroke="#6B3D58" strokeWidth="2.2" />
    <circle cx="42" cy="28" r="9" stroke="#6B3D58" strokeWidth="2.2" />
    <path d="M10 52c2-7 8-11 14-11M54 52c-2-7-8-11-14-11" stroke="#6B3D58" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);
const SaathiIllus = (
  <svg width={sz} height={sz} viewBox="0 0 64 64" fill="none">
    <path d="M32 50s-16-9-16-22a10 10 0 0 1 16-8 10 10 0 0 1 16 8c0 13-16 22-16 22Z" stroke="#1F7A6B" strokeWidth="2.2" strokeLinejoin="round" />
  </svg>
);
const HealthIllus = (
  <svg width={sz} height={sz} viewBox="0 0 64 64" fill="none">
    <rect x="14" y="22" width="36" height="24" rx="6" stroke="#D9A21B" strokeWidth="2.2" />
    <path d="M32 28v12M26 34h12" stroke="#D9A21B" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);
const EventsIllus = (
  <svg width={sz} height={sz} viewBox="0 0 64 64" fill="none">
    <rect x="12" y="18" width="40" height="32" rx="5" stroke="#E8761F" strokeWidth="2.2" />
    <path d="M12 28h40M22 14v8M42 14v8" stroke="#E8761F" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const tiles: Tile[] = [
  { title: "Your Circle", subline: "friends, posts, birthdays", bg: "var(--plum-soft)", fg: "var(--plum)", illustration: CircleIllus },
  { title: "Saathi", subline: "request a volunteer visit", bg: "var(--jade-soft)", fg: "var(--jade)", illustration: SaathiIllus },
  { title: "Health", subline: "medicines, vitals, doctor", bg: "var(--gold-soft)", fg: "#8a6610", illustration: HealthIllus },
  { title: "Events near you", subline: "in your neighbourhood", bg: "var(--marigold-soft)", fg: "var(--marigold)", illustration: EventsIllus },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {tiles.map((t) => (
        <TileCard key={t.title} tile={t} />
      ))}
    </div>
  );
}
