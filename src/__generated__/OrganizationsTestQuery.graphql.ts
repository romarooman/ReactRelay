/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type OrganizationsTestQueryVariables = {};
export type OrganizationsTestQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"Organizations_user">;
    } | null;
};
export type OrganizationsTestQuery = {
    readonly response: OrganizationsTestQueryResponse;
    readonly variables: OrganizationsTestQueryVariables;
};



/*
query OrganizationsTestQuery {
  user: node(id: "test-id") {
    __typename
    ...Organizations_user
    id
  }
}

fragment Organizations_user on User {
  organizations(first: 4) {
    totalCount
    nodes {
      description
      avatarUrl
      name
      id
      membersWithRole {
        totalCount
      }
      itemShowcase {
        items {
          totalCount
        }
      }
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v6 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Int"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "OrganizationsTestQuery",
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
            "name": "Organizations_user"
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
    "name": "OrganizationsTestQuery",
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
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 4
                  }
                ],
                "concreteType": "OrganizationConnection",
                "kind": "LinkedField",
                "name": "organizations",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "description",
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
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "OrganizationMemberConnection",
                        "kind": "LinkedField",
                        "name": "membersWithRole",
                        "plural": false,
                        "selections": (v3/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ProfileItemShowcase",
                        "kind": "LinkedField",
                        "name": "itemShowcase",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PinnableItemConnection",
                            "kind": "LinkedField",
                            "name": "items",
                            "plural": false,
                            "selections": (v3/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "organizations(first:4)"
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
    "cacheID": "90afae2db207bb5854e616476c69aa83",
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
        "user.id": (v4/*: any*/),
        "user.organizations": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "OrganizationConnection"
        },
        "user.organizations.nodes": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Organization"
        },
        "user.organizations.nodes.avatarUrl": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "URI"
        },
        "user.organizations.nodes.description": (v5/*: any*/),
        "user.organizations.nodes.id": (v4/*: any*/),
        "user.organizations.nodes.itemShowcase": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ProfileItemShowcase"
        },
        "user.organizations.nodes.itemShowcase.items": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PinnableItemConnection"
        },
        "user.organizations.nodes.itemShowcase.items.totalCount": (v6/*: any*/),
        "user.organizations.nodes.membersWithRole": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "OrganizationMemberConnection"
        },
        "user.organizations.nodes.membersWithRole.totalCount": (v6/*: any*/),
        "user.organizations.nodes.name": (v5/*: any*/),
        "user.organizations.totalCount": (v6/*: any*/)
      }
    },
    "name": "OrganizationsTestQuery",
    "operationKind": "query",
    "text": "query OrganizationsTestQuery {\n  user: node(id: \"test-id\") {\n    __typename\n    ...Organizations_user\n    id\n  }\n}\n\nfragment Organizations_user on User {\n  organizations(first: 4) {\n    totalCount\n    nodes {\n      description\n      avatarUrl\n      name\n      id\n      membersWithRole {\n        totalCount\n      }\n      itemShowcase {\n        items {\n          totalCount\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '214478c3419c770e1387ea26cb539730';
export default node;
