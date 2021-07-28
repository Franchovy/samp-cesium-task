import React from "react";
import BillboardMaker from "./billboardMaker";
import Cesium from 'cesium';

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMmJkMTYyMS0wOGJlLTRmNWUtOTk2Ny00OTVmODVhMTAzMDEiLCJpZCI6NjI2MjYsImlhdCI6MTYyNzMwNTU5OH0.s-HIL4Yept3UTh713lk_eGcom58I3Z3P6x1dhnsUpzQ';

const App = () => {
  return <BillboardMaker />;
};

export default App;
