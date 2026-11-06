import Link from 'next/link';
import { Icon, WhatsAppIcon } from '@/components/Icon';
import { Photo } from '@/components/Photo';
import { Plans } from '@/components/Plans';
import { JobsCounted } from '@/components/JobsCounted';
import { BookingSection } from '@/components/BookingSection';
import { Founder, FoundingOffer, Guarantee, PayWarning, Vetting } from '@/components/Trust';
import { JsonLd, businessSchema } from '@/components/JsonLd';
import { ArtisanInvite } from '@/components/ArtisanInvite';
import { ProjectWork } from '@/components/ProjectWork';
import { SERVICES } from '@/lib/services';
import { waLink, WA_HELLO } from '@/lib/site';

export const metadata = {
  title: 'Kewiga Works: Home & Office Maintenance Plans in Abuja',
  alternates: { canonical: '/' },
};

const USPS = [
  ['ratecard', 'Monthly plan, fixed prices', 'Published prices from ₦10,000/month. Every job is priced from our rate card before work starts.'],
  ['whatsapp', 'No app needed', 'Book on the WhatsApp you already use. One number for every trade.'],
  ['shield', 'Verified artisans', 'ID-checked, guarantor-backed and trade-tested before their first job.'],
  ['rework', '30-Day Fix-It-Free', 'If our workmanship fails within 30 days, we redo it free.'],
] as const;

const BOOK_STEPS = [
  ['Message us', 'Send what broke, with a photo if you can.'],
  ['Visit booked', 'A verified artisan is named and booked.'],
  ['Fixed & confirmed', 'You confirm with your completion code.'],
  ['Guaranteed', 'Your 30-day guarantee starts.'],
];

export default function Home() {
  return (
    <>
      <JsonLd data={businessSchema()} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="hero-pills">
              <span>Monthly plan</span><span>Fixed prices</span><span>No app: book on WhatsApp</span>
            </p>
            <h1 id="hero-title">Never chase an <span className="hl">artisan</span> again.</h1>
            <p className="hero-sub">One monthly plan covers repairs across plumbing, electrical, AC, painting and carpentry in Abuja. Prices are published and fixed before work starts, and if our workmanship fails within 30 days, we redo it free.</p>
            <div className="hero-ctas">
              <a className="btn btn-wa btn-lg" href={waLink(WA_HELLO, 'web-hero')} target="_blank" rel="noopener">
                <WhatsAppIcon /> Get started on WhatsApp
              </a>
              <Link className="btn btn-ghost btn-lg" href="/plans/">See plans from ₦10,000</Link>
            </div>
            <p className="hero-note"><Icon name="check" /> Nothing to pay until you’ve agreed your plan</p>
          </div>

          <div className="hero-media">
            <Photo name="abuja-estate-aerial" alt="Aerial view of a residential estate in Abuja" priority className="hero-img"
              sizes="(max-width: 900px) 100vw, 540px" />
            <div className="hero-badge"><span className="pulse" aria-hidden="true" /> Now onboarding in Abuja</div>
            <div className="steps-card">
              <b>What happens when you book</b>
              <ol>
                {BOOK_STEPS.map(([t, d], i) => (
                  <li key={t} style={{ '--i': i } as React.CSSProperties}><span>{i + 1}</span><div><b>{t}</b><small>{d}</small></div></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="usp" aria-label="Why Kewiga Works">
        <ul className="wrap usp-grid">
          {USPS.map(([icon, t, d], i) => (
            <li key={t} className="reveal" style={{ '--i': i } as React.CSSProperties}>
              <span className="usp-icon">{icon === 'whatsapp' ? <WhatsAppIcon /> : <Icon name={icon} />}</span>
              <div><b>{t}</b><span>{d}</span></div>
            </li>
          ))}
        </ul>
      </section>

      <section id="services" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">What we cover</span>
            <h2 id="services-title">One number for every repair</h2>
            <p>No more saving six artisans’ contacts and hoping one picks up.</p>
          </div>
          <div className="svc-grid">
            {SERVICES.filter((s) => s.image).map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="svc-card reveal" style={{ '--i': i } as React.CSSProperties}>
                <div className="svc-img"><Photo name={s.image!} alt={s.imageAlt} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 25vw" /></div>
                <div className="svc-body">
                  <h3><Icon name={s.icon} />{s.name}</h3>
                  <p>{s.intro.split('. ')[0]}.</p>
                  <span className="svc-link">Prices & common jobs <Icon name="arrow" /></span>
                </div>
              </Link>
            ))}
          </div>
          <p className="svc-more reveal"><b>Plus <Link href="/services/carpentry/">carpentry</Link> and general repairs:</b> doors, hinges, locks, cabinets, curtain rails and furniture fixes. If it breaks in a home or office, ask us first.</p>
        </div>
      </section>

      <section className="section-alt" id="how" aria-labelledby="how-title">
        <div className="wrap how-grid">
          <div>
            <div className="section-head reveal">
              <span className="kicker">How it works</span>
              <h2 id="how-title">Repairs, booked like a chat with a friend</h2>
              <p>No app to download and no forms to chase. Kewiga Works runs on WhatsApp.</p>
            </div>
            <ol className="steps reveal">
              <li><span className="step-num">1</span><div><h3>Pick your plan</h3><p>One monthly fee covers the labour for the jobs in your plan. Parts are extra at trade price, always quoted and agreed first.</p></div></li>
              <li><span className="step-num">2</span><div><h3>Message us on WhatsApp</h3><p>Tell us what happened and send a photo if you can. We handle everything from there.</p></div></li>
              <li><span className="step-num">3</span><div><h3>A verified artisan comes</h3><p>We book a tested artisan for the trade, agree the time with you, and tell you their name before they arrive.</p></div></li>
              <li><span className="step-num">4</span><div><h3>Confirm and relax</h3><p>You confirm the work with your completion code. If our workmanship fails within 30 days, the rework is free.</p></div></li>
            </ol>
          </div>
          <figure className="phone reveal" aria-label="Illustration of a booking conversation on WhatsApp">
            <div className="phone-screen">
              <div className="wa-head">
                <span className="wa-avatar"><Icon name="home" /></span>
                <div><b>Kewiga Works</b><span>WhatsApp Business</span></div>
              </div>
              <div className="wa-body">
                <div className="bubble in">Good morning. My kitchen tap won’t stop leaking.</div>
                <div className="bubble out">Sorry about that. A verified plumber can come today at 2:00 pm. It’s covered by your plan. Shall I book it?</div>
                <div className="bubble in">Yes please, 2 pm works.</div>
                <div className="bubble out">Booked. We’ll send the plumber’s name now and message when they’re on the way.</div>
              </div>
            </div>
            <figcaption>Illustration of how a booking looks. Not a real customer conversation.</figcaption>
          </figure>
        </div>
      </section>

      <section id="plans" aria-label="Plans and pricing">
        <div className="wrap">
          <Plans />
          <JobsCounted />
          <ProjectWork />
        </div>
      </section>

      <section className="section-alt" id="trust" aria-labelledby="trust-title">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">Why you can trust us</span>
            <h2 id="trust-title">Proof you can check, not big claims</h2>
            <p>We’re a new, registered Abuja company. Here is exactly what we promise and how we check every artisan.</p>
          </div>
          <div className="trust-grid">
            <Guarantee />
            <Vetting />
          </div>
          <Founder />
          <PayWarning />
        </div>
      </section>

      <section aria-labelledby="extras-title">
        <div className="wrap">
          <h2 id="extras-title" className="sr-only">Rewards and referrals</h2>
          <FoundingOffer />
          <div className="extras">
            <Link href="/rewards/" className="extra-card reveal">
              <Icon name="gift" />
              <div><b>Kewiga Rewards</b><span>Quiet month? 70% of your unused plan value becomes rewards for future services.</span></div>
              <Icon name="arrow" />
            </Link>
            <Link href="/rewards/#referrals" className="extra-card reveal">
              <Icon name="user" />
              <div><b>Refer a friend</b><span>Earn when they join, and again when they stay a year. Up to ₦70,000 on one Business referral.</span></div>
              <Icon name="arrow" />
            </Link>
          </div>
          <ArtisanInvite />
        </div>
      </section>

      <BookingSection />
    </>
  );
}
