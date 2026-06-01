import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sukhada/Header";
import { NudgeCard } from "@/components/sukhada/NudgeCard";
import { FeatureGrid } from "@/components/sukhada/FeatureGrid";
import { HumansStrip } from "@/components/sukhada/HumansStrip";
import { TalkToUsCard } from "@/components/sukhada/TalkToUsCard";
import { BottomNav } from "@/components/sukhada/BottomNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sukhada — Your circle of care" },
      { name: "description", content: "A warm, volunteer-powered care network for Indian senior citizens. Saathi visits, health, events and your circle — all in one place." },
      { property: "og:title", content: "Sukhada — Your circle of care" },
      { property: "og:description", content: "A warm, volunteer-powered care network for Indian senior citizens." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-dvh bg-paper">
      <div className="mx-auto w-full max-w-[480px] pb-28">
        <Header />

        <main>
          <section className="px-5 mt-2">
            <NudgeCard />
          </section>

          <section className="mt-8 px-5" aria-labelledby="discover-heading">
            <h2
              id="discover-heading"
              className="font-serif text-ink mb-4"
              style={{ fontSize: "22px", fontWeight: 500 }}
            >
              What would you like today?
            </h2>
            <FeatureGrid />
          </section>

          <section className="mt-8">
            <HumansStrip />
          </section>

          <section className="mt-8 px-5">
            <TalkToUsCard />
          </section>
        </main>
      </div>
      <BottomNav active="home" />
    </div>
  );
}
