export type NavItem = {
  label: string
  href: string
  description: string
}

export type MagazineIssue = {
  slug: string
  title: string
  month: string
  theme: string
  pages: number
  pdfHref: string
  coverSrc: string
  published: string
  articles: string[]
}

export type ExecutiveMember = {
  name: string
  role: string
  department: string
  school: string
  grade: string
  imageSrc: string
  initials: string
  summary: string
  goal: string
  note: string
}

export const externalLinks = {
  email: "choiminsung365@gmail.com",
  instagram: "https://www.instagram.com/synthifyofficial_/",
  application:
    "https://docs.google.com/forms/d/e/1FAIpQLSdBFO-Wn0yh6vOkvb7vK_fCOB3jTzpFbuKB-Q8kQmMgckYjyQ/viewform",
  publications: "https://issuu.com/synthify",
}

export const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
    description: "Mission, publishing model, and student-led impact.",
  },
  {
    label: "Publications",
    href: "/publications",
    description: "Read Synthify magazine issues and article collections.",
  },
  {
    label: "Team",
    href: "/team",
    description: "Meet the executive board leading Synthify.",
  },
  {
    label: "Join",
    href: "/join",
    description: "Apply to write, edit, design, or support outreach.",
  },
  {
    label: "Connect",
    href: "/connect",
    description: "Find our Instagram, contact email, and publication hub.",
  },
]

export const stats = [
  { value: "40+", label: "members" },
  { value: "9+", label: "countries" },
  { value: "20+", label: "high schools" },
]

export const magazines: MagazineIssue[] = [
  {
    slug: "january-2026",
    title: "January 2026",
    month: "January",
    theme: "Technology & Ethics",
    pages: 39,
    pdfHref: "/magazines/january26.pdf",
    coverSrc: "/magazine-covers/january26.png",
    published: "January 2026",
    articles: [
      "Data-Driven Discrimination",
      "Your DNA Is Not Just Yours",
      "CRISPR Explained: How We're Editing Genes",
      "Advancements in the Field of Ophthalmology",
      "Destruction In Just One Click",
      "Environmental Impact of Technology: Innovation at what Cost?",
    ],
  },
  {
    slug: "march-2026",
    title: "March 2026",
    month: "March",
    theme: "Tech & Well-Being",
    pages: 40,
    pdfHref: "/magazines/march26.pdf",
    coverSrc: "/magazine-covers/march26.png",
    published: "March 2026",
    articles: [
      "Blue Light Glasses and the Placebo Effect",
      "Designer Babies Using CRISPR Technology",
      "Technology for Longevity and the Race to Live Forever",
      "How AI Simulations are Replacing High-Risk Medical Procedures",
      "AI Mental Health Detection",
      "Editing the Blueprint of Life",
    ],
  },
  {
    slug: "april-2026",
    title: "April 2026",
    month: "April",
    theme: "Global Health & Sustainability",
    pages: 59,
    pdfHref: "/magazines/april26.pdf",
    coverSrc: "/magazine-covers/april26.png",
    published: "April 2026",
    articles: [
      "Zoonotic Spillover",
      "The Plastic Within",
      "Vaccination Access and Global Immunization Gaps",
      "Rise of Air Pollution in East Asia",
      "Systemic Failures in Healthcare",
      "When Medicine Stops Working",
      "Strengthening Sustainable Health Systems to Combat Vector-Borne Diseases Globally",
      "The Rising Tide of Disease",
      "The Intersection of Climate Change and Health Equity",
    ],
  },
  {
    slug: "may-2026",
    title: "May 2026",
    month: "May",
    theme: "Innovation & Health",
    pages: 75,
    pdfHref: "/magazines/may26.pdf",
    coverSrc: "/magazine-covers/may26.png",
    published: "May 2026",
    articles: [
      "Beyond Calcium",
      "The Tiny Organs Revolutionizing Modern Medicine",
      "Targeted Protein Degradation",
      "How Neurobiology Shapes Your World",
      "Pharmacogenomics",
      "Health Inequality and the Global System",
      "Healthcare Beyond Hospital Walls",
      "Exploring Lingual Braces and Invisalign",
      "Medicine Beyond the Hospital Walls",
      "Nanotechnology in Drug Delivery",
      "Genetically Modified Organisms",
      "DNA Nanostructures for Controlled Drug Release",
    ],
  },
]

export const executives: ExecutiveMember[] = [
  {
    name: "Minsung Choi",
    role: "President",
    department: "Executive Leadership",
    school: "Shekou International School",
    grade: "Junior",
    imageSrc: "/exec_photos/minsung.png",
    initials: "MC",
    summary:
      "Manages the overall process of magazine production and club operations while coordinating with department executives.",
    goal:
      "Minsung wants Synthify to share the joy of magazines and make student-written science accessible to more readers.",
    note: "Does anyone have sauce?",
  },
  {
    name: "Ryan Ahn",
    role: "Journalism Executive",
    department: "Journalism",
    school: "Yongsan International School of Seoul",
    grade: "Junior",
    imageSrc: "/exec_photos/ryan.png",
    initials: "RA",
    summary:
      "Collaborates with editorial leadership, guides journalism members, and helps choose the direction of each issue.",
    goal:
      "Ryan hopes Synthify helps readers feel the same curiosity and excitement that first drew him to STEM.",
    note: "You don't have to be great to start, but you have to start to be great.",
  },
  {
    name: "Pramith Bhandari",
    role: "Chief Editor",
    department: "Editorial",
    school: "New Westminster Secondary School",
    grade: "High school student",
    imageSrc: "/exec_photos/pramith.png",
    initials: "PB",
    summary:
      "Supports editors, manages deadlines, sets agendas, and helps produce coherent publication-ready issues.",
    goal:
      "Pramith joined Synthify to make STEM reading more accessible while refining proofreading and editing skills.",
    note: "Excellence is a habit.",
  },
  {
    name: "Soobin Leem",
    role: "Vice President",
    department: "Executive Leadership",
    school: "Seoul Global High School",
    grade: "Class of 2027",
    imageSrc: "/exec_photos/soobin.png",
    initials: "SL",
    summary:
      "Works alongside the president to manage departments, oversee publications, and expand Synthify through events.",
    goal:
      "Soobin wants every teenager to have the opportunity to explore scientific knowledge through accessible magazines.",
    note: "Make it happen.",
  },
  {
    name: "Minseo Jo",
    role: "Outreach Executive",
    department: "Outreach",
    school: "Hankuk Academy of Foreign Studies",
    grade: "Class of 2027",
    imageSrc: "/exec_photos/minseo.png",
    initials: "MJ",
    summary:
      "Leads promotion and donation projects while building partnerships with organizations in Korea and abroad.",
    goal:
      "Minseo works to expand Synthify's presence through global connections and outreach initiatives.",
    note: "Passionate about creating meaningful impact.",
  },
  {
    name: "Ayeon Cho",
    role: "Layout Executive",
    department: "Layout",
    school: "Hankuk Academy of Foreign Studies",
    grade: "Class of 2027",
    imageSrc: "/exec_photos/ayeon.png",
    initials: "AC",
    summary:
      "Transforms complex scientific content into clear visual narratives that balance accuracy and creativity.",
    goal:
      "Ayeon wants Synthify to grow into a leading student-driven science organization shaped by each member's insight.",
    note: "It is not in the stars to hold our destiny but in ourselves.",
  },
]

export const departments = [
  {
    name: "Journalism",
    description:
      "Pitch, research, and write article drafts that make STEM topics clear for teen readers.",
  },
  {
    name: "Editorial",
    description:
      "Shape drafts into publication-ready work through structure, clarity, fact-checking, and deadlines.",
  },
  {
    name: "Layout",
    description:
      "Turn articles into readable magazine spreads with visual hierarchy, pacing, and scientific accuracy.",
  },
  {
    name: "Outreach",
    description:
      "Build partnerships, promote issues, and support donation projects for schools and organizations.",
  },
]

export const joinFaq = [
  {
    question: "Who can apply?",
    answer:
      "Synthify is built for high school students interested in science communication, publishing, design, editing, or outreach.",
  },
  {
    question: "Do applicants need prior publication experience?",
    answer:
      "No. Strong curiosity, reliability, and willingness to improve matter more than a finished portfolio.",
  },
  {
    question: "Where do members work from?",
    answer:
      "Members collaborate internationally. The current organization includes students across 9+ countries and 20+ high schools.",
  },
  {
    question: "What happens after applying?",
    answer:
      "Applicants should expect follow-up from the Synthify team through the contact information submitted in the application form.",
  },
]
