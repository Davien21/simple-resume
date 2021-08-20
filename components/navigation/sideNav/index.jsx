import React, { useState, useEffect } from "react";
import Overlay from "../../overlay";
import MenuToggle from "./menuToggle";
import SideBar from "./navigation";
import useRouteChangeHandler from "./../../../hooks/useRouteChangeHandler";

function SideNav(props) {
  const { routeChanging } = useRouteChangeHandler();
  const [isOpen, setIsOpen] = useState(false);
  const handleSideNavToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [routeChanging]);

  return (
    <>
      <MenuToggle onToggleMenu={handleSideNavToggle} />
      <Overlay className="" isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <SideBar onCloseSideBar={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
}

export default SideNav;
