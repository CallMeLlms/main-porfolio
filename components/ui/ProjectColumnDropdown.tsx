"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { DM_Mono, Newsreader, Mea_Culpa } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = DM_Mono({ subsets: ["latin"], weight: "400" });
const fontSerif = Newsreader({ subsets: ["latin"] });
const fontScript = Mea_Culpa({ subsets: ["latin"], weight: "400" });


type ProjectColumnDropdownProps = {
  title: string;
  status: string;
  description: string;
  screenshots: {
    src: string;
    alt: string;
  }[];
  href?: string;
};

export default function ProjectColumnDropdown({
  title,
  status,
  description,
  screenshots,
  href,
}: ProjectColumnDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <article>
      <button
        type="button"
        data-cursor-interactive
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
        className="group flex min-h-18 w-full items-center justify-between gap-4 px-0 py-5 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <span className="flex min-w-0 flex-col gap-1">
          <span className={`${fontSans.className} truncate text-xl sm:text-4xl`}>
            {title}
          </span>
          <span className={`${fontSans.className} text-xs font-bold uppercase tracking-wide text-muted-foreground`}>
            {status}
          </span>
        </span>

        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-5 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        id={contentId}
        className={cn(
          "grid transition-all duration-200 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="grid gap-6 pb-6">
            <div
              className="grid gap-3 sm:grid-cols-3"
              aria-label={`${title} screenshots`}
            >
              {screenshots.map((screenshot) => (
                <div
                  key={`${screenshot.src}-${screenshot.alt}`}
                  className="flex aspect-[12/6] items-center justify-center border bg-card p-6"
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={800}
                    height={500}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <p className={`${fontSans.className} max-w-3xl text-base leading-7 text-muted-foreground`}>
                {description}
              </p>

              {href ? (
                <a
                  href={href}
                  className="inline-flex w-fit items-center gap-2 border px-3 py-2 text-sm font-bold transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  View project
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
