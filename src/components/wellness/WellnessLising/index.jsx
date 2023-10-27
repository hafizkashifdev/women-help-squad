import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import image1 from "../../../assets/wellness/listing/1.png";
import image2 from "../../../assets/wellness/listing/2.png";
import image3 from "../../../assets/wellness/listing/3.png";
import image4 from "../../../assets/wellness/listing/4.png";
import image5 from "../../../assets/wellness/listing/5.png";
import FoodCard from "../../common/FoodCard";

const WellnessListing = () => {
  const wellnessListing = [
    {
      title: "5 Ways To Get Rid of Period Bloating",
      image: image1,
      col: 4,
    },
    {
      title:
        "How Stress Can Shorten your life span and what you can do about it. ",
      image: image2,
      col: 4,
    },
    {
      title:
        "These Are All The Possible Reasons Yoga should be in your to do List.",
      image: image3,
      col: 4,
    },
    {
      title: "What Your Diet Says About you",
      image: image4,
      col: 6,
    },
    {
      title: "5 Reason Why Having Sex During Your Period Is Good For you",
      image: image5,
      col: 6,
    },
  ];
  return (
    <div className={styles.WellnessListing}>
      <Container>
        <Row className="gy-5 gy-md-3">
          {wellnessListing.map((item, index) => (
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

export default WellnessListing;
