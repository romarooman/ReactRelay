import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import graphql from "babel-plugin-relay/macro";
import { Suspense } from "react";
import { Environment, RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay";
import { OperationDescriptor } from "relay-runtime";
import {
  createMockEnvironment,
  MockPayloadGenerator,
  RelayMockEnvironment,
} from "relay-test-utils";

import {
  TabsComponentTestQuery,
  TabsComponentTestQueryResponse,
} from "../../__generated__/TabsComponentTestQuery.graphql";
import {
  TabsComponent_user$data,
  TabsComponent_user$key,
} from "../../__generated__/TabsComponent_user.graphql";
import { TabsComponent } from "./";

type UserData = Omit<TabsComponent_user$data, " $refType">;

function resolveExactMockData(mockEnvironment: RelayMockEnvironment, mockData: UserData) {
  mockEnvironment.mock.resolveMostRecentOperation((operation: OperationDescriptor) =>
    MockPayloadGenerator.generate(operation, {
      Query() {
        const user: UserData = mockData;
        return { user };
      },
    }),
  );
}

function renderTabs(mockEnvironment: Environment) {
  const TabsRenderer = () => {
    const data: { user: TabsComponent_user$key | null } = useLazyLoadQuery<TabsComponentTestQuery>(
      graphql`
        query TabsComponentTestQuery @relay_test_operation {
          user: node(id: "test-id") {
            ...TabsComponent_user
          }
        }
      `,
      {},
    );
    if (data.user === null) {
      return null;
    }
    return <TabsComponent user={data.user} />;
  };

  return render(
    <RelayEnvironmentProvider environment={mockEnvironment}>
      <Suspense fallback="Loading...">
        <TabsRenderer />
      </Suspense>
    </RelayEnvironmentProvider>,
  );
}

it("render tabs", async () => {
  const mockEnvironment = createMockEnvironment();
  renderTabs(mockEnvironment);
  const mockData: UserData = {
    repositories: {
      totalCount: 2222,
    },
  };
  resolveExactMockData(mockEnvironment, mockData);
  const overviewTitle = await screen.findAllByText("Overview");
  expect(overviewTitle[0]).toBeInTheDocument();
  const repositoriesTitle = screen.getAllByText("Repositories");
  expect(repositoriesTitle[0]).toBeInTheDocument();
  const mockCount = screen.getByText(/2222/);
  expect(mockCount).toBeInTheDocument();
});
