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
      <section
        id="intro"
        className="flex min-h-screen items-center justify-center px-4 py-20 sm:px-8"
      >
        <div className="flex w-full max-w-6xl flex-col items-center gap-4">
          <h1 className="flex max-w-full flex-row items-center justify-center gap-1 text-center leading-none tracking-normal sm:flex-row sm:items-end sm:gap-0">
            <span className="flex items-end justify-center">
              <span
                className={`${fontScript.className} text-[clamp(3rem,8vw,5rem)] font-black leading-[0.9]`}
              >
                J
              </span>
              <span
                className={`${fontSerif.className}  text-[clamp(1.25rem,2.75vw,2.25rem)] leading-[0.95]`}
              >
                ustine
              </span>
            </span>
            <span className="flex items-end justify-center">
              <span
                className={`${fontScript.className} text-[clamp(3rem,8vw,5rem)] font-black leading-[0.9]`}
              >
                L
              </span>
              <span
                className={`${fontSerif.className}  text-[clamp(1rem,2vw,2rem)] leading-[0.95]`}
              >
                lamera
              </span>
            </span>
          </h1>

          <p
            className={`${fontSerif.className} max-w-full px-2 text-center text-[clamp(1rem,2vw,2.5rem)] leading-[0.95] tracking-normal`}
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
                className={`${fontScript.className} text-[clamp(3rem,1vw,2rem)] font-black leading-none`}
              >
                P
              </h2>
              <h2
                className={`${fontSerif.className} text-[clamp(2rem,1vw,1rem)] leading-none`}
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

      <section id="footer" className="flex px-4 ">
        <div className="flex w-full justify-between text-[clamp(0.1rem,1.5vw,1.2rem)]">

          <span className="flex items-end justify-center">
  
            <span
              className={`${fontSerif.className}`}
            >
              {"[Currently]"}
            </span>
          </span>

          <span className="flex items-end justify-center">
            <span
              className={`${fontSerif.className}`}
            >
              {"[Undergoing]"}
            </span>
          </span>

          <span className="flex items-end justify-center">
            <span
              className={`${fontSerif.className}`}
            >
              {"[Major]"}
            </span>
          </span>

          <span className="flex items-end justify-center">
            <span
              className={`${fontSerif.className}`}
            >
              {"[Changes]"}
            </span>
          </span>

        </div>
      </section>

    </main>
  );
}
