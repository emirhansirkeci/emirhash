import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "./ProjectCard";
import { Spacer, Text } from "@nextui-org/react";

export default function Slider(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Text h3 css={{ letterSpacing: 1 }}>
        My Recent Projects
      </Text>
      <Spacer y={1} />
      <Carousel
        responsive={responsive}
        swipeable={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        transitionDuration={600}
      >
        {props.projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            img={project.image.url}
            role={project.role}
            link={project.link}
            details={project.details}
          />
        ))}
      </Carousel>
    </>
  );
}
