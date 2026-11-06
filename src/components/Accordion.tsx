'use client';

import Link from 'next/link';
import { useId, useState } from 'react';
import { Icon } from './Icon';
import type { QA } from '@/lib/faq';

/** FAQ list with smooth open/close. Content stays in the HTML, so search engines still read every answer. */
export function Accordion({ items, firstOpen = false }: { items: QA[]; firstOpen?: boolean }) {
  const [open, setOpen] = useState<number | null>(firstOpen ? 0 : null);
  const base = useId();

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          // Open state lives in data-open, not className: the scroll reveal adds an `in` class to this element
          // outside React, and changing className here would wipe it and hide the item.
          <div key={item.q} className="faq reveal" data-open={isOpen}>
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={`${base}-${i}`} id={`${base}-q${i}`}
                onClick={() => setOpen(isOpen ? null : i)}>
                <span>{item.q}</span><Icon name="plus" />
              </button>
            </h3>
            <div className="faq-a" id={`${base}-${i}`} role="region" aria-labelledby={`${base}-q${i}`} inert={!isOpen}>
              <div className="faq-a-inner">
                {item.a.split('\n\n').map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
                {item.link && <p><Link href={item.link.href}>{item.link.label} →</Link></p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
