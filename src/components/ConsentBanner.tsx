'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onOpenCookieSettings, openCookieSettings, readConsent, saveConsent, type Consent } from '@/lib/consent';

/** Asks before Google Analytics runs. Shown until the visitor chooses; reopened from the footer's "Cookie settings". */
export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(readConsent() === null);
    return onOpenCookieSettings(() => setOpen(true));
  }, []);

  // Slide the phone WhatsApp bar away while the banner is up, so the two never stack.
  useEffect(() => {
    document.body.classList.toggle('consent-open', open);
  }, [open]);

  if (!open) return null;

  const choose = (value: Consent) => {
    saveConsent(value);
    setOpen(false);
  };

  return (
    <div className="consent-banner" role="dialog" aria-labelledby="consent-title" aria-describedby="consent-text">
      <div className="consent-copy">
        <p id="consent-title"><b>Can we count your visit?</b></p>
        <p id="consent-text">
          With your OK, Google Analytics sets cookies that tell us which pages people visit and how many tap WhatsApp.
          No ads, and we never sell your data. <Link href="/privacy/#cookies">Privacy policy</Link>
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => choose('denied')}>Decline</button>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => choose('granted')}>Accept</button>
      </div>
    </div>
  );
}

export function CookieSettingsLink() {
  return <button type="button" className="link-button" onClick={openCookieSettings}>Cookie settings</button>;
}
