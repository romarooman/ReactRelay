import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay";

import { MainUserQuery as MainUserQueryType } from "../../__generated__/MainUserQuery.graphql";
import { RouteComponentProps } from "../../routing/RouteRenderer";
import { Achievements } from "../Achievements";
import { Organizations } from "../Organizations";
import { Sponsors } from "../Sponsors";
import { UserInfo } from "../UserInfo";
import styles from "./MainUser.module.scss";

const MainUserComponetQuery = graphql`
  query MainUserQuery($login: String!) {
    user(login: $login) {
      ...Achievements_user
      ...Organizations_user
      ...UserInfoFragment_user
      ...SponsorsFragment_user
    }
  }
`;

type MainUserProps = RouteComponentProps<{}, MainUserQueryType>;

export default function MainUser({ prepared }: MainUserProps) {
  const { user } = usePreloadedQuery<MainUserQueryType>(MainUserComponetQuery, prepared!.queryRef);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.layout}>
      <UserInfo user={user} />
      <Sponsors user={user} />
      <Achievements user={user} />
      <Organizations user={user} />
    </div>
  );
}
