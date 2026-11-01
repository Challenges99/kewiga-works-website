'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './Icon';
import { waLink, WA_HELLO } from '@/lib/site';

/** Sticky "Chat on WhatsApp" bar on phones. Slides away while a form is on screen so it never covers the submit button. */
export function MobileWaBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(false);
    const forms = document.querySelectorAll('[data-hide-wa-bar]');
    if (!forms.length || !('IntersectionObserver' in window)) return;
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
      setHidden(visible.size > 0);
    }, { threshold: 0.15 });
    forms.forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div className={'wa-bar' + (hidden ? ' is-hidden' : '')}>
      <a className="btn btn-wa" href={waLink(WA_HELLO, 'web-mobile-bar')} target="_blank" rel="noopener">
        <WhatsAppIcon /> Chat on WhatsApp
      </a>
    </div>
  );
}
