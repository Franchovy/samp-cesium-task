import React from "react";

import { Cartesian3 } from "cesium";
import { Viewer } from "resium";
import Billboards from "./billboards";


const App = () => (
  <Viewer full>
    <Billboards items={[{uid: "test5", position: Cartesian3.fromDegrees(30, 30, 100)}]}/>
    
  </Viewer>
);


export default App;