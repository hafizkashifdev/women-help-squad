import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import image1 from "../../../assets/sex-&-relationship/intimacy/1.png";
import image2 from "../../../assets/sex-&-relationship/intimacy/2.png";
import image3 from "../../../assets/sex-&-relationship/intimacy/3.png";
import image4 from "../../../assets/sex-&-relationship/intimacy/4.png";

const Intimacy = () => {
  const intimacy = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
  ];
  return (
    <div className={styles.intimacy}>
      <Container>
        <h2>INTIMACY</h2>
        <Row className="gy-5 gy-md-4">
          {intimacy.map((item, index) => (
            <Col key={index} lg={6} md={6} xs={12} className="d-flex">
              <img src={item.image} alt={"image" + index} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Intimacy;
