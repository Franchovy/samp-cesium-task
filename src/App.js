import React from "react";

import { Viewer } from "resium";
import BillboardContainer from "./billboardContainer";

const App = () => {
  const viewer = React.useRef(null);
  return (
    <div>
      <Viewer ref={viewer} homeButton={false}>
        <BillboardContainer />
      </Viewer>
    </div>
  );
};

export default App;
