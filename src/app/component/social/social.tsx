import React from "react";
import "./social.css";
type SocialProp = {
  path: string;
  href?: string;
}

export const Social: React.FunctionComponent<SocialProp> = (props: SocialProp) => {
  return (<a className="social-link">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="social-svg">
      <path d={props.path}></path>
    </svg>
  </a>);
}