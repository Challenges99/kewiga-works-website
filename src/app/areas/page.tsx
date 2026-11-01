import { PageHero } from '@/components/PageHero';
import { Icon } from '@/components/Icon';
import { BookingSection } from '@/components/BookingSection';
import { AREAS, waLink } from '@/lib/site';

export const metadata = {
  title: 'Areas We Cover in Abuja | Kewiga Works',
  description: 'Kewiga Works maintenance plans cover Maitama, Asokoro, Wuse, Garki, Jahi, Katampe, Life Camp, Gwarinpa, Kubwa and Lugbe in Abuja.',
  alternates: { canonical: '/areas/' },
};

export default function Areas() {
  return (
    <>
      <PageHero kicker="Areas we cover" title="Maintenance cover across Abuja">
        <p>We’re onboarding households, landlords and offices in these ten districts. Booking times and prices are the same in every area.</p>
      </PageHero>
      <section className="tight-top">
        <div className="wrap">
          <ul className="area-grid">
            {AREAS.map((a, i) => (
              <li key={a} className="reveal" style={{ '--i': i } as React.CSSProperties}>
                <Icon name="pin" /><b>{a}</b><span>Abuja</span>
              </li>
            ))}
          </ul>
          <div className="area-note reveal">
            <p><b>Near one of these but not listed?</b> Message us. If we can reach you within the same booking window, we’ll tell you before you subscribe.</p>
            <a className="btn btn-ghost btn-sm" href={waLink('Hello Kewiga Works, do you cover my area?', 'web-areas')} target="_blank" rel="noopener">Ask about my area</a>
          </div>
        </div>
      </section>
      <BookingSection />
    </>
  );
}
