// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import graphql from "babel-plugin-relay/macro";
// import { Suspense } from "react";
// import { RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay";
// import { OperationDescriptor } from "relay-runtime";
// import {
//   createMockEnvironment,
//   MockPayloadGenerator,
//   RelayMockEnvironment,
// } from "relay-test-utils";

// import {
//   PinnedRepositoriesFragment_user$data,
//   PinnedRepositoriesFragment_user$key,
// } from "../../../__generated__/PinnedRepositoriesFragment_user.graphql";
// import {
//   PinnedRepositoriesTestQuery,
//   PinnedRepositoriesTestQueryResponse,
// } from "../../../__generated__/PinnedRepositoriesTestQuery.graphql";
// import { PinnedRepositories } from "./PinnedRepositories";

// type UserData = Omit<PinnedRepositoriesFragment_user$data, " $refType">;

// function resolveExactMockData(mockEnvironment: RelayMockEnvironment, mockData: UserData) {
//   mockEnvironment.mock.resolveMostRecentOperation((operation: OperationDescriptor) =>
//     MockPayloadGenerator.generate(operation, {
//       Query() {
//         const user: UserData = mockData;
//         return { user };
//       },
//     }),
//   );
// }

// function renderPinnedRepositories(mockEnvironment: RelayMockEnvironment) {
//   const PinnedRepositoriesRenderer = () => {
//     const data = useLazyLoadQuery<PinnedRepositoriesTestQuery>(
//       graphql`
//         query PinnedRepositoriesTestQuery @relay_test_operation {
//           user: node(id: "test-id") {
//             ...PinnedRepositoriesFragment_user
//           }
//         }
//       `,
//       {},
//     );
//     if (data.user === null) {
//       return null;
//     }
//     return <PinnedRepositories user={data.user} />;
//   };

//   return render(
//     <RelayEnvironmentProvider environment={mockEnvironment}>
//       <Suspense fallback="Loading...">
//         <PinnedRepositoriesRenderer />
//       </Suspense>
//     </RelayEnvironmentProvider>,
//   );
// }

// it("render", async () => {
//   const mockEnvironment = createMockEnvironment();
//   renderPinnedRepositories(mockEnvironment);
//   const mockData: UserData = {
//     pinnedItems: {
//       nodes: [
//         {
//           nameWithOwner: "name",
//           forkCount: 1,
//           description: "url",
//           stargazerCount: 2,
//           primaryLanguage: {
//             name: "monica",
//             color: "white",
//           },
//         },
//         {
//           nameWithOwner: "name",
//           forkCount: 3,
//           description: "text",
//           stargazerCount: 4,
//           primaryLanguage: {
//             name: "Roman",
//             color: "black",
//           },
//         },
//       ],
//     },
//   };
//   resolveExactMockData(mockEnvironment, mockData);
//   expect(await screen.findByText("monica")).toBeInTheDocument();
//   expect(screen.getByText("url")).toBeInTheDocument();
//   expect(screen.getByText("monica")).toBeInTheDocument();
//   expect(screen.getByText("1")).toBeInTheDocument();
//   expect(screen.getByText("2")).toBeInTheDocument();
// });
