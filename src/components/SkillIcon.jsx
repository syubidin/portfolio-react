// Clean, accessible SVG icons for technical skills and social media.
// Uses currentColor to seamlessly match the portfolio's theme, typography, and hover states.

export default function SkillIcon({ name, className = 'kit-icon' }) {
  if (!name) return null;
  const key = name.toLowerCase().trim();

  // --- SOCIAL MEDIA ---

  // WhatsApp
  if (key.includes('whatsapp')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.79 14.11c-.24.68-1.39 1.3-1.92 1.38-.49.08-1.12.11-3.62-.92-2.14-.88-3.52-3.06-3.63-3.2-.1-.15-.86-1.15-.86-2.19 0-1.04.55-1.55.74-1.76.2-.21.43-.26.58-.26.15 0 .29 0 .42.01.14.01.32-.05.5.38.19.45.64 1.57.7 1.69.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.25.25-.11.49.14.24.63 1.04 1.35 1.68.93.83 1.72 1.09 1.96 1.21.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.6-.18 1.28z" />
      </svg>
    );
  }

  // LinkedIn
  if (key.includes('linkedin')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    );
  }

  // GitHub
  if (key.includes('github')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  // --- FRONT-END SKILLS ---

  // HTML / HTML5
  if (key === 'html' || key.includes('html5')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2L3 5.3l1.3 14.5L12 22l7.7-2.2L21 5.3L12 2zm5.7 6.4H8.4l.3 3.3h8.3l-.7 7.3-3.9 1.1-3.9-1.1-.3-3.1h2.2l.1 1.4 1.9.5 1.9-.5.2-2.3H8.1L7.5 6.3h10.4l-.2 2.1z" />
      </svg>
    );
  }

  // CSS / CSS3 / Vanilla CSS
  if (key === 'css' || key.includes('css3') || key.includes('vanilla css')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M3 3l1.8 16.5L12 22l7.2-2.5L21 3H3zm14.8 5.2h-7.6l.2 2.6h7.2l-.6 6.8-5 1.7-5-1.7-.3-3.6h2.4l.2 1.8 2.7.9 2.7-.9.3-3.1H7.2L6.5 6h11.5l-.2 2.2z" />
      </svg>
    );
  }

  // JavaScript
  if (key === 'javascript' || key === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M3 3h18v18H3V3zm10.7 14.2c1 .6 2.1.9 3.2.9 1.4 0 2.2-.6 2.2-1.5 0-1-.8-1.5-2.3-2.1l-.8-.3c-2.3-.9-3.7-2.1-3.7-4.4 0-2.6 2-4.4 5.3-4.4 1.3 0 2.4.3 3.3.8l-.8 2.3c-.7-.4-1.6-.7-2.6-.7-1.4 0-2.1.6-2.1 1.4 0 .9.7 1.3 2.1 1.9l.8.3c2.6 1.1 3.9 2.2 3.9 4.6 0 2.7-2.1 4.5-5.7 4.5-1.5 0-2.9-.4-3.9-1l1-2.4zm-6.2.2c.8.5 1.8.8 2.8.8 1.4 0 2.1-.6 2.1-2.2v-7.6h2.8v7.8c0 3-1.8 4.4-4.7 4.4-1.3 0-2.5-.4-3.5-1l.5-2.2z" />
      </svg>
    );
  }

  // TypeScript
  if (key === 'typescript' || key === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M3 3h18v18H3V3zm7.5 7.4H8v7.8H5.6v-7.8H3.1V8.3h7.4v2.1zm4.7 4.3c1 .6 2.1.9 3.2.9 1.4 0 2.2-.6 2.2-1.5 0-1-.8-1.5-2.3-2.1l-.8-.3c-2.3-.9-3.7-2.1-3.7-4.4 0-2.6 2-4.4 5.3-4.4 1.3 0 2.4.3 3.3.8l-.8 2.3c-.7-.4-1.6-.7-2.6-.7-1.4 0-2.1.6-2.1 1.4 0 .9.7 1.3 2.1 1.9l.8.3c2.6 1.1 3.9 2.2 3.9 4.6 0 2.7-2.1 4.5-5.7 4.5-1.5 0-2.9-.4-3.9-1l1-2.4z" />
      </svg>
    );
  }

  // Bootstrap
  if (key.includes('bootstrap')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4 4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm5.5 3v10h4.3c1.7 0 2.9-.9 2.9-2.3 0-1-.7-1.8-1.8-2 1-.3 1.5-1.1 1.5-2 0-1.3-1.1-2.1-2.7-2.1H9.5v-1.6zm2.3 2h1.6c.7 0 1.2.4 1.2 1s-.5 1-1.2 1h-1.6V9zm0 3.6h2c.8 0 1.4.4 1.4 1.1s-.6 1.1-1.4 1.1h-2v-2.2z" />
      </svg>
    );
  }

  // Tailwind / Tailwind CSS
  if (key.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 6c-3.6 0-5.8 1.8-6.6 5.4 1.3-1.8 2.9-2.5 4.8-2 1.1.3 1.9 1.1 2.8 2 1.4 1.4 3 3.1 6.6 3.1 3.6 0 5.8-1.8 6.6-5.4-1.3 1.8-2.9 2.5-4.8 2-1.1-.3-1.9-1.1-2.8-2C17.2 7.7 15.6 6 12 6zM5.4 12C1.8 12-.4 13.8.4 17.4c1.3-1.8 2.9-2.5 4.8-2 1.1.3 1.9 1.1 2.8 2 1.4 1.4 3 3.1 6.6 3.1 3.6 0 5.8-1.8 6.6-5.4-1.3 1.8-2.9 2.5-4.8 2-1.1-.3-1.9-1.1-2.8-2-1.4-1.4-3-3.1-6.6-3.1z" />
      </svg>
    );
  }

  // React / React 18
  if (key.includes('react router')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a4 4 0 00-4 4c0 1.6 1 3 2.4 3.6L6.8 16H4a2 2 0 100 4h3a2 2 0 001.8-1.2l3.4-6.2 3.4 6.2A2 2 0 0017 20h3a2 2 0 100-4h-2.8l-3.6-6.4C15 9 16 7.6 16 6a4 4 0 00-4-4zm0 2a2 2 0 110 4 2 2 0 010-4z" />
      </svg>
    );
  }

  if (key.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  // Next.js / Next.js 16
  if (key.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-2.2 13.8V8.2h1.8l5.8 7.5v-7.5h1.8v7.6h-1.8L11.6 8.3v7.5H9.8z" />
      </svg>
    );
  }

  // Flutter
  if (key.includes('flutter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M14.3 2.5L5.7 11.1l2.7 2.7 8.6-8.6h-2.7zm-2.7 9.8L8.9 15l5.4 5.4h2.7l-5.4-5.4 3.7-3.7-2.7-2.7-1 1.1z" />
      </svg>
    );
  }

  // Dart
  if (key === 'dart') {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4.1 4.1h7.8L20 12.2l-4.1 7.7-11.8-4V4.1zm3.9 3.9v5.9l5.9 2 2-3.9-7.9-4z" />
      </svg>
    );
  }

  // Vite / Vite 6
  if (key.includes('vite')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M21.2 3.5l-9.1 17L3 3.5l7 1.3L12 8l2-3.2 7.2-1.3zm-8 4.2L9.5 14l2.5-.5L11 17l4.5-6.5-2.7.5.4-3.3z" />
      </svg>
    );
  }

  // Vercel
  if (key.includes('vercel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2L2 19.8h20L12 2z" />
      </svg>
    );
  }

  // anime.js / Motion
  if (key.includes('anime')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l7 4.5-7 4.5z" />
      </svg>
    );
  }

  // --- BACK-END & SYSTEMS SKILLS ---

  // Java / Java 17
  if (key.includes('java') && !key.includes('javascript')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M8.5 17.5c1.8.2 3.8.3 5.4-.1.8-.2 1.4-.6 1.8-1.2.3-.5.4-1.1.2-1.7-.3-.8-1.2-1.3-2.1-1.6-1.5-.5-3.2-.6-4.8-.4-.3 0-.5.2-.5.5s.2.5.5.5c1.4-.2 2.9-.1 4.2.3.6.2 1.2.6 1.4 1.1.1.4.1.8-.1 1.1-.3.4-.7.7-1.3.8-1.4.3-3.1.2-4.7 0-.3 0-.5.2-.5.5s.2.3.5.3zm-1.2 2.8c2.4.3 5 .3 7.3-.2 1.2-.3 2.3-.9 2.9-2 .4-.7.4-1.6.1-2.4-.2-.5-.6-.9-1.1-1.2-.2-.1-.5-.1-.7.1-.1.2-.1.5.1.7.3.2.6.5.8.9.2.6.2 1.2-.1 1.7-.5.8-1.3 1.3-2.3 1.5-2.1.4-4.5.4-6.7.1-.3 0-.5.2-.5.5s.2.3.2.3zm1.6-8.9c.7-1.1 1.7-2.1 2.2-3.3.4-.9.5-1.9.4-2.9 0-.3-.3-.5-.6-.4-.3 0-.5.3-.4.6.1.8 0 1.6-.3 2.3-.5 1-1.4 1.9-2 2.9-.2.3-.1.6.2.8.2.1.4.1.5 0zm3.8-1.3c.6-1.2 1.2-2.4 1.5-3.7.2-.6.2-1.2.1-1.8 0-.3-.3-.5-.6-.4-.3 0-.5.3-.4.6.1.4.1.9 0 1.4-.3 1.1-.8 2.2-1.4 3.2-.2.3 0 .6.3.7.2.1.4.1.5 0z" />
      </svg>
    );
  }

  // Spring Boot / Spring Boot 3
  if (key.includes('spring')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 2.2.7 4.2 2 5.9L17.9 4C16.2 2.7 14.2 2 12 2zm8 4.1L6.1 20c1.7 1.3 3.7 2 5.9 2 5.5 0 10-4.5 10-10 0-2.2-.7-4.2-2-5.9zM12 6.5c2.4 0 4.5 1.7 4.9 4.1l-6.7 6.7C7.8 16.9 6.5 14.7 6.5 12c0-3 2.5-5.5 5.5-5.5z" />
      </svg>
    );
  }

  // PHP
  if (key === 'php') {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M7 6h3.6c1.9 0 3.2 1 3.2 2.8 0 1.7-1.3 2.8-3.2 2.8H8.8L7.5 18H5.2L7 6zm2.4 4.2h1.2c.8 0 1.3-.4 1.3-1.2 0-.8-.5-1.2-1.3-1.2H9.8l-.4 2.4zm5.8-4.2h3.6c1.9 0 3.2 1 3.2 2.8 0 1.7-1.3 2.8-3.2 2.8h-1.8l-1.3 6.4h-2.3l1.8-12zm2.4 4.2h1.2c.8 0 1.3-.4 1.3-1.2 0-.8-.5-1.2-1.3-1.2h-.8l-.4 2.4z" />
      </svg>
    );
  }

  // CodeIgniter / CodeIgniter 3
  if (key.includes('codeigniter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2c-.6 3.1-2.9 5.3-3.9 8.2-1.2 3.3-.2 6.9 2.5 8.9 1.1.8 2.5 1.2 3.9 1 .8-.1 1.6-.4 2.3-.9 2.2-1.7 3.1-4.7 2.1-7.3-.6-1.5-1.6-2.7-2.6-4-.3 1.1-.9 2.1-1.8 2.8-.2-1.9.4-3.7.8-5.5-.9.7-1.7 1.6-2.3 2.6-.5-1.7-.8-3.6-1-5.8z" />
      </svg>
    );
  }

  // Laravel
  if (key.includes('laravel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12.6 2.4l8.2 4.7v9.4l-8.2 4.7-8.2-4.7V7.1l8.2-4.7zm-.1 2.3L6.1 8.3l6.4 3.7 6.4-3.7-6.4-3.6zm-6.9 7.4v5.3l5.8 3.3v-5.3l-5.8-3.3zm14 0l-5.8 3.3v5.3l5.8-3.3v-5.3z" />
      </svg>
    );
  }

  // Python
  if (key.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M11.9 2c-3.1 0-4.9 1.4-4.9 3.9v2.2h5.1v.8H5.6c-2.4 0-4.1 1.7-4.1 4.5 0 2.9 1.6 4.6 4.1 4.6h1.7v-2.3c0-2.4 1.8-4.2 4.2-4.2h5.1V9.2c0-2.5-1.9-4.2-4.5-4.2h-2.3c-.6 0-1.1-.3-1.1-.7 0-.5.5-.8 1.1-.8h2.1c4.5 0 6.6 2.1 6.6 6.3V12h-1.5c-1.5 0-2.7 1.2-2.7 2.7v2.3H7.5c-1.6 0-2.8-1.2-2.8-2.8 0-1.5 1.2-2.8 2.8-2.8h2.2v-1.1H4.6C2.6 10.3 1 11.9 1 13.9s1.6 3.6 3.6 3.6h2.8v2.6c0 2.5 1.8 3.9 4.9 3.9h2.3c3.1 0 4.9-1.4 4.9-3.9v-2.2h-5.1v-.8h6.5c2.4 0 4.1-1.7 4.1-4.5 0-2.9-1.6-4.6-4.1-4.6h-1.7v2.3c0 2.4-1.8 4.2-4.2 4.2H9.8V12c0 2.5 1.9 4.2 4.5 4.2h2.3c.6 0 1.1.3 1.1.7 0 .5-.5.8-1.1.8h-2.1c-4.5 0-6.6-2.1-6.6-6.3v-1.5h1.5c1.5 0 2.7-1.2 2.7-2.7V4.9h4.1c1.6 0 2.8 1.2 2.8 2.8 0 1.5-1.2 2.8-2.8 2.8h-2.2v1.1h5.1c2 0 3.6-1.6 3.6-3.6S20.3 4.4 18.3 4.4h-2.8V2h-3.6zM9.5 4.2a1 1 0 110 2 1 1 0 010-2zm5 14a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
    );
  }

  // C++
  if (key.includes('c++')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M10.8 7.3c-.6-.7-1.5-1.1-2.4-1.1-1.9 0-3.4 1.5-3.4 3.4v4.8c0 1.9 1.5 3.4 3.4 3.4.9 0 1.8-.4 2.4-1.1l1.5 1.5C11.3 20.3 9.9 21 8.4 21 4.9 21 2 18.1 2 14.6V9.4C2 5.9 4.9 3 8.4 3c1.5 0 2.9.7 3.9 1.8l-1.5 2.5zm4.8 3.5h1.5v-1.5h1.5v1.5h1.5v1.5h-1.5v1.5h-1.5v-1.5h-1.5v-1.5zm5.5 0h1.5v-1.5h1.5v1.5h1.5v1.5h-1.5v1.5h-1.5v-1.5h-1.5v-1.5z" />
      </svg>
    );
  }

  // Node.js
  if (key.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.3L5 8.4v7.3l7 4.1 7-4.1V8.4l-7-4.1zm-1.5 6.4h3v1.5h-3v2.8h-1.5V9.2h4.5v1.5H10.5z" />
      </svg>
    );
  }

  // JWT
  if (key.includes('jwt')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 5a3 3 0 016 0v3H9V7zm3 6a2 2 0 012 2c0 .74-.4 1.39-1 1.73V19h-2v-2.27c-.6-.34-1-.99-1-1.73a2 2 0 012-2z" />
      </svg>
    );
  }

  // Zod
  if (key.includes('zod')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2L3 6.5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12v-6L12 2zm3.5 13.5h-7v-2l4.5-5H8.5V7h7v2l-4.5 5h4.5v1.5z" />
      </svg>
    );
  }

  // --- DATA & APIS ---

  // PostgreSQL
  if (key.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 16.5c-2.8 0-4.5-1.5-4.5-4h2c0 1.3.9 2 2.5 2 1.4 0 2.3-.7 2.3-1.8 0-1.1-.8-1.5-2.5-2l-.9-.3c-2.3-.7-3.4-1.7-3.4-3.4 0-2.2 1.8-3.5 4.3-3.5 2.5 0 4.1 1.3 4.1 3.5h-2c0-1.2-.8-1.8-2.1-1.8-1.3 0-2 .6-2 1.6 0 .9.7 1.3 2.2 1.8l.9.3c2.6.8 3.7 1.9 3.7 3.6 0 2.3-1.9 3.7-4.6 3.7z" />
      </svg>
    );
  }

  // MySQL
  if (key.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 3C7 3 3 5 3 7.5v9C3 19 7 21 12 21s9-2 9-4.5v-9C21 5 17 3 12 3zm0 2c4.1 0 7 1.4 7 2.5s-2.9 2.5-7 2.5-7-1.4-7-2.5 2.9-2.5 7-2.5zm0 14c-4.1 0-7-1.4-7-2.5v-1.6c1.8 1.1 4.3 1.7 7 1.7s5.2-.6 7-1.7v1.6c0 1.1-2.9 2.5-7 2.5zm0-4.5c-4.1 0-7-1.4-7-2.5v-1.6c1.8 1.1 4.3 1.7 7 1.7s5.2-.6 7-1.7v1.6c0 1.1-2.9 2.5-7 2.5z" />
      </svg>
    );
  }

  // Supabase
  if (key.includes('supabase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M13.4 2.1c-.5-.7-1.6-.4-1.7.5L10.3 12H3.7c-.8 0-1.3.8-.9 1.5l7 10.3c.5.7 1.6.4 1.7-.5l1.4-9.4h6.6c.8 0 1.3-.8.9-1.5l-7-10.3z" />
      </svg>
    );
  }

  // Google Gemini AI / Gemini
  if (key.includes('gemini') || key.includes('google gemini')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2C12 7.5 7.5 12 2 12c5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10zm4.5 14.5c0 2-.8 3.5-2 4.5 1.2-1 2-2.5 2-4.5z" />
      </svg>
    );
  }

  // Flyway
  if (key.includes('flyway')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M2.5 15.5l9.5-11 9.5 11-4.5.5-5-6-5 6z" />
      </svg>
    );
  }

  // REST APIs / REST
  if (key.includes('rest') || key.includes('api')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4 6h16v3H4V6zm0 5h16v3H4v-3zm0 5h16v3H4v-3z" />
      </svg>
    );
  }

  // --- WORKSHOP & TOOLS ---

  // Git
  if (key === 'git') {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M21.6 10.6L13.4 2.4a1.8 1.8 0 00-2.6 0L8.6 4.6l3.3 3.3a2.1 2.1 0 012.7 2.7l3.2 3.2a2.1 2.1 0 11-1.3 1.3l-3-3a2.1 2.1 0 01-2.2-.5l-3.3 3.3a2.1 2.1 0 11-1.3-1.3l3.3-3.3a2.1 2.1 0 01-.1-.7c0-.6.2-1.1.6-1.5L7.3 5.4 2.4 10.3a1.8 1.8 0 000 2.6l8.2 8.2a1.8 1.8 0 002.6 0l8.4-8.4a1.8 1.8 0 000-2.6z" />
      </svg>
    );
  }

  // Docker
  if (key.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M10 5.5h2v2h-2zm-3 0h2v2H7zm-3 0h2v2H4zm9 0h2v2h-2zm-9 3h2v2H4zm3 0h2v2H7zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-15 4c0 3.9 3.1 7 7 7 4.4 0 8.2-3 9.4-7.2.5.1 1 .2 1.6.2 1.1 0 2-.9 2-2 0-.2 0-.4-.1-.6-.8.2-1.7.3-2.6.1-.9-.3-1.7-.8-2.3-1.5H2v4z" />
      </svg>
    );
  }

  // Postman
  if (key.includes('postman')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M2.5 12c0-5.2 4.3-9.5 9.5-9.5s9.5 4.3 9.5 9.5-4.3 9.5-9.5 9.5S2.5 17.2 2.5 12zm10.7-3.8l-4.4 2.4c-.6.3-.7 1.1-.3 1.7.3.4.8.6 1.3.4l4.2-2.3 2.7 4.7c.3.5 1 .7 1.5.4.5-.3.7-1 .4-1.5L15.4 8.7c-.5-.8-1.5-.9-2.2-.5z" />
      </svg>
    );
  }

  // Swagger / OpenAPI
  if (key.includes('swagger') || key.includes('openapi')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path fill="currentColor" d="M9.5 9a2.5 2.5 0 015 0c0 1.5-1.5 2.5-2.5 3.5v1h-1v-1.5c1.2-1 2.5-1.8 2.5-3a1.5 1.5 0 00-3 0H9.5zM11 15h2v2h-2z" />
      </svg>
    );
  }

  // Figma
  if (key.includes('figma')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M8 2h4v4H8a2 2 0 110-4zm4 4h4a2 2 0 110 4h-4V6zm-4 4h4v4H8a2 2 0 110-4zm4 4h4a2 2 0 110 4h-4v-4zm-4 4h4v2a2 2 0 11-4 0v-2z" />
      </svg>
    );
  }

  // Linux / Linux basics
  if (key.includes('linux')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2C9.8 2 8 3.8 8 6v5.2c-.8.5-1.5 1.3-1.8 2.3-.5 1.3-.4 2.8.2 4 .7 1.4 2.1 2.3 3.6 2.5H14c1.5-.2 2.9-1.1 3.6-2.5.6-1.2.7-2.7.2-4-.3-1-1-1.8-1.8-2.3V6c0-2.2-1.8-4-4-4zm-1.5 4.5a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zM12 9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
      </svg>
    );
  }

  // GSAP
  if (key.includes('gsap')) {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm10-4.5L17.5 12 13 16.5V13H7.5v-2H13V7.5z" />
      </svg>
    );
  }

  // If no icon matches (e.g. "Responsive design", "SDLC", "Double-Entry Ledger", "Schema design", "JaCoCo", "AI-assisted development")
  return null;
}
