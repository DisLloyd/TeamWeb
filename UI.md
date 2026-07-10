# UI / UX Documentation

This document explains the UI and user interface structure used in the SYSTEM BUILDERS website. It covers the main layout, design sections, and how to update the UI content and styles.

## Purpose

The website is built as a single-page layout with modern section-based UI. Each section is styled in `style.css` and structured in `index.html` using utility classes and custom styles.

## Main UI Sections

The homepage structure includes these main sections:

- `hero` — top landing area with the brand name and headline
- `about` — company introduction and quick business summary
- `services` — list of services offered, including UI/UX design
- `process` — development workflow overview
- `technologies` — core technology stack used
- `portfolio` — sample project or work showcase
- `team` — team member profiles
- `testimonials` — client feedback quotes
- `contact` — lead capture form and contact details

Each section has an element ID in `index.html` that matches the site navigation and scroll behavior.

## UI / UX Design Section

The website includes a dedicated UI/UX service card in the `services` section.

### Where to edit

Open `index.html` and find the `#services` section. The UI/UX service content is located inside a card block in that section.

### Example service item markup

```html
<div class="service-card">
  <h3 class="text-xl font-display font-semibold mb-3 group-hover:text-primary-400 transition-colors">UI/UX Design</h3>
  <p class="text-dark-400 leading-relaxed mb-4">Beautiful, intuitive interfaces that users love to interact with.</p>
</div>
```

Update the heading and description text there to change how UI/UX services are presented.

## Editing the visual style

The look and feel are defined in `style.css`.

### Key style files

- `style.css` — site colors, spacing, typography, and section layout
- `index.html` — actual content structure and UI markup
- `script.js` — interaction behavior such as navigation scrolling and section highlighting

### Useful files for UI updates

- `style.css`: change colors, spacing, responsive rules, and card appearance
- `index.html`: adjust section content, titles, and image references
- `script.js`: modify any animation or scroll-related UI behavior

## Notes

- The page uses semantic section IDs and utility classes for consistent spacing.
- If you want to update the overall UI color scheme, use `style.css` and search for `.text-primary-500`, `.bg-dark-800`, and `.border-dark-700`.
- For responsive layout changes, inspect the media queries in `style.css`.

## Quick steps to update UI content

1. Open `index.html`
2. Locate the section you want to change by its ID (`#about`, `#services`, `#team`, etc.)
3. Edit the text inside the section blocks
4. Open `style.css` if you want to change visual styling or spacing
5. Save and refresh your browser

## Recommended edit flow

- Content updates: `index.html`
- Styling updates: `style.css`
- Interaction updates: `script.js`

If you want, I can also add a short edit guide for the `#services` UI cards specifically.