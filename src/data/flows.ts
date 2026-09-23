import type { Locale } from '../i18n/ui';

/* ---------------------------------------------------------------------------
   Interactive system-flow diagrams. Coordinates are SVG user units on a
   860x320 viewBox; nodes are positioned by top-left corner and rendered
   as fixed-size boxes (see FlowShowcase.astro).
--------------------------------------------------------------------------- */

export interface FlowNode {
  id: string;
  label: Record<Locale, string>;
  sub?: Record<Locale, string>;
  icon?: string;
  x: number;
  y: number;
  /** Defaults to 160x56; groups usually set their own size. */
  w?: number;
  h?: number;
  /** 'group' renders as a container (label top-left, transparent fill). */
  kind?: 'box' | 'group';
}

/** Either a connection between two nodes, or a free-form SVG path. */
export type FlowEdge = { from: string; to: string } | { d: string };

export interface FlowStep {
  node: string;
  text: Record<Locale, string>;
}

export interface SystemFlow {
  key: string;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  nodes: FlowNode[];
  edges: FlowEdge[];
  steps: FlowStep[];
}

export const flows: SystemFlow[] = [
  {
    key: 'messaging',
    name: { es: 'Mensajería omnicanal', en: 'Omnichannel messaging' },
    tagline: {
      es: 'SaaS que centraliza conversaciones de varios canales en una sola bandeja, con bots y agentes.',
      en: 'SaaS that centralizes conversations from multiple channels into one inbox, with bots and agents.',
    },
    nodes: [
      {
        id: 'wa',
        label: { es: 'WhatsApp', en: 'WhatsApp' },
        icon: 'simple-icons:whatsapp',
        x: 20,
        y: 30,
      },
      {
        id: 'tg',
        label: { es: 'Telegram', en: 'Telegram' },
        icon: 'simple-icons:telegram',
        x: 20,
        y: 132,
      },
      {
        id: 'sms',
        label: { es: 'SMS', en: 'SMS' },
        icon: 'lucide:smartphone',
        x: 20,
        y: 234,
      },
      {
        id: 'gw',
        label: { es: 'API Gateway', en: 'API Gateway' },
        sub: { es: 'NestJS', en: 'NestJS' },
        icon: 'lucide:server',
        x: 250,
        y: 132,
      },
      {
        id: 'queue',
        label: { es: 'Cola de eventos', en: 'Event queue' },
        sub: { es: 'Redis', en: 'Redis' },
        icon: 'lucide:workflow',
        x: 470,
        y: 132,
      },
      {
        id: 'bot',
        label: { es: 'Bot de respuesta', en: 'Reply bot' },
        icon: 'lucide:bot',
        x: 686,
        y: 40,
      },
      {
        id: 'agents',
        label: { es: 'Bandeja de agentes', en: 'Agent inbox' },
        icon: 'lucide:inbox',
        x: 686,
        y: 224,
      },
    ],
    edges: [
      { from: 'wa', to: 'gw' },
      { from: 'tg', to: 'gw' },
      { from: 'sms', to: 'gw' },
      { from: 'gw', to: 'queue' },
      { from: 'queue', to: 'bot' },
      { from: 'queue', to: 'agents' },
    ],
    steps: [
      {
        node: 'wa',
        text: {
          es: 'Un cliente escribe por WhatsApp, Telegram o SMS.',
          en: 'A customer writes via WhatsApp, Telegram or SMS.',
        },
      },
      {
        node: 'gw',
        text: {
          es: 'El gateway en NestJS normaliza el mensaje y autentica el canal.',
          en: 'The NestJS gateway normalizes the message and authenticates the channel.',
        },
      },
      {
        node: 'queue',
        text: {
          es: 'La cola en Redis absorbe los picos y garantiza el orden de entrega.',
          en: 'The Redis queue absorbs traffic spikes and guarantees delivery order.',
        },
      },
      {
        node: 'bot',
        text: {
          es: 'El bot responde lo automatizable al instante.',
          en: 'The bot instantly answers whatever can be automated.',
        },
      },
      {
        node: 'agents',
        text: {
          es: 'Lo demás cae en la bandeja unificada donde los agentes conversan en tiempo real.',
          en: 'Everything else lands in the unified inbox where agents chat in real time.',
        },
      },
    ],
  },
  {
    key: 'testing',
    name: { es: 'Plataforma de pruebas E2E', en: 'E2E testing platform' },
    tagline: {
      es: 'Herramienta interna construida de cero que ejecuta suites E2E bajo demanda y reporta resultados históricos.',
      en: 'Internal tool built from scratch that runs E2E suites on demand and reports historical results.',
    },
    nodes: [
      {
        id: 'api',
        label: { es: 'Llamada a la API', en: 'API request' },
        sub: { es: 'Bajo demanda', en: 'On demand' },
        icon: 'lucide:send',
        x: 20,
        y: 132,
      },
      {
        id: 'runner',
        label: { es: 'Runner E2E', en: 'E2E Runner' },
        sub: { es: 'Selenium', en: 'Selenium' },
        icon: 'lucide:play',
        x: 250,
        y: 132,
      },
      {
        id: 'capture',
        label: { es: 'Captura de errores', en: 'Error capture' },
        icon: 'lucide:shield-check',
        x: 470,
        y: 40,
      },
      {
        id: 'history',
        label: { es: 'Histórico', en: 'History' },
        sub: { es: 'Base de datos', en: 'Database' },
        icon: 'lucide:database',
        x: 470,
        y: 224,
      },
      {
        id: 'reports',
        label: { es: 'Reportes', en: 'Reports' },
        sub: { es: 'Exportables', en: 'Exportable' },
        icon: 'lucide:file-spreadsheet',
        x: 686,
        y: 132,
      },
    ],
    edges: [
      { from: 'api', to: 'runner' },
      { from: 'runner', to: 'capture' },
      { from: 'runner', to: 'history' },
      { from: 'capture', to: 'history' },
      { from: 'history', to: 'reports' },
    ],
    steps: [
      {
        node: 'api',
        text: {
          es: 'Cualquier sistema dispara una suite completa con una sola llamada a la API.',
          en: 'Any system triggers a full suite with a single API call.',
        },
      },
      {
        node: 'runner',
        text: {
          es: 'El runner ejecuta las pruebas con Selenium en un entorno controlado.',
          en: 'The runner executes the tests with Selenium in a controlled environment.',
        },
      },
      {
        node: 'capture',
        text: {
          es: 'Cada fallo se captura con su contexto para diagnóstico.',
          en: 'Every failure is captured with its context for diagnosis.',
        },
      },
      {
        node: 'history',
        text: {
          es: 'Los resultados se persisten y alimentan el histórico de calidad.',
          en: 'Results are persisted and feed the quality history.',
        },
      },
      {
        node: 'reports',
        text: {
          es: 'Se generan reportes exportables listos para el equipo.',
          en: 'Exportable reports are generated, ready for the team.',
        },
      },
    ],
  },
  {
    key: 'reporting',
    name: { es: 'Reportería a escala', en: 'Reporting at scale' },
    tagline: {
      es: 'Componente global de exportación con procesamiento en hilos, para reportes de hasta 20.000 celdas.',
      en: 'Global export component with threaded processing, for reports of up to 20,000 cells.',
    },
    nodes: [
      {
        id: 'module',
        label: { es: 'Cualquier módulo', en: 'Any module' },
        sub: { es: 'Inyectable', en: 'Injectable' },
        icon: 'lucide:globe',
        x: 20,
        y: 132,
      },
      {
        id: 'exporter',
        label: { es: 'Exportador global', en: 'Global exporter' },
        icon: 'lucide:table',
        x: 250,
        y: 132,
      },
      {
        id: 'threads',
        label: { es: 'Hilos de trabajo', en: 'Worker threads' },
        sub: { es: 'Hasta 20.000 celdas', en: 'Up to 20,000 cells' },
        icon: 'lucide:cpu',
        x: 470,
        y: 132,
      },
      {
        id: 'files',
        label: { es: 'Excel / CSV', en: 'Excel / CSV' },
        icon: 'lucide:file-spreadsheet',
        x: 686,
        y: 40,
      },
      {
        id: 'dashboard',
        label: { es: 'Dashboard', en: 'Dashboard' },
        sub: { es: 'Rentabilidad mensual', en: 'Monthly profitability' },
        icon: 'lucide:gauge',
        x: 686,
        y: 224,
      },
    ],
    edges: [
      { from: 'module', to: 'exporter' },
      { from: 'exporter', to: 'threads' },
      { from: 'threads', to: 'files' },
      { from: 'threads', to: 'dashboard' },
    ],
    steps: [
      {
        node: 'module',
        text: {
          es: 'Cualquier módulo de la plataforma pide una exportación.',
          en: 'Any module in the platform requests an export.',
        },
      },
      {
        node: 'exporter',
        text: {
          es: 'El componente global arma el reporte sin duplicar código por módulo.',
          en: 'The global component builds the report without duplicating code per module.',
        },
      },
      {
        node: 'threads',
        text: {
          es: 'El procesamiento en hilos mantiene la API responsiva incluso con 20.000 celdas.',
          en: 'Threaded processing keeps the API responsive even with 20,000 cells.',
        },
      },
      {
        node: 'files',
        text: {
          es: 'El archivo Excel o CSV queda listo para descargar.',
          en: 'The Excel or CSV file is ready to download.',
        },
      },
      {
        node: 'dashboard',
        text: {
          es: 'Los cierres consolidados alimentan el dashboard de rentabilidad.',
          en: 'Consolidated closings feed the profitability dashboard.',
        },
      },
    ],
  },
  {
    key: 'cicd',
    name: { es: 'CI/CD con Docker', en: 'CI/CD with Docker' },
    tagline: {
      es: 'Flujo de entrega continua: reglas de rama, revisión automatizada de pull requests con IA y despliegue con Docker.',
      en: 'Continuous delivery flow: branch rules, AI-automated pull request review, and Docker-based deployment.',
    },
    nodes: [
      {
        id: 'push',
        label: { es: 'Git push', en: 'Git push' },
        sub: { es: 'Rama feature', en: 'Feature branch' },
        icon: 'lucide:git-branch',
        x: 20,
        y: 132,
      },
      {
        id: 'rules',
        label: { es: 'Reglas de rama', en: 'Branch rules' },
        sub: { es: 'Protecciones', en: 'Protections' },
        icon: 'lucide:shield-check',
        x: 250,
        y: 40,
      },
      {
        id: 'actions',
        label: { es: 'GitHub Actions', en: 'GitHub Actions' },
        sub: { es: 'Tests + build', en: 'Tests + build' },
        icon: 'simple-icons:githubactions',
        x: 250,
        y: 224,
      },
      {
        id: 'ai',
        label: { es: 'Revisión con IA', en: 'AI review' },
        sub: { es: 'PR automatizado', en: 'Automated PR' },
        icon: 'lucide:bot',
        x: 470,
        y: 132,
      },
      {
        id: 'docker',
        label: { es: 'Imagen Docker', en: 'Docker image' },
        icon: 'simple-icons:docker',
        x: 686,
        y: 40,
      },
      {
        id: 'deploy',
        label: { es: 'Despliegue', en: 'Deployment' },
        sub: { es: 'Debian · Contabo', en: 'Debian · Contabo' },
        icon: 'lucide:rocket',
        x: 686,
        y: 224,
      },
    ],
    edges: [
      { from: 'push', to: 'rules' },
      { from: 'push', to: 'actions' },
      { from: 'rules', to: 'ai' },
      { from: 'actions', to: 'ai' },
      { from: 'ai', to: 'docker' },
      { from: 'docker', to: 'deploy' },
    ],
    steps: [
      {
        node: 'push',
        text: {
          es: 'Cada cambio nace en una rama feature; nadie escribe directo a main.',
          en: 'Every change starts on a feature branch; nobody writes straight to main.',
        },
      },
      {
        node: 'rules',
        text: {
          es: 'Las reglas de rama exigen revisión aprobada y checks en verde antes de mergear.',
          en: 'Branch rules require an approved review and green checks before merging.',
        },
      },
      {
        node: 'actions',
        text: {
          es: 'GitHub Actions ejecuta tests y build en cada push, sin intervención manual.',
          en: 'GitHub Actions runs tests and build on every push, with no manual steps.',
        },
      },
      {
        node: 'ai',
        text: {
          es: 'Una revisión automatizada con IA comenta el pull request; el criterio final siempre es humano.',
          en: 'An AI-automated review comments on the pull request; the final call is always human.',
        },
      },
      {
        node: 'docker',
        text: {
          es: 'El merge aprobado construye la imagen Docker versionada.',
          en: 'The approved merge builds the versioned Docker image.',
        },
      },
      {
        node: 'deploy',
        text: {
          es: 'El despliegue continuo la publica en servidores Debian sin downtime.',
          en: 'Continuous deployment ships it to Debian servers with no downtime.',
        },
      },
    ],
  },
  {
    key: 'kanban',
    name: { es: 'Plataforma Kanban', en: 'Kanban platform' },
    tagline: {
      es: 'Herramienta de gestión que construí: sprints, tareas con casos de uso, criterios de aceptación y requisitos, y un tablero que sigue cada tarea hasta la rama donde se subió.',
      en: 'Management tool I built: sprints, tasks with use cases, acceptance criteria and requirements, and a board that tracks every task down to the branch it shipped on.',
    },
    nodes: [
      {
        id: 'planning',
        label: { es: 'Planificación', en: 'Planning' },
        sub: { es: 'Requisitos F / NF', en: 'F / NF requirements' },
        icon: 'lucide:notebook-pen',
        x: 20,
        y: 132,
      },
      {
        id: 'sprint',
        label: { es: 'Sprint', en: 'Sprint' },
        sub: { es: 'Tareas asignadas', en: 'Assigned tasks' },
        icon: 'lucide:kanban',
        x: 250,
        y: 132,
      },
      {
        id: 'dev',
        label: { es: 'En desarrollo', en: 'In development' },
        sub: { es: 'Desde borrador', en: 'From draft' },
        icon: 'lucide:pencil-ruler',
        x: 470,
        y: 40,
      },
      {
        id: 'testing',
        label: { es: 'En prueba', en: 'In testing' },
        sub: { es: 'Tests específicos', en: 'Specific tests' },
        icon: 'lucide:flask-conical',
        x: 470,
        y: 224,
      },
      {
        id: 'review',
        label: { es: 'En revisión', en: 'In review' },
        sub: { es: 'Subido a rama', en: 'Pushed to branch' },
        icon: 'lucide:search-check',
        x: 686,
        y: 132,
      },
    ],
    edges: [
      { from: 'planning', to: 'sprint' },
      { from: 'sprint', to: 'dev' },
      { from: 'dev', to: 'testing' },
      { from: 'testing', to: 'review' },
    ],
    steps: [
      {
        node: 'planning',
        text: {
          es: 'Cada tarea nace con requisitos funcionales y no funcionales, casos de uso y criterios de aceptación documentados.',
          en: 'Every task starts with documented functional and non-functional requirements, use cases and acceptance criteria.',
        },
      },
      {
        node: 'sprint',
        text: {
          es: 'Se crean sprints, se asignan personas y se planifica la capacidad del equipo.',
          en: 'Sprints are created, people are assigned, and team capacity is planned.',
        },
      },
      {
        node: 'dev',
        text: {
          es: 'El tablero mueve cada tarea de borrador a en desarrollo, con todo el detalle a mano.',
          en: 'The board moves each task from draft to in development, with full detail at hand.',
        },
      },
      {
        node: 'testing',
        text: {
          es: 'En prueba se ejecutan los tests específicos definidos para esa tarea.',
          en: 'In testing, the specific tests defined for that task are executed.',
        },
      },
      {
        node: 'review',
        text: {
          es: 'La revisión valida los criterios de aceptación y registra a qué rama se subió cada cambio.',
          en: 'Review validates the acceptance criteria and records which branch each change shipped on.',
        },
      },
    ],
  },
  {
    key: 'architecture',
    name: { es: 'Clean Architecture', en: 'Clean Architecture' },
    tagline: {
      es: 'Anillos concéntricos con la regla de dependencia: todo apunta hacia adentro. El dominio no conoce a nadie; la infraestructura es un detalle intercambiable.',
      en: 'Concentric rings with the dependency rule: everything points inward. The domain knows nobody; infrastructure is a swappable detail.',
    },
    nodes: [
      {
        id: 'infra',
        label: { es: 'Infraestructura', en: 'Infrastructure' },
        sub: { es: 'Web · DB · Frameworks · UI', en: 'Web · DB · Frameworks · UI' },
        icon: 'lucide:server',
        kind: 'group',
        x: 20,
        y: 20,
        w: 820,
        h: 280,
      },
      {
        id: 'adapters',
        label: { es: 'Adaptadores', en: 'Adapters' },
        sub: {
          es: 'Controllers · Presenters · Gateways',
          en: 'Controllers · Presenters · Gateways',
        },
        icon: 'lucide:plug',
        kind: 'group',
        x: 140,
        y: 62,
        w: 580,
        h: 196,
      },
      {
        id: 'usecases',
        label: { es: 'Casos de uso', en: 'Use cases' },
        sub: { es: 'Reglas de aplicación', en: 'Application rules' },
        icon: 'lucide:workflow',
        kind: 'group',
        x: 260,
        y: 104,
        w: 340,
        h: 112,
      },
      {
        id: 'domain',
        label: { es: 'Dominio', en: 'Domain' },
        sub: { es: 'Entidades puras', en: 'Pure entities' },
        icon: 'lucide:layers',
        x: 350,
        y: 150,
      },
    ],
    edges: [
      { d: 'M 60 178 L 134 178' },
      { d: 'M 180 178 L 254 178' },
      { d: 'M 295 178 L 344 178' },
      { d: 'M 800 178 L 726 178' },
      { d: 'M 680 178 L 606 178' },
      { d: 'M 565 178 L 516 178' },
    ],
    steps: [
      {
        node: 'infra',
        text: {
          es: 'Todo lo externo —web, base de datos, frameworks, UI— vive en el anillo de infraestructura: es reemplazable sin tocar el negocio.',
          en: 'Everything external — web, database, frameworks, UI — lives in the infrastructure ring: replaceable without touching the business.',
        },
      },
      {
        node: 'adapters',
        text: {
          es: 'Los adaptadores traducen entre el mundo externo y el negocio: controllers, presenters y gateways.',
          en: 'Adapters translate between the outside world and the business: controllers, presenters and gateways.',
        },
      },
      {
        node: 'usecases',
        text: {
          es: 'Los casos de uso orquestan las reglas de la aplicación sin saber qué framework los invoca.',
          en: 'Use cases orchestrate application rules without knowing which framework invokes them.',
        },
      },
      {
        node: 'domain',
        text: {
          es: 'En el centro, el dominio: entidades puras. Las dependencias siempre apuntan hacia adentro — esa es la regla de oro.',
          en: 'At the center, the domain: pure entities. Dependencies always point inward — that is the golden rule.',
        },
      },
    ],
  },
  {
    key: 'evolution',
    name: {
      es: 'Monolito y microservicios',
      en: 'Monolith & microservices',
    },
    tagline: {
      es: 'Dos topologías, un criterio: el ciclo de vida del proyecto. Un monolito modular con base compartida, o servicios independientes con base propia y comunicación por eventos.',
      en: 'Two topologies, one criterion: the project life cycle. A modular monolith with a shared database, or independent services with their own data and event-based communication.',
    },
    nodes: [
      {
        id: 'monoGroup',
        label: { es: 'Monolito modular', en: 'Modular monolith' },
        sub: { es: 'Un solo despliegue', en: 'One deployment' },
        icon: 'lucide:package',
        kind: 'group',
        x: 20,
        y: 20,
        w: 370,
        h: 280,
      },
      {
        id: 'modAuth',
        label: { es: 'Auth', en: 'Auth' },
        icon: 'lucide:users',
        x: 45,
        y: 64,
        w: 150,
        h: 44,
      },
      {
        id: 'modPay',
        label: { es: 'Pagos', en: 'Payments' },
        icon: 'lucide:credit-card',
        x: 215,
        y: 64,
        w: 150,
        h: 44,
      },
      {
        id: 'modRep',
        label: { es: 'Reportes', en: 'Reports' },
        icon: 'lucide:file-spreadsheet',
        x: 45,
        y: 124,
        w: 150,
        h: 44,
      },
      {
        id: 'modAds',
        label: { es: 'Anuncios', en: 'Announcements' },
        icon: 'lucide:megaphone',
        x: 215,
        y: 124,
        w: 150,
        h: 44,
      },
      {
        id: 'monoDb',
        label: { es: 'PostgreSQL', en: 'PostgreSQL' },
        sub: { es: 'Base compartida', en: 'Shared database' },
        icon: 'lucide:database',
        x: 130,
        y: 216,
      },
      {
        id: 'microGroup',
        label: { es: 'Microservicios', en: 'Microservices' },
        sub: {
          es: 'Despliegues independientes',
          en: 'Independent deployments',
        },
        icon: 'lucide:container',
        kind: 'group',
        x: 470,
        y: 20,
        w: 370,
        h: 280,
      },
      {
        id: 'svcPay',
        label: { es: 'Pagos', en: 'Payments' },
        sub: { es: 'Servicio propio', en: 'Own service' },
        icon: 'lucide:credit-card',
        x: 490,
        y: 64,
        w: 150,
        h: 44,
      },
      {
        id: 'dbPay',
        label: { es: 'DB propia', en: 'Own DB' },
        icon: 'lucide:database',
        x: 676,
        y: 64,
        w: 145,
        h: 44,
      },
      {
        id: 'broker',
        label: { es: 'Broker de eventos', en: 'Event broker' },
        sub: { es: 'RabbitMQ · Kafka', en: 'RabbitMQ · Kafka' },
        icon: 'lucide:workflow',
        x: 490,
        y: 138,
        w: 331,
        h: 44,
      },
      {
        id: 'svcUsers',
        label: { es: 'Usuarios', en: 'Users' },
        sub: { es: 'Servicio propio', en: 'Own service' },
        icon: 'lucide:users',
        x: 490,
        y: 220,
        w: 150,
        h: 44,
      },
      {
        id: 'dbUsers',
        label: { es: 'DB propia', en: 'Own DB' },
        icon: 'lucide:database',
        x: 676,
        y: 220,
        w: 145,
        h: 44,
      },
    ],
    edges: [
      { from: 'modRep', to: 'monoDb' },
      { from: 'modAds', to: 'monoDb' },
      { d: 'M 395 160 L 464 160' },
      { from: 'svcPay', to: 'dbPay' },
      { from: 'svcUsers', to: 'dbUsers' },
      { from: 'svcPay', to: 'broker' },
      { from: 'broker', to: 'svcUsers' },
    ],
    steps: [
      {
        node: 'monoGroup',
        text: {
          es: 'Un proyecto nuevo arranca como monolito modular: un solo despliegue con módulos delimitados por dominio.',
          en: 'A new project starts as a modular monolith: one deployment with modules bounded by domain.',
        },
      },
      {
        node: 'monoDb',
        text: {
          es: 'Los módulos comparten base de datos y transacciones: simple y rápido mientras el producto se valida.',
          en: 'Modules share the database and transactions: simple and fast while the product is being validated.',
        },
      },
      {
        node: 'microGroup',
        text: {
          es: 'Cuando el ciclo de vida lo exige —escala, equipos, despliegues independientes— extraigo servicios uno a uno.',
          en: 'When the life cycle demands it — scale, teams, independent deployments — I extract services one by one.',
        },
      },
      {
        node: 'svcPay',
        text: {
          es: 'Cada servicio se despliega solo y tiene su propia base de datos: nadie se acopla por los datos de otro.',
          en: 'Each service deploys on its own and owns its database: nobody couples through someone else’s data.',
        },
      },
      {
        node: 'broker',
        text: {
          es: 'Los servicios se comunican por eventos a través del broker, nunca tocando la base del otro.',
          en: 'Services communicate through events via the broker, never by touching each other’s database.',
        },
      },
    ],
  },
  {
    key: 'payments',
    name: { es: 'Pasarela de pagos', en: 'Payment gateway' },
    tagline: {
      es: 'Integración de cobros de extremo a extremo con PayPhone: del checkout a la conciliación, en producción con ~100 transacciones diarias.',
      en: 'End-to-end payment integration with PayPhone: from checkout to reconciliation, in production with ~100 daily transactions.',
    },
    nodes: [
      {
        id: 'checkout',
        label: { es: 'Checkout', en: 'Checkout' },
        sub: { es: 'Web · Mobile', en: 'Web · Mobile' },
        icon: 'lucide:smartphone',
        x: 20,
        y: 132,
      },
      {
        id: 'api',
        label: { es: 'API de pagos', en: 'Payments API' },
        sub: { es: 'Transacción pendiente', en: 'Pending transaction' },
        icon: 'lucide:server',
        x: 250,
        y: 132,
      },
      {
        id: 'gateway',
        label: { es: 'PayPhone', en: 'PayPhone' },
        sub: { es: 'Pasarela', en: 'Gateway' },
        icon: 'lucide:credit-card',
        x: 470,
        y: 132,
      },
      {
        id: 'webhook',
        label: { es: 'Confirmación', en: 'Confirmation' },
        sub: { es: 'Webhook validado', en: 'Validated webhook' },
        icon: 'lucide:circle-check',
        x: 686,
        y: 40,
      },
      {
        id: 'ledger',
        label: { es: 'Registro', en: 'Ledger' },
        sub: { es: 'Conciliación', en: 'Reconciliation' },
        icon: 'lucide:database',
        x: 686,
        y: 224,
      },
    ],
    edges: [
      { from: 'checkout', to: 'api' },
      { from: 'api', to: 'gateway' },
      { from: 'gateway', to: 'webhook' },
      { from: 'webhook', to: 'ledger' },
    ],
    steps: [
      {
        node: 'checkout',
        text: {
          es: 'El cliente inicia el pago desde el checkout web o mobile.',
          en: 'The customer starts the payment from the web or mobile checkout.',
        },
      },
      {
        node: 'api',
        text: {
          es: 'La API crea la transacción en estado pendiente y delega el cobro a la pasarela.',
          en: 'The API creates the transaction as pending and delegates the charge to the gateway.',
        },
      },
      {
        node: 'gateway',
        text: {
          es: 'PayPhone procesa el pago; los datos sensibles de tarjeta nunca tocan nuestros servidores.',
          en: 'PayPhone processes the payment; sensitive card data never touches our servers.',
        },
      },
      {
        node: 'webhook',
        text: {
          es: 'La confirmación llega por webhook y se valida contra la transacción pendiente — nunca se confía solo en el cliente.',
          en: 'Confirmation arrives via webhook and is validated against the pending transaction — the client alone is never trusted.',
        },
      },
      {
        node: 'ledger',
        text: {
          es: 'Cada movimiento queda registrado y conciliado para los tableros financieros.',
          en: 'Every movement is recorded and reconciled for the financial dashboards.',
        },
      },
    ],
  },
  {
    key: 'audit',
    name: { es: 'Auditoría de APIs', en: 'API audits' },
    tagline: {
      es: 'Auditorías de caja blanca y caja negra sobre APIs, con pruebas automatizadas, hallazgos documentados y alineación a normativas como ISO 27001.',
      en: 'White-box and black-box API audits, with automated testing, documented findings, and alignment to standards like ISO 27001.',
    },
    nodes: [
      {
        id: 'target',
        label: { es: 'API objetivo', en: 'Target API' },
        sub: { es: 'Alcance definido', en: 'Defined scope' },
        icon: 'lucide:crosshair',
        x: 20,
        y: 132,
      },
      {
        id: 'whitebox',
        label: { es: 'Caja blanca', en: 'White box' },
        sub: { es: 'Código · flujos', en: 'Code · flows' },
        icon: 'lucide:eye',
        x: 250,
        y: 40,
      },
      {
        id: 'blackbox',
        label: { es: 'Caja negra', en: 'Black box' },
        sub: { es: 'Desde afuera', en: 'From outside' },
        icon: 'lucide:eye-off',
        x: 250,
        y: 224,
      },
      {
        id: 'suites',
        label: { es: 'Suites automatizadas', en: 'Automated suites' },
        sub: {
          es: 'Unitarias · E2E · pentest',
          en: 'Unit · E2E · pentest',
        },
        icon: 'lucide:test-tube',
        x: 470,
        y: 132,
      },
      {
        id: 'report',
        label: { es: 'Informe', en: 'Report' },
        sub: { es: 'Todo documentado', en: 'Fully documented' },
        icon: 'lucide:file-search',
        x: 686,
        y: 40,
      },
      {
        id: 'compliance',
        label: { es: 'Cumplimiento', en: 'Compliance' },
        sub: { es: 'ISO 27001', en: 'ISO 27001' },
        icon: 'lucide:shield-check',
        x: 686,
        y: 224,
      },
    ],
    edges: [
      { from: 'target', to: 'whitebox' },
      { from: 'target', to: 'blackbox' },
      { from: 'whitebox', to: 'suites' },
      { from: 'blackbox', to: 'suites' },
      { from: 'suites', to: 'report' },
      { from: 'suites', to: 'compliance' },
    ],
    steps: [
      {
        node: 'target',
        text: {
          es: 'Toda auditoría arranca definiendo el alcance: endpoints, roles y superficie de ataque de la API.',
          en: 'Every audit starts by defining the scope: endpoints, roles, and the API’s attack surface.',
        },
      },
      {
        node: 'whitebox',
        text: {
          es: 'En caja blanca reviso el código por dentro: flujos, manejo de datos sensibles y controles de acceso.',
          en: 'In white box I review the code from the inside: flows, sensitive data handling, and access controls.',
        },
      },
      {
        node: 'blackbox',
        text: {
          es: 'En caja negra ataco la API desde afuera, sin conocimiento interno, como lo haría un tercero.',
          en: 'In black box I attack the API from the outside, with no internal knowledge, as a third party would.',
        },
      },
      {
        node: 'suites',
        text: {
          es: 'Automatizo las pruebas —unitarias, E2E y de penetración— para que la auditoría sea repetible, no un evento único.',
          en: 'I automate the tests — unit, E2E and penetration — so the audit is repeatable, not a one-off event.',
        },
      },
      {
        node: 'report',
        text: {
          es: 'Cada hallazgo queda documentado con severidad, evidencia y remediación propuesta.',
          en: 'Every finding is documented with severity, evidence, and a proposed remediation.',
        },
      },
      {
        node: 'compliance',
        text: {
          es: 'El proceso se alinea a normativas como ISO 27001 para que el cumplimiento sea verificable.',
          en: 'The process aligns with standards like ISO 27001 so compliance is verifiable.',
        },
      },
    ],
  },
];
