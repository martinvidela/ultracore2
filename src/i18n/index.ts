import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      // Header
      'nav.home': 'Inicio',
      'nav.about': 'Nosotros',
      'nav.services': 'Servicios',
      'nav.cases': 'Casos',
      'nav.contact': 'Contacto',
      'nav.request_meeting': 'Soporte Remoto',
      
      // Hero Section
      'hero.slide1.title': 'UltraCore, tu socio tecnológico para crecer sin límites',
      'hero.slide1.subtitle': 'Impulsamos la transformación digital de tu negocio con soluciones integrales: desarrollo de software, infraestructura IT, automatización y más.',
      'hero.slide1.description': 'Tecnología estratégica, acompañamiento real y resultados medibles.',
      'hero.slide1.cta': 'Conocé cómo podemos ayudarte',
      
      'hero.slide2.title': 'Tus datos siempre protegidos. Backups seguros, automáticos y accesibles.',
      'hero.slide2.subtitle': 'Evitá pérdidas costosas con nuestras soluciones de respaldo inteligente.',
      'hero.slide2.feature1': 'Backups en la nube y físicos',
      'hero.slide2.feature2': 'Recuperación inmediata',
      'hero.slide2.feature3': 'Seguridad multicapa contra amenazas, ransomware y errores humanos',
      'hero.slide2.description': 'Copias de seguridad diarias, automáticas y protegidas contra fallos, robos o errores humanos.',
      'hero.slide2.cta': 'Resguardá tus datos ahora',
      
      'hero.slide3.title': 'Tu infraestructura IT, más segura, rápida y eficiente.',
      'hero.slide3.subtitle': 'Gestionamos, protegemos y optimizamos tus sistemas para que tu empresa nunca se detenga.',
      'hero.slide3.description': 'Ciberseguridad, soporte y tecnología que acompañan tu crecimiento. Soluciones flexibles y escalables.',
      'hero.slide3.cta': 'Optimizá tu infraestructura',
      
      'hero.cta_secondary': 'Solicitar Reunión',
      'hero.stats.experience': 'Años de Experiencia',
      'hero.stats.monitoring': 'Monitoreo Continuo',
      'hero.stats.attention': 'Atención Personalizada',
      
      // About Section
      'about.title1': '¿Quiénes',
      'about.title2': 'Somos?',
      'about.company': 'UltraCore Soluciones IT',
      'about.description': 'es una empresa con una década de experiencia, especializada en infraestructura tecnológica, desarrollo de software, administración de backups, ciberseguridad y consultoría IT. Ayudamos a las empresas a crecer de manera segura, eficiente y escalable.',
      'about.quote': 'Nos destacamos por un enfoque práctico, preventivo y personalizado, acompañando a cada cliente como un socio tecnológico y estratégico.',
      'about.experience.title': 'Experiencia',
      'about.experience.description': 'Más de 10 años transformando empresas de diferentes sectores',
      'about.focus.title': 'Enfoque',
      'about.focus.description': 'Soluciones prácticas, preventivas y completamente personalizadas',
      'about.quality.title': 'Calidad',
      'about.quality.description': 'Compromiso con la excelencia en cada proyecto y servicio',
      'about.innovation.title': 'Innovación',
      'about.innovation.description': 'Tecnologías de vanguardia para impulsar tu crecimiento',
      
      // Services Section
      'services.title1': 'Servicios',
      'services.title2': 'Principales',
      'services.description': 'Soluciones tecnológicas integrales para impulsar el crecimiento de tu empresa',
      'services.infrastructure.title': 'Infraestructura IT',
      'services.infrastructure.feature1': 'Diseño y mantenimiento de redes y servidores',
      'services.infrastructure.feature2': 'Migraciones (VMware, Proxmox, nube)',
      'services.infrastructure.feature3': 'Monitoreo proactivo y soporte remoto',
      
      'services.cybersecurity.title': 'Ciberseguridad',
      'services.cybersecurity.feature1': 'Auditorías y hardening',
      'services.cybersecurity.feature2': 'Protección contra ransomware',
      'services.cybersecurity.feature3': 'Firewalls, VPNs, monitoreo (Prometheus, Grafana)',
      
      'services.backups.title': 'Backups',
      'services.backups.feature1': 'Locales y en la nube',
      'services.backups.feature2': 'Esquema 3-2-1 y restauración',
      'services.backups.feature3': 'Gestión de versiones y recuperación ante desastres',
      
      'services.development.title': 'Desarrollo y Automatización',
      'services.development.feature1': 'Aplicaciones web (React, Laravel, Python)',
      'services.development.feature2': 'APIs, bots con IA, integraciones',
      'services.development.feature3': 'Optimización de procesos',
      
      'services.consulting.title': 'Consultoría IT',
      'services.consulting.feature1': 'Asesoramiento y estrategia',
      'services.consulting.feature2': 'Evaluación de riesgos',
      'services.consulting.feature3': 'Capacitación de equipos',
      
      // Differentials Section
      'differentials.title1': 'Ventajas',
      'differentials.title2': 'Competitivas',
      'differentials.description': 'Lo que nos diferencia en el mercado de soluciones tecnológicas',
      'differentials.attention.title': 'Atención Personalizada',
      'differentials.attention.description': 'Sin menús automáticos. Habla directamente con nuestros especialistas.',
      'differentials.preventive.title': 'Enfoque Preventivo',
      'differentials.preventive.description': 'Anticipamos problemas antes de que afecten tu operación.',
      'differentials.transparency.title': 'Transparencia Total',
      'differentials.transparency.description': 'Reportes claros y comunicación constante sobre el estado de tus sistemas.',
      'differentials.teams.title': 'Equipos Especializados',
      'differentials.teams.description': 'Profesionales certificados en las últimas tecnologías.',
      'differentials.experience.title': 'Experiencia Multisectorial',
      'differentials.experience.description': 'Finanzas, salud, retail, industria. Conocemos tu sector.',
      
      // Clients Section
      'clients.title1': 'Nuestros',
      'clients.title2': 'Clientes',
      'clients.description': 'Empresas que confían en nuestras soluciones tecnológicas',
      'clients.cryptostoker.description': 'Plataforma especializada en análisis y seguimiento de criptomonedas',
      'clients.fullpagos.description': 'Solución integral de gestión de pagos y facturación',
      
      // Cases Section
      'cases.title1': 'Casos de',
      'cases.title2': 'Éxito',
      'cases.description': 'Transformaciones reales que generaron valor tangible para nuestros clientes',
      'cases.retail.sector': 'Retail',
      'cases.retail.title': 'Migración a Proxmox + Backups Automáticos',
      'cases.retail.description': 'Migración completa de infraestructura legacy a Proxmox con implementación de sistema de backups automatizado 3-2-1, reduciendo downtime en 95% y mejorando la recuperación ante desastres.',
      'cases.retail.result1': '95% menos downtime',
      'cases.retail.result2': 'Backup automatizado',
      'cases.retail.result3': 'ROI en 8 meses',
      'cases.fintech.sector': 'Fintech',
      'cases.fintech.title': 'Plataforma de Pagos Segura',
      'cases.fintech.description': 'Desarrollo de plataforma de pagos con arquitectura de microservicios, implementando las más altas medidas de ciberseguridad y cumplimiento PCI DSS para procesamiento seguro de transacciones.',
      'cases.fintech.result1': '100% uptime',
      'cases.fintech.result2': 'Certificación PCI DSS',
      'cases.fintech.result3': '1M+ transacciones/día',
      'cases.pyme.sector': 'PyME',
      'cases.pyme.title': 'Ciberseguridad Robusta + Monitoreo 24/7',
      'cases.pyme.description': 'Implementación integral de ciberseguridad con firewalls de nueva generación, monitoreo proactivo 24/7 con Prometheus y Grafana, y capacitación del personal en mejores prácticas.',
      'cases.pyme.result1': '0 incidentes',
      'cases.pyme.result2': 'Monitoreo 24/7',
      'cases.pyme.result3': 'Equipo capacitado',
      'cases.results_label': 'Resultados clave:',
      
      // Process Section
      'process.title1': 'Proceso de',
      'process.title2': 'Trabajo',
      'process.description': 'Una metodología probada en 4 pasos para garantizar el éxito de tu proyecto',
      'process.diagnosis.title': 'Diagnóstico Inicial',
      'process.diagnosis.description': 'Evaluamos tu infraestructura actual, identificamos oportunidades de mejora y riesgos potenciales.',
      'process.proposal.title': 'Propuesta a Medida',
      'process.proposal.description': 'Diseñamos una solución personalizada que se adapte a tus necesidades específicas y presupuesto.',
      'process.implementation.title': 'Implementación Eficiente',
      'process.implementation.description': 'Ejecutamos el proyecto con metodologías ágiles, minimizando interrupciones en tu operación.',
      'process.support.title': 'Acompañamiento Continuo',
      'process.support.description': 'Brindamos soporte técnico, monitoreo proactivo y mejoras continuas para garantizar el éxito.',
      
      // Contact Section
      'contact.title1': 'Hablemos de tu',
      'contact.title2': 'Proyecto',
      'contact.description': '¿Listo para transformar tu empresa con tecnología de vanguardia? Contactanos hoy mismo.',
      'contact.info.title': 'Información de Contacto',
      'contact.social': 'Redes Sociales',
      'contact.cta.title': '¿Necesitas una solución personalizada?',
      'contact.cta.description': 'Agenda una reunión gratuita para analizar tus necesidades y descubrir cómo podemos impulsar el crecimiento de tu empresa.',
      'contact.cta.whatsapp': 'Escribir por WhatsApp',
      'contact.cta.email': 'Enviar Email',
      'contact.cta.guarantee': 'Respuesta garantizada en menos de 24 horas',
      'contact.bottom_cta.title': '¿Listo para comenzar?',
      'contact.bottom_cta.description': 'Tu transformación digital comienza con una conversación',
      'contact.bottom_cta.button': 'Iniciar Ahora',
      
      // Footer
      'footer.copyright': '© 2025 UltraCore Soluciones IT. Todos los derechos reservados.',
      'footer.tagline': 'Transformando empresas con tecnología de vanguardia',
    }
  },
  en: {
    translation: {
      // Header
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.cases': 'Cases',
      'nav.contact': 'Contact',
      'nav.request_meeting': 'Remote Support',
      
      // Hero Section
      'hero.slide1.title': 'UltraCore, your technology partner for unlimited growth',
      'hero.slide1.subtitle': 'We drive your business digital transformation with comprehensive solutions: software development, IT infrastructure, automation and more.',
      'hero.slide1.description': 'Strategic technology, real support and measurable results.',
      'hero.slide1.cta': 'Learn how we can help you',
      
      'hero.slide2.title': 'Your data always protected. Secure, automatic and accessible backups.',
      'hero.slide2.subtitle': 'Avoid costly losses with our intelligent backup solutions.',
      'hero.slide2.feature1': 'Cloud and physical backups',
      'hero.slide2.feature2': 'Immediate recovery',
      'hero.slide2.feature3': 'Multi-layer security against threats, ransomware and human errors',
      'hero.slide2.description': 'Daily, automatic backups protected against failures, theft or human errors.',
      'hero.slide2.cta': 'Protect your data now',
      
      'hero.slide3.title': 'Your IT infrastructure, more secure, fast and efficient.',
      'hero.slide3.subtitle': 'We manage, protect and optimize your systems so your company never stops.',
      'hero.slide3.description': 'Cybersecurity, support and technology that accompany your growth. Flexible and scalable solutions.',
      'hero.slide3.cta': 'Optimize your infrastructure',
      
      'hero.cta_secondary': 'Request Meeting',
      'hero.stats.experience': 'Years of Experience',
      'hero.stats.monitoring': 'Continuous Monitoring',
      'hero.stats.attention': 'Personalized Attention',
      
      // About Section
      'about.title1': 'Who',
      'about.title2': 'We Are?',
      'about.company': 'UltraCore IT Solutions',
      'about.description': 'is a company with a decade of experience, specialized in technological infrastructure, software development, backup administration, cybersecurity and IT consulting. We help companies grow in a secure, efficient and scalable way.',
      'about.quote': 'We stand out for a practical, preventive and personalized approach, accompanying each client as a technological and strategic partner.',
      'about.experience.title': 'Experience',
      'about.experience.description': 'More than 10 years transforming companies from different sectors',
      'about.focus.title': 'Focus',
      'about.focus.description': 'Practical, preventive and completely personalized solutions',
      'about.quality.title': 'Quality',
      'about.quality.description': 'Commitment to excellence in every project and service',
      'about.innovation.title': 'Innovation',
      'about.innovation.description': 'Cutting-edge technologies to drive your growth',
      
      // Services Section
      'services.title1': 'Main',
      'services.title2': 'Services',
      'services.description': 'Comprehensive technology solutions to drive your company\'s growth',
      'services.infrastructure.title': 'IT Infrastructure',
      'services.infrastructure.feature1': 'Network and server design and maintenance',
      'services.infrastructure.feature2': 'Migrations (VMware, Proxmox, cloud)',
      'services.infrastructure.feature3': 'Proactive monitoring and remote support',
      
      'services.cybersecurity.title': 'Cybersecurity',
      'services.cybersecurity.feature1': 'Audits and hardening',
      'services.cybersecurity.feature2': 'Ransomware protection',
      'services.cybersecurity.feature3': 'Firewalls, VPNs, monitoring (Prometheus, Grafana)',
      
      'services.backups.title': 'Backups',
      'services.backups.feature1': 'Local and cloud',
      'services.backups.feature2': '3-2-1 scheme and restoration',
      'services.backups.feature3': 'Version management and disaster recovery',
      
      'services.development.title': 'Development and Automation',
      'services.development.feature1': 'Web applications (React, Laravel, Python)',
      'services.development.feature2': 'APIs, AI bots, integrations',
      'services.development.feature3': 'Process optimization',
      
      'services.consulting.title': 'IT Consulting',
      'services.consulting.feature1': 'Advisory and strategy',
      'services.consulting.feature2': 'Risk assessment',
      'services.consulting.feature3': 'Team training',
      
      // Differentials Section
      'differentials.title1': 'Competitive',
      'differentials.title2': 'Advantages',
      'differentials.description': 'What sets us apart in the technology solutions market',
      'differentials.attention.title': 'Personalized Attention',
      'differentials.attention.description': 'No automatic menus. Talk directly with our specialists.',
      'differentials.preventive.title': 'Preventive Approach',
      'differentials.preventive.description': 'We anticipate problems before they affect your operation.',
      'differentials.transparency.title': 'Total Transparency',
      'differentials.transparency.description': 'Clear reports and constant communication about your systems status.',
      'differentials.teams.title': 'Specialized Teams',
      'differentials.teams.description': 'Professionals certified in the latest technologies.',
      'differentials.experience.title': 'Multi-sector Experience',
      'differentials.experience.description': 'Finance, health, retail, industry. We know your sector.',
      
      // Clients Section
      'clients.title1': 'Our',
      'clients.title2': 'Clients',
      'clients.description': 'Companies that trust in our technology solutions',
      'clients.cryptostoker.description': 'Platform specialized in cryptocurrency analysis and tracking',
      'clients.fullpagos.description': 'Comprehensive payment and billing management solution',
      
      // Cases Section
      'cases.title1': 'Success',
      'cases.title2': 'Stories',
      'cases.description': 'Real transformations that generated tangible value for our clients',
      'cases.retail.sector': 'Retail',
      'cases.retail.title': 'Proxmox Migration + Automated Backups',
      'cases.retail.description': 'Complete migration from legacy infrastructure to Proxmox with implementation of automated 3-2-1 backup system, reducing downtime by 95% and improving disaster recovery.',
      'cases.retail.result1': '95% less downtime',
      'cases.retail.result2': 'Automated backup',
      'cases.retail.result3': 'ROI in 8 months',
      'cases.fintech.sector': 'Fintech',
      'cases.fintech.title': 'Secure Payment Platform',
      'cases.fintech.description': 'Development of payment platform with microservices architecture, implementing the highest cybersecurity measures and PCI DSS compliance for secure transaction processing.',
      'cases.fintech.result1': '100% uptime',
      'cases.fintech.result2': 'PCI DSS certification',
      'cases.fintech.result3': '1M+ transactions/day',
      'cases.pyme.sector': 'SME',
      'cases.pyme.title': 'Robust Cybersecurity + 24/7 Monitoring',
      'cases.pyme.description': 'Comprehensive cybersecurity implementation with next-generation firewalls, proactive 24/7 monitoring with Prometheus and Grafana, and staff training in best practices.',
      'cases.pyme.result1': '0 incidents',
      'cases.pyme.result2': '24/7 monitoring',
      'cases.pyme.result3': 'Trained team',
      'cases.results_label': 'Key results:',
      
      // Process Section
      'process.title1': 'Work',
      'process.title2': 'Process',
      'process.description': 'A proven 4-step methodology to guarantee your project\'s success',
      'process.diagnosis.title': 'Initial Diagnosis',
      'process.diagnosis.description': 'We evaluate your current infrastructure, identify improvement opportunities and potential risks.',
      'process.proposal.title': 'Custom Proposal',
      'process.proposal.description': 'We design a personalized solution that adapts to your specific needs and budget.',
      'process.implementation.title': 'Efficient Implementation',
      'process.implementation.description': 'We execute the project with agile methodologies, minimizing interruptions in your operation.',
      'process.support.title': 'Continuous Support',
      'process.support.description': 'We provide technical support, proactive monitoring and continuous improvements to guarantee success.',
      
      // Contact Section
      'contact.title1': 'Let\'s Talk About Your',
      'contact.title2': 'Project',
      'contact.description': 'Ready to transform your company with cutting-edge technology? Contact us today.',
      'contact.info.title': 'Contact Information',
      'contact.social': 'Social Networks',
      'contact.cta.title': 'Need a custom solution?',
      'contact.cta.description': 'Schedule a free meeting to analyze your needs and discover how we can drive your company\'s growth.',
      'contact.cta.whatsapp': 'Write on WhatsApp',
      'contact.cta.email': 'Send Email',
      'contact.cta.guarantee': 'Guaranteed response in less than 24 hours',
      'contact.bottom_cta.title': 'Ready to start?',
      'contact.bottom_cta.description': 'Your digital transformation begins with a conversation',
      'contact.bottom_cta.button': 'Start Now',
      
      // Footer
      'footer.copyright': '© 2025 UltraCore IT Solutions. All rights reserved.',
      'footer.tagline': 'Transforming companies with cutting-edge technology',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;