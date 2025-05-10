"use client";

import { type Section } from "@/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navigation({ sections }: { sections: Section[] }) {
  const pathname = usePathname();
  const router = useRouter();

  const initialVisibleSections = Object.fromEntries(
    sections.filter((s) => s.type === "main").map((s) => [s.key, false]),
  );

  const [visibleSections, setVisibleSections] =
    useState<Record<string, boolean>>(initialVisibleSections);
  const [activated, setActivated] = useState<string>("");

  const mainSectionElements = useRef<HTMLElement[]>([]);
  const isProgrammaticScrollRef = useRef(false);
  const programmaticScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    setActivated(
      pathname === "/"
        ? sections.find((s) => s.type === "main" && s.key === hash)?.key ||
            sections.find((s) => s.type === "main")?.key ||
            ""
        : pathname.slice(1),
    );

    mainSectionElements.current = sections
      .filter((s) => s.type === "main")
      .map((s) => document.getElementById(s.key))
      .filter((el): el is HTMLElement => !!el);

    if (pathname === "/" && hash && sections.some((s) => s.key === hash && s.type === "main")) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => window.scrollTo({ top: element.offsetTop - 20, behavior: "auto" }), 100);
      }
    }
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
      const element = document.getElementById(sectionKey);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 20, behavior: "smooth" });
        router.replace(`/#${sectionKey}`, { scroll: false });
      }
    } else {
      router.push(`/#${sectionKey}`);
    }
    programmaticScrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 500);
  };

  return (
    <div className="w-full">
      <ul className="menu flex w-full flex-col">
        {sections
          .filter((s) => s.type === "main")
          .map((section) => (
            <li key={section.key}>
              <button
                className={
                  activated === section.key ? "menu-active rounded-lg font-bold" : "rounded-lg"
                }
                onClick={() => handleMainSectionClick(section.key)}>
                {section.title}
              </button>
            </li>
          ))}
      </ul>
      <div className="divider my-0" />
      <ul className="menu flex w-full flex-col">
        {sections
          .filter((s) => s.type === "page")
          .map((section) => (
            <li key={section.key} className="menu-item">
              <Link
                href={`/${section.key}`}
                className={
                  activated === section.key
                    ? "menu-active bg-primary rounded-lg font-bold"
                    : "rounded-lg"
                }>
                {section.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
