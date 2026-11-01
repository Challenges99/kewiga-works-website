# Things only you can fill in

Every item below lives in `src/lib/site.ts` unless noted. While a value is `null`, the dev server
(`npm run dev`) shows a yellow **[FILL IN]** marker, and the live build leaves it out.
Nothing made up is ever published.

## Details to send or paste in

| # | What | Where it shows | Set in |
|---|---|---|---|
| 1 | **Registered office address** (exactly as on the CAC certificate) | Footer of every page, About, Privacy, Google structured data | `COMPANY.registeredAddress` |
| 2 | **Directors' names** as registered with CAC | About page | `COMPANY.directors` |
| 3 | **Why I started Kewiga Works** (2–4 sentences, your own words) | Home trust section, About | `TRUST.founderStory` |
| 4 | **Your photo** (square, at least 320px; put it in `public/img/`) | Home trust section, About | `TRUST.founderPhoto` |
| 5 | **Founding-member offer** (e.g. "50% off your first month") | Home page banner (hidden until set) | `TRUST.founding.offer` |
| 6 | **Founding spots taken** (real number only) | Progress bar on the banner | `TRUST.founding.spotsTaken` |
| 7 | **Google review link** (Google Business Profile → "Ask for reviews") | Kept ready for the review section | `TRUST.googleReviewUrl` |

## Business decisions I drafted. Please confirm or change them

These are in the draft **Subscription Terms** (`src/app/terms/page.tsx`) and **Privacy Policy**
(`src/app/privacy/page.tsx`). Both pages show a "draft for legal review" notice until you set
`LEGAL_REVIEWED = true` in `src/components/LegalDraft.tsx`.

- Cancellation cut-off: **3 days** before the billing date.
- Full refund if cancelled **within 7 days** of the first payment and no job done.
- If we miss the booking window, **next month free**.
- **30 days' notice** before price changes or changes to the terms or rewards scheme.
- **Rewards:** no longer "never expire". They now last while your plan is active, plus **90 days** after cancelling.
  The report flagged "never expire" as an open-ended liability. The Rewards page and FAQ say the same.
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
