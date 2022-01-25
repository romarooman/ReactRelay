import { TeamOutlined, BookOutlined } from "@ant-design/icons";
import { Popover, Divider } from "antd";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

import { Organizations_user$key } from "../../__generated__/Organizations_user.graphql";
import styles from "./Organizations.module.scss";

const OrganizationsFragment = graphql`
  fragment Organizations_user on User {
    organizations(first: 4) {
      totalCount
      nodes {
        description
        avatarUrl
        name
        id
        membersWithRole {
          totalCount
        }
        itemShowcase {
          items {
            totalCount
          }
        }
      }
    }
  }
`;

type OrganizationsProps = {
  user: Organizations_user$key;
};

const Organizations = ({ user }: OrganizationsProps) => {
  const { organizations } = useFragment(OrganizationsFragment, user);

  return (
    <section className={styles.organizations}>
      <h4>Organizations</h4>
      <div className={styles.logoContainer}>
        {organizations.nodes ? (
          organizations.nodes?.map((item) =>
            item ? (
              <div key={item.id}>
                <Popover
                  id="pop"
                  placement="topLeft"
                  overlayStyle={{ width: "20vw" }}
                  content={
                    <div className={styles.popWindow}>
                      <div className={styles.popContent}>
                        <img className={styles.popAvatar} src={`${item.avatarUrl}`} alt="avatar" />
                        <div className={styles.popText}>
                          <p className={styles.popHeader}>{item.name}</p>
                          <p className={styles.popText}>{item.description}</p>
                        </div>
                      </div>
                      <Divider style={{ margin: "5px 0 5px 0", padding: "0", width: "100%" }} />
                      <div className={styles.popFooter}>
                        <BookOutlined />
                        <p>{item.membersWithRole.totalCount} repositories</p>
                        <TeamOutlined />
                        <p>{item.itemShowcase.items.totalCount} members</p>
                      </div>
                    </div>
                  }
                >
                  <img
                    data-testid="trigger"
                    className={styles.avatar}
                    src={`${item.avatarUrl}`}
                    alt="avatar"
                  />
                </Popover>
              </div>
            ) : null,
          )
        ) : (
          <div>No organizations</div>
        )}
      </div>
      <div className={styles.block}>Block or Report</div>
    </section>
  );
};

export { Organizations };
