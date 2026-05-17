import {
  navigationItems,
  portfolioName,
  projects,
} from "@/lib/portfolio-data";
import ProjectColumnDropdown from "../ui/ProjectColumnDropdown";
import { Inter, Newsreader, Mea_Culpa } from "next/font/google";


const fontSans = Inter({ subsets: ["latin"] });
const fontSerif = Newsreader({ subsets: ["latin"] });
const fontScript = Mea_Culpa({ subsets: ["latin"], weight: "400" });

export default function MainView() {
  return (
    <main className="min-h-screen">
      <nav
        aria-label="Primary"
        className="border-b bg-background/70 px-4 py-3 backdrop-blur-[1px] sm:px-8"
      >
        <div className="flex items-center justify-between gap-4">
          <a
            className={`${fontSerif.className} text-sm font-bold uppercase tracking-wide text-foreground`}
          >
            {portfolioName}
          </a>

          <div className={`${fontSerif.className} flex items-center gap-2 text-sm font-medium`}>
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5"
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
        <div className="w-full flex flex-col items-center gap-4">
          <div className="flex items-end">
            <h1 className={`${fontScript.className} text-center text-5xl font-black leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl`}>
              J
            </h1>
            <h1 className={`${fontSerif.className} text-center text-5xl leading-[0.95] tracking-normal sm:text-7xl lg:text-5xl`}>
              ustine
            </h1>
            <h1 className={`${fontScript.className} text-center text-5xl font-black leading-[0.95] tracking-normal sm:text-7xl lg:text-8xl`}>
              L
            </h1>
            <h1 className={`${fontSerif.className} text-center text-5xl leading-[0.95] tracking-normal sm:text-7xl lg:text-5xl`}>
              lamera
            </h1>
          </div>
             <div className="flex items-end">
            <h1 className={`${fontSerif.className} text-center text-5xl leading-[0.95] tracking-normal sm:text-7xl lg:text-4xl`}>
              Full Stack Developer
            </h1>
          </div>
        </div>
  
      </section>

      <section
        id="projects"
        className="flex min-h-screen items-center px-4 py-24 sm:px-8"
      >
        <div className="w-full">
          <div className="mb-8 flex items-end justify-between gap-4 border-b pb-4">
            <div className="flex items-end">

            <h2 className={`${fontScript.className} text-3xl font-black sm:text-8xl`}>P</h2>
            <h2 className={`${fontSerif.className} text-2xl sm:text-6xl`}>rojects</h2>

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
