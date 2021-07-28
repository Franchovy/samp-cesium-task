import { render } from "@testing-library/react";
import React from "react";
import { Entity, BillboardGraphics, LabelGraphics } from "resium";

import logo from "./logo.svg";



export default class Billboards extends React.Component {

  // Static instance is used to access the class from anywhere.
  // This is likely not best practice in js/React
  static instance;

  constructor(props) {
    super(props)

    this.state = {
      items: props.items
    };

    // Set static instance
    Billboards.instance = this;
    console.log(Billboards.instance);
  }

  containsUniqueID(name) {
    // if (this.state.items) // hasKey name
    // return true
    return true;
  }

  render() {
    return this.state.items.map((e) => (
      <Entity key={e.uid} name={e.uid} position={e.position}>
        <LabelGraphics text={e.uid} />
        <BillboardGraphics image={logo} />
      </Entity>
    ));
  }
}
