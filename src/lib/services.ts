import type { PlanId } from './site';

export type Tier = 'Simple' | 'Medium' | 'Complex';

export interface Service {
  slug: string;
  name: string;
  icon: string;
  /** Photo name in public/img (null = show the trade icon instead). */
  image: string | null;
  imageAlt: string;
  /** <title> aimed at how Abuja residents search: "[trade] in Abuja". */
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Optional line shown above the job table, e.g. how the trade is sized. */
  note?: string;
  jobs: { job: string; tier: Tier }[];
  /** Jobs too big for a plan: surveyed and quoted per job. */
  projects: string[];
  labour: string;
  parts: string;
  bestPlan: PlanId;
  bestPlanWhy: string;
  faqs: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'plumbing',
    name: 'Plumbing',
    icon: 'drop',
    image: 'service-plumbing',
    imageAlt: 'Plumber fixing pipes under a kitchen sink',
    title: 'Plumber in Abuja: Plumbing Repairs on a Monthly Plan | Kewiga Works',
    description: 'Verified plumbers in Abuja for leaking taps, blocked drains, WC and water heater repairs. Fixed labour prices on a monthly plan, booked on WhatsApp.',
    h1: 'Plumber in Abuja, on a monthly plan',
    intro: 'Leaks, blockages and water heater faults, fixed by a verified plumber at a labour price you know before anyone opens a wall. Message us on WhatsApp and we book the visit.',
    jobs: [
      { job: 'Dripping or leaking tap', tier: 'Simple' },
      { job: 'Leaking pipe joint or valve', tier: 'Simple' },
      { job: 'WC cistern not filling or not flushing', tier: 'Simple' },
      { job: 'Blocked sink, shower or floor drain', tier: 'Medium' },
      { job: 'Water heater not heating', tier: 'Medium' },
      { job: 'Moving a plumbing point', tier: 'Complex' },
      { job: 'Water pump installation', tier: 'Complex' },
    ],
    projects: ['Re-piping a bathroom section', 'Installing a full bathroom set'],
    labour: 'Finding the fault, the repair itself, and testing that the water runs and drains properly afterwards.',
    parts: 'Taps, valves, pipe, fittings, cisterns and heater elements. We source them at trade price and show you the receipt; you pay for the part, your plan covers fitting it.',
    bestPlan: 'standard',
    bestPlanWhy: 'Plumbing problems rarely come one at a time. Standard covers up to 4 jobs a month across every trade, booked within 24 hours.',
    faqs: [
      { q: 'Can you come the same day for a burst pipe?', a: 'On Landlord / Estate and Business / Office plans, emergencies get a same-day response. On Basic and Standard, we book your visit within 48 or 24 hours. In a real emergency, turn off the main stopcock first, then message us.' },
      { q: 'Do I pay for the new tap or pipe?', a: 'Yes. Parts are not included in any plan. We buy them at trade price, show you the receipt, and the labour to fit them is covered by your plan.' },
      { q: 'What if the leak comes back?', a: 'If our workmanship fails within 30 days, we come back and redo it free under the 30-Day Fix-It-Free Guarantee. Message us on WhatsApp with your job ID.' },
      { q: 'Do you fix borehole pumps?', a: 'Installing a water pump is a complex job. Pump repairs depend on the fault, so send us a photo or short video on WhatsApp and we will tell you how it is classed before booking.' },
    ],
  },
  {
    slug: 'electrical',
    name: 'Electrical',
    icon: 'bolt',
    image: 'service-electrical',
    imageAlt: 'Electrician working on an electrical distribution panel',
    title: 'Electrician in Abuja: Electrical Repairs on a Monthly Plan | Kewiga Works',
    description: 'Tested electricians in Abuja for dead sockets, faulty switches, tripping breakers, lighting and fans. Fixed labour prices, booked on WhatsApp.',
    h1: 'Electrician in Abuja, on a monthly plan',
    intro: 'From a dead socket to a breaker that keeps tripping, handled safely by electricians who passed a practical trade test. You agree the price before the work starts.',
    jobs: [
      { job: 'Replacing a socket or switch', tier: 'Simple' },
      { job: 'Fixing or replacing a light fitting', tier: 'Simple' },
      { job: 'Ceiling fan or regulator fault', tier: 'Simple' },
      { job: 'Tracing an electrical fault', tier: 'Medium' },
      { job: 'Breaker or distribution board issue', tier: 'Medium' },
      { job: 'Replacing a distribution board', tier: 'Complex' },
      { job: 'Gate automation repair', tier: 'Complex' },
    ],
    projects: ['Rewiring a room or a section', 'Inverter wiring and installation'],
    labour: 'Safe isolation, finding the fault, the repair, and testing the circuit before the electrician leaves.',
    parts: 'Sockets, switches, cable, breakers, bulbs and fittings, sourced at trade price with a receipt. You pay for parts; your plan covers fitting them.',
    bestPlan: 'standard',
    bestPlanWhy: 'Electrical faults often need a medium job for fault tracing. Standard’s ₦40,000 monthly labour value covers that with room to spare.',
    faqs: [
      { q: 'Is fault tracing one job?', a: 'Yes. Tracing a fault counts as one medium job (₦12,000 of labour value). If the fix it finds is a separate repair, we tell you how it is classed before any more work starts.' },
      { q: 'Do you install inverters or solar panels?', a: 'Inverter wiring and installation is project work: we survey the job and quote one fixed price, agreed before any work starts, and it sits outside your plan. For solar panels, message us and we will tell you what we can help with.' },
      { q: 'Are your electricians safe to let into my home?', a: 'Every artisan passes an ID check, a guarantor check and a practical trade test before their first job, and you get the artisan’s name before they arrive.' },
    ],
  },
  {
    slug: 'ac-servicing',
    name: 'AC servicing',
    icon: 'snow',
    image: 'service-ac',
    imageAlt: 'Technician servicing a wall-mounted air conditioner',
    title: 'AC Repair & Servicing in Abuja: Home & Office Split Units | Kewiga Works',
    description: 'AC servicing, gas refills and not-cooling repairs for home and office air conditioners and split units in Abuja. Fixed labour prices on a monthly plan.',
    h1: 'AC servicing and repair in Abuja, for homes and offices',
    intro: 'Servicing and repairs for home and office air conditioners, including split units, so they keep cooling through the Abuja heat and the harmattan dust.',
    jobs: [
      { job: 'General servicing (clean filters, coils and drain)', tier: 'Medium' },
      { job: 'AC not cooling: diagnosis and repair', tier: 'Medium' },
      { job: 'Gas refill (gas charged as a material)', tier: 'Medium' },
      { job: 'Water leaking from the indoor unit', tier: 'Medium' },
      { job: 'Moving an AC unit to a new position', tier: 'Complex' },
      { job: 'Compressor replacement', tier: 'Complex' },
    ],
    projects: ['Installing a new AC unit'],
    labour: 'Servicing, diagnosis, the repair, and a test run to check the unit is cooling before the technician leaves.',
    parts: 'Refrigerant gas, capacitors, fan motors and other parts, sourced at trade price with a receipt. You pay for gas and parts; your plan covers the labour.',
    bestPlan: 'standard',
    bestPlanWhy: 'AC servicing is a medium job. Standard covers up to 4 jobs and ₦40,000 of labour a month, so you can service several units across the year.',
    faqs: [
      { q: 'Is AC servicing one job?', a: 'Yes. Servicing one unit is one medium job, which uses ₦12,000 of your plan’s monthly labour value and one of your job slots.' },
      { q: 'How often should I service my AC in Abuja?', a: 'Dust builds up fast, especially in harmattan. Many households service each unit every three to four months. We can suggest a schedule when we first visit.' },
      { q: 'Do you repair car air conditioners?', a: 'No. We service home and office air conditioners and split units only.' },
    ],
  },
  {
    slug: 'painting',
    name: 'Painting',
    icon: 'roller',
    image: 'service-painting',
    imageAlt: 'Painter rolling fresh paint onto an interior wall',
    title: 'Painter in Abuja: Room Painting & Touch-Ups on a Monthly Plan | Kewiga Works',
    description: 'House painters in Abuja for room repaints, touch-ups, move-in and move-out painting. Preparation included, fixed labour price, booked on WhatsApp.',
    h1: 'Painter in Abuja, on a monthly plan',
    intro: 'Room refreshes, touch-ups and move-in or move-out repaints with a clean finish. Preparation is part of the job, and the labour price is fixed before we start.',
    jobs: [
      { job: 'Touch-ups on scuffed or marked walls', tier: 'Simple' },
      { job: 'Painting one room, including preparation', tier: 'Medium' },
      { job: 'Filling cracks and small wall repairs before painting', tier: 'Medium' },
      { job: 'Move-in / move-out repaint (each room counts as a job)', tier: 'Medium' },
      { job: 'Special or textured finishes', tier: 'Complex' },
      { job: 'A large single-day repaint (several rooms)', tier: 'Complex' },
    ],
    projects: ['Repainting a whole flat', 'Exterior painting of a whole building'],
    labour: 'Preparation (filling, sanding and masking), painting, and leaving the room clean.',
    parts: 'Paint, filler and other materials. We source them at trade price with a receipt, or you can supply your own paint.',
    bestPlan: 'landlord',
    bestPlanWhy: 'Landlords repaint between tenants. Landlord / Estate covers up to 8 jobs a month per property, including move-in and move-out repairs.',
    faqs: [
      { q: 'Is the paint included?', a: 'No. Paint is a material. We buy it at trade price and show you the receipt, or you can buy your own. The painting and preparation labour is covered by your plan.' },
      { q: 'How is a whole flat counted?', a: 'Repainting a whole flat is project work: we survey it and quote one fixed price for the whole job, agreed before any work starts, and it never uses your plan’s monthly jobs. A single room is one medium job, and several rooms repainted in one day is one complex job.' },
      { q: 'Can I choose the colour and brand?', a: 'Yes. Tell us the colour and brand, or ask us to suggest one, before the job is booked.' },
    ],
  },
  {
    slug: 'carpentry',
    name: 'Carpentry',
    icon: 'hammer',
    image: 'service-carpentry',
    imageAlt: 'Carpenter fitting a lock to a wooden door, with tools on the workbench',
    title: 'Carpenter in Abuja: Door, Lock & Furniture Repairs on a Monthly Plan | Kewiga Works',
    description: 'Carpenters in Abuja for doors, hinges, locks, cabinets, curtain rails and furniture repairs. Fixed labour prices on a monthly plan, booked on WhatsApp.',
    h1: 'Carpenter in Abuja, on a monthly plan',
    intro: 'Doors that stick, hinges and locks that fail, cabinets and furniture that need fixing, handled by a verified carpenter at a labour price agreed before work starts.',
    jobs: [
      { job: 'Door handle or lock change', tier: 'Simple' },
      { job: 'Hinge repair', tier: 'Simple' },
      { job: 'Curtain rail hanging', tier: 'Simple' },
      { job: 'Cabinet hinge or handle repair', tier: 'Simple' },
      { job: 'Door re-hanging', tier: 'Medium' },
      { job: 'Repairing a wardrobe door or drawer set', tier: 'Medium' },
      { job: 'Replacing a door in the same frame', tier: 'Medium' },
      { job: 'Building and installing a wardrobe', tier: 'Complex' },
      { job: 'New door with frame installation', tier: 'Complex' },
      { job: 'Kitchen cabinet installation or rebuild', tier: 'Complex' },
    ],
    projects: [],
    labour: 'Measuring, the repair or fitting, and checking that doors, drawers and locks open and close properly before the carpenter leaves.',
    parts: 'Locks, hinges, handles, wood, boards and fittings, sourced at trade price with a receipt. You pay for parts; your plan covers fitting them.',
    bestPlan: 'standard',
    bestPlanWhy: 'Most carpentry fixes are simple or medium jobs. Standard covers up to 4 jobs and ₦40,000 of labour a month across every trade, booked within 24 hours.',
    faqs: [
      { q: 'Do you build wardrobes and kitchen cabinets?', a: 'Yes. Building and installing a wardrobe, and kitchen cabinet installation or rebuild, are complex jobs (₦20,000 of labour value). Wood, boards and fittings are materials, sourced at trade price with a receipt.' },
      { q: 'Do I pay for the new lock or hinges?', a: 'Yes. Parts are not included in any plan. We buy them at trade price and show you the receipt, and the labour to fit them is covered by your plan.' },
      { q: 'What if the door sticks again?', a: 'If our workmanship fails within 30 days, we come back and redo it free under the 30-Day Fix-It-Free Guarantee.' },
    ],
  },
  {
    slug: 'cleaning',
    name: 'Cleaning',
    icon: 'sparkle',
    image: 'service-cleaning',
    imageAlt: 'Cleaner in uniform and gloves wiping down a kitchen counter',
    title: 'Cleaning Services in Abuja: Deep, Move-In & Post-Construction Cleaning | Kewiga Works',
    description: 'Cleaning in Abuja for rooms, bathrooms, kitchens, full flats, move-in and move-out, post-construction and estate common areas. Fixed labour prices, booked on WhatsApp.',
    h1: 'Cleaning in Abuja, on a monthly plan',
    intro: 'From a deep clean of one bathroom to a full flat, a move-out or a post-construction clean, done by vetted cleaners at a labour price agreed before work starts.',
    note: 'Cleaning is sized by the size of the space and how deep the clean is.',
    jobs: [
      { job: 'Deep clean of one room (bedroom or living room)', tier: 'Simple' },
      { job: 'Deep clean of one bathroom', tier: 'Simple' },
      { job: 'Deep clean of one kitchen', tier: 'Simple' },
      { job: 'Full clean of a 2–3 bedroom flat', tier: 'Medium' },
      { job: 'Move-in or move-out clean of a small flat', tier: 'Medium' },
      { job: 'Deep clean of a large open-plan living and kitchen area', tier: 'Medium' },
      { job: 'Post-construction cleaning', tier: 'Complex' },
      { job: 'Move-in or move-out deep clean of a large house or duplex (4+ bedrooms)', tier: 'Complex' },
      { job: 'Full building or estate common-area cleaning (stairs, halls, shared areas)', tier: 'Complex' },
    ],
    projects: [],
    labour: 'The cleaning itself, sized by the space and how deep the clean is, and leaving each area ready to use.',
    parts: 'Cleaning products and consumables, sourced at trade price with a receipt, or you can supply your own.',
    bestPlan: 'standard',
    bestPlanWhy: 'Standard covers up to 4 jobs and ₦40,000 of labour a month across every trade, so a full flat clean (medium) fits alongside your repairs.',
    faqs: [
      { q: 'How is a clean priced?', a: 'By the size of the space and how deep the clean is. One room, bathroom or kitchen is a simple job; a full 2–3 bedroom flat is a medium job; post-construction or a large house is a complex job. We confirm the class on WhatsApp before booking.' },
      { q: 'Do you clean after building work?', a: 'Yes. Post-construction cleaning is a complex job (₦20,000 of labour value).' },
      { q: 'Can you clean an estate’s shared areas?', a: 'Yes. Full building or estate common-area cleaning (stairs, halls, shared areas) is a complex job, and estates can combine it with the Landlord / Estate plan.' },
    ],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
