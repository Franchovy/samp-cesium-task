import { Color } from "cesium";
import Cartesian2 from "cesium/Source/Core/Cartesian2";
import NearFarScalar from "cesium/Source/Core/NearFarScalar";
import VerticalOrigin from "cesium/Source/Scene/VerticalOrigin";
import React from "react";

import { Entity, BillboardGraphics, LabelGraphics, EntityDescription } from "resium";
import logo from "./location.svg";

const fadeScalar = new NearFarScalar(7000000.0, 1.0, 30000000.0, 0.2);

/// Datestring formatter from JS Date object to customized string.
function datestring(t) {
  console.log(`input date: ${t}`);
  const date = ('0' + t.getDate()).slice(-2);
  const monthNo = ('0' + (t.getMonth() + 1)).slice(-2);
  const monthStr = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Sept', 'Oct', 'Nov', 'Dec'][monthNo-1];
  const year = t.getFullYear();
  const hours = ('0' + t.getHours()).slice(-2);
  const minutes = ('0' + t.getMinutes()).slice(-2);
  const seconds = ('0' + t.getSeconds()).slice(-2);

  return `${date} ${monthStr} ${year} at ${hours}:${minutes}:${seconds}`;
}

export default function Billboard(props) {
  var labelText = props.uid;

  if (props.showCityLabel)
    labelText = labelText.concat(` | ${props.city}`);

    console.log(`Date object: ${datestring(new Date())}`);

  return (
    <Entity key={props.uid} name={props.uid} position={props.position}>
      <EntityDescription>
      <h2>
        {`ID: ${props.uid}`}
      </h2>
      <h3>
        {`City: ${props.city}`}
      </h3>
      <p>
        {`Creation date: ${datestring(props.creationDate)}`}
      </p>
    </EntityDescription>
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
