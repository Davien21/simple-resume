import React from "react";
import ExternalLink from "./ExternalLink";
import RightUpImage from "./icons/rightUp";
import NavLink from "./navLink";

function Menu(props) {
  return (
    <nav className="mt-4">
      <ul>
        <NavLink href="/">About</NavLink>

        {/* <NavLink href="/work">Work</NavLink> */}

        <NavLink href="/experience">Experience</NavLink>

        <NavLink href="/contact">Contact</NavLink>

        <li>
          <ExternalLink
            href="https://drive.google.com/file/d/1S0myL39LNDFXdpuZQLh1GNNeBN4hx3hK/view?usp=sharing"
            className="article-title"
          >
            <span className="pr-3">Resume</span>

            <RightUpImage />
          </ExternalLink>
        </li>

        <li>
          <ExternalLink
            href="https://docs.google.com/document/d/1mOgn7CP1zsRRNLGc2eRUn_b_cvmVIi1FAbnlrVT9Pns/edit?usp=sharing"
            className="article-title"
          >
            <span className="pr-3">Catalog</span>

            <RightUpImage />
          </ExternalLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
