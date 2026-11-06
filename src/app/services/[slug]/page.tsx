import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Photo } from '@/components/Photo';
import { Icon, WhatsAppIcon } from '@/components/Icon';
import { Accordion } from '@/components/Accordion';
import { BookingSection } from '@/components/BookingSection';
import { Guarantee } from '@/components/Trust';
import { ProjectWork } from '@/components/ProjectWork';
import { JsonLd, faqSchema } from '@/components/JsonLd';
import { SERVICES, serviceBySlug } from '@/lib/services';
import { JOB_TIERS, PLANS, SITE, naira, waLink } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  return { title: s.title, description: s.description, alternates: { canonical: `/services/${s.slug}/` } };
}

const tierValue = (tier: string) => JOB_TIERS.find((t) => t.tier === tier)!.value;

export default async function ServicePage({ params }: Props) {
  const s = serviceBySlug((await params).slug);
  if (!s) notFound();
  const plan = PLANS.find((p) => p.id === s.bestPlan)!;
  const others = SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${s.name} in Abuja`,
        serviceType: s.name,
        provider: { '@id': SITE.url + '/#business' },
        areaServed: { '@type': 'City', name: 'Abuja' },
        url: `${SITE.url}/services/${s.slug}/`,
      }} />
      <JsonLd data={faqSchema(s.faqs)} />

      <section className="svc-hero">
        <div className="wrap svc-hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/services/">Services</Link><span aria-hidden="true">/</span><span>{s.name}</span></nav>
            <h1>{s.h1}</h1>
            <p className="lead">{s.intro}</p>
            <div className="hero-ctas">
              <a className="btn btn-wa" href={waLink(`Hello Kewiga Works, I need help with ${s.name.toLowerCase()}.`, `web-svc-${s.slug}`)} target="_blank" rel="noopener">
                <WhatsAppIcon /> Book {s.name.toLowerCase()} on WhatsApp
              </a>
              <Link className="btn btn-ghost" href="/plans/">See plans</Link>
            </div>
          </div>
          {s.image
            ? <div className="svc-hero-img"><Photo name={s.image} alt={s.imageAlt} priority sizes="(max-width: 900px) 100vw, 480px" /></div>
            : <div className="svc-hero-img svc-icon-panel" aria-hidden="true"><Icon name={s.icon} /></div>}
        </div>
      </section>

      <section className="tight-top" aria-labelledby="jobs-title">
        <div className="wrap svc-detail">
          <div className="reveal">
            <h2 id="jobs-title">Common {s.name.toLowerCase()} jobs and how they’re priced</h2>
            <p>Each job is classed from our rate card before work starts. These are typical classes; we confirm yours on WhatsApp first.</p>
            {s.note && <p className="jobs-note">{s.note}</p>}
            <div className="job-table" role="table" aria-label={`${s.name} jobs`}>
              {s.jobs.map((j) => (
                <div className="job-row" role="row" key={j.job}>
                  <span role="cell">{j.job}</span>
                  <span role="cell" className={'tier-chip tier-' + j.tier.toLowerCase()}>{j.tier}</span>
                  <span role="cell" className="job-val">{naira(tierValue(j.tier))}</span>
                </div>
              ))}
            </div>
            {s.projects.length > 0 && (
              <p className="project-line">
                <b>Project work (quoted per job):</b>
                <span>{s.projects.join(' · ')}</span>
                <a href="#project-work">How project work works</a>
              </p>
            )}
            <p className="small">The value is the labour that comes off your plan’s monthly allowance, or the member rate if the job is beyond your plan.</p>
          </div>

          <aside className="svc-side reveal">
            <div className="lp-card">
              <h3><Icon name="wrench" /> Labour (covered by your plan)</h3>
              <p>{s.labour}</p>
            </div>
            <div className="lp-card">
              <h3><Icon name="card" /> Parts (you pay at trade price)</h3>
              <p>{s.parts}</p>
            </div>
            <div className="lp-card lp-plan">
              <span className="kicker">Best plan for most people</span>
              <h3>{plan.name} · {naira(plan.price)}/month</h3>
              <p>{s.bestPlanWhy}</p>
              <Link className="btn btn-primary btn-sm" href="/plans/">Compare plans</Link>
            </div>
          </aside>
        </div>
        <div className="wrap"><ProjectWork /></div>
      </section>

      <section className="section-alt" aria-labelledby="svc-book-title">
        <div className="wrap svc-howto">
          <div className="reveal">
            <h2 id="svc-book-title">How a subscriber books {s.name.toLowerCase()}</h2>
            <ol className="steps compact">
              <li><span className="step-num">1</span><div><p>Send a WhatsApp message with what’s wrong and a photo or short video.</p></div></li>
              <li><span className="step-num">2</span><div><p>We class the job, tell you the labour value and any parts needed, and agree a time.</p></div></li>
              <li><span className="step-num">3</span><div><p>A verified artisan comes. You confirm the finished job with your completion code.</p></div></li>
            </ol>
          </div>
          <Guarantee />
        </div>
      </section>

      <section aria-labelledby="svc-faq-title">
        <div className="wrap narrow">
          <div className="section-head reveal">
            <span className="kicker">Questions</span>
            <h2 id="svc-faq-title">{s.name} questions</h2>
          </div>
          <Accordion items={s.faqs} />
          <div className="other-svcs reveal">
            <b>Other services:</b>
            {others.map((o) => <Link key={o.slug} href={`/services/${o.slug}/`}>{o.name}</Link>)}
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
