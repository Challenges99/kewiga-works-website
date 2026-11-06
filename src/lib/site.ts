/*
 * Everything the business might need to change lives in this file:
 * contact details, company particulars, plans, prices and areas.
 *
 * Values set to `null` are details only the owner can supply. While a value is null,
 * the dev server (npm run dev) shows a yellow [FILL IN] marker in its place, and the
 * live build leaves that line out instead of publishing anything made up.
 * The full list is in FILL-IN-CHECKLIST.md.
 */

export const SITE = {
  name: 'Kewiga Works',
  url: 'https://kewigaworks.com',
  phoneDisplay: '0703 313 6921',
  phoneIntl: '2347033136921',
  email: 'kewigaworks@gmail.com',
  hours: 'Mon–Sat, 8am–6pm',
  founder: 'Kelvin Wisdom Garba',
};

/** Company particulars required on business documents under CAMA 2020. */
export const COMPANY = {
  legalName: 'KEWIGA WORKS LTD',
  rcNumber: '9965563',
  /** FILL IN: registered office address exactly as it appears on the CAC certificate. */
  registeredAddress: null as string | null,
  /** FILL IN: directors' full names, as registered with the CAC. */
  directors: null as string[] | null,
  cacSearchUrl: 'https://search.cac.gov.ng/',
};

/** Details for the trust section. */
export const TRUST = {
  /** FILL IN: 2–4 sentences in your own words: why you started Kewiga Works. */
  founderStory: null as string | null,
  /** FILL IN: path to a real photo of you, e.g. '/img/founder.webp' (put the file in public/img). */
  founderPhoto: null as string | null,
  /** FILL IN: your Google review link from Google Business Profile ("Ask for reviews"). */
  googleReviewUrl: null as string | null,
  /** Founding-member offer: only real numbers. Leave spotsTaken null to hide the counter. */
  founding: {
    totalSpots: 50,
    /** FILL IN when known: how many founding spots are actually taken. */
    spotsTaken: null as number | null,
    /** FILL IN: the reduced first-month price or discount you'll honour, e.g. '50% off your first month'. */
    offer: null as string | null,
  },
};

export const AREAS = [
  'Maitama', 'Asokoro', 'Wuse', 'Garki', 'Jahi',
  'Katampe', 'Life Camp', 'Gwarinpa', 'Kubwa', 'Lugbe',
] as const;

/** Fixed labour values every job is classed into before work starts. */
export const JOB_TIERS = [
  { tier: 'Simple', value: 7000, examples: 'tap or leak fix, socket or switch, door lock, curtain rail' },
  { tier: 'Medium', value: 12000, examples: 'one room painted, a plumbing repair, AC servicing, a carpentry repair' },
  { tier: 'Complex', value: 20000, examples: 'replacing a distribution board, moving a plumbing point' },
] as const;

export type PlanId = 'basic' | 'standard' | 'landlord' | 'business';

export interface Plan {
  id: PlanId;
  name: string;
  group: 'homes' | 'business';
  price: number;
  /** Total labour value the plan covers each month. */
  valueCap: number;
  jobs: number;
  promise: string;
  forWho: string;
  features: string[];
  tag?: string;
}

export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    group: 'homes',
    price: 10000,
    valueCap: 7000,
    jobs: 1,
    forWho: 'Individuals and small flats',
    promise: 'One simple repair a month, with your visit booked within 48 hours.',
    features: ['Taps, leaks, sockets, locks, hinges & rails', 'Book on WhatsApp, no app', 'Extra jobs at member rates'],
  },
  {
    id: 'standard',
    name: 'Standard',
    group: 'homes',
    price: 25000,
    valueCap: 40000,
    jobs: 4,
    tag: 'Recommended for most homes',
    forWho: 'Families and full homes',
    promise: 'Up to 4 repairs a month across every trade, with your visit booked within 24 hours.',
    features: ['Plumbing, electrical, painting & AC', 'Free home inspection every 3 months', 'Priority booking'],
  },
  {
    id: 'landlord',
    name: 'Landlord / Estate',
    group: 'business',
    price: 50000,
    valueCap: 100000,
    jobs: 8,
    forWho: 'Per property, for landlords and estate managers',
    promise: 'Up to 8 repairs a month on one property, with same-day response to emergencies.',
    features: ['Tenants message us directly', 'Move-in / move-out repairs', 'Monthly property report'],
  },
  {
    id: 'business',
    name: 'Business / Office',
    group: 'business',
    price: 100000,
    valueCap: 200000,
    jobs: 12,
    forWho: 'Offices that can’t afford downtime',
    promise: 'Up to 12 repairs a month, with same-day and after-hours response.',
    features: ['Monthly preventive walkthrough', 'Proper invoices for accounts', 'One dedicated contact'],
  },
];

export const naira = (n: number) => '₦' + n.toLocaleString('en-NG');

export const planLabel = (p: Plan) => `${p.name} (${naira(p.price)}/month)`;

/** Builds a WhatsApp link with a pre-filled message. The [tag] tells you which button was used. */
export function waLink(message: string, tag?: string) {
  const text = tag ? `${message} [${tag}]` : message;
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;
}

export const WA_HELLO = 'Hello Kewiga Works, I would like to get started with a maintenance plan.';
