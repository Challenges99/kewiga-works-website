import { AREAS, COMPANY, PLANS, SITE } from '@/lib/site';

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/** Business details for Google and AI assistants: legal name, RC number, prices and districts. */
export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': SITE.url + '/#business',
    name: SITE.name,
    legalName: COMPANY.legalName,
    identifier: { '@type': 'PropertyValue', propertyID: 'CAC RC number', value: COMPANY.rcNumber },
    description: 'Home and office maintenance on a monthly plan in Abuja. Fixed published prices, verified artisans, booked on WhatsApp with no app.',
    url: SITE.url + '/',
    logo: SITE.url + '/img/logo-stacked.png',
    image: SITE.url + '/img/og-image.jpg',
    telephone: '+' + SITE.phoneIntl,
    email: SITE.email,
    founder: { '@type': 'Person', name: SITE.founder },
    address: {
      '@type': 'PostalAddress',
      ...(COMPANY.registeredAddress ? { streetAddress: COMPANY.registeredAddress } : {}),
      addressLocality: 'Abuja',
      addressRegion: 'FCT',
      addressCountry: 'NG',
    },
    areaServed: AREAS.map((name) => ({ '@type': 'Place', name: `${name}, Abuja` })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    priceRange: '₦10,000 – ₦100,000 per month',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Maintenance plans',
      itemListElement: PLANS.map((p) => ({
        '@type': 'Offer',
        name: `${p.name} plan`,
        description: p.promise,
        price: p.price,
        priceCurrency: 'NGN',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: p.price, priceCurrency: 'NGN', unitText: 'MONTH' },
      })),
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}
