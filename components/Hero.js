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
      {/* <label className="typical">Backend Developer</label> */}
      <TypeAnimation />
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/emirhansirkeci/" target="_blank">
          <Icon icon="bi:linkedin" color="#0e76a8" width="30" height="30" />
        </a>
        <a href="https://github.com/justChargin/" target="_blank">
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
        {/* <a
          href="https://www.upwork.com/freelancers/~0114a7a5117a83e1e6"
          target="_blank"
        >
          <Icon icon="logos:upwork" color="#6fda44" width="100" />
        </a> */}
      </div>
      <div className={styles.aboutMe}>
        <p>
          My age is twenty one and my future plan is to be an expert at
          blockchain technologies. <br /> I'm using Azuki's well prepared
          ERC721A standart and Merkle Trees (for whitelist handling) to prepare
          modern and gas optimized contracts and give users a better mint
          experience.
        </p>
        {/* <p>
          I started to write smart contracts for NFT projects with solidity and
          nowadays im obsessed with web3.
          <br />
          My future plan is to be an expert at blockchain technologies.
        </p> */}
      </div>
      <Slider projects={props.projects} />
      <QuickLinks />
    </section>
  );
}
