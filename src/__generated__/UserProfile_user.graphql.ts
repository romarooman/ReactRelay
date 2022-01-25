/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type UserProfile_user = {
    readonly " $fragmentRefs": FragmentRefs<"Achievements_user" | "Organizations_user" | "UserInfoFragment_user" | "SponsorsFragment_user">;
    readonly " $refType": "UserProfile_user";
};
export type UserProfile_user$data = UserProfile_user;
export type UserProfile_user$key = {
    readonly " $data"?: UserProfile_user$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"UserProfile_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserProfile_user",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Achievements_user"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Organizations_user"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UserInfoFragment_user"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SponsorsFragment_user"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'b9b898302dac27332501cadb6541d8c5';
export default node;
