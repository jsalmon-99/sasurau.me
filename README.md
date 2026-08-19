# Photography portfolio — draft

Static site. No build step, no dependencies. Open `index.html`, or drop the
folder on Netlify / Vercel / GitHub Pages as-is.

```
index.html      structure and the copy
styles.css      all design tokens at the top of the file
script.js       SERIES object — your photos live here
images/         58 frames, resized to 1600px, ~15 MB total
```

## Where the design came from

Both reference layouts fed in: the colour-blocked project bands with the
big-hero / two-supporting grid come from the first, the rotated headline,
index number and tiny caption stacks come from the second.

The palette is sampled from your negatives rather than picked:

- **Page background `#E9D3C6`** is the orange mask of colour-negative film base.
- **Band colours** are each series' measured dominant hue — Tokyo came back
  blue (220°), California gold (40°), Portraits red (15°, from the neon frames).
  Paris/Berlin is graphite because half that batch is black and white.

The **film-edge rail** down the left is the signature: a strip of unexposed
base carrying the edge markings, tracking which series you're standing in.

## Things to change

1. **The two "Elsewhere" links** in `#contact` still point at `#`. Instagram
   and print shop URLs go there, or delete the column.
2. **Series copy** — I wrote the descriptions from what's actually in the
   frames (Sensō-ji, Treptower Park, the Marin headlands). They're a starting
   point in a plausible voice, not your words. Rewrite them.
3. **Captions** — the `cap` fields in `script.js` are invented. Same for the
   `alt` text: it's descriptive and usable, but you know these photos.
4. **The metadata is real.** Frame counts, year ranges, format splits and the
   colour/black-and-white breakdown were computed from the files. Roll 067415
   is the actual lab job number on the Paris/Berlin scans. If you regroup the
   photos, recount.

## Adding or reordering photos

Everything runs off the `SERIES` object at the top of `script.js`. Add an
entry there and the lightbox picks it up. The three photos shown in each band
are hardcoded in `index.html` so they can be server-rendered — the
`data-open` / `data-i` attributes point at the index in `SERIES`.

## Before it goes live

- Images are progressive JPEG at 1600px. Generate WebP/AVIF alongside and use
  `<picture>` — should cut the payload by half.
- Add a favicon. `og:` tags are in, but `og:image` needs an absolute URL
  once you have a domain.
- Fonts load from Google Fonts. Self-host if you care about the extra
  round-trip or about EU data rules.

## What's already handled

Responsive to 390px, keyboard-navigable lightbox (arrows, Escape, focus trap),
visible focus rings, `prefers-reduced-motion` respected, no layout shift
(every `<img>` has width/height), lazy loading below the fold.
