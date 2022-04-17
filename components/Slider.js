import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Spacer, Card, Col, Row, Button, Text } from "@nextui-org/react";

export default function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      transitionDuration={600}
    >
      <div>
        <Card cover css={{ w: "100%" }}>
          <Card.Body>
            <Card.Image
              src="/lostdogs.png"
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
                  Lost Dogs NFT Project
                </Text>
                <Text color="#000" size={12}>
                  Back End Developer
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded color="gradient">
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
      <div>
        <Card cover css={{ w: "100%" }}>
          <Card.Body>
            <Card.Image
              src="/bee.png"
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
                  Bemuer NFT Project
                </Text>
                <Text color="#000" size={12}>
                  Back End Developer
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded color="gradient">
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
      <div>
        <Card cover css={{ w: "100%" }}>
          <Card.Body>
            <Card.Image
              src="/majime.png"
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
                  Majime NFT Project
                </Text>
                <Text color="#000" size={12}>
                  Back End Developer
                </Text>
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button flat auto rounded color="gradient">
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
    </Carousel>
  );
}
