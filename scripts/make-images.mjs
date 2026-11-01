// Makes phone-sized copies of the large photos so phones don't download desktop images.
// Run with: npm run images   (only needed after adding or replacing a photo in public/img)
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'img');
const WIDTHS = [480, 760];

for (const file of await readdir(dir)) {
  if (!file.endsWith('.webp') || /-\d+w\.webp$/.test(file)) continue;
  const base = file.replace(/\.webp$/, '');
  for (const width of WIDTHS) {
    const out = path.join(dir, `${base}-${width}w.webp`);
    const info = await sharp(path.join(dir, file)).resize({ width, withoutEnlargement: true }).webp({ quality: 72 }).toFile(out);
    console.log(`${base}-${width}w.webp  ${(info.size / 1024).toFixed(0)} KB`);
  }
}
