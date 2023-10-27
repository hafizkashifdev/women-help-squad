import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import image from "../../../assets/about-page/emp/1.png";

const Empowerment = () => {
  return (
    <div className={styles.emp}>
      <Container>
        <Row className="gy-5 align-items-lg-center">
          <Col xxl={6} md={12} lg={6}>
            <img src={image} alt="empowerment-beauty" />
          </Col>
          <Col xxl={6} md={12} lg={6}>
            <h2>
              Beauty Is An Empowerment Statement. Delve Into The World Of
              Infinite Beauty and Style
            </h2>
            <p>
              Finding all your beauty products and styles in one place is a
              dream and we at Women’s Help Squad got you covered.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Empowerment;
