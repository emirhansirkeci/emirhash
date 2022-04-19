import Contact from "./Contact";
import { Spacer, Text, Button, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function QuickLinks() {
  return (
    <div>
      <Text h3 css={{ letterSpacing: 1 }}>
        Quick Links
      </Text>
      <div style={{ display: "flex", overflowY: "auto", padding: "1rem 0" }}>
        <Contact />
        <Spacer y="0" x="0.5" />
        <Tooltip
          color={"default"}
          placement={"bottomStart"}
          content={<Text b> Soon</Text>}
        >
          <Button
            color="empty"
            auto
            shadow
            icon={<Icon icon="logos:twitter" />}
          >
            Tweets
          </Button>
        </Tooltip>
        <Spacer y="0" x="0.5" />
        <Tooltip
          placement={"bottomStart"}
          color={"default"}
          content={<Text b>Soon</Text>}
        >
          <Button color="empty" auto shadow icon={<Icon icon="bi:medium" />}>
            Medium
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
