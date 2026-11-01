import { PageHero } from '@/components/PageHero';
import { Accordion } from '@/components/Accordion';
import { BookingSection } from '@/components/BookingSection';
import { JsonLd, faqSchema } from '@/components/JsonLd';
import { FAQ } from '@/lib/faq';

export const metadata = {
  title: 'FAQ: Plans, Prices, Parts & the 30-Day Guarantee | Kewiga Works',
  description: 'How Kewiga Works maintenance plans work in Abuja: what counts as a job, parts and labour, booking times, the 30-day guarantee, payment and cancelling.',
  alternates: { canonical: '/faq/' },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ)} />
      <PageHero kicker="Questions" title="Before you ask" center>
        <p>Straight answers about plans, prices and what happens when something breaks.</p>
      </PageHero>
      <section className="tight-top">
        <div className="wrap narrow">
          <Accordion items={FAQ} firstOpen />
        </div>
      </section>
      <BookingSection />
    </>
  );
}
