import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import graphql from "babel-plugin-relay/macro";
import { Suspense } from "react";
import { Environment, RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay";
import { OperationDescriptor } from "relay-runtime";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";

import {
  AchievementsTestQuery,
  AchievementsTestQueryResponse,
} from "../../__generated__/AchievementsTestQuery.graphql";
import {
  Achievements_user$data,
  Achievements_user$key,
} from "../../__generated__/Achievements_user.graphql";
import { Spinner } from "../Spinner";
import { Achievements } from "./Achievements";

type MockEnvironment = ReturnType<typeof createMockEnvironment>;
type Achievements_user$dataWithoutReftype = Omit<Achievements_user$data, " $refType">;

function resolveExactMockData(
  mockEnvironment: MockEnvironment,
  mockData: Achievements_user$dataWithoutReftype,
) {
  mockEnvironment.mock.resolveMostRecentOperation((operation: OperationDescriptor) =>
    MockPayloadGenerator.generate(operation, {
      Query(): AchievementsTestQueryResponse {
        const user: Achievements_user$dataWithoutReftype = mockData;
        return { user } as any;
      },
    }),
  );
}

function renderAchievements(mockEnvironment: Environment) {
  const AchievementsRenderer = () => {
    const data: { user: Achievements_user$key | null } = useLazyLoadQuery<AchievementsTestQuery>(
      graphql`
        query AchievementsTestQuery @relay_test_operation {
          user: node(id: "test-id") {
            ...Achievements_user
          }
        }
      `,
      {},
    );
    if (data.user === null) {
      return null;
    }
    return <Achievements user={data.user} />;
  };

  return render(
    <RelayEnvironmentProvider environment={mockEnvironment}>
      <Suspense fallback={<Spinner />}>
        <AchievementsRenderer />
      </Suspense>
    </RelayEnvironmentProvider>,
  );
}

test("renders achievements", async () => {
  const mockEnvironment = createMockEnvironment();
  renderAchievements(mockEnvironment);

  const mockData: Achievements_user$dataWithoutReftype = {
    name: "testName",
    avatarUrl: "www.blablabla.org",
    repositoriesContributedTo: {
      totalCount: 50,
      nodes: [
        {
          id: "FirstTestID",
          nameWithOwner: "TestRepositoryName1",
        },
        {
          id: "SecondTestID",
          nameWithOwner: "TestRepositoryName2",
        },
      ],
    },
  };

  resolveExactMockData(mockEnvironment, mockData);

  expect(screen.getByTestId("spinner")).toBeInTheDocument();

  const header = await screen.findByText(/achievements/i);
  expect(header).toBeInTheDocument();
  const imageElement = screen.getByAltText("Arctic Code Vault Contributor");
  userEvent.hover(imageElement);

  const popUp = await screen.findByTestId(/achievements popover/);
  expect(popUp).toBeInTheDocument();
  expect(popUp).toHaveTextContent("testName");
  expect(popUp).toHaveTextContent("contributed code to several(50) repositories");
  expect(screen.getByText(/RepositoryName2/i).closest("a")).toHaveAttribute(
    "href",
    "https://github.com/TestRepositoryName2",
  );
});
