
## Goal

Replace the current home with a cleaner, tighter, more dignified single-screen mobile layout (390px baseline) for Sukhada — following the exact tokens, type scale, and section structure you specified. One nudge slot, one saffron CTA, generous whitespace.

## Scope

- Single page at `/` (no routing changes).
- Mobile-first, responsive up gracefully (content stays centered, max-width ~ 480px on larger screens).
- No backend, no auth wiring — static content for the logged-in state.

## Files

1. `index.html` — add Google Fonts links for **Fraunces** (400–600) and **Inter** (400–600).
2. `src/styles.css` — register Sukhada tokens as CSS variables in `:root` and map them in `@theme inline` so Tailwind utilities like `bg-paper`, `text-ink`, `bg-saffron`, `border-line`, `font-serif`, `font-sans`, `rounded-card`, `shadow-soft` work. Set body font to Inter, base size 17px, background `#FFF8EC`, ink `#2A1810`.
3. `src/routes/index.tsx` — replace placeholder with the new home composition (sections below). Update `head()` title/description to Sukhada.
4. `src/components/sukhada/` — small presentational components, no logic:
   - `Header.tsx` (eyebrow, greeting, bell, avatar)
   - `NudgeCard.tsx` (single daily nudge)
   - `FeatureTile.tsx` + `FeatureGrid.tsx` (2×2)
   - `HumansStrip.tsx` (horizontal scroll, 3.x cards visible)
   - `TalkToUsCard.tsx` (bottom CTA, the only saffron button)
   - `BottomNav.tsx` (fixed, 3 tabs, safe-area padding)
5. `src/assets/sukhada/` — 4 lightweight inline SVG illustrations for the tiles (plum, jade, gold, marigold) and 3 photo placeholders for Humans cards (use Unsplash URLs with a warm overlay; no generated images needed for v1).

## Design tokens (exact)

```
--paper:     #FFF8EC      --surface:    #FFFFFF
--saffron:   #F5A623
--ink:       #2A1810      --ink-2: #5C4032   --ink-3: #8B7868
--line:      #EFE0C2
--marigold:  #E8761F      --marigold-soft: #FFE3C2
--jade:      #1F7A6B      --jade-soft:     #C8E5DD
--gold:      #D9A21B      --gold-soft:     #F8E5A8
--plum:      #6B3D58      --plum-soft:     #EAD5DC
--radius-card: 18px   --radius-btn: 14px   --radius-input: 12px
--shadow-soft: 0 2px 12px rgba(0,0,0,0.06)
```

Type scale: Fraunces 400–600 for headlines/tile titles/greeting; Inter 400–600 for everything else. Body 17px. Section headers 22px. Tile titles 18px. Greeting 30px. Eyebrow 11px uppercase, 1.4 tracking, marigold. CTAs 18px.

## Layout (top → bottom)

```
┌──────────────────────────────────┐ sticky, paper bg, 20px pad
│ TUESDAY · 2 JUNE        🔔  ◯   │
│ Namaste, Sharmila Ji              │
└──────────────────────────────────┘
   ↕ 28px
┌──────────────────────────────────┐ white card, 18r, soft shadow
│ [◐] Your saathi Anjali visits …  │
│     11 AM · Park walk and chai › │
└──────────────────────────────────┘
   ↕ 32px
What would you like today?
┌────────────┐ ┌────────────┐
│ Your Circle│ │   Saathi   │   plum-soft / jade-soft
│ friends…   │ │ request…   │
└────────────┘ └────────────┘
┌────────────┐ ┌────────────┐
│  Health    │ │ Events…    │   gold-soft / marigold-soft
└────────────┘ └────────────┘
   ↕ 32px
Humans of Sukhada            See all
[photo card] [photo card] [photo card]→
   ↕ 32px
┌──────────────────────────────────┐ marigold-soft
│ Need help, Ji?      [ 📞 Call ]  │  ← only saffron CTA, 80h
│ Call us 9 AM – 7 PM              │
└──────────────────────────────────┘
   ↕ 96px (clear bottom nav)
┌──────────────────────────────────┐ fixed white, 72h + safe area
│  • Home    Health    More        │
└──────────────────────────────────┘
```

## Accessibility (non-negotiable, will be verified)

- Body ≥ 17px, tile/nudge titles 18px Fraunces, section headers 22px, greeting 30px, CTA 18px on 80×56 pill.
- All tappables ≥ 48×48 (bell 48, avatar 48, tiles 160h, nudge full width, Call 80×56 visible but wrapped in 80h container, nav tabs 72h with 48+ tap area).
- Visible labels on every action — no icon-only buttons. Call button has phone icon + "Call". Bell has `aria-label="Notifications"`.
- Contrast: all text uses `--ink` or `--ink-2` on `--paper`/`--surface`/soft accent tiles. Tile titles use the dark variant of their accent (`--plum`, `--jade`, `--gold`, `--marigold`) on soft backgrounds — all pass AA at 18px/600.
- Single `<main>` wraps content; `<h1>` is the greeting; section headers are `<h2>`; nav uses `<nav aria-label="Primary">`.

## Deliberately omitted

No FAB. No second banner above the fold. No "create post" / moments row. No second saffron button anywhere. No icon-only controls.

## Copy (final, warm Indian familial tone)

- Eyebrow: `TUESDAY · 2 JUNE`
- Greeting: `Namaste, Sharmila Ji`
- Nudge: `Your saathi Anjali visits on Thursday` / `11 AM · Park walk and chai`
- Section: `What would you like today?`
- Tiles: `Your Circle` / `friends, posts, birthdays` — `Saathi` / `request a volunteer visit` — `Health` / `medicines, vitals, doctor` — `Events near you` / `in your neighbourhood`
- Section: `Humans of Sukhada` · `See all`
- CTA card: `Need help, Ji?` / `Call us anytime, 9 AM – 7 PM` / button `Call`
- Nav: `Home`, `Health`, `More`

No "seamless / unlock / leverage / explore / discover" anywhere.

## Verification before finishing

- Read the rendered page in the preview at 390px and confirm: one nudge card above the fold, one saffron button on screen, tiles aligned in 2×2 with 16px gap, Humans strip shows ~3.2 cards.
- Spot-check contrast of tile titles on soft backgrounds.
- Confirm no placeholder remains in `src/routes/index.tsx`.
