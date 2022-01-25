import { Avatar, Popover, Typography } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

import { Achievements_user$key } from "../../__generated__/Achievements_user.graphql";
import AchImg from "../../images/badge-acv.png";
import styles from "./Achievements.module.scss";

const { Link } = Typography;

type Props = {
  user: Achievements_user$key;
};

const AchievementsFragment = graphql`
  fragment Achievements_user on User {
    name
    avatarUrl
    repositoriesContributedTo(first: 10) {
      totalCount
      nodes {
        nameWithOwner
        id
      }
    }
  }
`;

function Achievements({ user }: Props) {
  const data = useFragment(AchievementsFragment, user);

  if (!data) {
    return null;
  }

  const { avatarUrl, repositoriesContributedTo, name } = data;

  const repositoryNodes = repositoriesContributedTo.nodes ?? [];
  const repositories = repositoryNodes.map((element) =>
    element ? (
      <span key={element.id}>
        <Link href={`https://github.com/${element.nameWithOwner}`}>{element.nameWithOwner}</Link>
        {", "}
      </span>
    ) : null,
  );

  const popoverContent = (
    <div data-testid="achievements popover" className={styles.popover}>
      <Avatar src={avatarUrl} size="large" />
      <div className={styles.popoverText}>
        <p>
          <span className={styles.bold}>
            <Link href="https://github.com/m0nica">{name}</Link>&nbsp;
          </span>
          <span>
            contributed code to several({repositoriesContributedTo.totalCount}) repositories in the{" "}
            <Link href="https://archiveprogram.github.com/" className={styles.bold}>
              2020 GitHub Archive Program
            </Link>
            :
          </span>
        </p>
        <p>{repositories}and more!</p>
      </div>
    </div>
  );

  return (
    <div className={styles.section}>
      <h2>Achievements</h2>
      <Popover placement="topLeft" content={popoverContent} title="Arctic Code Vault Contributor">
        <Link href="https://archiveprogram.github.com/">
          <img alt="Arctic Code Vault Contributor" src={AchImg} className={styles.badge} />
        </Link>
      </Popover>
    </div>
  );
}
export { Achievements };
