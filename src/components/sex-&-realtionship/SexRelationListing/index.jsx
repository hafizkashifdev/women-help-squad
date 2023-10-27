import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import image1 from "../../../assets/sex-&-relationship/listing/1.png";
import image2 from "../../../assets/sex-&-relationship/listing/2.png";
import image3 from "../../../assets/sex-&-relationship/listing/3.png";
import image4 from "../../../assets/sex-&-relationship/listing/4.png";
import image5 from "../../../assets/sex-&-relationship/listing/5.png";
import FoodCard from "../../common/FoodCard";

const SexRelationListing = () => {
  const sexRelationListing = [
    {
      title: "What Your Choice of a Partner Says About you",
      image: image1,
      col: 4,
    },
    {
      title: "How Stress Can Increase Your Period Pain ",
      image: image2,
      col: 4,
    },
    {
      title: "Same Sex Couples Can adopt Just Fine, Here Is How ",
      image: image3,
      col: 4,
    },
    {
      title: "Making Time To Date Can Help Curb Divorce Rate. Here is how ",
      image: image4,
      col: 6,
    },
    {
      title: "Why Dating Your Best Friend Is Better",
      image: image5,
      col: 6,
    },
  ];
  return (
    <div className={styles.SexRelationListing}>
      <Container>
        <Row className="gy-5 gy-md-3">
          {sexRelationListing.map((item, index) => (
            <Col
              key={index}
              xxl={item.col}
              xl={item.col}
              lg={6}
              md={12}
              className="d-flex"
            >
              <FoodCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SexRelationListing;
