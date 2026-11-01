import Link from 'next/link';
import { Icon } from './Icon';
import { Fill, isProd } from './Fill';
import { COMPANY, SITE, TRUST, waLink } from '@/lib/site';

const VETTING = [
  ['ID check', 'A valid NIN slip, voter’s card, driver’s licence or passport, checked before anything else.'],
  ['Guarantor call', 'We speak to a guarantor who knows the artisan and agreed to be contacted.'],
  ['Practical trade test', 'A hands-on test in their trade. Fail it and they don’t work for us.'],
  ['Named before arrival', 'You get the artisan’s name before they come to your door.'],
  ['Completion code', 'Every job is confirmed with your code, so work is only marked done when you say so.'],
  ['Guaranteed work', 'Each job carries our 30-Day Fix-It-Free Guarantee.'],
] as const;

export function Guarantee() {
  return (
    <div className="guarantee reveal">
      <div className="g-seal" aria-hidden="true"><span>30</span><small>days</small></div>
      <div>
        <span className="kicker">Our named guarantee</span>
        <h3>30-Day Fix-It-Free Guarantee</h3>
        <p>If our workmanship fails within 30 days of the job, we come back and redo it free.</p>
        <ol className="claim-steps">
          <li>Message us on WhatsApp with your job ID and a photo.</li>
          <li>We book a return visit, at no cost to you.</li>
          <li>The artisan redoes the work and you confirm it.</li>
        </ol>
        <p className="small">Covers our workmanship. Faulty parts, misuse and new damage are excluded. <Link href="/terms/#guarantee">Full guarantee terms</Link></p>
      </div>
    </div>
  );
}

export function Vetting() {
  return (
    <div className="vetting reveal">
      <span className="kicker">How we vet artisans</span>
      <h3>Six checks behind every job</h3>
      <ol className="vet-list">
        {VETTING.map(([t, d], i) => (
          <li key={t} style={{ '--i': i } as React.CSSProperties}>
            <span className="vet-num">{i + 1}</span>
            <div><b>{t}</b><span>{d}</span></div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function PayWarning() {
  return (
    <div className="pay-warning reveal" role="note">
      <Icon name="alert" />
      <p><b>Pay only into the {COMPANY.legalName} account.</b> Never pay an artisan directly, and never pay into a personal account. If anyone asks you to, tell us on WhatsApp.</p>
    </div>
  );
}

export function Founder() {
  return (
    <div className="founder reveal">
      <div className="founder-photo">
        {TRUST.founderPhoto
          // eslint-disable-next-line @next/next/no-img-element
          ? <img src={TRUST.founderPhoto} alt={SITE.founder} width={320} height={320} loading="lazy" />
          : <span className="founder-initials" aria-hidden="true">KG</span>}
        {!TRUST.founderPhoto && <Fill what="your photo" />}
      </div>
      <div>
        <span className="kicker">Why I started Kewiga Works</span>
        {TRUST.founderStory
          ? <blockquote><p>{TRUST.founderStory}</p></blockquote>
          : <><p className="founder-fallback">Kewiga Works is a registered Abuja company with a named, reachable founder. If something goes wrong, you can message me.</p><Fill what="2–4 sentences: why you started Kewiga Works" /></>}
        <p className="founder-name"><b>{SITE.founder}</b>, founder · {COMPANY.legalName}, RC {COMPANY.rcNumber}</p>
      </div>
    </div>
  );
}

export function FoundingOffer() {
  const { founding } = TRUST;
  if (isProd && !founding.offer) return null;
  const pct = founding.spotsTaken != null ? Math.min(100, (founding.spotsTaken / founding.totalSpots) * 100) : null;
  return (
    <div className="founding reveal">
      <div>
        <span className="kicker kicker-light">Founding members</span>
        <h3>First {founding.totalSpots} Abuja households</h3>
        <p>We’re new, so we don’t have reviews yet. Join as a founding member and get {founding.offer ?? <Fill what="founding offer, e.g. 50% off your first month" />} in exchange for honest feedback after your first jobs.</p>
        {pct != null && (
          <div className="spots">
            <div className="spots-bar"><span style={{ width: `${pct}%` }} /></div>
            <small>{founding.spotsTaken} of {founding.totalSpots} spots taken</small>
          </div>
        )}
      </div>
      <a className="btn btn-light" href={waLink('Hello Kewiga Works, I’d like to join as a founding member.', 'web-founding')} target="_blank" rel="noopener">Claim a founding spot</a>
    </div>
  );
}
