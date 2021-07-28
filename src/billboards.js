import { render } from "@testing-library/react";
import React from "react";

import { Entity, BillboardGraphics, LabelGraphics } from "resium";
import logo from "./logo.svg";

export default function Billboard(props) {
  return (
    <Entity key={props.uid} name={props.uid} position={props.position}>
      <LabelGraphics text={props.uid} />
      <BillboardGraphics image={logo} />
    </Entity>
  );
}
