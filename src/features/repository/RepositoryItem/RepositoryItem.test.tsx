import { render, screen } from "@testing-library/react";
import { Spin } from "antd";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import React, { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";

import styles from "../../../App.module.scss";
import { RepositoryItemQueryResponse } from "../../__generated__/RepositoryItemQuery.graphql";
import { RepositoryItem } from "./RepositoryItem";
import { generateUpdatedTime } from "./RepositoryItem";

function renderRepositoryItem() {
  const mockEnvironment = createMockEnvironment();

  const { container } = render(
    <RelayEnvironmentProvider environment={mockEnvironment}>
      <Suspense
        fallback={
          <div className={styles.spinner}>
            <Spin size="large" />
          </div>
        }
      >
        <RepositoryItem />
      </Suspense>
    </RelayEnvironmentProvider>,
  );

  mockEnvironment.mock.resolveMostRecentOperation((operation) =>
    MockPayloadGenerator.generate(operation, {
      Query(): RepositoryItemQueryResponse {
        return {
          user: {
            repositories: {
              nodes: [
                {
                  id: "test",
                  name: "RepositoryName",
                  description: "RepositoryDescription",
                  visibility: "public",
                  forkCount: 5,
                  stargazerCount: 10,
                  primaryLanguage: {
                    name: "JS",
                    color: "background-color: rgb(241, 224, 90)",
                  },
                },
                {
                  id: "test2",
                  name: "RepositoryName2",
                  description: "Test4",
                  visibility: "public",
                  forkCount: 11,
                  stargazerCount: 15,
                },
              ],
            },
          },
        };
      },
    }),
  );

  return {
    mockEnvironment,
    container,
  };
}

test("renders repository information", async () => {
  renderRepositoryItem();
  expect(await screen.findByText("RepositoryName")).toBeInTheDocument();
  expect(screen.getByText(/RepositoryDescription/)).toBeInTheDocument();
  expect(screen.getByText(5)).toBeInTheDocument();
  expect(screen.getByText(10)).toBeInTheDocument();
  expect(screen.getByText("JS")).toBeInTheDocument();
});

test("returns the correct value", async () => {
  renderRepositoryItem();

  const dayjs = jest.requireActual("dayjs");
  const utc = jest.requireActual("dayjs/plugin/utc");
  dayjs.extend(utc);

  const updatedTime = "2022-01-01T22:53:25Z";
  expect(generateUpdatedTime(updatedTime)).toBe("Updated 16 days ago");
});

test("returns the correct value", async () => {
  renderRepositoryItem();

  const dayjs = jest.requireActual("dayjs");
  const utc = jest.requireActual("dayjs/plugin/utc");
  dayjs.extend(utc);

  const updatedTime = "2021-08-08T22:53:25Z";
  expect(generateUpdatedTime(updatedTime)).toBe("Updated on 1 Aug 2021");
});

test("returns with undefined value", async () => {
  renderRepositoryItem();

  const dayjs = jest.requireActual("dayjs");
  const utc = jest.requireActual("dayjs/plugin/utc");
  dayjs.extend(utc);

  const updatedTime = undefined;
  expect(generateUpdatedTime(updatedTime)).toBe("");
});
