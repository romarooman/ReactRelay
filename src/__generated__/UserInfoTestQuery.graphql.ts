/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserInfoTestQueryVariables = {};
export type UserInfoTestQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"UserInfoFragment_user">;
    } | null;
};
export type UserInfoTestQuery = {
    readonly response: UserInfoTestQueryResponse;
    readonly variables: UserInfoTestQueryVariables;
};



/*
query UserInfoTestQuery {
  user: node(id: "test-id") {
    __typename
    ...UserInfoFragment_user
    id
  }
}

fragment UserInfoFragment_user on User {
  name
  login
  avatarUrl
  bio
  followers {
    totalCount
  }
  following {
    totalCount
  }
  company
  location
  email
  websiteUrl
  starredRepositories {
    totalCount
  }
  twitterUsername
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
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v3 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v4 = {
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
    "name": "UserInfoTestQuery",
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
            "name": "UserInfoFragment_user"
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
    "name": "UserInfoTestQuery",
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
                "kind": "ScalarField",
                "name": "name",
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
                "name": "avatarUrl",
                "storageKey": null
              },
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
                "concreteType": "FollowerConnection",
                "kind": "LinkedField",
                "name": "followers",
                "plural": false,
                "selections": (v1/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FollowingConnection",
                "kind": "LinkedField",
                "name": "following",
                "plural": false,
                "selections": (v1/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "company",
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
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "websiteUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "StarredRepositoryConnection",
                "kind": "LinkedField",
                "name": "starredRepositories",
                "plural": false,
                "selections": (v1/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "twitterUsername",
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
    "cacheID": "74e91001dc0e7c4c5a268ef0351c95a2",
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
        "user.bio": (v3/*: any*/),
        "user.company": (v3/*: any*/),
        "user.email": (v2/*: any*/),
        "user.followers": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "FollowerConnection"
        },
        "user.followers.totalCount": (v4/*: any*/),
        "user.following": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "FollowingConnection"
        },
        "user.following.totalCount": (v4/*: any*/),
        "user.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "user.location": (v3/*: any*/),
        "user.login": (v2/*: any*/),
        "user.name": (v3/*: any*/),
        "user.starredRepositories": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "StarredRepositoryConnection"
        },
        "user.starredRepositories.totalCount": (v4/*: any*/),
        "user.twitterUsername": (v3/*: any*/),
        "user.websiteUrl": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "URI"
        }
      }
    },
    "name": "UserInfoTestQuery",
    "operationKind": "query",
    "text": "query UserInfoTestQuery {\n  user: node(id: \"test-id\") {\n    __typename\n    ...UserInfoFragment_user\n    id\n  }\n}\n\nfragment UserInfoFragment_user on User {\n  name\n  login\n  avatarUrl\n  bio\n  followers {\n    totalCount\n  }\n  following {\n    totalCount\n  }\n  company\n  location\n  email\n  websiteUrl\n  starredRepositories {\n    totalCount\n  }\n  twitterUsername\n}\n"
  }
};
})();
(node as any).hash = 'add7b61762006b66a27fb5820a5f4f1b';
export default node;
