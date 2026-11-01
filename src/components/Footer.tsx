import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, PLANS, SITE, naira, waLink, WA_HELLO } from '@/lib/site';
import { Fill } from './Fill';
import { asset } from '@/lib/paths';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col foot-brand">
            <Link href="/" aria-label="Kewiga Works home">
              <Image src={asset('/img/logo-stacked.png')} alt="Kewiga Works" width={400} height={305} className="footer-logo" />
            </Link>
            <p>Home and office maintenance on a monthly plan in Abuja. Fixed prices, verified artisans, booked on WhatsApp.</p>
          </div>
          <nav className="foot-col" aria-labelledby="foot-explore">
            <h2 id="foot-explore">Explore</h2>
            <Link href="/plans/">Plans & pricing</Link>
            <Link href="/services/">Services</Link>
            <Link href="/estates/">Estates & offices</Link>
            <Link href="/areas/">Areas we cover</Link>
            <Link href="/rewards/">Rewards & referrals</Link>
            <Link href="/faq/">FAQ</Link>
          </nav>
          <nav className="foot-col" aria-labelledby="foot-company">
            <h2 id="foot-company">Company</h2>
            <Link href="/about/">About us</Link>
            <Link href="/artisans/">Work with us: artisans</Link>
            <Link href="/terms/">Subscription terms</Link>
            <Link href="/privacy/">Privacy policy</Link>
          </nav>
          <div className="foot-col">
            <h2>Talk to us</h2>
            <ul>
              <li><a href={waLink(WA_HELLO, 'web-footer')} target="_blank" rel="noopener">WhatsApp: {SITE.phoneDisplay}</a></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>{SITE.hours}</li>
              <li>Abuja, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="foot-plans" aria-label="Plan prices">
          {PLANS.map((p) => <Link key={p.id} href="/plans/">{p.name} · {naira(p.price)}/mo</Link>)}
        </div>

        <div className="foot-legal">
          <p>
            <strong>{COMPANY.legalName}</strong> · RC {COMPANY.rcNumber}
            {COMPANY.registeredAddress ? <> · Registered office: {COMPANY.registeredAddress}</> : <> <Fill what="registered office address" /></>}
            {' · '}<a href={COMPANY.cacSearchUrl} target="_blank" rel="noopener">Verify us on CAC</a>
          </p>
          <p>Pay only into the {COMPANY.legalName} account. Never pay an artisan directly.</p>
          <p>© {new Date().getFullYear()} {COMPANY.legalName}. Founded by {SITE.founder}.</p>
        </div>
      </div>
    </footer>
  );
}
