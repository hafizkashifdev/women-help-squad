import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { heroListing } from "../../../data";
import FeaturedCard2 from "../../common/FeatureCard2";

const BlogSide = () => {
  return (
    <div className={styles.BlogSide}>
      <Container>
        <h2>Our Latest blog</h2>
        <Row className="gy-5 justify-content-md-center">
          <Col xxl={5} lg={6} md={12}>
            <FeaturedCard2 data={heroListing[1]} />
          </Col>
          <Col xxl={5} lg={6} md={12}>
            <FeaturedCard2 data={heroListing[2]} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogSide;
