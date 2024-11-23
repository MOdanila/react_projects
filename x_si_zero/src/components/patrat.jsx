import React from "react";
import { useState } from "react";
import "./patrat.css";

export function Patrat(props) {
  return (
    <div className="patrat" onClick={props.onClick}>
      {props.value}
    </div>
  );
}
