// Serves the built site in out/ at http://localhost:4323, so you can check the live version before deploying.
// Run with: npm run preview   (after npm run build)
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'out');
const PORT = 4323;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json',
};

async function resolve(urlPath) {
  const file = path.join(ROOT, decodeURIComponent(urlPath.split('?')[0]));
  if (!file.startsWith(ROOT)) return null;
  try {
    const s = await stat(file);
    return s.isDirectory() ? path.join(file, 'index.html') : file;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const file = await resolve(req.url ?? '/');
  try {
    const body = await readFile(file ?? '');
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(await readFile(path.join(ROOT, '404.html')).catch(() => 'Not found'));
  }
}).listen(PORT, () => console.log(`Kewiga Works (built site) running at http://localhost:${PORT}  (Ctrl+C to stop)`));
