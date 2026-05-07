# Fonts

The brand uses **Playfair Display** (Google Fonts) for both display and body.

The uploaded `Playfair_Display.zip` was not present in the project filesystem when this design system was created, so fonts are loaded from Google Fonts via `@import` in `colors_and_type.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
```

If you'd like to self-host the TTF/WOFF2 files, drop them into this folder and replace the @import with a `@font-face` block.

## Substitution note

The original brief mentioned **Cormorant Garamond** for display and (likely) **DM Sans** for body/UI. The user's correction said *"the font is Playfair Display"* — so we are using Playfair Display everywhere. If you intended to keep DM Sans for UI labels, please flag and we'll revise.
