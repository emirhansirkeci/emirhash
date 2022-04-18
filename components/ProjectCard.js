import { Spacer, Card, Col, Row, Button, Text } from "@nextui-org/react";

export default function ProjectCard({ name, role, img, link, id }) {
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
            bgBlur: "#ffffff",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text color="#000" size={16} css={{ letterSpacing: "$wide" }}>
                {name}
              </Text>
              <Text color="#000" size={12}>
                {role}
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
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
    </div>
  );
}
