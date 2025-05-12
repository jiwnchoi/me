"use client";

import { type Section } from "@/data";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Responsive from "./Responsive";

const getActiveKeyFromUrl = (pathname: string, sections: Section[]): string => {
  const isClient = typeof window !== "undefined";
  const hash = isClient ? window.location.hash.substring(1) : "";

  if (pathname === "/") {
    const sectionFromHash = sections.find((s) => s.type === "main" && s.key === hash);
    if (sectionFromHash) {
      return sectionFromHash.key;
    }
    return sections.find((s) => s.type === "main")?.key || "";
  } else {
    return pathname.slice(1); // Remove leading '/'
  }
};

export default function Navigation({ sections }: { sections: Section[] }) {
  const pathname = usePathname();
  const router = useRouter();

  const initialVisibleSections = Object.fromEntries(
    sections.filter((s) => s.type === "main").map((s) => [s.key, false]),
  );

  const [visibleSections, setVisibleSections] =
    useState<Record<string, boolean>>(initialVisibleSections);
  const [activated, setActivated] = useState<string>(getActiveKeyFromUrl(pathname, sections));

  const mainSectionElements = useRef<HTMLElement[]>([]);
  const isProgrammaticScrollRef = useRef(false);
  const programmaticScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    mainSectionElements.current = sections
      .filter((s) => s.type === "main")
      .map((s) => document.getElementById(s.key))
      .filter((el): el is HTMLElement => !!el);
  }, [pathname, sections]);

  useEffect(() => {
    if (!mainSectionElements.current.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSections((prev) => {
          const newVisible = { ...prev };
          let changed = false;
          entries.forEach((entry) => {
            const sectionKey = entry.target.id;
            if (
              prev.hasOwnProperty(sectionKey) &&
              newVisible[sectionKey] !== entry.isIntersecting
            ) {
              newVisible[sectionKey] = entry.isIntersecting;
              changed = true;
            }
          });
          return changed ? newVisible : prev;
        });
      },
      { threshold: 0.1, root: null, rootMargin: "0px 0px -40% 0px" },
    );

    mainSectionElements.current.forEach((el) => el && observer.observe(el));
    return () => {
      mainSectionElements.current.forEach((el) => el && observer.unobserve(el));
      observer.disconnect();
    };
  }, [sections]);

  useEffect(() => {
    if (isProgrammaticScrollRef.current || pathname !== "/") return;
    const firstVisibleKey = mainSectionElements.current.find(
      (el) => el && visibleSections[el.id],
    )?.id;
    if (firstVisibleKey && activated !== firstVisibleKey) {
      setActivated(firstVisibleKey);
    }
  }, [visibleSections, pathname, sections, activated]);

  const handleMainSectionClick = (sectionKey: string) => {
    setActivated(sectionKey);
    if (programmaticScrollTimeoutRef.current) clearTimeout(programmaticScrollTimeoutRef.current);
    isProgrammaticScrollRef.current = true;

    if (pathname === "/") {
      if (sectionKey === "about") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        router.replace("/", { scroll: false });
      } else {
        const element = document.getElementById(sectionKey);
        if (element) {
          const isMd = window.matchMedia("(min-width: 768px)").matches;
          window.scrollTo({
            top: element.offsetTop - (isMd ? 20 : 120),
            behavior: "smooth",
          });
          router.replace(`/#${sectionKey}`, { scroll: false });
        }
      }
    } else {
      router.push(`/#${sectionKey}`);
    }
    programmaticScrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 500);
  };

  return (
    <div className="not-prose flex w-full md:flex-col">
      <ul className="menu flex w-full flex-row flex-nowrap justify-between gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:flex-col [&::-webkit-scrollbar]:hidden">
        {sections
          .filter((s) => s.type === "main")
          .map((section) => (
            <li key={section.key} className="menu-item flex-shrink-0">
              <Responsive
                component="a"
                base={section.shortTitle}
                md={section.title}
                onClick={() => handleMainSectionClick(section.key)}
                className={clsx(
                  "w-[64px] rounded-lg text-center text-xs md:w-full md:text-start md:text-base",
                  activated === section.key ? "me-highlight font-bold" : "",
                )}
              />
            </li>
          ))}
        {/* <li className="menu-item flex-shrink-0">
          <button
            className="me-highlight block w-[64px] rounded-lg text-center text-xs font-bold md:hidden md:w-full md:text-start md:text-base"
            base="About"
            md="About">
            About
          </button>
          <button
            className="me-highlight hidden w-[64px] rounded-lg text-center text-xs font-bold md:block md:w-full md:text-start md:text-base"
            base="About"
            md="About">
            About
          </button>
        </li> */}
        <div className="divider divider-horizontal md:divider-vertical divider-primary mx-1 flex-shrink-0" />
        {sections
          .filter((s) => s.type === "page")
          .map((section) => (
            <li key={section.key} className="menu-item flex-shrink-0">
              <Responsive
                component={Link}
                onClick={() => setActivated(section.key)}
                href={`/${section.key}`}
                target="_self"
                base={section.shortTitle}
                md={section.title}
                className={clsx(
                  "w-[64px] rounded-lg text-center text-xs md:w-full md:text-start md:text-base",
                  activated === section.key ? "me-highlight font-bold" : "",
                )}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
