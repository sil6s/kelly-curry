# Kelly Baker Curry — Website UI Kit

A high-fidelity recreation of the marketing site for the practice. Built from the brand spec (no Figma or codebase was attached), so this kit is the canonical reference for layout patterns until the real site is provided.

## What's in here

- `index.html` — full single-page site, scrollable, with working in-page anchor nav and a contact form mock.
- `Nav.jsx` — sticky top nav with sage-leaf logo and dusty-rose contact pill.
- `Hero.jsx` — split hero with overlapping photo card (the signature -90px overlap).
- `Approach.jsx` — split section with grey sliver column and italic-mix headline.
- `Services.jsx` — 3-column 3px-gap grid of service cards (linen → cream hover).
- `CouchBand.jsx` — full-bleed sage band with overlay and centered pull-quote.
- `Fees.jsx` — 3-column fee blocks on linen, with the 3.2rem amount + caps label.
- `Insurance.jsx` — chip row of accepted plans, square corners, hairline border.
- `Office.jsx` — 2-column office cards with map info-strip below.
- `Footer.jsx` — dark footer column header + body, all Playfair, no underlines.
- `SectionEyebrow.jsx` / `PillButton.jsx` / `Diamond.jsx` — small atoms reused everywhere.

## To use

Open `index.html` directly in the browser. Nav links are functional in-page anchors; the Contact pill scrolls to the contact section; the contact form shows a confirmation state on submit (no real network).

## Departures from spec to flag

- Cormorant Garamond → Playfair Display (per user correction).
- DM Sans → Playfair Display (the correction collapsed all type to Playfair). Eyebrows and labels read fine in Playfair caps but feel slightly less "UI" than they would in DM Sans. Easy to revert.
- Imagery is SVG placeholders. Replace with real photography of the office and Kelly when available.
