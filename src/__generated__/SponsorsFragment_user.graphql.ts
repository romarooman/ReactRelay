/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SponsorsFragment_user = {
    readonly sponsors: {
        readonly totalCount: number;
        readonly nodes: ReadonlyArray<{
            readonly id?: string | undefined;
            readonly avatarUrl?: string | undefined;
            readonly name?: string | null | undefined;
            readonly bio?: string | null | undefined;
            readonly login?: string | undefined;
            readonly location?: string | null | undefined;
            readonly isEmployee?: boolean | undefined;
            readonly isDeveloperProgramMember?: boolean | undefined;
            readonly organizations?: {
                readonly totalCount: number;
                readonly nodes: ReadonlyArray<{
                    readonly name: string | null;
                } | null> | null;
            } | undefined;
        } | null> | null;
    };
    readonly " $refType": "SponsorsFragment_user";
};
export type SponsorsFragment_user$data = SponsorsFragment_user;
export type SponsorsFragment_user$key = {
    readonly " $data"?: SponsorsFragment_user$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SponsorsFragment_user">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SponsorsFragment_user",
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            {
              "kind": "InlineFragment",
              "selections": [
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
                  "kind": "ScalarField",
                  "name": "avatarUrl",
                  "storageKey": null
                },
                (v1/*: any*/),
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
                    (v0/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Organization",
                      "kind": "LinkedField",
                      "name": "nodes",
                      "plural": true,
                      "selections": [
                        (v1/*: any*/)
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": "organizations(first:3)"
                }
              ],
              "type": "User",
              "abstractKey": null
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
};
})();
(node as any).hash = 'a57fc0eb07ad8c7ed48c7ba45c9a9299';
export default node;
