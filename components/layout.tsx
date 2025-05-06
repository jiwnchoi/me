import { ThemeSwitch } from "@/components";
import type { FC, ReactNode } from "react";

export const Footer: FC<{
  children: ReactNode;
  className?: string;
}> = ({ className, children }) => {
  return (
    <footer
      className={`${"footer footer-horizontal flex items-center justify-between"} ${className}`}>
      <ThemeSwitch className={"btn btn-ghost btn-xs flex items-center gap-2"} />
      <small data-pagefind-ignore="all">{children}</small>
    </footer>
  );
};
