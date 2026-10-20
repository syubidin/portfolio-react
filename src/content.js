/* ==========================================================
   EDIT ME. Everything on the site is read from this object (src/content.js).
   Empty link "" = button shows as "coming soon".
   ========================================================== */
const SITE = {
  name: "Syuby Alwi Akbar Attala",
  headline: ["Building", "digital", "solutions", "with purpose"],
  roles: ["Full Stack Developer", "Mobile App Developer", "Informatics Management Graduate"],
  status: "Open to entry-level roles",
  coords: "6.2397° S, 107.0015° E",

  photo: "assets/face.png", // transparent PNG, portrait, ~800px wide
  about: [
    "I like things that hold weight: clean schemas, clear requirements, and systems people can lean on.",
    "I build full stack web apps with PHP, CodeIgniter, Laravel and MySQL, configured a .NET accounting system for real clients, and led a multi-division student organization as BEM Chairman.",
    "Right now I’m looking for an entry-level Full Stack or Mobile App Developer role."
  ],
  facts: [
    ["Based in", "Bekasi, Indonesia"],
    ["Studied", "Informatics Management, Politeknik LP3I Jakarta"],
    ["GPA", "3.70 / 4.00"],
    ["Languages", "English (TOEIC 945), Indonesian"]
  ],

  projects: [
    {
      year: "2026",
      title: "CRM & Alumni Tracer Study System",
      text: "Final year project: an end-to-end CRM that tracks alumni, collects tracer study data and produces reports. Built from database schema to responsive UI, validated with institution staff over 3+ sessions.",
      stack: ["PHP", "CodeIgniter 3", "MySQL"],
      image: "assets/projects/elp-crm.png",
      demo: "",
      repo: "https://github.com/syubidin/elp-crm"
    },
    {
      year: "Soon",
      title: "Project Two (Coming Soon)",
      text: "Coming Soon.",
      stack: [],
      image: "assets/projects/project-two.png",
      demo: "",
      repo: ""
    },
    {
      year: "Soon",
      title: "Project Three (Coming Soon)",
      text: "Coming Soon.",
      stack: [],
      image: "assets/projects/project-three.png",
      demo: "",
      repo: ""
    }
  ],

  trail: [
    { when: "Feb 2026 to Mar 2026", kind: "Work", title: "System Implementor (Internship)", place: "PT Erasoft Teknologi Indonesia",
      points: ["Supported rollout of a .NET accounting application across 5+ modules, including General Ledger.", "Configured modules, tested the system and documented setup steps."] },
    { when: "Oct 2025 to Dec 2025", kind: "Work", title: "Warehouse Admin (Internship)", place: "PT Rizki Asa Buana",
      points: ["Processed 300+ goods request forms with 100% data accuracy.", "Created 100+ delivery notes and supported monthly stock reconciliation."] },
    { when: "Dec 2024 to Dec 2025", kind: "Led", title: "Chairman, Student Executive Board (BEM)", place: "Politeknik LP3I Jakarta, Bekasi Campus",
      points: ["Led 5+ divisions and coordinated 10+ campus programs.", "Main liaison between students and campus management."] },
    { when: "Sep 2023 to Aug 2026", kind: "Study", title: "Diploma in Informatics Management", place: "Politeknik LP3I Jakarta",
      points: ["Best Graduate of Informatics Management 2026.", "Semifinalist, National Environmental University Debating Championship Festival LIKE 2."] },
    { when: "Sep 2022 to Dec 2022", kind: "Work", title: "Front-End Developer (Internship)", place: "PT Kingtan Technology Corp.",
      points: ["Turned approved Figma designs into 5+ responsive pages with a team of four."] },
    { when: "Jan 2022 to Jan 2023", kind: "Led", title: "Chairman, English Club", place: "SMKN 2 Kota Bekasi",
      points: ["Ran weekly sessions for 20+ members on speaking, debating and public communication."] }
  ],

  kit: {
    "Front of house": ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "React", "Flutter", "Responsive design"],
    "Back of house": ["PHP", "CodeIgniter", "Laravel", "Python", "Java", "C++", "Node.js basics"],
    "Data and APIs": ["MySQL", "Supabase", "Schema design", "REST APIs"],
    "Workshop": ["Git", "Figma", "Linux basics", "Microsoft 365", "AI-assisted development"]
  },

  certs: [
    "Associate Data Scientist, Institut Teknologi Bandung",
    "Junior Web Developer, BNSP",
    "Junior Database Administrator, BNSP",
    "Application Programmer, BNSP",
    "Tenaga Operasi Komputer, BNSP",
    "Project Based Learning Competence, PT Bangun Karya Abadi"
  ],

  email: "syubyattala806@gmail.com",
  links: [["LinkedIn", "https://linkedin.com/in/syuby-alwi-akbar-attala"], ["GitHub", "https://github.com/syubidin"]],

  hello: {
    title: "Let’s build something that lasts.",
    text: "Have a role, a project, or a half-formed idea? Send me a message. I read every email, and a short intro is all it takes to get started."
  },
  footerNote: "Built by hand, one slab at a time."
};

export default SITE;
