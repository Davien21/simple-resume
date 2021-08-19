import React from "react";
import SideNav from "./navigation/sideNav/index";

function Header() {
  return (
    <header className="d-lg-none position-relative">
      <SideNav />
    </header>
  );
}

export default Header;
