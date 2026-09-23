export type Locale = 'es' | 'en';

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

const es = {
  'nav.experience': 'Experiencia',
  'nav.systems': 'Sistemas',
  'nav.projects': 'Proyectos',
  'nav.stack': 'Stack',
  'nav.contact': 'Contacto',
  'nav.aria': 'Navegación principal',
  'nav.backToTop': 'Volver al inicio',
  'theme.toggle': 'Cambiar tema de color',
  'lang.switch': 'Switch to English',
  'lang.label': 'EN',
  'skip.link': 'Saltar al contenido',
  'hero.available': 'Disponible para nuevos retos',
  'hero.cta.email': 'Escribime',
  'hero.cta.linkedin': 'LinkedIn',
  'hero.rotating.prefix': 'Construyo',
  'section.experience': 'Experiencia',
  'section.systems': 'Sistemas en acción',
  'section.systems.hint':
    'Diagramas interactivos de sistemas reales que diseñé y construí. Elegí uno y seguí el flujo.',
  'section.projects': 'Proyectos open source',
  'section.stack': 'Stack técnico',
  'section.education': 'Educación y credenciales',
  'education.training': 'Formación',
  'education.credentials': 'Credenciales',
  'education.languages': 'Idiomas',
  'experience.current': 'Actual',
  'projects.techAria': 'Tecnologías de',
  'flows.stepsAria': 'Pasos del flujo',
  'flows.diagramAria': 'Diagrama de flujo del sistema',
  'flows.tablistAria': 'Elegir sistema',
  'footer.title': 'Trabajemos juntos',
  'footer.pitch':
    '¿Tenés un proyecto o una vacante donde pueda aportar? Escribime y conversamos.',
  'footer.copy': 'Copiar correo',
  'footer.copied': '¡Copiado!',
  'a11y.newTab': '(se abre en una pestaña nueva)',
} as const;

export type UIKey = keyof typeof es;

// Typing `en` as Record<UIKey, string> forces both locales to stay in sync:
// a key added to `es` without its `en` counterpart fails to compile.
const en: Record<UIKey, string> = {
  'nav.experience': 'Experience',
  'nav.systems': 'Systems',
  'nav.projects': 'Projects',
  'nav.stack': 'Stack',
  'nav.contact': 'Contact',
  'nav.aria': 'Main navigation',
  'nav.backToTop': 'Back to top',
  'theme.toggle': 'Toggle color theme',
  'lang.switch': 'Cambiar a español',
  'lang.label': 'ES',
  'skip.link': 'Skip to content',
  'hero.available': 'Open to new challenges',
  'hero.cta.email': 'Get in touch',
  'hero.cta.linkedin': 'LinkedIn',
  'hero.rotating.prefix': 'I build',
  'section.experience': 'Experience',
  'section.systems': 'Systems in action',
  'section.systems.hint':
    'Interactive diagrams of real systems I designed and built. Pick one and follow the flow.',
  'section.projects': 'Open source projects',
  'section.stack': 'Tech stack',
  'section.education': 'Education & credentials',
  'education.training': 'Education',
  'education.credentials': 'Credentials',
  'education.languages': 'Languages',
  'experience.current': 'Current',
  'projects.techAria': 'Technologies of',
  'flows.stepsAria': 'Flow steps',
  'flows.diagramAria': 'System flow diagram',
  'flows.tablistAria': 'Choose a system',
  'footer.title': "Let's work together",
  'footer.pitch':
    'Got a project or a role where I can add value? Drop me a line and let’s talk.',
  'footer.copy': 'Copy email',
  'footer.copied': 'Copied!',
  'a11y.newTab': '(opens in a new tab)',
};

export const ui: Record<Locale, Record<UIKey, string>> = { es, en };

export function useT(locale: Locale) {
  return (key: UIKey): string => ui[locale][key];
}

export function resolveLocale(value: string | undefined): Locale {
  return value === 'en' ? 'en' : 'es';
}

/** Path to the same page in the other locale. */
export function altLocalePath(locale: Locale): string {
  return locale === 'es' ? '/en/' : '/';
}
