/* eslint-disable @next/next/no-img-element */
import React from "react";
import { twitterIcon } from "../../images";

function TwitterImage(props) {
  return (
    <a href="https://twitter.com/davien21" target="_blank" rel="noreferrer">
      <div className="social-media-icon">
        <img
          className=""
          src={twitterIcon}
          alt="Twitter"
          width={23}
          height={23}
        />
      </div>
    </a>
  );
}

export default TwitterImage;
