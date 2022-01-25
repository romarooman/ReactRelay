/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Achievements_user = {
    readonly name: string | null;
    readonly avatarUrl: string;
    readonly repositoriesContributedTo: {
        readonly totalCount: number;
        readonly nodes: ReadonlyArray<{
            readonly nameWithOwner: string;
            readonly id: string;
        } | null> | null;
    };
    readonly " $refType": "Achievements_user";
};
export type Achievements_user$data = Achievements_user;
export type Achievements_user$key = {
    readonly " $data"?: Achievements_user$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Achievements_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Achievements_user",
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
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "repositoriesContributedTo(first:10)"
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '58ce48270d8282f8ecd8f8cc1803e0ad';
export default node;
