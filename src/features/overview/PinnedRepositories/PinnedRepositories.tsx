import { Card, Col } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

import {
  PinnedRepositoriesQuery,
  PinnedRepositoriesQueryResponse,
} from "../../../__generated__/PinnedRepositoriesQuery.graphql";


import { StarIcon, ForkIcon, Pinned } from "../../../icons";
import styles from "./PinnedRepositories.module.scss";

// type PinnedRepositoriesProps = {
//   user: PinnedRepositoriesFragment_user$key;
// };

type RepositoryType = {user :  PinnedRepositoriesQueryResponse};

const PinnedQuery = graphql`
  query PinnedRepositoriesQuery($login: String!) {
    user(login: $login) {
    pinnedItems(first: 6) {
      nodes {
        ... on Repository {
          id
          nameWithOwner
          forkCount
          description
          stargazerCount
          visibility
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
  }
`;

const PinnedRepositories = () => {
  const data = useLazyLoadQuery<PinnedRepositoriesQuery>(PinnedQuery, { login: "M0nica" });
  // const data = useFragment(PinnedRepositoriesFragment, user);
  if (!data) {
    return null;
  }

  const list = data.user?.pinnedItems.nodes;

  const listRepository = list?.map((repository:any) => {
    if (!repository) {
      return null;
    }

    const {
      id,
      forkCount,
      description,
      stargazerCount,
      visibility,
      nameWithOwner,
      primaryLanguage,
    } = repository;

    const background = {
      backgroundColor: `${primaryLanguage?.color}`,
    };
    return (
      <Card className={styles.card} key={id}>
        <div className={styles.flex1}>
          {" "}
          <Pinned className={styles.icons} />
          <a href="/#" className={styles.marginRigt2}>
            <span>{nameWithOwner}</span>
          </a>
          <span className={styles.label}>P{visibility?.slice(1).toLowerCase()}</span>
        </div>
        <div className={styles.pinnedItemText}>{description}</div>
        <div>
          <span className={styles.repoLanguageColor} style={background}>
            {" "}
          </span>
          <span className={`${styles.repoLanguageText}`}>{primaryLanguage?.name}</span>
          <StarIcon className={styles.icons} />
          <span>{stargazerCount}</span>
          <ForkIcon className={`${styles.icons} ${styles.marginRigt2}`} />
          <span>{forkCount}</span>
        </div>
      </Card>
    );
  });

  return (
    <section className={styles.pinndedcards}>
      <ul>{listRepository}</ul>
    </section>
  );
};

export { PinnedRepositories };
