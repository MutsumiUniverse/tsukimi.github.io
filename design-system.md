# Tsukimi Website — Design System

Source: Paper design file `Tsukimi / Official website` (desktop 1440 / mobile 390, both aligned).
Theme: dark (nocturnal / moonlit night), violet brand family.

---

## 1. Design Tokens

### Colors

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#202020` | Page and section background |
| `--color-button` | `#404040` | Control surfaces (buttons, tab bar, icon chips) |
| `--btn-border` | `#525054` | 1px top highlight edge on buttons / active tab |
| `--btn-shadow` | `#05040780` | Button drop shadow (`0 1px 12px` / small buttons `0 1px 10px`) |
| `--color-tab-active` | `#363737` | Active tab background |
| `--color-tab-text` | `#C3C3C3` | Inactive tab text |
| `--color-moon` | `#F7F5F9` | Primary text on dark (headings, emphasized body, links) |
| `--color-mist` | `#E6E1EE` | Monospace labels in the Tech Strip |
| `--color-lavender` | `#C8BBD9` | Secondary text on dark (descriptions, inactive items) |
| `--color-dusk` | `#A8A5B3` | Tertiary muted text (version line, comments, copyright); 5.2:1 contrast on `#202020` |
| `--color-orchid` | `#AEB5FA` | Orchid highlight, used sparingly (eyebrows, link chips) |
| `--color-violet` | `#5A63B8` | Brand violet (large labels / graphics only, never small text on dark) |
| `--color-ink` | `#3D3846` | Reserve dark (spec artboards, dormant sections) |
| `--color-night` | `#1B1626` | Reserve deeper dark (spec artboards, dormant sections) |
| `--color-slate` | `#5B5470` | Dormant-section body text (legacy light-theme usage) |
| `--color-tint` | `#EFE9F5` | Dormant-section background (legacy light-theme usage) |
| `--color-border` | `#D5CCE4` | Dormant-section borders (legacy light-theme usage) |

### Fonts

| Token | Value | Usage |
|---|---|---|
| `--font-sans` | Inter | Headings, body, buttons, links |
| `--font-mono` | JetBrains Mono | Labels, command lines, captions, version strings |
| `--font-display` | Noto Serif | Spec artboard headings only (not used on the page itself) |

### Sizing

| Token | Value | Usage |
|---|---|---|
| `--padding-x` | `64px` | Horizontal section padding on desktop |
| `--radius-sm` | `8px` | Buttons, tab bar, panel corners |
| `--radius-window` | `4px` | App-window screenshot corners |

---

## 2. Type Scale

| Role | Desktop | Mobile | Weight / Tracking |
|---|---|---|---|
| Hero heading | Inter 62/68 | Inter 40/46 | 400, -0.01em |
| Section heading | Inter 56/60 | Inter 56/60 | 400, -0.01em |
| Emphasized body | Inter 15/18 | Inter 15/18 | 600 |
| Body / links | Inter 13/16 | Inter 13/16 | 400–500 |
| Mono labels | JetBrains Mono 11/14 | same | 400, +0.12em, uppercase |
| Captions / version line | JetBrains Mono 12/16 | same | 400 |
| Command line | JetBrains Mono 16/20 | 12/21 (prevents bad wraps on narrow screens) | 400 |

---

## 3. Layout & Sections

| | Desktop | Mobile |
|---|---|---|
| Artboard width | 1440px | 390px |
| Section horizontal padding | `var(--padding-x)` = 64px | 20px |
| Section vertical padding | top 104 / bottom 112 | 64 / 72 |

Page structure (identical on both): **Hero → Tech Strip/List → Screenshots → Install → Footer**.
The Features and Credits sections are dormant (hidden); their content is preserved in the design file.

### Section background gradients

All sections share the `var(--color-bg)` base; three sections add a radial-gradient glow:

- **Hero** — top center:
  `radial-gradient(ellipse 40.17% 77.705% at 50% 10.85% in oklab, oklab(46.4% 0.020 -0.041 / 10%) 0%, oklab(81.2% 0.025 -0.036 / 4%) 100%)`
- **Screenshots** — top:
  `radial-gradient(ellipse 62.995% 119.195% at 50% -19.2% in oklab, oklab(35.1% 0.013 -0.021 / 10%) 0%, oklab(47.9% 0.006 -0.011 / 5%) 100%)`
- **Install** — bottom:
  `radial-gradient(ellipse 46.18% 129.615% at 50% 140.99% in oklab, oklab(35.1% 0.013 -0.021 / 21%) 0%, oklab(47.9% 0.006 -0.011 / 11%) 100%)`

---

## 4. Components

### Button (single shared spec)

```
background: var(--color-button)
border-top: 1px solid var(--btn-border)
box-shadow: var(--btn-shadow) 0 1px 12px   /* small buttons: 0 1px 10px */
border-radius: var(--radius-sm)
color: var(--color-moon)
```

- Large (Hero CTA): padding 12/20, Inter 15px/600, icon + label; full-width on mobile
- Small (GitHub, Copy): padding 8/14, Inter 13px/500, icon + label

### Tab bar (Install Tabs)

- Container: `background: var(--color-button)`, `border-radius: var(--radius-sm)`, gap 2, no padding
- Active tab: `background: var(--color-tab-active)` + `border-top: 1px solid var(--btn-border)`, text `--color-moon`
- Inactive tabs: text `var(--color-tab-text)`, Inter 14px/500, nowrap
- Desktop: 6 tabs in one row, padding 10/24
- Mobile: equal-width 3×2 grid — each tab `flex: 1 1 30%`, centered label, padding 10/12

### Command panel (Install Panel)

```
background: var(--color-bg)
border-radius: var(--radius-sm)
padding: 30px 34px
gap: 14px
```

- Command: JetBrains Mono, `--color-moon` (16px desktop / 12px mobile)
- Comment line: `--color-dusk`
- Copy button pinned to the right (small button spec)

### Tech Strip / Tech List

- 5 items: GTK4 · LIBADWAITA / MPV GPU-NEXT / GSTREAMER / DANMAKU / GPL-3.0
- Label: JetBrains Mono 11px, +0.12em, uppercase, `--color-mist`
- Description: Inter 15px/600, `--color-moon`
- Desktop: horizontal row with 1px `--color-moon` dividers; mobile: vertical list with `--color-button` row separators

### Navigation

- Left: logo + Tsukimi (Inter 17px/600, -0.01em)
- Right: Screenshots / Install text links (`--color-moon`) + GitHub small button
- Mobile: brand + GitHub button only
- Scroll behavior (see spec artboard): transparent at scrollY = 0 → frosted glass at scrollY > 24, 240ms transition

### Footer

- Left: logo + Tsukimi + `© 2026 Tsukimi Contributors` (`--color-dusk`)
- Right: GitHub / Releases / Flathub (`--color-moon`) + GPL-3.0 (`--color-dusk`)
- Mobile: stacked in two rows

---

## 5. Motion Spec (spec artboards)

- **Hero parallax** — 4 layers (stars 0.04 / moon 0.08 / copy 0.12 / screenshot 0.18):
  - Mouse drift: `translate = −cursor × depth × 60px`
  - Scroll drift: `translateY = scrollY × depth × 0.6`
  - Easing: rAF lerp 0.12, transform-only
- **Nav**: transparent → frosted glass after 24px of scroll, 240ms transition

---

## 6. Content Assets

- Hero screenshot: `Anime media player` (Fate/Zero player view), `var(--radius-window)` corners
- Gallery shots ×3: Library / Player, with danmaku / Music, captions in JetBrains Mono 12px
- Install command: `flatpak install flathub moe.tsuna.tsukimi`, comment `# then run: flatpak run moe.tsuna.tsukimi`
- Distro tabs: Flathub (default active) / Arch Linux / Fedora / Nix / Gentoo / AOSC OS
- Version line: `v26.7.3 · GPL-3.0 · Flathub / AUR / nixpkgs / COPR`
