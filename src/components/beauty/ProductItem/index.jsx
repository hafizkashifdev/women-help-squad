import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import image from "../../../assets/beauty/listing/skin-care.png";
import styles from "./styles.module.scss";

const ProductItem = () => {
  return (
    <div className={styles.productItem}>
      <Container>
        <Row className="gy-5">
          <Col
            xl={6}
            lg={6}
            md={12}
            className="d-flex align-items-md-center order-2 order-lg-1"
          >
            <div className={`${styles.leftSide} `}>
              <p>
                Women embrace beauty as a form of self-expression and
                empowerment, from cosmetics and skincare rituals to haircuts and
                wardrobe choices. The pursuit of beauty extends beyond outward
                appearance to include self-care and self-confidence. Women are
                reclaiming their narratives, redefining beauty on their terms,
                in a society where cultural standards frequently dictate ideals
                of beauty. Women embrace their inner and outer beauty,
                celebrating their talents, eccentricities, and flaws, and
                embracing the beauty of honesty and self-acceptance.
              </p>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} className="d-flex order-1 order-lg-2">
            <div className={`${styles.rightSide} `}>
              <img src={image} alt="makeup" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductItem;
