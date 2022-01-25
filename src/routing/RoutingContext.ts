import React from "react";

import { RouterContext } from "./createRouter";

const RoutingContext = React.createContext<RouterContext | null>(null);

export default RoutingContext;
