/**
 * The folder the site is served from. Empty for kewigaworks.com; '/kewiga-works-website' for the GitHub Pages
 * preview (set by .github/workflows/pages.yml). Next.js adds it to <Link> hrefs on its own, but not to plain
 * image and file paths, so wrap those in asset().
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const asset = (path: string) => BASE_PATH + path;
