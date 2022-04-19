import { Card, Col, Row, Button, Modal, Text, Spacer } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CardDetails from "./CardDetails";

export default function ProjectCard({ name, role, img, link, details }) {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Card cover css={{ w: "100%" }}>
        <Card.Body>
          <Card.Image
            src={img}
            width={"100%"}
            height={400}
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            position: "absolute",
            bgColor: "#fffff",
            // bgBlur: "#222222",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row align="center">
            <Col>
              <Text color="#000" size={16} css={{ letterSpacing: "$wide" }}>
                {name}
              </Text>
              <Text color="#000" size={12}>
                {role}
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end" align="center">
                <Icon
                  onClick={handler}
                  style={{
                    color: "#222222",
                    marginRight: ".5rem",
                    opacity: "0.75",
                    cursor: "pointer",
                  }}
                  width="25"
                  icon="akar-icons:info-fill"
                />
                <Button
                  auto
                  color="gradient"
                  onClick={() => window.open(link, "_blank")}
                >
                  <Text
                    css={{ color: "$accents1" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    View
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
      <Modal
        width="600px"
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={22} css={{ letterSpacing: "$widest" }}>
            About
            <Text b size={22} css={{ letterSpacing: "$widest" }}>
              {" "}
              Project
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <CardDetails details={details} />
        </Modal.Body>
        <Modal.Footer>
          <Button auto color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
