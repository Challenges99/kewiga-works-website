import Link from 'next/link';

export const metadata = { title: 'Page not found | Kewiga Works', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="wrap section-head center">
        <span className="kicker">404</span>
        <h1>This page needs a repair.</h1>
        <p>The link you followed doesn’t lead anywhere. Let’s get you back on track.</p>
        <div className="cta-row center">
          <Link className="btn btn-primary" href="/">Back to home</Link>
          <Link className="btn btn-ghost" href="/plans/">See plans</Link>
        </div>
      </div>
    </section>
  );
}
