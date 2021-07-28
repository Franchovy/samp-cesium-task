import React from "react";

import { Viewer } from "resium";
import BillboardContainer from "./billboardContainer";

const App = () => {
  const viewer = React.useRef(null);
  return (
    <div>
      <Viewer ref={viewer} homeButton={false}>
      <div style={{ position:"absolute", top: 0, left: 0 }}><button onClick={() => console.log("aaaa")}>Click me</button></div>
        <BillboardContainer />
      </Viewer>
    </div>
  );
};

export default App;
