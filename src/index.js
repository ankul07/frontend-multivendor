import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

// ReactDOM.render(
//   <Provider store={Store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// reportWebVitals();

import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

reportWebVitals();
