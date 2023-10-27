import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import image from "../../../assets/about-page/hero/1.png";

const Hero = () => {
  return (
    <div className={styles.heroAbout}>
      <Container>
        <Row className="gy-5 align-items-lg-center">
          <Col xxl={6} md={12} lg={6}>
            <h1>ABOUT US</h1>
            <p>
              Women embrace beauty as a form of self-expression and empowerment,
              from cosmetics and skincare rituals to haircuts and wardrobe
              choices. The pursuit of beauty extends beyond outward appearance
              to include self-care and self-confidence. Women are reclaiming
              their narratives, redefining beauty on their terms, in a society
              where cultural standards frequently dictate ideals of beauty.
              Women embrace their inner and outer beauty, celebrating their
              talents, eccentricities, and flaws, and embracing the beauty of
              honesty and self-acceptance.
            </p>
          </Col>
          <Col xxl={6} md={12} lg={6}>
            <img src={image} alt="about-us-" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
