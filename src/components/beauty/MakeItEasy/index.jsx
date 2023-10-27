import React from "react";
import { Col, Row, Button, Container } from "react-bootstrap";

import styles from "./styles.module.scss";

const MakeItEasy = () => {
  const data = [
    {
      title: `Experience It All`,
      description: `Dive into the world of women's beauty in a vibrant and diverse landscape, reflecting the uniqueness and individuality of each woman.`,
    },
    {
      title: `Shopaholic`,
      description: `Love to shop or just explore/? No worries. everything and anything is available on the Women’s Help Squad Platform to make shopping fun.`,
    },
    {
      title: `A Girls Best Friend `,
      description: `Jewelries they say are a girls best friend just as shopping through numerous catalogue from the comfort of her home is. Enjoy an array of endless goodness.`,
    },
    {
      title: `Happy Women`,
      description: `Happy Women are with Women’s Help Squad. We achieve so much in record time because we got shops brought to us in style.`,
    },
  ];
  return (
    <div className={styles.makeItEasy}>
      <Container>
        <Row className="gy-5">
          <Col xl={6} lg={6} md={12} className="d-flex">
            <div className={styles.leftSide}>
              <h2>
                We Make It Easy For You To Find All Your beauty Products In One
                place.{" "}
              </h2>
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
          <Col xl={6} lg={6} md={12} className="d-flex">
            <div className={styles.rightSide}>
              {data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MakeItEasy;
