import { useState } from "react";
import Billboards from "./billboards";
import CreateBillboardButton from "./createBillboardButton";

export default function BillboardContainer(props) {
    const [billboards, setBillboards] = useState([]);

    
// API

// get billboards function

// add billboard function
function addBillboard(cityName, uid) {
    console.log(`Adding billboard with details: city: ${cityName}, uid: ${uid}`);
    setBillboards([...billboards, {uid: cityName, position: (0, 0, 0)}]);
  }

    return <div>
        <CreateBillboardButton addBillboard={addBillboard}/>
        <Billboards/>
    </div>
}