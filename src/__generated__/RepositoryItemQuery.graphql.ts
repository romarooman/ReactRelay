/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type RepositoryVisibility = "INTERNAL" | "PRIVATE" | "PUBLIC" | "%future added value";
export type RepositoryItemQueryVariables = {
    login: string;
};
export type RepositoryItemQueryResponse = {
    readonly user: {
        readonly repositories: {
            readonly nodes: ReadonlyArray<{
                readonly id: string;
                readonly name: string;
                readonly description: string | null;
                readonly updatedAt: unknown;
                readonly forkCount: number;
                readonly stargazerCount: number;
                readonly visibility: RepositoryVisibility;
                readonly primaryLanguage: {
                    readonly name: string;
                    readonly color: string | null;
                } | null;
                readonly issues: {
                    readonly totalCount: number;
                };
                readonly licenseInfo: {
                    readonly name: string;
                } | null;
                readonly repositoryTopics: {
                    readonly totalCount: number;
                    readonly nodes: ReadonlyArray<{
                        readonly topic: {
                            readonly id: string;
                            readonly name: string;
                        };
                    } | null> | null;
                };
            } | null> | null;
        };
    } | null;
};
export type RepositoryItemQuery = {
    readonly response: RepositoryItemQueryResponse;
    readonly variables: RepositoryItemQueryVariables;
};



/*
query RepositoryItemQuery(
  $login: String!
) {
  user(login: $login) {
    repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
      nodes {
        id
        name
        description
        updatedAt
        forkCount
        stargazerCount
        visibility
        primaryLanguage {
          name
          color
          id
        }
        issues(first: 1, labels: "help wanted") {
          totalCount
        }
        licenseInfo {
          name
          id
        }
        repositoryTopics(first: 10) {
          totalCount
          nodes {
            topic {
              id
              name
            }
            id
          }
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
v2 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v3 = [
  (v2/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "UPDATED_AT"
    }
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
  "name": "updatedAt",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "forkCount",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stargazerCount",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "visibility",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "first",
      "value": 1
    },
    {
      "kind": "Literal",
      "name": "labels",
      "value": "help wanted"
    }
  ],
  "concreteType": "IssueConnection",
  "kind": "LinkedField",
  "name": "issues",
  "plural": false,
  "selections": [
    (v12/*: any*/)
  ],
  "storageKey": "issues(first:1,labels:\"help wanted\")"
},
v14 = [
  (v2/*: any*/)
],
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "Topic",
  "kind": "LinkedField",
  "name": "topic",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    (v5/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryItemQuery",
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
            "args": (v3/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Language",
                    "kind": "LinkedField",
                    "name": "primaryLanguage",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v13/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "License",
                    "kind": "LinkedField",
                    "name": "licenseInfo",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v14/*: any*/),
                    "concreteType": "RepositoryTopicConnection",
                    "kind": "LinkedField",
                    "name": "repositoryTopics",
                    "plural": false,
                    "selections": [
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "RepositoryTopic",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v15/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "repositoryTopics(first:10)"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:10,orderBy:{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"})"
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
    "name": "RepositoryItemQuery",
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
            "args": (v3/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Language",
                    "kind": "LinkedField",
                    "name": "primaryLanguage",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v11/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v13/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "License",
                    "kind": "LinkedField",
                    "name": "licenseInfo",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": (v14/*: any*/),
                    "concreteType": "RepositoryTopicConnection",
                    "kind": "LinkedField",
                    "name": "repositoryTopics",
                    "plural": false,
                    "selections": [
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "RepositoryTopic",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v15/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "repositoryTopics(first:10)"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:10,orderBy:{\"direction\":\"DESC\",\"field\":\"UPDATED_AT\"})"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4beb9811a9949ee584fde2c269380b67",
    "id": null,
    "metadata": {},
    "name": "RepositoryItemQuery",
    "operationKind": "query",
    "text": "query RepositoryItemQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {\n      nodes {\n        id\n        name\n        description\n        updatedAt\n        forkCount\n        stargazerCount\n        visibility\n        primaryLanguage {\n          name\n          color\n          id\n        }\n        issues(first: 1, labels: \"help wanted\") {\n          totalCount\n        }\n        licenseInfo {\n          name\n          id\n        }\n        repositoryTopics(first: 10) {\n          totalCount\n          nodes {\n            topic {\n              id\n              name\n            }\n            id\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c3b970e23bfdcb05ac5aa75d238957d1';
export default node;
