// ─── Personal Info ──────────────────────────────────────────
export const personal = {
  name: "K A Bimsara Kaushal",
  shortName: "Bimsara",
  role: "Full-Stack Developer",
  tagline: "Building robust systems at the intersection of code & creativity",
  university: "National Institute of Business Management",
  degree: "Bachelor of Science in Information Technology",
  year: "3rd Year Undergraduate",
  location: "Sri Lanka",
  email: "bimsarakaushal933@gmail.com",

  github: "https://github.com/Bimsara2002",
  linkedin: "https://www.linkedin.com/in/bimsara-kaushal",
  resumeUrl: "/Bimsara_CV.pdf",



  bio: [
    "I'm a passionate 3rd year IT undergraduate at the National Institute of Business Management, Sri Lanka, dedicated to crafting elegant, high-performance web applications.",
    "My expertise spans full-stack development with a focus on PHP/Laravel, React, and modern databases. I love solving complex real-world problems with clean, maintainable code.",
    "When I'm not building university management systems or exploring new frameworks, I'm contributing to open source and continuously leveling up my technical skills.",
  ],
};

// ─── Projects ─────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "University Management System",
    description:
      "A comprehensive full-stack university management platform built with Laravel & Livewire. Features student enrollment, course management, payment tracking, instructor management, and real-time data tables with advanced filtering.",
    longDescription:
      "Architected and built a complete university ERP system featuring modules for Students, Courses, Enrollments, Payments, Instructors, Results, and Designations. Uses Laravel with Livewire for reactive UI components without writing custom JavaScript.",
    tech: ["PHP", "Laravel", "Livewire", "MySQL", "Tailwind CSS", "Alpine.js"],
    color: "#6366f1",
    github: "https://github.com/Bimsara2002",
    live: null,
    featured: true,
    category: "Full-Stack",
    status: "In Progress",
    highlights: [
      "Livewire real-time CRUD tables",
      "Role-based access control",
      "Payment & enrollment tracking",
      "Mosaic Admin UI design system",
    ],
  },
  {
    id: 2,
    title: "Study Planner & Scheduler",
    description:
      "Smart Study Planner mobile application that generates optimized study schedules using a Max-Heap Priority Queue and Greedy algorithm.",
    longDescription:
      "Developed a robust mobile study scheduling app leveraging data structures and algorithms. Built with React Native (TypeScript) and Spring Boot (Java) backend with a PostgreSQL database.",
    tech: ["React Native", "TypeScript", "Spring Boot", "Java", "PostgreSQL"],
    color: "#a855f7",
    github: "https://github.com/Bimsara2002/Study-Planner",
    live: null,
    featured: true,
    category: "Mobile",
    status: "Completed",
    highlights: [
      "Max-Heap Priority Queue scheduler",
      "Greedy optimization algorithm",
      "Interactive calendar views",
      "Cross-platform responsive layout",
    ],
  },
  {
    id: 3,
    title: "Seat Allocation System",
    description:
      "A mobile Seat Allocation Management System built with React Native and TypeScript. The application streamlines exam registration, payment processing, application status tracking, and automated seat allocation.",
    longDescription:
      "An advanced mobile and backend suite built to automate examination venue selection, seat distribution, and verification processes.",
    tech: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB"],
    color: "#ec4899",
    github: "https://github.com/Bimsara2002/SeatAllocatorApp",
    live: null,
    featured: true,
    category: "Mobile",
    status: "Completed",
    highlights: [
      "Automated seat allocation logic",
      "Mobile payment integration",
      "Real-time registration tracking",
      "Secure admin control dashboard",
    ],
  },
  {
    id: 4,
    title: "ML Stock Forecasting App",
    description:
      "AI-powered stock forecasting mobile application built with Flutter and Python Flask, integrating real-time Yahoo Finance data and machine learning techniques.",
    longDescription:
      "A predictive mobile utility displaying historical price indexes and real-time stocks, using machine learning regression models to project stock movements.",
    tech: ["Flutter", "Dart", "Python", "Flask", "Scikit-Learn"],
    color: "#f59e0b",
    github: "https://github.com/Bimsara2002/ML-Stock-Forecasting-app",
    live: null,
    featured: false,
    category: "AI / ML",
    status: "Completed",
    highlights: [
      "Yahoo Finance API integration",
      "Machine learning forecast model",
      "Beautiful Flutter graphs & charts",
      "RESTful Python API endpoints",
    ],
  },
  {
    id: 5,
    title: "LifeLink - Donation App",
    description:
      "LifeLink is a real-time mobile application that connects hospitals with blood & organ donors, enabling fast emergency alerts and efficient donation management.",
    longDescription:
      "Designed and coded a vital donor coordinator network utilizing cloud databases to broadcast localized emergency donation requests and alert subscribers.",
    tech: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
    color: "#ef4444",
    github: "https://github.com/Bimsara2002/LifeLink-MobileApp",
    live: null,
    featured: true,
    category: "Mobile",
    status: "Completed",
    highlights: [
      "Real-time emergency broadcast",
      "Location-based donor filtering",
      "Firebase user authentication",
      "Organ donation declaration module",
    ],
  },
  {
    id: 6,
    title: "Hospital Management System",
    description:
      "A enterprise full-stack Hospital Management System built with a Spring Boot REST API (Back-end) and a React.js interface (Front-end).",
    longDescription:
      "Architected a complete clinic and hospital manager enabling staff coordination, patient digital records, queue scheduling, and billing invoices.",
    tech: ["Spring Boot", "React.js", "Java", "JavaScript", "MySQL"],
    color: "#06b6d4",
    github: "https://github.com/Bimsara2002/hospital-management-system",
    live: null,
    featured: false,
    category: "Full-Stack",
    status: "Completed",
    highlights: [
      "Spring Boot RESTful controller",
      "React stateful interface",
      "Interactive doctor scheduling",
      "Dynamic medical history logger",
    ],
  },
  {
    id: 7,
    title: "Personal Finance Manager",
    description:
      "Full-stack finance management app using React, Flask, SQLite, and Oracle DB to track investments, budgets, and expenses.",
    longDescription:
      "Constructed a finance supervisor dashboard allowing users to input transactions, review categorical summaries, and execute Oracle DB calculations.",
    tech: ["React.js", "Python", "Flask", "Oracle DB", "SQLite"],
    color: "#10b981",
    github: "https://github.com/Bimsara2002/Finance-Management-App",
    live: null,
    featured: false,
    category: "Full-Stack",
    status: "Completed",
    highlights: [
      "Relational Oracle database schemas",
      "SQLite local storage integration",
      "Asset transaction analyzer",
      "Categorized visual charts",
    ],
  },
  {
    id: 8,
    title: "Mobile Sales Manager",
    description:
      "A Java Swing-based desktop application for managing mobile shop operations including products, sales billing, stock control, and monthly reports.",
    longDescription:
      "Designed and coded a desktop ERP tool for local hardware/mobile stores, automating sales ledger workflows and print invoice rendering.",
    tech: ["Java", "Swing", "AWT", "JDBC", "MySQL"],
    color: "#3b82f6",
    github: "https://github.com/Bimsara2002/Mobile-Sales-Management-System",
    live: null,
    featured: false,
    category: "Desktop",
    status: "Completed",
    highlights: [
      "Java Swing custom graphical UI",
      "Automatic PDF billing generation",
      "Real-time stock alert controls",
      "Monthly performance reporters",
    ],
  },
  {
    id: 9,
    title: "Doctor Appointment System",
    description:
      "A web application built with HTML, CSS, PHP, JavaScript, jQuery, and MySQL that allows users to book and view doctor appointments.",
    longDescription:
      "Developed a scheduling service featuring patient login portals, doctor scheduling managers, and email confirmation workflows.",
    tech: ["PHP", "JavaScript", "jQuery", "MySQL", "Bootstrap"],
    color: "#14b8a6",
    github: "https://github.com/Bimsara2002/Doctor-Appointment-System",
    live: null,
    featured: false,
    category: "Web App",
    status: "Completed",
    highlights: [
      "Patient medical appointment booker",
      "Dynamic jQuery filtering inputs",
      "PHP session-based authentication",
      "Responsive schedule inspector",
    ],
  },
];

// ─── Skills ────────────────────────────────────────────────
export const skillCategories = [
  {
    label: "Backend",
    icon: "backend",
    skills: [
      { name: "PHP", level: 85, color: "#818cf8" },
      { name: "Laravel", level: 82, color: "#818cf8" },
      { name: "Livewire", level: 78, color: "#818cf8" },
      { name: "Node.js", level: 60, color: "#818cf8" },
      { name: "REST APIs", level: 75, color: "#818cf8" },
    ],
  },
  {
    label: "Frontend",
    icon: "frontend",
    skills: [
      { name: "React / Next.js", level: 75, color: "#22d3ee" },
      { name: "TypeScript", level: 65, color: "#22d3ee" },
      { name: "Tailwind CSS", level: 88, color: "#22d3ee" },
      { name: "HTML / CSS", level: 90, color: "#22d3ee" },
      { name: "JavaScript", level: 78, color: "#22d3ee" },
    ],
  },
  {
    label: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", level: 82, color: "#34d399" },
      { name: "PostgreSQL", level: 55, color: "#34d399" },
      { name: "SQLite", level: 70, color: "#34d399" },
      { name: "Eloquent ORM", level: 80, color: "#34d399" },
    ],
  },
  {
    label: "Tools & DevOps",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", level: 85, color: "#f472b6" },
      { name: "VS Code", level: 90, color: "#f472b6" },
      { name: "Linux / CLI", level: 68, color: "#f472b6" },
      { name: "Vercel / Hosting", level: 70, color: "#f472b6" },
    ],
  },
];

// ─── Tech Stack Badges ──────────────────────────────────────
export const techStack = [
  { name: "PHP", category: "Backend", variant: "tag" as const },
  { name: "Laravel", category: "Backend", variant: "tag" as const },
  { name: "Livewire", category: "Backend", variant: "tag" as const },
  { name: "Next.js", category: "Frontend", variant: "tag-cyan" as const },
  { name: "React", category: "Frontend", variant: "tag-cyan" as const },
  { name: "TypeScript", category: "Frontend", variant: "tag-cyan" as const },
  { name: "Tailwind CSS", category: "Frontend", variant: "tag-cyan" as const },
  { name: "MySQL", category: "Database", variant: "tag-green" as const },
  { name: "Git", category: "Tools", variant: "tag-purple" as const },
  { name: "Framer Motion", category: "Frontend", variant: "tag-purple" as const },
];

// ─── Education ──────────────────────────────────────────────
export const education = [
  {
    degree: "BSc (Hons) Information Technology",
    institution: "National Institute of Business Management",
    shortName: "NIBM",
    period: "2022 — Present",
    status: "3rd Year, In Progress",
    description:
      "Pursuing a comprehensive IT degree covering software engineering, database systems, web technologies, networking, and project management. Active member of the IT student community.",
    highlights: [
      "Software Engineering & Design Patterns",
      "Database Administration",
      "Web Development",
      "Computer Networks & Security",
      "Project Management",
    ],
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "Local Government School",
    shortName: "A/L",
    period: "2019 — 2021",
    status: "Completed",
    description:
      "Completed Advanced Level examinations with a focus on Technology stream, building a strong foundation in mathematics and technology.",
    highlights: [
      "Technology Stream",
      "Mathematics",
      "ICT",
    ],
  },
];

// ─── Social Links ───────────────────────────────────────────
export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/Bimsara2002",
    icon: "github",
    handle: "@Bimsara2002",
    color: "#f1f5f9",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bimsara-kaushal",
    icon: "linkedin",
    handle: "bimsara-kaushal",
    color: "#0ea5e9",
  },
  {
    name: "Email",
    url: "mailto:bimsarakaushal933@gmail.com",
    icon: "mail",
    handle: "bimsarakaushal933@gmail.com",

    color: "#6366f1",
  },
];

// ─── Navigation ─────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

// ─── Stats ──────────────────────────────────────────────────
export const stats = [
  { label: "Projects Built", value: "10+", icon: "projects" },
  { label: "GitHub Repos", value: "20+", icon: "github" },
  { label: "Technologies", value: "15+", icon: "tech" },
  { label: "Years Coding", value: "3+", icon: "years" },
];
