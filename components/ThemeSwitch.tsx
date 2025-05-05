"use client";

import { Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useTheme } from "next-themes";
import { useMounted } from "nextra/hooks";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeSwitch({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    themeChange(false);
  }, []);

  const IconToUse = mounted && isDark ? Moon02Icon : Sun01Icon;

  return (
    <button
      className={className}
      aria-label="Toggle Dark Mode"
      data-toggle-theme="dark,light"
      onClick={() => setTheme(isDark ? "light" : "dark")}>
      <HugeiconsIcon icon={IconToUse} size={12} />
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
