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
  // Live site URL — used for social previews. Override in Vercel with NEXT_PUBLIC_SITE_URL.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://first-gen-website.vercel.app",
  // Social profiles — edit URLs here
  social: {
    linkedin: "https://www.linkedin.com/in/stacylomeli/",
    tiktok: "https://www.tiktok.com/@staccy.lomeli",
  },
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
    missionEyebrow: "Our mission",
    pathwaysEyebrow: "Pathways",
    pathwaysTitle: "Start Here",
    pathwaysSubtitle: "Find the guidance that fits where you are right now.",
    pathwaysCta: "View all pathways",
    pathwaysCtaHref: "/start-here",
    closingCta: "Get in touch",
    closingCtaHref: "/contact",
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
    missionEyebrow: "Nuestra misión",
    pathwaysEyebrow: "Caminos",
    pathwaysTitle: "Comienza Aquí",
    pathwaysSubtitle: "Encuentra la orientación que se ajusta a donde estás ahora mismo.",
    pathwaysCta: "Ver todos los caminos",
    pathwaysCtaHref: "/es/comienza-aqui",
    closingCta: "Contáctame",
    closingCtaHref: "/es/contacto",
  },
};

// ─── START HERE PAGE ─────────────────────────────────────────────────────────────

export const startHereContent = {
  en: {
    pageTitle: "Start Here",
    subtitle:
      "Not sure where to begin? Choose the pathway that matches where you are — or where you want to go.",
    metaDescription:
      "Resource pathways for high school students, college students, families, and pre-med students.",
    breadcrumb: "Start Here",
    intro:
      "Every first-gen journey looks different. Whether you're a high school student preparing for college, a current student figuring out campus life, a parent supporting your child, or someone on the pre-med track — there's a starting point here for you.",
    ctaTitle: "Still have questions?",
    ctaText: "I'm happy to help point you in the right direction. Reach out anytime.",
    ctaButton: "Contact Stacy",
    ctaHref: "/contact",
  },
  es: {
    pageTitle: "Comienza Aquí",
    subtitle:
      "¿No sabes por dónde empezar? Elige el camino que coincida con donde estás — o hacia dónde quieres ir.",
    metaDescription:
      "Caminos de recursos para estudiantes de secundaria, universitarios, familias y estudiantes pre-medicina.",
    breadcrumb: "Comienza Aquí",
    intro:
      "Cada camino de primera generación es diferente. Ya seas un estudiante de secundaria preparándote para la universidad, un estudiante actual descubriendo la vida universitaria, un padre/madre apoyando a su hijo/a, o alguien en la ruta pre-medicina — hay un punto de partida aquí para ti.",
    ctaTitle: "¿Aún tienes preguntas?",
    ctaText: "Con gusto te ayudo a orientarte. Escríbeme cuando quieras.",
    ctaButton: "Contactar a Stacy",
    ctaHref: "/es/contacto",
  },
};

// ─── CHRONICLES PAGE ─────────────────────────────────────────────────────────────

export const chroniclesContent = {
  en: {
    pageTitle: "Chronicles",
    subtitle: "Personal stories, lessons learned, and advice from my first-gen journey.",
    metaDescription:
      "Stories, advice, and reflections from a first-generation student's journey.",
    breadcrumb: "Chronicles",
    bannerText: "New posts coming soon.",
    bannerLinkText: "Reach out",
    bannerLinkHref: "/contact",
    bannerSuffix: "if there's a topic you'd like covered.",
    comingSoonLabel: "Coming Soon",
  },
  es: {
    pageTitle: "Crónicas",
    subtitle:
      "Historias personales, lecciones aprendidas y consejos de mi camino como estudiante de primera generación.",
    metaDescription:
      "Historias, consejos y reflexiones del camino de una estudiante de primera generación.",
    breadcrumb: "Crónicas",
    bannerText: "Nuevas publicaciones próximamente.",
    bannerLinkText: "Escríbeme",
    bannerLinkHref: "/es/contacto",
    bannerSuffix: "si hay un tema que te gustaría ver cubierto.",
    comingSoonLabel: "Próximamente",
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

// ─── SOCIAL LINKS ──────────────────────────────────────────────────────────────
// Edit profile URLs here. Icons appear in the footer, About, Contact, and /links.

export const socialLinks = [
  {
    platform: "linkedin" as const,
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
  },
  {
    platform: "tiktok" as const,
    href: siteConfig.social.tiktok,
    label: "TikTok",
  },
];

export type AboutImage = {
  src: string;
  alt: string;
  /** Use landscape for wide photos so subjects on the edges aren't cropped. */
  orientation?: "portrait" | "landscape";
  /** Pin focal point when using cover — e.g. "left" keeps Stacy visible in group shots. */
  objectPosition?: "left" | "center" | "right";
  /** contain shows the full photo; cover fills the frame. */
  fit?: "cover" | "contain";
};

export type AboutSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  images?: AboutImage[];
};

// ─── ABOUT STACY ───────────────────────────────────────────────────────────────
// Edit Stacy's story here. Content migrated from her original About page.
// Keep facts accurate — do not invent personal details.

export const aboutContent = {
  en: {
    pageTitle: "About Stacy",
    headline: "Built by a first-gen student, for first-gen students",
    heroImage: {
      src: "/images/about/stacy-lab-coat.png",
      alt: "Stacy Lomeli in a white lab coat with a stethoscope",
    },
    connectTitle: "Connect with me",
    sections: [
      {
        id: "who-i-am",
        title: "Who I am",
        paragraphs: [
          "Hi — I'm Stacy Lomeli, a first-generation Mexican-American student. My parents were born in Mexico, and their journey has shaped everything about who I am and how I see education.",
          "I grew up in Indiana before my family moved to Atlanta, Georgia. Navigating two languages and two cultures taught me resilience, adaptability, and the importance of community — lessons that still guide me today.",
        ],
        images: [
          { src: "/images/about/family-birthday.png", alt: "Stacy's family at a birthday celebration" },
          { src: "/images/about/family-chicago.png", alt: "Stacy's family with the Chicago skyline" },
          { src: "/images/about/graduation-family.png", alt: "Stacy at high school graduation with her family" },
        ],
      },
      {
        id: "journey-medicine",
        title: "My journey into medicine",
        paragraphs: [
          "My interest in medicine began in high school when I joined the Academy of Research and Medical Sciences. That program opened doors I didn't know existed — and showed me that a career in health was possible for someone like me.",
          "Through that experience, I completed two scientific research projects, a clinical internship, and founded my own volunteering club, The Helping Hands. My high school was Title I, which meant I often had to find internships, scholarships, and opportunities on my own.",
          "That experience is a huge part of why I'm doing this — I know what it feels like to navigate systems without a guide.",
        ],
        images: [
          { src: "/images/about/lab-coat-group.png", alt: "Stacy with peers in lab coats" },
          { src: "/images/about/lab-coat-friends.png", alt: "Stacy with friends in lab coats on campus" },
        ],
      },
      {
        id: "where-now",
        title: "Where I am now",
        paragraphs: [
          "Today, I'm a first-generation Latina studying neuroscience on the pre-med track at the Georgia Institute of Technology.",
          "Being first-gen comes with pressure — you're often the one your family looks to for answers. In many of my classes, I don't see many people who look like me or share my background. I want to be the representation I didn't always have, especially for younger Latinas who are wondering if they belong in spaces like medicine and research.",
        ],
        images: [
          { src: "/images/about/gt-celebration.png", alt: "Stacy celebrating her Georgia Tech acceptance" },
        ],
      },
      {
        id: "giving-back",
        title: "Giving back to my community",
        paragraphs: [
          "One of the most meaningful experiences I've had was serving as a panelist and mentor at the 2025 Navigating Your Academic and Professional Future Summit, hosted by the Hispanic Heritage Foundation.",
          "I shared my story with Latino students — many of them first-generation or non-English speakers — and reminded them that they belong in every room they walk into. Our community deserves guidance, support, and access — in English and in Spanish.",
        ],
        images: [
          {
            src: "/images/about/hhf-panel.png",
            alt: "Panel discussion at the Hispanic Heritage Foundation summit",
            orientation: "landscape",
          },
          {
            src: "/images/about/hhf-group.png",
            alt: "Stacy with fellow panelists at the Hispanic Heritage Foundation",
            orientation: "landscape",
            objectPosition: "left",
          },
          {
            src: "/images/about/hhf-speaking.png",
            alt: "Stacy speaking at the Hispanic Heritage Foundation summit",
          },
        ],
      },
      {
        id: "why-fgc",
        title: "Why I created First Gen Chronicles",
        paragraphs: [
          "First Gen Chronicles exists because I remember how overwhelming it felt to figure out college, financial aid, opportunities, and the pre-med path without a roadmap.",
          "My goal is simple: to make sure no first-gen student has to figure everything out alone.",
          "I'm excited to keep building this platform and supporting students and families who are walking the same path I once did — and still am.",
        ],
        bullets: [
          "The advice I wish someone had given me",
          "Opportunities I didn't know about",
          "Lessons I learned through trial and error",
          "Guidance for high school, college, and pre-med life",
          "Resources in English and Spanish, so families can understand too",
        ],
      },
    ] as AboutSection[],
    facts: [
      { label: "Background", value: "First-generation Mexican-American" },
      { label: "Major", value: "Neuroscience" },
      { label: "Track", value: "Pre-med" },
      { label: "School", value: "Georgia Institute of Technology" },
    ],
    ctas: {
      primary: "Browse resources",
      primaryHref: "/resources",
      secondary: "Contact me",
      secondaryHref: "/contact",
    },
  },
  es: {
    pageTitle: "Sobre Mí",
    headline: "Creado por una estudiante de primera generación, para estudiantes de primera generación",
    heroImage: {
      src: "/images/about/stacy-lab-coat.png",
      alt: "Stacy Lomeli con bata de laboratorio y estetoscopio",
    },
    connectTitle: "Conéctate conmigo",
    sections: [
      {
        id: "quien-soy",
        title: "Quién soy",
        paragraphs: [
          "Hola — soy Stacy Lomeli, una estudiante mexicoamericana de primera generación. Mis padres nacieron en México, y su camino ha moldeado todo lo que soy y cómo veo la educación.",
          "Crecí en Indiana antes de que mi familia se mudara a Atlanta, Georgia. Navegar dos idiomas y dos culturas me enseñó resiliencia, adaptabilidad y la importancia de la comunidad — lecciones que aún me guían hoy.",
        ],
        images: [
          { src: "/images/about/family-birthday.png", alt: "La familia de Stacy en una celebración de cumpleaños" },
          { src: "/images/about/family-chicago.png", alt: "La familia de Stacy con el horizonte de Chicago" },
          { src: "/images/about/graduation-family.png", alt: "Stacy en su graduación de secundaria con su familia" },
        ],
      },
      {
        id: "camino-medicina",
        title: "Mi camino hacia la medicina",
        paragraphs: [
          "Mi interés en la medicina comenzó en la escuela secundaria cuando me uní a la Academy of Research and Medical Sciences. Ese programa abrió puertas que no sabía que existían — y me mostró que una carrera en salud era posible para alguien como yo.",
          "A través de esa experiencia, completé dos proyectos de investigación científica, una pasantía clínica y fundé mi propio club de voluntariado, The Helping Hands. Mi escuela secundaria era Title I, lo que significaba que a menudo tenía que encontrar pasantías, becas y oportunidades por mi cuenta.",
          "Esa experiencia es una gran parte de por qué hago esto — sé lo que se siente navegar sistemas sin una guía.",
        ],
        images: [
          { src: "/images/about/lab-coat-group.png", alt: "Stacy con compañeros en batas de laboratorio" },
          { src: "/images/about/lab-coat-friends.png", alt: "Stacy con amigas en batas de laboratorio en el campus" },
        ],
      },
      {
        id: "donde-estoy",
        title: "Dónde estoy ahora",
        paragraphs: [
          "Hoy, soy una latina de primera generación estudiando neurociencia en la ruta pre-medicina en el Georgia Institute of Technology.",
          "Ser de primera generación trae presión — a menudo eres la persona a la que tu familia recurre para respuestas. En muchas de mis clases, no veo muchas personas que se parezcan a mí o compartan mi origen. Quiero ser la representación que no siempre tuve, especialmente para las latinas más jóvenes que se preguntan si pertenecen en espacios como la medicina y la investigación.",
        ],
        images: [
          { src: "/images/about/gt-celebration.png", alt: "Stacy celebrando su aceptación a Georgia Tech" },
        ],
      },
      {
        id: "dar-vuelta",
        title: "Devolver a mi comunidad",
        paragraphs: [
          "Una de las experiencias más significativas que he tenido fue servir como panelista y mentora en el Navigating Your Academic and Professional Future Summit 2025, organizado por la Hispanic Heritage Foundation.",
          "Compartí mi historia con estudiantes latinos — muchos de primera generación o que no hablan inglés — y les recordé que pertenecen en cada espacio al que entran. Nuestra comunidad merece orientación, apoyo y acceso — en inglés y en español.",
        ],
        images: [
          {
            src: "/images/about/hhf-panel.png",
            alt: "Panel de discusión en la cumbre de la Hispanic Heritage Foundation",
            orientation: "landscape",
          },
          {
            src: "/images/about/hhf-group.png",
            alt: "Stacy con otros panelistas de la Hispanic Heritage Foundation",
            orientation: "landscape",
            objectPosition: "left",
          },
          {
            src: "/images/about/hhf-speaking.png",
            alt: "Stacy hablando en la cumbre de la Hispanic Heritage Foundation",
          },
        ],
      },
      {
        id: "por-que-fgc",
        title: "Por qué creé First Gen Chronicles",
        paragraphs: [
          "First Gen Chronicles existe porque recuerdo lo abrumador que se sintió descubrir la universidad, la ayuda financiera, las oportunidades y la ruta pre-medicina sin un mapa.",
          "Mi meta es simple: asegurarme de que ningún estudiante de primera generación tenga que descubrir todo solo/a.",
          "Estoy emocionada de seguir construyendo esta plataforma y apoyando a estudiantes y familias que están recorriendo el mismo camino que yo recorrí — y aún recorro.",
        ],
        bullets: [
          "Los consejos que desearía que alguien me hubiera dado",
          "Oportunidades que no conocía",
          "Lecciones que aprendí a través de prueba y error",
          "Orientación para la secundaria, la universidad y la vida pre-medicina",
          "Recursos en inglés y español, para que las familias también entiendan",
        ],
      },
    ] as AboutSection[],
    facts: [
      { label: "Origen", value: "Mexicoamericana de primera generación" },
      { label: "Carrera", value: "Neurociencia" },
      { label: "Ruta", value: "Pre-medicina" },
      { label: "Universidad", value: "Georgia Institute of Technology" },
    ],
    ctas: {
      primary: "Ver recursos",
      primaryHref: "/es/recursos",
      secondary: "Contáctame",
      secondaryHref: "/es/contacto",
    },
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
        {
          title: "Your path to college checklists",
          description: "Free year-by-year checklists from Common App — middle school through senior year.",
          href: "https://www.commonapp.org/plan/your-path-to-college",
        },
        {
          title: "Common App first-year student guide",
          description: "How to build and submit your first-year college application.",
          href: "https://www.commonapp.org/apply/first-year-students",
        },
        {
          title: "Start your Common App",
          description: "Create an account and begin applying to 1,000+ colleges in one place.",
          href: "https://www.commonapp.org/",
        },
        {
          title: "College application toolkit (EN + ES)",
          description: "Common App resources for students in English and Spanish.",
          href: "https://www.commonapp.org/apply/fy-toolkit",
        },
        {
          title: "College Scorecard",
          description: "Compare colleges by cost, graduation rates, and outcomes — from the U.S. Department of Education.",
          href: "https://collegescorecard.ed.gov/",
        },
        {
          title: "Register for the SAT",
          description: "Official College Board registration for the SAT.",
          href: "https://satsuite.collegeboard.org/sat/registration",
        },
        {
          title: "Register for the ACT",
          description: "Official ACT registration, dates, and test-center search.",
          href: "https://www.act.org/content/act/en/products-and-services/the-act/registration.html",
        },
      ],
    },
    {
      id: "essays",
      title: "Essays & Recommendation Letters",
      description: "Tips for personal statements, supplemental essays, and strong recommendations.",
      links: [
        {
          title: "Common App essay prompts",
          description: "This year’s personal essay prompts — read them before you start drafting.",
          href: "https://www.commonapp.org/apply/essay-prompts",
        },
        {
          title: "Counselors & recommenders guide",
          description: "How teachers and counselors submit recommendations in Common App.",
          href: "https://www.commonapp.org/counselors-and-recommenders",
        },
        {
          title: "First-year application guide",
          description: "Walkthrough of sections you’ll complete — including essays and school forms.",
          href: "https://www.commonapp.org/apply/first-year-students",
        },
        {
          title: "College applications help (Get Schooled)",
          description: "Free step-by-step articles on applying to college.",
          href: "https://getschooled.com/journey/get-to-college/",
        },
      ],
    },
    {
      id: "scholarships",
      title: "Scholarships & Financial Aid",
      description: "Finding and applying for scholarships as a first-generation student.",
      links: [
        {
          title: "BigFuture Scholarship Search",
          description: "Search thousands of scholarships from College Board’s free planning site.",
          href: "https://bigfuture.collegeboard.org/pay-for-college/scholarship-search",
        },
        {
          title: "GAfutures Scholarship Search",
          description: "Find Georgia and national scholarships through the official GAfutures tool.",
          href: "https://www.gafutures.org/federal-aid-scholarships/scholarship-search/",
        },
        {
          title: "Georgia HOPE Scholarship",
          description: "Official info on Georgia’s HOPE Scholarship — eligibility and how it helps with tuition.",
          href: "https://www.gafutures.org/hope-state-aid-programs/hope-zell-miller-scholarships/hope-scholarship",
        },
        {
          title: "Track your High School HOPE GPA",
          description: "Check your HOPE GPA in your GAfutures account (Georgia high school students).",
          href: "https://www.gafutures.org/hope-state-aid-programs/hope-zell-miller-scholarships/how-to-track-your-hope-academic-eligibility/my-high-school-hope-gpa/",
        },
        {
          title: "Hispanic Scholarship Fund (HSF)",
          description: "Scholarships and support services for students of Hispanic heritage.",
          href: "https://www.hsf.net/",
        },
        {
          title: "QuestBridge College Prep Scholars",
          description: "Program for high-achieving high school juniors from low-income backgrounds.",
          href: "https://www.questbridge.org/apply-to-college/programs/college-prep-scholars-program",
        },
        {
          title: "Types of federal student aid",
          description: "Grants, scholarships, work-study, and loans explained by Federal Student Aid.",
          href: "https://studentaid.gov/understand-aid/types",
        },
        {
          title: "Federal Pell Grant",
          description: "Learn about Pell Grants — free aid that does not need to be repaid.",
          href: "https://studentaid.gov/understand-aid/types/grants/pell",
        },
        {
          title: "BigFuture Scholarships",
          description: "Complete free planning steps for chances at $500 and $40,000 scholarships.",
          href: "https://bigfuture.collegeboard.org/pay-for-college/bigfuture-scholarships",
        },
      ],
    },
    {
      id: "fafsa",
      title: "FAFSA Basics",
      description: "Understanding financial aid forms, deadlines, and what families need to know.",
      links: [
        {
          title: "Fill out the FAFSA®",
          description: "The official free federal student aid application — never pay a site to file it.",
          href: "https://studentaid.gov/h/apply-for-aid/fafsa",
        },
        {
          title: "Create your StudentAid.gov account",
          description: "You’ll need an account (FSA ID) before you and your parent can complete the FAFSA.",
          href: "https://studentaid.gov/fsa-id/create-account/launch",
        },
        {
          title: "How to fill out the FAFSA (English)",
          description: "Step-by-step help from Federal Student Aid on completing the form.",
          href: "https://studentaid.gov/apply-for-aid/fafsa/filling-out",
        },
        {
          title: "Cómo llenar el formulario FAFSA (Español)",
          description: "Explicación oficial en español para estudiantes y familias.",
          href: "https://studentaid.gov/es/apply-for-aid/fafsa/filling-out",
        },
        {
          title: "FAFSA deadlines",
          description: "Federal, state, and college deadlines — apply early so you don’t miss aid.",
          href: "https://studentaid.gov/apply-for-aid/fafsa/fafsa-deadlines",
        },
      ],
    },
    {
      id: "dual-enrollment",
      title: "Dual Enrollment",
      description: "Earn college credit while still in high school.",
      links: [
        {
          title: "Georgia Dual Enrollment (GAfutures)",
          description: "Official Georgia program overview — eligibility, funding, and how to apply.",
          href: "https://www.gafutures.org/hope-state-aid-programs/scholarships-grants/dual-enrollment/",
        },
        {
          title: "Dual Enrollment application steps",
          description: "What students and families need to complete on GAfutures.",
          href: "https://www.gafutures.org/hope-state-aid-programs/scholarships-grants/dual-enrollment/application-procedure",
        },
        {
          title: "Dual Enrollment course directory",
          description: "Browse approved Dual Enrollment courses for Georgia’s program.",
          href: "https://www.gafutures.org/checs/dualenrollment/decoursedirectory",
        },
        {
          title: "Is dual enrollment right for you?",
          description: "Pros, cons, and questions to ask your counselor.",
          comingSoon: true,
        },
      ],
    },
    {
      id: "opportunities",
      title: "Internships & Programs",
      description: "Leadership roles, summer programs, and experiences that strengthen your path.",
      links: [
        {
          title: "Explore colleges on Common App",
          description: "Search and learn about 1,000+ colleges — great for building your list early.",
          href: "https://www.commonapp.org/explore",
        },
        {
          title: "BigFuture college planning",
          description: "Free tools to explore colleges, majors, careers, and next steps after high school.",
          href: "https://bigfuture.collegeboard.org/",
        },
        {
          title: "QuestBridge programs",
          description: "Opportunities connecting high-achieving students from low-income backgrounds with top colleges.",
          href: "https://www.questbridge.org/",
        },
        {
          title: "Get Schooled — Get to College",
          description: "Free college-planning articles, tips, and text support for students.",
          href: "https://getschooled.com/journey/get-to-college/",
        },
        {
          title: "Jobs for high schoolers (Get Schooled)",
          description: "Where to look, what you’ll need, and how to build a first resume.",
          href: "https://getschooled.com/",
        },
        {
          title: "AP Student (College Board)",
          description: "Official resources for Advanced Placement courses and exams.",
          href: "https://apstudents.collegeboard.org/",
        },
        {
          title: "SAT fee waivers",
          description: "Learn if you qualify to take the SAT for free and access other College Board benefits.",
          href: "https://satsuite.collegeboard.org/sat/registration/fee-waivers",
        },
        {
          title: "College Scorecard",
          description: "Research colleges before you apply — costs, graduation rates, and earnings data.",
          href: "https://collegescorecard.ed.gov/",
        },
      ],
    },
    {
      id: "research",
      title: "Research Opportunities",
      description: "Getting involved in research as an undergraduate student.",
      links: [
        {
          title: "Georgia Tech Undergraduate Research",
          description: "Campus research opportunities, programs, and how to get involved at GT.",
          href: "https://undergradresearch.gatech.edu/",
        },
        {
          title: "Undergraduate research funding at GT",
          description: "PURA awards and other funding options for student researchers.",
          href: "https://undergradresearch.gatech.edu/funding/",
        },
        {
          title: "NSF Research Experiences for Undergraduates (REU)",
          description: "Search summer research programs at universities across the U.S.",
          href: "https://www.nsf.gov/crssprgm/reu/reu_search.cfm",
        },
      ],
    },
    {
      id: "pre-med",
      title: "Pre-Med / Pre-Health",
      description: "Navigating the pre-health track as a first-generation student.",
      links: [
        {
          title: "Georgia Tech Pre-Health Advising",
          description: "Official GT advising for pre-med, dental, pharmacy, and other health careers.",
          href: "https://www.prehealth.gatech.edu/",
        },
        {
          title: "AAMC Aspiring Docs",
          description: "Free guides and stories to help you start preparing for a path to medicine.",
          href: "https://students-residents.aamc.org/aspiring-docs/aspiring-docs",
        },
        {
          title: "AAMC Students & Residents hub",
          description: "Trusted resources for exploring medical careers, applications, and preparation.",
          href: "https://students-residents.aamc.org/",
        },
        {
          title: "MCAT preparation overview (AAMC)",
          description: "Official information on preparing for the MCAT exam.",
          href: "https://students-residents.aamc.org/mcat-prep/mcat-prep",
        },
        {
          title: "GT catalog: Preprofessional programs",
          description: "How Georgia Tech approaches pre-health (and other preprofessional) pathways.",
          href: "https://catalog.gatech.edu/academics/special-academic-programs/preprofessional-programs/",
        },
      ],
    },
    {
      id: "study-skills",
      title: "Study Skills & College Life",
      description: "Strategies that work, time management, and adjusting to campus.",
      links: [
        {
          title: "Get Schooled — Starting college strong",
          description: "Tips for orientation, classes, and finishing financial aid as a new college student.",
          href: "https://getschooled.com/journey/get-to-college/",
        },
        {
          title: "Khan Academy",
          description: "Free practice and lessons for many high school and college subjects.",
          href: "https://www.khanacademy.org/",
        },
        {
          title: "Georgia Tech Career Center",
          description: "Internships, career coaching, and job resources for GT students.",
          href: "https://career.gatech.edu/",
        },
        {
          title: "Federal Student Aid — Manage your aid",
          description: "Understand grants, loans, and repayment basics once you’re in college.",
          href: "https://studentaid.gov/manage-loans",
        },
      ],
    },
    {
      id: "families",
      title: "Spanish Resources for Families",
      description: "Information designed for Spanish-dominant parents and families.",
      links: [
        {
          title: "Common App for families",
          description: "Tips for families supporting students through the college application process.",
          href: "https://www.commonapp.org/family",
        },
        {
          title: "Cómo llenar el formulario FAFSA",
          description: "Guía oficial en español de Ayuda Federal para Estudiantes.",
          href: "https://studentaid.gov/es/apply-for-aid/fafsa/filling-out",
        },
        {
          title: "Fechas límite de la FAFSA",
          description: "Plazos importantes para no perder ayuda federal o estatal.",
          href: "https://studentaid.gov/apply-for-aid/fafsa/fafsa-deadlines",
        },
        {
          title: "Tipos de ayuda federal para estudiantes",
          description: "Becas, grants, work-study y préstamos explicados claramente.",
          href: "https://studentaid.gov/understand-aid/types",
        },
        {
          title: "Georgia HOPE Scholarship",
          description: "Información oficial de la beca HOPE para estudiantes de Georgia.",
          href: "https://www.gafutures.org/hope-state-aid-programs/hope-zell-miller-scholarships/hope-scholarship",
        },
        {
          title: "College Scorecard",
          description: "Compara universidades por costo y resultados antes de decidir.",
          href: "https://collegescorecard.ed.gov/",
        },
      ],
    },
  ] as ResourceCategory[],
  es: [
    {
      id: "solicitudes",
      title: "Solicitudes Universitarias",
      description: "Guía paso a paso para aplicar a la universidad como estudiante de primera generación.",
      links: [
        {
          title: "Listas: tu camino a la universidad",
          description: "Listas gratuitas año por año de Common App — desde middle school hasta senior year.",
          href: "https://www.commonapp.org/plan/your-path-to-college",
        },
        {
          title: "Guía de Common App para estudiantes de primer año",
          description: "Cómo crear y enviar tu solicitud universitaria de primer año.",
          href: "https://www.commonapp.org/apply/first-year-students",
        },
        {
          title: "Comienza tu Common App",
          description: "Crea una cuenta y aplica a más de 1,000 universidades en un solo lugar.",
          href: "https://www.commonapp.org/",
        },
        {
          title: "Kit de herramientas (EN + ES)",
          description: "Recursos de Common App para estudiantes en inglés y español.",
          href: "https://www.commonapp.org/apply/fy-toolkit",
        },
        {
          title: "College Scorecard",
          description: "Compara universidades por costo, graduación y resultados — del Departamento de Educación de EE. UU.",
          href: "https://collegescorecard.ed.gov/",
        },
        {
          title: "Registrarse para el SAT",
          description: "Registro oficial del SAT a través de College Board.",
          href: "https://satsuite.collegeboard.org/sat/registration",
        },
        {
          title: "Registrarse para el ACT",
          description: "Registro oficial del ACT, fechas y centros de examen.",
          href: "https://www.act.org/content/act/en/products-and-services/the-act/registration.html",
        },
      ],
    },
    {
      id: "ensayos",
      title: "Ensayos y Cartas de Recomendación",
      description: "Consejos para ensayos personales, ensayos suplementarios y cartas de recomendación.",
      links: [
        {
          title: "Preguntas del ensayo de Common App",
          description: "Los temas del ensayo personal de este año — léelos antes de escribir.",
          href: "https://www.commonapp.org/apply/essay-prompts",
        },
        {
          title: "Guía para consejeros y recomendadores",
          description: "Cómo maestros y consejeros envían recomendaciones en Common App.",
          href: "https://www.commonapp.org/counselors-and-recommenders",
        },
        {
          title: "Guía de la solicitud de primer año",
          description: "Recorrido de las secciones que completarás — incluyendo ensayos y formularios escolares.",
          href: "https://www.commonapp.org/apply/first-year-students",
        },
        {
          title: "Ayuda con solicitudes (Get Schooled)",
          description: "Artículos gratis paso a paso sobre cómo aplicar a la universidad.",
          href: "https://getschooled.com/journey/get-to-college/",
        },
      ],
    },
    {
      id: "becas",
      title: "Becas y Ayuda Financiera",
      description: "Encontrar y aplicar a becas como estudiante de primera generación.",
      links: [
        {
          title: "Búsqueda de becas BigFuture",
          description: "Busca miles de becas en el sitio gratuito de College Board.",
          href: "https://bigfuture.collegeboard.org/pay-for-college/scholarship-search",
        },
        {
          title: "Búsqueda de becas GAfutures",
          description: "Encuentra becas de Georgia y nacionales con la herramienta oficial de GAfutures.",
          href: "https://www.gafutures.org/federal-aid-scholarships/scholarship-search/",
        },
        {
          title: "Beca HOPE de Georgia",
          description: "Información oficial sobre la beca HOPE — elegibilidad y cómo ayuda con la matrícula.",
          href: "https://www.gafutures.org/hope-state-aid-programs/hope-zell-miller-scholarships/hope-scholarship",
        },
        {
          title: "Revisa tu GPA HOPE de secundaria",
          description: "Consulta tu GPA HOPE en tu cuenta de GAfutures (estudiantes de secundaria en Georgia).",
          href: "https://www.gafutures.org/hope-state-aid-programs/hope-zell-miller-scholarships/how-to-track-your-hope-academic-eligibility/my-high-school-hope-gpa/",
        },
        {
          title: "Hispanic Scholarship Fund (HSF)",
          description: "Becas y servicios de apoyo para estudiantes de herencia hispana.",
          href: "https://www.hsf.net/",
        },
        {
          title: "QuestBridge College Prep Scholars",
          description: "Programa para juniors con alto rendimiento académico de familias de bajos ingresos.",
          href: "https://www.questbridge.org/apply-to-college/programs/college-prep-scholars-program",
        },
        {
          title: "Tipos de ayuda federal para estudiantes",
          description: "Becas, grants, work-study y préstamos explicados por Federal Student Aid.",
          href: "https://studentaid.gov/understand-aid/types",
        },
        {
          title: "Beca Federal Pell Grant",
          description: "Conoce la Pell Grant — ayuda gratuita que no se tiene que devolver.",
          href: "https://studentaid.gov/understand-aid/types/grants/pell",
        },
        {
          title: "Becas BigFuture",
          description: "Completa pasos de planificación gratis para oportunidades de $500 y $40,000.",
          href: "https://bigfuture.collegeboard.org/pay-for-college/bigfuture-scholarships",
        },
      ],
    },
    {
      id: "fafsa",
      title: "Lo Básico de FAFSA",
      description: "Entender formularios de ayuda financiera, fechas límite y lo que las familias necesitan saber.",
      links: [
        {
          title: "Completar la FAFSA®",
          description: "La solicitud oficial gratuita de ayuda federal — nunca pagues para llenarla.",
          href: "https://studentaid.gov/h/apply-for-aid/fafsa",
        },
        {
          title: "Crea tu cuenta de StudentAid.gov",
          description: "Necesitas una cuenta (FSA ID) antes de que tú y tu padre/madre puedan completar la FAFSA.",
          href: "https://studentaid.gov/fsa-id/create-account/launch",
        },
        {
          title: "Cómo llenar el formulario FAFSA (Español)",
          description: "Ayuda paso a paso en español de Ayuda Federal para Estudiantes.",
          href: "https://studentaid.gov/es/apply-for-aid/fafsa/filling-out",
        },
        {
          title: "How to fill out the FAFSA (English)",
          description: "Guía oficial en inglés para completar el formulario.",
          href: "https://studentaid.gov/apply-for-aid/fafsa/filling-out",
        },
        {
          title: "Fechas límite de la FAFSA",
          description: "Plazos federales, estatales y universitarios — aplica temprano para no perder ayuda.",
          href: "https://studentaid.gov/apply-for-aid/fafsa/fafsa-deadlines",
        },
      ],
    },
    {
      id: "dual-enrollment",
      title: "Dual Enrollment",
      description: "Obtener créditos universitarios mientras aún estás en la escuela secundaria.",
      links: [
        {
          title: "Dual Enrollment en Georgia (GAfutures)",
          description: "Información oficial del programa en Georgia — elegibilidad, fondos y cómo aplicar.",
          href: "https://www.gafutures.org/hope-state-aid-programs/scholarships-grants/dual-enrollment/",
        },
        {
          title: "Pasos para la solicitud de Dual Enrollment",
          description: "Lo que estudiantes y familias deben completar en GAfutures.",
          href: "https://www.gafutures.org/hope-state-aid-programs/scholarships-grants/dual-enrollment/application-procedure",
        },
        {
          title: "Directorio de cursos de Dual Enrollment",
          description: "Explora los cursos aprobados del programa de Dual Enrollment en Georgia.",
          href: "https://www.gafutures.org/checs/dualenrollment/decoursedirectory",
        },
        {
          title: "¿Es dual enrollment para ti?",
          description: "Ventajas, desventajas y preguntas para tu consejero.",
          comingSoon: true,
        },
      ],
    },
    {
      id: "oportunidades",
      title: "Pasantías y Programas",
      description: "Roles de liderazgo, programas de verano y experiencias que fortalecen tu camino.",
      links: [
        {
          title: "Explorar universidades en Common App",
          description: "Busca y conoce más de 1,000 universidades — ideal para armar tu lista desde temprano.",
          href: "https://www.commonapp.org/explore",
        },
        {
          title: "Planificación universitaria BigFuture",
          description: "Herramientas gratuitas para explorar universidades, carreras y próximos pasos.",
          href: "https://bigfuture.collegeboard.org/",
        },
        {
          title: "Programas de QuestBridge",
          description: "Oportunidades que conectan a estudiantes de alto rendimiento de bajos ingresos con universidades top.",
          href: "https://www.questbridge.org/",
        },
        {
          title: "Get Schooled — Camino a la universidad",
          description: "Artículos, consejos y apoyo gratis sobre aplicar a la universidad.",
          href: "https://getschooled.com/journey/get-to-college/",
        },
        {
          title: "Trabajos para estudiantes de secundaria (Get Schooled)",
          description: "Dónde buscar, qué necesitas y cómo armar tu primer currículum.",
          href: "https://getschooled.com/",
        },
        {
          title: "AP Student (College Board)",
          description: "Recursos oficiales para cursos y exámenes Advanced Placement.",
          href: "https://apstudents.collegeboard.org/",
        },
        {
          title: "Exenciones de pago del SAT",
          description: "Averigua si calificas para tomar el SAT gratis y acceder a otros beneficios de College Board.",
          href: "https://satsuite.collegeboard.org/sat/registration/fee-waivers",
        },
        {
          title: "College Scorecard",
          description: "Investiga universidades antes de aplicar — costos, tasas de graduación y datos de ingresos.",
          href: "https://collegescorecard.ed.gov/",
        },
      ],
    },
    {
      id: "investigacion",
      title: "Oportunidades de Investigación",
      description: "Involucrarse en investigación como estudiante universitario.",
      links: [
        {
          title: "Investigación de pregrado en Georgia Tech",
          description: "Oportunidades de investigación en el campus y cómo involucrarte en GT.",
          href: "https://undergradresearch.gatech.edu/",
        },
        {
          title: "Fondos para investigación de pregrado en GT",
          description: "Premios PURA y otras opciones de financiamiento para estudiantes investigadores.",
          href: "https://undergradresearch.gatech.edu/funding/",
        },
        {
          title: "NSF Research Experiences for Undergraduates (REU)",
          description: "Busca programas de investigación de verano en universidades de EE. UU.",
          href: "https://www.nsf.gov/crssprgm/reu/reu_search.cfm",
        },
      ],
    },
    {
      id: "pre-medicina",
      title: "Pre-Medicina / Pre-Salud",
      description: "Navegar la ruta pre-salud como estudiante de primera generación.",
      links: [
        {
          title: "Asesoría Pre-Health en Georgia Tech",
          description: "Asesoría oficial de GT para pre-medicina, odontología, farmacia y otras carreras de salud.",
          href: "https://www.prehealth.gatech.edu/",
        },
        {
          title: "AAMC Aspiring Docs",
          description: "Guías e historias gratis para comenzar el camino hacia la medicina.",
          href: "https://students-residents.aamc.org/aspiring-docs/aspiring-docs",
        },
        {
          title: "Centro AAMC para estudiantes y residentes",
          description: "Recursos confiables para explorar carreras médicas, solicitudes y preparación.",
          href: "https://students-residents.aamc.org/",
        },
        {
          title: "Preparación para el MCAT (AAMC)",
          description: "Información oficial sobre cómo prepararte para el examen MCAT.",
          href: "https://students-residents.aamc.org/mcat-prep/mcat-prep",
        },
        {
          title: "Catálogo de GT: programas preprofesionales",
          description: "Cómo Georgia Tech aborda las rutas pre-salud (y otras rutas preprofesionales).",
          href: "https://catalog.gatech.edu/academics/special-academic-programs/preprofessional-programs/",
        },
      ],
    },
    {
      id: "estudio",
      title: "Habilidades de Estudio y Vida Universitaria",
      description: "Estrategias que funcionan, manejo del tiempo y adaptación al campus.",
      links: [
        {
          title: "Get Schooled — Empezar la universidad con fuerza",
          description: "Consejos para orientación, clases y finalizar la ayuda financiera como estudiante nuevo.",
          href: "https://getschooled.com/journey/get-to-college/",
        },
        {
          title: "Khan Academy",
          description: "Práctica y lecciones gratis para muchas materias de secundaria y universidad.",
          href: "https://www.khanacademy.org/",
        },
        {
          title: "Centro de Carreras de Georgia Tech",
          description: "Pasantías, orientación profesional y recursos de empleo para estudiantes de GT.",
          href: "https://career.gatech.edu/",
        },
        {
          title: "Ayuda Federal — Administra tu ayuda",
          description: "Entiende becas, préstamos y lo básico del pago una vez que estás en la universidad.",
          href: "https://studentaid.gov/manage-loans",
        },
      ],
    },
    {
      id: "familias",
      title: "Recursos en Español para Familias",
      description: "Información diseñada para padres y familias que dominan el español.",
      links: [
        {
          title: "Common App para familias",
          description: "Consejos para familias que apoyan a sus estudiantes en el proceso de solicitud.",
          href: "https://www.commonapp.org/family",
        },
        {
          title: "Cómo llenar el formulario FAFSA",
          description: "Guía oficial en español de Ayuda Federal para Estudiantes.",
          href: "https://studentaid.gov/es/apply-for-aid/fafsa/filling-out",
        },
        {
          title: "Fechas límite de la FAFSA",
          description: "Plazos importantes para no perder ayuda federal o estatal.",
          href: "https://studentaid.gov/apply-for-aid/fafsa/fafsa-deadlines",
        },
        {
          title: "Tipos de ayuda federal para estudiantes",
          description: "Becas, grants, work-study y préstamos explicados claramente.",
          href: "https://studentaid.gov/understand-aid/types",
        },
        {
          title: "Beca HOPE de Georgia",
          description: "Información oficial de la beca HOPE para estudiantes de Georgia.",
          href: "https://www.gafutures.org/hope-state-aid-programs/hope-zell-miller-scholarships/hope-scholarship",
        },
        {
          title: "College Scorecard",
          description: "Compara universidades por costo y resultados antes de decidir.",
          href: "https://collegescorecard.ed.gov/",
        },
      ],
    },
  ] as ResourceCategory[],
};

// ─── RESOURCE FILTERS (Resources page UX) ──────────────────────────────────────
// Maps each category id to audience tags used for filtering on the Resources page.

export type ResourceAudience = "high-school" | "college" | "families" | "pre-med";

export const resourceFilters = {
  en: [
    { id: "all", label: "All" },
    { id: "high-school", label: "High School" },
    { id: "college", label: "College" },
    { id: "families", label: "Families" },
    { id: "pre-med", label: "Pre-Med" },
  ],
  es: [
    { id: "all", label: "Todos" },
    { id: "high-school", label: "Secundaria" },
    { id: "college", label: "Universidad" },
    { id: "families", label: "Familias" },
    { id: "pre-med", label: "Pre-Medicina" },
  ],
};

export const categoryAudiences: Record<string, ResourceAudience[]> = {
  "college-applications": ["high-school"],
  essays: ["high-school"],
  scholarships: ["high-school", "college"],
  fafsa: ["high-school", "college", "families"],
  "dual-enrollment": ["high-school"],
  opportunities: ["high-school", "college"],
  research: ["college", "pre-med"],
  "pre-med": ["pre-med"],
  "study-skills": ["college"],
  families: ["families"],
  solicitudes: ["high-school"],
  ensayos: ["high-school"],
  becas: ["high-school", "college"],
  oportunidades: ["high-school", "college"],
  investigacion: ["college", "pre-med"],
  "pre-medicina": ["pre-med"],
  estudio: ["college"],
  familias: ["families"],
};

// ─── FAMILY CALLOUT (Home page) ────────────────────────────────────────────────

export const familyCallout = {
  en: {
    title: "For parents & Spanish-speaking families",
    text: "Clear guidance in English and Spanish — so you can support your student without translating everything alone.",
    cta: "Family resources",
    href: "/resources#families",
  },
  es: {
    title: "Para padres y familias hispanohablantes",
    text: "Orientación clara en inglés y español — para que puedas apoyar a tu estudiante sin tener que traducir todo solo/a.",
    cta: "Recursos para familias",
    href: "/es/recursos#familias",
  },
};

// ─── UX LABELS (shared component copy) ─────────────────────────────────────────

export const uxLabels = {
  en: {
    skipToContent: "Skip to content",
    startHereFab: "Start here",
    searchResources: "Search resources…",
    jumpTo: "Jump to",
    noResults: "No resources match your search. Try a different filter or keyword.",
    comingSoonNote: "Placeholder items will be replaced with real links as resources are finalized.",
    notFoundTitle: "Page not found",
    notFoundText: "This page doesn't exist — but you're not lost. Start here instead.",
    notFoundCta: "Go home",
    notFoundStartCta: "Start here",
    notFoundStartHref: "/start-here",
    breadcrumbHome: "Home",
    themeLight: "Switch to dark mode",
    themeDark: "Switch to light mode",
    contrastOn: "Turn on high contrast",
    contrastOff: "Turn off high contrast",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    linkInBioTitle: "Links",
  },
  es: {
    skipToContent: "Saltar al contenido",
    startHereFab: "Comienza aquí",
    searchResources: "Buscar recursos…",
    jumpTo: "Ir a",
    noResults: "No hay recursos que coincidan. Prueba otro filtro o palabra clave.",
    comingSoonNote: "Los marcadores de posición serán reemplazados con enlaces reales cuando los recursos estén listos.",
    notFoundTitle: "Página no encontrada",
    notFoundText: "Esta página no existe — pero no estás perdido/a. Comienza aquí.",
    notFoundCta: "Ir al inicio",
    notFoundStartCta: "Comienza aquí",
    notFoundStartHref: "/es/comienza-aqui",
    breadcrumbHome: "Inicio",
    themeLight: "Cambiar a modo oscuro",
    themeDark: "Cambiar a modo claro",
    contrastOn: "Activar alto contraste",
    contrastOff: "Desactivar alto contraste",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    linkInBioTitle: "Enlaces",
  },
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
    followTitle: "Follow along",
    emailButton: "Email Stacy",
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
    followTitle: "Sígueme",
    emailButton: "Enviar correo",
  },
};

// ─── LINK-IN-BIO PAGE (/links and /es/enlaces) ───────────────────────────────────
// Edit buttons for Instagram/bio link page. Set comingSoon: true until ready.
// When newsletter or mentorship form is ready, add href and set comingSoon: false.

export type LinkInBioButton = {
  label: string;
  href: string;
  comingSoon?: boolean;
  comingSoonLabel?: string;
};

export const linkInBioContent = {
  en: {
    metaDescription:
      "Quick links to First Gen Chronicles — perfect for Instagram bio or social media.",
    avatarSrc: "/images/about/stacy-lab-coat.png",
    avatarAlt: "Stacy Lomeli",
    comingSoonLabel: "Coming Soon",
    buttons: [
      { label: "Home", href: "/" },
      { label: "About Stacy", href: "/about" },
      { label: "Resources", href: "/resources" },
      { label: "English Welcome", href: "/" },
      { label: "Bienvenidos", href: "/bienvenidos" },
      { label: "Contact", href: "/contact" },
      { label: "Email Stacy", href: `mailto:${siteConfig.email}` },
      {
        label: "Newsletter Signup",
        href: "",
        comingSoon: true,
        comingSoonLabel: "Coming Soon",
      },
      {
        label: "Mentorship Interest Form",
        href: "",
        comingSoon: true,
        comingSoonLabel: "Coming Soon",
      },
    ] as LinkInBioButton[],
  },
  es: {
    metaDescription:
      "Enlaces rápidos a First Gen Chronicles — ideal para la biografía de Instagram o redes sociales.",
    avatarSrc: "/images/about/stacy-lab-coat.png",
    avatarAlt: "Stacy Lomeli",
    comingSoonLabel: "Próximamente",
    buttons: [
      { label: "Inicio", href: "/bienvenidos" },
      { label: "Sobre Mí", href: "/es/sobre-mi" },
      { label: "Recursos", href: "/es/recursos" },
      { label: "English", href: "/" },
      { label: "Español", href: "/bienvenidos" },
      { label: "Contacto", href: "/es/contacto" },
      { label: "Enviar correo", href: `mailto:${siteConfig.email}` },
      {
        label: "Boletín informativo",
        href: "",
        comingSoon: true,
        comingSoonLabel: "Próximamente",
      },
      {
        label: "Formulario de mentoría",
        href: "",
        comingSoon: true,
        comingSoonLabel: "Próximamente",
      },
    ] as LinkInBioButton[],
  },
};

/** @deprecated Use linkInBioContent.en.buttons */
export const linkInBioButtons = linkInBioContent.en.buttons;

// ─── FOOTER ──────────────────────────────────────────────────────────────────────

export const footerContent = {
  en: {
    mission:
      "Supporting first-generation students and Hispanic families with bilingual guidance, resources, and encouragement.",
    quickLinksTitle: "Quick Links",
    languageTitle: "Language",
    contactTitle: "Contact",
    socialTitle: "Follow",
    credit: "Created by Stacy Lomeli",
  },
  es: {
    mission:
      "Apoyando a estudiantes de primera generación y familias hispanas con orientación bilingüe, recursos y ánimo.",
    quickLinksTitle: "Enlaces Rápidos",
    languageTitle: "Idioma",
    contactTitle: "Contacto",
    socialTitle: "Sígueme",
    credit: "Creado por Stacy Lomeli",
  },
};
