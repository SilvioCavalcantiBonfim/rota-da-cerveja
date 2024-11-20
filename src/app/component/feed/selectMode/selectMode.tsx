'use client';

import React, { useEffect, useState } from "react";
import "./selectMode.css";

interface SelectModeProps {
  onSelected: (state: boolean) => void
}

export const SelectMode: React.FunctionComponent<SelectModeProps> = ({onSelected}: SelectModeProps) => {

  const [mode, setMode] = useState(1);

  useEffect(() => {
    onSelected(mode === 1)
  }, [mode])

  return <div className="select-container" onClick={() => setMode(v => 1 - v)}>
    <div className={`selector ${mode ? "left-0" : "left-1/2"}`}></div>
    <div className="select-title-container">
      <span className={!mode ? "select-title" : "select-title-active"}>Todos os feeds</span>
      <span className={mode ? "select-title" : "select-title-active"}>seguindo</span>
    </div>
  </div>;
}