'use client';

import { useState } from 'react';
import { PLANS, naira, waLink, type PlanId } from '@/lib/site';
import { choosePlan } from '@/lib/events';

type Answers = { type?: string; jobs?: string; priority?: string };

const QUESTIONS: { key: keyof Answers; legend: string; options: [string, string][] }[] = [
  { key: 'type', legend: 'What kind of property is it?', options: [['home', 'My home'], ['rental', 'Rental property / estate'], ['office', 'Office / business']] },
  { key: 'jobs', legend: 'In a typical month, how many repairs come up?', options: [['1', '0 – 1'], ['4', '2 – 4'], ['8', '5 – 8'], ['12', '9 or more']] },
  { key: 'priority', legend: 'What matters most to you?', options: [['cost', 'Keeping cost low'], ['speed', 'Fastest response'], ['hands', 'Never thinking about it']] },
];

function recommend(a: Required<Answers>): [PlanId, string] {
  if (a.type === 'office') return ['business', 'Offices need same-day response, after-hours cover and proper invoices. Business / Office was built for that.'];
  if (a.type === 'rental') return ['landlord', 'Per-property cover with move-in and move-out repairs and a monthly report, so tenants are looked after without calling you.'];
  if (a.jobs === '1') return ['basic', 'With a repair a month or less, Basic covers the essentials (taps, sockets, locks) for the lowest fee.'];
  if (a.jobs === '4') return ['standard', 'Two to four repairs a month is what Standard is for: every trade, visits booked within 24 hours and a free inspection every 3 months.'];
  if (a.jobs === '8') {
    return a.priority === 'cost'
      ? ['standard', 'Standard stretches furthest at this volume. Extra jobs go onto member rates, always agreed first.']
      : ['landlord', 'At five to eight repairs a month, Landlord / Estate gives you the headroom and same-day emergency response.'];
  }
  return ['landlord', 'Nine or more repairs a month needs the biggest allowance. If it’s one busy property, ask us about a custom quote.'];
}

export function PlanFinder() {
  const [answers, setAnswers] = useState<Answers>({});
  const done = answers.type && answers.jobs && answers.priority;
  const result = done ? recommend(answers as Required<Answers>) : null;
  const plan = result ? PLANS.find((p) => p.id === result[0])! : null;

  const go = () => {
    if (!plan) return;
    if (!choosePlan(plan.id)) window.open(waLink(`Hello Kewiga Works, the plan finder suggested ${plan.name}. Can you tell me more?`, 'web-finder'), '_blank', 'noopener');
  };

  return (
    <div className="quiz reveal">
      {QUESTIONS.map((q, n) => (
        <fieldset key={q.key} className={answers[q.key] ? 'answered' : ''}>
          <legend><span className="q-num">{n + 1}</span>{q.legend}</legend>
          <div className="opts">
            {q.options.map(([v, label]) => (
              <button key={v} type="button" className="opt" aria-pressed={answers[q.key] === v}
                onClick={() => setAnswers((a) => ({ ...a, [q.key]: v }))}>{label}</button>
            ))}
          </div>
        </fieldset>
      ))}
      <div className={'quiz-result' + (plan ? ' show' : '')} role="status" aria-live="polite">
        {plan && result && (
          <>
            <div className="qr-text">
              <span className="kicker">Your fit</span>
              <b>{plan.name} · {naira(plan.price)}/month</b>
              <p>{result[1]}</p>
            </div>
            <button type="button" className="btn btn-primary" onClick={go}>Get {plan.name}</button>
          </>
        )}
      </div>
    </div>
  );
}
