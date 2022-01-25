import graphql from "babel-plugin-relay/macro";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import _isEmpty from "lodash/isEmpty";
import { useLazyLoadQuery } from "react-relay";

import {
  RepositoryItemQuery,
  RepositoryItemQueryResponse,
} from "../../../__generated__/RepositoryItemQuery.graphql";
import { RatingIcon, ForkIcon, LicenseIcon } from "../../../icons";
import styles from "./RepositoryItem.module.scss";

type RepositoryTopics = NonNullable<
  NonNullable<
    NonNullable<NonNullable<RepositoryItemQueryResponse["user"]>["repositories"]["nodes"]>[0]
  >["repositoryTopics"]["nodes"]
>;

const renderTags = (list: RepositoryTopics, totalCount: number) => {
  if (totalCount <= 0) {
    return null;
  }

  list.map((item) => {
    if (!item || _isEmpty(item)) {
      return null;
    }

    return (
      <ul className={styles.topicTags}>
        <li key={item.topic.id}>
          <span className={styles.topicTag}>{item.topic.name}</span>
        </li>
      </ul>
    );
  });
};

const RepositoryQuery = graphql`
  query RepositoryItemQuery($login: String!) {
    user(login: $login) {
      repositories(first: 10, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          name
          description
          updatedAt
          forkCount
          description
          stargazerCount
          visibility
          primaryLanguage {
            name
            color
          }
          issues(first: 1, labels: "help wanted") {
            totalCount
          }
          licenseInfo {
            name
          }
          repositoryTopics(first: 10) {
            totalCount
            nodes {
              topic {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const generateUpdatedTime = (date: string) => {
  if (!date) {
    return "";
  }
  dayjs.extend(relativeTime);
  const diffInMonths = dayjs().diff(date, "month");
  if (diffInMonths > 1) {
    return `Updated on ${dayjs(date).format("d MMM YYYY")}`;
  }
  return `Updated ${dayjs(date).fromNow()}`;
};

const RepositoryItem = () => {
  const data = useLazyLoadQuery<RepositoryItemQuery>(RepositoryQuery, { login: "M0nica" });

  const list = data.user?.repositories.nodes;
  const listRepository = list?.map((repository) => {
    if (!repository) {
      return null;
    }

    const style = {
      backgroundColor: `${repository.primaryLanguage?.color}`,
    };

    const listTopics = repository?.repositoryTopics?.nodes;
    const topicsCount = repository?.repositoryTopics?.totalCount;

    const date = repository?.updatedAt as string;

    return (
      <li className={styles.repositoryItem} key={repository.id}>
        <div className={styles.title}>
          <h2>{repository.name}</h2>
          <span className="label labelType">{repository.visibility}</span>
        </div>
        <p>{repository.description}</p>
        {listTopics && renderTags(listTopics, topicsCount)}
        <ul className={styles.infoList}>
          {repository.primaryLanguage?.name && (
            <li>
              <span className={styles.repoLanguageColor} style={style} />
              <span className={styles.language}>{repository.primaryLanguage?.name}</span>
            </li>
          )}
          {repository.stargazerCount > 0 && (
            <li>
              <RatingIcon />
              <span className="rating">{repository.stargazerCount}</span>
            </li>
          )}
          {repository.forkCount > 0 && (
            <li>
              <ForkIcon />
              <span className="count">{repository.forkCount}</span>
            </li>
          )}
          {repository.issues.totalCount > 0 && (
            <li>{repository.issues?.totalCount} issues need help</li>
          )}
          {repository.licenseInfo && (
            <li>
              <LicenseIcon />
              {repository.licenseInfo?.name}
            </li>
          )}

          <li>{generateUpdatedTime(date)}</li>
        </ul>
      </li>
    );
  });

  return (
    <section>
      <ul className={styles.repositoryList}>{listRepository}</ul>
    </section>
  );
};

export { RepositoryItem };
