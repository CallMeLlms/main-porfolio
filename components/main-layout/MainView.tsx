import {
  navigationItems,
  portfolioName,
  projects,
} from "@/lib/portfolio-data";
import ProjectColumnDropdown from "../ui/ProjectColumnDropdown";

export default function MainView() {
  return (
    <main className="min-h-screen">
      <nav
        aria-label="Primary"
        className="border-b bg-background/70 px-4 py-3 backdrop-blur-[1px] sm:px-8"
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#intro"
            className="text-sm font-bold uppercase tracking-wide text-foreground"
          >
            {portfolioName}
          </a>

          <div className="flex items-center gap-2 text-sm font-medium">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border px-3 py-1.5 transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="intro"
        className="flex min-h-screen items-center justify-center border-b px-4 py-20 sm:px-8"
      >
        <div className="w-full">
          <h1 className="text-center text-5xl font-black leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl">
            [NAME], a full stack developer
          </h1>
        </div>
      </section>

      <section
        id="projects"
        className="flex min-h-screen items-center px-4 py-24 sm:px-8"
      >
        <div className="w-full">
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
