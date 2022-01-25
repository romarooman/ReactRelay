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
  UserInfoFragment_user$data,
  UserInfoFragment_user$key,
} from "../../__generated__/UserInfoFragment_user.graphql";
import {
  UserInfoTestQuery,
  UserInfoTestQueryResponse,
} from "../../__generated__/UserInfoTestQuery.graphql";
import { Spinner } from "../Spinner";
import { UserInfo } from "./UserInfo";

// type UserInfo_user$dataWithoutReftype = Omit<UserInfoFragment_user$data, " $refType">;
type UserData = Omit<UserInfoFragment_user$data, " $refType">;

function resolveExactMockData(mockEnvironment: RelayMockEnvironment, mockData: UserData) {
  mockEnvironment.mock.resolveMostRecentOperation((operation: OperationDescriptor) =>
    MockPayloadGenerator.generate(operation, {
      Query(): Omit<UserInfoTestQueryResponse, " refType"> {
        const user: UserData = mockData;
        return { user } as any;
      },
    }),
  );
}

function renderUserInfo(mockEnvironment: Environment) {
  const UserInfoRenderer = () => {
    const data: { user: UserInfoFragment_user$key | null } = useLazyLoadQuery<UserInfoTestQuery>(
      graphql`
        query UserInfoTestQuery @relay_test_operation {
          user: node(id: "test-id") {
            ...UserInfoFragment_user
          }
        }
      `,
      {},
    );
    if (data.user === null) {
      return null;
    }
    return <UserInfo user={data.user} />;
  };

  return render(
    <RelayEnvironmentProvider environment={mockEnvironment}>
      <Suspense fallback={<Spinner />}>
        <UserInfoRenderer />
      </Suspense>
    </RelayEnvironmentProvider>,
  );
}

it("render fields with popUp", async () => {
  const mockEnvironment = createMockEnvironment();
  renderUserInfo(mockEnvironment);
  const mockData: UserData = {
    name: "name",
    login: "m0nica",
    avatarUrl: "url",
    bio: "user bio",
    followers: {
      totalCount: 1,
    },
    following: {
      totalCount: 2,
    },
    company: "github",
    location: "New York",
    email: "my@email.ru",
    websiteUrl: "www",
    starredRepositories: {
      totalCount: 3,
    },
    twitterUsername: "mytwitter",
  };
  resolveExactMockData(mockEnvironment, mockData);
  expect(await screen.findByText("name")).toBeInTheDocument();
  expect(screen.getByText("m0nica")).toBeInTheDocument();
  expect(screen.getByText("user bio")).toBeInTheDocument();
  expect(screen.getByText("1k")).toBeInTheDocument();
  expect(screen.getByText("2")).toBeInTheDocument();
  expect(screen.getByText("3")).toBeInTheDocument();
  expect(screen.getByText("github")).toBeInTheDocument();
  expect(screen.getByText("New York")).toBeInTheDocument();
  expect(screen.getByText("my@email.ru")).toBeInTheDocument();
  expect(screen.getByText("@mytwitter")).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "avatar" })).toHaveAttribute("src", "url");
});
