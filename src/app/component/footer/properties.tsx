import React from "react";
import "./properties.css";

export type Property = {
  icon: string;
  title: string;
  description: string;
}

export const Properties: React.FunctionComponent<Property> = (props: Property) => {
  return <div className="properties-wrapper">
    <img src={props.icon} />
    <div className="properties-info">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  </div>
}