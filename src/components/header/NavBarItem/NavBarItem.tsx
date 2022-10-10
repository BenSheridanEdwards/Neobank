import React, { MouseEventHandler } from "react";
import clsx from "clsx";
import * as styles from "./NavBarItem.css";

interface NavBarItemProps {
  title: string;
  linkUrl: string;
  currentRouteSubdirectory: string;
  routeChangeCallback: MouseEventHandler<HTMLAnchorElement>;
}

function NavBarItem({
  title,
  linkUrl,
  currentRouteSubdirectory,
  routeChangeCallback,
}: NavBarItemProps) {
  const navItemClassName = clsx(styles.navItem, {
    [styles.navItemActive]: currentRouteSubdirectory === linkUrl,
  });

  return (
    <li key={title} className={navItemClassName}>
      <a href={linkUrl} onClick={routeChangeCallback}>
        {title}
      </a>
    </li>
  );
}

export default NavBarItem;
