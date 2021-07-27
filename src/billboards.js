import React from 'react';
import {Cartesian3} from 'cesium';
import {Entity, BillboardGraphics, LabelGraphics} from 'resium';

import logo from './logo.svg';



export default class Billboards extends React.Component {
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
           key={e.uid}
           name={e.uid}
           position={e.position}
           >
            <LabelGraphics
            text={e.uid}
            />
            <BillboardGraphics
                image={logo}
            />
        </Entity>);
        
   } 
}