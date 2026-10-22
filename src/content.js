const SITE = {
  name: "Syuby Alwi Akbar Attala",
  headline: ["Building", "digital", "solutions", "with purpose"],
  roles: ["Full Stack Developer", "Backend & Systems Developer", "Mobile App Developer"],
  status: "Open to entry-level roles",
  coords: "6.2397° S, 107.0015° E",

  photo: "assets/face.png",
  about: [
    "I like things that hold weight: clean schemas, bulletproof transaction invariants, and systems people can lean on.",
    "I engineer high-integrity backend systems in Java 17 & Spring Boot (double-entry core banking ledgers, deterministic concurrency control, and sharded balances), build full stack web apps with PHP & Laravel, and configured enterprise accounting systems for real clients.",
    "Right now I’m looking for an entry-level Backend, Full Stack, or Software Engineer role where reliability and architectural rigor matter."
  ],
  facts: [
    ["Based in", "Bekasi, Indonesia"],
    ["Studied", "Informatics Management, Politeknik LP3I Jakarta"],
    ["GPA", "3.70 / 4.00"],
    ["Languages", "English (TOEIC 945), Indonesian"]
  ],

  resume: "assets/resume.pdf",
  whatsapp: "https://wa.me/6289519850089?text=Halo%20Syuby,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi.",

  projects: [
    {
      year: "2026",
      category: "Backend & Systems",
      title: "CERMAT: Core-Banking Ledger Engine",
      text: "A production-grade double-entry ledger & financial engine designed to eliminate race conditions, double-spending, and deadlocks. Built with Java 17 and Spring Boot 3, featuring 16-shard cash scaling (+31% throughput) and 104 automated tests (92% JaCoCo coverage).",
      stack: ["Java 17", "Spring Boot 3", "PostgreSQL", "Flyway", "Docker", "JWT", "JaCoCo", "REST APIs"],
      image: "assets/projects/cermat.png",
      demo: "https://github.com/syubidin/cermat#readme",
      repo: "https://github.com/syubidin/cermat",
      caseStudy: {
        role: "Lead Backend & Distributed Systems Engineer",
        timeline: "8-Week Incremental Build",
        overview: "CERMAT (Catatan Elektronik, Rekonsiliasi, Mutasi, Audit, Transaksi) simulates core-banking ledger challenges where money can never duplicate, disappear, or settle inconsistently under concurrent stress.",
        challenges: [
          "Eliminating double-spending and race conditions when multiple concurrent debit requests hit the same account simultaneously.",
          "Preventing transaction deadlocks when cross-account transfers (A→B and B→A) execute at the exact same millisecond.",
          "Mitigating severe hot-row lock contention on the central system cash account during peak deposit volume.",
          "Preventing Formula Injection attacks and redundant reprocessing in automated partner CSV reconciliation."
        ],
        solutions: [
          "Implemented Double-Entry Bookkeeping (Debit = Credit) with kernel-level database triggers enforcing strict append-only ledger immutability (blocking UPDATE/DELETE).",
          "Engineered atomic idempotency resolution using 'INSERT ... ON CONFLICT DO NOTHING' paired with SHA-256 payload verification.",
          "Applied Pessimistic Write Locking ('SELECT ... FOR UPDATE') with deterministic ordering ('ORDER BY id') to guarantee zero transaction deadlocks.",
          "Architected 16 dynamic balance shards for system cash accounts, reducing lock queue time and boosting deposit throughput by +30.9%.",
          "Constructed runtime fraud detection rule engine (HIGH_AMOUNT, VELOCITY, NEW_PAYEE) and instant account freezing capabilities.",
          "Secured multi-role RBAC via Stateless JWT (HS256), strict character whitelisting against CSV injection, and in-memory sliding-window rate limiting before BCrypt hashing."
        ],
        highlights: [
          "104 automated unit, integration, and stress tests passing with 92% JaCoCo code coverage",
          "Zero deadlocks and zero balance underflow proven under 150 concurrent transfers",
          "Global mathematical invariant guarantee: total circulating balance strictly equals 0",
          "Automated reconciliation engine matching partner records with 4 distinct discrepancy states"
        ]
      }
    },
    {
      year: "2026",
      category: "Full Stack",
      title: "CRM & Alumni Tracer Study System",
      text: "Final year project: an end-to-end CRM that tracks alumni, collects tracer study data and produces reports. Built from database schema to responsive UI, validated with institution staff over 3+ sessions.",
      stack: ["PHP", "Tailwind", "CodeIgniter 3", "MySQL", "Responsive design", "HTML", "CSS", "JavaScript"],
      image: "assets/projects/elp-crm.png",
      demo: "https://syubidin-crm.infinityfreeapp.com",
      repo: "https://github.com/syubidin/elp-crm",
      caseStudy: {
        role: "Lead Full Stack Developer & Database Designer",
        timeline: "Oct 2025 – Aug 2026",
        overview: "An integrated web platform designed for English Language Programs to bridge alumni tracking, tracer study data collection, and automatic accreditation reporting.",
        challenges: [
          "Manual tracer study surveys previously suffered from low response rates and error-prone spreadsheet consolidation.",
          "Need for role-based permissions separating administrative staff, institutional leadership, and alumni respondents.",
          "Dynamic questionnaire requirements where tracer questions evolve across accreditation cycles."
        ],
        solutions: [
          "Architected a normalized MySQL relational database schema ensuring data consistency across survey waves.",
          "Developed custom report-generation modules with statistical summaries and Excel/PDF export readiness.",
          "Implemented responsive, mobile-first interface using Tailwind CSS and lightweight CodeIgniter 3 architecture for rapid response times on budget hosting.",
          "Iterated with 3+ rounds of usability testing alongside campus career center officers."
        ],
        highlights: [
          "100% automated aggregation of alumni employment metrics",
          "Role-based authentication & session security",
          "Comprehensive tracer study questionnaire management"
        ]
      }
    },
    {
      year: "Soon",
      category: "Mobile",
      title: "PlantCare & EcoMobile (Coming Soon)",
      text: "Upcoming mobile application built with cross-platform Flutter architecture, dynamic state management, and cloud backend integration.",
      stack: ["Flutter", "Dart", "Supabase", "REST APIs"],
      image: "assets/projects/project-two.png",
      demo: "",
      repo: "https://github.com/syubidin/PlantCare"
    }
  ],

  trail: [
    {
      when: "Feb 2026 to Mar 2026", kind: "Work", title: "System Implementor (Internship)", place: "PT Erasoft Teknologi Indonesia",
      points: ["Supported rollout of a .NET accounting application across 5+ modules, including General Ledger.", "Configured modules, tested the system and documented setup steps."]
    },
    {
      when: "Oct 2025 to Dec 2025", kind: "Work", title: "Warehouse Admin (Internship)", place: "PT Rizki Asa Buana",
      points: ["Processed 300+ goods request forms with 100% data accuracy.", "Created 100+ delivery notes and supported monthly stock reconciliation."]
    },
    {
      when: "Dec 2024 to Dec 2025", kind: "Led", title: "Chairman, Student Executive Board (BEM)", place: "Politeknik LP3I Jakarta, Bekasi Campus",
      points: ["Led 5+ divisions and coordinated 10+ campus programs.", "Main liaison between students and campus management."]
    },
    {
      when: "Sep 2023 to Aug 2026", kind: "Study", title: "Diploma in Informatics Management", place: "Politeknik LP3I Jakarta",
      points: ["Best Graduate of Informatics Management 2026.", "Semifinalist, National Environmental University Debating Championship Festival LIKE 2."]
    },
    {
      when: "Sep 2022 to Dec 2022", kind: "Work", title: "Front-End Developer (Internship)", place: "PT Kingtan Technology Corp.",
      points: ["Turned approved Figma designs into 5+ responsive pages with a team of four."]
    },
    {
      when: "Jan 2022 to Jan 2023", kind: "Led", title: "Chairman, English Club", place: "SMKN 2 Kota Bekasi",
      points: ["Ran weekly sessions for 20+ members on speaking, debating and public communication."]
    }
  ],

  kit: {
    "Front of house": ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "React", "Flutter", "Responsive design", "SDLC"],
    "Back of house": ["Java 17", "Spring Boot 3", "PHP", "CodeIgniter", "Laravel", "Python", "C++", "Node.js basics"],
    "Data and APIs": ["PostgreSQL", "MySQL", "Flyway", "Supabase", "Double-Entry Ledger", "Schema design", "REST APIs"],
    "Workshop": ["Git", "Docker", "JaCoCo", "Postman", "Swagger / OpenAPI", "Figma", "Linux basics", "AI-assisted development"]
  },

  certs: [
    { name: "Associate Data Scientist", issuer: "Institut Teknologi Bandung", year: "2024", id: "ITB-ADS-2024" },
    { name: "Junior Web Developer", issuer: "BNSP (Badan Nasional Sertifikasi)", year: "2024", id: "BNSP-JWD-2024" },
    { name: "Junior Database Administrator", issuer: "BNSP", year: "2024", id: "BNSP-JDA-2024" },
    { name: "Application Programmer", issuer: "BNSP", year: "2024", id: "BNSP-AP-2024" },
    { name: "Tenaga Operasi Komputer", issuer: "BNSP", year: "2023", id: "BNSP-TOK-2023" },
    { name: "Project Based Learning Competence", issuer: "PT Bangun Karya Abadi", year: "2023", id: "BKA-PBL-2023" }
  ],

  email: "syubyattala806@gmail.com",
  links: [
    ["WhatsApp", "https://wa.me/6289519850089?text=Halo%20Syuby,%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi."],
    ["LinkedIn", "https://linkedin.com/in/syuby-alwi-akbar-attala"],
    ["GitHub", "https://github.com/syubidin"]
  ],

  hello: {
    title: "Let’s build something that lasts.",
    text: "Have a role, a project, or a half-formed idea? Send me a message. I read every email, and a short intro is all it takes to get started."
  },
  footerNote: "Built by hand, one slab at a time."
};

export default SITE;