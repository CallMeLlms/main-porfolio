import ProjectColumnDropdown from "../ui/ProjectColumnDropdown";

const projects = [
  {
    title: "Portfolio System",
    status: "Ongoing" as const,
    description:
      "A personal portfolio foundation built around a simple one-page structure and expandable project notes.",
    stack: ["Next.js", "React", "Tailwind CSS", "shadcn"],
    href: "#",
  },
  {
    title: "Project Archive",
    status: "Completed" as const,
    description:
      "A structured archive concept for collecting finished builds, experiments, and technical notes in one place.",
    stack: ["TypeScript", "UI Systems", "Content"],
    href: "#",
  },
  {
    title: "Dashboard Prototype",
    status: "Ongoing" as const,
    description:
      "A compact interface prototype focused on dense information, reusable components, and clear interaction states.",
    stack: ["React", "Components", "Data UI"],
  },
  {
    title: "API Toolkit",
    status: "Completed" as const,
    description:
      "A backend-oriented helper layer for organizing request handlers, shared utilities, and integration boundaries.",
    stack: ["Node.js", "APIs", "Utilities"],
  },
];

export default function MainView() {
  return (
    <main className="min-h-screen">
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 top-0 z-20 border-b bg-background/95 px-4 py-3 backdrop-blur sm:px-8"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a
            href="#intro"
            className="text-sm font-bold uppercase tracking-wide text-foreground"
          >
            Portfolio Name
          </a>

          <div className="flex items-center gap-2 text-sm font-medium">
            <a
              href="#"
              className="border px-3 py-1.5 transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              Github
            </a>
            <a
              href="#"
              className="border px-3 py-1.5 transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      <section
        id="intro"
        className="flex min-h-screen items-center border-b px-4 pt-20 sm:px-8"
      >
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">
            [NAME], a full stack developer
          </h1>
        </div>
      </section>

      <section
        id="projects"
        className="flex min-h-screen items-center px-4 py-24 sm:px-8"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4 border-b pb-4">
            <h2 className="text-3xl font-black sm:text-5xl">Projects</h2>
            <p className="text-sm font-medium text-muted-foreground">
              Selected work
            </p>
          </div>

          <div className="divide-y border-y">
            {projects.map((project) => (
              <ProjectColumnDropdown key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
