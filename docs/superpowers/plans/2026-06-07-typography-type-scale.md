# Typography Type Scale Consolidation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace 51 ad-hoc text sizes with a 7-token type scale across all 20 active pages and shared components, raising minimum body copy from ~14px to 16px and eliminating near-duplicate sizes.

**Architecture:** Define CSS custom properties (`--text-xs` through `--text-display`) in `globals.css :root`. Override Tailwind v4's `@theme inline` for `xl` and `2xl` (which diverge from Tailwind defaults) and add `display`. Replace every `text-[Xrem]` Tailwind arbitrary class and every inline `fontSize: "Xrem"` style prop with scale tokens. Do it file-by-file in a single coordinated pass; each task migrates one file or a tightly related group and ends with a successful `npm run build` check.

**Tech Stack:** Next.js 16 App Router, Tailwind CSS v4 (`@import "tailwindcss"`), React/TSX, no test framework.

---

## Scale Reference (pin this for every task)

| Token | CSS var | Tailwind class | px | Use |
|---|---|---|---|---|
| xs | `--text-xs` | `text-xs` | 12px | Eyebrows, tracked uppercase labels, nav items, UI chrome |
| sm | `--text-sm` | `text-sm` | 14px | Captions, italic subtitles, footer body, button text, dense metadata |
| base | `--text-base` | `text-base` | 16px | **Default body copy — the new floor** |
| lg | `--text-lg` | `text-lg` | 18px | Lead paragraphs, emphasized body |
| xl | `--text-xl` | `text-xl` | 24px | Small section headers |
| 2xl | `--text-2xl` | `text-2xl` | 32px | Section subheads |
| display | `--text-display` | `text-display` | `clamp(3rem,7vw,5.5rem)` | Page H1 heroes |

### Tailwind arbitrary → token mapping

| Current class range | → | Token |
|---|---|---|
| `text-[0.45rem]`–`text-[0.75rem]` | → | `text-xs` |
| `text-[0.76rem]`–`text-[0.875rem]` | → | `text-sm` |
| `text-[0.88rem]`–`text-[1.05rem]` | → | `text-base` |
| `text-[1.1rem]`–`text-[1.15rem]` | → | `text-lg` |
| `text-[1.25rem]`–`text-[1.5rem]` | → | `text-xl` |
| `text-[1.6rem]`–`text-[2rem]` | → | `text-2xl` |

### Inline style fontSize → var mapping

| Current string range | → | Replace with |
|---|---|---|
| `"0.45rem"`–`"0.75rem"` | → | `"var(--text-xs)"` |
| `"0.76rem"`–`"0.875rem"` | → | `"var(--text-sm)"` |
| `"0.88rem"`–`"1.05rem"` | → | `"var(--text-base)"` |
| `"1.1rem"`–`"1.15rem"` | → | `"var(--text-lg)"` |
| `"1.25rem"`–`"1.5rem"` | → | `"var(--text-xl)"` |
| `"1.6rem"`–`"2rem"` | → | `"var(--text-2xl)"` |

### Contextual exceptions (always apply over the range rules)

- **Button text** — regardless of rem value (typically `0.82rem`–`0.95rem`), buttons use `text-sm` (intentionally compact UI)
- **Nav bar links and buttons** (`text-[0.62rem]`–`text-[0.65rem]` uppercase tracked) — → `text-xs`; do NOT promote to base
- **Dropdown subtext** (`text-[0.74rem]`) → `text-xs`
- **Dropdown body/title** (`text-[0.82rem]` bold) → `text-sm`
- **Mobile nav links** (`text-[0.92rem]`) → `text-base`
- **Ornamental large numbers** (e.g. `text-[1.1rem]` used as a `01`/`02` step counter) → `text-base`
- **Chat UI chrome** (window title bar `text-[0.72rem]`) → `text-xs`
- **Quote decorators / large punctuation** (`text-[5rem]`) — keep as-is; these are decorative, not type scale
- **clamp() section h2 values** — keep existing clamp values but ensure minimum is ≥ `var(--text-xl)` (1.5rem)
- **Home page hero H1** (`clamp(2.35rem,8.6vw,6.3rem)`) — **keep as-is**; it is intentionally oversized as the flagship hero

### H1 display standardization

Every page H1 hero currently uses a different `clamp()`. Fix all non-home H1 heroes to use:
```
text-[clamp(3rem,7vw,5.5rem)]
```

Files that need this fix:
- `HowItWorksSections.tsx` H1: currently `clamp(2rem,5vw,3.25rem)` ← too small
- All other page H1s: audit and align to this value

---

## Files Changed

```
src/app/globals.css                                        ← Task 1
src/components/Nav.tsx                                     ← Task 2
src/components/Footer.tsx                                  ← Task 2
src/components/PageHero.tsx                                ← Task 2
src/components/LoginLayout.tsx                             ← Task 2
src/components/home/HomeHeroSection.tsx                    ← Task 3
src/components/home/HomeForSection.tsx                     ← Task 3
src/components/home/HomeWhySection.tsx                     ← Task 3
src/components/home/HomeProblemShowcaseSection.tsx         ← Task 3
src/components/home/HomeSampleReportsSection.tsx           ← Task 3
src/components/home/HomeCtaSection.tsx                     ← Task 3
src/components/home/HomePromiseSection.tsx                 ← Task 3
src/components/home/HomeCredibilitySection.tsx             ← Task 3
src/components/home/HomeHowItWorksSection.tsx              ← Task 3
src/components/how-it-works/HowItWorksSections.tsx         ← Task 4
src/components/platform-overview/PlatformOverviewSections.tsx  ← Task 5
src/components/pricing/PricingSections.tsx                 ← Task 6
src/components/pricing/TechnicalProtocolFaq.tsx            ← Task 6
src/components/solutions/SolutionsSections.tsx             ← Task 7
src/components/solutions/LeadershipDevelopmentSections.tsx ← Task 7
src/components/solutions/TalentDecisionsSections.tsx       ← Task 7
src/components/company/CompanySections.tsx                 ← Task 8
src/components/for-coaches/ForCoachesSections.tsx          ← Task 8
src/components/conversational-ai/ConversationalAiSections.tsx  ← Task 9
src/components/reports-and-outputs/ReportsAndOutputsSections.tsx  ← Task 9
src/components/reports-and-outputs/ReportViewer.tsx        ← Task 9
src/components/resources/ResourcesSections.tsx             ← Task 10
src/components/resources/PhaseBreakdown.tsx                ← Task 10
src/components/resources/NewsletterSignup.tsx              ← Task 10
src/components/resources/ResourceFilterBar.tsx             ← Task 10
src/components/resources/SampleReportPreviewCard.tsx       ← Task 10
src/app/buy/page.tsx                                       ← Task 11
src/app/login/page.tsx                                     ← Task 11
src/app/admin/login/page.tsx                               ← Task 11
src/app/resources/*/page.tsx (5 files)                     ← Task 11
```

---

## Task 1: Define the Type Scale in globals.css

**Files:**
- Modify: `src/app/globals.css`

### Steps

- [ ] **Step 1: Add CSS custom properties to `:root`**

Open `src/app/globals.css`. Inside the existing `:root { }` block (after the last color variable, before the closing brace), add:

```css
  /* ── TYPE SCALE ── */
  --text-xs:      0.75rem;                      /* 12px  eyebrows, labels */
  --text-sm:      0.875rem;                     /* 14px  captions, footer body */
  --text-base:    1rem;                         /* 16px  default body copy */
  --text-lg:      1.125rem;                     /* 18px  lead paragraphs */
  --text-xl:      1.5rem;                       /* 24px  small section headers */
  --text-2xl:     2rem;                         /* 32px  section subheads */
  --text-display: clamp(3rem, 7vw, 5.5rem);    /* heroes */
```

- [ ] **Step 2: Register overrides in `@theme inline`**

Inside the existing `@theme inline { }` block (add after the last `--radius-*` line), add:

```css
  /* Type scale — xl and 2xl override Tailwind defaults; display is new */
  --font-size-xl:      var(--text-xl);
  --font-size-2xl:     var(--text-2xl);
  --font-size-display: var(--text-display);
```

- [ ] **Step 3: Verify build and no regressions**

```bash
cd /Users/prabishdangi/Desktop/Personal/Interval360/website-interval360
npm run build 2>&1 | tail -20
```

Expected: Build completes with no errors. (No TypeScript errors — we only touched CSS.)

- [ ] **Step 4: Spot-check the vars exist at runtime**

```bash
grep -n "\-\-text-" src/app/globals.css
```

Expected: 7 lines beginning with `--text-xs` through `--text-display`.

- [ ] **Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "feat(typography): define 7-token type scale in globals.css"
```

---

## Task 2: Migrate Shared Components — Nav, Footer, PageHero, LoginLayout

**Files:**
- Modify: `src/components/Nav.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `src/components/PageHero.tsx`
- Modify: `src/components/LoginLayout.tsx`

### Steps

- [ ] **Step 1: Migrate Nav.tsx**

Read the file first. Apply these replacements (the file has ~396 lines; all patterns below appear verbatim):

| Find | Replace | Context |
|---|---|---|
| `text-[0.62rem]` | `text-xs` | nav link items, home link |
| `text-[0.65rem]` | `text-xs` | login button, CTA buttons |
| `text-[0.74rem]` | `text-xs` | dropdown subtext |
| `text-[0.82rem]` | `text-sm` | dropdown body title |
| `text-[0.92rem]` | `text-base` | mobile nav link items |
| `text-[0.84rem]` | `text-sm` | mobile CTA buttons |

Verify with:
```bash
grep -n "text-\[" src/components/Nav.tsx | grep -E "0\.[5-9][0-9]*rem"
```
Expected: 0 matches.

- [ ] **Step 2: Migrate Footer.tsx**

Read the file first. Apply these replacements:

| Find | Replace | Notes |
|---|---|---|
| `text-[0.76rem]` | `text-xs` | column headers |
| `text-[0.9rem] md:text-[0.95rem]` | `text-sm md:text-base` | footer nav links |
| `text-[0.88rem]` | `text-base` | newsletter body |
| `text-[0.84rem] md:text-[0.9rem]` | `text-sm` | copyright line |
| `text-[0.8rem] md:text-[0.86rem]` | `text-sm` | tagline |
| `text-[0.84rem]` (button) | `text-sm` | join button |
| `text-[0.9rem] md:text-[0.95rem]` (important links) | `text-sm md:text-base` | same pattern as above |

Verify:
```bash
grep -n "text-\[" src/components/Footer.tsx | grep -E "0\.[5-9][0-9]*rem"
```
Expected: 0 matches.

- [ ] **Step 3: Migrate PageHero.tsx**

Read the file. Apply the Scale Reference mapping to every `text-[Xrem]` and `fontSize: "Xrem"` found. PageHero renders the hero section reused across interior pages — its H1 should use `text-display` or `text-[clamp(3rem,7vw,5.5rem)]`.

Verify:
```bash
grep -n "text-\[" src/components/PageHero.tsx | grep -E "[0-9.]+rem"
```
Expected: only clamp() values remain (no plain rem arbitrary values).

- [ ] **Step 4: Migrate LoginLayout.tsx**

Read the file (~381 lines). Apply the Scale Reference mapping to all text size classes and inline styles. UI elements (form labels, input text, button text) → `text-sm`. Body descriptions → `text-base`. Headings → `text-xl` or `text-2xl`.

Verify:
```bash
grep -n "text-\[" src/components/LoginLayout.tsx | grep -E "0\.[5-9][0-9]*rem|1\.[0-2][0-9]*rem"
```
Expected: 0 matches.

- [ ] **Step 5: Build check**

```bash
npm run build 2>&1 | tail -10
```
Expected: exits 0.

- [ ] **Step 6: Commit**

```bash
git add src/components/Nav.tsx src/components/Footer.tsx src/components/PageHero.tsx src/components/LoginLayout.tsx
git commit -m "feat(typography): migrate shared components to type scale"
```

---

## Task 3: Migrate Home Page Components (9 files)

**Files:**
- Modify: `src/components/home/HomeHeroSection.tsx`
- Modify: `src/components/home/HomeForSection.tsx`
- Modify: `src/components/home/HomeWhySection.tsx`
- Modify: `src/components/home/HomeProblemShowcaseSection.tsx`
- Modify: `src/components/home/HomeSampleReportsSection.tsx`
- Modify: `src/components/home/HomeCtaSection.tsx`
- Modify: `src/components/home/HomePromiseSection.tsx`
- Modify: `src/components/home/HomeCredibilitySection.tsx`
- Modify: `src/components/home/HomeHowItWorksSection.tsx`

### Steps

- [ ] **Step 1: Migrate HomeHeroSection.tsx**

Read the file. Known patterns:

| Find | Replace |
|---|---|
| `text-[0.7rem]` (eyebrow) | `text-xs` |
| `text-[clamp(2.35rem,8.6vw,6.3rem)]` (H1) | **KEEP AS-IS** — flagship hero intentional |
| `text-[clamp(1rem,1.7vw,1.25rem)]` (lead p) | `text-lg` |
| `text-[0.95rem]` (CTA buttons) | `text-sm` |
| `text-[0.9rem]` (see sample link) | `text-sm` |

- [ ] **Step 2: Migrate HomeForSection.tsx**

Known patterns:

| Find | Replace | Context |
|---|---|---|
| `text-[0.68rem]` (eyebrow "Who It's For") | `text-xs` | |
| `text-[clamp(2.8rem,6vw,5rem)]` (H2) | keep clamp, optionally → `text-[clamp(3rem,7vw,5.5rem)]` | section hero H2 |
| `text-[0.95rem]` (lead p) | `text-base` | |
| `text-[0.7rem]` (row number) | `text-xs` | |
| `text-[1rem]` (card h3) | `text-base` | already correct |
| `text-[0.88rem]` (card body — the spec "Who It's For" offender) | `text-base` | **verified fix** |
| `text-[1.1rem]` (arrow) | `text-lg` | |

- [ ] **Step 3: Migrate HomeWhySection.tsx**

Known patterns:

| Find | Replace | Context |
|---|---|---|
| `text-[0.68rem]` (eyebrow "Why Interval 360") | `text-xs` | |
| `text-[1rem]` (lead p left column) | `text-base` | already correct |
| `text-[clamp(2.8rem,6vw,5rem)]` (H2) | keep or update to `clamp(3rem,7vw,5.5rem)` | |
| `text-[0.65rem]` (grid cell number labels) | `text-xs` | |
| `text-[1.05rem]` (grid cell h3 — "Built Differently" offender) | `text-base` | **verified fix** |
| `text-[0.88rem]` (grid cell body — "Built Differently" offender) | `text-base` | **verified fix** |

- [ ] **Step 4: Migrate HomeProblemShowcaseSection.tsx**

Known patterns:

| Find | Replace |
|---|---|
| `text-[0.68rem]` (eyebrow "The Stalemate") | `text-xs` |
| `text-[clamp(3rem,7vw,5.5rem)]` or similar H2 | keep/align |
| `text-[1.1rem]` (lead paragraph) | `text-lg` |
| `text-[1rem]` (body paragraph) | `text-base` |
| `text-[5rem]` (decorative `"`) | **KEEP AS-IS** — decorative |
| `text-[clamp(2rem,3.5vw,3rem)]` (H3 "Interval 360 Changes That") | `text-2xl` or keep clamp |
| `text-[0.66rem]` (bottom label "Clarity Reclaimed") | `text-xs` |

- [ ] **Step 5: Migrate HomeSampleReportsSection.tsx**

Known patterns:

| Find | Replace | Context |
|---|---|---|
| `text-[0.68rem]` (eyebrow "Sample Reports") | `text-xs` | |
| `text-[clamp(3rem,6vw,5rem)]` (H2) | keep or update | |
| `text-[0.95rem]` (lead paragraph — spec offender "sample reports section body") | `text-base` | **verified fix** |
| `text-[0.85rem]` ("View sample reports" link) | `text-sm` | |
| `text-[1.1rem]` (card number `01`/`02`) | `text-base` | ornamental number exception |
| `text-[0.65rem]` (card type label) | `text-xs` | |
| `text-[1rem]` (card h3) | `text-base` | |
| `text-[0.82rem]` (card audience italic) | `text-sm` | |
| `text-[0.88rem]` (card desc — spec offender "sample reports section body") | `text-base` | **verified fix** |

- [ ] **Step 6: Migrate HomeCtaSection.tsx**

Known patterns:

| Find | Replace | Context |
|---|---|---|
| `text-[0.68rem]` (eyebrow "Get Started") | `text-xs` | |
| `text-[clamp(2.6rem,5.5vw,4.5rem)]` (H2) | update to `clamp(3rem,7vw,5.5rem)` | |
| `text-[3rem]` (stat value — `5 Min`, `2×`) | `text-2xl` — these are data numbers not hero display | |
| `text-[0.75rem]` (stat label) | `text-xs` | |
| `text-[0.85rem]` (stat desc — spec offender "final CTA stat descriptions") | `text-base` | **verified fix** |
| `text-[1.05rem]` (quote text) | `text-base` | |
| `text-[0.68rem]` (quote attribution) | `text-xs` | |
| `text-[0.88rem]` (CTA body paragraph — spec offender) | `text-base` | **verified fix** |
| `text-[0.9rem]` (CTA buttons) | `text-sm` | button exception |

- [ ] **Step 7: Migrate HomePromiseSection.tsx**

Known patterns:

| Find | Replace |
|---|---|
| `text-[0.68rem]` (eyebrow "Visionary Outcome") | `text-xs` |
| `text-[clamp(3.5rem,7vw,5.5rem)]` H2 | keep/align |
| `text-[1.1rem]` (subheadline "Clear visibility...") | `text-lg` |
| `text-[0.95rem]` (body paragraph) | `text-base` |
| `text-[1.1rem]` (item number `01`, `02` etc.) | `text-base` |
| `text-[1rem]` (item h3) | `text-base` |
| `text-[0.82rem]` (item italic subtitle) | `text-sm` |
| `text-[0.9rem]` (item body) | `text-base` |

- [ ] **Step 8: Migrate HomeCredibilitySection.tsx and HomeHowItWorksSection.tsx**

Read each file, apply Scale Reference mapping. Verify no plain rem arbitrary classes remain.

- [ ] **Step 9: Build check**

```bash
npm run build 2>&1 | tail -10
```
Expected: exits 0.

- [ ] **Step 10: Commit**

```bash
git add src/components/home/
git commit -m "feat(typography): migrate home page components to type scale"
```

---

## Task 4: Migrate How It Works Page

**Files:**
- Modify: `src/components/how-it-works/HowItWorksSections.tsx`

### Steps

- [ ] **Step 1: Fix H1 display size — the known offender**

Find:
```
text-[clamp(2rem,5vw,3.25rem)]
```
Replace with:
```
text-[clamp(3rem,7vw,5.5rem)]
```

This is the specific fix mentioned in the spec: "How It Works page H1 renders smaller than H1s on other pages."

- [ ] **Step 2: Migrate remaining text sizes**

Read the full file. Apply Scale Reference:

| Find | Replace | Context |
|---|---|---|
| `text-[0.68rem]` (eyebrow "How it works") | `text-xs` | |
| `text-[1.05rem]` (hero lead paragraph) | `text-base` | |
| `text-[0.82rem]` (buttons) | `text-sm` | button exception |
| `text-[0.65rem]` (stat label below number) | `text-xs` | |
| `text-[clamp(1.35rem,2.8vw,1.85rem)]` (stat number) | `text-2xl` or keep clamp — value tops at 29.6px, lands at `text-2xl` (32px) | |
| `text-[clamp(1.75rem,3vw,2.5rem)]` (section h2 "The process", "The conversation", "The reports") | keep clamp (section h2s, not H1) | |
| `text-[0.78rem]` (step h3) | `text-sm` | |
| `text-[0.88rem]` (step body) | `text-base` | **verified fix** |
| `text-[0.65rem]` (step time badge) | `text-xs` | |
| `text-[1.02rem]` (conversation section paragraphs) | `text-base` | |
| `text-[0.72rem]` (chat window title) | `text-xs` | UI chrome |
| `text-[0.86rem]` (chat bubbles) | `text-base` | |
| `text-[0.62rem]` (AI label) | `text-xs` | |
| `text-[0.78rem]` (input placeholder) | `text-xs` | |
| `text-[0.68rem]` (report tab label) | `text-xs` | |
| `text-[0.72rem]` (report title small) | `text-xs` | |
| `text-[0.88rem]` (report bullet items) | `text-base` | **verified fix** |
| `text-[0.88rem]` (view reports link) | `text-sm` | link treatment |
| `text-[1.05rem]` (final CTA body) | `text-base` | |
| `text-[0.85rem]` (final CTA buttons) | `text-sm` | button exception |
| `text-[clamp(1.65rem,3.2vw,2.35rem)]` (final CTA h2) | keep clamp | |

- [ ] **Step 3: Build check**

```bash
npm run build 2>&1 | tail -10
```

- [ ] **Step 4: Commit**

```bash
git add src/components/how-it-works/HowItWorksSections.tsx
git commit -m "feat(typography): migrate how-it-works page; fix H1 display size"
```

---

## Task 5: Migrate Platform Overview Page

**Files:**
- Modify: `src/components/platform-overview/PlatformOverviewSections.tsx`

### Steps

- [ ] **Step 1: Standardize H1 display**

Find the H1:
```
text-[clamp(3rem,6vw,5.5rem)]
```
Replace with:
```
text-[clamp(3rem,7vw,5.5rem)]
```
(Minor vw adjustment for cross-page consistency.)

- [ ] **Step 2: Migrate remaining text sizes**

Read the full file (~182 lines). Apply Scale Reference. Known patterns:

| Find | Replace | Context |
|---|---|---|
| `text-[0.68rem]` (eyebrow) | `text-xs` | |
| `text-[1rem]` (lead p) | `text-base` | already correct |
| `text-[0.85rem]` (buttons) | `text-sm` | button exception |
| `text-[0.6rem]` (mock window chrome) | `text-xs` | UI chrome |
| `text-[0.65rem]` (mock label) | `text-xs` | |
| `text-[1.6rem]` (mock h3 "not another HR platform") | `text-2xl` | |
| `text-[0.82rem]` (mock body text) | `text-sm` | intentionally smaller in mockup UI |
| `text-[0.62rem]` (mock item label) | `text-xs` | |
| `text-[clamp(2.8rem,5.5vw,4.5rem)]` (section H2s) | keep clamps | section subheads |
| `text-[clamp(2.5rem,5vw,4rem)]` (section H2) | keep clamp | |

- [ ] **Step 3: Build check and commit**

```bash
npm run build 2>&1 | tail -10
git add src/components/platform-overview/PlatformOverviewSections.tsx
git commit -m "feat(typography): migrate platform-overview page to type scale"
```

---

## Task 6: Migrate Pricing Page

**Files:**
- Modify: `src/components/pricing/PricingSections.tsx`
- Modify: `src/components/pricing/TechnicalProtocolFaq.tsx`

### Steps

- [ ] **Step 1: Migrate both pricing files**

Read each file. Apply Scale Reference mapping to all `text-[Xrem]` and inline `fontSize` values:

- Eyebrow labels → `text-xs`
- Pricing tier labels / metadata → `text-sm`
- Price value numbers (large display nums) — if > 2rem, keep specific value or use `text-2xl`/`text-display` depending on size
- Body copy and feature descriptions → `text-base`
- FAQ question text → `text-base` or `text-lg`
- FAQ answer body → `text-base`
- Button text → `text-sm`

Verify:
```bash
grep -n "text-\[" src/components/pricing/PricingSections.tsx src/components/pricing/TechnicalProtocolFaq.tsx | grep -E "0\.[5-9][0-9]*rem|1\.[0-2][0-9]*rem"
```
Expected: 0 matches.

- [ ] **Step 2: Build check and commit**

```bash
npm run build 2>&1 | tail -10
git add src/components/pricing/
git commit -m "feat(typography): migrate pricing page to type scale"
```

---

## Task 7: Migrate Solutions Pages (3 files)

**Files:**
- Modify: `src/components/solutions/SolutionsSections.tsx`
- Modify: `src/components/solutions/LeadershipDevelopmentSections.tsx`
- Modify: `src/components/solutions/TalentDecisionsSections.tsx`

### Steps

- [ ] **Step 1: Migrate all three solutions files**

Read each file. For each:
1. Find all `text-[Xrem]` and inline `fontSize: "Xrem"` values
2. Apply Scale Reference mapping
3. Check any H1 hero clamps — update to `clamp(3rem,7vw,5.5rem)` if they are page H1s
4. Preserve any clamp values on section H2s (they are intentional responsive subheads)

Verify all three:
```bash
grep -n "text-\[" src/components/solutions/*.tsx | grep -E "0\.[5-9][0-9]*rem|1\.[0-2][0-9]*rem"
```
Expected: 0 matches.

- [ ] **Step 2: Build check and commit**

```bash
npm run build 2>&1 | tail -10
git add src/components/solutions/
git commit -m "feat(typography): migrate solutions pages to type scale"
```

---

## Task 8: Migrate Company and For Coaches Pages

**Files:**
- Modify: `src/components/company/CompanySections.tsx`
- Modify: `src/components/for-coaches/ForCoachesSections.tsx`

### Steps

- [ ] **Step 1: Migrate both files**

Read each file. Apply Scale Reference. Pay attention to:
- Contact form field labels → `text-sm` or `text-xs`
- Input placeholder text → typically stays at browser default or `text-sm`
- Any H1 on the company page — update to `clamp(3rem,7vw,5.5rem)` if it's a page hero H1

Verify:
```bash
grep -n "text-\[" src/components/company/CompanySections.tsx src/components/for-coaches/ForCoachesSections.tsx | grep -E "0\.[5-9][0-9]*rem|1\.[0-2][0-9]*rem"
```
Expected: 0 matches.

- [ ] **Step 2: Build check and commit**

```bash
npm run build 2>&1 | tail -10
git add src/components/company/CompanySections.tsx src/components/for-coaches/ForCoachesSections.tsx
git commit -m "feat(typography): migrate company and for-coaches pages to type scale"
```

---

## Task 9: Migrate Conversational AI and Reports Pages

**Files:**
- Modify: `src/components/conversational-ai/ConversationalAiSections.tsx` (543 lines — largest file)
- Modify: `src/components/reports-and-outputs/ReportsAndOutputsSections.tsx`
- Modify: `src/components/reports-and-outputs/ReportViewer.tsx`

### Steps

- [ ] **Step 1: Migrate ConversationalAiSections.tsx**

This is the largest file (543 lines). Read it in full. It likely has many inline `fontSize` style props (this page uses inline styles more than Tailwind classes based on the codebase pattern). Apply Scale Reference to:
- All `text-[Xrem]` Tailwind classes
- All inline `style={{ fontSize: "Xrem" }}` — replace rem string with `var(--text-*)` from Scale Reference

Verify:
```bash
grep -c "text-\[" src/components/conversational-ai/ConversationalAiSections.tsx
grep -c 'fontSize: "' src/components/conversational-ai/ConversationalAiSections.tsx
```
Run both before and after to confirm reduction. After migration, inline `fontSize` entries should only reference `var(--text-*)` values.

- [ ] **Step 2: Migrate ReportsAndOutputsSections.tsx and ReportViewer.tsx**

Read each file. Apply Scale Reference. The report viewer renders document-like content — maintain readability:
- Report body text → `text-base` (16px is appropriate for report reading)
- Report section labels/headers → `text-sm` or `text-xs`
- Report h2/h3 headings → `text-xl` or `text-2xl`

Verify:
```bash
grep -n "text-\[" src/components/reports-and-outputs/*.tsx | grep -E "0\.[5-9][0-9]*rem|1\.[0-2][0-9]*rem"
```

- [ ] **Step 3: Build check and commit**

```bash
npm run build 2>&1 | tail -10
git add src/components/conversational-ai/ src/components/reports-and-outputs/
git commit -m "feat(typography): migrate conversational-ai and reports pages to type scale"
```

---

## Task 10: Migrate Resources Components

**Files:**
- Modify: `src/components/resources/ResourcesSections.tsx`
- Modify: `src/components/resources/PhaseBreakdown.tsx`
- Modify: `src/components/resources/NewsletterSignup.tsx`
- Modify: `src/components/resources/ResourceFilterBar.tsx`
- Modify: `src/components/resources/SampleReportPreviewCard.tsx`

### Steps

- [ ] **Step 1: Migrate all five resources components**

Read each file. Apply Scale Reference. Key context for resources:
- Article/playbook body text → `text-base`
- Card metadata (type, date, read time) → `text-xs` or `text-sm`
- Card title → `text-xl` or `text-base` depending on card size
- Filter buttons → `text-xs` or `text-sm`
- Newsletter CTA form → `text-sm`

Verify all five:
```bash
grep -n "text-\[" src/components/resources/*.tsx | grep -E "0\.[5-9][0-9]*rem|1\.[0-2][0-9]*rem"
```
Expected: 0 matches.

- [ ] **Step 2: Build check and commit**

```bash
npm run build 2>&1 | tail -10
git add src/components/resources/
git commit -m "feat(typography): migrate resources components to type scale"
```

---

## Task 11: Migrate Thin Page Files and Resource Sub-Pages

**Files:**
- Check: `src/app/buy/page.tsx`
- Check: `src/app/login/page.tsx`
- Check: `src/app/admin/login/page.tsx`
- Check: `src/app/resources/case-study-global-cohort/page.tsx`
- Check: `src/app/resources/case-study-survey-fatigue/page.tsx`
- Check: `src/app/resources/how-to-choose-the-right-raters/page.tsx`
- Check: `src/app/resources/how-to-run-a-360-in-14-days/page.tsx`
- Check: `src/app/resources/using-what-and-how-in-promotion-decisions/page.tsx`

### Steps

- [ ] **Step 1: Audit all page files for inline sizing**

Most page.tsx files are thin wrappers that just render a section component. But some (especially resource sub-pages) contain long-form content inline. Run:

```bash
grep -n "text-\[" src/app/buy/page.tsx src/app/login/page.tsx src/app/admin/login/page.tsx src/app/resources/*/page.tsx 2>/dev/null | grep -E "[0-9.]+rem"
```

- [ ] **Step 2: Migrate any files that have hits**

For each file with results, read it and apply Scale Reference. These pages typically contain:
- Long-form article content → body `text-base`, lead `text-lg`
- Pull quotes → `text-xl` or `text-2xl`
- Section dividers with labels → `text-xs`
- Author/date metadata → `text-xs` or `text-sm`

- [ ] **Step 3: Build check and commit**

```bash
npm run build 2>&1 | tail -10
git add src/app/buy/page.tsx src/app/login/page.tsx src/app/admin/login/page.tsx src/app/resources/
git commit -m "feat(typography): migrate page files and resource sub-pages to type scale"
```

---

## Task 12: Full Audit — Verify Zero Remaining Arbitrary Text Sizes

**Files:** All `src/` TSX files

### Steps

- [ ] **Step 1: Run the full sweep**

```bash
grep -rn "text-\[" src/ --include="*.tsx" | grep -E "0\.[0-9]+rem|1\.[0-2][0-9]*rem"
```

Expected: **0 lines**. If any remain, identify which file and apply Scale Reference before continuing.

- [ ] **Step 2: Run inline fontSize sweep**

```bash
grep -rn 'fontSize: "' src/ --include="*.tsx" | grep -E '"[0-9.]+rem"' | grep -v "var(--text"
```

Expected: **0 lines**. All inline fontSize values should now be `"var(--text-*)"`.

- [ ] **Step 3: Final build**

```bash
npm run build
```

Expected: exits 0, no TypeScript errors.

- [ ] **Step 4: Commit if any fixes were needed**

```bash
git add -u
git commit -m "feat(typography): clean up remaining arbitrary text sizes"
```

---

## Task 13: Visual QA

**Files:** No code changes — browser verification only.

### Steps

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Desktop QA checklist (1280px+)**

Visit each route and confirm visually. Key things to check:

| Route | Check |
|---|---|
| `/` (home) | "Who It's For" card body ≥ 16px; "Built Differently" card body ≥ 16px; hero H1 unchanged (flagship large) |
| `/` (home) | "Built From The Inside" bullets ≥ 16px; sample reports body ≥ 16px; CTA stat descriptions ≥ 16px |
| `/how-it-works` | H1 matches Platform Overview and other page H1 sizes visually; body paragraphs ≥ 16px |
| `/platform-overview` | H1 consistent with how-it-works; body ≥ 16px |
| `/pricing` | Pricing tier body ≥ 16px; FAQ body ≥ 16px |
| `/solutions` | Body ≥ 16px across all 3 solution pages |
| `/company` | Body ≥ 16px; contact form readable |
| `/for-coaches` | Body ≥ 16px |
| `/resources` | Card metadata smaller than body, body ≥ 16px |
| `/reports-and-outputs` | Report content readable at 16px |
| Nav | Links remain appropriately compact (not over-large) |
| Footer | Body readable but appropriately compact at 14px |

- [ ] **Step 3: Tablet QA (768px)**

Resize browser to 768px. Check that responsive text doesn't collapse to illegibly small sizes. All body copy should remain ≥ 16px at tablet.

- [ ] **Step 4: Mobile QA (375px)**

Resize to 375px. Check hero H1s — with `clamp(3rem,7vw,5.5rem)` the minimum is 3rem (48px) which is large for mobile. If any H1 feels too cramped at 375px, reduce the clamp minimum to `2.5rem`:
```
text-[clamp(2.5rem,7vw,5.5rem)]
```

- [ ] **Step 5: Final commit if mobile adjustments were made**

```bash
git add -u
git commit -m "feat(typography): adjust display clamp min for mobile readability"
```

---

## Self-Review Against Spec

| Spec requirement | Task that covers it |
|---|---|
| "Who It's For" card descriptions 0.88rem → 16px | Task 3 Step 2 |
| "Built Differently" card descriptions 0.88rem → 16px | Task 3 Step 3 |
| "Built From The Inside" bullets 0.92rem → 16px | Task 3 Step 8 (HomeCredibilitySection) |
| Home sample reports section body 0.88rem → 16px | Task 3 Step 5 |
| Home final CTA stat descriptions 0.85rem → 16px | Task 3 Step 6 |
| How It Works H1 size consistency fix | Task 4 Step 1 |
| All other 21 pages migrated | Tasks 5–11 |
| CSS custom properties as vars | Task 1 Step 1 |
| Replace `text-[Xrem]` Tailwind values | Tasks 2–11 |
| Visual QA at desktop/tablet/mobile | Task 13 |
