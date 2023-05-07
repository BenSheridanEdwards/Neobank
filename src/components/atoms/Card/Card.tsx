import React from "react";
import clsx from "clsx";

export interface CardProps {
  children: React.ReactNode;
  additionalClassName?: string;
  size?: "small" | "medium" | "large";
}

export function Card({ children, additionalClassName, size }: CardProps) {
  const dynamicClassName = clsx({
    "rounded-xl bg-cardBackground": true,
    "p-4": size === "small",
    "p-8": size === "medium" || !size,
    "p-12": size === "large",
  });
  return (
    <article className={`${dynamicClassName} ${additionalClassName}`}>
      {children}
    </article>
  );
}
