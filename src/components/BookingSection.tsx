'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Icon, WhatsAppIcon } from './Icon';
import { AREAS, PLANS, SITE, naira, planLabel, waLink, WA_HELLO, type PlanId } from '@/lib/site';
import { onChoosePlan } from '@/lib/events';

export function BookingSection() {
  const [plan, setPlan] = useState<PlanId | 'unsure' | ''>('');
  const [sent, setSent] = useState(false);
  const [flash, setFlash] = useState(false);
  const planRef = useRef<HTMLSelectElement>(null);

  useEffect(() => onChoosePlan((id) => {
    setPlan(id);
    setFlash(true);
    window.setTimeout(() => setFlash(false), 1200);
  }), []);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const chosen = PLANS.find((p) => p.id === plan);
    const lines = [
      'Hello Kewiga Works, I would like to get started.',
      `Name: ${String(data.get('name')).trim()}`,
      `Area: ${data.get('area')}`,
      `Plan: ${chosen ? planLabel(chosen) : 'Not sure yet'}`,
    ];
    const issue = String(data.get('issue') || '').trim();
    const referrer = String(data.get('referrer') || '').trim();
    if (issue) lines.push(`What needs fixing: ${issue}`);
    if (referrer) lines.push(`Referred by: ${referrer}`);
    const url = waLink(lines.join('\n'), 'web-form');
    if (!window.open(url, '_blank', 'noopener')) window.location.href = url;
    setSent(true);
  };

  return (
    <section className="book" id="book" aria-labelledby="book-title">
      <div className="wrap book-grid">
        <div className="reveal">
          <span className="kicker kicker-light">Get started</span>
          <h2 id="book-title">Get covered before the next leak.</h2>
          <p className="lead">Tell us three things and we’ll reply on WhatsApp with your plan, price and earliest booking window.</p>
          <ul className="book-points">
            <li><Icon name="clock" /><div><b>Fast first reply</b><span>During business hours ({SITE.hours}), usually within the hour.</span></div></li>
            <li><Icon name="lock" /><div><b>Nothing to pay to start</b><span>We confirm your plan and price first. You decide, then you pay.</span></div></li>
            <li><Icon name="shield" /><div><b>Pay only KEWIGA WORKS LTD</b><span>Never pay an artisan directly or into a personal account.</span></div></li>
          </ul>
        </div>

        <form className="form-card reveal" onSubmit={submit} data-hide-wa-bar>
          <h3>Start on WhatsApp</h3>
          <div className="form-row">
            <div className="field">
              <label htmlFor="book-name">Your name</label>
              <input id="book-name" name="name" type="text" placeholder="e.g. Amaka" autoComplete="given-name" required />
            </div>
            <div className="field">
              <label htmlFor="book-area">Area in Abuja</label>
              <select id="book-area" name="area" required defaultValue="">
                <option value="" disabled>Select area…</option>
                {AREAS.map((a) => <option key={a}>{a}</option>)}
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className={'field' + (flash ? ' flash' : '')}>
            <label htmlFor="book-plan">Plan</label>
            <select id="book-plan" name="plan" required ref={planRef} value={plan}
              onChange={(e) => setPlan(e.target.value as PlanId | 'unsure')}>
              <option value="" disabled>Select a plan…</option>
              {PLANS.map((p) => <option key={p.id} value={p.id}>{p.name} ({naira(p.price)}/month)</option>)}
              <option value="unsure">Not sure yet</option>
            </select>
          </div>
          <details className="more-fields">
            <summary>Add details <span className="optional">(optional)</span></summary>
            <div className="field">
              <label htmlFor="book-issue">What needs fixing?</label>
              <textarea id="book-issue" name="issue" placeholder="e.g. Kitchen tap leaking, one socket not working" />
            </div>
            <div className="field">
              <label htmlFor="book-referrer">Who referred you?</label>
              <input id="book-referrer" name="referrer" type="text" placeholder="Their name" autoComplete="off" />
            </div>
          </details>
          <button type="submit" className="btn btn-wa btn-block"><WhatsAppIcon /> Send on WhatsApp</button>
          <p className="form-alt">Rather not fill a form? <a href={waLink(WA_HELLO, 'web-form-chat')} target="_blank" rel="noopener">Just chat with us</a></p>
          <p className="form-fine">
            This opens WhatsApp with your message ready to send to {SITE.phoneDisplay}. We use your details only to reply and arrange your plan. See our <Link href="/privacy/">privacy policy</Link>.
          </p>
          <p className={'form-status' + (sent ? ' show' : '')} role="status">
            {sent && <><Icon name="check" /> WhatsApp should now be open. Tap send and we’ll reply soon.</>}
          </p>
        </form>
      </div>
    </section>
  );
}
