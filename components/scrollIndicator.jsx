import React from "react";

export default function ScrollIndicator() {
  return (
    <div className="hero__scroll p-4">
      <p className="mr-2">Scroll down</p>
      <div className="c-infinite">
        <span className="c-link">
          <span className="c-link__inner">
            <span>
              <svg
                width="20"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z"
                  fill="#777"
                ></path>
              </svg>
            </span>
            <span className="c-link__animated">
              <svg
                width="20"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z"
                  fill="#777"
                ></path>
              </svg>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}
