/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserInfoFragment_user = {
    readonly name: string | null;
    readonly login: string;
    readonly avatarUrl: string;
    readonly bio: string | null;
    readonly followers: {
        readonly totalCount: number;
    };
    readonly following: {
        readonly totalCount: number;
    };
    readonly company: string | null;
    readonly location: string | null;
    readonly email: string;
    readonly websiteUrl: string | null;
    readonly starredRepositories: {
        readonly totalCount: number;
    };
    readonly twitterUsername: string | null;
    readonly " $refType": "UserInfoFragment_user";
};
export type UserInfoFragment_user$data = UserInfoFragment_user;
export type UserInfoFragment_user$key = {
    readonly " $data"?: UserInfoFragment_user$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserInfoFragment_user">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserInfoFragment_user",
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
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FollowingConnection",
      "kind": "LinkedField",
      "name": "following",
      "plural": false,
      "selections": (v0/*: any*/),
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
      "selections": (v0/*: any*/),
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
};
})();
(node as any).hash = '677040e8420f0fadf359d081e2b09aca';
export default node;
