import Link from 'next/link';
import { Icon } from './Icon';

/** Call-out inviting plumbers, electricians, painters etc. to apply. */
export function ArtisanInvite() {
  return (
    <div className="artisan-invite reveal">
      <span className="ai-icon" aria-hidden="true"><Icon name="wrench" /></span>
      <div className="ai-copy">
        <span className="kicker">For artisans</span>
        <h2 className="h3">Are you a plumber, electrician, painter, carpenter or AC technician?</h2>
        <p>Get steady jobs from homes, estates and offices across Abuja. Fixed rates agreed upfront, paid every Friday.</p>
      </div>
      <Link className="btn btn-artisan btn-lg" href="/artisans/">Join as an artisan <Icon name="arrow" /></Link>
    </div>
  );
}
