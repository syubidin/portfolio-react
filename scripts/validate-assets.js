import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const contentFile = path.join(root, 'src', 'content.js');
const publicDir = path.join(root, 'public');

if (!fs.existsSync(contentFile)) {
  process.exit(0);
}

const content = fs.readFileSync(contentFile, 'utf8');

// Match image and preview paths: image: "...", preview: "..."
const assetMatches = [...content.matchAll(/(?:image|preview):\s*["']([^"']+)["']/g)];
let missing = 0;

for (const match of assetMatches) {
  const assetPath = match[1].split('?')[0].replace(/^\.?\//, '');
  if (!assetPath) continue;

  const fullPath = path.join(publicDir, assetPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`\x1b[31m[Asset Check Error] Missing asset: public/${assetPath}\x1b[0m`);
    console.error(`  Defined in src/content.js but file is not found in public directory.`);
    missing++;
  }
}

if (missing > 0) {
  console.error(`\x1b[31mFound ${missing} missing asset(s). Aborting build.\x1b[0m`);
  console.error(`Tip: Make sure to place the asset in public/ and run 'git add' on it before pushing.`);
  process.exit(1);
} else {
  console.log(`\x1b[32m✓ All project assets verified in public/ directory.\x1b[0m`);
}
