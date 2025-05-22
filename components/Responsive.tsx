import React from "react";
import { twMerge } from "tailwind-merge";

interface ResponsiveProps<T extends React.ElementType = "div"> {
  component?: T;
  base: React.ReactNode;
  sm?: React.ReactNode;
  md?: React.ReactNode;
  lg?: React.ReactNode;
  xl?: React.ReactNode;
  "2xl"?: React.ReactNode;
}

type ResponsivePropsWithComponent<T extends React.ElementType> = ResponsiveProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ResponsiveProps>;

const Responsive = <T extends React.ElementType = "div">({
  component,
  base,
  sm,
  md,
  lg,
  xl,
  "2xl": xl2,
  className,
  ...props
}: ResponsivePropsWithComponent<T>) => {
  const Component = (component || "div") as React.ElementType;

  const breakpoints = [
    { content: base, prefix: "" },
    { content: sm, prefix: "sm:" },
    { content: md, prefix: "md:" },
    { content: lg, prefix: "lg:" },
    { content: xl, prefix: "xl:" },
    { content: xl2, prefix: "2xl:" },
  ].filter((bp) => !!bp.content);

  return (
    <>
      {breakpoints.map(({ content, prefix }, i) => {
        const nextPrefix = breakpoints[i + 1]?.prefix || "";
        const breakPointClassNames =
          i === 0 ? `block ${nextPrefix}hidden` : `hidden ${prefix}block ${nextPrefix}hidden`;

        return (
          <Component
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            {...(props as any)}
            key={i}
            className={twMerge(className, breakPointClassNames.trim())}>
            {content}
          </Component>
        );
      })}
    </>
  );
};

export default Responsive;
