"use client";

import { type Section } from "@/data";
import { Link } from "next-view-transitions";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation({ sections }: { sections: Section[] }) {
  const pathname = usePathname();
  const router = useRouter();

  const [activated, setActivated] = useState<string>(
    pathname === "/" ? "" : pathname.split("/")[0].slice(1),
  );

  console.log(pathname, pathname.split("/")[0].slice(1));

  useEffect(() => {
    if (pathname !== "/") return;
    const mainSectionElements = sections
      .filter((s) => s.type === "main")
      .map((s) => document.getElementById(s.key))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const topVisibleEntry = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (topVisibleEntry) setActivated(topVisibleEntry.target.id);
      },
      { threshold: 1.0 },
    );
    mainSectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname, sections]);

  const handleMainSectionClick = (sectionKey: string) => {
    setActivated(sectionKey);
    if (pathname === "/") {
      const element = document.getElementById(sectionKey);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 10, behavior: "smooth" });
        router.replace(`/#${sectionKey}`, { scroll: false });
      }
    } else {
      router.push(`/#${sectionKey}`);
    }
  };

  return (
    <div className="w-full">
      <ul className="menu flex w-full flex-col">
        {sections
          .filter((s) => s.type === "main")
          .map((section) => (
            <li key={section.key} className="menu-item rounded-2xl">
              <button
                className={activated === section.key ? "menu-active" : ""}
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
            <li key={section.key} className="menu-item rounded-2xl">
              <Link
                href={`/${section.key}`}
                className={activated === section.key ? "menu-active" : ""}>
                {section.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
