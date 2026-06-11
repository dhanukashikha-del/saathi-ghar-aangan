import { Home, HeartPulse, Users, MoreHorizontal } from "lucide-react";
import { Link } from "@tanstack/react-router";

type Tab = { id: string; label: string; Icon: typeof Home; to: string };

const tabs: Tab[] = [
  { id: "home", label: "Home", Icon: Home, to: "/" },
  { id: "circle", label: "Circle", Icon: Users, to: "/circle" },
  { id: "health", label: "Health", Icon: HeartPulse, to: "/health" },
  { id: "more", label: "More", Icon: MoreHorizontal, to: "/" },
];

export function BottomNav({ active = "home" }: { active?: string }) {
  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-surface border-t border-line"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-4" style={{ height: 72 }}>
        {tabs.map(({ id, label, Icon, to }) => {
          const isActive = id === active;
          return (
            <li key={id}>
              <Link
                to={to}
                className="relative flex h-full w-full flex-col items-center justify-center gap-1"
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  aria-hidden
                  className="absolute top-2 h-1 w-1 rounded-full"
                  style={{ backgroundColor: isActive ? "var(--saffron)" : "transparent" }}
                />
                <Icon
                  size={26}
                  strokeWidth={2}
                  color={isActive ? "var(--saffron)" : "var(--ink-3)"}
                />
                <span
                  className="font-sans"
                  style={{
                    fontSize: "13px",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "var(--saffron)" : "var(--ink-3)",
                  }}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
