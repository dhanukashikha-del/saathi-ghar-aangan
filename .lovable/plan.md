# Claude → Flutter Handoff Guide

Add a new file `design-handoff/CLAUDE_FLUTTER_PROMPT.md` next to your existing `DESIGN_HANDOFF.md` and `circle-screen-full.png`. It gives your developer (or Claude Code directly) a copy‑paste workflow to turn the design spec into a working Flutter app.

## What the new file contains

### 1. Setup block (one-time)
- Flutter version: 3.24+ (Dart 3.5+)
- Create project: `flutter create sukhada_circle --org com.sukhada --platforms=ios,android`
- Required packages (with rationale):
  - `google_fonts` — Fraunces + Inter from spec
  - `flutter_svg` — icon parity with lucide
  - `lucide_icons` — same icon set as web
  - `cached_network_image` — avatars / photo cards
  - `record` + `just_audio` — hold‑to‑record voice composer
  - `image_picker` — photo posts
  - `intl` — "2h ago" timestamps
  - `go_router` — tab + sheet navigation
  - `flutter_riverpod` (or `provider`) — moments feed state

### 2. Folder structure to ask Claude to scaffold
```text
lib/
  main.dart
  theme/
    colors.dart        // tokens from DESIGN_HANDOFF.md §Color system
    typography.dart    // Fraunces / Inter text styles
    radii.dart         // 12 / 14 / 18 / 20
    shadows.dart       // soft shadow
  models/
    person.dart
    moment.dart        // sealed class: Birthday | Photo | Text | Voice | Plan
    event.dart
  widgets/
    avatar.dart
    tone_chip.dart
    moment_card/
      birthday_card.dart
      photo_card.dart
      text_quote_card.dart
      voice_card.dart
      plan_card.dart
    composer_tile.dart
    composer_sheet.dart
    events_strip.dart
    people_ribbon.dart
    hello_sheet.dart
    voice_fab.dart
    bottom_nav.dart
  screens/
    circle_screen.dart
    home_screen.dart
    health_screen.dart
  data/
    mock_feed.dart
```

### 3. The exact prompt to paste into Claude (Code or chat)
A ready‑to‑send block that:
- Attaches `DESIGN_HANDOFF.md` + `circle-screen-full.png`
- Tells Claude: *"Build a Flutter app matching this spec. Use the folder structure below. Follow §Color system, §Typography, §Component specs verbatim. Use mock data first, no backend."*
- Lists acceptance checks: pixel‑accurate Composer tile, 5 moment card variants render, hold‑to‑record FAB, bottom nav with marigold active dot, Fraunces for serif quotes.

### 4. Build order (so Claude doesn't try everything at once)
1. Theme + tokens (`colors.dart`, `typography.dart`)
2. Models + `mock_feed.dart`
3. Atoms: `Avatar`, `ToneChip`, `BottomNav`
4. Strips: `PeopleRibbon`, `EventsStrip`
5. Five `MomentCard` variants (one prompt per variant)
6. `ComposerTile` + `ComposerSheet` + `VoiceFab`
7. `CircleScreen` assembling everything
8. Wire `go_router` for Home / Circle / Health tabs

Each step is one Claude turn, each ending with `flutter analyze && flutter run`.

### 5. Flutter equivalents cheat‑sheet (added inline)
| Web spec | Flutter |
|---|---|
| `#FFF8EC` paper | `Color(0xFFFFF8EC)` as `scaffoldBackgroundColor` |
| Fraunces 28/500 | `GoogleFonts.fraunces(fontSize: 28, fontWeight: FontWeight.w500)` |
| Inter 15/500 | `GoogleFonts.inter(fontSize: 15, fontWeight: FontWeight.w500)` |
| 18px radius card | `BorderRadius.circular(18)` |
| Soft shadow | `BoxShadow(blurRadius: 12, color: Colors.black.withOpacity(.06), offset: Offset(0,2))` |
| Marigold soft bg | `Color(0xFFFFE3C2)` |
| Bottom sheet | `showModalBottomSheet(isScrollControlled: true, …)` |
| Hold‑to‑record | `GestureDetector(onLongPressStart/End)` + `record` pkg |
| Horizontal strip | `SingleChildScrollView(scrollDirection: Axis.horizontal)` |
| Lucide `Quote` | `LucideIcons.quote` |

### 6. What to send your developer
A 3‑item zip:
- `DESIGN_HANDOFF.md` (already done)
- `circle-screen-full.png` (already done)
- `CLAUDE_FLUTTER_PROMPT.md` (new — this plan creates it)

Plus one line: *"Open Claude Code in an empty Flutter project, attach these three files, paste the prompt in §3, accept changes step by step."*

## Files

- **Create** `design-handoff/CLAUDE_FLUTTER_PROMPT.md` containing sections 1–6 above.

No code in the Lovable project itself changes — this is documentation only.
