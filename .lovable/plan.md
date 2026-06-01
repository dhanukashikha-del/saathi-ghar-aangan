
## Goal

Replace the uniform 2×2 tile grid with the asymmetric bento layout from your reference:

```
┌──────────────┬──────────────┐
│              │   Need       │
│  Your Circle │  company     │  ← jade, short
│  (tall,      ├──────────────┤
│   marigold)  │  Track your  │
│              │  health      │  ← gold, short
├──────────────┴──────────────┤
│  UPCOMING · Events near you │  ← plum, full-width ribbon
└─────────────────────────────┘
```

Section header copy also shifts to match the reference's voice: **"What do you need?"** (with "need?" in marigold serif), replacing "What would you like today?".

## Layout spec

- CSS grid, 2 columns, 16px gap, 20px horizontal page margin.
- **Your Circle** (marigold tile): col 1, spans both rows. Tall (~360px). Marigold solid `#E8761F` background, white/cream type. Small "3 NEW" pill in top-right. Illustration anchored bottom-left. CTA chip "Your Circle · Catch up with friends" pinned to the bottom on a white surface inside the tile.
- **Need company today?** (jade tile): col 2, row 1. ~172px tall. Jade-soft bg, jade title.
- **Track your health** (gold tile): col 2, row 2. ~172px tall. Gold-soft bg, gold title.
- **Events near you** (plum ribbon): full-width below the grid, spans both columns. Plum solid `#6B3D58`, white text. Left: small marigold-soft rounded icon block, then `UPCOMING` eyebrow + `Events near you` title. Right: chevron.

Result: the "Events near you" tile leaves the 2×2 and becomes the standalone bottom ribbon as in the reference. The Humans of Sukhada strip and the "Need help, Ji?" call card stay below it, unchanged.

## Tokens (no new ones)

- Marigold tile: `bg = var(--marigold)`, title white, subline `rgba(255,255,255,0.85)`.
- Jade tile: `bg = var(--jade-soft)`, title `var(--jade)`, subline `var(--ink-2)`.
- Gold tile: `bg = var(--gold-soft)`, title dark gold `#8a6610`, subline `var(--ink-2)`.
- Plum ribbon: `bg = var(--plum)`, title white, eyebrow `var(--marigold-soft)` uppercase.
- Radius 18px on all four. No shadows (flat surfaces, as in the reference).

## Accessibility holds

- All titles 18–22px Fraunces 500/600 on solid backgrounds — all pass AA at these sizes.
- Hero tile and ribbon are both ≥56px tall and entire surface is the tap target.
- "3 NEW" pill is decorative; not the tap target. Tile still tappable as one button.
- No icon-only controls. Chevron on ribbon paired with the visible title.

## Files

- `src/components/sukhada/FeatureGrid.tsx` — rewrite to the bento layout above. Drop the 4-tile uniform grid; render the marigold hero + jade + gold + plum ribbon directly.
- `src/routes/index.tsx` — change the section heading to "What do you need?" with "need?" in marigold serif. No other route changes.

That's it — no new files, no new tokens, no nav or copy changes outside the section header.

## Verification

- Open the preview at 390px and at the current 833px width and confirm:
  - Hero tile spans both rows on the right column's height.
  - Jade and gold tiles stack cleanly with the same 16px gap.
  - Plum ribbon is full-width directly under the grid.
  - "Need help, Ji?" is still the only saffron CTA on the page.
