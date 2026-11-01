import Link from 'next/link';
import { LegalPage } from '@/components/LegalDraft';
import { COMPANY, JOB_TIERS, PLANS, SITE, naira } from '@/lib/site';

export const metadata = {
  title: 'Subscription Terms, Guarantee & Cancellation | Kewiga Works',
  description: 'Kewiga Works subscription terms: plan prices, what is covered, parts, billing and renewal, cancellation and refunds, the 30-Day Fix-It-Free Guarantee, rewards and referrals.',
  alternates: { canonical: '/terms/' },
};

export default function Terms() {
  return (
    <LegalPage title="Subscription Terms" updated="31 October 2026">
      <p>These terms apply to Kewiga Works maintenance plans provided by {COMPANY.legalName} (RC {COMPANY.rcNumber}). By paying for a plan you agree to them. In these terms, “we” means {COMPANY.legalName} and “you” means the subscriber.</p>

      <h2 id="plans">1. Plans and prices</h2>
      <table className="legal-table">
        <thead><tr><th>Plan</th><th>Price</th><th>Jobs / month</th><th>Labour value / month</th><th>Visit booked within</th></tr></thead>
        <tbody>
          {PLANS.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td><td>{naira(p.price)}</td><td>{p.jobs}</td>
              <td>{p.jobs === 1 ? '1 simple job' : naira(p.valueCap)}</td>
              <td>{p.id === 'basic' ? '48 hours' : p.id === 'standard' ? '24 hours' : '24 hours; same day for emergencies'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Prices include all charges for the plan. Landlord / Estate is priced per property. Estate bulk rates are set out on our <Link href="/estates/">Estates page</Link>.</p>

      <h2 id="jobs">2. What counts as a job</h2>
      <p>One job is one repair task. Before work starts we class each job from our rate card as {JOB_TIERS.map((t) => `${t.tier.toLowerCase()} (${naira(t.value)})`).join(', ')}. Each job uses one monthly job slot and its labour value from your monthly allowance. Unused jobs do not roll over, but see Kewiga Rewards below.</p>
      <p>Work beyond your plan is charged at the member rate for its class. We always tell you the class and price on WhatsApp and get your agreement before work starts.</p>

      <h2 id="parts">3. Labour, parts and materials</h2>
      <p>Plans cover labour only. Parts and materials (for example taps, cable, paint, refrigerant gas) are extra. We source them at trade price and show you the receipt, or you may supply your own. We tell you the cost before buying.</p>

      <h2 id="booking">4. Booking and response times</h2>
      <p>You book by WhatsApp on {SITE.phoneDisplay}, {SITE.hours}. “Booked within 24 hours” (or 48 hours on Basic) means we respond and book your visit within that time. It is not a promise that the repair is finished in that time. Emergency same-day response applies to Landlord / Estate and Business / Office plans. After-hours response applies to Business / Office.</p>

      <h2 id="billing">5. Payment, billing and renewal</h2>
      <p>Plans are paid monthly in advance. Your billing date is the day your first payment is received. Plans renew each month on that date until you cancel. Pay only into the {COMPANY.legalName} bank account we give you on WhatsApp. Never pay an artisan directly. Payments made to anyone else are not payments to us.</p>
      <p>We will give you at least 30 days’ notice on WhatsApp before changing your plan price.</p>

      <h2 id="cancellation">6. Cancellation and refunds</h2>
      <ul>
        <li>You can cancel at any time by telling us on WhatsApp. To stop the next renewal, tell us <b>at least 3 days before your billing date</b>.</li>
        <li>Your plan continues until the end of the month you have paid for.</li>
        <li>If you cancel within 7 days of your first payment and no job has been done, we refund that payment in full.</li>
        <li>After that, monthly fees are not refunded for part-months, because the plan reserves artisan capacity for you.</li>
        <li>If we fail to book a visit within the promised window, tell us and we will extend your plan by one month free.</li>
        <li>We may cancel a plan with notice if a subscriber is abusive to artisans or staff, or does not pay. If we cancel for any other reason, we refund the unused part of the month.</li>
      </ul>

      <h2 id="guarantee">7. 30-Day Fix-It-Free Guarantee</h2>
      <p>If our workmanship on a job fails within 30 days of the job being confirmed complete, we will return and redo the work free of charge.</p>
      <p><b>How to claim:</b> message us on WhatsApp with your job ID, a short description and a photo. We book a return visit within the same window as your plan.</p>
      <p><b>Not covered:</b> faulty or worn parts and materials (we will help you claim on any manufacturer’s warranty); damage caused by misuse, accidents, power surges, weather or other people’s work after ours; and problems we told you about at the time that you chose not to fix.</p>

      <h2 id="damage">8. Damage and liability</h2>
      <p>Jobs are carried out by independent artisans engaged and vetted by Kewiga Works. We are responsible to you for the quality of their work. If an artisan damages your property while doing a job, tell us within 48 hours and we will repair it or pay the reasonable cost of putting it right. We are not responsible for loss that was not caused by our work or that could not reasonably have been expected. Nothing in these terms limits rights you have under the Federal Competition and Consumer Protection Act 2018.</p>

      <h2 id="rewards">9. Kewiga Rewards and referrals</h2>
      <ul>
        <li>At month-end, 70% of your unused monthly labour value becomes Kewiga Rewards. 1 reward equals ₦1 of eligible Kewiga Works services.</li>
        <li>Rewards are not cash, cannot be transferred, sold or refunded, and do not expire while your plan is active. If you cancel, unused rewards can be used for 90 days, after which they lapse.</li>
        <li>Referral rewards are paid as described on our <Link href="/rewards/#referrals">Rewards page</Link>. Cash referral rewards are paid only into an account in the referrer’s own name.</li>
        <li>Rewards are never given for leaving reviews.</li>
        <li>We may change or end the rewards and referral schemes with 30 days’ notice. Rewards already earned stay usable on the terms above.</li>
      </ul>

      <h2 id="complaints">10. Complaints</h2>
      <p>Tell us on WhatsApp ({SITE.phoneDisplay}) or by email ({SITE.email}). We aim to respond within 2 working days and resolve complaints within 14 days. If you are not satisfied, you may contact the Federal Competition and Consumer Protection Commission (FCCPC).</p>

      <h2 id="general">11. General</h2>
      <p>These terms are governed by the laws of the Federal Republic of Nigeria. We may update them with 30 days’ notice to subscribers. See our <Link href="/privacy/">Privacy Policy</Link> for how we use personal data.</p>
    </LegalPage>
  );
}
