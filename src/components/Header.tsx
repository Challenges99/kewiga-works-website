'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Icon, WhatsAppIcon } from './Icon';
import { waLink, WA_HELLO } from '@/lib/site';
import { asset } from '@/lib/paths';

const NAV = [
  { href: '/plans/', label: 'Plans' },
  { href: '/services/', label: 'Services' },
  { href: '/#how', label: 'How it works' },
  { href: '/estates/', label: 'Estates & Offices' },
  { href: '/faq/', label: 'FAQ' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.classList.add('menu-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  const isCurrent = (href: string) => !href.includes('#') && (pathname === href || (href !== '/' && pathname.startsWith(href)));

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className={'site-header' + (scrolled ? ' is-scrolled' : '') + (open ? ' is-open' : '')}>
        <div className="wrap nav">
          <Link className="brand" href="/" aria-label="Kewiga Works home">
            <Image src={asset('/img/logo-horizontal.png')} alt="Kewiga Works" width={480} height={136} priority className="brand-logo" />
          </Link>
          <nav className="nav-links" aria-label="Main">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>{item.label}</Link>
            ))}
          </nav>
          {pathname !== '/artisans/' && (
            <Link className="btn btn-artisan btn-sm nav-artisan" href="/artisans/">
              <Icon name="wrench" /><span className="lbl-long">Join as an artisan</span><span className="lbl-short">Artisans</span>
            </Link>
          )}
          <a className="btn btn-wa btn-sm nav-cta" href={waLink(WA_HELLO, 'web-header')} target="_blank" rel="noopener">
            <WhatsAppIcon /> Get started on WhatsApp
          </a>
          <button className="menu-btn" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
            aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
            <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>
          </button>
        </div>
        <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile" aria-hidden={!open} inert={!open}>
          <div className="wrap">
            {NAV.map((item, i) => (
              <Link key={item.href} href={item.href} style={{ '--i': i } as React.CSSProperties}
                aria-current={isCurrent(item.href) ? 'page' : undefined} onClick={() => setOpen(false)}>
                {item.label}<Icon name="arrow" />
              </Link>
            ))}
            <Link href="/rewards/" style={{ '--i': NAV.length } as React.CSSProperties} onClick={() => setOpen(false)}>
              Rewards & referrals<Icon name="arrow" />
            </Link>
            <Link href="/artisans/" className="btn btn-artisan menu-artisan" style={{ '--i': NAV.length + 1 } as React.CSSProperties}
              onClick={() => setOpen(false)}>
              <Icon name="wrench" /> Are you an artisan? Join us
            </Link>
          </div>
        </nav>
      </header>
      <div className={'menu-scrim' + (open ? ' is-open' : '')} onClick={() => setOpen(false)} aria-hidden="true" />
    </>
  );
}
