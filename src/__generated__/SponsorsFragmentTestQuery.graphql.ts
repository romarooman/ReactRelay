/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SponsorsFragmentTestQueryVariables = {};
export type SponsorsFragmentTestQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"SponsorsFragment_user">;
    } | null;
};
export type SponsorsFragmentTestQuery = {
    readonly response: SponsorsFragmentTestQueryResponse;
    readonly variables: SponsorsFragmentTestQueryVariables;
};



/*
query SponsorsFragmentTestQuery {
  user: node(id: "test-id") {
    __typename
    ...SponsorsFragment_user
    id
  }
}

fragment SponsorsFragment_user on User {
  sponsors(first: 14) {
    totalCount
    nodes {
      __typename
      ... on User {
        id
        avatarUrl
        name
        bio
        login
        location
        isEmployee
        isDeveloperProgramMember
        organizations(first: 3) {
          totalCount
          nodes {
            name
            id
          }
        }
      }
      ... on Node {
        __isNode: __typename
        id
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
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v6 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v7 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v8 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
},
v9 = {
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
    "name": "SponsorsFragmentTestQuery",
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
            "name": "SponsorsFragment_user"
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
    "name": "SponsorsFragmentTestQuery",
    "selections": [
      {
        "alias": "user",
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 14
                  }
                ],
                "concreteType": "SponsorConnection",
                "kind": "LinkedField",
                "name": "sponsors",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "avatarUrl",
                            "storageKey": null
                          },
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "bio",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "login",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "location",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isEmployee",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isDeveloperProgramMember",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 3
                              }
                            ],
                            "concreteType": "OrganizationConnection",
                            "kind": "LinkedField",
                            "name": "organizations",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Organization",
                                "kind": "LinkedField",
                                "name": "nodes",
                                "plural": true,
                                "selections": [
                                  (v4/*: any*/),
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "organizations(first:3)"
                          }
                        ],
                        "type": "User",
                        "abstractKey": null
                      },
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v2/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "sponsors(first:14)"
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
    "cacheID": "3782df040c31ee4bf27826e65e2f3364",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "user": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Node"
        },
        "user.__typename": (v5/*: any*/),
        "user.id": (v6/*: any*/),
        "user.sponsors": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "SponsorConnection"
        },
        "user.sponsors.nodes": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Sponsor"
        },
        "user.sponsors.nodes.__isNode": (v5/*: any*/),
        "user.sponsors.nodes.__typename": (v5/*: any*/),
        "user.sponsors.nodes.avatarUrl": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "URI"
        },
        "user.sponsors.nodes.bio": (v7/*: any*/),
        "user.sponsors.nodes.id": (v6/*: any*/),
        "user.sponsors.nodes.isDeveloperProgramMember": (v8/*: any*/),
        "user.sponsors.nodes.isEmployee": (v8/*: any*/),
        "user.sponsors.nodes.location": (v7/*: any*/),
        "user.sponsors.nodes.login": (v5/*: any*/),
        "user.sponsors.nodes.name": (v7/*: any*/),
        "user.sponsors.nodes.organizations": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "OrganizationConnection"
        },
        "user.sponsors.nodes.organizations.nodes": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "Organization"
        },
        "user.sponsors.nodes.organizations.nodes.id": (v6/*: any*/),
        "user.sponsors.nodes.organizations.nodes.name": (v7/*: any*/),
        "user.sponsors.nodes.organizations.totalCount": (v9/*: any*/),
        "user.sponsors.totalCount": (v9/*: any*/)
      }
    },
    "name": "SponsorsFragmentTestQuery",
    "operationKind": "query",
    "text": "query SponsorsFragmentTestQuery {\n  user: node(id: \"test-id\") {\n    __typename\n    ...SponsorsFragment_user\n    id\n  }\n}\n\nfragment SponsorsFragment_user on User {\n  sponsors(first: 14) {\n    totalCount\n    nodes {\n      __typename\n      ... on User {\n        id\n        avatarUrl\n        name\n        bio\n        login\n        location\n        isEmployee\n        isDeveloperProgramMember\n        organizations(first: 3) {\n          totalCount\n          nodes {\n            name\n            id\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dbf7cac0f2146a546f0e580bd9bb6a76';
export default node;
