import { JOB_TIERS, naira } from '@/lib/site';

/** One place that explains job slots and the monthly labour value, with a worked example. */
export function JobsCounted() {
  return (
    <div className="jobs-box reveal" id="how-jobs-count">
      <div className="jobs-copy">
        <span className="kicker">How jobs are counted</span>
        <h2 className="h3">Every job has a fixed labour value</h2>
        <p>Before work starts, we class each job from our rate card. The job uses one of your monthly job slots and its fixed value from your plan’s monthly labour allowance. We always tell you the class first.</p>
        <p className="jobs-note">“Booked within 24 hours” means we respond and book your visit in that time. How long the repair takes depends on the job.</p>
      </div>
      <div className="tiers">
        {JOB_TIERS.map((t) => (
          <div className="tier" key={t.tier}>
            <b>{t.tier}</b>
            <span className="tier-val">{naira(t.value)}</span>
            <small>e.g. {t.examples}</small>
          </div>
        ))}
      </div>
      <div className="example">
        <b>Example on Standard (4 jobs, {naira(40000)} a month)</b>
        <ol>
          <li>A leaking tap (simple) uses 1 job and {naira(7000)}. <span>3 jobs and {naira(33000)} left.</span></li>
          <li>AC servicing (medium) uses 1 job and {naira(12000)}. <span>2 jobs and {naira(21000)} left.</span></li>
          <li>Painting a bedroom (medium) uses 1 job and {naira(12000)}. <span>1 job and {naira(9000)} left.</span></li>
          <li>A dead socket (simple) uses 1 job and {naira(7000)}. <span>All 4 jobs used.</span></li>
        </ol>
        <p>Two complex jobs ({naira(20000)} each) would use the whole {naira(40000)} on their own. Once your jobs or your labour value run out, further work that month is billed at the member rate for its size, agreed with you on WhatsApp first.</p>
      </div>
    </div>
  );
}
