/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AchievementsTestQueryVariables = {};
export type AchievementsTestQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"Achievements_user">;
    } | null;
};
export type AchievementsTestQuery = {
    readonly response: AchievementsTestQueryResponse;
    readonly variables: AchievementsTestQueryVariables;
};



/*
query AchievementsTestQuery {
  user: node(id: "test-id") {
    __typename
    ...Achievements_user
    id
  }
}

fragment Achievements_user on User {
  name
  avatarUrl
  repositoriesContributedTo(first: 10) {
    totalCount
    nodes {
      nameWithOwner
      id
    }
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
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AchievementsTestQuery",
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
            "name": "Achievements_user"
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
    "name": "AchievementsTestQuery",
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
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "avatarUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10
                  }
                ],
                "concreteType": "RepositoryConnection",
                "kind": "LinkedField",
                "name": "repositoriesContributedTo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "nameWithOwner",
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "repositoriesContributedTo(first:10)"
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
    "cacheID": "ba58d5d7c45c9fca4e1a6e180ec9c93f",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "user": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Node"
        },
        "user.__typename": (v2/*: any*/),
        "user.avatarUrl": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "URI"
        },
        "user.id": (v3/*: any*/),
        "user.name": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "user.repositoriesContributedTo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "RepositoryConnection"
        },
        "user.repositoriesContributedTo.nodes": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Repository"
        },
        "user.repositoriesContributedTo.nodes.id": (v3/*: any*/),
        "user.repositoriesContributedTo.nodes.nameWithOwner": (v2/*: any*/),
        "user.repositoriesContributedTo.totalCount": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        }
      }
    },
    "name": "AchievementsTestQuery",
    "operationKind": "query",
    "text": "query AchievementsTestQuery {\n  user: node(id: \"test-id\") {\n    __typename\n    ...Achievements_user\n    id\n  }\n}\n\nfragment Achievements_user on User {\n  name\n  avatarUrl\n  repositoriesContributedTo(first: 10) {\n    totalCount\n    nodes {\n      nameWithOwner\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '30a54b33cd5d37a8ce7e39cda6d6c162';
export default node;
