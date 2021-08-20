import React from "react";

function ExternalLink({ children, ...rest }) {
  return (
    <a {...rest} target="_blank" rel="noreferrer">
      {children}
    </a>
    
  );
}

export default ExternalLink;
