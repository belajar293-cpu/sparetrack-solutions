# SpareTrack Landing Page — Build Plan

A single long-form landing page at `/` for SpareTrack, executed in strict Swiss / International Typographic Style with dashboard-centric visuals built from real HTML/CSS (no stock images, no illustrations).

## Design system

Tokens added to `src/styles.css` under `@theme` + `:root` (oklch equivalents of the supplied hex):

- `--color-navy` #0D1B2A, `--color-navy-2` #1B263B, `--color-steel` #415A77
- `--color-accent` #3B82F6
- `--color-bg` #F8FAFC, `--color-surface` #FFFFFF
- `--color-ink` #0F172A, `--color-ink-muted` #64748B, `--color-rule` #E2E8F0
- `--color-success` #10B981, `--color-warn` #F59E0B, `--color-danger` #EF4444
- Spacing on 8px scale; container max 1440px, content 1200px, 12-col grid via Tailwind.

Typography: Inter (400/500/600/700) loaded via `<link>` in `src/routes/__root.tsx` head (per Tailwind v4 rule — no @import in CSS). `--font-sans: "Inter"`. Tight tracking on display sizes (`tracking-tight`, `-0.02em`). No serif, no decorative fonts.

Iconography: `lucide-react` only, 1.5px stroke, monochrome (navy or steel). No emojis, no illustrations, no gradients beyond a single subtle navy radial in the final CTA.

## Page structure (single route)

Implemented in `src/routes/index.tsx` (replacing the placeholder), composed from small section components under `src/components/landing/`:

1. `Nav.tsx` — thin top bar: wordmark "SpareTrack" + small grid mark, nav links (Product, Solutions, Roadmap, Pricing, Docs), `Request Demo` button.
2. `Hero.tsx` — 12-col grid. Left 5 cols: eyebrow rule + label "ENTERPRISE SPARE PARTS PLATFORM", H1 "Know exactly where every spare part is.", subhead, primary `Request Demo` + secondary `View Product Tour`, 4 trust ticks. Right 7 cols: composed dashboard mock (KPI strip, search field with chip results, warehouse map grid, component status table, lifecycle timeline). Two floating KPI chips overlap edges (98% / 80%). All built with divs + Tailwind — no images.
3. `Problems.tsx` — H2 "The cost of poor spare parts visibility." 2×3 card grid, each card: icon, title, 2-line explanation, impact metric in steel-blue mono.
4. `Solution.tsx` — H2 + horizontal 8-step workflow rail (Receiving → … → Reinstallation) with numbered nodes and connectors; below: 7-item benefits list in 2 columns.
5. `SearchDemo.tsx` — Realistic search UI: input with cursor, suggestion chips (145-1408, LF9009, Engine SN, Equipment #, Alt P/N), expanded result card showing Location breadcrumb, Qty, Compatible Equipment/Engine, Status pill, Last movement timestamp.
6. `Serialized.tsx` — H2 + 6 component cards (Engine, Transmission, Final Drive, Hydraulic Pump, Turbocharger, ECM) with PN, SN, location, current equipment, install count, rebuild count, status pill. Below: one expanded lifecycle timeline (Received → Installed → Removed → Rebuilt → Reinstalled) with dates.
7. `Features.tsx` — 12-feature grid (4×3 desktop, 2-col tablet, 1-col mobile). Each: icon, title, one-line description.
8. `Impact.tsx` — Dark navy band. 5 huge metrics in display weight, hairline dividers between, label underneath each.
9. `Roles.tsx` — 7 role cards in a 4+3 grid; each card lists 3 responsibilities as bullet rows.
10. `Comparison.tsx` — Two-column table: "Manual process" (muted, strikethrough-style rows with × marks) vs "SpareTrack" (navy, ✓ marks). 7 rows each.
11. `DashboardPreview.tsx` — Full-bleed large dashboard mock with 8 widgets in a bento grid (Inventory Overview, Transfer Status, Low Stock Alerts, Installed Components, Lifecycle Health, Warehouse Distribution, Search Analytics, Recent Movements). Pure HTML/CSS — bar/line widgets via divs.
12. `Roadmap.tsx` — Horizontal 6-phase timeline with phase numbers, titles, short descriptions.
13. `FinalCTA.tsx` — Navy background, large headline, subhead, two CTAs (`Request Demo`, `Contact Sales`).
14. `Footer.tsx` — Minimal Swiss footer: wordmark, 4 link columns, fine print.

## Copy

All copy written exactly per brief; expanded only where the brief gave a list (e.g. benefits, problems) into concise Swiss-style one-liners. No marketing fluff, no testimonials, no fake logos.

## SEO / head

`Route.head()` sets:
- title "SpareTrack — Enterprise Spare Parts Visibility & Lifecycle Management"
- description ≤160 chars
- og:title, og:description, og:type=website, twitter:card=summary_large_image

Single H1 (hero). Semantic `<section>` with `aria-labelledby` per section.

## Responsive

Desktop-first via Tailwind breakpoints. At `md`: dashboard mock stacks below hero copy; bento collapses to 2-col. At `sm`: all grids 1-col, workflow rail becomes vertical, comparison becomes stacked pairs. Header rows use the `grid-cols-[minmax(0,1fr)_auto]` + `min-w-0` + `shrink-0` pattern from the responsive guidance.

## Technical notes

- New deps: none beyond `lucide-react` (already standard with shadcn template — verify; add via `bun add lucide-react` only if missing).
- No backend, no Cloud — pure presentation. Form CTAs are buttons that scroll to / open mailto for now (no submission backend in scope).
- File list to create:
  - `src/components/landing/{Nav,Hero,Problems,Solution,SearchDemo,Serialized,Features,Impact,Roles,Comparison,DashboardPreview,Roadmap,FinalCTA,Footer}.tsx`
  - `src/components/landing/primitives.tsx` (shared `Stat`, `Pill`, `KPIChip`, `SectionHeader`, `Eyebrow`)
- Edit `src/styles.css` (tokens + Inter font family registration).
- Edit `src/routes/__root.tsx` to add Inter `<link>` tags and update default meta.
- Replace `src/routes/index.tsx` placeholder with the composed landing page + SEO head.

## Out of scope

- Authentication, demo request backend, pricing page, multi-route nav targets (nav links are anchors to on-page sections).
- Real product screenshots — every "dashboard" is rendered HTML.
