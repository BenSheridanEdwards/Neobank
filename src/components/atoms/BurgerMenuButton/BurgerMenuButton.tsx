import React from "react";
import clsx from "clsx";
import styles from "./BurgerMenuButton.module.scss";

interface BurgerMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function BurgerMenuButton({ isOpen, onClick }: BurgerMenuButtonProps) {
  const burgerMenuDynamicClassnames = clsx({
    [styles.isOpen]: isOpen,
    [styles.isClosed]: isOpen === false,
  });

  return (
    <button
      className={burgerMenuDynamicClassnames}
      onClick={onClick}
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
      type="button"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.line1}
          d="M6 11C6 10.1716 6.67157 9.5 7.5 9.5H32.5C33.3284 9.5 34 10.1716 34 11V11C34 11.8284 33.3284 12.5 32.5 12.5H7.5C6.67157 12.5 6 11.8284 6 11V11Z"
          fill="#CCD6F6"
        />
        <path
          className={styles.line2}
          d="M10 20C10 19.1716 10.6716 18.5 11.5 18.5H32.5C33.3284 18.5 34 19.1716 34 20V20C34 20.8284 33.3284 21.5 32.5 21.5H11.5C10.6716 21.5 10 20.8284 10 20V20Z"
          fill="#CCD6F6"
        />
        <path
          className={styles.line3}
          d="M14 29C14 28.1716 14.6716 27.5 15.5 27.5H32.5C33.3284 27.5 34 28.1716 34 29V29C34 29.8284 33.3284 30.5 32.5 30.5H15.5C14.6716 30.5 14 29.8284 14 29V29Z"
          fill="#CCD6F6"
        />
        <path
          className={styles.line4}
          d="M6 29C6 28.1716 6.67157 27.5 7.5 27.5H32.5C33.3284 27.5 34 28.1716 34 29V29C34 29.8284 33.3284 30.5 32.5 30.5H7.5C6.67157 30.5 6 29.8284 6 29V29Z"
          fill="transparent"
        />
      </svg>
    </button>
  );
}
