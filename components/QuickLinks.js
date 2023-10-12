import Contact from "./Contact";
import { Spacer, Text, Button, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import styles from "../styles/QuickLinks.module.css";

export default function QuickLinks() {
  return (
    <div>
      <Spacer y="1" />
      <Text h3 css={{ letterSpacing: 1 }}>
        Quick Links
      </Text>
      <div className={styles.quickLinks}>
        <span className={styles.contact}>
          <Contact />
        </span>
        <Tooltip
          color={"default"}
          placement={"bottomStart"}
          content={<Text b>Available Soon</Text>}
        >
          <Button
            className={styles.twitter}
            color="empty"
            auto
            shadow
            icon={<Icon icon="logos:twitter" />}
          >
            Tweets
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
