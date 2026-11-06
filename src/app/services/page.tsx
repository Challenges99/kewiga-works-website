import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Photo } from '@/components/Photo';
import { Icon } from '@/components/Icon';
import { BookingSection } from '@/components/BookingSection';
import { ProjectWork } from '@/components/ProjectWork';
import { SERVICES } from '@/lib/services';

export const metadata = {
  title: 'Home Services in Abuja: Plumbing, Electrical, AC, Painting, Carpentry & Cleaning | Kewiga Works',
  description: 'Plumbers, electricians, AC technicians, painters, carpenters and cleaners in Abuja on one monthly maintenance plan. Fixed labour prices, verified artisans, booked on WhatsApp.',
  alternates: { canonical: '/services/' },
};

export default function ServicesHub() {
  return (
    <>
      <PageHero kicker="Services" title="Home and office repairs in Abuja, on one plan">
        <p>Every trade below is covered by the same monthly plan and the same rate card. Pick a trade to see common Abuja jobs, how each is priced, and what’s labour versus parts.</p>
      </PageHero>
      <section className="tight-top">
        <div className="wrap">
          <div className="svc-grid svc-grid-lg">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}/`} className="svc-card reveal" style={{ '--i': i } as React.CSSProperties}>
                {s.image
                  ? <div className="svc-img"><Photo name={s.image} alt={s.imageAlt} sizes="(max-width: 700px) 100vw, 50vw" /></div>
                  : <div className="svc-img svc-icon-panel" aria-hidden="true"><Icon name={s.icon} /></div>}
                <div className="svc-body">
                  <h2 className="h3"><Icon name={s.icon} />{s.name}</h2>
                  <p>{s.intro}</p>
                  <span className="svc-link">See {s.name.toLowerCase()} jobs and prices <Icon name="arrow" /></span>
                </div>
              </Link>
            ))}
          </div>
          <p className="svc-more reveal"><b>General repairs</b> are covered too. Message us with a photo and we’ll tell you how the job is classed.</p>
          <ProjectWork />
        </div>
      </section>
      <BookingSection />
    </>
  );
}
