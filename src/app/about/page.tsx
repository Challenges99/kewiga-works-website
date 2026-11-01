import { PageHero } from '@/components/PageHero';
import { Founder, Guarantee, Vetting } from '@/components/Trust';
import { Fill } from '@/components/Fill';
import { BookingSection } from '@/components/BookingSection';
import { COMPANY, SITE } from '@/lib/site';

export const metadata = {
  title: 'About Kewiga Works: Registered Abuja Maintenance Company | Kewiga Works',
  description: 'KEWIGA WORKS LTD (RC 9965563) is an Abuja home and office maintenance company founded by Kelvin Wisdom Garba. Company details, directors and how to verify us.',
  alternates: { canonical: '/about/' },
};

export default function About() {
  return (
    <>
      <PageHero kicker="About us" title="A registered Abuja company you can check">
        <p>Kewiga Works makes home and office maintenance simple: one monthly plan, fixed published prices, verified artisans, booked on WhatsApp.</p>
      </PageHero>
      <section className="tight-top">
        <div className="wrap">
          <Founder />
          <div className="company-card reveal">
            <h2 className="h3">Company details</h2>
            <dl>
              <div><dt>Registered name</dt><dd>{COMPANY.legalName}</dd></div>
              <div><dt>RC number</dt><dd>{COMPANY.rcNumber}</dd></div>
              <div><dt>Registered office</dt><dd>{COMPANY.registeredAddress ?? <Fill what="registered office address" />}</dd></div>
              <div><dt>Directors</dt><dd>{COMPANY.directors?.join(', ') ?? <Fill what="directors' names as registered with CAC" />}</dd></div>
              <div><dt>Founder</dt><dd>{SITE.founder}</dd></div>
              <div><dt>Contact</dt><dd>WhatsApp {SITE.phoneDisplay} · {SITE.email}</dd></div>
            </dl>
            <a className="btn btn-ghost btn-sm" href={COMPANY.cacSearchUrl} target="_blank" rel="noopener">Verify us on the CAC register</a>
          </div>
        </div>
      </section>
      <section className="section-alt">
        <div className="wrap trust-grid">
          <Guarantee />
          <Vetting />
        </div>
      </section>
      <BookingSection />
    </>
  );
}
