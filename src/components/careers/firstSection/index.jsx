import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import image from "../../../assets/careers/hero/1.png";

const FirstSection = () => {
  return (
    <div className={styles.heroAbout}>
      <Container>
        <Row className="gy-5 align-items-lg-center">
          <Col xxl={6} md={12} lg={6}>
            <h2>Career</h2>
            <p>
              Get a chance to work with a global network of 800+ members, with
              offices in Malaysia, USA, Australia, Germany, and Pakistan. Using
              cutting-edge technologies.
            </p>
          </Col>
          <Col xxl={6} md={12} lg={6}>
            <img src={image} alt="Carrers" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FirstSection;
