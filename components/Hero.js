import { Spacer, Card, Col, Row, Button, Text } from "@nextui-org/react";
import TypeAnimation from "./TypeAnimation";
import styles from "../styles/Hero.module.css";
import { Icon } from "@iconify/react";
import Slider from "./Slider";
import Contact from "./Contact";

export default function Hero(props) {
  return (
    <section className={styles.hero}>
      <div className={styles.greeting}>Hey 👋 I'm</div>
      <div className={styles.name}>
        <h1>Emirhash</h1>
      </div>
      {/* <label className="typical">Backend Developer</label> */}
      <TypeAnimation />
      <div className={styles.icons}>
        <a href="#">
          <Icon icon="bi:linkedin" color="#0e76a8" width="30" height="30" />
        </a>
        <a href="#">
          <Icon
            icon="akar-icons:github-fill"
            color="black"
            width="30"
            height="30"
          />
        </a>
        <a href="#">
          <Icon icon="logos:twitter" color="#6fda44" width="30" height="30" />
        </a>
        <a href="#">
          <Icon icon="logos:upwork" color="#6fda44" width="100" />
          {/* <Icon icon="simple-icons:upwork" color="#6fda44" width="30" /> */}
        </a>
      </div>
      <div className={styles.aboutMe}>
        <p>
          I started to write smartcontracts for NFT projects with solidity and
          nowadays im obsessed with web3.
          <br />
          My future plan is to be an expert at blockchain technologies.
        </p>
      </div>
      <div>
        <Text h3 css={{ letterSpacing: 1 }}>
          My Recent Projects
        </Text>
        <Spacer y={1} />
      </div>
      <Slider projects={props.projects} />
      <Contact />
    </section>
  );
}
