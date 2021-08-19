/* eslint-disable @next/next/no-img-element */
import React from "react";
import { linkedinIcon } from "../../images";

function LinkedinImage(props) {
  return (
    <a
      href="https://www.linkedin.com/in/chidiebere-ekennia-701443142/"
      target="_blank"
      rel="noreferrer"
    >
      <div className="social-media-icon">
        <img
          className=""
          src={linkedinIcon}
          alt="linkedin"
          width={23}
          height={23}
        />
      </div>
    </a>
  );
}

export default LinkedinImage;
