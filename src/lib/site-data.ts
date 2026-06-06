/**
 * FIRST GEN CHRONICLES — EDITABLE SITE CONTENT
 * =============================================
 * Stacy: This file is your main content hub. Edit text, links, and navigation here.
 * After saving, commit and push to GitHub — Vercel will update the live site automatically.
 */

// ─── SITE IDENTITY ───────────────────────────────────────────────────────────
// Edit site name, tagline, and contact email here.

export const siteConfig = {
  name: "First Gen Chronicles",
  nameEs: "First Gen Chronicles",
  creator: "Stacy Lomeli",
  email: "stacylomeli.biz@gmail.com",
  tagline:
    "Guidance for first-generation students and Hispanic families navigating school, college, and beyond.",
  taglineEs:
    "Orientación para estudiantes de primera generación y familias hispanas que navegan la escuela, la universidad y más allá.",
  mission:
    "A bilingual resource platform built by a first-generation student, for students and families who are figuring everything out without a roadmap.",
  missionEs:
    "Una plataforma bilingüe de recursos creada por una estudiante de primera generación, para estudiantes y familias que están descubriendo todo sin un mapa.",
};

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
// Add or remove nav items here. href = page path.

export const navLinksEn = [
  { label: "Start Here", href: "/start-here" },
  { label: "Resources", href: "/resources" },
  { label: "Chronicles", href: "/chronicles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const navLinksEs = [
  { label: "Comienza Aquí", href: "/es/comienza-aqui" },
  { label: "Recursos", href: "/es/recursos" },
  { label: "Crónicas", href: "/es/cronicas" },
  { label: "Sobre Mí", href: "/es/sobre-mi" },
  { label: "Contacto", href: "/es/contacto" },
];

// ─── HERO & HOME CONTENT ───────────────────────────────────────────────────────

export const homeContent = {
  en: {
    heroSubtitle:
      "Real guidance, practical tips, and firsthand experiences — from someone who has been where you are.",
    introTitle: "You don't have to figure it out alone",
    introParagraphs: [
      "First Gen Chronicles is a space I created to support first-generation students in high school and college — students who are navigating everything for the first time, often without a roadmap.",
      "As a first-gen Latina student myself, I know how confusing, overwhelming, and isolating the process can feel. That's exactly why I built this platform: to give you the guidance, clarity, and support I wish I had when I was starting my journey.",
      "Here you'll find real advice, practical tips, opportunities, and my firsthand experiences — everything from the big decisions to the small details no one ever explains.",
    ],
    ctaStart: "Start Here",
    ctaResources: "Resources",
    ctaAbout: "About Stacy",
    ctaContact: "Contact",
    bilingualTitle: "Resources in English and Spanish",
    bilingualText:
      "Resources in English and Spanish so students and families can feel informed, confident, and included.",
    bilingualDetail:
      "This space isn't only for English-speaking students. It's also for Hispanic families, Spanish-dominant students, and anyone who grew up translating FAFSA forms, emails, applications, and deadlines for their parents.",
    welcomeClosing:
      "Whether you're preparing for college, navigating your first semester, or balancing school, work, and life — you're not alone. Welcome — I'm truly glad you're here.",
  },
  es: {
    heroSubtitle:
      "Orientación real, consejos prácticos y experiencias personales — de alguien que ha estado donde tú estás.",
    introTitle: "No tienes que descubrirlo todo solo/a",
    introParagraphs: [
      "First Gen Chronicles es un espacio que creé para apoyar a estudiantes de primera generación en la escuela secundaria y la universidad — estudiantes que están navegando todo por primera vez, muchas veces sin un mapa.",
      "Como estudiante latina de primera generación, sé lo confuso, abrumador y solitario que puede sentirse este proceso. Por eso construí esta plataforma: para darte la orientación, claridad y apoyo que a mí me hubiera gustado tener cuando comencé mi camino.",
      "Aquí encontrarás consejos reales, recomendaciones prácticas, oportunidades y mis experiencias personales — desde las decisiones más grandes hasta los detalles pequeños que nadie explica.",
    ],
    ctaStart: "Comienza Aquí",
    ctaResources: "Recursos",
    ctaAbout: "Sobre Mí",
    ctaContact: "Contacto",
    bilingualTitle: "Recursos en inglés y español",
    bilingualText:
      "Recursos en inglés y español para que estudiantes y familias se sientan informados/as, seguros/as e incluidos/as.",
    bilingualDetail:
      "Este espacio no es solo para estudiantes que hablan inglés. También es para familias hispanas, estudiantes que dominan más el español, y quienes crecieron traduciendo formularios de FAFSA, correos, aplicaciones y fechas límite para sus padres.",
    welcomeClosing:
      "Ya sea que estés preparándote para la universidad, navegando tu primer semestre o equilibrando la escuela, el trabajo y la vida — no estás solo/a. Bienvenido/a — me alegra muchísimo que estés aquí.",
  },
};

// ─── RESOURCE PATHWAYS (Start Here) ────────────────────────────────────────────
// Edit titles, descriptions, and href paths for each audience card.

export const pathways = {
  en: [
    {
      title: "High School Students",
      description:
        "Prepare for college early, build your resume, explore programs, and navigate applications with confidence.",
      href: "/resources#college-applications",
      icon: "graduation",
    },
    {
      title: "College Students",
      description:
        "Adjust to campus life, find internships and research, manage financial aid, and build community.",
      href: "/resources#study-skills",
      icon: "campus",
    },
    {
      title: "Hispanic / Latino Families",
      description:
        "Accessible guidance in Spanish and English for families supporting their students through school and college.",
      href: "/resources#families",
      icon: "family",
    },
    {
      title: "Pre-Health / Pre-Med Students",
      description:
        "Navigate the pre-med track, research opportunities, and programs that prepare you for health careers.",
      href: "/resources#pre-med",
      icon: "health",
    },
    {
      title: "Opportunities & Programs",
      description:
        "Internships, leadership roles, dual enrollment, and programs worth exploring early.",
      href: "/resources#opportunities",
      icon: "opportunity",
    },
    {
      title: "Financial Aid & FAFSA Basics",
      description:
        "Understand scholarships, financial aid, FAFSA, and what first-gen students should know.",
      href: "/resources#fafsa",
      icon: "finance",
    },
  ],
  es: [
    {
      title: "Estudiantes de Escuela Secundaria",
      description:
        "Prepárate para la universidad desde temprano, construye tu currículum, explora programas y navega las solicitudes con confianza.",
      href: "/es/recursos#solicitudes",
      icon: "graduation",
    },
    {
      title: "Estudiantes Universitarios",
      description:
        "Adáptate a la vida universitaria, encuentra pasantías e investigación, maneja la ayuda financiera y construye comunidad.",
      href: "/es/recursos#estudio",
      icon: "campus",
    },
    {
      title: "Familias Hispanas / Latinas",
      description:
        "Orientación accesible en español e inglés para familias que apoyan a sus estudiantes en la escuela y la universidad.",
      href: "/es/recursos#familias",
      icon: "family",
    },
    {
      title: "Estudiantes Pre-Medicina / Pre-Salud",
      description:
        "Navega la ruta pre-medicina, oportunidades de investigación y programas que te preparan para carreras en salud.",
      href: "/es/recursos#pre-medicina",
      icon: "health",
    },
    {
      title: "Oportunidades y Programas",
      description:
        "Pasantías, roles de liderazgo, dual enrollment y programas que vale la pena explorar desde temprano.",
      href: "/es/recursos#oportunidades",
      icon: "opportunity",
    },
    {
      title: "Ayuda Financiera y FAFSA",
      description:
        "Entiende becas, ayuda financiera, FAFSA y lo que los estudiantes de primera generación deben saber.",
      href: "/es/recursos#fafsa",
      icon: "finance",
    },
  ],
};

// ─── ABOUT STACY ───────────────────────────────────────────────────────────────
// Edit Stacy's story here. Keep facts accurate — do not invent personal details.

export const aboutContent = {
  en: {
    pageTitle: "About Stacy",
    headline: "Built by a first-gen student, for first-gen students",
    paragraphs: [
      "Hi — I'm Stacy Lomeli, a first-generation Mexican-American student at Georgia Tech studying neuroscience on the pre-med track.",
      "My parents were born in Mexico, and I grew up navigating two languages and two cultures. From translating FAFSA forms for my family to figuring out college applications on my own, I know what it feels like to be the first person in your family to walk this path.",
      "As a first-gen Latina, I've experienced the confusion, the wins, and everything in between. Those experiences are what motivated me to create First Gen Chronicles — so students and families don't have to figure everything out alone.",
      "Through this site, I share the guidance, resources, and encouragement I wish I had when I was starting out. Whether you're in high school, college, or supporting a student as a parent, I hope you find something here that helps you feel more confident and supported.",
    ],
    facts: [
      { label: "Background", value: "First-generation Mexican-American" },
      { label: "Major", value: "Neuroscience" },
      { label: "Track", value: "Pre-med" },
      { label: "School", value: "Georgia Institute of Technology" },
    ],
    photoPlaceholder: "Photo of Stacy — add your approved photo here",
  },
  es: {
    pageTitle: "Sobre Mí",
    headline: "Creado por una estudiante de primera generación, para estudiantes de primera generación",
    paragraphs: [
      "Hola — soy Stacy Lomeli, una estudiante mexicoamericana de primera generación en Georgia Tech, estudiando neurociencia en la ruta pre-medicina.",
      "Mis padres nacieron en México, y crecí navegando dos idiomas y dos culturas. Desde traducir formularios de FAFSA para mi familia hasta descubrir las solicitudes universitarias por mi cuenta, sé lo que se siente ser la primera persona en tu familia en recorrer este camino.",
      "Como latina de primera generación, he vivido la confusión, los logros y todo lo que hay en el medio. Esas experiencias me motivaron a crear First Gen Chronicles — para que estudiantes y familias no tengan que descubrir todo solos/as.",
      "A través de este sitio, comparto la orientación, los recursos y el ánimo que a mí me hubiera gustado tener cuando comencé. Ya sea que estés en la escuela secundaria, la universidad, o apoyando a un estudiante como padre/madre, espero que encuentres algo aquí que te ayude a sentirte más seguro/a y apoyado/a.",
    ],
    facts: [
      { label: "Origen", value: "Mexicoamericana de primera generación" },
      { label: "Carrera", value: "Neurociencia" },
      { label: "Ruta", value: "Pre-medicina" },
      { label: "Universidad", value: "Georgia Institute of Technology" },
    ],
    photoPlaceholder: "Foto de Stacy — agrega tu foto aprobada aquí",
  },
};

// ─── RESOURCES ─────────────────────────────────────────────────────────────────
// Add real links when available. Leave href empty or "#" for placeholders.
// When you have a real URL, set href: "https://..." and remove comingSoon: true

export type ResourceLink = {
  title: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
};

export type ResourceCategory = {
  id: string;
  title: string;
  description: string;
  links: ResourceLink[];
};

export const resourceCategories = {
  en: [
    {
      id: "college-applications",
      title: "College Applications",
      description: "Step-by-step guidance for applying to college as a first-gen student.",
      links: [
        { title: "Application timeline checklist", description: "A semester-by-semester guide for high school juniors and seniors.", comingSoon: true },
        { title: "Common App basics", description: "What to know before you start your application.", comingSoon: true },
      ],
    },
    {
      id: "essays",
      title: "Essays & Recommendation Letters",
      description: "Tips for personal statements, supplemental essays, and strong recommendations.",
      links: [
        { title: "How to approach your personal essay", description: "Finding your story without overthinking it.", comingSoon: true },
        { title: "Asking for recommendation letters", description: "Who to ask, when to ask, and how to make it easy for your teachers.", comingSoon: true },
      ],
    },
    {
      id: "scholarships",
      title: "Scholarships & Financial Aid",
      description: "Finding and applying for scholarships as a first-generation student.",
      links: [
        { title: "Scholarship search strategies", description: "Where to look and how to stay organized.", comingSoon: true },
        { title: "First-gen scholarship list", description: "Scholarships specifically for first-generation students.", comingSoon: true },
      ],
    },
    {
      id: "fafsa",
      title: "FAFSA Basics",
      description: "Understanding financial aid forms, deadlines, and what families need to know.",
      links: [
        { title: "FAFSA step-by-step overview", description: "A plain-language walkthrough of the financial aid process.", comingSoon: true },
        { title: "FAFSA for Spanish-speaking families", description: "Key terms and steps explained in accessible Spanish.", comingSoon: true },
      ],
    },
    {
      id: "dual-enrollment",
      title: "Dual Enrollment",
      description: "Earn college credit while still in high school.",
      links: [
        { title: "Is dual enrollment right for you?", description: "Pros, cons, and questions to ask your counselor.", comingSoon: true },
      ],
    },
    {
      id: "opportunities",
      title: "Internships & Programs",
      description: "Leadership roles, summer programs, and experiences that strengthen your path.",
      links: [
        { title: "How to find programs early", description: "Starting your search before senior year.", comingSoon: true },
        { title: "Building a strong resume", description: "Activities and experiences that matter.", comingSoon: true },
      ],
    },
    {
      id: "research",
      title: "Research Opportunities",
      description: "Getting involved in research as an undergraduate student.",
      links: [
        { title: "Finding research labs", description: "How to reach out and get started.", comingSoon: true },
      ],
    },
    {
      id: "pre-med",
      title: "Pre-Med / Pre-Health",
      description: "Navigating the pre-health track as a first-generation student.",
      links: [
        { title: "Pre-med basics at Georgia Tech", description: "Course planning and early steps.", comingSoon: true },
        { title: "Clinical and shadowing experience", description: "How to find opportunities and what to expect.", comingSoon: true },
      ],
    },
    {
      id: "study-skills",
      title: "Study Skills & College Life",
      description: "Strategies that work, time management, and adjusting to campus.",
      links: [
        { title: "Study strategies that actually work", description: "What I learned after trial and error.", comingSoon: true },
        { title: "Finding community on campus", description: "Clubs, organizations, and support networks.", comingSoon: true },
      ],
    },
    {
      id: "families",
      title: "Spanish Resources for Families",
      description: "Information designed for Spanish-dominant parents and families.",
      links: [
        { title: "Guía para padres: apoyar a su estudiante", description: "Cómo apoyar el camino universitario de su hijo/a.", comingSoon: true },
        { title: "Términos clave de ayuda financiera", description: "Vocabulario esencial explicado en español.", comingSoon: true },
      ],
    },
  ] as ResourceCategory[],
  es: [
    {
      id: "solicitudes",
      title: "Solicitudes Universitarias",
      description: "Guía paso a paso para aplicar a la universidad como estudiante de primera generación.",
      links: [
        { title: "Lista de fechas importantes", description: "Una guía semestre por semestre para juniors y seniors.", comingSoon: true },
        { title: "Lo básico de Common App", description: "Lo que debes saber antes de comenzar tu solicitud.", comingSoon: true },
      ],
    },
    {
      id: "ensayos",
      title: "Ensayos y Cartas de Recomendación",
      description: "Consejos para ensayos personales, ensayos suplementarios y cartas de recomendación.",
      links: [
        { title: "Cómo abordar tu ensayo personal", description: "Encontrar tu historia sin complicarlo demasiado.", comingSoon: true },
        { title: "Pedir cartas de recomendación", description: "A quién pedir, cuándo pedir y cómo facilitarlo.", comingSoon: true },
      ],
    },
    {
      id: "becas",
      title: "Becas y Ayuda Financiera",
      description: "Encontrar y aplicar a becas como estudiante de primera generación.",
      links: [
        { title: "Estrategias para buscar becas", description: "Dónde buscar y cómo mantenerte organizado/a.", comingSoon: true },
        { title: "Lista de becas para primera generación", description: "Becas específicas para estudiantes de primera generación.", comingSoon: true },
      ],
    },
    {
      id: "fafsa",
      title: "Lo Básico de FAFSA",
      description: "Entender formularios de ayuda financiera, fechas límite y lo que las familias necesitan saber.",
      links: [
        { title: "Resumen paso a paso de FAFSA", description: "Una explicación clara del proceso de ayuda financiera.", comingSoon: true },
        { title: "FAFSA para familias hispanohablantes", description: "Términos clave y pasos explicados en español accesible.", comingSoon: true },
      ],
    },
    {
      id: "dual-enrollment",
      title: "Dual Enrollment",
      description: "Obtener créditos universitarios mientras aún estás en la escuela secundaria.",
      links: [
        { title: "¿Es dual enrollment para ti?", description: "Ventajas, desventajas y preguntas para tu consejero.", comingSoon: true },
      ],
    },
    {
      id: "oportunidades",
      title: "Pasantías y Programas",
      description: "Roles de liderazgo, programas de verano y experiencias que fortalecen tu camino.",
      links: [
        { title: "Cómo encontrar programas desde temprano", description: "Comenzar tu búsqueda antes del último año.", comingSoon: true },
        { title: "Construir un currículum sólido", description: "Actividades y experiencias que importan.", comingSoon: true },
      ],
    },
    {
      id: "investigacion",
      title: "Oportunidades de Investigación",
      description: "Involucrarse en investigación como estudiante universitario.",
      links: [
        { title: "Encontrar laboratorios de investigación", description: "Cómo contactar y comenzar.", comingSoon: true },
      ],
    },
    {
      id: "pre-medicina",
      title: "Pre-Medicina / Pre-Salud",
      description: "Navegar la ruta pre-salud como estudiante de primera generación.",
      links: [
        { title: "Lo básico de pre-medicina en Georgia Tech", description: "Planificación de cursos y primeros pasos.", comingSoon: true },
        { title: "Experiencia clínica y shadowing", description: "Cómo encontrar oportunidades y qué esperar.", comingSoon: true },
      ],
    },
    {
      id: "estudio",
      title: "Habilidades de Estudio y Vida Universitaria",
      description: "Estrategias que funcionan, manejo del tiempo y adaptación al campus.",
      links: [
        { title: "Estrategias de estudio que realmente funcionan", description: "Lo que aprendí después de probar y equivocarme.", comingSoon: true },
        { title: "Encontrar comunidad en el campus", description: "Clubes, organizaciones y redes de apoyo.", comingSoon: true },
      ],
    },
    {
      id: "familias",
      title: "Recursos en Español para Familias",
      description: "Información diseñada para padres y familias que dominan el español.",
      links: [
        { title: "Guía para padres: apoyar a su estudiante", description: "Cómo apoyar el camino universitario de su hijo/a.", comingSoon: true },
        { title: "Términos clave de ayuda financiera", description: "Vocabulario esencial explicado en español.", comingSoon: true },
      ],
    },
  ] as ResourceCategory[],
};

// ─── BLOG / CHRONICLES (Coming Soon) ───────────────────────────────────────────
// Add new posts here. Set comingSoon: false and add slug when ready to publish.

export const blogPosts = {
  en: [
    {
      slug: "what-i-wish-i-knew",
      title: "What I Wish I Knew as a First-Gen Student",
      excerpt: "Honest reflections on the things I would tell my younger self before starting college.",
      comingSoon: true,
    },
    {
      slug: "preparing-for-college-early",
      title: "How to Start Preparing for College Early",
      excerpt: "Practical steps high school students can take starting freshman year.",
      comingSoon: true,
    },
    {
      slug: "questions-before-applying",
      title: "Questions to Ask Before Applying to a Program",
      excerpt: "What to research before committing to an opportunity, internship, or program.",
      comingSoon: true,
    },
    {
      slug: "navigating-as-first-gen-latina",
      title: "Navigating College as a First-Gen Latina",
      excerpt: "Personal experiences balancing culture, academics, and finding my place on campus.",
      comingSoon: true,
    },
  ],
  es: [
    {
      slug: "lo-que-desearia-haber-sabido",
      title: "Lo Que Desearía Haber Sabido Como Estudiante de Primera Generación",
      excerpt: "Reflexiones honestas sobre lo que le diría a mi yo más joven antes de comenzar la universidad.",
      comingSoon: true,
    },
    {
      slug: "prepararse-desde-temprano",
      title: "Cómo Empezar a Prepararte para la Universidad Desde Temprano",
      excerpt: "Pasos prácticos que los estudiantes de secundaria pueden tomar desde el primer año.",
      comingSoon: true,
    },
    {
      slug: "preguntas-antes-de-aplicar",
      title: "Preguntas Que Debes Hacer Antes de Aplicar a un Programa",
      excerpt: "Qué investigar antes de comprometerte con una oportunidad, pasantía o programa.",
      comingSoon: true,
    },
    {
      slug: "navegando-como-latina",
      title: "Navegando la Universidad Como Latina de Primera Generación",
      excerpt: "Experiencias personales equilibrando cultura, estudios y encontrar mi lugar en el campus.",
      comingSoon: true,
    },
  ],
};

// ─── CONTACT ─────────────────────────────────────────────────────────────────────
// Edit contact topics and Stacy's info here.

export const contactContent = {
  en: {
    pageTitle: "Contact",
    headline: "Let's connect",
    intro:
      "Thank you for visiting First Gen Chronicles! If you have questions, need guidance, or want to get in touch, I'd love to hear from you.",
    name: "Stacy Lomeli",
    role: "First-generation Latina student",
    details: [
      "Neuroscience major",
      "Pre-med track",
      "Georgia Institute of Technology",
    ],
    topicsTitle: "You can reach out about:",
    topics: [
      "First-gen support and encouragement",
      "High school or college questions",
      "Opportunities, programs, and resources",
      "Speaking events and panels",
      "Mentorship",
      "Help for Spanish-speaking families",
    ],
    responseNote: "I'll respond as soon as I can. Thank you for reaching out!",
  },
  es: {
    pageTitle: "Contacto",
    headline: "Conectemos",
    intro:
      "¡Gracias por visitar First Gen Chronicles! Si tienes preguntas, necesitas orientación o quieres comunicarte conmigo, con gusto te ayudaré.",
    name: "Stacy Lomeli",
    role: "Estudiante latina de primera generación",
    details: [
      "Carrera de neurociencia",
      "Ruta pre-medicina",
      "Georgia Institute of Technology",
    ],
    topicsTitle: "Puedes contactarme para:",
    topics: [
      "Apoyo para estudiantes de primera generación",
      "Preguntas sobre la escuela secundaria o la universidad",
      "Oportunidades, programas y recursos educativos",
      "Eventos, paneles y mentoría",
      "Ayuda para familias que hablan principalmente español",
      "Información sobre becas, FAFSA o ayuda financiera",
    ],
    responseNote: "Responderé lo antes posible. ¡Gracias por comunicarte conmigo!",
  },
};

// ─── LINK-IN-BIO PAGE (/links) ───────────────────────────────────────────────────
// Edit buttons for Instagram/bio link page. Set comingSoon: true until ready.
// When newsletter or mentorship form is ready, add href and set comingSoon: false.

export const linkInBioButtons = [
  { label: "Home", href: "/", icon: "home" },
  { label: "About Stacy", href: "/about", icon: "person" },
  { label: "Resources", href: "/resources", icon: "resources" },
  { label: "English Welcome", href: "/", icon: "en" },
  { label: "Bienvenidos", href: "/bienvenidos", icon: "es" },
  { label: "Contact", href: "/contact", icon: "contact" },
  { label: "Email Stacy", href: `mailto:${siteConfig.email}`, icon: "email" },
  {
    label: "Newsletter Signup",
    href: "",
    icon: "newsletter",
    comingSoon: true,
    comingSoonLabel: "Coming Soon",
  },
  {
    label: "Mentorship Interest Form",
    href: "",
    icon: "mentorship",
    comingSoon: true,
    comingSoonLabel: "Coming Soon",
  },
];

// ─── FOOTER ──────────────────────────────────────────────────────────────────────

export const footerContent = {
  en: {
    mission:
      "Supporting first-generation students and Hispanic families with bilingual guidance, resources, and encouragement.",
    quickLinksTitle: "Quick Links",
    languageTitle: "Language",
    contactTitle: "Contact",
    credit: "Created by Stacy Lomeli",
  },
  es: {
    mission:
      "Apoyando a estudiantes de primera generación y familias hispanas con orientación bilingüe, recursos y ánimo.",
    quickLinksTitle: "Enlaces Rápidos",
    languageTitle: "Idioma",
    contactTitle: "Contacto",
    credit: "Creado por Stacy Lomeli",
  },
};
