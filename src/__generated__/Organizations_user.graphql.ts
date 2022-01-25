/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Organizations_user = {
    readonly organizations: {
        readonly totalCount: number;
        readonly nodes: ReadonlyArray<{
            readonly description: string | null;
            readonly avatarUrl: string;
            readonly name: string | null;
            readonly id: string;
            readonly membersWithRole: {
                readonly totalCount: number;
            };
            readonly itemShowcase: {
                readonly items: {
                    readonly totalCount: number;
                };
            };
        } | null> | null;
    };
    readonly " $refType": "Organizations_user";
};
export type Organizations_user$data = Organizations_user;
export type Organizations_user$key = {
    readonly " $data"?: Organizations_user$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Organizations_user">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Organizations_user",
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
        (v0/*: any*/),
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "OrganizationMemberConnection",
              "kind": "LinkedField",
              "name": "membersWithRole",
              "plural": false,
              "selections": (v1/*: any*/),
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
                  "selections": (v1/*: any*/),
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
};
})();
(node as any).hash = 'e2d05603c4aadf876ff71c51422396ec';
export default node;
