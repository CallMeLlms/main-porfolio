import {
  navigationItems,
  portfolioName,
  projects,
} from "@/lib/portfolio-data";
import ProjectColumnDropdown from "../ui/ProjectColumnDropdown";
import { Newsreader, Mea_Culpa } from "next/font/google";

const fontSerif = Newsreader({ subsets: ["latin"] });
const fontScript = Mea_Culpa({ subsets: ["latin"], weight: "400" });

export default function MainView() {
  return (
    <main className="min-h-screen">
      <nav
        aria-label="Primary"
        className="border-b bg-background/70 px-4 py-3 backdrop-blur-[1px] sm:px-8"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <a
            className={`${fontSerif.className} text-sm font-bold uppercase tracking-wide text-foreground`}
          >
            {portfolioName}
          </a>

          <div
            className={`${fontSerif.className} flex flex-wrap items-center gap-2 text-sm font-medium`}
          >
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="min-h-9 px-3 py-1.5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="intro"
        className="flex min-h-screen items-center justify-center px-4 py-20 sm:px-8"
      >
        <div className="flex w-full max-w-6xl flex-col items-center gap-4">
          <h1 className="flex max-w-full flex-col items-center justify-center gap-1 text-center leading-none tracking-normal sm:flex-row sm:items-end sm:gap-0">
            <span className="flex items-end justify-center">
              <span
                className={`${fontScript.className} text-[clamp(4.25rem,22vw,6rem)] font-black leading-[0.9] sm:text-7xl lg:text-8xl`}
              >
                J
              </span>
              <span
                className={`${fontSerif.className} text-[clamp(2.75rem,14vw,4.5rem)] leading-[0.95] sm:text-7xl lg:text-5xl`}
              >
                ustine
              </span>
            </span>
            <span className="flex items-end justify-center">
              <span
                className={`${fontScript.className} text-[clamp(4.25rem,22vw,6rem)] font-black leading-[0.9] sm:text-7xl lg:text-8xl`}
              >
                L
              </span>
              <span
                className={`${fontSerif.className} text-[clamp(2.75rem,14vw,4.5rem)] leading-[0.95] sm:text-7xl lg:text-5xl`}
              >
                lamera
              </span>
            </span>
          </h1>

          <p
            className={`${fontSerif.className} max-w-full px-2 text-center text-[clamp(2.15rem,11vw,3.75rem)] leading-[0.95] tracking-normal sm:text-7xl lg:text-4xl`}
          >
            Full Stack Developer
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="flex min-h-screen items-center px-4 py-20 sm:px-8 sm:py-24"
      >
        <div className="w-full">
          <div className="mb-8 flex items-end justify-between gap-4 border-b pb-4">
            <div className="flex items-end">
              <h2
                className={`${fontScript.className} text-5xl font-black leading-none sm:text-8xl`}
              >
                P
              </h2>
              <h2
                className={`${fontSerif.className} text-4xl leading-none sm:text-6xl`}
              >
                rojects
              </h2>
            </div>
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
