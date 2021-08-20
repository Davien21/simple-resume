import React, { useState } from "react";
import RightArrowImage from "./icons/rightArrow";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ContactButton(props) {
  const isContactPage = useRouter().pathname == "/contact";
  const [isHovering, setIsHovering] = useState(isContactPage);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const hoverEvents = isContactPage ?? {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return (
    <Link href="/contact" passHref>
      <a {...hoverEvents} className="col-lg-4 contact-btn ">
        <div className="">
          <span className="title col-auto pl-0">Contact Me</span>
          <RightArrowImage
            className="col-auto "
            isHovering={isContactPage ?? isHovering}
          />
        </div>
      </a>
    </Link>
  );
}
