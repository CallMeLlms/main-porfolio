export type ProjectStatus = string;

// export type ProjectScreenshot = {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
// };

export type Project = {
  title: string;
  status: ProjectStatus;
  year: string;
  description: string;
  // screenshots: ProjectScreenshot[];
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
    description: "4th year capstone project. Lead Mobile Developer for a capstone from Oct 2025 to May 2026, building a cross-platform React Native and Expo app with Zustand, SQLite, AsyncStorage, Axios.",
    href: "https://github.com/CallMeLlms/MathSync",
  },
  {
    title: "BatumBAKAL",
    status: "Development",
    year: "2026",
    description: "Full-stack fitness management product focused on backend architecture, secure JWT authentication, and mobile-first workout program engineering with Node.js, Express, PostgreSQL, Prisma, React Native, and Expo.",
    href: "https://github.com/CallMeLlms/BatumBAKAL-Mobile"
  },

  {
    title: "National Health Workforce Registry (NHWR)",
    status: "Internship",
    year: "2026",
    description: "Software Developer Intern from Oct 2025 to Apr 2026, contributing 500 hours to a healthcare workforce registry with Laravel, JavaScript, Blade, and MariaDB.",
    // href: "#",
  },
    {
    title: "Student Performance Dashboard",
    status: "Development",
    year: "2026",
    description: "A dataset that came from kaggle, transformed the dataset using python numpy and used PowerBI for the dashboard presentation. Modifed the project to support web dashboard analytics using fastAPI backend and vite react frontend framework <3",
    href: "https://github.com/CallMeLlms/Stud-Performance-Dashboard"
  },
   {
    title: "Bloggemi",
    status: "Development",
    year: "2025",
    description: "Small fun project meant to generally learn about react, gemini and supabase funamentals stuff. Currenly un-maintained back when everything was made with love <3",
    href: 'https://bloggemi.vercel.app/',
  },
  {
    title: "Weather API",
    status: "Development",
    year: "2025",
    description:"The beginning, project that started it all. <3",
    href: 'https://weather-project-rose-five.vercel.app/',
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
