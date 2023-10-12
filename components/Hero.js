import { Spacer, Text } from "@nextui-org/react";
import TypeAnimation from "./TypeAnimation";
import styles from "../styles/Hero.module.css";
import { Icon } from "@iconify/react";
import Slider from "./Slider";
import QuickLinks from "./QuickLinks";

export default function Hero(props) {
  return (
    <section className={styles.hero}>
      <div className={styles.greeting}>Hey 👋 I'm</div>
      <div className={styles.name}>
        <h1>Emirhash</h1>
      </div>
      <TypeAnimation />
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/emirhansirkeci/" target="_blank">
          <Icon icon="bi:linkedin" color="#0e76a8" width="30" height="30" />
        </a>
        <a href="https://github.com/emirhansirkeci/" target="_blank">
          <Icon
            icon="akar-icons:github-fill"
            color="black"
            width="30"
            height="30"
          />
        </a>
        <a href="https://twitter.com/emirhash" target="_blank">
          <Icon
            icon="icomoon-free:twitter"
            color="#1da1f2"
            width="30"
            height="30"
          />
        </a>
      </div>
      <div className={styles.aboutMe}>
        <p>
          I am developing various applications to improve myself, as well as
          preparing minting websites and smart contracts for NFT projects.
        </p>
      </div>
      <Slider projects={props.projects} />
      <QuickLinks />
    </section>
  );
}
