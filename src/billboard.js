import React from "react";
import { Color } from "cesium";
import Cartesian2 from "cesium/Source/Core/Cartesian2";
import NearFarScalar from "cesium/Source/Core/NearFarScalar";
import VerticalOrigin from "cesium/Source/Scene/VerticalOrigin";
import {
  Entity,
  BillboardGraphics,
  LabelGraphics,
  EntityDescription,
} from "resium";

import dateStringFormatter from "./utilities/dateStringFormatter";
import logo from "./location.svg";

const fadeScalar = new NearFarScalar(7000000.0, 1.0, 30000000.0, 0.2);

/**
 * Component for rendering resium Billboard inside a Viewer.
 * Rendered through *Entity* Component containing *EntityDescription*,
 * *BillboardGraphics* (location marker icon), *LabelGraphics* (name + ?city)
 * 
 * @props
 * *uid* - unique name for billboard
 * *city* - name of city where billboard is positioned
 * *creationDate* - JS Date object marking creation datetime
 * *position* - Cesium Cartesian3 object marking location on globe
 * *showCityLabel* - bool indicating whether label should display city 
 * as well as unique name
 * 
 * @return <Entity key=uid name=uid>
 *  <EntityDescription/>
 *  <BillboardGraphics/>
 *  <LabelGraphics/>
 * </Entity>
 */
export default function Billboard(props) {
  var labelText = props.uid;

  if (props.showCityLabel) labelText = labelText.concat(` | ${props.city}`);

  return (
    <Entity key={props.uid} name={props.uid} position={props.position}>
      <EntityDescription>
        <h2>{`ID: ${props.uid}`}</h2>
        <h3>{`City: ${props.city}`}</h3>
        <p>{`Creation date: ${dateStringFormatter(props.creationDate)}`}</p>
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
