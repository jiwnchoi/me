import React from "react";
import { twMerge } from "tailwind-merge";

type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

type ResponsiveProps = Partial<Record<Breakpoint, React.ReactNode>> & {
  component?: React.ElementType;
  className?: string;
} & Omit<React.HTMLProps<HTMLElement>, "children" | "className">;

const prefixes: Record<Breakpoint, string> = {
  base: "",
  sm: "sm:",
  md: "md:",
  lg: "lg:",
  xl: "xl:",
  "2xl": "2xl:",
};

export default function Responsive({
  component: Component = "div",
  className,
  ...props
}: ResponsiveProps): React.ReactElement {
  const entries = Object.entries({
    base: props.base,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
    xl: props.xl,
    "2xl": props["2xl"],
  }).filter(([, node]) => node !== undefined) as [Breakpoint, React.ReactNode][];

  return (
    <>
      {entries.map(([bp, node]) => (
        <Component
          key={bp}
          className={twMerge(
            [
              `${prefixes[bp]}block`,
              ...entries.filter(([b]) => b !== bp).map(([b]) => `${prefixes[b]}hidden`),
            ].join(" "),
            className,
          )}
          {...props}>
          {node}
        </Component>
      ))}
    </>
  );
}
