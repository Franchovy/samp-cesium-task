import React from "react";

import { Viewer, Entity } from "resium";
import { Cartesian3 } from "cesium";
import Billboards from "./billboards";


const App = () => (
  <Viewer full>
    <Billboards/>
    
  </Viewer>
);


export default App;