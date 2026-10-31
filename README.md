# Trust Island website

The Trust Island homepage, built with Next.js 16 from the approved canvas design.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Add `?intro` to the URL to replay the "power comes back" opening. It plays once per browser session.

For a production build:

```bash
npm run build
npm start
```

When the site has a domain, set `NEXT_PUBLIC_SITE_URL` (for example `https://example.com`) so link previews on WhatsApp and social media use the full address.

## Where things live

| What | Where |
| --- | --- |
| All copy, contact details, products and photos | `src/content/site.ts` |
| Photos | `src/assets/` |
| Logo files (SVG) | `src/assets/logo/` |
| Sections | `src/components/sections/` |
| Header and phone menu | `src/components/header/` |
| Hero and its opening | `src/components/hero/` |
| Scroll animation | `src/components/motion/ScrollFx.tsx` and the end of `src/app/globals.css` |

### Still to fill in

- Opening hours: `shop.hours` in `src/content/site.ts` (currently `[Opening hours]`).
- The WhatsApp number (`shop.whatsapp`) uses 0802 316 8637. Confirm it with the client.

### Adding a phone

1. Put the photo in `src/assets/phones/` (4:5, light grey backdrop, like the others).
2. Import it at the top of `src/content/site.ts` and add a line to `products`.
   The first ten in the list show before "Show all".

## Motion

- Smooth wheel and trackpad scrolling ([Lenis](https://github.com/darkroomengineering/lenis)). Touch keeps native scrolling.
- The hero opens in a blackout: the power flickers back, the lamp and fan come on, then the copy rises in.
- Headings rise in word by word, cards and text fade up as they arrive, and shop photos wipe in.
- Photos drift (parallax) or settle (zoom) as you scroll, driven by GSAP ScrollTrigger.
- "Look closer": on wide screens the photo pins while the captions scroll past and swap it.
- The ticker speeds up with your scrolling and runs backwards when you scroll up.
- The header hides on the way down and returns on the way up, with a red reading-progress line.
- On phones, a Call / WhatsApp / Directions bar slides up once you pass the hero.

Everything is shown without animation for visitors who turn on "reduce motion".

Fonts: Jost, Newsreader and Nunito (SIL Open Font License, files and licences in `src/app/fonts/`).
