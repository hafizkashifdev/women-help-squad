import React from "react";
import { Row, Container, Col } from "react-bootstrap";

import styles from "./styles.module.scss";
import { careerListing } from "../../../careerData";
import CareerCard from "../../common/CareerCard";

const ArticleListing = ({ data }) => {
  return (
    <div className={styles.ArticleListing}>
      <Container>
        <h2>Latest Articles</h2>
        <Row className="gy-5 gy-md-3">
          {careerListing.map((item, id) => (
            <Col xxl={3} xl={4} md={6} xs={12} key={id} className="d-flex">
              <CareerCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ArticleListing;
