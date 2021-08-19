/* eslint-disable @next/next/no-img-element */
import React from "react";
import { githubIcon } from "../../images";

function GithubImage(props) {
  return (
    <a href="https://github.com/davien21" target="_blank" rel="noreferrer">
      <div className="social-media-icon">
        <img
          className=""
          src={githubIcon}
          alt="github"
          width={23}
          height={23}
        />
      </div>
    </a>
  );
}

export default GithubImage;
