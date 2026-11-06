/**
 * Kewiga Rewards, worded exactly as on the original kewigaworks.com and the Subscriber Agreement.
 * Used on the Rewards & Referrals page and in the Rewards tab of the plans section.
 */
export function RewardsInfo({ headingLevel = 'h2', id }: { headingLevel?: 'h2' | 'h3'; id?: string }) {
  const Heading = headingLevel;
  return (
    <div className="points-grid">
      <div>
        <span className="kicker">Kewiga Rewards</span>
        <Heading id={id}>Your quiet months still have value.</Heading>
        <p>If you do not use all of your plan&apos;s monthly service value, <strong>70% of the unused amount becomes Kewiga Rewards</strong> for future Kewiga Works services.</p>
        <div className="point-example"><b>Example:</b> ₦15,000 of unused plan value becomes 10,500 Kewiga Rewards.</div>
      </div>
      <div className="points-rules">
        <div className="point-rule"><span className="num">70%</span><div><h3>Unused value becomes points</h3><p>We calculate the value left after your covered jobs and convert 70% of it at month-end.</p></div></div>
        <div className="point-rule"><span className="num">₦1</span><div><h3>Simple value</h3><p>1 Kewiga Reward equals ₦1 of Kewiga Works services, so your balance is always easy to understand.</p></div></div>
        <div className="point-rule"><span className="num">∞</span><div><h3>Yours forever</h3><p>Kewiga Rewards never expire. They can be redeemed for eligible services; they are not cash and are not refundable.</p></div></div>
      </div>
    </div>
  );
}
