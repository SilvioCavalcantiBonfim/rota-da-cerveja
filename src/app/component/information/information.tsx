import React from "react";
import "./information.css";

export type Info = {
  title: string;
  itens: string[];
}

export const Information: React.FunctionComponent<Info> = (props : Info) => {
  return <section className="information">
    <h2 className="subtitle">{props.title}</h2>
    <ul>
      {props.itens.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </section>
}