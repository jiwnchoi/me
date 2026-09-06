"use client";
import type { Section } from "@/data";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Responsive from "./Responsive";

export default function Navigation({ sections }: { sections: Section[] }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("about");
  useEffect(() => {
    if (pathname !== "/") return;
    const elements = sections
      .filter((section) => section.type === "main")
      .map((section) => document.getElementById(section.key))
      .filter((element): element is HTMLElement => Boolean(element));
    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = window.matchMedia("(min-width: 768px)").matches ? 48 : 160;
      let current = "about";
      for (const element of elements) {
        if (element.getBoundingClientRect().top <= offset) current = element.id;
      }
      setActiveSection(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname, sections]);
  const active = pathname === "/" ? activeSection : pathname.split("/")[1];
  return (
    <nav aria-label="Main navigation" className="not-prose flex w-full md:flex-col">
      <ul className="menu flex w-full flex-row flex-nowrap justify-between gap-1 overflow-x-auto md:flex-col">
        {sections.map((section) => (
          <li key={section.key} className="shrink-0">
            <Responsive
              component={Link}
              base={section.shortTitle}
              md={section.title}
              href={
                section.type === "page"
                  ? `/${section.key}`
                  : section.key === "about"
                    ? "/"
                    : `/#${section.key}`
              }
              aria-current={
                active === section.key ? (section.type === "main" ? "location" : "page") : undefined
              }
              className={clsx(
                "min-h-11 min-w-16 rounded-lg text-center text-sm md:w-full md:text-start md:text-base",
                active === section.key && "me-highlight font-bold",
              )}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
