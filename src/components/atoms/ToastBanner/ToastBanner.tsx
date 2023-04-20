import React from "react";

export interface ToastBannerProps {
  children: React.ReactNode;
  additionalClassName?: string;
}

export function ToastBanner({
  children,
  additionalClassName,
}: ToastBannerProps) {
  return (
    <div
      className={`flex h-12 w-full max-w-max items-center rounded-md bg-white p-3 text-xs font-semibold ${additionalClassName}`}
    >
      {children}
    </div>
  );
}
