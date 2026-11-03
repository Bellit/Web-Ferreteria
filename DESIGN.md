---
name: Ferretería Pino
description: El panel de llaves. The key counter of a barrio hardware shop, drawn in nickel, slate and brass, with the red pine of the logo.
colors:
  ground: "#ebeeee"
  ground-2: "#dfe3e4"
  ground-3: "#d1d7d9"
  paper: "#f7f9f9"
  rule: "#c0c8cc"
  ink: "#1d2a34"
  ink-2: "#3e5667"
  ink-3: "#566a78"
  brass: "#b4873a"
  brass-hi: "#d6b066"
  brass-lo: "#8f6726"
  brass-ink: "#7a5719"
  brass-glint: "#efd9a2"
  nickel: "#a3abb0"
  nickel-lo: "#828b91"
  pine: "#d32733"
  open: "#2c7a4b"
  closed: "#c4242f"
  graphite: "#2b3c49"
  graphite-2: "#354a59"
  graphite-rule: "#4a5f6e"
  on-graphite: "#ebeeee"
  on-graphite-2: "#b4c0c8"
typography:
  display:
    fontFamily: "'Montserrat Variable', 'Archivo Variable', sans-serif"
    fontSize: "clamp(6rem, 17vw, 15rem)"
    fontWeight: 800
    lineHeight: 0.8
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Montserrat Variable', 'Archivo Variable', sans-serif"
    fontSize: "clamp(2.1rem, 4.2vw, 3.75rem)"
    fontWeight: 750
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Montserrat Variable', 'Archivo Variable', sans-serif"
    fontSize: "1.45rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  figure:
    fontFamily: "'Montserrat Variable', 'Archivo Variable', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 750
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Archivo Variable', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tabular-nums"
  lead:
    fontFamily: "'Archivo Variable', system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.3rem)"
    lineHeight: 1.5
  label:
    fontFamily: "'Archivo Variable', system-ui, sans-serif"
    fontSize: "0.78rem"
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 112"
rounded:
  tag-top: "3px"
  field: "4px"
  base: "6px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(88px, 12vw, 168px)"
  rail-h: "68px"
  container: "1360px"
components:
  button-brass:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "0 22px"
    height: "52px"
  button-brass-hover:
    backgroundColor: "{colors.brass-hi}"
    textColor: "{colors.ink}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.base}"
    padding: "0 22px"
    height: "52px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  nav-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.base}"
    padding: "8px 12px"
  nav-link-hover:
    backgroundColor: "{colors.ground-2}"
    textColor: "{colors.ink}"
  filter-tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0 18px 0 32px"
    height: "44px"
  filter-tag-selected:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.paper}"
  price-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "34px 16px 16px"
  field-on-graphite:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.on-graphite}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
  dock-button:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "52px"
---

# Design System: Ferretería Pino

## Overview

**Creative North Star: "El panel de llaves"**

The site is the shop's key counter: the wall of blank keys on hooks, the cutting machine, the paper price tags hanging from steel rails, and the graphite back wall behind the counter. Every surface is a material from that counter, rendered as flat colour. Nickel-white is the ground, graphite is the ink, and brushed brass is the one material colour, carried by keys, tags' accents and the primary action. The page refuses the hardware-store default (tool hero photo, red banner, a row of category cards) and the old dark neon and glass look.

Type is the monument. A single display grotesque set very large and very tight carries the brand name across the first viewport, and one giant drawn key runs the full width under it. Density is generous: sections breathe on a fluid section rhythm, and information (open now, address, hours, WhatsApp) is never hidden behind effect. Motion is rationed to three behaviours, all physical: the key being cut, blanks swaying on their hooks, tags dropping onto their rail.

The page is the shop's wall, in three grounds: light ground for the counter, the perforated pegboard for the key zone (the whole section, not a card inside it) and graphite for the closing back wall with the footer. Every change of ground is cut as a key bitting profile, so one zone ends the way a key blade does. Same ground, no divider.

**Key Characteristics:**
- Flat colour only: no gradients, no glass, no glows, no blends.
- Brass is the single material accent; green and red are signals, never decoration.
- Monumental Montserrat display, the same geometric voice as the logo, over a quiet Archivo text face with tabular figures.
- Recurring counter objects: hooks, punched paper tags on threads, steel rails, the bitting profile.
- One signature motion (the key cut 1·9·8·5) plus the board sway, the workshop keys dropping onto their hooks and the tag entrance; reduced motion honoured.

## Colors

A cool metal palette tuned to the logo: nickel and paper grounds, the logo's slate blue (#3e5667) as ink and back wall, one warm brass, the logo's pine red, and two small signal colours.

### Logo
`public/img/logo-ferreteria-pino.svg`: "FERRETERÍA" over "P·NO S.L." in slate blue, with a red pine standing in for the I. It sits in the rail (46px tall, 40px at 860px and below) and, as the light variant `logo-ferreteria-pino-claro.svg` (slate swapped for on-graphite), in the footer. The favicon is the red pine alone on nickel white. The logo is used as supplied: never recoloured beyond these two variants, never stretched.

**Cadena88.** The network the shop belongs to, `public/img/logo-cadena88.png` (300×88, transparent; its wordmark is black). It appears twice and never above the fold: as the value of the "Red" row in the Taller spec list (38px tall, on the light ground), and in the footer after "Miembro de", mounted on a small paper plate (7px 12px padding, 4px radius) because black text cannot sit on the slate back wall. Never recoloured; ask Cadena88 for an SVG or an official negative version if one is needed.

**Shop front and map.** The only real photo, `public/img/fachada.jpg` (940×459, from the old site), sits in Visítanos as the map's preview: the photo at full column width with a graphite caption plate «Busca este rótulo: C/ Pino, 35», and under it a line button «Ver el mapa» with a short note that Google may set cookies. Only on that click does `src/js/modules/map.js` swap in the Google Maps iframe (16:10, greyscale). No third-party request or cookie happens before it, so the site needs no cookie banner.

### Primary
- **Brushed Brass** (brass): the one material colour. Key metal, the primary "Cómo llegar" and "Enviar mensaje" buttons, the "Hoy" badge, text selection.
- **Polished Brass** (brass-hi): the lit edge. Button hover, the cut key edge and falling shavings, the address and icons on graphite, focus colour on graphite.
- **Shadowed Brass** (brass-lo): key shoulder, groove and stamp; recessed brass.
- **Brass Ink** (brass-ink): brass dark enough to read on the light ground. Focus outline and the hero key's deepest recesses (milled channel, inside of the eyelet).
- **Brass Glint** (brass-glint): the hairline of light on the freshly cut edge of the hero key. Nothing else.

### Secondary
- **Open Green** (open): the "Abierto" status dot and its pulse. Nothing else.
- **Pine Red** (pine): the brand red from the logo's pine. A signature in small marks only: the logo, the red aluminium key of the hook wall, the active nav underline and the selected filter's dot. Never a large fill, never text, and never next to a status sentence. The hero key's engraved pine stays in brass-lo.
- **Closed Red** (closed): the "Cerrado" status dot. Never used for "open".

### Neutral
- **Nickel White** (ground): page ground, rail, mobile menu and dock bar, the key's hole.
- **Pegboard** (ground-2): the hook-wall board, hover wash on nav and filters, image placeholders.
- **Pegboard Hole** (ground-3): the board's punched-hole dot pattern.
- **Tag Paper** (paper): catalogue tags, blank tags, the fob label.
- **Steel Hairline** (rule): hairline dividers, tag borders, the scrolled rail's bottom edge.
- **Slate Ink** (ink): primary text, line buttons, filter strokes, the cutter arm. A deepened logo slate, dark enough for body text.
- **Slate Ink 2 / 3** (ink-2, ink-3): ink-2 is the logo slate itself: every display headline (hero title and section h2s on the light ground), secondary text, the selected filter, the dock button, and the service icons and rules. ink-3 is for notes and tag threads.
- **Nickel / Nickel Deep** (nickel, nickel-lo): steel key blanks and the cutter body; nickel-lo is the catalogue's steel rail and the tag punch ring.
- **Back Wall** (graphite, graphite-2, graphite-rule): the closing ground. Visítanos scopes these tokens to the logo slate (#3e5667, with graphite-2 #456074 lifting the map frame and form panel, and graphite-rule #5f7788 as its hairline). The footer keeps the deeper slate of the root tokens, because the logo's red pine barely reads on the logo slate.
- **On Graphite** (on-graphite, on-graphite-2): primary and secondary text on the back wall (on-graphite-2 lightens to #d3dbe0 inside Visítanos to keep its contrast).

### Named Rules
**The One Metal Rule.** Brass is the only warm colour and the only accent. If something needs emphasis and is not a key, a tag accent or the primary action, it gets weight or size, not brass.

**The Signal Rule.** Green means open, red means closed. The open pulse is green (open) because red reads universally as "closed"; signal red is reserved for the closed state. Pine red is the brand's, not a signal: it lives only in the small marks listed under Pine Red. Signals never decorate.

**The Flat Fill Rule.** Every surface is a single flat colour. The only gradient function in the build is the pegboard's hard-edged hole pattern, which is a texture of holes, not a colour blend.

## Typography

**Display Font:** Montserrat Variable (fallback Archivo Variable, sans-serif). Chosen because the logo is set in Montserrat or a very close geometric sans: round O, wide R and N.
**Body Font:** Archivo Variable (fallback system-ui, sans-serif)

Both are self-hosted through @fontsource-variable (montserrat with the weight axis; archivo with the width axis). No system display faces.

**Character:** a monumental geometric sans set heavy, echoing the logo's PINO, over a sober workshop text face whose width axis gives labels a stamped, expanded feel. All figures are tabular.

### Hierarchy
- **Display** (800, clamp(6rem, 17vw, 15rem), line-height 0.8, -0.03em): the brand name in the hero only. Above it, like the logo's top line, «FERRETERÍA» in 700 uppercase tracked 0.14em at clamp(1.15rem, 2.5vw, 2.3rem). The rail's «Desde 1985» uses the same tracked-caps treatment. On mobile the name grows to clamp(6rem, 33vw, 11rem).
- **Headline** (750, clamp(2.1rem, 4.2vw, 3.75rem), line-height 0.98, -0.02em, balanced; Montserrat is wider, so it runs smaller than the old grotesque): section titles, written as plain sentences. The Visítanos title runs smaller, at clamp(1.7rem, 2.6vw, 2.4rem), with the address below it on one line in brass-hi, 700, at clamp(1.15rem, 1.7vw, 1.5rem).
- **Title** (700, 1.45rem, line-height 1.15, -0.02em): service names and the form title (1.6rem).
- **Figure** (750, 1.5rem, -0.02em, display face): the facts in the workshop spec list. Numbers are set in the display face so they read as stamped.
- **Body** (400, 1.0625rem, line-height 1.55): running text, max 38 to 46ch. Lead text runs at clamp(1.125rem, 1.6vw, 1.3rem) in ink-2, max 38ch.
- **Label** (0.78rem to 1rem, width 108 to 115%): tag codes, the "desde 1985" line, catalogue rail titles, the key stamp. Width-expanded Archivo, sentence case, used sparingly.

### Named Rules
**The Stamped Number Rule.** Prices and facts are set in the display face at weight 750; everything numeric is tabular.

**The Sentence Headline Rule.** Headlines are plain sentences in the display face. No kicker, eyebrow or section number above them.

## Layout

A 1360px container with a fluid gutter (clamp(16px, 4vw, 48px)) and two section spacings: band (clamp(56px, 7vw, 96px)) on each side of a change of ground and step (clamp(40px, 4.2vw, 60px)) on each side between sections on the same ground. Section order: hero, keys, services, catalogue, workshop, visit. Section heads share one pattern: title on the left, lead beside it on the 5fr to 7fr grid. Most sections use an asymmetric two-column grid of 5fr to 7fr (text to object) with a clamp(28px, 5vw, 80px) gap; the workshop flips to 7fr to 5fr, inside the same container and with the photo rounded on all four corners like every other photo. Visítanos stacks a full-width head (title, address, status), the week of opening hours as seven day boxes with today lifted in graphite-2 and a brass-hi border (a plain table at 1080px and below), and a 5fr to 7fr row with the shop photo, map and contact channels beside the form.

The hero is a 1.35fr to 1fr grid sized by its content, not the viewport, so the next section shows below it: the headline with the key directly under it at the name's own width, like a signature, and an aside (lede, status, address, two buttons) whose buttons line up with the base of the key. On mobile: headline, key, aside. A bitting-profile divider separates hero, keys and catalogue.

Breakpoints: 1240px (catalogue rail drops to 3 tags), 1080px (nav collapses to a Menú button with a full-screen display-type menu; hook wall stays in 5 columns from 1240px, drops to 3 at 640px), 860px (single column everywhere, rail height 60px, filters scroll horizontally, catalogue rail to 2 tags, tag descriptions hidden, the dock becomes a bottom bar), 420px (the "desde 1985" line hides).

**The Never-Twice Rule.** The open/closed status appears in the rail only after the hero status scrolls out of view, so it is never shown twice on screen. The rail carries status, not WhatsApp, because WhatsApp already lives in the hero, the dock and Visítanos.

## Elevation & Depth

Flat by default. Depth comes from objects hanging, not from surfaces lifting: tags, keys and hooks cast short, soft drop shadows straight down as if hung on a wall; nothing floats as a card. Colour layers (ground, ground-2 board, paper tags; graphite, graphite-2 panels) carry all other hierarchy.

### Shadow Vocabulary
- **Hanging tag** (`box-shadow: 0 8px 12px -8px rgb(27 28 30 / 0.3)`): catalogue tags.
- **Hanging key** (`filter: drop-shadow(0 8px 6px rgb(27 28 30 / 0.18))`): key blanks on the board.
- **Hook** (`box-shadow: 0 6px 8px -2px rgb(27 28 30 / 0.28)`): the hook pegs.
- **Dock** (`box-shadow: 0 10px 24px -8px rgb(27 28 30 / 0.45)`): the desktop WhatsApp pill only; removed on the mobile bar.
- **Open pulse** (`box-shadow` ring 0 to 9px, rgb(44 122 75 / 0.45) to 0): the open status dot only. A state signal, not a glow.

### Named Rules
**The Hanging Shadow Rule.** A shadow means "this hangs on the wall". Shadows fall downward, are short and neutral, and are never coloured, offset hard, or used to lift a panel.

## Shapes

Gently rounded, workshop-made corners: 6px for buttons, board, photos, map and form; 4px for fields; 3px for small paper (blank tags, the "Hoy" badge). Price tags are 4px at the top and 8px at the bottom, punched with an 11px round hole and hung by a 1.5px ink thread from a 5px nickel steel rail. Filters are luggage tags: 3px on the left, fully round on the right, with a hollow punch dot that fills with brass when selected. The only true pill is the desktop dock.

The recurring silhouette is the key bitting profile (flat, a deep V cut, flat, a shallow cut, flat): a CSS mask cutting the top edge of the section at every change of ground (the only section divider). Lines are hairlines (1px rule) or firm ink rules (1.5px ink) at the head of lists.

## Components

### Buttons
Solid and plain, like a counter sign.
- **Shape:** gently rounded (6px), min height 52px, 22px side padding, 1.5px border, weight 600.
- **Primary (brass):** brass fill with ink text; hover lifts to brass-hi. Used for "Cómo llegar" and "Enviar mensaje".
- **Line:** transparent with a 1.5px ink stroke; hover fills ink with ground text. Used for WhatsApp in the hero and "Ver los 20 artículos".
- **Press:** translate 1px down on active. Focus: 2px brass-ink outline, 3px offset (brass-hi on graphite).
- **Text action:** "Cortar otra vez" is an underlined text button with a 2px brass underline; its icon turns -90deg on hover.

### Chips (catalogue filters)
- **Style:** luggage-tag shape, 1.5px ink stroke, transparent, 44px tall, hollow punch dot at left.
- **State:** hover washes ground-2; selected fills ink-2 with paper text and a pine dot ringed in paper. Horizontal scroll strip on mobile.

### Cards / Containers (hanging tags)
- **Corner Style:** 4px top, 8px bottom; 3px for blank tags on the board.
- **Background:** paper with a 1px rule border.
- **Shadow Strategy:** hanging tag shadow (see Elevation).
- **Internal Padding:** 34px 16px 16px (room for the punch hole).
- **Behaviour:** each tag hangs slightly askew (-0.7deg, 0.6deg on even, -0.2deg every third) and straightens on hover. Content: code (label), name (640 weight), description. No prices: the site is informative and sends price questions to phone, WhatsApp or the shop. The catalogue is a set of tags hanging from one steel rail per category, never a list or table.

### Inputs / Fields
- **Style:** on the graphite back wall only: graphite fill, on-graphite text, 1.5px graphite-rule border, 4px radius, 12px 14px padding, brass-hi caret.
- **Focus:** border shifts to brass-hi; no glow.
- **Error:** border #e0786d with message text #f0a39a below the field.

### Navigation
- **Rail:** sticky ground bar, 68px (60px on mobile), with the brass tag mark and the name in display 800 at left, plain text links (Llaves, Catálogo, Servicios, Taller, Visítanos) and the compact status at right. A hairline appears under the rail once scrolled.
- **Links:** ink-2 at 550 weight; hover ink on a ground-2 wash; the current section gets a 2px inset pine underline. No section numbers.
- **Mobile:** a "Menú" line button opens a full-screen ground panel listing the sections in display type with hairline separators.

### Status
A 10px dot and a sentence ("Abierto ahora · hasta las 20:30"). Open: green dot with a slow 2.4s pulse ring, three times, then still. Closed: red dot, no motion. Unknown: nickel dot. Appears in the hero, in the rail (compact, after the hero status leaves view) and on the logo slate in Visítanos, where the dot gets a 2px on-graphite ring to stay visible.

### Dock
The always-reachable action. Desktop: a single ink-2 WhatsApp pill fixed bottom-right with the dock shadow; it hides while the visitor is in zones that already show WhatsApp. Mobile (860px and below): a full-width ground bar with three 6px buttons: Llegar (brass), Llamar (line), WhatsApp (ink-2).

### The Key Cutter (signature)
One SVG key under the hero's name, at the name's own width and whole from bow to tip: drawn as a machined object in flat facets, with no gradients and light from the upper left. The bow is an oblong that flows into a turned collar, with a bevelled rim, a pinstripe, a bevelled eyelet around a ground-coloured hole, and the logo's pine engraved in brass-lo above the word PINO (display face, 800), each with a brass-hi highlight below so they read as sunk into the metal. The blade carries a milled channel, a fine second channel, a bottom bevel and a faceted tip; the cuts gain a brass-hi chamfer and a brass-glint edge as the wheel passes. The drawing leaves headroom so the cutter wheel is always seen as a full circle. On load a nickel saw-toothed cutter wheel, held by an ink fork, travels the blade and carves four cuts in the order 1·9·8·5, dropping brass-hi shavings; no digits are drawn on the key. "Cortar otra llave" replays it with a random code. One drawing at every width: a short blade with tight cut spacing, like a real key. Under reduced motion the cut key is drawn finished.

### The Services
The headline on one full-width line, then a 5fr to 7fr split. Copias de llaves, the specialty, is a logo-slate panel with on-graphite text, a link down to the hook wall and a brass key whose eyelet is centred, so it hangs straight from its hook, which runs into the eyelet. Beside it, the other three services as ruled rows. On mobile the panel comes first.

### The Workshop Keys
Five of the board's blanks on a small pegboard in the Desde 1985 section, from the old lever key to the remote, over the line «1985 · Las llaves han cambiado. El mostrador, no. · Hoy». When it enters view, each key drops onto its hook and sways once, 260ms apart. Under reduced motion they simply hang there.

### The Hook Wall
A ground-2 pegboard (30px hole grid) titled «Las 9 que más copiamos», holding the nine most-copied key types, each on an ink hook with a small paper tag, plus a tenth free hook with a dashed key silhouette and the tag «Y muchas más · Trae la tuya», so the board never reads as the full list: one long row of ten on desktop, two rows of five below 1240px, and three columns with the free hook as a full-width strip below 640px. Silhouettes follow the shop's JMA price poster, without its logos. Blanks are nickel, two are brass, one is red aluminium, and the dark heads and the remote are graphite. The whole board sways once when it enters view (staggered delays), and a single blank sways on hover: a damped swing from 9deg settling to 0 over 1.8s.

### Bitting Cut
The `.has-cut` edge: a 24px band in the section's own ground, masked with the key profile and repeated across the top. Used on every change of ground and nowhere else. The door sign in Visítanos (the open/closed status on a paper tag) hangs from the wall above and crosses the cut, so the two zones touch.

## Do's and Don'ts

### Do:
- **Do** keep every fill flat: one colour per surface.
- **Do** spend brass only on keys, tags' accents and the primary action; let weight and size do the rest.
- **Do** use green (`open`) for open and red (`closed`) for closed, and nothing else.
- **Do** draw from the counter: hooks, punched paper tags on threads, steel rails, the bitting profile, the graphite back wall.
- **Do** set facts in the display face at 750 with tabular figures.
- **Don't** show prices anywhere on the site; invite people to call, write on WhatsApp or come by.
- **Do** end the page on the graphite back wall with its bitting-cut top edge.
- **Do** keep address, hours, phone and WhatsApp within one move: hero, dock, rail status, Visítanos.
- **Do** honour prefers-reduced-motion: animations and transitions collapse, the key is shown already cut.
- **Do** use real-looking photos (Pexels stock in public/img) with their origin embedded in the file as provenance; replace with real shop photos when available.

### Don't:
- **Don't** use gradients, glass, blur or glows.
- **Don't** add motion beyond the four: the key cut, the board sway, the workshop keys dropping, the tag entrance (plus small state transitions).
- **Don't** put kickers, eyebrows or section numbers above headlines or in the nav.
- **Don't** turn the catalogue into a list or table; products hang as tags on a rail.
- **Don't** use red for "open" or as a decorative accent.
- **Don't** lift containers as floating cards; shadows only mean hanging.
- **Don't** fall back to system display fonts; both families ship self-hosted.
- **Don't** present example data (Spain: €, +34, the Madrid address, product list) as real business facts.
