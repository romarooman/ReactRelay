/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TabsComponentTestQueryVariables = {};
export type TabsComponentTestQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"TabsComponent_user">;
    } | null;
};
export type TabsComponentTestQuery = {
    readonly response: TabsComponentTestQueryResponse;
    readonly variables: TabsComponentTestQueryVariables;
};



/*
query TabsComponentTestQuery {
  user: node(id: "test-id") {
    __typename
    ...TabsComponent_user
    id
  }
}

fragment TabsComponent_user on User {
  repositories {
    totalCount
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "test-id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TabsComponentTestQuery",
    "selections": [
      {
        "alias": "user",
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TabsComponent_user"
          }
        ],
        "storageKey": "node(id:\"test-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TabsComponentTestQuery",
    "selections": [
      {
        "alias": "user",
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryConnection",
                "kind": "LinkedField",
                "name": "repositories",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"test-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "734f8561ed87e826f9f6263e22fa89ae",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "user": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Node"
        },
        "user.__typename": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "String"
        },
        "user.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "user.repositories": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "RepositoryConnection"
        },
        "user.repositories.totalCount": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        }
      }
    },
    "name": "TabsComponentTestQuery",
    "operationKind": "query",
    "text": "query TabsComponentTestQuery {\n  user: node(id: \"test-id\") {\n    __typename\n    ...TabsComponent_user\n    id\n  }\n}\n\nfragment TabsComponent_user on User {\n  repositories {\n    totalCount\n  }\n}\n"
  }
};
})();
(node as any).hash = '2b67b89987ac8a5ba8e90ae8e0bf4054';
export default node;
