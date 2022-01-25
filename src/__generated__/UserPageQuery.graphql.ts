/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserPageQueryVariables = {
    login: string;
};
export type UserPageQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"UserProfile_user" | "TabsComponent_user">;
    } | null;
};
export type UserPageQuery = {
    readonly response: UserPageQueryResponse;
    readonly variables: UserPageQueryVariables;
};



/*
query UserPageQuery(
  $login: String!
) {
  user(login: $login) {
    ...UserProfile_user
    ...TabsComponent_user
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

fragment TabsComponent_user on User {
  repositories {
    totalCount
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

fragment UserProfile_user on User {
  ...Achievements_user
  ...Organizations_user
  ...UserInfoFragment_user
  ...SponsorsFragment_user
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = [
  (v4/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "location",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserPageQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserProfile_user"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TabsComponent_user"
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
    "name": "UserPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
              (v4/*: any*/),
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
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositoriesContributedTo(first:10)"
          },
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
              (v4/*: any*/),
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
                  (v3/*: any*/),
                  (v2/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "OrganizationMemberConnection",
                    "kind": "LinkedField",
                    "name": "membersWithRole",
                    "plural": false,
                    "selections": (v6/*: any*/),
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
                        "selections": (v6/*: any*/),
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
          },
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "FollowerConnection",
            "kind": "LinkedField",
            "name": "followers",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "FollowingConnection",
            "kind": "LinkedField",
            "name": "following",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "company",
            "storageKey": null
          },
          (v9/*: any*/),
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
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "twitterUsername",
            "storageKey": null
          },
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
              (v4/*: any*/),
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
                      (v5/*: any*/),
                      (v3/*: any*/),
                      (v2/*: any*/),
                      (v8/*: any*/),
                      (v7/*: any*/),
                      (v9/*: any*/),
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
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Organization",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v5/*: any*/)
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
                      (v5/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "sponsors(first:14)"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8d01461a0bf3065f7ebd2ea2102da5ef",
    "id": null,
    "metadata": {},
    "name": "UserPageQuery",
    "operationKind": "query",
    "text": "query UserPageQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    ...UserProfile_user\n    ...TabsComponent_user\n    id\n  }\n}\n\nfragment Achievements_user on User {\n  name\n  avatarUrl\n  repositoriesContributedTo(first: 10) {\n    totalCount\n    nodes {\n      nameWithOwner\n      id\n    }\n  }\n}\n\nfragment Organizations_user on User {\n  organizations(first: 4) {\n    totalCount\n    nodes {\n      description\n      avatarUrl\n      name\n      id\n      membersWithRole {\n        totalCount\n      }\n      itemShowcase {\n        items {\n          totalCount\n        }\n      }\n    }\n  }\n}\n\nfragment SponsorsFragment_user on User {\n  sponsors(first: 14) {\n    totalCount\n    nodes {\n      __typename\n      ... on User {\n        id\n        avatarUrl\n        name\n        bio\n        login\n        location\n        isEmployee\n        isDeveloperProgramMember\n        organizations(first: 3) {\n          totalCount\n          nodes {\n            name\n            id\n          }\n        }\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n\nfragment TabsComponent_user on User {\n  repositories {\n    totalCount\n  }\n}\n\nfragment UserInfoFragment_user on User {\n  name\n  login\n  avatarUrl\n  bio\n  followers {\n    totalCount\n  }\n  following {\n    totalCount\n  }\n  company\n  location\n  email\n  websiteUrl\n  starredRepositories {\n    totalCount\n  }\n  twitterUsername\n}\n\nfragment UserProfile_user on User {\n  ...Achievements_user\n  ...Organizations_user\n  ...UserInfoFragment_user\n  ...SponsorsFragment_user\n}\n"
  }
};
})();
(node as any).hash = '53ed04bf08dc2582c93716348bbe318c';
export default node;
