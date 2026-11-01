import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/lib/services';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/plans/', '/services/', ...SERVICES.map((s) => `/services/${s.slug}/`),
    '/estates/', '/areas/', '/rewards/', '/faq/', '/about/', '/artisans/', '/terms/', '/privacy/'];
  const now = new Date();
  return paths.map((p) => ({ url: SITE.url + p, lastModified: now }));
}
