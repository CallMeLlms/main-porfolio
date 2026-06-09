"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { DM_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = DM_Mono({ subsets: ["latin"], weight: "400" });

type ProjectColumnDropdownProps = {
  title: string;
  year: string;
  status: string;
  description: string;
  href?: string;
};

export default function ProjectColumnDropdown({
  title,
  status,
  year,
  description,
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
        className="group flex min-h-18 w-full items-start justify-between gap-4 px-0 py-2 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:items-center"
      >
        <span className="flex min-w-0 flex-col gap-1">
          <span
            className={`${fontSans.className} text-xl leading-tight sm:text-2xl xl:text-1xl`}
          >
            {title}
          </span>
          <span className={`${fontSans.className} text-xs font-bold uppercase tracking-wide text-muted-foreground`}>
            {status}
          </span>
          <span className={`${fontSans.className} text-xs font-bold uppercase tracking-wide text-muted-foreground`}>
            {year}
          </span>
        </span>

        <ChevronDown
          aria-hidden="true"
          className={cn(
            "mt-1 size-5 shrink-0 transition-transform duration-200 sm:mt-0",
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
          <div className="grid gap-5 pb-6 sm:gap-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <p className={`${fontSans.className} w-full text-sm leading-7 text-muted-foreground sm:text-xl xl:text-[18px]`}>
                {description}
              </p>
            </div>

              {href ? (
                <a
                  href={href}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 border px-3 py-2 text-sm font-bold transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:w-fit"
                >
                  View project
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              ) : null}

          </div>
        </div>
      </div>
    </article>
  );
}
