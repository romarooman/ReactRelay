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
  OrganizationsTestQuery,
  OrganizationsTestQueryResponse,
} from "../../__generated__/OrganizationsTestQuery.graphql";
import {
  Organizations_user$data,
  Organizations_user$key,
} from "../../__generated__/Organizations_user.graphql";
import { Spinner } from "../Spinner";
import { Organizations } from "./Organizations";

type UserData = Omit<Organizations_user$data, " $refType">;

function resolveExactMockData(mockEnvironment: RelayMockEnvironment, mockData: UserData) {
  mockEnvironment.mock.resolveMostRecentOperation((operation: OperationDescriptor) =>
    MockPayloadGenerator.generate(operation, {
      Query(): Omit<OrganizationsTestQueryResponse, " refType"> {
        const user: UserData = mockData;
        return { user } as any;
      },
    }),
  );
}

function renderOrganizations(mockEnvironment: Environment) {
  const OrganizationsRenderer = () => {
    const data: { user: Organizations_user$key | null } = useLazyLoadQuery<OrganizationsTestQuery>(
      graphql`
        query OrganizationsTestQuery @relay_test_operation {
          user: node(id: "test-id") {
            ...Organizations_user
          }
        }
      `,
      {},
    );
    if (data.user === null) {
      return null;
    }
    return <Organizations user={data.user} />;
  };

  return render(
    <RelayEnvironmentProvider environment={mockEnvironment}>
      <Suspense fallback={<Spinner />}>
        <OrganizationsRenderer />
      </Suspense>
    </RelayEnvironmentProvider>,
  );
}

it("render Organization with queue", async () => {
  const mockEnvironment = createMockEnvironment();

  mockEnvironment.mock.queueOperationResolver((operation) =>
    MockPayloadGenerator.generate(operation),
  );

  renderOrganizations(mockEnvironment);
  const titleSection = await screen.findByText("Organizations");
  expect(titleSection).toBeInTheDocument();

  const avatar = screen.getByRole("img", { name: "avatar" });
  expect(avatar).toBeInTheDocument();
});

it("render loading", () => {
  const mockEnvironment = createMockEnvironment();

  renderOrganizations(mockEnvironment);

  expect(screen.getByTestId("spinner")).toBeInTheDocument();
});

it("render fields with popUp", async () => {
  const mockEnvironment = createMockEnvironment();
  renderOrganizations(mockEnvironment);
  const mockData: UserData = {
    organizations: {
      totalCount: 2,
      nodes: [
        {
          description: "testDescription",
          avatarUrl: "testUrl",
          name: "testNodeName",
          id: "1",
          membersWithRole: {
            totalCount: 999,
          },
          itemShowcase: {
            items: {
              totalCount: 666,
            },
          },
        },
      ],
    },
  };
  resolveExactMockData(mockEnvironment, mockData);
  const titleSection = await screen.findByText(/Organizations/);
  expect(titleSection).toBeInTheDocument();

  expect(screen.getByText("Block or Report")).toBeInTheDocument();

  const avatar = screen.getByRole("img", { name: "avatar" });
  expect(avatar).toBeInTheDocument();
  expect(avatar).toHaveAttribute("src", "testUrl");

  const trigger = screen.getByTestId("trigger");
  expect(trigger).toBeInTheDocument();
  userEvent.hover(trigger);

  const popUp = await screen.findByText(/repositories/i);
  expect(popUp).toBeInTheDocument();

  expect(screen.getByText(/testDescription/i)).toBeInTheDocument();
  expect(screen.getByText(/testNodeName/i)).toBeInTheDocument();
  expect(screen.getByText(/999/)).toBeInTheDocument();
  expect(screen.getByText(/666/)).toBeInTheDocument();
});

it("empty queue", async () => {
  const mockEnvironment = createMockEnvironment();

  renderOrganizations(mockEnvironment);

  const mockData = {
    organizations: {
      totalCount: 0,
      nodes: null,
    },
  };
  resolveExactMockData(mockEnvironment, mockData);

  const titleSection = await screen.findByText(/No organizations/);
  expect(titleSection).toBeInTheDocument();
});
