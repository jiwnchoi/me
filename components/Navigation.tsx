"use client";

import { type Section } from "@/data";
import { useEffect, useState } from "react";

export default function Navigation({ sections }: { sections: Section[] }) {
  const mains = sections.filter((section) => section.type === "main");
  const pages = sections.filter((section) => section.type === "page");

  const [activated, setActivated] = useState<string>(mains[0]?.key ?? "");

  useEffect(() => {
    const sectionElements = mains
      .map((section) => document.getElementById(section.key))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          const topId = visible[0].target.id;
          setActivated(topId);
        }
      },
      { threshold: 1.0 },
    );
    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [mains]);

  return (
    <div className="w-full">
      <ul className="menu flex w-full flex-col">
        {mains.map((section) => (
          <li key={section.key} className="menu-item rounded-2xl">
            <button
              className={activated === section.key ? "menu-active" : ""}
              onClick={() => {
                const element = document.getElementById(section.key);
                if (element) {
                  console.log("scrolling to", section.key);
                  window.scrollTo({
                    top: element.offsetTop - 10,
                    behavior: "smooth",
                  });
                }
              }}>
              {section.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="divider my-0" />
      <ul className="menu flex w-full flex-col">
        {pages.map((section) => (
          <li key={section.key} className="menu-item rounded-2xl">
            <a href={`/${section.key}`} className={activated === section.key ? "menu-active" : ""}>
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
