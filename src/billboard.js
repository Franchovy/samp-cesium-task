import { Color } from "cesium";
import Cartesian2 from "cesium/Source/Core/Cartesian2";
import NearFarScalar from "cesium/Source/Core/NearFarScalar";
import VerticalOrigin from "cesium/Source/Scene/VerticalOrigin";
import React from "react";

import { Entity, BillboardGraphics, LabelGraphics } from "resium";
import logo from "./location.svg";

const fadeScalar = new NearFarScalar(7000000.0, 1.0, 30000000.0, 0.2);

export default function Billboard(props) {
  var labelText = props.uid;

  if (props.showCityLabel)
    labelText = labelText.concat(` | ${props.city}`);

  return (
    <Entity key={props.uid} name={props.uid} position={props.position}>
      <LabelGraphics 
        text={labelText} 
        pixelOffset={Cartesian2.fromElements(0, -45)}
        fillColor={Color.fromCssColorString("#EDEDED")}
        translucencyByDistance={fadeScalar}
        font={"Mishafi"}
      />
      <BillboardGraphics 
        image={logo} 
        pixelOffset={Cartesian2.fromElements(0, 0)}
        verticalOrigin={VerticalOrigin.BOTTOM}
        translucencyByDistance={fadeScalar}
        height={30}
        width={30}
      />
    </Entity>
  );
}
