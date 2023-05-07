/* eslint-disable react/button-has-type */
import React, { ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  additionalClassName?: string;
  children: ReactNode;
  fullWidth?: boolean;
  leadingIcon?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "icon";
  type?: "button" | "submit" | "reset";
}

export function Button({
  additionalClassName = "",
  children,
  fullWidth,
  leadingIcon,
  onClick,
  variant,
  type = "button",
  ...rest
}: ButtonProps) {
  const buttonClassName = clsx({
    "rounded-xl py-4 px-8 md:px-12 capitalize text-md ": true,
    "bg-gradient text-black hover:bg-gradientHover":
      variant === "primary" || !variant,
    "border-2 border-[#7DE7EB]": variant === "secondary",
    "w-full sm:w-fit": !fullWidth,
    "w-full": fullWidth,
  });

  return (
    <button
      className={`${buttonClassName} ${additionalClassName}`}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {!!leadingIcon && (
        <span className="peer flex items-center justify-center">
          {leadingIcon}
        </span>
      )}
      {!!children && (
        <span className="font-semibold peer-[]:ml-2">{children}</span>
      )}
    </button>
  );
}
