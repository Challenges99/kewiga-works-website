# Things only you can fill in

Every item below lives in `src/lib/site.ts` unless noted. While a value is `null`, the dev server
(`npm run dev`) shows a yellow **[FILL IN]** marker, and the live build leaves it out.
Nothing made up is ever published.

## Details to send or paste in

| # | What | Where it shows | Set in |
|---|---|---|---|
| 1 | ~~Registered office address~~ Done (6 Nov 2026) | Footer of every page, About, Privacy, Google structured data | `COMPANY.registeredAddress` |
| 2 | ~~Directors' names~~ Done (6 Nov 2026) | About page | `COMPANY.directors` |
| 3 | ~~Founder statement~~ Done (6 Nov 2026) | Home trust section, About | `TRUST.founderStory` |
| 4 | ~~Founder photo~~ Done (6 Nov 2026), `public/img/founder.webp` | Home trust section, About | `TRUST.founderPhoto` |
| 5 | **Founding-member offer** (e.g. "50% off your first month") | Home page banner (hidden until set) | `TRUST.founding.offer` |
| 6 | **Founding spots taken** (real number only) | Progress bar on the banner | `TRUST.founding.spotsTaken` |
| 7 | **Google review link** (Google Business Profile → "Ask for reviews") | Kept ready for the review section | `TRUST.googleReviewUrl` |

## Terms and Privacy

Confirmed by the owner on 6 Nov 2026 as reviewed by a lawyer, so the "draft for legal review" notice is off
(`LEGAL_REVIEWED = true` in `src/components/LegalDraft.tsx`). The Terms include:

- Cancellation cut-off: **3 days** before the billing date.
- Full refund if cancelled **within 7 days** of the first payment and no job done.
- If we miss the booking window, **next month free**.
- **30 days' notice** before price changes or changes to the terms or rewards scheme.
- **Rewards never expire**, including after cancelling (matches the Subscriber Agreement and the original site).
- Complaints answered within **2 working days**, resolved within **14 days**.
- Guarantee exclusions: faulty parts, misuse, accidents, power surges, weather, other people's later work.
- Data kept **6 years** after a customer leaves; failed artisan applications deleted within **3 months**.

**Have a Nigerian lawyer review both pages before relying on them.**

## Off-site jobs from the report (not website code)

- Deploy (`npm run build`, then drag the `out` folder into Netlify) and submit `sitemap.xml` in Search Console.
- Set up and verify Google Business Profile as a service-area business.
- Start the post-job WhatsApp review request (never offer rewards for reviews).
- List the business on Bing Places, BusinessList.com.ng, Finelib, ConnectCiti and Jiji.
- Replace stock photos with real job photos and artisan profiles (with their consent) as you get them.
- Paystack payment pages, once the Terms and Privacy pages are reviewed.
