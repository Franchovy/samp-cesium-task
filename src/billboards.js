import React from 'react';
import {Cartesian3} from 'cesium';
import {Entity, BillboardGraphics, LabelGraphics} from 'resium';

import logo from './logo.svg';




export default class Billboards extends React.Component {
static pointData = {
    color: {
      alpha: 1,
      blue: 0,
      green: 1,
      red: 1
    },
    pixelSize: 15
  };

    constructor(props) {
        super(props);

        // Define entity object data

        const position1 = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
        const position2 = Cartesian3.fromDegrees(74.0707383, 40.7117244, 100);
        const position3 = Cartesian3.fromDegrees(-74.0707383, -40.7117244, 100);
        const position4 = Cartesian3.fromDegrees(74.0707383, -40.7117244, 100);

        const testItems = [
        {uid: "test1", position: position1},
        {uid: "test2", position: position2},
        {uid: "test3", position: position3},
        {uid: "test4", position: position4},
        ];
          
        this.state = {
            items: [...testItems, ...props.items ?? []]
        };
    }

   render() {
       return this.state.items.map(
           e => <Entity
           name={e.uid}
           point={Billboards.pointData}
           show={true}
           position={e.position}>
            <LabelGraphics
            text={e.uid}
            />
            <BillboardGraphics
                
                image={logo}
                scale={1.0}
                
                show={true}
            />
        </Entity>);
        
   } 
}