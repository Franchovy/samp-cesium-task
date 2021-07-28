import React from "react";

import { Viewer } from "resium";

import Billboard from "./billboard";
import CreateBillboardButton from "./createBillboardButton";
import { Cartesian3 } from "cesium";

/**
 * (Main) Component class containing Resium Viewer, Create Billboard button,
 * and Billboard children components
 *
 * @props - none
 *
 * @property state.billboardData contains data representing all billboards
 * currently in the viewer.
 *
 * @method checkNameUnique checks name against all current billboards from
 * billboardData for uniqueness. Returns true if name is not found.
 *
 * @method addBillboard takes in object with data
 * {
 *  uid,
 *  city,
 *  coords:
 *      {
 *      latitude,
 *      longitude
 *      },
 *  error:
 *      {
 *      message,
 *      code
 *      }
 * }
 * which is then transformed into billboard data object representing the creation
 * of a new billboard component.
 *
 * @return <BillboardMaker>
 *    <div>
 *      <Viewer>
 *          <div>
 *              <CreateBillboardButton/>
 *          </div>
 *          state.billboardData.map -> <Billboard/>
 *      </Viewer>
 *  </div>
 */
export default class BillboardMaker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      billboardData: this.demoBillboards(),
    };
  }

  demoBillboards() {
    const posKrakow = Cartesian3.fromDegrees(19.944981, 50.064651, 1);
    const posTokyo = Cartesian3.fromDegrees(139.691711, 35.689487, 1);
    const posChennai = Cartesian3.fromDegrees(80.270721, 13.082680, 1);
    const posTorino = Cartesian3.fromDegrees(7.686864, 45.070339, 1);

    return [
      {
        uid: "Krakow",
        city: "krakow",
        position: posKrakow,
        creationDate: new Date(),
      },
      {
        uid: "Tokyo",
        city: "Tokyo",
        position: posTokyo,
        creationDate: new Date(),
      },
      {
        uid: "Chennai",
        city: "Chennai",
        position: posChennai,
        creationDate: new Date(),
      },
      {
        uid: "Torino",
        city: "Torino",
        position: posTorino,
        creationDate: new Date(),
      },
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
          position: Cartesian3.fromDegrees(
            result.coords.longitude,
            result.coords.latitude,
            1
          ),
          creationDate: new Date(),
        },
      ],
    });
  };

  checkNameUnique = (name) => {
    console.log(`Unique name check: ${name}`);
    var result =
      this.state.billboardData.filter((e) => e.uid === name).length === 0;
    console.log(result);
    return result;
  };

  render() {
    return (
      <div>
        <Viewer homeButton={false}>
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <CreateBillboardButton
              onButtonPressed={this.addBillboard}
              checkNameUnique={this.checkNameUnique}
            />
          </div>
          {this.state.billboardData.map((e) => (
            <Billboard {...e} showCityLabel={true} />
          ))}
        </Viewer>
      </div>
    );
  }
}
