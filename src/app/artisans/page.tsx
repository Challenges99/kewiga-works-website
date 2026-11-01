import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import { Accordion } from '@/components/Accordion';
import { ArtisanForm } from '@/components/ArtisanForm';
import { ARTISAN_FAQ } from '@/lib/faq';
import { AREAS } from '@/lib/site';

export const metadata = {
  title: 'Artisan Jobs in Abuja: Electricians, Plumbers, Painters & AC Technicians | Kewiga Works',
  description: 'Electrician, plumber, painter, carpenter and AC technician jobs in Abuja. Join Kewiga Works for steady jobs, fixed rates and weekly Friday pay.',
  alternates: { canonical: '/artisans/' },
};

const PERKS = [
  ['calendar', 'Steady jobs', 'Subscribers book repairs all month. We dispatch the jobs; no marketing, no chasing.'],
  ['card', 'Paid every Friday', 'Completed, confirmed jobs are paid weekly by bank transfer.'],
  ['ratecard', 'Fixed rates, agreed first', 'Every job is priced from our rate card before you start. No haggling at the door.'],
  ['shield', 'Verified Artisan status', 'A Kewiga Works ID and a completion-code system that proves your work.'],
] as const;

export default function Artisans() {
  return (
    <>
      <PageHero kicker="Work with Kewiga Works" title="Artisan jobs in Abuja. Join the team." center>
        <p>Steady repair jobs from subscribed homes, estates and offices across Abuja. You bring the skill; we bring the customers.</p>
        <div className="cta-row center"><a className="btn btn-primary" href="#apply">Apply to join</a><a className="btn btn-ghost" href="#joining">How joining works</a></div>
      </PageHero>

      <section className="tight-top">
        <ul className="wrap usp-grid">
          {PERKS.map(([icon, t, d], i) => (
            <li key={t} className="reveal" style={{ '--i': i } as React.CSSProperties}>
              <span className="usp-icon"><Icon name={icon} /></span><div><b>{t}</b><span>{d}</span></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-alt" id="joining" aria-labelledby="joining-title">
        <div className="wrap two-col">
          <div>
            <div className="section-head reveal">
              <span className="kicker">How joining works</span>
              <h2 id="joining-title">Four steps to your first job</h2>
              <p>Customers let you into their homes, so we verify every artisan the same way.</p>
            </div>
            <ol className="steps reveal">
              <li><span className="step-num">1</span><div><h3>Apply below</h3><p>Your trade, experience, area and a guarantor who has agreed to be contacted. About two minutes.</p></div></li>
              <li><span className="step-num">2</span><div><h3>ID and guarantor check</h3><p>We check your ID and call your guarantor, telling them who we are.</p></div></li>
              <li><span className="step-num">3</span><div><h3>Practical trade test</h3><p>A short hands-on test: safe, clean and right first time.</p></div></li>
              <li><span className="step-num">4</span><div><h3>Start receiving jobs</h3><p>Jobs arrive on WhatsApp with the address, work and agreed rate. The customer confirms with a completion code and you’re paid on Friday.</p></div></li>
            </ol>
          </div>
          <div className="offer-card reveal">
            <h3>Before you apply</h3>
            <ul className="offer-list">
              <li>A valid ID: NIN slip, voter’s card, driver’s licence or passport</li>
              <li>A guarantor who knows you and agrees to be contacted</li>
              <li>Real experience in your trade</li>
              <li>Your own basic tools</li>
              <li>A phone with WhatsApp</li>
            </ul>
            <h3>Trades we’re recruiting</h3>
            <ul className="chips">{['Plumbing', 'Electrical', 'Painting', 'Carpentry', 'AC service & repair', 'General repairs', 'Deep cleaning'].map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="small">Across Abuja: {AREAS.join(', ')} and nearby.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="artisan-faq-title">
        <div className="wrap narrow">
          <div className="section-head center reveal">
            <span className="kicker">Straight answers</span>
            <h2 id="artisan-faq-title">Artisan questions</h2>
          </div>
          <Accordion items={ARTISAN_FAQ} />
        </div>
      </section>

      <section className="book" id="apply" aria-labelledby="apply-title">
        <div className="wrap book-grid">
          <div className="reveal">
            <span className="kicker kicker-light">Apply</span>
            <h2 id="apply-title">Apply to join the team</h2>
            <p className="lead">If your application looks like a fit, we call you to arrange the ID check, guarantor call and trade test.</p>
            <ul className="book-points">
              <li><Icon name="clock" /><div><b>Two minutes</b><span>This form is the whole application.</span></div></li>
              <li><Icon name="phone" /><div><b>We call you back</b><span>Shortlisted artisans get a call to book verification.</span></div></li>
              <li><Icon name="wrench" /><div><b>Your skill decides</b><span>Pass the trade test and the work comes to you.</span></div></li>
            </ul>
          </div>
          <ArtisanForm />
        </div>
      </section>
    </>
  );
}
