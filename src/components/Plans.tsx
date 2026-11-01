'use client';

import { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { PLANS, naira, waLink, type Plan, type PlanId } from '@/lib/site';
import { choosePlan, onChoosePlan } from '@/lib/events';

type Group = Plan['group'];

const GROUPS: { id: Group; label: string; icon: string }[] = [
  { id: 'homes', label: 'For homes', icon: 'home' },
  { id: 'business', label: 'For landlords & businesses', icon: 'building' },
];

function valueLine(p: Plan) {
  if (p.jobs === 1) return 'Covers 1 simple repair a month';
  return `Covers up to ${naira(p.valueCap)} of labour a month`;
}

export function Plans({ headingLevel = 'h2' }: { headingLevel?: 'h1' | 'h2' }) {
  const [group, setGroup] = useState<Group>('homes');
  const [selected, setSelected] = useState<PlanId | null>(null);
  const Heading = headingLevel;

  // Follow plan choices made elsewhere (e.g. the plan finder) so the right card is showing.
  useEffect(() => onChoosePlan((id) => {
    if (id === 'unsure') return;
    setSelected(id);
    setGroup(PLANS.find((p) => p.id === id)!.group);
  }), []);

  const pick = (p: Plan) => {
    setSelected(p.id);
    if (!choosePlan(p.id)) {
      window.open(waLink(`Hello Kewiga Works, I would like the ${p.name} plan (${naira(p.price)}/month).`, 'web-plan-card'), '_blank', 'noopener');
    }
  };

  return (
    <div className="plans">
      <div className="section-head reveal">
        <span className="kicker">Plans & pricing</span>
        <Heading>One monthly fee. Fixed prices. No app.</Heading>
        <p>Every plan includes booking on WhatsApp, verified artisans and the 30-Day Fix-It-Free Guarantee. Plans cover labour; parts are extra at trade price, with a receipt.</p>
      </div>

      <div className="seg reveal" role="tablist" aria-label="Plan type">
        {GROUPS.map((g) => (
          <button key={g.id} type="button" role="tab" aria-selected={group === g.id} className="seg-btn"
            onClick={() => setGroup(g.id)} aria-controls="plans-panel">
            <Icon name={g.icon} />{g.label}
          </button>
        ))}
        <span className="seg-pill" style={{ transform: `translateX(${group === 'homes' ? 0 : 100}%)` }} aria-hidden="true" />
      </div>

      <div id="plans-panel" role="tabpanel" className="plans-grid" key={group}>
        {PLANS.filter((p) => p.group === group).map((p, i) => (
          <article key={p.id} className={'plan' + (p.tag ? ' featured' : '') + (selected === p.id ? ' selected' : '')}
            style={{ '--i': i } as React.CSSProperties}>
            {p.tag && <span className="plan-tag">{p.tag}</span>}
            <h3>{p.name}</h3>
            <p className="plan-for">{p.forWho}</p>
            <div className="price"><b>{naira(p.price)}</b><span>/month</span></div>
            <p className="plan-value">{valueLine(p)}</p>
            <p className="plan-promise">{p.promise}</p>
            <ul className="ticks">
              {p.features.map((f) => <li key={f}><Icon name="check" className="icon-check" />{f}</li>)}
            </ul>
            <button type="button" className={'btn ' + (p.tag ? 'btn-primary' : 'btn-ghost')} onClick={() => pick(p)}>
              Choose {p.name}
            </button>
          </article>
        ))}
      </div>

      <p className="plans-foot reveal">
        {group === 'homes'
          ? <>Own rental units, manage an estate or run an office? <button type="button" className="link-btn" onClick={() => setGroup('business')}>See landlord & business plans</button></>
          : <>Just your own home? <button type="button" className="link-btn" onClick={() => setGroup('homes')}>See home plans</button></>}
      </p>
    </div>
  );
}
