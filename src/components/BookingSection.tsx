'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Icon, WhatsAppIcon } from './Icon';
import { AREAS, PLANS, SITE, naira, planLabel, waLink, WA_HELLO, type PlanId } from '@/lib/site';
import { onChoosePlan } from '@/lib/events';

type FormTab = 'subscribe' | 'repair';
type PlanChoice = PlanId | 'unsure' | '';

const PROPERTY_TYPES = ['Flat', 'Duplex', 'Detached house', 'Office'];
const TRADES = ['Plumbing', 'Electrical', 'Painting', 'Carpentry', 'AC', 'Cleaning'];

/** Both forms go to the same WhatsApp number, so each message opens with its own first line. */
const FIRST_LINE: Record<FormTab, string> = {
  subscribe: 'Hello Kewiga Works — I want to SUBSCRIBE.',
  repair: 'Hello Kewiga Works — I’m a SUBSCRIBER booking a repair.',
};

const planText = (id: PlanChoice) => {
  const p = PLANS.find((x) => x.id === id);
  return p ? planLabel(p) : 'Not sure yet, advise me';
};

function PlanSelect({ id, value, onChange }: { id: string; value: PlanChoice; onChange: (v: PlanChoice) => void }) {
  return (
    <select id={id} name="plan" required value={value} onChange={(e) => onChange(e.target.value as PlanChoice)}>
      <option value="" disabled>Select a plan…</option>
      {PLANS.map((p) => <option key={p.id} value={p.id}>{p.name} ({naira(p.price)}/month)</option>)}
      <option value="unsure">Not sure yet, advise me</option>
    </select>
  );
}

function openWhatsApp(lines: string[], tag: string) {
  const url = waLink(lines.join('\n'), tag);
  if (!window.open(url, '_blank', 'noopener')) window.location.href = url;
}

export function BookingSection() {
  const [tab, setTab] = useState<FormTab>('subscribe');
  const [subPlan, setSubPlan] = useState<PlanChoice>('');
  const [repairPlan, setRepairPlan] = useState<PlanChoice>('');
  const [sent, setSent] = useState<FormTab | null>(null);
  const [flash, setFlash] = useState(false);
  // Send buttons stay disabled until the page's JavaScript is running. Otherwise a very early tap would
  // submit the form natively and put the visitor's name and address in the page URL.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  // "Choose plan" buttons elsewhere on the page open the Subscribe form with that plan picked.
  useEffect(() => onChoosePlan((id) => {
    setTab('subscribe');
    setSubPlan(id);
    setFlash(true);
    window.setTimeout(() => setFlash(false), 1200);
  }), []);

  const val = (d: FormData, k: string) => String(d.get(k) || '').trim();

  const submitSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const lines = [
      FIRST_LINE.subscribe,
      `Name: ${val(d, 'name')}`,
      `Area: ${val(d, 'area')}`,
      `Property address: ${val(d, 'address')}`,
      `Property type: ${val(d, 'propertyType')}`,
      `Plan: ${planText(subPlan)}`,
    ];
    if (val(d, 'referrer')) lines.push(`Referred by: ${val(d, 'referrer')}`);
    openWhatsApp(lines, 'web-subscribe');
    setSent('subscribe');
  };

  const submitRepair = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    openWhatsApp([
      FIRST_LINE.repair,
      `Name: ${val(d, 'name')}`,
      `Plan: ${planText(repairPlan)}`,
      `Property address: ${val(d, 'address')}`,
      `Trade: ${val(d, 'trade')}`,
      `What needs fixing: ${val(d, 'issue')}`,
    ], 'web-repair');
    setSent('repair');
  };

  const status = (which: FormTab, text: string) => (
    <p className={'form-status' + (sent === which ? ' show' : '')} role="status">
      {sent === which && <><Icon name="check" /> {text}</>}
    </p>
  );

  return (
    <section className="book" id="book" aria-labelledby="book-title">
      <div className="wrap book-grid">
        <div className="reveal">
          <span className="kicker kicker-light">Get started</span>
          <h2 id="book-title">Get covered before the next leak.</h2>
          <p className="lead">New to Kewiga? Subscribe in a minute. Already a subscriber? Book your repair here. Both open WhatsApp with your message ready to send.</p>
          <ul className="book-points">
            <li><Icon name="clock" /><div><b>Fast first reply</b><span>During business hours ({SITE.hours}), usually within the hour.</span></div></li>
            <li><Icon name="lock" /><div><b>Nothing to pay to start</b><span>We confirm your plan and price first. You decide, then you pay.</span></div></li>
            <li><Icon name="shield" /><div><b>Pay only KEWIGA WORKS LTD</b><span>Never pay an artisan directly or into a personal account.</span></div></li>
          </ul>
        </div>

        <div className="form-card reveal" data-hide-wa-bar>
          <div className="form-tabs" role="tablist" aria-label="Choose a form">
            <button type="button" role="tab" id="tab-subscribe" aria-selected={tab === 'subscribe'} aria-controls="panel-subscribe"
              onClick={() => setTab('subscribe')}>Subscribe</button>
            <button type="button" role="tab" id="tab-repair" aria-selected={tab === 'repair'} aria-controls="panel-repair"
              onClick={() => setTab('repair')}>Book a Repair</button>
            <span className="form-tabs-pill" style={{ transform: `translateX(${tab === 'subscribe' ? 0 : 100}%)` }} aria-hidden="true" />
          </div>

          {tab === 'subscribe' ? (
            <form id="panel-subscribe" role="tabpanel" aria-labelledby="tab-subscribe" className="form-panel" onSubmit={submitSubscribe}>
              <h3>Subscribe to Kewiga Works</h3>
              <p className="form-sub">New to Kewiga? Pick a plan and we’ll set up your cover.</p>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="sub-name">Your name</label>
                  <input id="sub-name" name="name" type="text" placeholder="e.g. Amaka" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="sub-area">Area in Abuja</label>
                  <select id="sub-area" name="area" required defaultValue="">
                    <option value="" disabled>Select area…</option>
                    {AREAS.map((a) => <option key={a}>{a}</option>)}
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="sub-address">Property address</label>
                <input id="sub-address" name="address" type="text" placeholder="House number, street, estate" autoComplete="street-address" required />
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="sub-type">Property type</label>
                  <select id="sub-type" name="propertyType" required defaultValue="">
                    <option value="" disabled>Select…</option>
                    {PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className={'field' + (flash ? ' flash' : '')}>
                  <label htmlFor="sub-plan">Plan</label>
                  <PlanSelect id="sub-plan" value={subPlan} onChange={setSubPlan} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="sub-referrer">Who referred you? <span className="optional">(optional)</span></label>
                <input id="sub-referrer" name="referrer" type="text" placeholder="Their name" autoComplete="off" />
              </div>
              <button type="submit" className="btn btn-wa btn-block" disabled={!ready}><WhatsAppIcon /> Subscribe on WhatsApp</button>
              <p className="form-alt">Rather not fill a form? <a href={waLink(WA_HELLO, 'web-form-chat')} target="_blank" rel="noopener">Just chat with us</a></p>
              {status('subscribe', 'WhatsApp should now be open. Tap send and we’ll reply soon.')}
            </form>
          ) : (
            <form id="panel-repair" role="tabpanel" aria-labelledby="tab-repair" className="form-panel" onSubmit={submitRepair}>
              <h3>Book a Repair</h3>
              <p className="form-sub">Already a subscriber? Tell us what needs fixing.</p>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="rep-name">Your name <span className="optional">(as subscribed)</span></label>
                  <input id="rep-name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="rep-plan">Your plan</label>
                  <PlanSelect id="rep-plan" value={repairPlan} onChange={setRepairPlan} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="rep-address">Property address</label>
                <input id="rep-address" name="address" type="text" placeholder="House number, street, estate" autoComplete="street-address" required />
              </div>
              <div className="field">
                <label htmlFor="rep-trade">Trade</label>
                <select id="rep-trade" name="trade" required defaultValue="">
                  <option value="" disabled>Select trade…</option>
                  {TRADES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="rep-issue">What needs fixing?</label>
                <textarea id="rep-issue" name="issue" required placeholder="e.g. Kitchen tap leaking since this morning" />
              </div>
              <button type="submit" className="btn btn-wa btn-block" disabled={!ready}><WhatsAppIcon /> Book repair on WhatsApp</button>
              <p className="form-hint"><Icon name="alert" /> When WhatsApp opens, attach a photo of the problem — it helps us size the job before we come.</p>
              {status('repair', 'WhatsApp should now be open. Attach a photo and tap send.')}
            </form>
          )}

          <p className="form-fine">
            Both forms send to the Kewiga Works WhatsApp line, {SITE.phoneDisplay}. We use your details only to reply and arrange your plan or repair. See our <Link href="/privacy/">privacy policy</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
