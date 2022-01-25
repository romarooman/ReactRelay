import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Spin } from "antd";
import graphql from "babel-plugin-relay/macro";
import React, { Suspense } from "react";
import { RelayEnvironmentProvider, useLazyLoadQuery } from "react-relay";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";

import styles from "../../App.module.scss";
import {
  SponsorsFragmentTestQuery,
  SponsorsFragmentTestQueryResponse,
} from "../../__generated__/SponsorsFragmentTestQuery.graphql";
import {
  SponsorsFragment_user$key,
  SponsorsFragment_user$data,
} from "../../__generated__/SponsorsFragment_user.graphql";
import { Sponsors } from "./Sponsors";

type MockEnvironment = ReturnType<typeof createMockEnvironment>;
type SponsorsData = Omit<SponsorsFragment_user$data, " $refType">;

function resolveExactMockData(mockEnvironment: MockEnvironment, mockData: SponsorsData) {
  mockEnvironment.mock.resolveMostRecentOperation((operation: OperationDescriptor) =>
    MockPayloadGenerator.generate(operation, {
      Query(): Omit<SponsorsFragmentTestQueryResponse, " refType"> {
        const user: SponsorsData = mockData;
        return { user } as any;
      },
    }),
  );
}

function renderSponsors(mockEnvironment: Environment) {
  const SponsorsRenderer = () => {
    const data: { user: SponsorsFragment_user$key | null } =
      useLazyLoadQuery<SponsorsFragmentTestQuery>(
        graphql`
          query SponsorsFragmentTestQuery @relay_test_operation {
            user: node(id: "test-id") {
              ...SponsorsFragment_user
            }
          }
        `,
        {},
      );
    if (data.user === null) {
      return null;
    }
    return <Sponsors user={data.user} />;
  };

  return render(
    <RelayEnvironmentProvider environment={mockEnvironment}>
      <Suspense
        fallback={
          <div className={styles.spinner}>
            <Spin size="large" />
          </div>
        }
      >
        <SponsorsRenderer />
      </Suspense>
    </RelayEnvironmentProvider>,
  );
}

const mockData: SponsorsData = {
  sponsors: {
    totalCount: 56,
    nodes: [
      {
        location: "SponsorAddress",
        name: "SponsorName",
        login: "m0nica",
        avatarUrl: "url",
        bio: "Sponsors bio",
        isEmployee: true,
        isDeveloperProgramMember: false,
      },
      {
        location: "Sponsor address2",
        name: "Sponsor2",
        login: "nica",
        avatarUrl: "url-img",
        bio: "bio",
        isEmployee: false,
        isDeveloperProgramMember: true,
      },
    ],
  },
};

test("renders sponsors section", async () => {
  const mockEnvironment = createMockEnvironment();
  renderSponsors(mockEnvironment);
  resolveExactMockData(mockEnvironment, mockData);
  const titleSection = await screen.findByText("Sponsors");
  expect(titleSection).toBeInTheDocument();
});

test("check show popup on hover", async () => {
  const mockEnvironment = createMockEnvironment();
  renderSponsors(mockEnvironment);
  resolveExactMockData(mockEnvironment, mockData);
  const images = await screen.findAllByRole("img");
  userEvent.hover(images[0]);
  expect(await screen.findByText(/Sponsor/)).toBeInTheDocument();
});

it("renders popup information", async () => {
  const mockEnvironment = createMockEnvironment();
  renderSponsors(mockEnvironment);
  resolveExactMockData(mockEnvironment, mockData);

  const images = await screen.findAllByRole("img");
  userEvent.hover(images[0]);
  expect(await screen.findByText(/SponsorAddress/)).toBeInTheDocument();
  expect(screen.getByText("SponsorName")).toBeInTheDocument();
  expect(screen.getByText(/m0nica/i)).toBeInTheDocument();
  expect(images[0]).toHaveAttribute("src", "url");
  expect(screen.getByText("Sponsors bio")).toBeInTheDocument();
});
