import { useState } from 'react';

// Common aliases and special case overrides for Simple Icons CDN
const SLUG_OVERRIDES = {
  // Social Media & Contact
  whatsapp: 'whatsapp',
  linkedin: '__linkedin__',
  github: 'github',
  instagram: 'instagram',
  twitter: 'x',
  'twitter / x': 'x',
  x: 'x',
  youtube: 'youtube',
  tiktok: 'tiktok',
  facebook: 'facebook',
  telegram: 'telegram',
  discord: 'discord',
  dribbble: 'dribbble',
  behance: 'behance',
  medium: 'medium',
  devto: 'devdotto',
  'dev.to': 'devdotto',
  hashnode: 'hashnode',
  stackoverflow: 'stackoverflow',
  'stack overflow': 'stackoverflow',
  reddit: 'reddit',
  twitch: 'twitch',
  producthunt: 'producthunt',
  'product hunt': 'producthunt',

  // Front-end
  html: 'html5',
  html5: 'html5',
  css: 'css3',
  css3: 'css3',
  'vanilla css': 'css3',
  javascript: 'javascript',
  js: 'javascript',
  typescript: 'typescript',
  ts: 'typescript',
  bootstrap: 'bootstrap',
  tailwind: 'tailwindcss',
  tailwindcss: 'tailwindcss',
  'tailwind css': 'tailwindcss',
  react: 'react',
  'react router': 'reactrouter',
  nextjs: 'nextdotjs',
  'next.js': 'nextdotjs',
  flutter: 'flutter',
  dart: 'dart',
  vite: 'vite',
  vercel: 'vercel',
  gsap: 'gsap',
  vue: 'vuedotjs',
  'vue.js': 'vuedotjs',
  angular: 'angular',
  svelte: 'svelte',

  // Back-end & Systems
  java: '__java__',
  'java 17': '__java__',
  spring: 'springboot',
  'spring boot': 'springboot',
  php: 'php',
  codeigniter: 'codeigniter',
  laravel: 'laravel',
  python: 'python',
  'c++': 'cplusplus',
  'c#': 'csharp',
  cplusplus: 'cplusplus',
  csharp: 'csharp',
  node: 'nodedotjs',
  'node.js': 'nodedotjs',
  nodejs: 'nodedotjs',
  jwt: 'jsonwebtokens',
  zod: 'zod',
  golang: 'go',
  rust: 'rust',
  kotlin: 'kotlin',
  swift: 'swift',
  fastapi: 'fastapi',
  django: 'django',
  bun: 'bun',
  deno: 'deno',

  // Data & APIs
  postgresql: 'postgresql',
  postgres: 'postgresql',
  mysql: 'mysql',
  flyway: 'flyway',
  supabase: 'supabase',
  mongodb: 'mongodb',
  mongo: 'mongodb',
  redis: 'redis',
  sqlite: 'sqlite',
  graphql: 'graphql',
  gemini: 'googlegemini',
  'google gemini': 'googlegemini',
  'google gemini ai': 'googlegemini',
  kafka: 'apachekafka',
  rabbitmq: 'rabbitmq',

  // Workshop & Cloud
  git: 'git',
  docker: 'docker',
  postman: 'postman',
  swagger: 'swagger',
  openapi: 'swagger',
  'swagger / openapi': 'swagger',
  figma: 'figma',
  linux: 'linux',
  aws: 'amazonaws',
  kubernetes: 'kubernetes',
  k8s: 'kubernetes',
  nginx: 'nginx',
  apache: 'apache',
  terraform: 'terraform',
  jenkins: 'jenkins',
  prisma: 'prisma',

  // Preserved inline fallback for anime.js (no official Simple Icon)
  'anime.js': '__anime__',
  anime: '__anime__',
};

// Known conceptual terms that shouldn't attempt to load network icons
const NO_ICON_SET = new Set([
  'responsive design',
  'sdlc',
  'double-entry ledger',
  'schema design',
  'jacoco',
  'ai-assisted development',
  'rest apis',
  'rest api',
  'rest',
]);

// Memory cache to prevent repeated 404 network requests for failed slugs
const failedSlugs = new Set();

/**
 * Automatically computes a canonical Simple Icons slug for ANY given skill.
 * Strips version numbers (e.g. "Java 17" -> "java", "Spring Boot 3" -> "springboot")
 * and handles common punctuation.
 */
function resolveSlug(name) {
  if (!name) return null;
  const raw = name.trim().toLowerCase();

  // 1. Check known no-icon concepts
  if (NO_ICON_SET.has(raw)) return null;

  // Handle Java explicitly so it always uses the crisp monochrome SVG icon
  if (raw.includes('java') && !raw.includes('javascript')) {
    return '__java__';
  }

  // 2. Exact match in overrides
  if (SLUG_OVERRIDES[raw]) return SLUG_OVERRIDES[raw];

  // 3. Partial check in overrides (e.g., "Node.js basics", "Linux basics", "Spring Boot 3")
  for (const [key, slug] of Object.entries(SLUG_OVERRIDES)) {
    if (raw.startsWith(key) || raw.endsWith(key) || raw.includes(key)) {
      return slug;
    }
  }

  // 4. Automatic normalization for any newly added skill:
  // e.g. "Vue.js" -> "vuedotjs", "C++" -> "cplusplus", "Tailwind CSS" -> "tailwindcss"
  let slug = raw
    .replace(/\.js\b/g, 'dotjs')
    .replace(/\+/g, 'plus')
    .replace(/#/g, 'sharp')
    .replace(/\b(v?\d+(\.\d+)*)\b/g, '') // remove version numbers like "17", "3", "16"
    .replace(/[^a-z0-9]/g, ''); // strip spaces, hyphens, slashes

  if (!slug || NO_ICON_SET.has(slug) || failedSlugs.has(slug)) {
    return null;
  }

  return slug;
}

function LinkedInIcon({ className }) {
  return (
    <svg className={`${className} si-icon`} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.57a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

function JavaIcon({ className }) {
  return (
    <svg className={`${className} si-icon`} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M8.5 17.5c1.8.2 3.8.3 5.4-.1.8-.2 1.4-.6 1.8-1.2.3-.5.4-1.1.2-1.7-.3-.8-1.2-1.3-2.1-1.6-1.5-.5-3.2-.6-4.8-.4-.3 0-.5.2-.5.5s.2.5.5.5c1.4-.2 2.9-.1 4.2.3.6.2 1.2.6 1.4 1.1.1.4.1.8-.1 1.1-.3.4-.7.7-1.3.8-1.4.3-3.1.2-4.7 0-.3 0-.5.2-.5.5s.2.3.5.3zm-1.2 2.8c2.4.3 5 .3 7.3-.2 1.2-.3 2.3-.9 2.9-2 .4-.7.4-1.6.1-2.4-.2-.5-.6-.9-1.1-1.2-.2-.1-.5-.1-.7.1-.1.2-.1.5.1.7.3.2.6.5.8.9.2.6.2 1.2-.1 1.7-.5.8-1.3 1.3-2.3 1.5-2.1.4-4.5.4-6.7.1-.3 0-.5.2-.5.5s.2.3.2.3zm1.6-8.9c.7-1.1 1.7-2.1 2.2-3.3.4-.9.5-1.9.4-2.9 0-.3-.3-.5-.6-.4-.3 0-.5.3-.4.6.1.8 0 1.6-.3 2.3-.5 1-1.4 1.9-2 2.9-.2.3-.1.6.2.8.2.1.4.1.5 0zm3.8-1.3c.6-1.2 1.2-2.4 1.5-3.7.2-.6.2-1.2.1-1.8 0-.3-.3-.5-.6-.4-.3 0-.5.3-.4.6.1.4.1.9 0 1.4-.3 1.1-.8 2.2-1.4 3.2-.2.3 0 .6.3.7.2.1.4.1.5 0z" />
    </svg>
  );
}

function AnimeIcon({ className }) {
  return (
    <svg className={`${className} si-icon`} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l7 4.5-7 4.5z" />
    </svg>
  );
}

/**
 * SkillIcon — Consistent monochrome technical icons.
 * Auto-adapts to ANY new kit or project skills without code modifications.
 */
export default function SkillIcon({ name, className = 'kit-icon' }) {
  const [loadError, setLoadError] = useState(false);
  if (!name || loadError) return null;

  const slug = resolveSlug(name);
  if (!slug || failedSlugs.has(slug)) return null;

  if (slug === '__java__') {
    return <JavaIcon className={className} />;
  }

  if (slug === '__linkedin__') {
    return <LinkedInIcon className={className} />;
  }

  if (slug === '__anime__') {
    return <AnimeIcon className={className} />;
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/000000`}
      className={`${className} si-icon`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      draggable={false}
      width="15"
      height="15"
      onError={() => {
        failedSlugs.add(slug);
        setLoadError(true);
      }}
    />
  );
}
