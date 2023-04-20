import React from "react";

interface BannerProps {
  children: React.ReactNode;
}

export function Banner({ children }: BannerProps) {
  return (
    <article
      className="flex w-full max-w-[440px] items-center rounded-lg py-2 px-6"
      style={{
        background: "linear-gradient(125.17deg, #272727 0%, #11101D 100%)",
      }}
    >
      {children}
    </article>
  );
}
