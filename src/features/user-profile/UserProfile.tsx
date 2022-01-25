import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

import { UserProfile_user$key } from "../../__generated__/UserProfile_user.graphql";
import { Achievements } from "../../components/Achievements";
import { Organizations } from "../../components/Organizations";
import { Sponsors } from "../../components/Sponsors";
import { UserInfo } from "../../components/UserInfo";
import styles from "./UserProfile.module.scss";

const UserProfileFragment = graphql`
  fragment UserProfile_user on User {
    ...Achievements_user
    ...Organizations_user
    ...UserInfoFragment_user
    ...SponsorsFragment_user
  }
`;

interface UserProfileProps {
  user: UserProfile_user$key;
}

function UserProfile({ user }: UserProfileProps) {
  const userData = useFragment(UserProfileFragment, user);

  if (!userData) {
    return null;
  }

  return (
    <div className={styles.layout}>
      <UserInfo user={userData} />
      <Sponsors user={userData} />
      <Achievements user={userData} />
      <Organizations user={userData} />
    </div>
  );
}

export { UserProfile };
