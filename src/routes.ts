import { loadQuery } from "react-relay";

import { JSResource } from "./JSResource";
import RelayEnvironment from "./RelayEnvironment";

const routes = [
  {
    component: JSResource("App", () => import("./App")),
    prepare: () => {},
    routes: [
      {
        path: "/:user",
        exact: true,
        component: JSResource("UserPage", () => import("./pages/user-page")),
        prepare: (params: { user: string }) => {
          const UserPageComponentQuery = require("./__generated__/UserPageQuery.graphql");
          return {
            queryRef: loadQuery(
              RelayEnvironment,
              UserPageComponentQuery,
              {
                login: params.user,
              },
              { fetchPolicy: "store-or-network" },
            ),
          };
        },
      },
    ],
  },
];

export default routes;
