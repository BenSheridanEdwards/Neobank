import React, { ReactNode } from "react";
import clsx from "clsx";

interface HeadingProps {
  className?: string;
  elementLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode | string;
  visualLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "custom";
}

export function Heading({
  className,

  elementLevel,
  children,
  visualLevel,
}: HeadingProps) {
  const Element = elementLevel || "h1";

  const headingClassName = clsx({
    "text-white": true,
    "text-5xl font-bold leading-snug": visualLevel === "h1",
    "text-4xl font-bold leading-snug": visualLevel === "h2",
    "text-3xl font-bold leading-snug": visualLevel === "h3",
    "text-2xl font-bold leading-snug": visualLevel === "h4",
    "text-xl font-bold leading-snug": visualLevel === "h5",
  });

  return (
    <Element className={`${headingClassName} ${className}`}>{children}</Element>
  );
}
