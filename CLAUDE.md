# CLAUDE.md — mylesrider-ui

This file is a binding contract. Follow it exactly; do not deviate without explicit user instruction.

---

## Stack

| Concern | Choice | Notes |
|---|---|---|
| Language | TypeScript | Strict mode. No `any`, no `.js`/`.jsx` files. |
| Framework | React (latest stable) | |
| Build tool | Vite | |
| Styling | Tailwind CSS v4 | CSS-first config — no `tailwind.config.js` |

Tailwind v4 is configured via `@import "tailwindcss"` and the `@theme` directive in `src/index.css`. There is no JavaScript config file.

---

## Color System

Five tokens. That's the entire palette.

| Token | Utility classes | Purpose |
|---|---|---|
| `--color-background` | `bg-background`, `text-background` | Page and surface backgrounds |
| `--color-foreground` | `text-foreground`, `border-foreground` | Default body text |
| `--color-primary` | `bg-primary`, `text-primary`, `border-primary` | Brand color, CTAs, links |
| `--color-secondary` | `bg-secondary`, `text-secondary`, `border-secondary` | Secondary accents, supporting UI |
| `--color-muted` | `bg-muted`, `text-muted`, `border-muted` | Subtle backgrounds, dividers, secondary text |

---

## Rules

**Forbidden — never write these in components:**
- Raw Tailwind palette utilities: `bg-blue-500`, `text-gray-900`, `border-slate-200`, etc.
- Arbitrary color values: `bg-[#abc123]`, `text-[rgb(0,0,0)]`, inline `style` color props
- Any color token not in the five above

**Visual hierarchy without new colors:**
Use opacity modifiers, spacing, typography, and borders:
- `bg-primary/10` — tinted wash
- `text-foreground/60` — secondary text weight
- `border-muted` + padding — card separation

---

## Adding a Color

Don't. If a design requirement genuinely cannot be expressed with the five tokens plus opacity modifiers, **stop and ask the user** before touching `@theme`. The bar is high.

---

## File Conventions

- Global styles and `@theme`: `src/index.css`
- Entry point: `src/main.jsx` (or `main.tsx`)
- Components: `src/components/`
