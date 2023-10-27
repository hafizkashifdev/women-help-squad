import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import girl from "../../../assets/hero-section/girl.png";
import image from "../../../assets/hero-section/catagory.svg";
import styles from "./styles.module.scss";
import useScreenResolution from "../../../hooks/useScreenResolution";

const HeroSection = ({ data, healthSection }) => {
  const { width } = useScreenResolution();
  const isMobile = width < 990;
  return (
    <div
      className={`${styles.HeroSection} ${
        healthSection ? styles.healthSection : ""
      }`}
    >
      <Container>
        <div className={styles.box}>
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
          <div className={styles.buttonSection}>
            <Button>Subscribe</Button>
            <Button>Learn More</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
