import React from "react";

import { Viewer } from "resium";

import Billboard from "./billboards";
import CreateBillboardButton from "./createBillboardButton";
import { Cartesian3 } from "cesium";


export default class BillboardMaker extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            billboardData: this.testBillboards()
        }
    }

    testBillboards() {
        const position1 = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
        const position2 = Cartesian3.fromDegrees(74.0707383, 40.7117244, 100);
        const position3 = Cartesian3.fromDegrees(-74.0707383, -40.7117244, 100);
        const position4 = Cartesian3.fromDegrees(74.0707383, -40.7117244, 100);

        return [
        { uid: "test1", position: position1 },
        { uid: "test2", position: position2 },
        { uid: "test3", position: position3 },
        { uid: "test4", position: position4 },
        ];
    }

    // Add billboard callback function
  addBillboard = (result) => {
    console.log(`Result: ${JSON.stringify(result)}`);
    
    if (result.error) {
      // Error handling
      alert("Error: " + result.error.message);
      return;
    }


    this.setState({
        billboardData: [
      ...this.state.billboardData,
      {
        uid: result.uid,
        city: result.city,
        position: Cartesian3.fromDegrees(result.coords.longitude, result.coords.latitude, 1),
      },
    ]});
}

checkNameUnique = (name) => {
    console.log(`Unique name check: ${name}`);
    var result = this.state.billboardData.filter(e => e.uid === name).length === 0;
    console.log(result);
    return result;
}

    render() {
        return <div>
        <Viewer homeButton={false}>
                <div style={{ position:"absolute", top: 0, left: 0 }}>
                    <CreateBillboardButton onButtonPressed={this.addBillboard} checkNameUnique={this.checkNameUnique} />
                </div>
                {this.state.billboardData.map((e) => (
                    <Billboard {...e} />
                ))}
            </Viewer>
        </div>
    }
}