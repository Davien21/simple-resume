import React, { useState } from "react";
import RightArrowImage from "./icons/rightArrow";
import NavLink from "./navLink";
import Link from "next/link";

function ContactButton(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Link href="/contact" passHref>
      <a
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="col-lg-4 contact-btn "
      >
        <div className="">
          <span className="title col-auto pl-0">Contact Me</span>
          <RightArrowImage className="col-auto" isHovering={isHovering} />
        </div>
      </a>
    </Link>
  );
}

export default ContactButton;
