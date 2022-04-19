import Contact from "./Contact";
import { Spacer, Text, Button, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export default function QuickLinks() {
  return (
    <div>
      <Text h3 css={{ letterSpacing: 1 }}>
        Quick Links
      </Text>
      <Spacer y="1" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Contact />
        <Spacer y="0" x="0.5" />
        <Tooltip
          color={"default"}
          content={<Text b>Will Be Available Soon</Text>}
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
          color={"default"}
          content={<Text b>Will Be Available Soon</Text>}
        >
          <Button color="empty" auto shadow icon={<Icon icon="bi:medium" />}>
            Medium
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
