import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay";

import { UserPageQuery as UserPageQueryType } from "../../__generated__/UserPageQuery.graphql";
import { TabsComponent } from "../../components/tabs";
import { UserProfile } from "../../features/user-profile";
import { RouteComponentProps } from "../../routing/RouteRenderer";
import styles from "./UserPage.module.scss";

const UserPageComponentQuery = graphql`
  query UserPageQuery($login: String!) {
    user(login: $login) {
      ...UserProfile_user
      ...TabsComponent_user
    }
  }
`;

type UserPageProps = RouteComponentProps<{}, UserPageQueryType>;

function UserPage({ prepared }: UserPageProps) {
  const { user } = usePreloadedQuery<UserPageQueryType>(UserPageComponentQuery, prepared!.queryRef);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <UserProfile user={user} />
      <TabsComponent user={user} />
    </div>
  );
}

export { UserPage };
