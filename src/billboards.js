import React from "react";
import { Entity, BillboardGraphics, LabelGraphics } from "resium";

import logo from "./logo.svg";

export default function Billboards(props) {
  return props.items.map((e) => (
    <Entity key={e.uid} name={e.uid} position={e.position}>
      <LabelGraphics text={e.uid} />
      <BillboardGraphics image={logo} />
    </Entity>
  ));
}
