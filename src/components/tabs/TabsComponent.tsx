import { Tabs } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

import { TabsComponent_user$key } from "../../__generated__/TabsComponent_user.graphql";
import { RepositoryItem } from "../../features/repository/RepositoryItem";
import { PinnedRepositories } from "../../features/overview/PinnedRepositories";
import { OverviewIcon, BookmarkIcon } from "../../icons";
import { Overview } from "./Overview";
import { Repositories } from "./Repositories";
import styles from "./TabsComponent.module.scss";

const TabsComponentFragment = graphql`
  fragment TabsComponent_user on User {
    repositories {
      totalCount
    }
  }
`;

const { TabPane } = Tabs;

function callback(key: string) {
  console.log(key);
}

type TabsComponentProps = { user: TabsComponent_user$key };

function TabsComponent({ user }: TabsComponentProps) {
  const { repositories } = useFragment(TabsComponentFragment, user);
  const totalCount = repositories.totalCount;
  return (
    <Tabs defaultActiveKey="overview" onChange={callback}>
      <TabPane
        id="overviewTab"
        tab={
          <span className={styles.tabTitle}>
            <OverviewIcon fontSize="16px" />
            Overview
          </span>
        }
        key="overview">
        <Overview />
        <PinnedRepositories/>
      </TabPane>
      <TabPane
        id="repositoriesTab"
        tab={
          <span className={styles.tabTitle}>
            <BookmarkIcon fontSize="16px" />
            Repositories
            <div className={styles.totalCount}>{totalCount}</div>
          </span>
        }
        key="repositories">
        <Repositories />
        <RepositoryItem />   
      </TabPane>
    </Tabs>
  );
}

export { TabsComponent };
