import React, { type ComponentProps, type ElementType, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// Define the specific breakpoints supported
type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";

type ResponsiveSpecificProps = Partial<Record<Breakpoint, ReactNode>> & {
  component?: ElementType; // Use ElementType for flexibility
  className?: string;
};

type ResponsiveProps<T extends ElementType> = ResponsiveSpecificProps &
  Omit<ComponentProps<T>, keyof ResponsiveSpecificProps | "children">;

// Map breakpoints to their Tailwind prefixes
const prefixes: Record<Breakpoint, string> = {
  base: "",
  sm: "sm:",
  md: "md:",
  lg: "lg:",
  xl: "xl:",
  "2xl": "2xl:",
};

const getDisplayClass = (bp: Breakpoint, isActive: boolean): string => {
  const prefix = prefixes[bp];
  return isActive ? `${prefix}block` : `${prefix}hidden`;
};

export default function Responsive<T extends ElementType = "div">({
  component: Component = "div",
  className,
  base,
  sm,
  md,
  lg,
  xl,
  "2xl": xxl, // Use a valid variable name for '2xl' key
  // Capture the rest of the props to pass down
  ...restProps
}: ResponsiveProps<T>): React.ReactElement | null {
  const breakpointContent: Partial<Record<Breakpoint, ReactNode>> = {
    base,
    sm,
    md,
    lg,
    xl,
    "2xl": xxl,
  };

  const definedEntries = (Object.entries(breakpointContent) as [Breakpoint, ReactNode][]).filter(
    ([, node]) => node !== undefined,
  );

  if (definedEntries.length === 0) {
    return null;
  }

  return (
    <>
      {definedEntries.map(([currentBp, node]) => {
        const visibilityClasses = definedEntries
          .map(([bp]) => getDisplayClass(bp, bp === currentBp))
          .join(" ");

        return (
          <Component
            key={currentBp}
            className={twMerge(visibilityClasses, className)}
            {...restProps}>
            {node}
          </Component>
        );
      })}
    </>
  );
}
