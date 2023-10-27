import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import image from "../../../assets/beauty/listing/makeup.png";
import styles from "./styles.module.scss";

const MakeupItem = () => {
  return (
    <div className={styles.makeupItem}>
      <Container>
        <Row className="gy-5">
          <Col xl={6} lg={6} md={12} className="d-flex align-items-md-center ">
            <div className={`${styles.rightSide} `}>
              <img src={image} alt="makeup" />
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} className="d-flex">
            <div className={`${styles.leftSide} `}>
              <h2>Facial Care</h2>
              <p>
                {" "}
                Facial treatments offer various benefits, including deep
                cleansing, exfoliation, and hydration, which can help improve
                the skin's texture and appearance. These sessions often
                incorporate soothing massages and nourishing masks, promoting
                relaxation and reducing stress. Additionally, facial treatments
                are tailored to address specific skin concerns, such as acne,
                aging, or sensitivity, providing personalized care. The process
                leaves women feeling refreshed, confident, and with a radiant
                glow, making it a cherished self-care ritual for many.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MakeupItem;
