const STOP_WORDS = new Set([
  'and',
  'of',
  'for',
  'the',
  'in',
  'to',
  'with',
  'on',
  'at',
  'by',
]);

// Edit this file whenever you want a custom short badge title for a skill.
// Key format should match the normalized skill slug.
export const BADGE_TITLE_OVERRIDES = {
  'auditing-assurance-professional-certification': 'AuditPro',
  'professional-communication-business-english-certification': 'BizCom Pro',
  'agent-orchestration': 'Agent Flow',
  'sql-agent-development': 'SQL Agent',
  'python-for-ai': 'AI Python',
  '3d-annotation': '3D Annotator',
  'advanced-sql': 'SQL Mastery',
  'communication-english': 'Comms Edge',
  'situational-judgment': 'SJT Ready',
  'case-study-business-problem': 'Case Solver',
  'advanced-cybersecurity-defense': 'Cyber Shield',
  'master-of-leadership': 'LeadMaster',
  'data-science-maestro': 'Data Maestro',
  'complex-cloud-infrastructure': 'Cloud Architect',
  'ux-design': 'UX Creator',
  'digital-marketing': 'Growth Marketer',
  'content-marketing-specialist': 'Content Pro',
  'customer-acquisition-specialist': 'Acquisition Pro',
  'search-marketing-specialist': 'Search Pro',
  'analytics-data-specialist': 'Data Analyst',
  'cloud-digital-leader': 'Cloud Leader',
  'workplace': 'Workplace Pro',
  'accounting': 'Accounting Pro',
  'finance': 'Finance Pro',
  'ifrs': 'IFRS Expert',
  'powerbi': 'Power BI Pro',
  'tableau': 'Tableau Pro',
  'excel': 'Excel Expert',
  'presentation': 'Presentation Pro',
  'critical-thinking': 'ThinkSharp',
  'product-case-ai': 'AI Product',
  'system-design': 'System Architect',
  'architecture-sandbox': 'Arch Sandbox',
  'debugging': 'Debug Pro',
  'debugging-duel': 'Debug Duel',
  'react': 'React Builder',
  'nodejs': 'Node Builder',
  'django': 'Django Dev',
  'docker': 'Docker Ops',
  'kubernetes': 'K8s Ops',
  'aws': 'AWS Pro',
  'azure': 'Azure Pro',
  'gcp': 'GCP Pro',
  'java': 'Java Pro',
  'angular': 'Angular Dev',
  'vue': 'Vue Dev',
  'swift': 'Swift Dev',
  'kotlin': 'Kotlin Dev',
  'meta-ads': 'Meta Ads',
  'seo': 'SEO Pro',
  'copywriting': 'Copy Pro',
  'hubspot': 'HubSpot Pro',
};

function slugify(value = '') {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function titleCase(value = '') {
  return String(value)
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function acronymize(words = []) {
  const significant = words.filter((word) => word.length > 1 && !STOP_WORDS.has(word.toLowerCase()));
  if (significant.length >= 2 && significant.length <= 4) {
    const acronym = significant.map((word) => word[0].toUpperCase()).join('');
    if (acronym.length >= 2) return acronym;
  }
  return '';
}

function buildFallbackBadgeTitle(skill = '') {
  const cleaned = String(skill)
    .replace(/\b(certification|certified|professional|assessment|specialist|program|course|advanced)\b/gi, ' ')
    .replace(/&/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleaned) return 'Skill Star';

  const words = cleaned.split(' ').filter(Boolean);
  const acronym = acronymize(words);
  if (acronym && acronym.length <= 5) {
    const tailWord = words.find((word) => word.length > 4 && !STOP_WORDS.has(word.toLowerCase()));
    if (tailWord && words.length > 2) {
      return `${acronym} ${titleCase(tailWord)}`.slice(0, 20).trim();
    }
    return acronym;
  }

  const pickedWords = words
    .filter((word) => !STOP_WORDS.has(word.toLowerCase()))
    .slice(0, 2)
    .map((word) => titleCase(word));

  const compact = pickedWords.join(' ').trim();
  if (compact.length <= 18) return compact;

  const shortest = pickedWords.join('').slice(0, 18).trim();
  return shortest || titleCase(words[0]).slice(0, 18);
}

export function getBadgeDisplayName(skill = '', explicitTitle = '') {
  if (explicitTitle && String(explicitTitle).trim()) {
    return String(explicitTitle).trim();
  }

  const normalizedSkill = slugify(skill);
  return BADGE_TITLE_OVERRIDES[normalizedSkill] || buildFallbackBadgeTitle(skill);
}
