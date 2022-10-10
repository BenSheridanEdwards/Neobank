import * as React from "react";
import "../../../styles/global.css";
import NavBar from "../../header/NavBar/NavBar";
import LayoutMaxWidthContainer from "../layout_max_width_container/layout_max_width_container";

export interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutMaxWidthContainer>
      <header>
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </LayoutMaxWidthContainer>
  );
}

Layout.defaultProps = {
  children: null,
};

export default Layout;
