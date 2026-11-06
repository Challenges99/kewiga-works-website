import { Icon } from './Icon';

/** Explains jobs too big for a plan: surveyed and quoted per job. Shown on the services and plans pages. */
export function ProjectWork() {
  return (
    <div className="project-work reveal" id="project-work">
      <span className="pw-icon" aria-hidden="true"><Icon name="ratecard" /></span>
      <div>
        <span className="kicker">Project work</span>
        <h2 className="h3">Project work — big jobs, quoted properly</h2>
        <p>
          Some jobs are too big for a subscription plan: anything that takes more than one day, or that cannot be
          priced fairly without seeing the site first. Those are project work. We survey the job and quote one fixed
          price for the whole job, agreed with you before any work starts. You pay the quote as extra work — project
          work never uses your plan’s monthly jobs or value cap.
        </p>
      </div>
    </div>
  );
}
