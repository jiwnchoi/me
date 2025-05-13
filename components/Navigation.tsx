"use client";
import { type Section } from "@/data";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import Responsive from "./Responsive";

function useVisibleSections(sections: Section[]) {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>(
    Object.fromEntries(sections.filter((s) => s.type === "main").map((s) => [s.key, false])),
  );

  useEffect(() => {
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

    sections.forEach((section) => {
      const element = document.getElementById(section.key);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.key);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [sections]);
  return visibleSections;
}

export default function Navigation({ sections }: { sections: Section[] }) {
  console.log("Navigation Rendered");
  const router = useRouter();
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");
  const visibleSections = useVisibleSections(sections);

  const activated = useMemo(() => {
    if (pathname === "/") {
      return hash || "about";
    } else {
      return pathname.slice(1); // Remove leading '/'
    }
  }, [pathname, hash]);

  const mainSectionElements = useRef<HTMLElement[]>([]);
  const isProgrammaticScroll = useRef(false);
  const programmaticScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll Change Effect
  useEffect(() => {
    if (isProgrammaticScroll.current) return;
    const firstVisibleKey = mainSectionElements.current.find(
      (el) => el && visibleSections[el.id],
    )?.id;
    if (firstVisibleKey && activated !== firstVisibleKey) {
      setHash(firstVisibleKey);
    }
  }, [visibleSections, sections, activated]);

  const handleMainSectionClick = (sectionKey: string) => {
    if (programmaticScrollTimeoutRef.current) clearTimeout(programmaticScrollTimeoutRef.current);
    isProgrammaticScroll.current = true;

    setHash(sectionKey);
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
      isProgrammaticScroll.current = false;
    }, 500);
  };

  return (
    <div className="not-prose flex w-full md:flex-col">
      <ul className="menu flex w-full flex-row flex-nowrap justify-between gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:flex-col [&::-webkit-scrollbar]:hidden">
        {sections
          .filter((s) => s.type === "main")
          .map((section) => (
            <li key={section.key} className="menu-item flex-shrink-0">
              <Responsive<typeof Link>
                component={Link}
                base={section.shortTitle}
                href={`/#${section.key}`}
                md={section.title}
                onClick={(e) => {
                  e.preventDefault();
                  handleMainSectionClick(section.key);
                }}
                target="_self"
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
              <Responsive<typeof Link>
                component={Link}
                href={`/${section.key}`}
                target="_self"
                base={section.shortTitle}
                md={section.title}
                prefetch={true}
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
