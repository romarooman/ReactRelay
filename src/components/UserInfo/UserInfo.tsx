import { HeartTwoTone } from "@ant-design/icons";
import { Button, Typography, Avatar } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";

import { UserInfoFragment_user$key } from "../../__generated__/UserInfoFragment_user.graphql";
import {
  EmailgitIcon,
  FollowersIcon,
  LocationIcon,
  StarIcon,
  TwitterIcon,
  WebsiteIcon,
} from "../../icons";
import styles from "./UserInfo.module.scss";

const { Paragraph, Link } = Typography;

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

type Props = {
  user: UserInfoFragment_user$key;
};

const UserInfoFragment = graphql`
  fragment UserInfoFragment_user on User {
    name
    login
    avatarUrl
    bio
    followers {
      totalCount
    }
    following {
      totalCount
    }
    company
    location
    email
    websiteUrl

    starredRepositories {
      totalCount
    }
    twitterUsername
  }
`;

const UserInfo = ({ user }: Props) => {
  const data = useFragment(UserInfoFragment, user);

  if (!data) {
    return null;
  }

  const {
    avatarUrl,
    name,
    login,
    bio,
    followers,
    following,
    starredRepositories,
    location,
    company,
    email,
    websiteUrl,
    twitterUsername,
  } = data;

  return (
    <div className={styles.sideBar}>
      <Link href={avatarUrl}>
        <Avatar size={296} src={avatarUrl} alt="avatar" />
      </Link>
      <div className={styles.vcardNamesContainer}>
        <span className={styles.fullName}>{name}</span>
        <span className={styles.name}>{login}</span>
      </div>
      <div>
        <div className={styles.buttonField}>
          <Button className={styles.buttonFollow}>Follow</Button>
          <Button className={styles.buttonSponsor} icon={<HeartTwoTone />}>
            Sponsor
          </Button>
        </div>
        <div className={styles.bio}>
          <p className={styles.bioText}>{bio}</p>
        </div>
        <div className={styles.socialNetwork}>
          <FollowersIcon />
          <a href="/#" className={styles.following}>
            <span className={styles.followersNumber}>
              {numberWithCommas(followers.totalCount).substring(0, 3)}k
            </span>
            followers
          </a>

          <a href="/#" className={styles.following}>
            <span className={styles.followersNumber}>{following.totalCount}</span>
            following
          </a>

          <StarIcon />
          <a href="/#">
            <span className={styles.followersNumber}>{starredRepositories.totalCount}</span>
          </a>
        </div>
        <div className={styles.connectingFiled}>
          <LocationIcon />
          <div className={styles.textFiled}>{location}</div>
        </div>
        <div className={styles.connectingFiled}>
          <EmailgitIcon />
          <a href="/#" className={styles.refField}>
            <div className={styles.textFiled}>{email}</div>
          </a>
        </div>

        <div className={styles.connectingFiled}>
          <WebsiteIcon />
          <a href="/#" className={styles.refField}>
            <div className={styles.textFiled}> {websiteUrl}</div>
          </a>
        </div>
        <div className={styles.connectingFiled}>
          <TwitterIcon />
          <a href="/#" className={styles.refField}>
            <div className={styles.textFiled}>@{twitterUsername} </div>
          </a>
        </div>
        <div> {company}</div>
      </div>
    </div>
  );
};

export { UserInfo };
