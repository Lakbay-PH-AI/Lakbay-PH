# LuzonLoop

LuzonLoop is a premium Philippines-only AI travel search app. It uses a large natural-language search composer, mock prompt analysis, structured result modules, saved items, share/forward controls, theme personalization, BYO AI provider settings, and Klook-oriented coupon discovery.

## Stack

- Vite + React + TypeScript
- Framer Motion
- Lucide React
- Plain CSS design tokens for a Hostinger-friendly Node.js build

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

The production artifact is emitted to `dist/`.

## Hostinger Deployment Notes

This project is prepared for a simple GitHub-to-Hostinger workflow:

1. Push this repository to GitHub.
2. In Hostinger, create or connect a Node.js application from the repository.
3. Set the build command to `npm install && npm run build`.
4. Set the start command to `npm run start` or serve the generated `dist/` folder if using Hostinger static frontend hosting.
5. Add environment variables from `.env.example` in Hostinger, keeping real API keys out of Git.

The first version is frontend-first with mock/local data. For secure live AI calls, add a small Node/Express server or Hostinger-compatible API layer that stores provider keys server-side and proxies requests. Do not expose production secrets through `VITE_` variables.

## App Areas

- Home: large AI-first search, prompt suggestions, categories, media, trending destinations.
- Explore / Results: structured search output, category filters, budget, itinerary, coupons, share actions.
- Destination Detail: overview, stays, transport, attractions, markets, food, media, deals.
- Saved: saved searches, destinations, stays, foods, transport, and deals.
- Share / Forward: email, messenger-style forwarding, selected-section sharing, export placeholder.
- Settings: theme, glass/3D/animation modes, font scale, response style, coupon preferences, BYO AI providers.
