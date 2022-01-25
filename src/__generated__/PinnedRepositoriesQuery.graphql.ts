/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type RepositoryVisibility = "INTERNAL" | "PRIVATE" | "PUBLIC" | "%future added value";
export type PinnedRepositoriesQueryVariables = {
    login: string;
};
export type PinnedRepositoriesQueryResponse = {
    readonly user: {
        readonly pinnedItems: {
            readonly nodes: ReadonlyArray<{
                readonly id?: string | undefined;
                readonly nameWithOwner?: string | undefined;
                readonly forkCount?: number | undefined;
                readonly description?: string | null | undefined;
                readonly stargazerCount?: number | undefined;
                readonly visibility?: RepositoryVisibility | undefined;
                readonly primaryLanguage?: {
                    readonly name: string;
                    readonly color: string | null;
                } | null | undefined;
            } | null> | null;
        };
    } | null;
};
export type PinnedRepositoriesQuery = {
    readonly response: PinnedRepositoriesQueryResponse;
    readonly variables: PinnedRepositoriesQueryVariables;
};



/*
query PinnedRepositoriesQuery(
  $login: String!
) {
  user(login: $login) {
    pinnedItems(first: 6) {
      nodes {
        __typename
        ... on Repository {
          id
          nameWithOwner
          forkCount
          description
          stargazerCount
          visibility
          primaryLanguage {
            name
            color
            id
          }
        }
        ... on Node {
          __isNode: __typename
          id
        }
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 6
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameWithOwner",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "forkCount",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stargazerCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "visibility",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PinnedRepositoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "PinnableItemConnection",
            "kind": "LinkedField",
            "name": "pinnedItems",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Language",
                        "kind": "LinkedField",
                        "name": "primaryLanguage",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/),
                          (v10/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Repository",
                    "abstractKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "pinnedItems(first:6)"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PinnedRepositoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "PinnableItemConnection",
            "kind": "LinkedField",
            "name": "pinnedItems",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Language",
                        "kind": "LinkedField",
                        "name": "primaryLanguage",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/),
                          (v10/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "type": "Repository",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v3/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "pinnedItems(first:6)"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "08ee8c1531fec87cf131fd3e2940fbd6",
    "id": null,
    "metadata": {},
    "name": "PinnedRepositoriesQuery",
    "operationKind": "query",
    "text": "query PinnedRepositoriesQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    pinnedItems(first: 6) {\n      nodes {\n        __typename\n        ... on Repository {\n          id\n          nameWithOwner\n          forkCount\n          description\n          stargazerCount\n          visibility\n          primaryLanguage {\n            name\n            color\n            id\n          }\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '8c7c42972ebb64890495eae534dddd7c';
export default node;
