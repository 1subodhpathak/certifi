import { getStoredCertificates } from './certificateRegistry';
import { getBadgeDisplayName } from './badgeTitles';
import { useCertifiStore } from '../store/useCertifiStore';

const STORAGE_KEY = 'careerSenseBadges';
const MAX_BADGES = 48;
const LOGO_PATH = '/Golden.png';

let cachedLogoDataUrl = null;
let logoDataUrlPromise = null;
const badgeDataUrlCache = new Map();
const badgeDesignPreviewCache = new Map();

// Luxury institutional palettes tuned for official board-credential styling.
const BADGE_PALETTES = [
  { id: 'careersense-regalia', name: 'CareerSense Regalia', colors: { primary: '#0d2a52', secondary: '#07152c', accent: '#d8b25b', soft: '#f5efe1', ink: '#f9f5ec' } },
  { id: 'midnight-gold', name: 'Midnight Gold', colors: { primary: '#101a33', secondary: '#040914', accent: '#d9b76a', soft: '#f6f1e6', ink: '#fbf7ef' } },
  { id: 'royal-indigo', name: 'Royal Indigo', colors: { primary: '#232a63', secondary: '#11163a', accent: '#d8b56a', soft: '#f4f0e9', ink: '#fbf8f2' } },
  { id: 'emerald-board', name: 'Emerald Board', colors: { primary: '#113930', secondary: '#061a15', accent: '#d7b161', soft: '#f4f0e5', ink: '#fbf7ef' } },
  { id: 'crimson-council', name: 'Crimson Council', colors: { primary: '#5a1620', secondary: '#2b0910', accent: '#d7b56a', soft: '#f7f0e8', ink: '#fbf8f2' } },
  { id: 'oxford-teal', name: 'Oxford Teal', colors: { primary: '#12394b', secondary: '#071d26', accent: '#d6b15f', soft: '#f2eee5', ink: '#fbf7ee' } },
];

// Premium metallic designs for luxury board-style credentials.
const BADGE_DESIGNS = [
  { id: 'diamond-crest', name: 'Diamond Crest', description: 'Striking diamond shape with a bottom banner.' },
  { id: 'starburst-seal', name: 'Starburst Seal', description: 'Classic 16-point scalloped academic seal.' },
  { id: 'shield-ribbon', name: 'Shield Ribbon', description: 'Traditional shield with a 3D folded bottom ribbon.' },
  { id: 'regal-laurel-seal', name: 'Regal Laurel Seal', description: 'Glossy ceremonial medallion framed by gold laurel work and velvet ribbons.' },
  { id: 'sovereign-red-medallion', name: 'Sovereign Red Medallion', description: 'Deep garnet medallion with formal laurel ornament and board insignia.' },
  { id: 'laurel-emblem', name: 'Laurel Emblem', description: 'Circular seal framed by symbolic laurel leaves.' },
  { id: 'flat-shield-banner', name: 'Flat Shield Banner', description: 'Flat-top shield crossed by a wide horizontal sash.' },
  { id: 'ornate-scroll-shield', name: 'Ornate Scroll Shield', description: 'Ivory shield with carved board-style scrollwork and a formal ribbon.' },
  { id: 'round-crest', name: 'Round Crest', description: 'Curved shield base with an overlapping year plaque.' },
  { id: 'executive-shield', name: 'Executive Shield', description: 'Heavy, robust crest for formal achievements.' },
  { id: 'hex-medal', name: 'Hex Medal', description: 'Strong hexagonal frame with sharp geometry.' },
  { id: 'compass-coin', name: 'Compass Coin', description: 'Perfectly round coin design.' },
  { id: 'imperial-ornate-shield', name: 'Imperial Ornate Shield', description: 'Grand heraldic shield with gilded foliage and ceremonial authority.' },
  { id: 'baroque-royal-shield', name: 'Baroque Royal Shield', description: 'Dark ceremonial shield framed by ornate gold flourishes and sovereign detailing.' },
  { id: 'citation-plaque', name: 'Citation Plaque', description: 'Tall, plaque-style badge.' },
  { id: 'octagon-regalia', name: 'Octagon Regalia', description: 'Faceted octagon with a senate-style center shield.' },
];

const escapeXml = (value = '') => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const slugify = (value = '') => String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

function getBadgeCacheKey(certificate = {}, designId = '', paletteId = '') {
  return [
    certificate.id || '',
    certificate.skill || certificate.title || '',
    certificate.badgeTitle || certificate.label || '',
    certificate.issuedAt || certificate.date || '',
    designId,
    paletteId,
  ].join('::');
}

const readBlobAsDataUrl = (blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onloadend = () => resolve(reader.result);
  reader.onerror = () => reject(reader.error || new Error('Failed to read logo asset.'));
  reader.readAsDataURL(blob);
});

async function getLogoDataUrl() {
  if (cachedLogoDataUrl) return cachedLogoDataUrl;
  if (logoDataUrlPromise) return logoDataUrlPromise;

  logoDataUrlPromise = (async () => {
    try {
      const response = await fetch(LOGO_PATH, { cache: 'force-cache' });
      if (!response.ok) throw new Error(`Failed to fetch logo: ${response.status}`);
      const blob = await response.blob();
      cachedLogoDataUrl = await readBlobAsDataUrl(blob);
      return cachedLogoDataUrl;
    } catch (error) {
      console.error('Failed to inline badge logo:', error);
      return null;
    } finally {
      logoDataUrlPromise = null;
    }
  })();
  return logoDataUrlPromise;
}

function chunkLongWord(word, size) {
  const chunks = [];
  for (let index = 0; index < word.length; index += size) chunks.push(word.slice(index, index + size));
  return chunks;
}

function formatBadgeTitle(rawTitle = '', maxLines = 3, targetLineLength = 16) {
  const preparedWords = String(rawTitle || 'Verified Credential')
    .trim().replace(/\s+/g, ' ').split(' ')
    .flatMap((word) => (word.length > targetLineLength + 2 ? chunkLongWord(word, targetLineLength) : word))
    .filter(Boolean).map((word) => word);

  const lines = [];
  preparedWords.forEach((word) => {
    const lastLine = lines[lines.length - 1] || '';
    const nextLine = lastLine ? `${lastLine} ${word}` : word;
    if (nextLine.length <= targetLineLength || !lastLine) {
      if (lastLine) lines[lines.length - 1] = nextLine;
      else lines.push(nextLine);
      return;
    }
    lines.push(word);
  });

  const trimmed = lines.slice(0, maxLines).map((line) => line.trim());
  if (lines.length > maxLines) {
    trimmed[maxLines - 1] = `${trimmed[maxLines - 1].slice(0, Math.max(0, targetLineLength - 3)).trim()}...`;
  }
  return trimmed.length ? trimmed : ['Verified', 'Credential'];
}

function buildTitleMetrics(lines = [], containerWidth = 600) {
  const longestLineLength = Math.max(...lines.map((line) => line.length), 1);
  const estimatedMaxFont = Math.floor(containerWidth / (longestLineLength * 0.65));
  const maxFontSize = 68;
  const minFontSize = 28;
  const fontSize = Math.max(minFontSize, Math.min(maxFontSize, estimatedMaxFont));
  const lineHeight = Math.round(fontSize * 1.25);
  const totalHeight = lineHeight * (lines.length - 1);
  return { fontSize, lineHeight, totalHeight };
}

function renderTextLines(lines, config = {}) {
  const { x = 540, centerY = 540, fill = '#000000', fontFamily = 'Georgia, serif', fontWeight = 800, fontSize = 60, lineHeight = 70, letterSpacing = 0 } = config;
  const startY = centerY - ((lines.length - 1) * lineHeight) / 2;
  return lines.map((line, index) => (
    `<text x="${x}" y="${Math.round(startY + index * lineHeight)}" text-anchor="middle" fill="${fill}" font-family="${fontFamily}" font-size="${fontSize}" font-weight="${fontWeight}" letter-spacing="${letterSpacing}">${escapeXml(line)}</text>`
  )).join('');
}

function renderLogoMark({ logoHref, cx, cy, size, ring = 'url(#metalGold)', fill = 'transparent', shadow = false, strokeWidth = 8 }) {
  const r = size / 2;
  const imgSize = size * 0.65;
  const offset = imgSize / 2;
  if (logoHref) {
    return `
      <g${shadow ? ' filter="url(#badgeShadow)"' : ''}>
        <image href="${escapeXml(logoHref)}" x="${cx - offset}" y="${cy - offset}" width="${imgSize}" height="${imgSize}" preserveAspectRatio="xMidYMid meet" />
      </g>
    `;
  }

  return `
    <g${shadow ? ' filter="url(#badgeShadow)"' : ''}>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${ring}" stroke-width="${strokeWidth}" />
      <text x="${cx}" y="${cy + r * 0.3}" text-anchor="middle" fill="#0f172a" font-family="Arial, sans-serif" font-size="${r * 0.6}" font-weight="900">CS</text>
    </g>
  `;
}

function renderPrestigeText(text, config = {}) {
  const {
    x = 540,
    y = 540,
    size = 24,
    fill = 'url(#metalGold)',
    letterSpacing = 4,
    weight = 700,
    anchor = 'middle',
  } = config;

  return `<text x="${x}" y="${y}" text-anchor="${anchor}" fill="${fill}" font-family="Times New Roman, Georgia, serif" font-size="${size}" font-weight="${weight}" letter-spacing="${letterSpacing}">${escapeXml(text)}</text>`;
}

function renderBoardHeading(y, palette, label = 'A') {
  return `
    <g opacity="0.98">
      <path d="M 338 ${y} H 742" stroke="url(#metalGold)" stroke-width="2.5" stroke-linecap="round" />
      ${renderPrestigeText(label, { y: y + 28, size: 22, fill: palette.ink, letterSpacing: 3.5, weight: 700 })}
      <path d="M 338 ${y + 42} H 742" stroke="url(#metalGold)" stroke-width="2.5" stroke-linecap="round" />
    </g>
  `;
}

function renderRadiantBurst(cx, cy, innerRadius, outerRadius, rays, stroke = 'rgba(255,255,255,0.24)', width = 2) {
  const segments = [];
  for (let index = 0; index < rays; index += 1) {
    const angle = (Math.PI * 2 * index) / rays - Math.PI / 2;
    const x1 = cx + Math.cos(angle) * innerRadius;
    const y1 = cy + Math.sin(angle) * innerRadius;
    const x2 = cx + Math.cos(angle) * outerRadius;
    const y2 = cy + Math.sin(angle) * outerRadius;
    segments.push(`<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" />`);
  }
  return `<g opacity="0.72">${segments.join('')}</g>`;
}

function renderLaurelPair({ cx = 540, cy = 540, radius = 160, fill = 'url(#metalGold)' } = {}) {
  const leaves = [];
  for (let index = 0; index < 9; index += 1) {
    const angle = -140 + index * 12;
    const rad = (angle * Math.PI) / 180;
    const x = cx + Math.cos(rad) * radius;
    const y = cy + Math.sin(rad) * radius;
    leaves.push(`<ellipse cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" rx="14" ry="7" transform="rotate(${angle + 90} ${x.toFixed(2)} ${y.toFixed(2)})" fill="${fill}" opacity="${0.82 + index * 0.015}" />`);
  }
  for (let index = 0; index < 9; index += 1) {
    const angle = -40 + index * 12;
    const rad = (angle * Math.PI) / 180;
    const x = cx + Math.cos(rad) * radius;
    const y = cy + Math.sin(rad) * radius;
    leaves.push(`<ellipse cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" rx="14" ry="7" transform="rotate(${angle - 90} ${x.toFixed(2)} ${y.toFixed(2)})" fill="${fill}" opacity="${0.82 + index * 0.015}" />`);
  }
  return `<g>${leaves.join('')}</g>`;
}

function renderBoardShield({ cx = 540, cy = 420, width = 168, height = 190, fill = 'url(#ivoryPlate)' } = {}) {
  const half = width / 2;
  const top = cy - height / 2;
  const bottom = cy + height / 2;
  return `
    <g filter="url(#badgeShadow)">
      <path d="M ${cx - half} ${top + 8} H ${cx + half} V ${cy + 24} C ${cx + half} ${bottom - 10} ${cx} ${bottom} ${cx} ${bottom} C ${cx} ${bottom} ${cx - half} ${bottom - 10} ${cx - half} ${cy + 24} Z" fill="url(#metalGold)" />
      <path d="M ${cx - half + 14} ${top + 22} H ${cx + half - 14} V ${cy + 18} C ${cx + half - 14} ${bottom - 28} ${cx} ${bottom - 20} ${cx} ${bottom - 20} C ${cx} ${bottom - 20} ${cx - half + 14} ${bottom - 28} ${cx - half + 14} ${cy + 18} Z" fill="${fill}" />
    </g>
  `;
}

function renderBoardCrest({ cx = 540, cy = 390, logoHref, scale = 1 } = {}) {
  const shieldWidth = 170 * scale;
  const shieldHeight = 188 * scale;
  return `
    ${renderRadiantBurst(cx, cy + 10, 95 * scale, 250 * scale, 38)}
    ${renderBoardShield({ cx, cy: cy + 28 * scale, width: shieldWidth, height: shieldHeight })}
    ${renderLaurelPair({ cx, cy: cy + 62 * scale, radius: 156 * scale })}
    ${renderLogoMark({ logoHref, cx, cy: cy + 26 * scale, size: 112 * scale, ring: 'url(#metalGold)', fill: '#ffffff' })}
  `;
}

function generateStarPolygon(cx, cy, spikes, outerRadius, innerRadius) {
  let points = [];
  let rot = (Math.PI / 2) * 3;
  let step = Math.PI / spikes;
  for (let i = 0; i < spikes; i++) {
    points.push(`${cx + Math.cos(rot) * outerRadius},${cy + Math.sin(rot) * outerRadius}`);
    rot += step;
    points.push(`${cx + Math.cos(rot) * innerRadius},${cy + Math.sin(rot) * innerRadius}`);
    rot += step;
  }
  return points.join(' ');
}

function buildCommonBadgeData(certificate = {}, design) {
  const skill = String(certificate.skill || certificate.title || 'Verified Credential').trim();
  const badgeTitle = getBadgeDisplayName(skill, certificate.badgeTitle || certificate.label);
  
  const containerWidths = {
    'diamond-crest': 480,
    'starburst-seal': 480,
    'shield-ribbon': 520,
    'regal-laurel-seal': 520,
    'sovereign-red-medallion': 500,
    'laurel-emblem': 500,
    'flat-shield-banner': 720, // Expanded width
    'ornate-scroll-shield': 520,
    'round-crest': 480,
    'executive-shield': 580,
    'hex-medal': 720, // Expanded width
    'compass-coin': 500,
    'imperial-ornate-shield': 540,
    'baroque-royal-shield': 560,
    'citation-plaque': 600,
    'octagon-regalia': 560,
  };
  
  const width = containerWidths[design?.id] || 500;
  const targetLineLength = Math.max(14, Math.floor(width / 35));

  const titleLines = formatBadgeTitle(badgeTitle, 3, targetLineLength);
  const { fontSize, lineHeight, totalHeight } = buildTitleMetrics(titleLines, width);

  return {
    skill, badgeTitle, titleLines, titleFontSize: fontSize, titleLineHeight: lineHeight, titleTotalHeight: totalHeight,
    year: String(new Date(certificate.issuedAt || Date.now()).getFullYear()),
  };
}

// ------------------------- RENDERERS -------------------------

function renderLandscapeCard(data, palette, logoHref) {
  return `
    <g filter="url(#badgeShadow)">
      <rect x="120" y="232" width="840" height="616" rx="64" fill="url(#metalGold)" />
      <rect x="136" y="248" width="808" height="584" rx="52" fill="url(#royalNavy)" />
      <rect x="158" y="270" width="764" height="540" rx="40" fill="url(#royalField)" />
      <rect x="176" y="288" width="728" height="504" rx="30" fill="none" stroke="url(#metalGold)" stroke-width="5" />
    </g>
    ${renderBoardHeading(336, palette)}
    ${renderBoardCrest({ cx: 540, cy: 390, logoHref, scale: 0.88 })}
    ${renderTextLines(data.titleLines, { x: 540, centerY: 632, fill: palette.ink, fontSize: data.titleFontSize, lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif', letterSpacing: 0.6 })}
    <rect x="332" y="736" width="416" height="72" rx="36" fill="url(#metalGold)" />
    ${renderPrestigeText(`CLASS OF ${data.year}`, { y: 783, size: 28, fill: palette.primary, letterSpacing: 2.4 })}
  `;
}

function renderDiamondCrest(data, palette, logoHref) {
  // Upgraded: High-precision 3D bevels, sharp geometric ribbon, and polished glass enamel reflection
  return `
    <g filter="url(#badgeShadow)">
      <polygon points="540,100 940,500 540,900 140,500" fill="url(#metalGold)" />
      <polygon points="540,120 910,500 540,880 170,500" fill="#3A2A08" opacity="0.6" />
      <polygon points="540,135 895,500 540,865 185,500" fill="url(#metalGold)" />
      
      <polygon points="540,150 880,500 540,850 200,500" fill="${palette.primary}" />
      
      <polygon points="540,170 850,500 540,830 230,500" fill="none" stroke="url(#metalGold)" stroke-width="4" opacity="0.8" />
    </g>

    <g opacity="0.4">
      ${renderRadiantBurst(540, 340, 90, 280, 24, 'url(#metalGold)', 3)}
    </g>

    <polygon points="540,150 880,500 540,500 200,500" fill="#ffffff" opacity="0.06" />
    <polygon points="540,150 780,390 540,430 300,390" fill="#ffffff" opacity="0.04" />

    ${renderLogoMark({ logoHref, cx: 540, cy: 340, size: 160, ring: 'url(#metalGold)', fill: 'transparent', strokeWidth: 6 })}
    
    ${renderTextLines(data.titleLines, { x: 540, centerY: 580, fill: palette.ink, fontSize: Math.max(30, data.titleFontSize - 2), lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif', letterSpacing: 0.5 })}

    <g filter="url(#badgeShadow)">
      <polygon points="170,720 280,640 280,780" fill="#6A4D0F" />
      <polygon points="910,720 800,640 800,780" fill="#6A4D0F" />
      
      <polygon points="210,700 870,700 830,820 250,820" fill="url(#metalGold)" />
      
      <polygon points="230,720 850,720 815,800 265,800" fill="${palette.primary}" />
    </g>

    ${renderPrestigeText(`OFFICIAL REGISTRY ${data.year}`, { y: 772, size: 24, fill: 'url(#metalGold)', letterSpacing: 3, weight: 800 })}
  `;
}

function renderStarburstSeal(data, palette, logoHref) {
  const starPoints = generateStarPolygon(540, 540, 16, 440, 390);
  return `
    <g filter="url(#badgeShadow)">
      <polygon points="${starPoints}" fill="url(#metalSilver)" />
      <polygon points="${generateStarPolygon(540, 540, 16, 420, 370)}" fill="url(#royalField)" />
      <circle cx="540" cy="540" r="320" fill="${palette.primary}" />
      <circle cx="540" cy="540" r="300" fill="url(#royalNavy)" />
      <circle cx="540" cy="540" r="280" fill="none" stroke="url(#metalGold)" stroke-width="4" stroke-dasharray="10 10" />
    </g>
    ${renderRadiantBurst(540, 520, 108, 256, 44, 'rgba(216,178,91,0.28)', 2)}
    ${renderLogoMark({ logoHref, cx: 540, cy: 318, size: 146, ring: 'url(#metalGold)', fill: '#ffffff' })}
    ${renderBoardHeading(396, palette, 'CAREERSENSE ACADEMY')}
    ${renderTextLines(data.titleLines, { x: 540, centerY: 558, fill: palette.ink, fontSize: data.titleFontSize, lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif', letterSpacing: 0.5 })}
    ${renderPrestigeText(`YEAR ${data.year}`, { y: 742, size: 32, fill: 'url(#metalGold)', letterSpacing: 3 })}
  `;
}

function renderShieldRibbon(data, palette, logoHref) {
  // Upgraded: Heavy 3D beveled shield, sweeping curved 3D ribbon, and polished glass enamel reflection
  return `
    <g opacity="0.35">
      ${renderRadiantBurst(540, 400, 160, 460, 36, 'url(#metalGold)', 2.5)}
    </g>

    <g filter="url(#badgeShadow)">
      <path d="M 260 120 H 820 V 560 C 820 840 540 980 540 980 C 540 980 260 840 260 560 Z" fill="url(#metalGold)" />
      
      <path d="M 285 145 H 795 V 555 C 795 815 540 940 540 940 C 540 940 285 815 285 555 Z" fill="#3A2A08" opacity="0.7" />
      
      <path d="M 300 160 H 780 V 550 C 780 795 540 910 540 910 C 540 910 300 795 300 550 Z" fill="url(#metalGold)" />
      
      <path d="M 315 175 H 765 V 545 C 765 775 540 880 540 880 C 540 880 315 775 315 545 Z" fill="${palette.primary}" />
      
      <path d="M 335 195 H 745 V 535 C 745 745 540 840 540 840 C 540 840 335 745 335 535 Z" fill="none" stroke="url(#metalGold)" stroke-width="4" opacity="0.8" />
    </g>

    <path d="M 315 175 H 765 V 450 L 315 320 Z" fill="#ffffff" opacity="0.06" />
    <path d="M 315 175 H 540 V 880 C 540 880 315 775 315 545 Z" fill="#ffffff" opacity="0.03" />

    ${renderBoardCrest({ cx: 540, cy: 310, logoHref, scale: 0.85 })}
    
    ${renderTextLines(data.titleLines, { x: 540, centerY: 560, fill: '#ffffff', fontSize: Math.max(30, data.titleFontSize - 2), lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif', letterSpacing: 0.5 })}
    
    <g filter="url(#badgeShadow)">
      <path d="M 120 720 L 280 620 L 300 780 Z" fill="#4A360A" />
      <path d="M 960 720 L 800 620 L 780 780 Z" fill="#4A360A" />
      
      <path d="M 160 670 Q 540 760 920 670 L 880 810 Q 540 900 200 810 Z" fill="url(#metalGold)" />
      
      <path d="M 185 695 Q 540 775 895 695 L 865 785 Q 540 870 215 785 Z" fill="${palette.primary}" />
      
      <path d="M 205 715 Q 540 790 875 715 L 850 765 Q 540 845 230 765 Z" fill="none" stroke="url(#metalGold)" stroke-width="3" opacity="0.7" />
    </g>

    ${renderPrestigeText(`CLASS OF ${data.year}`, { y: 775, size: 28, fill: 'url(#metalGold)', letterSpacing: 4.5, weight: 900 })}
  `;
}

function renderRegalLaurelSeal(data, palette, logoHref) {
  // Upgraded: Heavy 3D concentric bezels, layered volumetric laurels, WIDENED ribbon banner, and CURVED typography
  return `
    <g filter="url(#badgeShadow)">
      <path d="M 380 650 L 260 1020 L 360 920 L 460 1020 L 440 650 Z" fill="url(#crimsonVelvet)" />
      <path d="M 380 650 L 260 1020 L 310 970 L 410 650 Z" fill="#ffffff" opacity="0.06" />
      <path d="M 700 650 L 620 1020 L 720 920 L 820 1020 L 760 650 Z" fill="url(#crimsonVelvet)" />
      <path d="M 700 650 L 620 1020 L 670 970 L 770 650 Z" fill="#ffffff" opacity="0.06" />
    </g>

    <g opacity="0.85">
      ${renderRadiantBurst(540, 540, 430, 490, 60, 'url(#metalGold)', 8)}
    </g>

    <g filter="url(#badgeShadow)">
      <circle cx="540" cy="540" r="440" fill="url(#metalGold)" />
      <circle cx="540" cy="540" r="425" fill="#3A2A08" opacity="0.75" />
      <circle cx="540" cy="540" r="410" fill="url(#metalGold)" />
      
      <circle cx="540" cy="540" r="390" fill="${palette.primary}" />
      
      <circle cx="540" cy="540" r="335" fill="url(#metalGold)" />
      <circle cx="540" cy="540" r="320" fill="${palette.primary}" />
      
      <circle cx="540" cy="540" r="305" fill="none" stroke="url(#metalGold)" stroke-width="4" opacity="0.9" />
      <circle cx="540" cy="540" r="290" fill="none" stroke="url(#metalGold)" stroke-width="2" stroke-dasharray="8 8" />
    </g>

    <g filter="url(#badgeShadow)">
      ${renderLaurelPair({ cx: 540, cy: 540, radius: 375, fill: '#6A4D0F' })}
      ${renderLaurelPair({ cx: 540, cy: 540, radius: 360, fill: 'url(#metalGold)' })}
    </g>

    <path d="M 220 540 A 320 320 0 0 1 860 540 Z" fill="#ffffff" opacity="0.05" />
    <path d="M 240 540 A 300 300 0 0 1 760 300 L 540 540 Z" fill="#ffffff" opacity="0.03" />

    ${renderLogoMark({ logoHref, cx: 540, cy: 350, size: 150, ring: 'url(#metalGold)', fill: '#ffffff', shadow: true })}
    
    ${renderBoardHeading(475, palette, 'ACADEMIC REGALIA')}
    
    ${renderTextLines(data.titleLines, { x: 540, centerY: 590, fill: '#ffffff', fontSize: Math.max(30, data.titleFontSize - 2), lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif', letterSpacing: 0.5 })}
    
    <g filter="url(#badgeShadow)">
      <path d="M 220 750 Q 540 880 860 750 L 810 850 Q 540 980 270 850 Z" fill="url(#metalGold)" />
      
      <path d="M 250 770 Q 540 895 830 770 L 780 835 Q 540 955 300 835 Z" fill="${palette.primary}" />
      
      <path d="M 270 785 Q 540 910 810 785" fill="none" stroke="url(#metalGold)" stroke-width="3" opacity="0.8" />
      
      <defs>
        <path id="yearCurveRegalSeal" d="M 260 815 Q 540 935 820 815" />
      </defs>
      
      <text fill="url(#metalGold)" font-family="Times New Roman, Georgia, serif" font-size="40" font-weight="900" letter-spacing="5">
        <textPath href="#yearCurveRegalSeal" startOffset="50%" text-anchor="middle">CLASS OF ${data.year}</textPath>
      </text>
    </g>
  `;
}

function renderSovereignRedMedallion(data, palette, logoHref) {
  // A master-crafted professional credential, shifting from 'velvet' to 'enameled excellence' with unique academic motifs.
  return `
    <defs>
      <linearGradient id="IITRedEnamel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4F0D15" />
        <stop offset="30%" stop-color="#801C27" />
        <stop offset="50%" stop-color="#B22A3A" />
        <stop offset="70%" stop-color="#801C27" />
        <stop offset="100%" stop-color="#4F0D15" />
      </linearGradient>

      <linearGradient id="IITPolishedGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#D9AC6D" />
        <stop offset="30%" stop-color="#FFF0CC" />
        <stop offset="50%" stop-color="#BA9054" />
        <stop offset="70%" stop-color="#FFF0CC" />
        <stop offset="100%" stop-color="#D9AC6D" />
      </linearGradient>
      
      <pattern id="GuillocheEtching" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="12" cy="12" r="11" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
        <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="0.2" />
      </pattern>
      
      <linearGradient id="velvetRibbonGloss" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(178,42,58,0.35)" />
        <stop offset="100%" stop-color="rgba(178,42,58,0)" />
      </linearGradient>
    </defs>

    <g filter="url(#badgeShadow)">
      <path d="M 380 250 L 220 100 Q 280 180 200 240 L 320 290 Z" fill="#801C27" />
      <path d="M 380 250 L 220 100 Q 280 180 200 240 L 320 290 Z" fill="url(#velvetRibbonGloss)" />
      <path d="M 700 250 L 860 100 Q 800 180 880 240 L 760 290 Z" fill="#801C27" />
      <path d="M 700 250 L 860 100 Q 800 180 880 240 L 760 290 Z" fill="url(#velvetRibbonGloss)" />
      
      <path d="M 540 50 Q 580 150 540 250 Q 500 150 540 50 Z" fill="url(#IITPolishedGold)" />
      <path d="M 540 70 Q 555 150 540 220 Q 525 150 540 70 Z" fill="#FFF8E1" stroke="#BA9054" stroke-width="2" />
      
      <path d="M 380 830 L 220 980 Q 280 900 200 840 L 320 790 Z" fill="#801C27" />
      <path d="M 380 830 L 220 980 Q 280 900 200 840 L 320 790 Z" fill="url(#velvetRibbonGloss)" />
      <path d="M 700 830 L 860 980 Q 800 900 880 840 L 760 790 Z" fill="#801C27" />
      <path d="M 700 830 L 860 980 Q 800 900 880 840 L 760 790 Z" fill="url(#velvetRibbonGloss)" />
      
      <path d="M 540 1030 Q 580 930 540 830 Q 500 930 540 1030 Z" fill="url(#IITPolishedGold)" />
      <path d="M 540 1010 Q 555 930 540 860 Q 525 930 540 1010 Z" fill="#FFF8E1" stroke="#BA9054" stroke-width="2" />
    </g>

    <g filter="url(#badgeShadow)" opacity="0.95">
      ${renderLaurelPair({ cx: 540, cy: 540, radius: 400, fill: '#613E16' })}
      ${renderLaurelPair({ cx: 540, cy: 540, radius: 388, fill: 'url(#IITPolishedGold)' })}
      ${renderLaurelPair({ cx: 540, cy: 540, radius: 376, fill: '#FFF8E1' })}
      
      <path d="M 540 140 Q 565 180 540 220" fill="none" stroke="url(#IITPolishedGold)" stroke-width="3" />
      <circle cx="540" cy="180" r="8" fill="url(#IITPolishedGold)" /> 
    </g>

    <g filter="url(#badgeShadow)">
      <circle cx="540" cy="540" r="350" fill="url(#IITPolishedGold)" />
      <circle cx="540" cy="540" r="342" fill="none" stroke="#BA9054" stroke-width="8" opacity="0.6" stroke-dasharray="16 8" />
      
      <circle cx="540" cy="540" r="330" fill="url(#IITPolishedGold)" />
      <circle cx="540" cy="540" r="318" fill="url(#IITPolishedGold)" />
      <circle cx="540" cy="540" r="306" fill="none" stroke="#ffe399" stroke-width="1.5" opacity="0.75"/>

      <circle cx="540" cy="540" r="300" fill="url(#IITRedEnamel)" />
      
      <path d="M 540 240 C 475 240 375 285 320 340 L 320 740 Q 540 840 760 740 L 760 340 C 705 285 605 240 540 240 Z" fill="black" opacity="0.12" mix-blend-mode="multiply" />
      
      <circle cx="540" cy="540" r="300" fill="url(#GuillocheEtching)" />
      
      <path d="M 280 440 C 340 230 740 230 800 440 C 700 350 380 350 280 440 Z" fill="#ffffff" opacity="0.4" />
      <path d="M 320 680 C 400 850 680 850 760 680 C 680 780 400 780 320 680 Z" fill="#ff708a" opacity="0.15" />
    </g>

    ${renderLogoMark({ logoHref, cx: 540, cy: 370, size: 140, ring: 'url(#IITPolishedGold)', fill: 'transparent', strokeWidth: 5 })}
    
    ${renderBoardHeading(480, palette, 'ADVANCED ACADEMIC CREDENTIAL', {
      fontWeight: 700,
      fontFamily: "'Cinzel', 'Trajan Pro', 'Baskerville', serif",
      letterSpacing: 4.5,
      fontSize: 26,
      fill: 'rgba(255,255,255,0.92)'
    })}
    
    ${renderTextLines(data.titleLines, { 
      x: 540, 
      centerY: 590, 
      fill: '#ffffff', 
      fontSize: Math.max(28, data.titleFontSize - 6), 
      lineHeight: data.titleLineHeight, 
      fontWeight: 700, 
      fontFamily: "'Trajan Pro', 'Baskerville', 'Times New Roman', serif" 
    })}
    
    <defs>
      <path id="medallionCurve" d="M 320 730 Q 540 850 760 730" />
    </defs>
    <text fill="url(#IITPolishedGold)" font-family="'Cinzel', 'Trajan Pro', 'Baskerville', serif" font-size="34" font-weight="700" letter-spacing="6.5">
      <textPath href="#medallionCurve" startOffset="50%" text-anchor="middle">ESTABLISHED ${data.year}</textPath>
    </text>
  `;
}

function renderClassicRing(data, palette, logoHref) {
  return `
    <g filter="url(#badgeShadow)">
      <circle cx="540" cy="540" r="420" fill="url(#metalGold)" />
      <circle cx="540" cy="540" r="390" fill="url(#royalField)" />
      <circle cx="540" cy="540" r="366" fill="${palette.primary}" />
      <circle cx="540" cy="540" r="354" fill="none" stroke="url(#metalGold)" stroke-width="6" />
    </g>
    <circle cx="540" cy="540" r="314" fill="none" stroke="url(#metalGold)" stroke-width="2.5" opacity="0.7" />
    ${renderLaurelPair({ cx: 540, cy: 590, radius: 238 })}
    ${renderBoardHeading(360, palette)}
    ${renderLogoMark({ logoHref, cx: 540, cy: 314, size: 154, ring: 'url(#metalGold)', fill: 'transparent', strokeWidth: 6 })}
    ${renderTextLines(data.titleLines, { x: 540, centerY: 566, fill: palette.ink, fontSize: data.titleFontSize, lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif' })}
    ${renderPrestigeText(`HONOURS ${data.year}`, { y: 804, size: 34, fill: 'url(#metalGold)', letterSpacing: 3.4 })}
  `;
}

function renderLaurelEmblem(data, palette, logoHref) {
  // Upgraded: Volumetric outer laurels, heavy 3D gold bezel, glass enamel reflection, and curved typography ribbon
  return `
    <g opacity="0.6">
      ${renderRadiantBurst(540, 500, 360, 480, 48, 'url(#metalGold)', 4)}
    </g>

    <g filter="url(#badgeShadow)">
      ${renderLaurelPair({ cx: 540, cy: 500, radius: 410, fill: '#6A4D0F' })}
      ${renderLaurelPair({ cx: 540, cy: 500, radius: 395, fill: 'url(#metalGold)' })}
    </g>

    <g filter="url(#badgeShadow)">
      <circle cx="540" cy="500" r="370" fill="url(#metalGold)" />
      <circle cx="540" cy="500" r="355" fill="#3A2A08" opacity="0.75" />
      <circle cx="540" cy="500" r="340" fill="url(#metalGold)" />
      
      <circle cx="540" cy="500" r="325" fill="${palette.primary}" />
      
      <circle cx="540" cy="500" r="305" fill="none" stroke="url(#metalGold)" stroke-width="4" opacity="0.9" />
      <circle cx="540" cy="500" r="290" fill="none" stroke="url(#metalGold)" stroke-width="2" stroke-dasharray="8 8" />
    </g>

    <path d="M 215 500 A 325 325 0 0 1 865 500 Z" fill="#ffffff" opacity="0.06" />
    <path d="M 245 500 A 295 295 0 0 1 835 500 L 540 500 Z" fill="#ffffff" opacity="0.03" />

    ${renderLogoMark({ logoHref, cx: 540, cy: 300, size: 140, ring: 'url(#metalGold)', fill: 'transparent', strokeWidth: 4 })}
    
    ${renderBoardHeading(400, palette, 'EXECUTIVE BOARD')}
    
    ${renderTextLines(data.titleLines, { x: 540, centerY: 520, fill: '#ffffff', fontSize: Math.max(28, data.titleFontSize - 2), lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif', letterSpacing: 0.5 })}
    
    ${renderPrestigeText('CERTIFIED ACHIEVEMENT', { y: 660, size: 20, fill: 'url(#metalGold)', letterSpacing: 3.5, weight: 800 })}
    
    <g filter="url(#badgeShadow)">
      <path d="M 220 730 Q 540 850 860 730 L 810 830 Q 540 950 270 830 Z" fill="url(#metalGold)" />
      
      <path d="M 245 750 Q 540 865 835 750 L 785 815 Q 540 925 295 815 Z" fill="${palette.primary}" />
      
      <path d="M 265 765 Q 540 880 815 765" fill="none" stroke="url(#metalGold)" stroke-width="3" opacity="0.8" />
      
      <defs>
        <path id="laurelRibbonCurve" d="M 260 795 Q 540 910 820 795" />
      </defs>
      
      <text fill="url(#metalGold)" font-family="Times New Roman, Georgia, serif" font-size="32" font-weight="900" letter-spacing="4">
        <textPath href="#laurelRibbonCurve" startOffset="50%" text-anchor="middle">ISSUED ${data.year}</textPath>
      </text>
    </g>
  `;
}

function renderFlatShieldBanner(data, palette, logoHref) {
  // Upgraded: Heavy 3D beveled flat-top shield, deep enamel reflection, and a grand sweeping 3D curved sash
  return `
    <g opacity="0.4">
      ${renderRadiantBurst(540, 450, 150, 480, 48, 'url(#metalGold)', 2)}
    </g>

    <g filter="url(#badgeShadow)">
      <path d="M 240 120 H 840 V 580 C 840 860 540 1000 540 1000 C 540 1000 240 860 240 580 Z" fill="url(#metalGold)" />
      
      <path d="M 265 145 H 815 V 570 C 815 830 540 960 540 960 C 540 960 265 830 265 570 Z" fill="#3A2A08" opacity="0.75" />
      
      <path d="M 280 160 H 800 V 560 C 800 810 540 930 540 930 C 540 930 280 810 280 560 Z" fill="url(#metalGold)" />
      
      <path d="M 295 175 H 785 V 550 C 785 790 540 900 540 900 C 540 900 295 790 295 550 Z" fill="${palette.primary}" />
      
      <path d="M 315 195 H 765 V 540 C 765 765 540 865 540 865 C 540 865 315 765 315 540 Z" fill="none" stroke="url(#metalGold)" stroke-width="4" opacity="0.9" />
    </g>

    <path d="M 295 175 H 785 V 420 L 295 280 Z" fill="#ffffff" opacity="0.06" />
    <path d="M 295 175 H 540 V 900 C 540 900 295 790 295 550 Z" fill="#ffffff" opacity="0.03" />

    ${renderLogoMark({ logoHref, cx: 540, cy: 300, size: 140, ring: 'url(#metalGold)', fill: '#ffffff', shadow: true })}
    
    ${renderBoardHeading(430, palette, 'OFFICIAL REGISTRY')}
    
    ${renderTextLines(data.titleLines, { x: 540, centerY: 550, fill: '#ffffff', fontSize: Math.max(32, data.titleFontSize - 2), lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif', letterSpacing: 0.5 })}

    <g filter="url(#badgeShadow)">
      <path d="M 100 680 L 260 590 L 280 750 Z" fill="#4A360A" />
      <path d="M 980 680 L 820 590 L 800 750 Z" fill="#4A360A" />
      
      <path d="M 140 660 Q 540 760 940 660 L 900 810 Q 540 910 180 810 Z" fill="url(#metalGold)" />
      
      <path d="M 165 685 Q 540 775 915 685 L 875 785 Q 540 885 205 785 Z" fill="${palette.primary}" />
      
      <path d="M 190 705 Q 540 790 890 705" fill="none" stroke="url(#metalGold)" stroke-width="3" opacity="0.8" />
      
      <defs>
        <path id="flatShieldSashCurve" d="M 190 755 Q 540 855 890 755" />
      </defs>
      
      <text fill="url(#metalGold)" font-family="Times New Roman, Georgia, serif" font-size="28" font-weight="900" letter-spacing="4">
        <textPath href="#flatShieldSashCurve" startOffset="50%" text-anchor="middle">BOARD VERIFIED • ${data.year}</textPath>
      </text>
    </g>
  `;
}

function renderOrnateScrollShield(data, palette, logoHref) {
  // Upgraded: Stepped 3D gold rim, polished ivory ceramic reflection, subtle background filigree, and WIDENED curved ribbon with textPath mapping
  return `
    <g fill="none" stroke="url(#metalGold)" stroke-linecap="round" filter="url(#badgeShadow)">
      <path d="M 540 100 C 300 0 100 250 200 450 C 250 550 150 700 100 600" stroke-width="16" opacity="0.6"/>
      <path d="M 540 100 C 780 0 980 250 880 450 C 830 550 930 700 980 600" stroke-width="16" opacity="0.6"/>
    </g>

    <g filter="url(#badgeShadow)">
      <path d="M 240 220 C 340 180 440 140 540 80 C 640 140 740 180 840 220 V 580 C 840 820 640 980 540 1020 C 440 980 240 820 240 580 Z" fill="url(#metalGold)" />
      
      <path d="M 265 235 C 355 195 450 155 540 105 C 630 155 725 195 815 235 V 570 C 815 790 630 930 540 970 C 450 930 265 790 265 570 Z" fill="#3A2A08" opacity="0.6" />
      
      <path d="M 280 250 C 360 220 450 180 540 130 C 630 180 720 220 800 250 V 560 C 800 770 630 900 540 940 C 450 900 280 770 280 560 Z" fill="url(#ivoryPlate)" />
      
      <path d="M 300 265 C 380 235 460 200 540 155 C 620 200 700 235 780 265 V 550 C 780 740 620 870 540 910 C 460 870 300 740 300 550 Z" fill="none" stroke="url(#metalGold)" stroke-width="4" opacity="0.8"/>
    </g>

    <path d="M 280 250 C 360 220 450 180 540 130 C 630 180 720 220 800 250 V 380 L 280 280 Z" fill="#ffffff" opacity="0.4" />
    <path d="M 280 250 C 360 220 450 180 540 130 V 940 C 450 900 280 770 280 560 Z" fill="#ffffff" opacity="0.25" />

    ${renderLogoMark({ logoHref, cx: 540, cy: 330, size: 150, ring: 'url(#metalGold)', fill: 'transparent', strokeWidth: 4 })}
    
    ${renderBoardHeading(440, palette, 'OFFICIAL REGISTRY')}
    
    ${renderTextLines(data.titleLines, { x: 540, centerY: 550, fill: palette.primary, fontSize: Math.max(30, data.titleFontSize - 2), lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif' })}

    <g filter="url(#badgeShadow)">
      <path d="M 100 700 L 280 620 L 280 780 Z" fill="#4A360A" />
      <path d="M 980 700 L 800 620 L 800 780 Z" fill="#4A360A" />
      
      <path d="M 140 680 Q 540 820 940 680 L 890 830 Q 540 970 190 830 Z" fill="url(#metalGold)" />
      
      <path d="M 165 705 Q 540 840 915 705 L 870 805 Q 540 935 210 805 Z" fill="url(#champagneField)" />
      
      <path d="M 185 720 Q 540 855 895 720" fill="none" stroke="url(#metalGold)" stroke-width="3" opacity="0.8" />
      
      <defs>
        <path id="scrollShieldRibbonCurve" d="M 190 775 Q 540 905 890 775" />
      </defs>
      
      <text fill="${palette.primary}" font-family="Times New Roman, Georgia, serif" font-size="34" font-weight="900" letter-spacing="4">
        <textPath href="#scrollShieldRibbonCurve" startOffset="50%" text-anchor="middle">CLASS OF ${data.year}</textPath>
      </text>
    </g>
  `;
}

function renderRoundCrest(data, palette, logoHref) {
  // Upgraded: Heavy 3D platinum/silver bevels, glass enamel reflection, and a sweeping curved 3D silver sash
  return `
    <g opacity="0.4">
      ${renderRadiantBurst(540, 480, 160, 450, 40, 'url(#metalSilver)', 2.5)}
    </g>

    <g filter="url(#badgeShadow)">
      <path d="M 240 130 C 540 50 540 50 840 130 V 600 C 840 880 540 1020 540 1020 C 540 1020 240 880 240 600 Z" fill="url(#metalSilver)" />
      
      <path d="M 265 155 C 540 85 540 85 815 155 V 590 C 815 850 540 970 540 970 C 540 970 265 850 265 590 Z" fill="#1A202C" opacity="0.65" />
      
      <path d="M 280 170 C 540 100 540 100 800 170 V 580 C 800 830 540 940 540 940 C 540 940 280 830 280 580 Z" fill="url(#metalSilver)" />
      
      <path d="M 295 185 C 540 115 540 115 785 185 V 570 C 785 810 540 910 540 910 C 540 910 295 810 295 570 Z" fill="${palette.primary}" />
      
      <path d="M 315 205 C 540 145 540 145 765 205 V 560 C 765 780 540 870 540 870 C 540 870 315 780 315 560 Z" fill="none" stroke="url(#metalSilver)" stroke-width="4" opacity="0.9" />
    </g>

    <path d="M 295 185 C 540 115 540 115 785 185 V 450 C 540 380 340 450 295 570 Z" fill="#ffffff" opacity="0.08" />
    <path d="M 295 185 C 540 115 540 115 540 115 V 910 C 540 910 295 810 295 570 Z" fill="#ffffff" opacity="0.04" />

    ${renderLogoMark({ logoHref, cx: 540, cy: 320, size: 150, ring: 'url(#metalSilver)', fill: '#ffffff', shadow: true })}
    
    ${renderBoardHeading(440, palette, 'BOARD OF HONOURS')}
    
    ${renderTextLines(data.titleLines, { x: 540, centerY: 560, fill: '#ffffff', fontSize: Math.max(32, data.titleFontSize - 2), lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif', letterSpacing: 0.5 })}

    <g filter="url(#badgeShadow)">
      <path d="M 120 720 L 260 630 L 280 770 Z" fill="#2A3441" />
      <path d="M 960 720 L 820 630 L 800 770 Z" fill="#2A3441" />
      
      <path d="M 160 700 Q 540 830 920 700 L 880 840 Q 540 960 200 840 Z" fill="url(#metalSilver)" />
      
      <path d="M 185 725 Q 540 845 895 725 L 860 815 Q 540 930 220 815 Z" fill="${palette.primary}" />
      
      <path d="M 205 745 Q 540 860 875 745" fill="none" stroke="url(#metalSilver)" stroke-width="3" opacity="0.8" />
      
      <defs>
        <path id="roundCrestRibbonCurve" d="M 210 790 Q 540 910 870 790" />
      </defs>
      
      <text fill="url(#metalSilver)" font-family="Times New Roman, Georgia, serif" font-size="30" font-weight="900" letter-spacing="4">
        <textPath href="#roundCrestRibbonCurve" startOffset="50%" text-anchor="middle">CLASS OF ${data.year}</textPath>
      </text>
    </g>
  `;
}

function renderExecutiveShield(data, palette, logoHref) {
  // Upgraded: Heavy 3D stepped gold bezel, sweeping curved ribbon, polished enamel, and dynamic curved typography
  return `
    <g opacity="0.45">
      ${renderRadiantBurst(540, 480, 180, 520, 54, 'url(#metalGold)', 3)}
    </g>

    <g filter="url(#badgeShadow)">
      <path d="M 200 140 H 880 V 580 C 880 850 540 1020 540 1020 C 540 1020 200 850 200 580 Z" fill="url(#metalGold)" />
      
      <path d="M 225 165 H 855 V 570 C 855 820 540 980 540 980 C 540 980 225 820 225 570 Z" fill="#3A2A08" opacity="0.75" />
      
      <path d="M 240 180 H 840 V 560 C 840 800 540 950 540 950 C 540 950 240 800 240 560 Z" fill="url(#metalGold)" />
      
      <path d="M 255 195 H 825 V 550 C 825 780 540 920 540 920 C 540 920 255 780 255 550 Z" fill="${palette.primary}" />
      
      <path d="M 275 215 H 805 V 540 C 805 760 540 890 540 890 C 540 890 275 760 275 540 Z" fill="none" stroke="url(#metalGold)" stroke-width="4" opacity="0.9" />
    </g>

    <path d="M 255 195 H 825 V 450 L 255 250 Z" fill="#ffffff" opacity="0.06" />
    <path d="M 255 195 H 540 V 920 C 540 920 255 780 255 550 Z" fill="#ffffff" opacity="0.03" />

    ${renderBoardCrest({ cx: 540, cy: 330, logoHref, scale: 0.90 })}
    
    ${renderBoardHeading(470, palette, 'EXECUTIVE CREDENTIAL')}
    ${renderTextLines(data.titleLines, { x: 540, centerY: 580, fill: '#ffffff', fontSize: Math.max(32, data.titleFontSize - 2), lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif', letterSpacing: 0.5 })}

    <g filter="url(#badgeShadow)">
      <path d="M 100 690 L 260 600 L 280 760 Z" fill="#4A360A" />
      <path d="M 980 690 L 820 600 L 800 760 Z" fill="#4A360A" />
      
      <path d="M 140 670 Q 540 800 940 670 L 900 820 Q 540 940 180 820 Z" fill="url(#metalGold)" />
      
      <path d="M 165 695 Q 540 820 915 695 L 875 795 Q 540 910 205 795 Z" fill="${palette.primary}" />
      
      <path d="M 185 715 Q 540 835 895 715" fill="none" stroke="url(#metalGold)" stroke-width="3" opacity="0.8" />
      
      <defs>
        <path id="execShieldSashCurve" d="M 185 765 Q 540 885 895 765" />
      </defs>
      
      <text fill="url(#metalGold)" font-family="Times New Roman, Georgia, serif" font-size="30" font-weight="900" letter-spacing="4">
        <textPath href="#execShieldSashCurve" startOffset="50%" text-anchor="middle">EXECUTIVE CLASS OF ${data.year}</textPath>
      </text>
    </g>
  `;
}

function renderHexMedal(data, palette, logoHref) {
  return `
    <g filter="url(#badgeShadow)">
      <polygon points="540,100 880,300 880,780 540,980 200,780 200,300" fill="url(#metalGold)" />
      <polygon points="540,120 855,305 855,775 540,960 225,775 225,305" fill="url(#royalField)" />
      <polygon points="540,135 840,315 840,765 540,945 240,765 240,315" fill="${palette.primary}" />
    </g>
    
    ${renderBoardCrest({ cx: 540, cy: 335, logoHref, scale: 0.82 })}
    
    <g id="academic-banner">
      <polygon points="120,600 240,540 240,650" fill="url(#metalGold)" opacity="0.7" />
      <polygon points="960,600 840,540 840,650" fill="url(#metalGold)" opacity="0.7" />
      
      <polygon points="160,520 920,520 880,670 200,670" fill="url(#metalGold)" filter="url(#badgeShadow)" />
      <polygon points="180,535 900,535 865,655 215,655" fill="${palette.primary}" />
    </g>
    
    ${renderTextLines(data.titleLines, { 
      x: 540, 
      centerY: 595, 
      fill: palette.ink, 
      fontSize: data.titleFontSize, 
      lineHeight: data.titleLineHeight, 
      fontWeight: 700, /* 700 (Bold) is much cleaner than 900 (Black) for serifs */
      fontFamily: "'Cinzel', 'Playfair Display', 'Times New Roman', Georgia, serif" 
    })}
    
    ${renderPrestigeText(`✦ EST. ${data.year} ✦`, { 
      y: 830, 
      size: 26, 
      fill: 'url(#metalGold)', 
      letterSpacing: 4.0 
    })}
  `;
}

function renderCompassCoin(data, palette, logoHref) {
  return `
    <g filter="url(#badgeShadow)">
      <circle cx="540" cy="540" r="420" fill="url(#metalGold)" />
      <circle cx="540" cy="540" r="390" fill="url(#royalField)" />
      <circle cx="540" cy="540" r="366" fill="${palette.primary}" />
      <circle cx="540" cy="540" r="348" fill="none" stroke="url(#metalGold)" stroke-width="6" stroke-dasharray="16 12" />
    </g>
    ${renderRadiantBurst(540, 520, 132, 302, 24, 'rgba(216,178,91,0.24)', 2.4)}
    <polygon points="540,392 576,504 694,504 598,574 634,686 540,618 446,686 482,574 386,504 504,504" fill="url(#metalGold)" opacity="0.18" />
    ${renderLogoMark({ logoHref, cx: 540, cy: 282, size: 166, ring: 'url(#metalGold)', fill: 'transparent', strokeWidth: 6 })}
    ${renderBoardHeading(374, palette, 'SENATE VERIFIED')}
    ${renderTextLines(data.titleLines, { x: 540, centerY: 572, fill: palette.ink, fontSize: data.titleFontSize, lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif' })}
    ${renderPrestigeText(data.year, { y: 810, size: 42, fill: 'url(#metalGold)', letterSpacing: 5.2 })}
  `;
}

function renderImperialOrnateShield(data, palette, logoHref) {
  return `
    ${renderRadiantBurst(540, 540, 200, 520, 64, 'rgba(216,178,91,0.2)', 3)}
    
    <g filter="url(#badgeShadow)">
      <path d="M 200 160 C 380 120 480 80 540 20 C 600 80 700 120 880 160 L 840 640 C 800 880 620 1000 540 1040 C 460 1000 280 880 240 640 Z" fill="url(#metalGold)" />
      
      <path d="M 225 175 C 395 140 485 100 540 45 C 595 100 685 140 855 175 L 818 633 C 778 845 612 958 540 1000 C 468 958 302 845 262 633 Z" fill="url(#royalField)" />
      
      <path d="M 540 45 C 485 100 395 140 225 175 L 262 633 C 302 845 468 958 540 1000 Z" fill="black" opacity="0.12" mix-blend-mode="multiply" />
      
      <path d="M 245 190 C 405 155 490 120 540 70 C 590 120 675 155 835 190 L 798 620 C 760 815 605 925 540 965 C 475 925 320 815 282 620 Z" fill="none" stroke="url(#metalGold)" stroke-width="4" opacity="0.85"/>
      <path d="M 265 205 C 415 175 495 145 540 100 C 585 145 665 175 815 205 L 780 605 C 745 785 600 890 540 930 C 480 890 335 785 300 605 Z" fill="none" stroke="url(#metalGold)" stroke-width="1.5" opacity="0.4" stroke-dasharray="8 4" />
    </g>

    <g stroke="url(#metalGold)" stroke-width="2" fill="none" opacity="0.6">
      <path d="M 310 195 Q 290 220 320 240" />
      <path d="M 770 195 Q 790 220 760 240" />
    </g>

    ${renderLaurelPair({ cx: 540, cy: 730, radius: 320, fill: 'url(#metalGold)', opacity: 0.28 })}
    ${renderLogoMark({ logoHref, cx: 540, cy: 310, size: 175, ring: 'url(#metalGold)', fill: 'transparent', strokeWidth: 4 })}
    
    <g opacity="0.9">
      <path d="M 340 470 L 540 467 L 740 470 L 540 473 Z" fill="url(#metalGold)" />
      <circle cx="540" cy="470" r="5" fill="url(#metalGold)" />
      <circle cx="510" cy="470" r="2.5" fill="url(#metalGold)" />
      <circle cx="570" cy="470" r="2.5" fill="url(#metalGold)" />
    </g>
    
    ${renderTextLines(data.titleLines, { 
      x: 540, 
      centerY: 585, 
      fill: 'url(#metalGold)', 
      fontSize: data.titleFontSize, 
      lineHeight: data.titleLineHeight, 
      fontWeight: 700, 
      fontFamily: "'Cinzel', 'Trajan Pro', 'Baskerville', 'Times New Roman', serif" 
    })}
    
    ${renderPrestigeText(`✦ ${data.year} ✦`, { 
      y: 845, 
      size: 24, 
      fill: 'url(#metalGold)', 
      letterSpacing: 5.5,
      opacity: 0.95
    })}
  `;
}

function renderBaroqueRoyalShield(data, palette, logoHref) {
  return `
    <g filter="url(#badgeShadow)" fill="none" stroke-linecap="round">
      <path d="M 540 180 C 400 80 200 120 160 300 C 120 480 280 600 240 750 C 220 820 150 820 120 780" stroke="url(#metalGold)" stroke-width="24" />
      <path d="M 540 180 C 680 80 880 120 920 300 C 960 480 800 600 840 750 C 860 820 930 820 960 780" stroke="url(#metalGold)" stroke-width="24" />
      
      <path d="M 280 320 C 150 250 80 400 180 500 C 260 580 200 700 320 850" stroke="#FDF3B7" stroke-width="12" opacity="0.9" />
      <path d="M 800 320 C 930 250 1000 400 900 500 C 820 580 880 700 760 850" stroke="#FDF3B7" stroke-width="12" opacity="0.9" />
      
      <path d="M 320 850 C 400 980 480 1020 540 980 C 600 1020 680 980 760 850" stroke="url(#metalGold)" stroke-width="20" />
      
      <path d="M 220 400 Q 140 450 200 520 Q 250 560 220 620" stroke="#6A4D0F" stroke-width="16" />
      <path d="M 860 400 Q 940 450 880 520 Q 830 560 860 620" stroke="#6A4D0F" stroke-width="16" />
    </g>

    <g filter="url(#badgeShadow)">
      <path d="M 540 80 L 580 160 L 650 120 L 610 200 C 580 230 500 230 470 200 L 430 120 L 500 160 Z" fill="url(#metalGold)" />
      <circle cx="540" cy="65" r="14" fill="#FDF3B7" />
      <circle cx="420" cy="110" r="10" fill="#FDF3B7" />
      <circle cx="660" cy="110" r="10" fill="#FDF3B7" />
      <path d="M 480 200 Q 540 240 600 200 Z" fill="#6A4D0F" />
    </g>

    <g filter="url(#badgeShadow)">
      <path d="M 280 280 C 380 280 480 220 540 180 C 600 220 700 280 800 280 V 580 C 800 820 640 940 540 980 C 440 940 280 820 280 580 Z" fill="#2A220F" />
      <path d="M 295 295 C 385 295 480 240 540 205 C 600 240 695 295 785 295 V 570 C 785 790 630 900 540 945 C 450 900 295 790 295 570 Z" fill="url(#metalGold)" />
      <path d="M 310 310 C 390 310 475 260 540 230 C 605 260 690 310 770 310 V 560 C 770 760 620 870 540 910 C 460 870 310 760 310 560 Z" fill="#FDF3B7" />
      
      <path d="M 320 320 C 400 320 480 270 540 240 C 600 270 680 320 760 320 V 555 C 760 745 615 850 540 890 C 465 850 320 745 320 555 Z" fill="url(#obsidianGloss)" />
      
      <path d="M 335 335 C 410 335 485 290 540 265 C 595 290 670 335 745 335 V 545 C 745 720 610 815 540 855 C 470 815 335 720 335 545 Z" fill="none" stroke="url(#metalGold)" stroke-width="3" opacity="0.85" />

      <path d="M 320 320 C 400 320 480 270 540 240 L 760 480 C 760 650 615 780 540 820 Z" fill="#ffffff" opacity="0.05" />
      <path d="M 320 380 L 600 700 C 580 730 560 750 540 770 C 465 730 320 625 320 450 Z" fill="#ffffff" opacity="0.02" />
    </g>

    ${renderLogoMark({ logoHref, cx: 540, cy: 395, size: 155, ring: 'url(#metalGold)', fill: 'transparent', strokeWidth: 4 })}
    
    ${renderTextLines(data.titleLines, { 
      x: 540, 
      centerY: 605, 
      fill: 'url(#metalGold)', 
      fontSize: Math.max(28, data.titleFontSize - 4), 
      lineHeight: data.titleLineHeight, 
      fontWeight: 700, /* Lowered from 900 for premium legibility on dark glass */
      fontFamily: "'Cinzel', 'Trajan Pro', 'Baskerville', 'Times New Roman', serif" 
    })}
    
    <g filter="url(#badgeShadow)">
      <path d="M 380 750 Q 540 785 700 750 L 680 795 Q 540 830 400 795 Z" fill="url(#metalGold)" />
      <path d="M 385 755 Q 540 788 695 755 L 675 790 Q 540 823 405 790 Z" fill="#1C1810" />
    </g>

    ${renderPrestigeText(`✦ EST. ${data.year} ✦`, { 
      y: 785, 
      size: 22, 
      fill: 'url(#metalGold)', 
      letterSpacing: 5.5, 
      weight: 700 
    })}
  `;
}

function renderOctagonRegalia(data, palette, logoHref) {
  return `
    <g filter="url(#badgeShadow)">
      <polygon points="340,120 740,120 920,300 920,700 740,880 340,880 160,700 160,300" fill="url(#metalGold)" />
      <polygon points="364,150 716,150 890,324 890,676 716,850 364,850 190,676 190,324" fill="url(#royalField)" />
      <polygon points="390,178 690,178 862,350 862,650 690,822 390,822 218,650 218,350" fill="${palette.primary}" />
      
      <polygon points="540,178 390,178 218,350 218,650 390,822 540,822" fill="black" opacity="0.10" mix-blend-mode="multiply" />
      
      <polygon points="405,193 675,193 842,360 842,640 675,807 405,807 238,640 238,360" fill="none" stroke="url(#metalGold)" stroke-width="1.5" opacity="0.55" stroke-dasharray="6 3" />
    </g>
    
    ${renderBoardHeading(318, palette, 'H')}
    
    ${renderBoardCrest({ cx: 540, cy: 356, logoHref, scale: 0.76 })}
    
    ${renderTextLines(data.titleLines, { 
      x: 540, 
      centerY: 604, 
      fill: palette.ink, 
      fontSize: data.titleFontSize, 
      lineHeight: data.titleLineHeight, 
      fontWeight: 700, /* Dropped from 900 for crisp, high-end legibility */
      fontFamily: "'Cinzel', 'Trajan Pro', 'Baskerville', 'Times New Roman', serif" 
    })}
    
    ${renderPrestigeText(`✦ EST. ${data.year} ✦`, { 
      y: 780, 
      size: 24, 
      fill: 'url(#metalGold)', 
      letterSpacing: 5.0 
    })}
  `;
}

function renderCrownCartouche(data, palette, logoHref) {
  return `
    <g filter="url(#badgeShadow)">
      <path d="M 230 224 C 230 170 274 126 328 126 H 752 C 806 126 850 170 850 224 V 748 C 850 816 794 872 726 872 H 354 C 286 872 230 816 230 748 Z" fill="url(#metalGold)" />
      <path d="M 258 250 C 258 202 296 164 344 164 H 736 C 784 164 822 202 822 250 V 730 C 822 790 774 838 714 838 H 366 C 306 838 258 790 258 730 Z" fill="url(#royalField)" />
      <path d="M 290 282 C 290 240 324 206 366 206 H 714 C 756 206 790 240 790 282 V 708 C 790 758 750 798 700 798 H 380 C 330 798 290 758 290 708 Z" fill="${palette.primary}" />
    </g>
    <path d="M 432 146 L 486 112 L 540 156 L 594 112 L 648 146 L 626 186 H 454 Z" fill="url(#metalGold)" />
    ${renderBoardHeading(350, palette, 'ROYAL CREDENTIAL')}
    ${renderLogoMark({ logoHref, cx: 540, cy: 288, size: 150, ring: 'url(#metalGold)', fill: 'transparent', strokeWidth: 6 })}
    ${renderTextLines(data.titleLines, { x: 540, centerY: 568, fill: palette.ink, fontSize: data.titleFontSize, lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif' })}
    <rect x="332" y="712" width="416" height="78" rx="18" fill="url(#metalGold)" opacity="0.94" />
    ${renderPrestigeText(`ESTABLISHED ${data.year}`, { y: 761, size: 25, fill: palette.primary, letterSpacing: 2.6 })}
  `;
}

function renderPillarHonor(data, palette, logoHref) {
  return `
    <g filter="url(#badgeShadow)">
      <rect x="220" y="134" width="640" height="812" rx="26" fill="url(#metalGold)" />
      <rect x="252" y="166" width="576" height="748" rx="18" fill="url(#royalField)" />
      <rect x="302" y="152" width="68" height="774" rx="12" fill="url(#metalSilver)" opacity="0.95" />
      <rect x="710" y="152" width="68" height="774" rx="12" fill="url(#metalSilver)" opacity="0.95" />
      <rect x="392" y="198" width="296" height="646" rx="12" fill="${palette.primary}" />
    </g>
    ${renderBoardHeading(330, palette, 'ACADEMIC SENATE')}
    ${renderBoardCrest({ cx: 540, cy: 334, logoHref, scale: 0.72 })}
    ${renderTextLines(data.titleLines, { x: 540, centerY: 596, fill: palette.ink, fontSize: Math.max(28, data.titleFontSize - 2), lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif' })}
    <path d="M 396 738 H 684" stroke="url(#metalGold)" stroke-width="4" stroke-linecap="round" />
    ${renderPrestigeText(`REGISTRY ${data.year}`, { y: 792, size: 28, fill: 'url(#metalGold)', letterSpacing: 3.4 })}
  `;
}

function renderCitationPlaque(data, palette, logoHref) {
  return `
    <g filter="url(#badgeShadow)">
      <rect x="180" y="140" width="720" height="800" rx="40" fill="url(#metalGold)" />
      <rect x="210" y="170" width="660" height="740" rx="20" fill="url(#royalField)" />
      <rect x="230" y="190" width="620" height="700" rx="10" fill="none" stroke="url(#metalGold)" stroke-width="4" />
      <rect x="250" y="210" width="580" height="660" rx="10" fill="${palette.primary}" opacity="0.98" />
    </g>
    ${renderLogoMark({ logoHref, cx: 540, cy: 286, size: 148, ring: 'url(#metalGold)', fill: '#ffffff' })}
    ${renderBoardHeading(390, palette, 'CERTIFIED PRACTITIONER')}
    ${renderTextLines(data.titleLines, { x: 540, centerY: 598, fill: palette.ink, fontSize: data.titleFontSize, lineHeight: data.titleLineHeight, fontWeight: 900, fontFamily: 'Times New Roman, Georgia, serif' })}
    <path d="M 320 740 H 760" stroke="url(#metalGold)" stroke-width="4" stroke-linecap="round" />
    ${renderPrestigeText(`ISSUED ${data.year}`, { y: 810, size: 30, fill: 'url(#metalGold)', letterSpacing: 2.8 })}
  `;
}

const DESIGN_RENDERERS = {
  'diamond-crest': renderDiamondCrest,
  'starburst-seal': renderStarburstSeal,
  'shield-ribbon': renderShieldRibbon,
  'regal-laurel-seal': renderRegalLaurelSeal,
  'sovereign-red-medallion': renderSovereignRedMedallion,
  'laurel-emblem': renderLaurelEmblem,
  'flat-shield-banner': renderFlatShieldBanner,
  'ornate-scroll-shield': renderOrnateScrollShield,
  'round-crest': renderRoundCrest,
  'executive-shield': renderExecutiveShield,
  'hex-medal': renderHexMedal,
  'compass-coin': renderCompassCoin,
  'imperial-ornate-shield': renderImperialOrnateShield,
  'baroque-royal-shield': renderBaroqueRoyalShield,
  'citation-plaque': renderCitationPlaque,
  'octagon-regalia': renderOctagonRegalia,
};

function getDesignById(designId) { return BADGE_DESIGNS.find((design) => design.id === designId) || BADGE_DESIGNS[0]; }
function getPaletteById(paletteId) { return BADGE_PALETTES.find((palette) => palette.id === paletteId) || BADGE_PALETTES[0]; }

function resolveBadgeOptions(certificate = {}, options = {}) {
  if (typeof options === 'string') return { designId: getDefaultBadgeDesignId(certificate), paletteId: getDefaultBadgePaletteId(certificate), logoHref: options };
  return { designId: options.designId || getDefaultBadgeDesignId(certificate), paletteId: options.paletteId || getDefaultBadgePaletteId(certificate), logoHref: options.logoHref || null };
}

export function getBadgeDesigns() { return BADGE_DESIGNS.map(({ id, name, description }) => ({ id, name, description })); }
export function getBadgePalettes() { return BADGE_PALETTES.map(({ id, name, colors }) => ({ id, name, colors })); }

export function getDefaultBadgeDesignId(certificate = {}) {
  const skill = String(certificate.skill || certificate.title || 'Verified Credential').trim();
  const charCode = skill.charAt(0).toUpperCase().charCodeAt(0);
  const index = Number.isFinite(charCode) ? Math.abs(charCode) % BADGE_DESIGNS.length : 0;
  return BADGE_DESIGNS[index]?.id || BADGE_DESIGNS[0].id;
}

export function getDefaultBadgePaletteId(certificate = {}) {
  const skill = String(certificate.skill || certificate.title || 'Verified Credential').trim();
  const charCode = skill.charAt(skill.length - 1).toUpperCase().charCodeAt(0);
  const index = Number.isFinite(charCode) ? Math.abs(charCode) % BADGE_PALETTES.length : 0;
  return BADGE_PALETTES[index]?.id || BADGE_PALETTES[0].id;
}

export function buildBadgeSvg(certificate = {}, options = {}) {
  const { designId, paletteId, logoHref } = resolveBadgeOptions(certificate, options);
  const design = getDesignById(designId);
  const palette = getPaletteById(paletteId).colors;
  const renderer = DESIGN_RENDERERS[design.id] || renderDiamondCrest;
  const data = buildCommonBadgeData(certificate, design);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080" role="img" aria-label="${escapeXml(data.badgeTitle || data.skill)} Badge">
  <defs>
    <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="20" stdDeviation="15" flood-color="#000000" flood-opacity="0.35" />
    </filter>
    <linearGradient id="metalGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C59B3F" />
      <stop offset="30%" stop-color="#FDF3B7" />
      <stop offset="50%" stop-color="#C59B3F" />
      <stop offset="75%" stop-color="#FDF3B7" />
      <stop offset="100%" stop-color="#8B6914" />
    </linearGradient>
    <linearGradient id="metalSilver" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8e9eab" />
      <stop offset="40%" stop-color="#eef2f3" />
      <stop offset="60%" stop-color="#8e9eab" />
      <stop offset="100%" stop-color="#eef2f3" />
    </linearGradient>
    <linearGradient id="royalNavy" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.secondary}" />
      <stop offset="100%" stop-color="${palette.primary}" />
    </linearGradient>
    <linearGradient id="royalField" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.primary}" />
      <stop offset="55%" stop-color="#1f4b86" />
      <stop offset="100%" stop-color="${palette.secondary}" />
    </linearGradient>
    <linearGradient id="ivoryPlate" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.soft}" />
      <stop offset="100%" stop-color="#fffaf0" />
    </linearGradient>
    <linearGradient id="champagneField" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fff8ea" />
      <stop offset="50%" stop-color="#f4e7cd" />
      <stop offset="100%" stop-color="#d9c39a" />
    </linearGradient>
    <linearGradient id="crimsonVelvet" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#9f4155" />
      <stop offset="45%" stop-color="#7a1021" />
      <stop offset="100%" stop-color="#3e050e" />
    </linearGradient>
    <radialGradient id="crimsonGloss" cx="34%" cy="26%" r="78%">
      <stop offset="0%" stop-color="#a22f33" />
      <stop offset="48%" stop-color="#6d0506" />
      <stop offset="100%" stop-color="#2a0203" />
    </radialGradient>
    <radialGradient id="crimsonGlass" cx="36%" cy="22%" r="74%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.28" />
      <stop offset="24%" stop-color="#ffffff" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="obsidianGloss" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a2e33" />
      <stop offset="42%" stop-color="#0d1014" />
      <stop offset="100%" stop-color="#000000" />
    </linearGradient>
  </defs>
  <rect width="1080" height="1080" fill="none" />
  ${renderer(data, palette, logoHref)}
</svg>`;
}

export async function buildBadgeDataUrl(certificate = {}, designId = getDefaultBadgeDesignId(certificate), paletteId = getDefaultBadgePaletteId(certificate)) {
  const cacheKey = getBadgeCacheKey(certificate, designId, paletteId);
  if (badgeDataUrlCache.has(cacheKey)) {
    return badgeDataUrlCache.get(cacheKey);
  }
  const logoHref = await getLogoDataUrl();
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(buildBadgeSvg(certificate, { designId, paletteId, logoHref }))}`;
  badgeDataUrlCache.set(cacheKey, dataUrl);
  return dataUrl;
}

export async function buildBadgeDesignPreviews(certificate = {}, paletteId = getDefaultBadgePaletteId(certificate)) {
  const cacheKey = getBadgeCacheKey(certificate, 'all-designs', paletteId);
  if (badgeDesignPreviewCache.has(cacheKey)) {
    return badgeDesignPreviewCache.get(cacheKey);
  }
  const logoHref = await getLogoDataUrl();
  const previews = BADGE_DESIGNS.map((design) => ({
    id: design.id, name: design.name, description: design.description,
    previewUrl: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(buildBadgeSvg(certificate, { designId: design.id, paletteId, logoHref }))}`,
  }));
  badgeDesignPreviewCache.set(cacheKey, previews);
  return previews;
}

function safeParse(value) {
  try {
    const parsed = JSON.parse(value || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to read badges:', error);
    return [];
  }
}

export function normalizeBadgeRecord(badge = {}) {
  const certificateId = badge.certificateId || badge.id || '';
  const designId = badge.designId || getDefaultBadgeDesignId(badge);
  const paletteId = badge.paletteId || getDefaultBadgePaletteId(badge);
  const skill = badge.skill || badge.title || 'Verified Credential';
  const badgeTitle = getBadgeDisplayName(skill, badge.badgeTitle || badge.label);
  const imageSvg = badge.imageSvg || buildBadgeSvg(
    { ...badge, skill, badgeTitle },
    { designId, paletteId, logoHref: badge.logoHref || LOGO_PATH },
  );

  return {
    id: badge.id || `badge-${slugify(certificateId || badge.skill || 'credential')}`,
    certificateId, skill,
    badgeTitle,
    label: badge.label || badgeTitle,
    date: badge.date || new Date(badge.issuedAt || Date.now()).toLocaleDateString(),
    issuedAt: badge.issuedAt || new Date().toISOString(),
    designId, designName: getDesignById(designId).name,
    paletteId, paletteName: getPaletteById(paletteId).name,
    imageSvg, imageUrl: badge.imageUrl || `data:image/svg+xml;charset=utf-8,${encodeURIComponent(imageSvg)}`,
  };
}

export function getStoredBadges() {
  if (typeof window !== 'undefined' && window.clerkUserId) {
    return useCertifiStore.getState().badges.map(normalizeBadgeRecord);
  }
  return safeParse(localStorage.getItem(STORAGE_KEY)).map(normalizeBadgeRecord);
}
export function findBadgeByCertificateId(certificateId) { return getStoredBadges().find((badge) => badge.certificateId === certificateId) || null; }

export function saveBadge(badge) {
  const normalized = normalizeBadgeRecord(badge);
  
  if (typeof window !== 'undefined' && window.clerkUserId) {
    useCertifiStore.getState().addBadge(normalized);
    return normalized;
  }

  const next = [normalized, ...getStoredBadges().filter((item) => item.certificateId !== normalized.certificateId)].slice(0, MAX_BADGES);
  const compactNext = next.map(({ imageSvg, ...record }) => record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(compactNext));
  return normalized;
}

export async function buildBadgeRecordForCertificate(certificate = {}, designId = getDefaultBadgeDesignId(certificate), paletteId = getDefaultBadgePaletteId(certificate)) {
  const relatedCertificate = getStoredCertificates().find((item) => item.id === certificate.id) || certificate;
  const logoHref = await getLogoDataUrl();
  const imageSvg = buildBadgeSvg(relatedCertificate, { designId, paletteId, logoHref });
  const badgeTitle = getBadgeDisplayName(relatedCertificate.skill, relatedCertificate.badgeTitle);

  return normalizeBadgeRecord({
    id: `badge-${slugify(relatedCertificate.id || relatedCertificate.skill || 'credential')}`,
    certificateId: relatedCertificate.id,
    skill: relatedCertificate.skill,
    badgeTitle,
    label: badgeTitle,
    date: relatedCertificate.date,
    issuedAt: relatedCertificate.issuedAt,
    designId,
    designName: getDesignById(designId).name,
    paletteId,
    paletteName: getPaletteById(paletteId).name,
    imageSvg,
  });
}

export async function saveBadgeForCertificate(certificate = {}, designId = getDefaultBadgeDesignId(certificate), paletteId = getDefaultBadgePaletteId(certificate)) {
  return saveBadge(await buildBadgeRecordForCertificate(certificate, designId, paletteId));
}

export function downloadBadgeFile(badge, filename) {
  const svg = badge?.imageSvg || buildBadgeSvg(badge, { designId: badge?.designId, paletteId: badge?.paletteId });
  const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename || `${badge?.certificateId || badge?.id || 'badge'}.svg`;
  document.body.appendChild(anchor); anchor.click(); anchor.remove(); URL.revokeObjectURL(url);
}

export async function downloadBadgeImageFile(badge, filename, format = 'png') {
  const normalized = normalizeBadgeRecord(badge);
  const svgUrl = normalized.imageUrl || `data:image/svg+xml;charset=utf-8,${encodeURIComponent(normalized.imageSvg || buildBadgeSvg(normalized, { designId: normalized.designId, paletteId: normalized.paletteId }))}`;

  try {
    const image = await new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Failed to render badge image.'));
      img.src = svgUrl;
    });

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 1200;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas rendering is unavailable.');

    if (format === 'jpeg' || format === 'jpg') {
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }

    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const mimeType = format === 'jpeg' || format === 'jpg' ? 'image/jpeg' : 'image/png';
    const extension = format === 'jpeg' || format === 'jpg' ? 'jpg' : 'png';
    const rasterBlob = await new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to export badge image.'));
      }, mimeType, 0.96);
    });

    const rasterUrl = URL.createObjectURL(rasterBlob);
    const anchor = document.createElement('a');
    anchor.href = rasterUrl;
    anchor.download = filename || `${normalized.certificateId || normalized.id || 'badge'}.${extension}`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(rasterUrl);
  } finally {
    if (svgUrl.startsWith('blob:')) {
      URL.revokeObjectURL(svgUrl);
    }
  }
}
