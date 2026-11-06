import { PageHero } from '@/components/PageHero';
import { BookingSection } from '@/components/BookingSection';
import Link from 'next/link';
import { RewardsInfo } from '@/components/RewardsInfo';

export const metadata = {
  title: 'Kewiga Rewards & Referral Programme | Kewiga Works',
  description: 'Quiet month? 70% of your unused Kewiga Works plan value becomes Kewiga Rewards. Refer a friend and earn when they join and when they stay a year.',
  alternates: { canonical: '/rewards/' },
};

const REFERRALS: [string, number, number, number][] = [
  ['Basic', 10000, 2000, 5000],
  ['Standard', 25000, 5000, 12500],
  ['Landlord / Estate', 50000, 10000, 25000],
  ['Business / Office', 100000, 20000, 50000],
];
const n = (v: number) => '₦' + v.toLocaleString('en-NG');

export default function Rewards() {
  return (
    <>
      <PageHero kicker="Rewards & referrals" title="Your plan keeps giving back">
        <p>Two ways to get more from Kewiga Works: rewards from your quiet months, and rewards for introducing friends.</p>
        <div className="anchor-links">
          <a href="#rewards">Kewiga Rewards</a><a href="#referrals">Referral programme</a>
        </div>
      </PageHero>

      <section className="tight-top" id="rewards" aria-labelledby="rewards-title">
        <div className="wrap reveal">
          <RewardsInfo id="rewards-title" />
        </div>
      </section>

      <section className="section-alt" id="referrals" aria-labelledby="referrals-title">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="kicker">Referral programme</span>
            <h2 id="referrals-title">Refer a friend. Get rewarded twice.</h2>
            <p>Introduce someone to Kewiga Works and earn a reward when they join, and a bigger one when they stay a full year.</p>
          </div>
          <ol className="steps narrow reveal">
            <li><span className="step-num">1</span><div><h3>Introduce them</h3><p>When they book, they name you as their referrer. We confirm it with both of you on WhatsApp.</p></div></li>
            <li><span className="step-num">2</span><div><h3>They join and pay</h3><p>After their first paid month, your signup reward is added.</p></div></li>
            <li><span className="step-num">3</span><div><h3>They stay a year</h3><p>After 12 paid months, your loyalty reward is added on top.</p></div></li>
          </ol>
          <div className="ref-table reveal" role="table" aria-label="Referral rewards">
            <div className="ref-row ref-head" role="row">
              <span role="columnheader">Plan they join</span><span role="columnheader">Monthly fee</span>
              <span role="columnheader">Signup reward</span><span role="columnheader">12-month reward</span>
            </div>
            {REFERRALS.map(([plan, fee, signup, loyal]) => (
              <div className="ref-row" role="row" key={plan}>
                <b role="rowheader">{plan}</b>
                <span role="cell" data-label="Monthly fee">{n(fee)}</span>
                <span role="cell" data-label="Signup reward">{n(signup)}</span>
                <span role="cell" data-label="12-month reward" className="ours">{n(loyal)}</span>
              </div>
            ))}
          </div>
          <div className="prose reveal">
            <h3>Good to know</h3>
            <p><b>How you’re paid.</b> Subscribers receive Kewiga Rewards. Estate agents and other partners can choose a bank transfer instead, paid only to an account in their own name.</p>
            <p><b>One referrer per customer.</b> The first referrer recorded is the one rewarded, so make sure they name you.</p>
            <p><b>Genuinely new customers.</b> Not a current subscriber, not subscribed in the last 6 months, no self-referrals and none within the same household.</p>
            <p><b>Estates and companies.</b> Bring 10 or more units and we agree your reward separately, in writing.</p>
            <p><b>Reviews are separate.</b> We never give rewards for leaving a review.</p>
            <p>Full rules are in the <Link href="/terms/#rewards">Subscription Terms</Link>.</p>
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
