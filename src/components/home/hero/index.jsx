import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import FeaturedCard from "../../common/FeatureCard";
import FeaturedCard2 from "../../common/FeatureCard2";
import { heroListing } from "../../../data";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <Row className="gy-5">
          <Col lg={12} xxl={8} className="d-flex">
            <FeaturedCard data={heroListing[0]} />
          </Col>
          <Col lg={12} xxl={4}>
            <FeaturedCard2 data={heroListing[1]} />
            <FeaturedCard2 data={heroListing[2]} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
