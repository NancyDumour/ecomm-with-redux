import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import prodStore from "./redux/product-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={prodStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);
