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
  /** Registered office address, as on the CAC certificate. Shown in every footer. */
  registeredAddress: 'Suite 3002, Ndola Crescent, Anbeez Plaza, Wuse Zone 5, Abuja, FCT' as string | null,
  /** Directors, as registered with the CAC. */
  directors: ['Kelvin Wisdom Garba — Founder & Chief Executive Officer'] as string[] | null,
  cacSearchUrl: 'https://search.cac.gov.ng/',
};

/** Details for the trust section. */
export const TRUST = {
  /** The founder statement, exactly as in the Subscriber Portfolio Book (page 2). One string per paragraph. */
  founderStory: [
    'Every homeowner in Abuja knows the story. Something breaks — a leaking pipe, a dead socket, a door that will not close — and the real work begins: finding an artisan, begging him to show up, arguing over a price that changes halfway through the job. When the work fails, there is no one to call — he has moved on, and so has your money.',
    'I lived that story, and I watched my family and neighbours live it too. For years I believed it was simply how things were — until I understood the real problem. Homeowners in Nigeria do not have an artisan problem; they have a system problem. There is no checking of who these men are, no price agreed before work starts, no standard for the work, and no one standing behind it when it fails. Big companies solved this long ago with facility managers and maintenance contracts. Ordinary families deserve the same protection.',
    'That is why I started Kewiga Works. It is a simple idea: one monthly subscription, and your home’s maintenance is handled — plumbing, electrical work, painting, carpentry, air conditioning and cleaning, through one number you can trust. I put my own name into the company’s name — KElvin WIsdom GArba — because I wanted every customer to know exactly who stands behind it. If we fail you, it is my name that fails.',
    'So we built the system I wished existed. Every artisan who works for us is identity-checked, stands with a guarantor, and passes a practical trade test before he touches a customer’s home. Every job is priced from a fixed rate card and agreed before work begins. Our workmanship is guaranteed for thirty days, and if our artisan damages your property, the company — not you — makes it right. A job is complete only when the customer gives the completion code; without it, the artisan is not paid. And the value a subscriber does not use in a quiet month is not lost — most of it returns as Kewiga Rewards for future repairs.',
    'We are starting in Abuja, enrolling our first fifty subscribers — the Founding 50 — who will help us prove that maintenance in Nigeria can be honest, organised and dependable. My ambition is bigger than one city: a country where keeping a home in good repair is not a struggle, and where skilled artisans earn steady, dignified work through a company that treats them fairly too.',
    'I started Kewiga Works because I was tired of chasing artisans — and I believed Abuja was tired of it too. Never chase an artisan again. That is not just our slogan. It is the promise I started this company to keep.',
  ] as string[] | null,
  /** The founder's photo (public/img/founder.webp, from "founder photo.jpeg"). */
  founderPhoto: '/img/founder.webp' as string | null,
  founderTitle: 'Founder & Chief Executive Officer',
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
