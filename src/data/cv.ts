import type { Locale } from '../i18n/ui';

/* ---------------------------------------------------------------------------
   Single source of truth for all CV content, in both locales.
   Locale-independent facts (links, dates, icons) live once; every
   human-readable text is a Record<Locale, ...>.
--------------------------------------------------------------------------- */

export const contact = {
  name: 'Byron G. Calderón López',
  shortName: 'Byron Calderón',
  location: 'Manta, Ecuador',
  email: 'byroncalderon201@gmail.com',
  instagram: 'https://www.instagram.com/_byroncl/',
  instagramLabel: '@_byroncl',
  website: 'https://byron.quetsana.com',
  websiteLabel: 'byron.quetsana.com',
  linkedin:
    'https://www.linkedin.com/in/byron-gregorio-calder%C3%B3n-l%C3%B3pez-488b14230',
};

export const profile: Record<
  Locale,
  { role: string; summary: string; rotating: string[] }
> = {
  es: {
    role: 'Ingeniero de Software — Full-Stack',
    summary:
      'Desarrollador full-stack con 3 años llevando productos de la idea a producción: arquitectura, desarrollo, testing y despliegue. He dirigido SaaS completos, mentoreado desarrolladores y construido plataformas que atienden a miles de usuarios simultáneos.',
    rotating: [
      'plataformas transaccionales',
      'SaaS de extremo a extremo',
      'APIs de alta concurrencia',
      'equipos que crecen',
    ],
  },
  en: {
    role: 'Software Engineer — Full-Stack',
    summary:
      'Full-stack developer with 3 years taking products from idea to production: architecture, development, testing and deployment. I have led entire SaaS products, mentored developers, and built platforms serving thousands of concurrent users.',
    rotating: [
      'transactional platforms',
      'end-to-end SaaS products',
      'high-concurrency APIs',
      'growing teams',
    ],
  },
};

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: { title: string; description: string }[];
}

export const experience: Record<Locale, ExperienceEntry[]> = {
  es: [
    {
      role: 'Ingeniero de Software — Full Stack',
      company: 'ZGames Technology',
      period: 'Abril 2025 — Actualidad',
      current: true,
      highlights: [
        {
          title: 'SaaS de mensajería omnicanal',
          description:
            'Dirigí el producto de extremo a extremo: propuesta de arquitectura, ~70% del desarrollo, documentación SDD, pruebas unitarias y E2E con Selenium, y gestión del equipo en Kanban. Sustituyó a un proveedor externo de pago (Whaticket) y se comercializa como producto independiente.',
        },
        {
          title: 'Liderazgo técnico',
          description:
            'Mentoreé a dos desarrolladores y revisé sus pull requests dentro de un equipo de 4 devs más QA y PM; definí criterios de aceptación, documenté flujos de casos de uso y reporté bugs críticos y hallazgos de seguridad en auditorías de API.',
        },
        {
          title: 'Plataforma interna de pruebas',
          description:
            'Construí de cero una herramienta propia —backend, frontend y base de datos— que ejecuta suites E2E bajo demanda desde una API, captura los errores, persiste los resultados históricos y genera reportes exportables.',
        },
        {
          title: 'Módulos de backoffice',
          description:
            'Levanté requisitos, diseñé los modelos de datos y construí el módulo de anuncios segmentados hacia jugadores y el módulo transaccional de transferencias de saldo con auditoría completa. Validados en producción sobre una plataforma con picos de 2.000–3.000 usuarios simultáneos.',
        },
        {
          title: 'Plataforma de growth hacking',
          description:
            'Desarrollé el módulo de experimentos y scoring de ideas para el equipo de crecimiento, con auditoría global de acciones y control de permisos por rol.',
        },
        {
          title: 'Reportería y datos a escala',
          description:
            'Construí un componente global de exportación a Excel y CSV, inyectable en cualquier módulo, con procesamiento en hilos para reportes de hasta 20.000 celdas. Automaticé la consolidación de balances y cierres, con dashboard de rentabilidad mensual y respaldo SQL diario vía cronjob.',
        },
      ],
    },
    {
      role: 'Pasante de Desarrollo Web',
      company: 'ZGames Technology',
      period: 'Agosto 2024 — Marzo 2025',
      highlights: [
        {
          title: 'Asistencias con IoT',
          description:
            'Lideré la solución de cálculo de nómina por horas de extremo a extremo, incluyendo el diseño del hardware y el firmware de los lectores de proximidad integrados al registro en tiempo real.',
        },
        {
          title: 'Orquestador de SMS',
          description:
            'App Android nativa en Kotlin con backend en Python para campañas masivas a 500–600 agentes; redujo un 50% el gasto en proveedores externos de mensajería.',
        },
      ],
    },
    {
      role: 'Desarrollador Full-Stack',
      company: 'Quetsana (startup)',
      period: '2023 — Actualidad',
      current: true,
      highlights: [
        {
          title: 'SaaS de finanzas',
          description:
            'Plataforma de control de ingresos y egresos en Next.js y NestJS, con tableros analíticos e integración de la pasarela PayPhone; procesa cerca de 100 transacciones diarias.',
        },
        {
          title: 'SaaS de automatización con LLMs',
          description:
            'Motor de análisis de ventas empaquetado como producto independiente y reutilizable en varios sistemas; sustituye el trabajo de análisis manual de un especialista.',
        },
        {
          title: 'Infraestructura y despliegue',
          description:
            'Administración de servidores Debian (Contabo) y AlmaLinux institucional, orquestación con Docker y despliegue continuo implementado desde cero.',
        },
      ],
    },
  ],
  en: [
    {
      role: 'Software Engineer — Full Stack',
      company: 'ZGames Technology',
      period: 'April 2025 — Present',
      current: true,
      highlights: [
        {
          title: 'Omnichannel messaging SaaS',
          description:
            'Led the product end to end: architecture proposal, ~70% of the development, SDD documentation, unit and E2E testing with Selenium, and Kanban team management. It replaced a paid external provider (Whaticket) and is now sold as a standalone product.',
        },
        {
          title: 'Technical leadership',
          description:
            'Mentored two developers and reviewed their pull requests within a team of 4 devs plus QA and PM; defined acceptance criteria, documented use-case flows, and reported critical bugs and security findings in API audits.',
        },
        {
          title: 'Internal testing platform',
          description:
            'Built an in-house tool from scratch — backend, frontend and database — that runs E2E suites on demand from an API, captures failures, persists historical results, and generates exportable reports.',
        },
        {
          title: 'Backoffice modules',
          description:
            'Gathered requirements, designed the data models, and built the segmented player-announcements module and the transactional balance-transfer module with full auditing. Validated in production on a platform with peaks of 2,000–3,000 concurrent users.',
        },
        {
          title: 'Growth hacking platform',
          description:
            'Developed the experiments and idea-scoring module for the growth team, with global action auditing and role-based permissions.',
        },
        {
          title: 'Reporting and data at scale',
          description:
            'Built a global Excel/CSV export component, injectable into any module, with threaded processing for reports of up to 20,000 cells. Automated balance consolidation and closings, with a monthly profitability dashboard and daily SQL backups via cronjob.',
        },
      ],
    },
    {
      role: 'Web Development Intern',
      company: 'ZGames Technology',
      period: 'August 2024 — March 2025',
      highlights: [
        {
          title: 'IoT attendance system',
          description:
            'Led the hourly payroll solution end to end, including hardware design and firmware for proximity readers integrated with real-time attendance tracking.',
        },
        {
          title: 'SMS orchestrator',
          description:
            'Native Android app in Kotlin with a Python backend for mass campaigns to 500–600 agents; cut external messaging provider costs by 50%.',
        },
      ],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Quetsana (startup)',
      period: '2023 — Present',
      current: true,
      highlights: [
        {
          title: 'Finance SaaS',
          description:
            'Income and expense tracking platform in Next.js and NestJS, with analytics dashboards and PayPhone payment gateway integration; processes around 100 transactions per day.',
        },
        {
          title: 'LLM automation SaaS',
          description:
            'Sales analysis engine packaged as a standalone, reusable product across several systems; replaces the manual analysis work of a specialist.',
        },
        {
          title: 'Infrastructure and deployment',
          description:
            'Administration of Debian (Contabo) and institutional AlmaLinux servers, Docker orchestration, and continuous deployment implemented from scratch.',
        },
      ],
    },
  ],
};

export interface StackItem {
  name: string;
  icon: string;
}

export interface StackGroup {
  label: Record<Locale, string>;
  items: StackItem[];
}

export const stack: StackGroup[] = [
  {
    label: { es: 'Backend', en: 'Backend' },
    items: [
      { name: 'NestJS', icon: 'simple-icons:nestjs' },
      { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
      { name: 'Spring Boot', icon: 'simple-icons:springboot' },
      { name: 'FastAPI', icon: 'simple-icons:fastapi' },
      { name: 'Express', icon: 'simple-icons:express' },
      { name: 'Flask', icon: 'simple-icons:flask' },
      { name: 'TypeScript', icon: 'simple-icons:typescript' },
      { name: 'Java', icon: 'simple-icons:openjdk' },
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'Kotlin', icon: 'simple-icons:kotlin' },
    ],
  },
  {
    label: { es: 'Frontend y Mobile', en: 'Frontend & Mobile' },
    items: [
      { name: 'Angular', icon: 'simple-icons:angular' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs' },
      { name: 'React', icon: 'simple-icons:react' },
      { name: 'Astro', icon: 'simple-icons:astro' },
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
      { name: 'Jetpack Compose', icon: 'simple-icons:jetpackcompose' },
    ],
  },
  {
    label: { es: 'Datos y mensajería', en: 'Data & Messaging' },
    items: [
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
      { name: 'MongoDB', icon: 'simple-icons:mongodb' },
      { name: 'MySQL', icon: 'simple-icons:mysql' },
      { name: 'Redis', icon: 'simple-icons:redis' },
      { name: 'Kafka', icon: 'simple-icons:apachekafka' },
      { name: 'RabbitMQ', icon: 'simple-icons:rabbitmq' },
    ],
  },
  {
    label: { es: 'DevOps', en: 'DevOps' },
    items: [
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'GitHub Actions', icon: 'simple-icons:githubactions' },
      { name: 'CI/CD', icon: 'lucide:workflow' },
      { name: 'Linux', icon: 'simple-icons:linux' },
      { name: 'Bash', icon: 'simple-icons:gnubash' },
    ],
  },
  {
    label: { es: 'Testing y calidad', en: 'Testing & Quality' },
    items: [
      { name: 'Jest', icon: 'simple-icons:jest' },
      { name: 'Pytest', icon: 'simple-icons:pytest' },
      { name: 'JUnit', icon: 'simple-icons:junit5' },
      { name: 'Supertest', icon: 'lucide:test-tube' },
      { name: 'Jasmine/Karma', icon: 'simple-icons:jasmine' },
      { name: 'Selenium', icon: 'simple-icons:selenium' },
      { name: 'Playwright', icon: 'simple-icons:playwright' },
      { name: 'Postman / Apidog', icon: 'simple-icons:postman' },
      { name: 'OpenAPI 3.0', icon: 'simple-icons:openapiinitiative' },
    ],
  },
  {
    label: { es: 'Metodologías', en: 'Methodologies' },
    items: [
      { name: 'Scrum', icon: 'lucide:refresh-cw' },
      { name: 'Kanban', icon: 'lucide:kanban' },
      { name: 'Code review', icon: 'lucide:git-pull-request' },
      {
        name: 'Criterios de aceptación',
        icon: 'lucide:clipboard-check',
      },
      { name: 'Documentación SDD', icon: 'lucide:file-check' },
      { name: 'Casos de uso', icon: 'lucide:list-checks' },
    ],
  },
];

/** Stack item names that differ between locales (tech names are shared). */
export const stackItemNames: Record<string, Record<Locale, string>> = {
  'Criterios de aceptación': {
    es: 'Criterios de aceptación',
    en: 'Acceptance criteria',
  },
  'Documentación SDD': { es: 'Documentación SDD', en: 'SDD documentation' },
  'Casos de uso': { es: 'Casos de uso', en: 'Use cases' },
};

export function stackItemName(name: string, locale: Locale): string {
  return stackItemNames[name]?.[locale] ?? name;
}

export interface AuditPillar {
  icon: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
}

export const auditedSystems: Record<Locale, string[]> = {
  es: ['Sistemas transaccionales', 'CRMs', 'Sistemas de facturación'],
  en: ['Transactional systems', 'CRMs', 'Invoicing systems'],
};

export const audits: AuditPillar[] = [
  {
    icon: 'lucide:eye',
    title: { es: 'Caja blanca', en: 'White box' },
    description: {
      es: 'Reviso el código por dentro: flujos, manejo de datos sensibles, controles de acceso y dependencias.',
      en: 'I review the code from the inside: flows, sensitive data handling, access controls, and dependencies.',
    },
  },
  {
    icon: 'lucide:eye-off',
    title: { es: 'Caja negra', en: 'Black box' },
    description: {
      es: 'Ataco la API desde afuera, sin conocimiento interno: autenticación, autorización, inyección y superficie expuesta.',
      en: 'I attack the API from the outside, with no internal knowledge: authentication, authorization, injection, and exposed surface.',
    },
  },
  {
    icon: 'lucide:test-tube',
    title: { es: 'Pruebas automatizadas', en: 'Automated testing' },
    description: {
      es: 'Suites unitarias, E2E y de penetración automatizadas, para que la auditoría sea repetible y no un evento único.',
      en: 'Automated unit, E2E, and penetration suites, so the audit is repeatable rather than a one-off event.',
    },
  },
  {
    icon: 'lucide:shield-check',
    title: { es: 'Normativas y documentación', en: 'Standards & documentation' },
    description: {
      es: 'Cada hallazgo queda documentado con severidad, evidencia y remediación, alineado a ISO 27001 y otras normativas.',
      en: 'Every finding is documented with severity, evidence, and remediation, aligned with ISO 27001 and other standards.',
    },
  },
];

export interface Project {
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: { es: 'Ghost Recipes', en: 'Ghost Recipes' },
    description: {
      es: 'Extensión publicada en el VS Code Marketplace para gestionar y reutilizar snippets y recetas de código directamente desde el editor.',
      en: 'Extension published on the VS Code Marketplace to manage and reuse code snippets and recipes directly from the editor.',
    },
    tags: ['TypeScript', 'VS Code API'],
  },
  {
    name: { es: 'Processing-Port', en: 'Processing-Port' },
    description: {
      es: 'Monitor de procesos para Windows escrito en Python: inspección de puertos y procesos activos desde una interfaz simple.',
      en: 'Windows process monitor written in Python: port and active-process inspection from a simple interface.',
    },
    tags: ['Python', 'Windows'],
  },
  {
    name: { es: 'Roguelike', en: 'Roguelike' },
    description: {
      es: 'Juego web multijugador de exploración procedural construido con Phaser 3 y comunicación en tiempo real por WebSockets.',
      en: 'Multiplayer web game with procedural exploration, built with Phaser 3 and real-time WebSocket communication.',
    },
    tags: ['Phaser 3', 'WebSockets', 'JavaScript'],
  },
];

export const education: Record<
  Locale,
  { degree: string; school: string; credentials: string[]; languages: string[] }
> = {
  es: {
    degree: 'Ingeniería en Tecnologías de la Información',
    school: 'Universidad Laica Eloy Alfaro de Manabí, Ecuador',
    credentials: [
      'AWS Data Lakehouse Demonstrated',
      'MongoDB Node.js Developer Path',
      'Inglés B1 certificado (ULEAM)',
    ],
    languages: [
      'Español (nativo)',
      'Inglés B1 certificado: lectura y escritura técnica; conversación en desarrollo',
    ],
  },
  en: {
    degree: 'B.Eng. in Information Technology',
    school: 'Universidad Laica Eloy Alfaro de Manabí, Ecuador',
    credentials: [
      'AWS Data Lakehouse Demonstrated',
      'MongoDB Node.js Developer Path',
      'Certified English B1 (ULEAM)',
    ],
    languages: [
      'Spanish (native)',
      'English B1 certified: technical reading and writing; conversation in progress',
    ],
  },
};
