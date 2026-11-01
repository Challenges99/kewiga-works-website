'use client';

import { choosePlan } from '@/lib/events';
import type { PlanId } from '@/lib/site';

/** Button that pre-fills the booking form on this page with a plan and scrolls to it. */
export function ChoosePlanButton({ plan, className, children }: { plan: PlanId; className?: string; children: React.ReactNode }) {
  return <button type="button" className={className} onClick={() => choosePlan(plan)}>{children}</button>;
}
