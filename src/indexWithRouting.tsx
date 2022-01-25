//import './index.css'
import ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay/hooks";

import RelayEnvironment from "./RelayEnvironment";
import routes from "./routes";
import RouterRenderer from "./routing/RouteRenderer";
import RoutingContext from "./routing/RoutingContext";
import createRouter from "./routing/createRouter";

// Uses the custom router setup to define a router instanace that we can pass through context
const router = createRouter(routes);
const container = document.getElementById("root");

ReactDOM.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <RoutingContext.Provider value={router.context}>
      {/* Render the active route */}
      <RouterRenderer />
    </RoutingContext.Provider>
  </RelayEnvironmentProvider>,
  container,
);
