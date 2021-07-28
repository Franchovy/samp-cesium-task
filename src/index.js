import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Ion } from 'cesium';

Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMmJkMTYyMS0wOGJlLTRmNWUtOTk2Ny00OTVmODVhMTAzMDEiLCJpZCI6NjI2MjYsImlhdCI6MTYyNzMwNTU5OH0.s-HIL4Yept3UTh713lk_eGcom58I3Z3P6x1dhnsUpzQ';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
