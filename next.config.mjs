// Empty for kewigaworks.com. The GitHub Pages build sets it to '/kewiga-works-website',
// because Pages serves the site from that folder (see .github/workflows/pages.yml).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build to plain HTML/CSS/JS in out/, ready to drag into Netlify.
  output: 'export',
  // /plans/ instead of /plans, matching the old site's URLs.
  trailingSlash: true,
  // Photos are pre-sized by scripts/make-images.mjs, so no image server is needed.
  images: { unoptimized: true },
  poweredByHeader: false,
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
