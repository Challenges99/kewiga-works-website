import { asset } from '@/lib/paths';

/** Responsive photo: phones get the 480/760px copies made by scripts/make-images.mjs. */
const SIZES: Record<string, [number, number]> = {
  'abuja-estate-aerial': [1080, 1068],
  'audience-home': [900, 600],
  'audience-office': [900, 505],
  'service-ac': [900, 675],
  'service-electrical': [900, 599],
  'service-painting': [900, 599],
  'service-plumbing': [900, 630],
};

export function Photo({ name, alt, sizes = '(max-width: 760px) 100vw, 50vw', priority = false, className }: {
  name: keyof typeof SIZES | string; alt: string; sizes?: string; priority?: boolean; className?: string;
}) {
  const [w, h] = SIZES[name] ?? [900, 600];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={asset(`/img/${name}.webp`)}
      srcSet={`${asset(`/img/${name}-480w.webp`)} 480w, ${asset(`/img/${name}-760w.webp`)} 760w, ${asset(`/img/${name}.webp`)} ${w}w`}
      sizes={sizes}
      alt={alt}
      width={w}
      height={h}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}
