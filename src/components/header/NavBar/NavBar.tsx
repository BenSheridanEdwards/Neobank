import React, { MouseEvent, useCallback, useState } from "react";
import Box from "../../layout/box/box";
import NeoBankLogo from "../../../assets/NeobankLogo.svg";
import * as styles from "./NavBar.css";
import NavBarItem from "../NavBarItem/NavBarItem";

function NavBar() {
  const [currentRouteSubDirectory, setCurrentRouteSubdirectory] = useState(
    window?.location.hash
  );

  const handleRouteChange = useCallback((event: MouseEvent) => {
    const { hash } = event.target as HTMLAnchorElement;
    setCurrentRouteSubdirectory(hash);
  }, []);

  return (
    <Box
      as="nav"
      marginTop="spacing3"
      display="flex"
      justifyContent="space-between"
    >
      <a href="/" onClick={handleRouteChange}>
        <img src={NeoBankLogo} alt="Neobank logo" />
      </a>
      <Box as="ul" className={styles.navItemList}>
        <NavBarItem
          title="About"
          linkUrl="#about"
          currentRouteSubdirectory={currentRouteSubDirectory}
          routeChangeCallback={handleRouteChange}
        />
        <NavBarItem
          title="Features"
          linkUrl="#features"
          currentRouteSubdirectory={currentRouteSubDirectory}
          routeChangeCallback={handleRouteChange}
        />
        <NavBarItem
          title="Solution"
          linkUrl="#solution"
          currentRouteSubdirectory={currentRouteSubDirectory}
          routeChangeCallback={handleRouteChange}
        />
        <NavBarItem
          title="Contact"
          linkUrl="#contact"
          currentRouteSubdirectory={currentRouteSubDirectory}
          routeChangeCallback={handleRouteChange}
        />
      </Box>
    </Box>
  );
}

export default NavBar;
