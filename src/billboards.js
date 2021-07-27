import React, {useState} from 'react';
import {Cartesian3} from 'cesium';
import {Entity} from 'resium';



export default class Billboards extends React.Component {

    static pointGraphics = { pixelSize: 10 };
    static testPosition = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);

    constructor(props) {
        super(props);

        // Define entity object data

        const position1 = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
        const position2 = Cartesian3.fromDegrees(74.0707383, 40.7117244, 100);
        const position3 = Cartesian3.fromDegrees(-74.0707383, -40.7117244, 100);

        const testItems = [
        {uid: "test1", position: position1},
        ];
          
        this.state = {
            items: testItems
        };
    }

   render() {
       return <Entity position={Billboards.testPosition} point={Billboards.pointGraphics} />;
   } 
}