import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Sacred Chalice and Host with radiant cross SVG
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#7B2433"/>
      <stop offset="100%" stop-color="#4A121D"/>
    </radialGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCEBA4"/>
      <stop offset="35%" stop-color="#E5C158"/>
      <stop offset="70%" stop-color="#C59B27"/>
      <stop offset="100%" stop-color="#8F6A10"/>
    </linearGradient>
    <radialGradient id="haloGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF5CC" stop-opacity="0.9"/>
      <stop offset="40%" stop-color="#E5C158" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#C59B27" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="hostGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F3EFE6"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="512" height="512" rx="104" fill="url(#bgGrad)"/>
  <rect width="496" height="496" x="8" y="8" rx="96" fill="none" stroke="url(#goldGrad)" stroke-width="3" opacity="0.4"/>

  <!-- Radiant Glory / Halo behind Host -->
  <circle cx="256" cy="180" r="110" fill="url(#haloGrad)"/>

  <!-- Halo Rays -->
  <g stroke="url(#goldGrad)" stroke-width="2.5" opacity="0.6">
    <line x1="256" y1="50" x2="256" y2="85" />
    <line x1="256" y1="275" x2="256" y2="310" />
    <line x1="126" y1="180" x2="161" y2="180" />
    <line x1="351" y1="180" x2="386" y2="180" />
    <line x1="164" y1="88" x2="189" y2="113" />
    <line x1="323" y1="247" x2="348" y2="272" />
    <line x1="348" y1="88" x2="323" y2="113" />
    <line x1="189" y1="247" x2="164" y2="272" />
  </g>

  <!-- Sacred Host -->
  <circle cx="256" cy="180" r="58" fill="url(#hostGrad)" stroke="url(#goldGrad)" stroke-width="3.5" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.3))"/>
  
  <!-- Cross on Host -->
  <g fill="url(#goldGrad)">
    <rect x="252" y="145" width="8" height="70" rx="2" />
    <rect x="233" y="166" width="46" height="8" rx="2" />
    <!-- Wheat sheaf / Greek letters / subtle cross bars -->
    <circle cx="256" cy="170" r="3.5" fill="#C59B27"/>
  </g>

  <!-- Sacred Chalice -->
  <!-- Cup Base / Node / Stem / Cup -->
  <!-- Cup Body -->
  <path d="M192 230 C192 315, 320 315, 320 230 Z" fill="url(#goldGrad)" stroke="#8F6A10" stroke-width="2" filter="drop-shadow(0 6px 14px rgba(0,0,0,0.4))"/>
  <ellipse cx="256" cy="230" rx="64" ry="12" fill="#FFEAA0" stroke="#C59B27" stroke-width="2"/>

  <!-- Chalice Node (Decorative central knot) -->
  <path d="M246 295 L246 340 L266 340 L266 295 Z" fill="url(#goldGrad)"/>
  <ellipse cx="256" cy="335" rx="22" ry="14" fill="url(#goldGrad)" stroke="#8F6A10" stroke-width="1.5"/>

  <!-- Chalice Stem & Fluted Foot -->
  <path d="M248 345 L248 385 L264 385 L264 345 Z" fill="url(#goldGrad)"/>
  
  <!-- Base Pedestal with scalloped / liturgical lobes -->
  <path d="M176 430 C200 400, 240 385, 256 385 C272 385, 312 400, 336 430 C340 435, 336 442, 330 442 L182 442 C176 442, 172 435, 176 430 Z" fill="url(#goldGrad)" stroke="#8F6A10" stroke-width="2"/>
  <ellipse cx="256" cy="440" rx="76" ry="6" fill="#8F6A10" opacity="0.6"/>

  <!-- Decorative cross on chalice base -->
  <g fill="#7B2433">
    <rect x="254" y="405" width="4" height="20" rx="1" />
    <rect x="248" y="411" width="16" height="4" rx="1" />
  </g>
</svg>`;

// Save SVG
fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent, 'utf-8');
console.log('Saved public/icon.svg');

// Generate PNGs: 192x192, 512x512, apple-touch-icon 180x180, and maskable 512x512
const svgBuffer = Buffer.from(svgContent);

await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'pwa-192x192.png'));
console.log('Generated pwa-192x192.png');

await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'pwa-512x512.png'));
console.log('Generated pwa-512x512.png');

await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
console.log('Generated apple-touch-icon.png');

// For maskable icon: create padded version (80% safe zone as required by PWA skill)
const maskableSvg = svgContent.replace('width="512" height="512"', 'width="512" height="512"').replace('<rect width="512" height="512" rx="104"', '<rect width="512" height="512" rx="0"');
const maskableBuffer = Buffer.from(maskableSvg);

// Safe zone padding: composite the graphic centered in 512x512 with solid background
const resizedInner = await sharp(maskableBuffer).resize(410, 410).toBuffer();
await sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background: { r: 92, g: 29, b: 42, alpha: 1 } // #5C1D2A liturgical bordeaux
  }
}).composite([{ input: resizedInner, top: 51, left: 51 }]).png().toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
console.log('Generated pwa-maskable-512x512.png');
