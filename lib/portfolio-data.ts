export type ProjectStatus = string;

export type ProjectScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  title: string;
  status: ProjectStatus;
  year: string;
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
    year: "2026",
    description:
      "4th year capstone project. Lead Mobile Developer for a capstone from Oct 2025 to May 2026, building a cross-platform React Native and Expo app with Zustand, SQLite, AsyncStorage, Axios.",
    screenshots: [
      {
        src: "/png/MathSync-SignUp.png",
        alt: "MathSync sign up screen",
        width: 500,
        height: 866,
      },
      {
        src: "/png/MathSync.png",
        alt: "MathSync app screen",
        width: 1614,
        height: 921,
      },
    ],
    // href: "#",
  },
  {
    title: "National Health Workforce Registry (NHWR)",
    status: "Internship",
    year: "2026",
    description:
      "Software Developer Intern at Moodlearning from Oct 2025 to Apr 2026, contributing 500 hours to a government healthcare workforce registry with Laravel, JavaScript, Blade, and MariaDB.",
    screenshots: [
      {
        src: "/file.svg",
        alt: "Project Archive screenshot placeholder",
        width: 16,
        height: 16,
      },
      {
        src: "/window.svg",
        alt: "Project Archive detail view placeholder",
        width: 16,
        height: 16,
      },
    ],
    // href: "#",
  },
  {
    title: "BatumBAKAL",
    status: "Development",
    year: "2026",
    description:
      "Full-stack fitness management product focused on backend architecture, secure JWT authentication, and mobile-first workout program engineering with Node.js, Express, PostgreSQL, Prisma, React Native, and Expo.",
    screenshots: [
      {
        src: "/png/Batum1.png",
        alt: "screenshot placeholder",
        width: 484,
        height: 859,
      },
      {
        src: "/png/batum2.png",
        alt: "screenshot placeholder",
        width: 484,
        height: 872,
      },
      {
        src: "/png/batum3.png",
        alt: "screenshot placeholder",
        width: 487,
        height: 859,
      },
    ],
  },
   {
    title: "Bloggemi",
    status: "Development",
    year: "2025",
    description:
      "Small fun project meant to generally learn about react, gemini and supabase funamentals stuff. Currenly un-maintained back when everything was made with love <3",
    screenshots: [
      {
        src: "/png/Bloggemi1.png",
        alt: "screenshot placeholder",
        width: 1618,
        height: 922,
      },
      {
        src: "/png/Bloggemi2.png",
        alt: "screenshot placeholder",
        width: 1618,
        height: 925,
      },
    ],
    href: 'https://bloggemi.vercel.app/',
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
