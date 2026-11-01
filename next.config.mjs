/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build to plain HTML/CSS/JS in out/, ready to drag into Netlify.
  output: 'export',
  // /plans/ instead of /plans, matching the old site's URLs.
  trailingSlash: true,
  // Photos are pre-sized by scripts/make-images.mjs, so no image server is needed.
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
