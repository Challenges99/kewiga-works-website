'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Icon } from './Icon';
import { AREAS, SITE, waLink } from '@/lib/site';

const TRADES = ['Plumbing', 'Electrical', 'Painting', 'Carpentry', 'AC service & repair', 'General repairs', 'Deep cleaning', 'Other'];
const EXPERIENCE = ['Less than 1 year', '1–3 years', '4–6 years', '7–10 years', 'More than 10 years'];
const TOOLS = ['Yes, a full set for my trade', 'Some, still building my set', 'No'];

export function ArtisanForm() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) || '').trim();
    const lines = [
      'Hello Kewiga Works, I would like to apply to work as an artisan.',
      `Full name: ${get('name')}`,
      `WhatsApp number: ${get('phone')}`,
      `Trade: ${get('trade')}`,
      `Experience: ${get('experience')}`,
      `Area: ${get('area')}`,
      `Own tools: ${get('tools')}`,
      `Guarantor: ${get('guarantor')} (${get('guarantorPhone')}); guarantor has agreed to be contacted`,
    ];
    if (get('referrer')) lines.push(`Referred by: ${get('referrer')}${get('referrerPhone') ? ` (${get('referrerPhone')})` : ''}`);
    if (get('about')) lines.push(`Anything else: ${get('about')}`);
    const url = waLink(lines.join('\n'), 'web-artisan');
    if (!window.open(url, '_blank', 'noopener')) window.location.href = url;
    setSent(true);
  };

  return (
    <form className="form-card reveal" onSubmit={submit} data-hide-wa-bar>
      <h3>Artisan application</h3>
      <div className="form-row">
        <div className="field"><label htmlFor="a-name">Full name</label><input id="a-name" name="name" type="text" autoComplete="name" required /></div>
        <div className="field"><label htmlFor="a-phone">WhatsApp number</label><input id="a-phone" name="phone" type="tel" placeholder="080…" autoComplete="tel" required /></div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="a-trade">Your trade</label>
          <select id="a-trade" name="trade" required defaultValue=""><option value="" disabled>Select trade…</option>{TRADES.map((t) => <option key={t}>{t}</option>)}</select>
        </div>
        <div className="field">
          <label htmlFor="a-exp">Years of experience</label>
          <select id="a-exp" name="experience" required defaultValue=""><option value="" disabled>Select…</option>{EXPERIENCE.map((t) => <option key={t}>{t}</option>)}</select>
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="a-area">Area you live in</label>
          <select id="a-area" name="area" required defaultValue=""><option value="" disabled>Select area…</option>{AREAS.map((a) => <option key={a}>{a}</option>)}<option>Other</option></select>
        </div>
        <div className="field">
          <label htmlFor="a-tools">Your own tools?</label>
          <select id="a-tools" name="tools" required defaultValue=""><option value="" disabled>Select…</option>{TOOLS.map((t) => <option key={t}>{t}</option>)}</select>
        </div>
      </div>
      <div className="form-row">
        <div className="field"><label htmlFor="a-g">Guarantor’s full name</label><input id="a-g" name="guarantor" type="text" required /></div>
        <div className="field"><label htmlFor="a-gp">Guarantor’s phone</label><input id="a-gp" name="guarantorPhone" type="tel" placeholder="080…" required /></div>
      </div>
      <label className="check">
        <input type="checkbox" name="guarantorConsent" required />
        <span>My guarantor knows I’m applying and has agreed that Kewiga Works may contact them.</span>
      </label>
      <details className="more-fields">
        <summary>Who referred you? / anything else <span className="optional">(optional)</span></summary>
        <div className="form-row">
          <div className="field"><label htmlFor="a-r">Referrer’s name</label><input id="a-r" name="referrer" type="text" /></div>
          <div className="field"><label htmlFor="a-rp">Referrer’s phone</label><input id="a-rp" name="referrerPhone" type="tel" /></div>
        </div>
        <div className="field"><label htmlFor="a-about">Anything else we should know?</label><textarea id="a-about" name="about" placeholder="e.g. I specialise in water heaters; I can also do tiling" /></div>
      </details>
      <button type="submit" className="btn btn-primary btn-block"><Icon name="wrench" /> Send application on WhatsApp</button>
      <p className="form-fine">
        This opens WhatsApp with your application ready to send to {SITE.phoneDisplay}. We use these details only to assess your application and contact your guarantor, and we delete them if you’re not taken on. See our <Link href="/privacy/">privacy policy</Link>.
      </p>
      <p className={'form-status' + (sent ? ' show' : '')} role="status">
        {sent && <><Icon name="check" /> WhatsApp should now be open. Tap send to submit your application.</>}
      </p>
    </form>
  );
}
