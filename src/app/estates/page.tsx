import { PageHero } from '@/components/PageHero';
import { Photo } from '@/components/Photo';
import { Icon } from '@/components/Icon';
import { BookingSection } from '@/components/BookingSection';
import { ChoosePlanButton } from '@/components/ChoosePlanButton';

export const metadata = {
  title: 'Property & Facility Maintenance for Estates and Offices in Abuja | Kewiga Works',
  description: 'Facility and property maintenance in Abuja for landlords, estates and offices. Estate bulk rates from ₦21,250 per household; office plans with same-day response.',
  alternates: { canonical: '/estates/' },
};

const WHO = [
  { img: 'audience-home', alt: 'Bright, well-kept living room in a Nigerian home', title: 'Homeowners & families',
    text: 'One message brings a verified artisan, with no referrals, guesswork or stories.',
    ticks: ['One number for every trade', 'Inspection every 3 months on Standard', 'From ₦10,000/month'] },
  { img: 'abuja-estate-aerial', alt: 'Residential estate in Abuja seen from above', title: 'Landlords & estates',
    text: 'Tenants message us directly and you get a monthly report. No midnight calls.',
    ticks: ['Per-property cover, bulk rates for 10+ units', 'Move-in / move-out repairs', 'Monthly condition reports you can read'] },
  { img: 'audience-office', alt: 'Modern office tower in a Nigerian city', title: 'Businesses & offices',
    text: 'One arrangement keeps your workplace running, with the invoices your accounts team expects.',
    ticks: ['Same-day and after-hours response', 'One invoice across sister companies', 'Preventive maintenance every month'] },
];

export default function Estates() {
  return (
    <>
      <PageHero kicker="Estates & offices" title="Property and facility maintenance in Abuja">
        <p>For landlords, estate managers and offices that need one dependable maintenance line, one standard of work and one monthly payment.</p>
      </PageHero>

      <section className="tight-top">
        <div className="wrap who-grid">
          {WHO.map((w, i) => (
            <article key={w.title} className="who-card reveal" style={{ '--i': i } as React.CSSProperties}>
              <div className="who-img"><Photo name={w.img} alt={w.alt} sizes="(max-width: 900px) 100vw, 33vw" /></div>
              <div className="who-body">
                <h2 className="h3">{w.title}</h2>
                <p>{w.text}</p>
                <ul className="ticks">{w.ticks.map((t) => <li key={t}><Icon name="check" className="icon-check" />{t}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-alt" id="offers" aria-labelledby="offers-title">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">Group cover</span>
            <h2 id="offers-title">Better rates when neighbours join together</h2>
          </div>
          <div className="offer-grid">
            <article className="offer-card reveal" id="estate-bulk">
              <span className="kicker">Estate bulk plan</span>
              <h3>Standard cover for every household, at a lower rate</h3>
              <div className="bulk-rates">
                <div><span>10+ households</span><b>₦22,500</b><small>per household / month</small></div>
                <div><span>20+ households</span><b>₦21,250</b><small>per household / month</small></div>
              </div>
              <p>Each month bills at the tier your active households reach. Below 10 households, the standard ₦25,000 rate applies; when the count rises again, the better rate returns from that month.</p>
              <ul className="offer-list">
                <li>Free quarterly common-area inspection for 20+ households</li>
                <li>One coordinated onboarding</li>
                <li>Verified artisans and the 30-Day Fix-It-Free Guarantee</li>
              </ul>
              <ChoosePlanButton plan="landlord" className="btn btn-primary">Ask about estate cover</ChoosePlanButton>
            </article>
            <article className="offer-card reveal" id="office-pitch">
              <span className="kicker">For offices</span>
              <h3>One monthly fee covers your plan’s repairs</h3>
              <p>Keep the workplace running without callout drama or approvals for every small fault.</p>
              <ul className="offer-list">
                <li>Up to 12 jobs a month on Business / Office (₦100,000/month)</li>
                <li>Same-day and after-hours response</li>
                <li>Monthly preventive maintenance walkthrough</li>
                <li>Proper invoices and receipts from {'KEWIGA WORKS LTD'}</li>
                <li>One dedicated contact for every repair</li>
              </ul>
              <ChoosePlanButton plan="business" className="btn btn-primary">Book a free office assessment</ChoosePlanButton>
            </article>
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
