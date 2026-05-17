"use client";

import { useId, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

type ProjectColumnDropdownProps = {
  title: string;
  status: "Ongoing" | "Completed";
  description: string;
  stack: string[];
  href?: string;
};

export default function ProjectColumnDropdown({
  title,
  status,
  description,
  stack,
  href,
}: ProjectColumnDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <article>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
        className="group flex min-h-18 w-full items-center justify-between gap-4 px-0 py-5 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <span className="flex min-w-0 flex-col gap-1">
          <span className="truncate text-xl font-black sm:text-2xl">
            {title}
          </span>
          <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
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
          <div className="grid gap-5 pb-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div className="space-y-4">
              <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                {description}
              </p>

              <ul className="flex flex-wrap gap-2" aria-label={`${title} stack`}>
                {stack.map((item) => (
                  <li
                    key={item}
                    className="border bg-background px-2.5 py-1 text-xs font-bold uppercase tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

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
    </article>
  );
}
