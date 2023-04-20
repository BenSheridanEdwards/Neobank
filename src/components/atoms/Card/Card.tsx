import React from "react";

export interface CardProps {
  children: React.ReactNode;
  additionalClassName?: string;
}

export function Card({ children, additionalClassName }: CardProps) {
  return (
    <div className={`rounded-lg bg-cardBackground p-4 ${additionalClassName}`}>
      {children}
    </div>
  );
}
