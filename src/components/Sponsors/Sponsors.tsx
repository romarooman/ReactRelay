import { Col, Row, Avatar, Popover } from "antd";
import graphql from "babel-plugin-relay/macro";
import _isEmpty from "lodash/isEmpty";
import { useFragment } from "react-relay";

import {
  SponsorsFragment_user$key,
  SponsorsFragment_user,
} from "../../__generated__/SponsorsFragment_user.graphql";
import { LocationIcon, MemberIcon } from "../../icons";
import styles from "./Sponsors.module.scss";

type Organizations = NonNullable<
  NonNullable<NonNullable<SponsorsFragment_user>["sponsors"]>["nodes"]
>;

type Props = {
  user: SponsorsFragment_user$key;
};

const SponsorsFragment = graphql`
  fragment SponsorsFragment_user on User {
    sponsors(first: 14) {
      totalCount
      nodes {
        ... on User {
          id
          avatarUrl
          name
          bio
          login
          location
          isEmployee
          isDeveloperProgramMember
          organizations(first: 3) {
            totalCount
            nodes {
              ... on Organization {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const generateMemberString = (orgs: Organizations, count: number) => {
  const [firstOrg, secondOrg, thirdOrg] = orgs.map((organizationItem) => organizationItem?.name);
  if (!secondOrg) {
    return firstOrg;
  }
  if (count === 3) {
    return `${firstOrg}, ${secondOrg} and ${thirdOrg}`;
  }
  if (count > 3) {
    return `${firstOrg}, ${secondOrg} and ${count} more`;
  }
  return `${firstOrg} and ${secondOrg}`;
};

const Sponsors = ({ user }: Props) => {
  const data = useFragment(SponsorsFragment, user);

  if (!data) {
    return null;
  }

  if (!data?.sponsors.nodes) {
    return null;
  }

  const {
    sponsors: { nodes: sponsors, totalCount: sponsorsTotalCount },
  } = data;

  const listSponsors = sponsors.map((sponsor) => {
    if (!sponsor || _isEmpty(sponsor)) {
      return null;
    }

    const {
      avatarUrl,
      name,
      id,
      bio,
      login,
      location,
      isEmployee,
      isDeveloperProgramMember,
      organizations,
    } = sponsor;

    const totalCount = organizations?.totalCount ?? 0;
    const content = (
      <div className={styles.popup}>
        <div className={styles.holder}>
          <Row>
            <Col span={6}>
              <div className={styles.avatarHolder}>
                <Avatar size={60} src={avatarUrl} alt="avatar" />
                {isEmployee && (
                  <span className={`${styles.label} ${styles.staffBlock}`}>Staff</span>
                )}
                {isDeveloperProgramMember && (
                  <span className={`${styles.label} ${styles.proBlock}`}>Pro</span>
                )}
              </div>
            </Col>
            <Col span={18}>
              <h3 className={styles.title}>
                {name}
                <span className={styles.login}> {login}</span>
              </h3>
              <p>{bio}</p>
              {location && (
                <address className={styles.location}>
                  <span className={styles.iconHolder}>
                    <LocationIcon color="#8b949e" fontSize="12px" />
                  </span>
                  {location}
                </address>
              )}
            </Col>
          </Row>
        </div>
        {sponsors.length > 0 && (
          <div className={styles.memberInfo}>
            <MemberIcon color="#8b949e" fontSize="12px" />
            Member of&nbsp;
            {generateMemberString(sponsors, totalCount)}
          </div>
        )}
      </div>
    );

    return (
      <Popover key={id} placement="topLeft" content={content} trigger="hover">
        <li>
          <Avatar size={35} src={avatarUrl} />
        </li>
      </Popover>
    );
  });

  return (
    <section className={styles.section}>
      <h2>Sponsors</h2>
      <ul className={styles.sponsorsList}>
        {listSponsors}
        <li key="last-id">+{sponsorsTotalCount}</li>
      </ul>
    </section>
  );
};

export { Sponsors };
