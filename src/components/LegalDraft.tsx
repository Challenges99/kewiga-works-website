import { Icon } from './Icon';

/**
 * Set to true once a Nigerian lawyer has reviewed /privacy/ and /terms/.
 * While false, both pages show a visible "draft" notice.
 */
export const LEGAL_REVIEWED = false;

export function LegalDraftNotice() {
  if (LEGAL_REVIEWED) return null;
  return (
    <div className="draft-notice" role="note">
      <Icon name="alert" />
      <p><b>Draft for legal review.</b> This page was prepared from published commentary on Nigerian law and has not yet been reviewed by a lawyer. Questions? Contact us using the details below.</p>
    </div>
  );
}

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <section className="page-hero legal">
      <div className="wrap narrow">
        <span className="kicker">Legal</span>
        <h1>{title}</h1>
        <p className="small">Last updated {updated}</p>
        <LegalDraftNotice />
        <div className="legal-body">{children}</div>
      </div>
    </section>
  );
}
