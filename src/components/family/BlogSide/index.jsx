import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import ActivityLogCard from "../../common/ActivityLogCard";
import { activityLog, heroListing } from "../../../data";
import arrow from "../../../assets/hero-section/bot-arrow.png";
import FeaturedCard2 from "../../common/FeatureCard2";
import CareerCard from "../../common/CareerCard";
import { careerListing } from "../../../careerData";
import image1 from "../../../assets/family/latest-blogs/1.png";
import image2 from "../../../assets/family/latest-blogs/2.png";

const BlogSide = () => {
  const familyData = [
    {
      title: "Empower Tomorrow: Family Planning Essentials",
      image: image1,
      button: true,
      buttonText: "Read More",
    },
    {
      title: "5 Iconic Women Who Were  Raised By single Mothers ",
      image: image2,
      button: true,
      buttonText: "Read More",
    },
  ];
  return (
    <div className={styles.BlogSide}>
      <Container>
        <h2>Our Latest blog</h2>
        <Row className="gy-5 justify-content-md-center">
          <Col xxl={5} lg={6} md={12}>
            <CareerCard
              item={familyData[0]}
              imageClaseName={styles.imageBox2}
              className={styles.CareerCard2}
            />
          </Col>
          <Col xxl={5} lg={6} md={12}>
            <CareerCard
              item={familyData[1]}
              imageClaseName={styles.imageBox2}
              className={styles.CareerCard2}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogSide;
