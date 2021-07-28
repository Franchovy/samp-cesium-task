import { useState } from "react";
import Billboards from "./billboards";
import CreateBillboardButton from "./createBillboardButton";
import { Cartesian3 } from "cesium";

export default function BillboardContainer(props) {
  const [billboards, setBillboards] = useState([]);

  if (billboards.length === 0) {
    const position1 = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
    const position2 = Cartesian3.fromDegrees(74.0707383, 40.7117244, 100);
    const position3 = Cartesian3.fromDegrees(-74.0707383, -40.7117244, 100);
    const position4 = Cartesian3.fromDegrees(74.0707383, -40.7117244, 100);

    const testItems = [
      { uid: "test1", position: position1 },
      { uid: "test2", position: position2 },
      { uid: "test3", position: position3 },
      { uid: "test4", position: position4 },
    ];

    billboards.push(...testItems);
  }

  // add billboard function
  function addBillboard(result) {
    setBillboards([
      ...billboards,
      {
        uid: result.uid,
        city: result.city,
        position: Cartesian3.fromDegrees(result.coords.longitude, result.coords.latitude, 1),
      },
    ]);
  }

  return (
    <div>
      <CreateBillboardButton onButtonPressed={addBillboard} />
      <Billboards items={billboards} />
    </div>
  );
}
