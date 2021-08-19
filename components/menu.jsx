import React from "react";
import NavLink from "./navLink";

function Menu(props) {
  return (
    <nav className="mt-4">
      <ul>
        <NavLink href="/">About</NavLink>

        <NavLink href="/work">Work</NavLink>

        <NavLink href="/experience">Experience</NavLink>

        <NavLink href="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}

export default Menu;
