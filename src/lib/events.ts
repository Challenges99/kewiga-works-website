import type { PlanId } from './site';

const CHOOSE = 'kw:choose-plan';

/** Pre-fills the booking form with a plan and scrolls to it. Returns false if this page has no booking form. */
export function choosePlan(id: PlanId | 'unsure') {
  const form = document.getElementById('book');
  if (!form) return false;
  window.dispatchEvent(new CustomEvent(CHOOSE, { detail: id }));
  form.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  return true;
}

export function onChoosePlan(handler: (id: PlanId | 'unsure') => void) {
  const listener = (e: Event) => handler((e as CustomEvent).detail);
  window.addEventListener(CHOOSE, listener);
  return () => window.removeEventListener(CHOOSE, listener);
}
