export type ProjectStatus = "Ongoing" | "Completed";

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

export const portfolioName = "Portfolio Name";

export const navigationItems: NavigationItem[] = [
  {
    label: "Github",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
];

export const projects: Project[] = [
  {
    title: "Portfolio System",
    status: "Ongoing",
    description:
      "A personal portfolio foundation built around a simple one-page structure and expandable project notes.",
    screenshots: [
      { src: "/window.svg", alt: "Portfolio System screenshot placeholder" },
      { src: "/globe.svg", alt: "Portfolio System responsive view placeholder" },
    ],
    href: "#",
  },
  {
    title: "Project Archive",
    status: "Completed",
    description:
      "A structured archive concept for collecting finished builds, experiments, and technical notes in one place.",
    screenshots: [
      { src: "/file.svg", alt: "Project Archive screenshot placeholder" },
      { src: "/window.svg", alt: "Project Archive detail view placeholder" },
    ],
    href: "#",
  },
  {
    title: "Dashboard Prototype",
    status: "Ongoing",
    description:
      "A compact interface prototype focused on dense information, reusable components, and clear interaction states.",
    screenshots: [
      { src: "/window.svg", alt: "Dashboard Prototype screenshot placeholder" },
    ],
  },
  {
    title: "API Toolkit",
    status: "Completed",
    description:
      "A backend-oriented helper layer for organizing request handlers, shared utilities, and integration boundaries.",
    screenshots: [
      { src: "/file.svg", alt: "API Toolkit screenshot placeholder" },
    ],
  },
];
