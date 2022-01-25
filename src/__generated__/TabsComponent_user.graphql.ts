/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TabsComponent_user = {
    readonly repositories: {
        readonly totalCount: number;
    };
    readonly " $refType": "TabsComponent_user";
};
export type TabsComponent_user$data = TabsComponent_user;
export type TabsComponent_user$key = {
    readonly " $data"?: TabsComponent_user$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TabsComponent_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TabsComponent_user",
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
};
(node as any).hash = 'e1126fd50f8180f3133ffbbcbb68b9b2';
export default node;
