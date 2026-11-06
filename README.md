# Kewiga Works website (React / Next.js)

The kewigaworks.com marketing site, rebuilt in React with Next.js and the changes from
`../kewiga works/reports/Kewiga Works website improvements.md`. The previous hand-coded site is
untouched in `../kewiga works/`.

Next.js pre-renders every page to plain HTML (static export), so Google reads the pages
in full, and the site needs no server: it's a folder you drag into Netlify.

## Commands

You need Node.js 18 or newer. Run these from this folder:

```bash
npm install
```

Installs the packages (first time only).

```bash
npm run dev
```

Opens a live-editing preview at http://localhost:4322. This preview shows the yellow [FILL IN] markers.

```bash
npm run build
```

Builds the live site into `out/`.

```bash
npm run images
```

Makes phone-sized copies of photos after you add or replace one in `public/img/`.

**Stop `npm run dev` (Ctrl+C) before running `npm run build`.** Both use the `.next` folder, and building while the
dev server runs breaks the dev server. If that happens, delete the `.next` folder and run `npm run dev` again.

**OneDrive:** if `npm run dev` stops with `EINVAL: invalid argument, readlink …\.next\…`, OneDrive has interfered
with the `.next` folder. Run this instead; it clears `.next`, pins it to this PC and starts the dev server:

```bash
npm run dev:fresh
```

If it keeps happening, move this project folder out of OneDrive (for example to `C:\dev\`).

## Deploy to Netlify

1. `npm run build`
2. In Netlify, open the **kewigaworks** project → Deploys → drag the **`out`** folder onto the page.
3. Don't touch DNS at Porkbun, and never delete the Google Search Console TXT record.
4. In Search Console, submit `https://kewigaworks.com/sitemap.xml`.

`out/_redirects` forwards old links (`/referrals/` → `/rewards/#referrals`, old `/assets/img/` paths),
and the page also forwards very old `/#/plans`-style links. `out/_headers` sets caching.

## Where things live

| Path | What it is |
|---|---|
| `src/lib/site.ts` | **Start here.** Phone, email, company details, plans and prices, areas, and the [FILL IN] values |
| `src/lib/services.ts` | The four service pages: jobs, tiers, labour vs parts, FAQs |
| `src/lib/faq.ts` | Customer and artisan FAQs |
| `src/app/` | One folder per page (`plans/`, `services/[slug]/`, `estates/`, `terms/` …); `layout.tsx` is the shell |
| `src/components/` | Shared pieces: header, footer, plans, booking form, plan finder, trust blocks |
| `src/app/globals.css` | All styles. Colours and timing are variables at the top |
| `public/` | Images, manifest, Netlify `_redirects` and `_headers` |
| `FILL-IN-CHECKLIST.md` | What you still need to supply, and the draft business decisions to confirm |

## What changed from the old site (report items)

- **Trust:** removed "rated 5/5" mock-ups and "Most popular". Added the named 30-Day Fix-It-Free Guarantee with claim steps, a six-point vetting checklist, a founder block, a "pay only KEWIGA WORKS LTD" warning, and a founding-member offer (shows real numbers only).
- **Mobile:** sticky "Chat on WhatsApp" bar on phones that slides away over forms; phone-sized images (hero 217 KB → 53 KB).
- **One action:** "Get started on WhatsApp" everywhere. The form is cut to name, area and plan, plus optional extras, with a "Just chat with us" link. Every WhatsApp link carries a `[web-…]` tag so you can see which button was used.
- **Plans:** split into "For homes" and "For landlords & businesses", with a one-line promise per plan, the value shown next to the price, and one "How jobs are counted" box with a worked example.
- **Legal:** company name and RC number in every footer with a CAC link; About page; draft Privacy Policy and Subscription Terms; privacy notice under each form; guarantor-consent tick box on the artisan form.
- **SEO:** "Plumber in Abuja"-style service pages for plumbing, electrical, AC servicing and painting; a services hub; one Areas page; inner page titles include Abuja; richer structured data (legal name, RC, prices, districts).
- **Menu:** 5 links, with Rewards and Referrals merged and Artisans moved to the footer; no booking form on the artisans or 404 pages.
- **Speed and privacy:** fonts are self-hosted (no Google requests), and long-term caching is set for build files.
- **Contrast:** green text and WhatsApp buttons use darker greens that pass 4.5:1.
- **Smooth UI:** page fade-in between pages, scroll reveals, animated plan toggle, smooth FAQ accordion, animated menu, hover lift on cards and buttons. All motion switches off for visitors with "reduce motion" set.
