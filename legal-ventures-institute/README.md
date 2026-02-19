# Legal Ventures Institute

Marketing site built with Next.js App Router and TypeScript , matching slide-based design specs with dark navy panels, bold typography, and orange/red accents.

## Mission
Advance responsible innovation at the intersection of law, ethics, and venture creation.

## Tech Stack
- Next.js App Router
- TypeScript
- CSS Modules (section-level styling)
- `next/image` for images
- No UI libraries

## Getting Started
```bash
npm install
npm run dev
```

## Scripts
- `npm run dev` - local dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - lint

## Project Structure
- `src/app` - App Router routes and pages
- `src/components/sections` - one section per file + matching CSS module
- `src/components/ContactForm.tsx` - HubSpot form embed

## Content & Design Guidelines
- Content should be data-driven where possible (arrays, mapped lists).
- Layout is 2-column on desktop, stacked on mobile.
- Visuals: dark navy background, panel sections, subtle borders, rounded corners, accents `#f1a23a` and `#d64242`.

## Updating Sections
1. Add a component in `src/components/sections`.
2. Add a matching CSS module.
3. Import and place it in the relevant route (ex: `src/app/page.tsx`).

## Assets
Place images in `public/` and load them with `next/image`.

## Contact Form (HubSpot)
Update IDs in `src/components/ContactForm.tsx`:
- `HUBSPOT_PORTAL_ID`
- `HUBSPOT_FORM_ID`
- `HUBSPOT_REGION`

## Deployment
Live site: https://www.legalethicsventuresinstitute.com

```bash
npm run build
npm run start
```

## Contributing
1. Create a branch off `main`.
2. Run `npm run lint` and `npm run build`.
3. Open a PR with a short summary and screenshots for UI changes.
