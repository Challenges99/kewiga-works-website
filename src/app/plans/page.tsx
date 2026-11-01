import { Plans } from '@/components/Plans';
import { JobsCounted } from '@/components/JobsCounted';
import { PlanFinder } from '@/components/PlanFinder';
import { BookingSection } from '@/components/BookingSection';
import { Guarantee, PayWarning } from '@/components/Trust';

export const metadata = {
  title: 'Maintenance Plans & Prices in Abuja | Kewiga Works',
  description: 'Compare Kewiga Works home, landlord and office maintenance plans in Abuja, from ₦10,000/month. Fixed published prices, booked on WhatsApp.',
  alternates: { canonical: '/plans/' },
};

const COMPARE: [string, string, string][] = [
  ['Price', 'Changes after the wall is already open', 'Fixed rate agreed before work starts'],
  ['Showing up', '“Tomorrow” that becomes next week', 'Visit booked within 24–48 hours; same-day for emergencies on Landlord and Business plans'],
  ['If the job fails', 'You pay again, if you can reach him', 'Free rework under the 30-Day Fix-It-Free Guarantee'],
  ['Different trades', 'Six contacts, six gambles', 'One WhatsApp number for every trade'],
  ['Trust', 'A friend of a friend said he’s good', 'ID, guarantor and trade-test verified'],
  ['Payment', 'Cash up front, every time', 'One monthly fee, paid only to KEWIGA WORKS LTD'],
];

export default function PlansPage() {
  return (
    <>
      <section className="page-top" id="plans" aria-label="Plans and pricing">
        <div className="wrap">
          <Plans headingLevel="h1" />
          <JobsCounted />
        </div>
      </section>

      <section className="section-alt" id="finder" aria-labelledby="finder-title">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">Plan finder</span>
            <h2 id="finder-title">Not sure which plan fits?</h2>
            <p>Answer three quick questions and we’ll point you to the right cover.</p>
          </div>
          <PlanFinder />
        </div>
      </section>

      <section aria-labelledby="compare-title">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">The honest comparison</span>
            <h2 id="compare-title">Kewiga Works vs. “my regular guy”</h2>
          </div>
          <div className="compare reveal" role="table" aria-label="Comparison">
            <div className="compare-row compare-head" role="row">
              <span role="columnheader"><span className="sr-only">Topic</span></span>
              <span role="columnheader">The regular guy</span>
              <span role="columnheader" className="ours">Kewiga Works</span>
            </div>
            {COMPARE.map(([topic, theirs, ours]) => (
              <div className="compare-row" role="row" key={topic}>
                <b role="rowheader">{topic}</b>
                <span role="cell" className="theirs" data-label="The regular guy">{theirs}</span>
                <span role="cell" className="ours" data-label="Kewiga Works"><b className="ours-tick">✓</b>{ours}</span>
              </div>
            ))}
          </div>
          <div className="plans-trust">
            <Guarantee />
            <PayWarning />
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
