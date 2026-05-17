export type ProjectStatus = string;

export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  status: ProjectStatus;
  description: string;
  screenshots: ProjectScreenshot[];
  href?: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export const portfolioName = "Llams";

export const navigationItems: NavigationItem[] = [
  {
    label: "Github",
    href: "https://github.com/CallMeLlms",
  },
  {
    label: "LinkedIn",
    href: "https://ph.linkedin.com/in/justine-llamera-4107842a3",
  },
];

export const projects: Project[] = [
  {
    title: "MathSync",
    status: "Development",
    description:
      "4th year capstone project. Lead Mobile Developer for a capstone from Oct 2025 to May 2026, building a cross-platform React Native and Expo app with Zustand, SQLite, AsyncStorage, Axios.",
    screenshots: [
      { src: "/png/MathSync-SignUp.png", alt: "MathSync sign up screen" },
      { src: "/png/MathSync.png", alt: "MathSync app screen" },
    ],
    // href: "#",
  },
  {
    title: "National Health Workforce Registry (NHWR)",
    status: "Internship",
    description:
      "Software Developer Intern at Moodlearning from Oct 2025 to Apr 2026, contributing 500 hours to a government healthcare workforce registry with Laravel, JavaScript, Blade, and MariaDB.",
    screenshots: [
      { src: "/file.svg", alt: "Project Archive screenshot placeholder" },
      { src: "/window.svg", alt: "Project Archive detail view placeholder" },
    ],
    // href: "#",
  },
  {
    title: "BatumBAKAL",
    status: "Development",
    description:
      "Full-stack fitness management product focused on backend architecture, secure JWT authentication, and mobile-first workout program engineering with Node.js, Express, PostgreSQL, Prisma, React Native, and Expo.",
    screenshots: [
      { src: "/png/Batum1.png", alt: "screenshot placeholder" },
      { src: "/png/Batum2.png", alt: "screenshot placeholder" },
      { src: "/png/Batum3.png", alt: "screenshot placeholder" },
      { src: "/png/batum4.png", alt: "screenshot placeholder" },
    ],
  },
  // {
  //   title: "API Toolkit",
  //   status: "Completed",
  //   description:
  //     "A backend-oriented helper layer for organizing request handlers, shared utilities, and integration boundaries.",
  //   screenshots: [
  //     { src: "/file.svg", alt: "API Toolkit screenshot placeholder" },
  //   ],
  // },
];
