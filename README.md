# Portfolio — initial template

A multi-page static site for photography + writing. No build step, no
dependencies; open `index.html` and it runs.

## Design references (what goes where)

- **Tammeva / Karmir** → editorial restraint, serif display type, quiet
  layouts, generous whitespace. Lives in: overall pacing, `hero`,
  `page-head`, `about__lede`.
- **Shibaki covers** → tight typographic stacks, labeled rules, rotated
  mono text. Lives in: `.hero__aside` (vertical mono stack), `.rule`
  (labeled hairline), tight italic/roman mixing in headlines.
- **NERV** → monospace metadata, corner brackets, amber accent, technical
  readouts in the margin. Lives in: `.rail`, `.hero__meta`,
  `.tile__meta`, `.brackets`, plus the optional **NERV theme** (click
  the `NERV` button in the header to flip to dark/amber mode).

## Files

```
index.html         Home — hero + featured photos + writing teasers
photography.html   Full gallery + filter strip
writing.html       Archive as table of contents
about.html         Bio + side metadata + clients/publications
styles.css         All design tokens + layout + motion
script.js          Theme toggle (persisted) + live rail clock + filter tabs
```

## Customizing

**Your name, copy, links.** Search `Your Name`, `hello@yourdomain.com`,
and `@yourhandle` across the four HTML files and replace.

**Photos.** Every photo slot is a `.tile` with a `.placeholder` div.
Replace with a real image:

```html
<figure class="tile tile--a">
  <img src="images/plate-01.jpg" alt="Untitled (window)">
  <figcaption class="tile__meta">
    <span>UNTITLED (WINDOW)</span>
    <span class="idx">01 / 32</span>
  </figcaption>
</figure>
```

The placeholders render as crossed squares so the layout reads correctly
before you've dropped in files.

**Colors / type.** All tokens are CSS variables at the top of
`styles.css`:

- `--paper`, `--ink`, `--amber` — core palette
- `--serif`, `--mono` — swap fonts here (currently EB Garamond +
  JetBrains Mono, loaded from Google Fonts)

To change the accent from NERV amber to, say, a cooler red, change
`--amber` once and the rail, brackets, active states, and hover
underlines all follow.

**Dark / NERV mode.** The `[data-theme="nerv"]` block in `styles.css`
redefines the tokens for dark. Toggle persists in `localStorage`.

## Known trade-offs / next steps

- No lightbox on the photo grid yet — tiles hover-zoom but don't open.
  Easy add if you want one.
- Writing entries are dummy links (`href="#"`). Point these at real
  article pages or a CMS once you have content.
- The `.hero__aside` vertical mono strip hides below 860px; I'd rather
  drop it on mobile than cramp the headline. Adjust in the responsive
  section if you disagree.
- Fonts load from Google Fonts over the network. Self-host if you want
  offline / privacy-clean.

## Accessibility

- Color contrast checks clean in both themes for body + UI text.
- `prefers-reduced-motion` disables the reveal animations.
- `aria-current="page"` on the active nav link; nav landmarks labeled.
- Focus states inherit from hover — consider adding a visible
  `:focus-visible` ring if keyboard use is a concern.
