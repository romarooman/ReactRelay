import React from "react";
import ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay";

import RelayEnvironment from "./RelayEnvironment";
import "./index.module.scss";
import reportWebVitals from "./reportWebVitals";
import routes from "./routes";
import RouterRenderer from "./routing/RouteRenderer";
import RoutingContext from "./routing/RoutingContext";
import createRouter from "./routing/createRouter";

const router = createRouter(routes);

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <RoutingContext.Provider value={router.context}>
        {/* Render the active route */}
        <RouterRenderer />
      </RoutingContext.Provider>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
