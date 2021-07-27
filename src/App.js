import React from "react";

import { Viewer } from "resium";
import Billboards from "./billboards";
import CreateBillboardForm from "./createBillboardForm"


const App = () => {
  const viewer = React.useRef(null);
  return (
    <div>
      <CreateBillboardForm/>
      <Viewer ref={viewer} homeButton={false}>
        <Billboards/>
      </Viewer>
    </div>
  );
      
};


export default App;